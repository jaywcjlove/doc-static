define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDesignSystem = void 0;
    const el = (str, elementType, container) => {
        const el = document.createElement(elementType);
        el.innerHTML = str;
        container.appendChild(el);
        return el;
    };
    // The Playground Plugin design system
    const createDesignSystem = (sandbox) => {
        const ts = sandbox.ts;
        return (container) => {
            const clear = () => {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            };
            let decorations = [];
            let decorationLock = false;
            const clearDeltaDecorators = (force) => {
                // console.log(`clearing, ${decorations.length}}`)
                // console.log(sandbox.editor.getModel()?.getAllDecorations())
                if (force) {
                    sandbox.editor.deltaDecorations(decorations, []);
                    decorations = [];
                    decorationLock = false;
                }
                else if (!decorationLock) {
                    sandbox.editor.deltaDecorations(decorations, []);
                    decorations = [];
                }
            };
            /** Lets a HTML Element hover to highlight code in the editor  */
            const addEditorHoverToElement = (element, pos, config) => {
                element.onmouseenter = () => {
                    if (!decorationLock) {
                        const model = sandbox.getModel();
                        const start = model.getPositionAt(pos.start);
                        const end = model.getPositionAt(pos.end);
                        decorations = sandbox.editor.deltaDecorations(decorations, [
                            {
                                range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
                                options: { inlineClassName: "highlight-" + config.type },
                            },
                        ]);
                    }
                };
                element.onmouseleave = () => {
                    clearDeltaDecorators();
                };
            };
            const declareRestartRequired = (i) => {
                if (document.getElementById("restart-required"))
                    return;
                const localize = i || window.i;
                const li = document.createElement("li");
                li.id = "restart-required";
                const a = document.createElement("a");
                a.style.color = "#c63131";
                a.textContent = localize("play_sidebar_options_restart_required");
                a.href = "#";
                a.onclick = () => document.location.reload();
                const nav = document.getElementsByClassName("navbar-right")[0];
                li.appendChild(a);
                nav.insertBefore(li, nav.firstChild);
            };
            const localStorageOption = (setting) => {
                // Think about this as being something which you want enabled by default and can suppress whether
                // it should do something.
                const invertedLogic = setting.emptyImpliesEnabled;
                const li = document.createElement("li");
                const label = document.createElement("label");
                const split = setting.oneline ? "" : "<br/>";
                label.innerHTML = `<span>${setting.display}</span>${split}${setting.blurb}`;
                const key = setting.flag;
                const input = document.createElement("input");
                input.type = "checkbox";
                input.id = key;
                input.checked = invertedLogic ? !localStorage.getItem(key) : !!localStorage.getItem(key);
                input.onchange = () => {
                    if (input.checked) {
                        if (!invertedLogic)
                            localStorage.setItem(key, "true");
                        else
                            localStorage.removeItem(key);
                    }
                    else {
                        if (invertedLogic)
                            localStorage.setItem(key, "true");
                        else
                            localStorage.removeItem(key);
                    }
                    if (setting.onchange) {
                        setting.onchange(!!localStorage.getItem(key));
                    }
                    if (setting.requireRestart) {
                        declareRestartRequired();
                    }
                };
                label.htmlFor = input.id;
                li.appendChild(input);
                li.appendChild(label);
                container.appendChild(li);
                return li;
            };
            const button = (settings) => {
                const join = document.createElement("input");
                join.type = "button";
                join.value = settings.label;
                if (settings.onclick) {
                    join.onclick = settings.onclick;
                }
                container.appendChild(join);
                return join;
            };
            const code = (code) => {
                const createCodePre = document.createElement("pre");
                createCodePre.setAttribute("tabindex", "0");
                const codeElement = document.createElement("code");
                codeElement.innerHTML = code;
                createCodePre.appendChild(codeElement);
                container.appendChild(createCodePre);
                return codeElement;
            };
            const showEmptyScreen = (message) => {
                clear();
                const noErrorsMessage = document.createElement("div");
                noErrorsMessage.id = "empty-message-container";
                const messageDiv = document.createElement("div");
                messageDiv.textContent = message;
                messageDiv.classList.add("empty-plugin-message");
                noErrorsMessage.appendChild(messageDiv);
                container.appendChild(noErrorsMessage);
                return noErrorsMessage;
            };
            const createTabBar = () => {
                const tabBar = document.createElement("div");
                tabBar.classList.add("playground-plugin-tabview");
                /** Support left/right in the tab bar for accessibility */
                let tabFocus = 0;
                tabBar.addEventListener("keydown", e => {
                    const tabs = tabBar.querySelectorAll('[role="tab"]');
                    // Move right
                    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                        tabs[tabFocus].setAttribute("tabindex", "-1");
                        if (e.key === "ArrowRight") {
                            tabFocus++;
                            // If we're at the end, go to the start
                            if (tabFocus >= tabs.length) {
                                tabFocus = 0;
                            }
                            // Move left
                        }
                        else if (e.key === "ArrowLeft") {
                            tabFocus--;
                            // If we're at the start, move to the end
                            if (tabFocus < 0) {
                                tabFocus = tabs.length - 1;
                            }
                        }
                        tabs[tabFocus].setAttribute("tabindex", "0");
                        tabs[tabFocus].focus();
                    }
                });
                container.appendChild(tabBar);
                return tabBar;
            };
            const createTabButton = (text) => {
                const element = document.createElement("button");
                element.setAttribute("role", "tab");
                element.textContent = text;
                return element;
            };
            const listDiags = (model, diags) => {
                const errorUL = document.createElement("ul");
                errorUL.className = "compiler-diagnostics";
                errorUL.onmouseleave = ev => {
                    clearDeltaDecorators();
                };
                container.appendChild(errorUL);
                diags.forEach(diag => {
                    const li = document.createElement("li");
                    li.classList.add("diagnostic");
                    switch (diag.category) {
                        case 0:
                            li.classList.add("warning");
                            break;
                        case 1:
                            li.classList.add("error");
                            break;
                        case 2:
                            li.classList.add("suggestion");
                            break;
                        case 3:
                            li.classList.add("message");
                            break;
                    }
                    if (typeof diag === "string") {
                        li.textContent = diag;
                    }
                    else {
                        li.textContent = sandbox.ts.flattenDiagnosticMessageText(diag.messageText, "\n", 4);
                    }
                    errorUL.appendChild(li);
                    if (diag.start && diag.length) {
                        addEditorHoverToElement(li, { start: diag.start, end: diag.start + diag.length }, { type: "error" });
                    }
                    li.onclick = () => {
                        if (diag.start && diag.length) {
                            const start = model.getPositionAt(diag.start);
                            sandbox.editor.revealLine(start.lineNumber);
                            const end = model.getPositionAt(diag.start + diag.length);
                            decorations = sandbox.editor.deltaDecorations(decorations, [
                                {
                                    range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),
                                    options: { inlineClassName: "error-highlight", isWholeLine: true },
                                },
                            ]);
                            decorationLock = true;
                            setTimeout(() => {
                                decorationLock = false;
                                sandbox.editor.deltaDecorations(decorations, []);
                            }, 300);
                        }
                    };
                });
                return errorUL;
            };
            const showOptionList = (options, style) => {
                const ol = document.createElement("ol");
                ol.className = style.style === "separated" ? "playground-options" : "playground-options tight";
                options.forEach(option => {
                    if (style.style === "rows")
                        option.oneline = true;
                    if (style.requireRestart)
                        option.requireRestart = true;
                    const settingButton = localStorageOption(option);
                    ol.appendChild(settingButton);
                });
                container.appendChild(ol);
            };
            const createASTTree = (node, settings) => {
                const autoOpen = !settings || !settings.closedByDefault;
                const div = document.createElement("div");
                div.className = "ast";
                const infoForNode = (node) => {
                    const name = ts.SyntaxKind[node.kind];
                    return {
                        name,
                    };
                };
                const renderLiteralField = (key, value, info) => {
                    const li = document.createElement("li");
                    const typeofSpan = `ast-node-${typeof value}`;
                    let suffix = "";
                    if (key === "kind") {
                        suffix = ` (SyntaxKind.${info.name})`;
                    }
                    li.innerHTML = `${key}: <span class='${typeofSpan}'>${value}</span>${suffix}`;
                    return li;
                };
                const renderSingleChild = (key, value, depth) => {
                    const li = document.createElement("li");
                    li.innerHTML = `${key}: `;
                    renderItem(li, value, depth + 1);
                    return li;
                };
                const renderManyChildren = (key, nodes, depth) => {
                    const childers = document.createElement("div");
                    childers.classList.add("ast-children");
                    const li = document.createElement("li");
                    li.innerHTML = `${key}: [<br/>`;
                    childers.appendChild(li);
                    nodes.forEach(node => {
                        renderItem(childers, node, depth + 1);
                    });
                    const liEnd = document.createElement("li");
                    liEnd.innerHTML += "]";
                    childers.appendChild(liEnd);
                    return childers;
                };
                const renderItem = (parentElement, node, depth) => {
                    const itemDiv = document.createElement("div");
                    parentElement.appendChild(itemDiv);
                    itemDiv.className = "ast-tree-start";
                    itemDiv.attributes.setNamedItem;
                    // @ts-expect-error
                    itemDiv.dataset.pos = node.pos;
                    // @ts-expect-error
                    itemDiv.dataset.end = node.end;
                    // @ts-expect-error
                    itemDiv.dataset.depth = depth;
                    if (depth === 0 && autoOpen)
                        itemDiv.classList.add("open");
                    const info = infoForNode(node);
                    const a = document.createElement("a");
                    a.classList.add("node-name");
                    a.textContent = info.name;
                    itemDiv.appendChild(a);
                    a.onclick = _ => a.parentElement.classList.toggle("open");
                    addEditorHoverToElement(a, { start: node.pos, end: node.end }, { type: "info" });
                    const properties = document.createElement("ul");
                    properties.className = "ast-tree";
                    itemDiv.appendChild(properties);
                    Object.keys(node).forEach(field => {
                        if (typeof field === "function")
                            return;
                        if (field === "parent" || field === "flowNode")
                            return;
                        const value = node[field];
                        if (typeof value === "object" && Array.isArray(value) && value[0] && "pos" in value[0] && "end" in value[0]) {
                            //  Is an array of Nodes
                            properties.appendChild(renderManyChildren(field, value, depth));
                        }
                        else if (typeof value === "object" && "pos" in value && "end" in value) {
                            // Is a single child property
                            properties.appendChild(renderSingleChild(field, value, depth));
                        }
                        else {
                            properties.appendChild(renderLiteralField(field, value, info));
                        }
                    });
                };
                renderItem(div, node, 0);
                container.append(div);
                return div;
            };
            const createTextInput = (config) => {
                const form = document.createElement("form");
                const textbox = document.createElement("input");
                textbox.id = config.id;
                textbox.placeholder = config.placeholder;
                textbox.autocomplete = "off";
                textbox.autocapitalize = "off";
                textbox.spellcheck = false;
                // @ts-ignore
                textbox.autocorrect = "off";
                const localStorageKey = "playground-input-" + config.id;
                if (config.value) {
                    textbox.value = config.value;
                }
                else if (config.keepValueAcrossReloads) {
                    const storedQuery = localStorage.getItem(localStorageKey);
                    if (storedQuery)
                        textbox.value = storedQuery;
                }
                if (config.isEnabled) {
                    const enabled = config.isEnabled(textbox);
                    textbox.classList.add(enabled ? "good" : "bad");
                }
                else {
                    textbox.classList.add("good");
                }
                const textUpdate = (e) => {
                    const href = e.target.value.trim();
                    if (config.keepValueAcrossReloads) {
                        localStorage.setItem(localStorageKey, href);
                    }
                    if (config.onChanged)
                        config.onChanged(e.target.value, textbox);
                };
                textbox.style.width = "90%";
                textbox.style.height = "2rem";
                textbox.addEventListener("input", textUpdate);
                // Suppress the enter key
                textbox.onkeydown = (evt) => {
                    if (evt.key === "Enter" || evt.code === "Enter") {
                        config.onEnter(textbox.value, textbox);
                        return false;
                    }
                };
                form.appendChild(textbox);
                container.appendChild(form);
                return form;
            };
            const createSubDesignSystem = () => {
                const div = document.createElement("div");
                container.appendChild(div);
                const ds = (0, exports.createDesignSystem)(sandbox)(div);
                return ds;
            };
            return {
                /** The element of the design system */
                container,
                /** Clear the sidebar */
                clear,
                /** Present code in a pre > code  */
                code,
                /** Ideally only use this once, and maybe even prefer using subtitles everywhere */
                title: (title) => el(title, "h3", container),
                /** Used to denote sections, give info etc */
                subtitle: (subtitle) => el(subtitle, "h4", container),
                /** Used to show a paragraph */
                p: (subtitle) => el(subtitle, "p", container),
                /** When you can't do something, or have nothing to show */
                showEmptyScreen,
                /**
                 * Shows a list of hoverable, and selectable items (errors, highlights etc) which have code representation.
                 * The type is quite small, so it should be very feasible for you to massage other data to fit into this function
                 */
                listDiags,
                /** Lets you remove the hovers from listDiags etc */
                clearDeltaDecorators,
                /** Shows a single option in local storage (adds an li to the container BTW) */
                localStorageOption,
                /** Uses localStorageOption to create a list of options */
                showOptionList,
                /** Shows a full-width text input */
                createTextInput,
                /** Renders an AST tree */
                createASTTree,
                /** Creates an input button */
                button,
                /** Used to re-create a UI like the tab bar at the top of the plugins section */
                createTabBar,
                /** Used with createTabBar to add buttons */
                createTabButton,
                /** A general "restart your browser" message  */
                declareRestartRequired,
                /** Create a new Design System instance and add it to the container. You'll need to cast
                 * this after usage, because otherwise the type-system circularly references itself
                 */
                createSubDesignSystem,
            };
        };
    };
    exports.createDesignSystem = createDesignSystem;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGVzaWduU3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGxheWdyb3VuZC9zcmMvZHMvY3JlYXRlRGVzaWduU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFtQkEsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFXLEVBQUUsV0FBbUIsRUFBRSxTQUFrQixFQUFFLEVBQUU7UUFDbEUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM5QyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtRQUNsQixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQyxDQUFBO0lBSUQsc0NBQXNDO0lBQy9CLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQUU7UUFDckQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUVyQixPQUFPLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQzVCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDakIsT0FBTyxTQUFTLENBQUMsVUFBVSxFQUFFO29CQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtpQkFDNUM7WUFDSCxDQUFDLENBQUE7WUFDRCxJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUE7WUFDOUIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFBO1lBRTFCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtnQkFDNUMsa0RBQWtEO2dCQUNsRCw4REFBOEQ7Z0JBQzlELElBQUksS0FBSyxFQUFFO29CQUNULE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO29CQUNoRCxXQUFXLEdBQUcsRUFBRSxDQUFBO29C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aEQsc0JBQXNCO2dCQUN0Qjs7bUJBRUc7Z0JBQ0gscUJBQXFCO2FBQ3RCLENBQUE7UUFDSCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUE7SUF0ZVksUUFBQSxrQkFBa0Isc0JBc2U5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuZGJveCB9IGZyb20gXCJAdHlwZXNjcmlwdC9zYW5kYm94XCJcbmltcG9ydCB0eXBlIHsgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiwgTm9kZSB9IGZyb20gXCJ0eXBlc2NyaXB0XCJcblxuZXhwb3J0IHR5cGUgTG9jYWxTdG9yYWdlT3B0aW9uID0ge1xuICBibHVyYjogc3RyaW5nXG4gIGZsYWc6IHN0cmluZ1xuICBkaXNwbGF5OiBzdHJpbmdcblxuICBlbXB0eUltcGxpZXNFbmFibGVkPzogdHJ1ZVxuICBvbmVsaW5lPzogdHJ1ZVxuICByZXF1aXJlUmVzdGFydD86IHRydWVcbiAgb25jaGFuZ2U/OiAobmV3VmFsdWU6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uc0xpc3RDb25maWcgPSB7XG4gIHN0eWxlOiBcInNlcGFyYXRlZFwiIHwgXCJyb3dzXCJcbiAgcmVxdWlyZVJlc3RhcnQ/OiB0cnVlXG59XG5cbmNvbnN0IGVsID0gKHN0cjogc3RyaW5nLCBlbGVtZW50VHlwZTogc3RyaW5nLCBjb250YWluZXI6IEVsZW1lbnQpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKVxuICBlbC5pbm5lckhUTUwgPSBzdHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKVxuICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IHR5cGUgRGVzaWduU3lzdGVtID0gUmV0dXJuVHlwZTxSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVEZXNpZ25TeXN0ZW0+PlxuXG4vLyBUaGUgUGxheWdyb3VuZCBQbHVnaW4gZGVzaWduIHN5c3RlbVxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlc2lnblN5c3RlbSA9IChzYW5kYm94OiBTYW5kYm94KSA9PiB7XG4gIGNvbnN0IHRzID0gc2FuZGJveC50c1xuXG4gIHJldHVybiAoY29udGFpbmVyOiBFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGVjb3JhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICBsZXQgZGVjb3JhdGlvbkxvY2sgPSBmYWxzZVxuXG4gICAgY29uc3QgY2xlYXJEZWx0YURlY29yYXRvcnMgPSAoZm9yY2U/OiB0cnVlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgY2xlYXJpbmcsICR7ZGVjb3JhdGlvbnMubGVuZ3RofX1gKVxuICAgICAgLy8gY29uc29sZS5sb2coc2FuZGJveC5lZGl0b3IuZ2V0TW9kZWwoKT8uZ2V0QWxsRGVjb3JhdGlvbnMoKSlcbiAgICAgIGlmIChmb3JjZSkge1xuICAgICAgICBzYW5kYm94LmVkaXRvci5kZWx0YURlY29yYXRpb25zKGRlY29yYXRpb25zLCBbXSlcbiAgICAgICAgZGVjb3JhdGlvbnMgPSBbXVxuICAgICAgICBkZWNvcmF0aW9uTG9jayA9IGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKCFkZWNvcmF0aW9uTG9jaykge1xuICAgICAgICBzYW5kYm94LmVkaXRvci5kZWx0YURlY29yYXRpb25zKGRlY29yYXRpb25zLCBbXSlcbiAgICAgICAgZGVjb3JhdGlvbnMgPSBbXVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBMZXRzIGEgSFRNTCBFbGVtZW50IGhvdmVyIHRvIGhpZ2hsaWdodCBjb2RlIGluIHRoZSBlZGl0b3IgICovXG4gICAgY29uc3QgYWRkRWRpdG9ySG92ZXJUb0VsZW1lbnQgPSAoXG4gICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgIHBvczogeyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9LFxuICAgICAgY29uZmlnOiB7IHR5cGU6IFwiZXJyb3JcIiB8IFwiaW5mb1wiIH1cbiAgICApID0+IHtcbiAgICAgIGVsZW1lbnQub25tb3VzZWVudGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRlY29yYXRpb25Mb2NrKSB7XG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBzYW5kYm94LmdldE1vZGVsKClcbiAgICAgICAgICBjb25zdCBzdGFydCA9IG1vZGVsLmdldFBvc2l0aW9uQXQocG9zLnN0YXJ0KVxuICAgICAgICAgIGNvbnN0IGVuZCA9IG1vZGVsLmdldFBvc2l0aW9uQXQocG9zLmVuZClcblxuICAgICAgICAgIGRlY29yYXRpb25zID0gc2FuZGJveC5lZGl0b3IuZGVsdGFEZWNvcmF0aW9ucyhkZWNvcmF0aW9ucywgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByYW5nZTogbmV3IHNhbmRib3gubW9uYWNvLlJhbmdlKHN0YXJ0LmxpbmVOdW1iZXIsIHN0YXJ0LmNvbHVtbiwgZW5kLmxpbmVOdW1iZXIsIGVuZC5jb2x1bW4pLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7IGlubGluZUNsYXNzTmFtZTogXCJoaWdobGlnaHQtXCIgKyBjb25maWcudHlwZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQub25tb3VzZWxlYXZlID0gKCkgPT4ge1xuICAgICAgICBjbGVhckRlbHRhRGVjb3JhdG9ycygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVjbGFyZVJlc3RhcnRSZXF1aXJlZCA9IChpPzogKGtleTogc3RyaW5nKSA9PiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnQtcmVxdWlyZWRcIikpIHJldHVyblxuICAgICAgY29uc3QgbG9jYWxpemUgPSBpIHx8ICh3aW5kb3cgYXMgYW55KS5pXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgbGkuaWQgPSBcInJlc3RhcnQtcmVxdWlyZWRcIlxuXG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgIGEuc3R5bGUuY29sb3IgPSBcIiNjNjMxMzFcIlxuICAgICAgYS50ZXh0Q29udGVudCA9IGxvY2FsaXplKFwicGxheV9zaWRlYmFyX29wdGlvbnNfcmVzdGFydF9yZXF1aXJlZFwiKVxuICAgICAgYS5ocmVmID0gXCIjXCJcbiAgICAgIGEub25jbGljayA9ICgpID0+IGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXG5cbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXItcmlnaHRcIilbMF1cbiAgICAgIGxpLmFwcGVuZENoaWxkKGEpXG4gICAgICBuYXYuaW5zZXJ0QmVmb3JlKGxpLCBuYXYuZmlyc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VPcHRpb24gPSAoc2V0dGluZzogTG9jYWxTdG9yYWdlT3B0aW9uKSA9PiB7XG4gICAgICAvLyBUaGluayBhYm91dCB0aGlzIGFzIGJlaW5nIHNvbWV0aGluZyB3aGljaCB5b3Ugd2FudCBlbmFibGVkIGJ5IGRlZmF1bHQgYW5kIGNhbiBzdXBwcmVzcyB3aGV0aGVyXG4gICAgICAvLyBpdCBzaG91bGQgZG8gc29tZXRoaW5nLlxuICAgICAgY29uc3QgaW52ZXJ0ZWRMb2dpYyA9IHNldHRpbmcuZW1wdHlJbXBsaWVzRW5hYmxlZFxuXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgIGNvbnN0IHNwbGl0ID0gc2V0dGluZy5vbmVsaW5lID8gXCJcIiA6IFwiPGJyLz5cIlxuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYDxzcGFuPiR7c2V0dGluZy5kaXNwbGF5fTwvc3Bhbj4ke3NwbGl0fSR7c2V0dGluZy5ibHVyYn1gXG5cbiAgICAgIGNvbnN0IGtleSA9IHNldHRpbmcuZmxhZ1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICAgIGlucHV0LmlkID0ga2V5XG5cbiAgICAgIGlucHV0LmNoZWNrZWQgPSBpbnZlcnRlZExvZ2ljID8gIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgOiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcblxuICAgICAgaW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKCFpbnZlcnRlZExvZ2ljKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIFwidHJ1ZVwiKVxuICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpbnZlcnRlZExvZ2ljKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIFwidHJ1ZVwiKVxuICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcub25jaGFuZ2UpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uY2hhbmdlKCEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZy5yZXF1aXJlUmVzdGFydCkge1xuICAgICAgICAgIGRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxhYmVsLmh0bWxGb3IgPSBpbnB1dC5pZFxuXG4gICAgICBsaS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgIGxpLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKVxuICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gKHNldHRpbmdzOiB7IGxhYmVsOiBzdHJpbmc7IG9uY2xpY2s/OiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgam9pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgam9pbi50eXBlID0gXCJidXR0b25cIlxuICAgICAgam9pbi52YWx1ZSA9IHNldHRpbmdzLmxhYmVsXG4gICAgICBpZiAoc2V0dGluZ3Mub25jbGljaykge1xuICAgICAgICBqb2luLm9uY2xpY2sgPSBzZXR0aW5ncy5vbmNsaWNrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChqb2luKVxuICAgICAgcmV0dXJuIGpvaW5cbiAgICB9XG5cbiAgICBjb25zdCBjb2RlID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlQ29kZVByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIilcbiAgICAgIGNyZWF0ZUNvZGVQcmUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpXG4gICAgICBjb25zdCBjb2RlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpXG5cbiAgICAgIGNvZGVFbGVtZW50LmlubmVySFRNTCA9IGNvZGVcblxuICAgICAgY3JlYXRlQ29kZVByZS5hcHBlbmRDaGlsZChjb2RlRWxlbWVudClcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb2RlUHJlKVxuXG4gICAgICByZXR1cm4gY29kZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RW1wdHlTY3JlZW4gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICBjbGVhcigpXG5cbiAgICAgIGNvbnN0IG5vRXJyb3JzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIG5vRXJyb3JzTWVzc2FnZS5pZCA9IFwiZW1wdHktbWVzc2FnZS1jb250YWluZXJcIlxuXG4gICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImVtcHR5LXBsdWdpbi1tZXNzYWdlXCIpXG4gICAgICBub0Vycm9yc01lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZURpdilcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vRXJyb3JzTWVzc2FnZSlcbiAgICAgIHJldHVybiBub0Vycm9yc01lc3NhZ2VcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYWJCYXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0YWJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICB0YWJCYXIuY2xhc3NMaXN0LmFkZChcInBsYXlncm91bmQtcGx1Z2luLXRhYnZpZXdcIilcblxuICAgICAgLyoqIFN1cHBvcnQgbGVmdC9yaWdodCBpbiB0aGUgdGFiIGJhciBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuICAgICAgbGV0IHRhYkZvY3VzID0gMFxuICAgICAgdGFiQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICBjb25zdCB0YWJzID0gdGFiQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcbiAgICAgICAgLy8gTW92ZSByaWdodFxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiIHx8IGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKVxuICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRhYkZvY3VzKytcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgdGFiRm9jdXMtLVxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIilcbiAgICAgICAgICA7KHRhYnNbdGFiRm9jdXNdIGFzIGFueSkuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQmFyKVxuICAgICAgcmV0dXJuIHRhYkJhclxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhYkJ1dHRvbiA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0YWJcIilcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGxpc3REaWFncyA9IChtb2RlbDogaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5lZGl0b3IuSVRleHRNb2RlbCwgZGlhZ3M6IERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb25bXSkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgZXJyb3JVTC5jbGFzc05hbWUgPSBcImNvbXBpbGVyLWRpYWdub3N0aWNzXCJcbiAgICAgIGVycm9yVUwub25tb3VzZWxlYXZlID0gZXYgPT4ge1xuICAgICAgICBjbGVhckRlbHRhRGVjb3JhdG9ycygpXG4gICAgICB9XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JVTClcblxuICAgICAgZGlhZ3MuZm9yRWFjaChkaWFnID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRpYWdub3N0aWNcIilcbiAgICAgICAgc3dpdGNoIChkaWFnLmNhdGVnb3J5KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIndhcm5pbmdcIilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJzdWdnZXN0aW9uXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkaWFnID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBkaWFnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBzYW5kYm94LnRzLmZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoZGlhZy5tZXNzYWdlVGV4dCwgXCJcXG5cIiwgNClcbiAgICAgICAgfVxuICAgICAgICBlcnJvclVMLmFwcGVuZENoaWxkKGxpKVxuXG4gICAgICAgIGlmIChkaWFnLnN0YXJ0ICYmIGRpYWcubGVuZ3RoKSB7XG4gICAgICAgICAgYWRkRWRpdG9ySG92ZXJUb0VsZW1lbnQobGksIHsgc3RhcnQ6IGRpYWcuc3RhcnQsIGVuZDogZGlhZy5zdGFydCArIGRpYWcubGVuZ3RoIH0sIHsgdHlwZTogXCJlcnJvclwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChkaWFnLnN0YXJ0ICYmIGRpYWcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZGlhZy5zdGFydClcbiAgICAgICAgICAgIHNhbmRib3guZWRpdG9yLnJldmVhbExpbmUoc3RhcnQubGluZU51bWJlcilcblxuICAgICAgICAgICAgY29uc3QgZW5kID0gbW9kZWwuZ2V0UG9zaXRpb25BdChkaWFnLnN0YXJ0ICsgZGlhZy5sZW5ndGgpXG4gICAgICAgICAgICBkZWNvcmF0aW9ucyA9IHNhbmRib3guZWRpdG9yLmRlbHRhRGVjb3JhdGlvbnMoZGVjb3JhdGlvbnMsIFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhbmdlOiBuZXcgc2FuZGJveC5tb25hY28uUmFuZ2Uoc3RhcnQubGluZU51bWJlciwgc3RhcnQuY29sdW1uLCBlbmQubGluZU51bWJlciwgZW5kLmNvbHVtbiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogeyBpbmxpbmVDbGFzc05hbWU6IFwiZXJyb3ItaGlnaGxpZ2h0XCIsIGlzV2hvbGVMaW5lOiB0cnVlIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICBkZWNvcmF0aW9uTG9jayA9IHRydWVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBkZWNvcmF0aW9uTG9jayA9IGZhbHNlXG4gICAgICAgICAgICAgIHNhbmRib3guZWRpdG9yLmRlbHRhRGVjb3JhdGlvbnMoZGVjb3JhdGlvbnMsIFtdKVxuICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBlcnJvclVMXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd09wdGlvbkxpc3QgPSAob3B0aW9uczogTG9jYWxTdG9yYWdlT3B0aW9uW10sIHN0eWxlOiBPcHRpb25zTGlzdENvbmZpZykgPT4ge1xuICAgICAgY29uc3Qgb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIilcbiAgICAgIG9sLmNsYXNzTmFtZSA9IHN0eWxlLnN0eWxlID09PSBcInNlcGFyYXRlZFwiID8gXCJwbGF5Z3JvdW5kLW9wdGlvbnNcIiA6IFwicGxheWdyb3VuZC1vcHRpb25zIHRpZ2h0XCJcblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChzdHlsZS5zdHlsZSA9PT0gXCJyb3dzXCIpIG9wdGlvbi5vbmVsaW5lID0gdHJ1ZVxuICAgICAgICBpZiAoc3R5bGUucmVxdWlyZVJlc3RhcnQpIG9wdGlvbi5yZXF1aXJlUmVzdGFydCA9IHRydWVcblxuICAgICAgICBjb25zdCBzZXR0aW5nQnV0dG9uID0gbG9jYWxTdG9yYWdlT3B0aW9uKG9wdGlvbilcbiAgICAgICAgb2wuYXBwZW5kQ2hpbGQoc2V0dGluZ0J1dHRvbilcbiAgICAgIH0pXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvbClcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBU1RUcmVlID0gKG5vZGU6IE5vZGUsIHNldHRpbmdzPzogeyBjbG9zZWRCeURlZmF1bHQ/OiB0cnVlIH0pID0+IHtcbiAgICAgIGNvbnN0IGF1dG9PcGVuID0gIXNldHRpbmdzIHx8ICFzZXR0aW5ncy5jbG9zZWRCeURlZmF1bHRcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiYXN0XCJcblxuICAgICAgY29uc3QgaW5mb0Zvck5vZGUgPSAobm9kZTogTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gdHMuU3ludGF4S2luZFtub2RlLmtpbmRdXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHR5cGUgTm9kZUluZm8gPSBSZXR1cm5UeXBlPHR5cGVvZiBpbmZvRm9yTm9kZT5cblxuICAgICAgY29uc3QgcmVuZGVyTGl0ZXJhbEZpZWxkID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpbmZvOiBOb2RlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBjb25zdCB0eXBlb2ZTcGFuID0gYGFzdC1ub2RlLSR7dHlwZW9mIHZhbHVlfWBcbiAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJraW5kXCIpIHtcbiAgICAgICAgICBzdWZmaXggPSBgIChTeW50YXhLaW5kLiR7aW5mby5uYW1lfSlgXG4gICAgICAgIH1cbiAgICAgICAgbGkuaW5uZXJIVE1MID0gYCR7a2V5fTogPHNwYW4gY2xhc3M9JyR7dHlwZW9mU3Bhbn0nPiR7dmFsdWV9PC9zcGFuPiR7c3VmZml4fWBcbiAgICAgICAgcmV0dXJuIGxpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbmRlclNpbmdsZUNoaWxkID0gKGtleTogc3RyaW5nLCB2YWx1ZTogTm9kZSwgZGVwdGg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsaS5pbm5lckhUTUwgPSBgJHtrZXl9OiBgXG5cbiAgICAgICAgcmVuZGVySXRlbShsaSwgdmFsdWUsIGRlcHRoICsgMSlcbiAgICAgICAgcmV0dXJuIGxpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbmRlck1hbnlDaGlsZHJlbiA9IChrZXk6IHN0cmluZywgbm9kZXM6IE5vZGVbXSwgZGVwdGg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2hpbGRlcnMuY2xhc3NMaXN0LmFkZChcImFzdC1jaGlsZHJlblwiKVxuXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGAke2tleX06IFs8YnIvPmBcbiAgICAgICAgY2hpbGRlcnMuYXBwZW5kQ2hpbGQobGkpXG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICByZW5kZXJJdGVtKGNoaWxkZXJzLCBub2RlLCBkZXB0aCArIDEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbGlFbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGlFbmQuaW5uZXJIVE1MICs9IFwiXVwiXG4gICAgICAgIGNoaWxkZXJzLmFwcGVuZENoaWxkKGxpRW5kKVxuICAgICAgICByZXR1cm4gY2hpbGRlcnNcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVuZGVySXRlbSA9IChwYXJlbnRFbGVtZW50OiBFbGVtZW50LCBub2RlOiBOb2RlLCBkZXB0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbURpdilcbiAgICAgICAgaXRlbURpdi5jbGFzc05hbWUgPSBcImFzdC10cmVlLXN0YXJ0XCJcbiAgICAgICAgaXRlbURpdi5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGl0ZW1EaXYuZGF0YXNldC5wb3MgPSBub2RlLnBvc1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGl0ZW1EaXYuZGF0YXNldC5lbmQgPSBub2RlLmVuZFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGl0ZW1EaXYuZGF0YXNldC5kZXB0aCA9IGRlcHRoXG5cbiAgICAgICAgaWYgKGRlcHRoID09PSAwICYmIGF1dG9PcGVuKSBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpXG5cbiAgICAgICAgY29uc3QgaW5mbyA9IGluZm9Gb3JOb2RlKG5vZGUpXG5cbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZChcIm5vZGUtbmFtZVwiKVxuICAgICAgICBhLnRleHRDb250ZW50ID0gaW5mby5uYW1lXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoYSlcbiAgICAgICAgYS5vbmNsaWNrID0gXyA9PiBhLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpXG4gICAgICAgIGFkZEVkaXRvckhvdmVyVG9FbGVtZW50KGEsIHsgc3RhcnQ6IG5vZGUucG9zLCBlbmQ6IG5vZGUuZW5kIH0sIHsgdHlwZTogXCJpbmZvXCIgfSlcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIHByb3BlcnRpZXMuY2xhc3NOYW1lID0gXCJhc3QtdHJlZVwiXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvcGVydGllcylcblxuICAgICAgICBPYmplY3Qua2V5cyhub2RlKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkID09PSBcImZ1bmN0aW9uXCIpIHJldHVyblxuICAgICAgICAgIGlmIChmaWVsZCA9PT0gXCJwYXJlbnRcIiB8fCBmaWVsZCA9PT0gXCJmbG93Tm9kZVwiKSByZXR1cm5cblxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gKG5vZGUgYXMgYW55KVtmaWVsZF1cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlWzBdICYmIFwicG9zXCIgaW4gdmFsdWVbMF0gJiYgXCJlbmRcIiBpbiB2YWx1ZVswXSkge1xuICAgICAgICAgICAgLy8gIElzIGFuIGFycmF5IG9mIE5vZGVzXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmFwcGVuZENoaWxkKHJlbmRlck1hbnlDaGlsZHJlbihmaWVsZCwgdmFsdWUsIGRlcHRoKSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBcInBvc1wiIGluIHZhbHVlICYmIFwiZW5kXCIgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIElzIGEgc2luZ2xlIGNoaWxkIHByb3BlcnR5XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmFwcGVuZENoaWxkKHJlbmRlclNpbmdsZUNoaWxkKGZpZWxkLCB2YWx1ZSwgZGVwdGgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmFwcGVuZENoaWxkKHJlbmRlckxpdGVyYWxGaWVsZChmaWVsZCwgdmFsdWUsIGluZm8pKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVuZGVySXRlbShkaXYsIG5vZGUsIDApXG4gICAgICBjb250YWluZXIuYXBwZW5kKGRpdilcbiAgICAgIHJldHVybiBkaXZcbiAgICB9XG5cbiAgICB0eXBlIFRleHRJbnB1dENvbmZpZyA9IHtcbiAgICAgIGlkOiBzdHJpbmdcbiAgICAgIHBsYWNlaG9sZGVyOiBzdHJpbmdcblxuICAgICAgb25DaGFuZ2VkPzogKHRleHQ6IHN0cmluZywgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHZvaWRcbiAgICAgIG9uRW50ZXI6ICh0ZXh0OiBzdHJpbmcsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB2b2lkXG5cbiAgICAgIHZhbHVlPzogc3RyaW5nXG4gICAgICBrZWVwVmFsdWVBY3Jvc3NSZWxvYWRzPzogdHJ1ZVxuICAgICAgaXNFbmFibGVkPzogKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiBib29sZWFuXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGV4dElucHV0ID0gKGNvbmZpZzogVGV4dElucHV0Q29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcblxuICAgICAgY29uc3QgdGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgdGV4dGJveC5pZCA9IGNvbmZpZy5pZFxuICAgICAgdGV4dGJveC5wbGFjZWhvbGRlciA9IGNvbmZpZy5wbGFjZWhvbGRlclxuICAgICAgdGV4dGJveC5hdXRvY29tcGxldGUgPSBcIm9mZlwiXG4gICAgICB0ZXh0Ym94LmF1dG9jYXBpdGFsaXplID0gXCJvZmZcIlxuICAgICAgdGV4dGJveC5zcGVsbGNoZWNrID0gZmFsc2VcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRleHRib3guYXV0b2NvcnJlY3QgPSBcIm9mZlwiXG5cbiAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUtleSA9IFwicGxheWdyb3VuZC1pbnB1dC1cIiArIGNvbmZpZy5pZFxuXG4gICAgICBpZiAoY29uZmlnLnZhbHVlKSB7XG4gICAgICAgIHRleHRib3gudmFsdWUgPSBjb25maWcudmFsdWVcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmtlZXBWYWx1ZUFjcm9zc1JlbG9hZHMpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkUXVlcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpXG4gICAgICAgIGlmIChzdG9yZWRRdWVyeSkgdGV4dGJveC52YWx1ZSA9IHN0b3JlZFF1ZXJ5XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuaXNFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IGVuYWJsZWQgPSBjb25maWcuaXNFbmFibGVkKHRleHRib3gpXG4gICAgICAgIHRleHRib3guY2xhc3NMaXN0LmFkZChlbmFibGVkID8gXCJnb29kXCIgOiBcImJhZFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dGJveC5jbGFzc0xpc3QuYWRkKFwiZ29vZFwiKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZXh0VXBkYXRlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgIGlmIChjb25maWcua2VlcFZhbHVlQWNyb3NzUmVsb2Fkcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgaHJlZilcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9uQ2hhbmdlZCkgY29uZmlnLm9uQ2hhbmdlZChlLnRhcmdldC52YWx1ZSwgdGV4dGJveClcbiAgICAgIH1cblxuICAgICAgdGV4dGJveC5zdHlsZS53aWR0aCA9IFwiOTAlXCJcbiAgICAgIHRleHRib3guc3R5bGUuaGVpZ2h0ID0gXCIycmVtXCJcbiAgICAgIHRleHRib3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRleHRVcGRhdGUpXG5cbiAgICAgIC8vIFN1cHByZXNzIHRoZSBlbnRlciBrZXlcbiAgICAgIHRleHRib3gub25rZXlkb3duID0gKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFbnRlclwiIHx8IGV2dC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBjb25maWcub25FbnRlcih0ZXh0Ym94LnZhbHVlLCB0ZXh0Ym94KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dGJveClcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgcmV0dXJuIGZvcm1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTdWJEZXNpZ25TeXN0ZW0gPSAoKTogYW55ID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG4gICAgICBjb25zdCBkcyA9IGNyZWF0ZURlc2lnblN5c3RlbShzYW5kYm94KShkaXYpXG4gICAgICByZXR1cm4gZHNcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLyoqIFRoZSBlbGVtZW50IG9mIHRoZSBkZXNpZ24gc3lzdGVtICovXG4gICAgICBjb250YWluZXIsXG4gICAgICAvKiogQ2xlYXIgdGhlIHNpZGViYXIgKi9cbiAgICAgIGNsZWFyLFxuICAgICAgLyoqIFByZXNlbnQgY29kZSBpbiBhIHByZSA+IGNvZGUgICovXG4gICAgICBjb2RlLFxuICAgICAgLyoqIElkZWFsbHkgb25seSB1c2UgdGhpcyBvbmNlLCBhbmQgbWF5YmUgZXZlbiBwcmVmZXIgdXNpbmcgc3VidGl0bGVzIGV2ZXJ5d2hlcmUgKi9cbiAgICAgIHRpdGxlOiAodGl0bGU6IHN0cmluZykgPT4gZWwodGl0bGUsIFwiaDNcIiwgY29udGFpbmVyKSxcbiAgICAgIC8qKiBVc2VkIHRvIGRlbm90ZSBzZWN0aW9ucywgZ2l2ZSBpbmZvIGV0YyAqL1xuICAgICAgc3VidGl0bGU6IChzdWJ0aXRsZTogc3RyaW5nKSA9PiBlbChzdWJ0aXRsZSwgXCJoNFwiLCBjb250YWluZXIpLFxuICAgICAgLyoqIFVzZWQgdG8gc2hvdyBhIHBhcmFncmFwaCAqL1xuICAgICAgcDogKHN1YnRpdGxlOiBzdHJpbmcpID0+IGVsKHN1YnRpdGxlLCBcInBcIiwgY29udGFpbmVyKSxcbiAgICAgIC8qKiBXaGVuIHlvdSBjYW4ndCBkbyBzb21ldGhpbmcsIG9yIGhhdmUgbm90aGluZyB0byBzaG93ICovXG4gICAgICBzaG93RW1wdHlTY3JlZW4sXG4gICAgICAvKipcbiAgICAgICAqIFNob3dzIGEgbGlzdCBvZiBob3ZlcmFibGUsIGFuZCBzZWxlY3RhYmxlIGl0ZW1zIChlcnJvcnMsIGhpZ2hsaWdodHMgZXRjKSB3aGljaCBoYXZlIGNvZGUgcmVwcmVzZW50YXRpb24uXG4gICAgICAgKiBUaGUgdHlwZSBpcyBxdWl0ZSBzbWFsbCwgc28gaXQgc2hvdWxkIGJlIHZlcnkgZmVhc2libGUgZm9yIHlvdSB0byBtYXNzYWdlIG90aGVyIGRhdGEgdG8gZml0IGludG8gdGhpcyBmdW5jdGlvblxuICAgICAgICovXG4gICAgICBsaXN0RGlhZ3MsXG4gICAgICAvKiogTGV0cyB5b3UgcmVtb3ZlIHRoZSBob3ZlcnMgZnJvbSBsaXN0RGlhZ3MgZXRjICovXG4gICAgICBjbGVhckRlbHRhRGVjb3JhdG9ycyxcbiAgICAgIC8qKiBTaG93cyBhIHNpbmdsZSBvcHRpb24gaW4gbG9jYWwgc3RvcmFnZSAoYWRkcyBhbiBsaSB0byB0aGUgY29udGFpbmVyIEJUVykgKi9cbiAgICAgIGxvY2FsU3RvcmFnZU9wdGlvbixcbiAgICAgIC8qKiBVc2VzIGxvY2FsU3RvcmFnZU9wdGlvbiB0byBjcmVhdGUgYSBsaXN0IG9mIG9wdGlvbnMgKi9cbiAgICAgIHNob3dPcHRpb25MaXN0LFxuICAgICAgLyoqIFNob3dzIGEgZnVsbC13aWR0aCB0ZXh0IGlucHV0ICovXG4gICAgICBjcmVhdGVUZXh0SW5wdXQsXG4gICAgICAvKiogUmVuZGVycyBhbiBBU1QgdHJlZSAqL1xuICAgICAgY3JlYXRlQVNUVHJlZSxcbiAgICAgIC8qKiBDcmVhdGVzIGFuIGlucHV0IGJ1dHRvbiAqL1xuICAgICAgYnV0dG9uLFxuICAgICAgLyoqIFVzZWQgdG8gcmUtY3JlYXRlIGEgVUkgbGlrZSB0aGUgdGFiIGJhciBhdCB0aGUgdG9wIG9mIHRoZSBwbHVnaW5zIHNlY3Rpb24gKi9cbiAgICAgIGNyZWF0ZVRhYkJhcixcbiAgICAgIC8qKiBVc2VkIHdpdGggY3JlYXRlVGFiQmFyIHRvIGFkZCBidXR0b25zICovXG4gICAgICBjcmVhdGVUYWJCdXR0b24sXG4gICAgICAvKiogQSBnZW5lcmFsIFwicmVzdGFydCB5b3VyIGJyb3dzZXJcIiBtZXNzYWdlICAqL1xuICAgICAgZGVjbGFyZVJlc3RhcnRSZXF1aXJlZCxcbiAgICAgIC8qKiBDcmVhdGUgYSBuZXcgRGVzaWduIFN5c3RlbSBpbnN0YW5jZSBhbmQgYWRkIGl0IHRvIHRoZSBjb250YWluZXIuIFlvdSdsbCBuZWVkIHRvIGNhc3RcbiAgICAgICAqIHRoaXMgYWZ0ZXIgdXNhZ2UsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZSB0eXBlLXN5c3RlbSBjaXJjdWxhcmx5IHJlZmVyZW5jZXMgaXRzZWxmXG4gICAgICAgKi9cbiAgICAgIGNyZWF0ZVN1YkRlc2lnblN5c3RlbSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==