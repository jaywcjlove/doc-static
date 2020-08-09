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
    exports.createDesignSystem = (sandbox) => {
        const ts = sandbox.ts;
        return (container) => {
            const clear = () => {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            };
            let decorations = [];
            let decorationLock = false;
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
                    if (!decorationLock) {
                        sandbox.editor.deltaDecorations(decorations, []);
                    }
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
                    if (e.keyCode === 39 || e.keyCode === 37) {
                        tabs[tabFocus].setAttribute("tabindex", "-1");
                        if (e.keyCode === 39) {
                            tabFocus++;
                            // If we're at the end, go to the start
                            if (tabFocus >= tabs.length) {
                                tabFocus = 0;
                            }
                            // Move left
                        }
                        else if (e.keyCode === 37) {
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
                        li.textContent = sandbox.ts.flattenDiagnosticMessageText(diag.messageText, "\n");
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
            const createASTTree = (node) => {
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
                    if (depth === 0)
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
                    if (evt.keyCode == 13) {
                        return false;
                    }
                };
                form.appendChild(textbox);
                container.appendChild(form);
                return form;
            };
            return {
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
            };
        };
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGVzaWduU3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGxheWdyb3VuZC9zcmMvZHMvY3JlYXRlRGVzaWduU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFtQkEsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFXLEVBQUUsV0FBbUIsRUFBRSxTQUFrQixFQUFFLEVBQUU7UUFDbEUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM5QyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtRQUNsQixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQyxDQUFBO0lBRUQsc0NBQXNDO0lBQ3pCLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQUU7UUFDckQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUVyQixPQUFPLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQzVCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDakIsT0FBTyxTQUFTLENBQUMsVUFBVSxFQUFFO29CQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtpQkFDNUM7WUFDSCxDQUFDLENBQUE7WUFDRCxJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUE7WUFDOUIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFBO1lBRTFCLGlFQUFpRTtZQUNqRSxNQUFNLHVCQUF1QixHQUFHLENBQzlCLE9BQW9CLEVBQ3BCLEdBQW1DLEVBQ25DLE1BQWtDLEVBQ2xDLEVBQUU7Z0JBQ0YsT0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ25CLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVB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QUFnRDtnQkFDaEQsc0JBQXNCO2FBQ3ZCLENBQUE7UUFDSCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNhbmRib3ggfSBmcm9tIFwidHlwZXNjcmlwdGxhbmctb3JnL3N0YXRpYy9qcy9zYW5kYm94XCJcbmltcG9ydCB0eXBlIHsgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiwgTm9kZSB9IGZyb20gXCJ0eXBlc2NyaXB0XCJcblxuZXhwb3J0IHR5cGUgTG9jYWxTdG9yYWdlT3B0aW9uID0ge1xuICBibHVyYjogc3RyaW5nXG4gIGZsYWc6IHN0cmluZ1xuICBkaXNwbGF5OiBzdHJpbmdcblxuICBlbXB0eUltcGxpZXNFbmFibGVkPzogdHJ1ZVxuICBvbmVsaW5lPzogdHJ1ZVxuICByZXF1aXJlUmVzdGFydD86IHRydWVcbiAgb25jaGFuZ2U/OiAobmV3VmFsdWU6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uc0xpc3RDb25maWcgPSB7XG4gIHN0eWxlOiBcInNlcGFyYXRlZFwiIHwgXCJyb3dzXCJcbiAgcmVxdWlyZVJlc3RhcnQ/OiB0cnVlXG59XG5cbmNvbnN0IGVsID0gKHN0cjogc3RyaW5nLCBlbGVtZW50VHlwZTogc3RyaW5nLCBjb250YWluZXI6IEVsZW1lbnQpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKVxuICBlbC5pbm5lckhUTUwgPSBzdHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKVxuICByZXR1cm4gZWxcbn1cblxuLy8gVGhlIFBsYXlncm91bmQgUGx1Z2luIGRlc2lnbiBzeXN0ZW1cbmV4cG9ydCBjb25zdCBjcmVhdGVEZXNpZ25TeXN0ZW0gPSAoc2FuZGJveDogU2FuZGJveCkgPT4ge1xuICBjb25zdCB0cyA9IHNhbmRib3gudHNcblxuICByZXR1cm4gKGNvbnRhaW5lcjogRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRlY29yYXRpb25zOiBzdHJpbmdbXSA9IFtdXG4gICAgbGV0IGRlY29yYXRpb25Mb2NrID0gZmFsc2VcblxuICAgIC8qKiBMZXRzIGEgSFRNTCBFbGVtZW50IGhvdmVyIHRvIGhpZ2hsaWdodCBjb2RlIGluIHRoZSBlZGl0b3IgICovXG4gICAgY29uc3QgYWRkRWRpdG9ySG92ZXJUb0VsZW1lbnQgPSAoXG4gICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgIHBvczogeyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9LFxuICAgICAgY29uZmlnOiB7IHR5cGU6IFwiZXJyb3JcIiB8IFwiaW5mb1wiIH1cbiAgICApID0+IHtcbiAgICAgIGVsZW1lbnQub25tb3VzZWVudGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRlY29yYXRpb25Mb2NrKSB7XG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBzYW5kYm94LmdldE1vZGVsKClcbiAgICAgICAgICBjb25zdCBzdGFydCA9IG1vZGVsLmdldFBvc2l0aW9uQXQocG9zLnN0YXJ0KVxuICAgICAgICAgIGNvbnN0IGVuZCA9IG1vZGVsLmdldFBvc2l0aW9uQXQocG9zLmVuZClcbiAgICAgICAgICBkZWNvcmF0aW9ucyA9IHNhbmRib3guZWRpdG9yLmRlbHRhRGVjb3JhdGlvbnMoZGVjb3JhdGlvbnMsIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFuZ2U6IG5ldyBzYW5kYm94Lm1vbmFjby5SYW5nZShzdGFydC5saW5lTnVtYmVyLCBzdGFydC5jb2x1bW4sIGVuZC5saW5lTnVtYmVyLCBlbmQuY29sdW1uKSxcbiAgICAgICAgICAgICAgb3B0aW9uczogeyBpbmxpbmVDbGFzc05hbWU6IFwiaGlnaGxpZ2h0LVwiICsgY29uZmlnLnR5cGUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFkZWNvcmF0aW9uTG9jaykge1xuICAgICAgICAgIHNhbmRib3guZWRpdG9yLmRlbHRhRGVjb3JhdGlvbnMoZGVjb3JhdGlvbnMsIFtdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVjbGFyZVJlc3RhcnRSZXF1aXJlZCA9IChpPzogKGtleTogc3RyaW5nKSA9PiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnQtcmVxdWlyZWRcIikpIHJldHVyblxuICAgICAgY29uc3QgbG9jYWxpemUgPSBpIHx8ICh3aW5kb3cgYXMgYW55KS5pXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgbGkuaWQgPSBcInJlc3RhcnQtcmVxdWlyZWRcIlxuXG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgIGEuc3R5bGUuY29sb3IgPSBcIiNjNjMxMzFcIlxuICAgICAgYS50ZXh0Q29udGVudCA9IGxvY2FsaXplKFwicGxheV9zaWRlYmFyX29wdGlvbnNfcmVzdGFydF9yZXF1aXJlZFwiKVxuICAgICAgYS5ocmVmID0gXCIjXCJcbiAgICAgIGEub25jbGljayA9ICgpID0+IGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXG5cbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXItcmlnaHRcIilbMF1cbiAgICAgIGxpLmFwcGVuZENoaWxkKGEpXG4gICAgICBuYXYuaW5zZXJ0QmVmb3JlKGxpLCBuYXYuZmlyc3RDaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VPcHRpb24gPSAoc2V0dGluZzogTG9jYWxTdG9yYWdlT3B0aW9uKSA9PiB7XG4gICAgICAvLyBUaGluayBhYm91dCB0aGlzIGFzIGJlaW5nIHNvbWV0aGluZyB3aGljaCB5b3Ugd2FudCBlbmFibGVkIGJ5IGRlZmF1bHQgYW5kIGNhbiBzdXBwcmVzcyB3aGV0aGVyXG4gICAgICAvLyBpdCBzaG91bGQgZG8gc29tZXRoaW5nLlxuICAgICAgY29uc3QgaW52ZXJ0ZWRMb2dpYyA9IHNldHRpbmcuZW1wdHlJbXBsaWVzRW5hYmxlZFxuXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgIGNvbnN0IHNwbGl0ID0gc2V0dGluZy5vbmVsaW5lID8gXCJcIiA6IFwiPGJyLz5cIlxuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYDxzcGFuPiR7c2V0dGluZy5kaXNwbGF5fTwvc3Bhbj4ke3NwbGl0fSR7c2V0dGluZy5ibHVyYn1gXG5cbiAgICAgIGNvbnN0IGtleSA9IHNldHRpbmcuZmxhZ1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICAgIGlucHV0LmlkID0ga2V5XG5cbiAgICAgIGlucHV0LmNoZWNrZWQgPSBpbnZlcnRlZExvZ2ljID8gIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgOiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcblxuICAgICAgaW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKCFpbnZlcnRlZExvZ2ljKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIFwidHJ1ZVwiKVxuICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpbnZlcnRlZExvZ2ljKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIFwidHJ1ZVwiKVxuICAgICAgICAgIGVsc2UgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmcub25jaGFuZ2UpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uY2hhbmdlKCEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZy5yZXF1aXJlUmVzdGFydCkge1xuICAgICAgICAgIGRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxhYmVsLmh0bWxGb3IgPSBpbnB1dC5pZFxuXG4gICAgICBsaS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgIGxpLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKVxuICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gKHNldHRpbmdzOiB7IGxhYmVsOiBzdHJpbmc7IG9uY2xpY2s/OiAoZXY6IE1vdXNlRXZlbnQpID0+IHZvaWQgfSkgPT4ge1xuICAgICAgY29uc3Qgam9pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgam9pbi50eXBlID0gXCJidXR0b25cIlxuICAgICAgam9pbi52YWx1ZSA9IHNldHRpbmdzLmxhYmVsXG4gICAgICBpZiAoc2V0dGluZ3Mub25jbGljaykge1xuICAgICAgICBqb2luLm9uY2xpY2sgPSBzZXR0aW5ncy5vbmNsaWNrXG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChqb2luKVxuICAgICAgcmV0dXJuIGpvaW5cbiAgICB9XG5cbiAgICBjb25zdCBjb2RlID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlQ29kZVByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIilcbiAgICAgIGNvbnN0IGNvZGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvZGVcIilcblxuICAgICAgY29kZUVsZW1lbnQuaW5uZXJIVE1MID0gY29kZVxuXG4gICAgICBjcmVhdGVDb2RlUHJlLmFwcGVuZENoaWxkKGNvZGVFbGVtZW50KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvZGVQcmUpXG5cbiAgICAgIHJldHVybiBjb2RlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFbXB0eVNjcmVlbiA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNsZWFyKClcblxuICAgICAgY29uc3Qgbm9FcnJvcnNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgbm9FcnJvcnNNZXNzYWdlLmlkID0gXCJlbXB0eS1tZXNzYWdlLWNvbnRhaW5lclwiXG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiZW1wdHktcGx1Z2luLW1lc3NhZ2VcIilcbiAgICAgIG5vRXJyb3JzTWVzc2FnZS5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9FcnJvcnNNZXNzYWdlKVxuICAgICAgcmV0dXJuIG5vRXJyb3JzTWVzc2FnZVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhYkJhciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRhYkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIHRhYkJhci5jbGFzc0xpc3QuYWRkKFwicGxheWdyb3VuZC1wbHVnaW4tdGFidmlld1wiKVxuXG4gICAgICAvKiogU3VwcG9ydCBsZWZ0L3JpZ2h0IGluIHRoZSB0YWIgYmFyIGZvciBhY2Nlc3NpYmlsaXR5ICovXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXG4gICAgICB0YWJCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSB0YWJCYXIucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgIHRhYkZvY3VzKytcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgICB0YWJGb2N1cy0tXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKVxuICAgICAgICAgIDsodGFic1t0YWJGb2N1c10gYXMgYW55KS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJCYXIpXG4gICAgICByZXR1cm4gdGFiQmFyXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFiQnV0dG9uID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYlwiKVxuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdERpYWdzID0gKG1vZGVsOiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLmVkaXRvci5JVGV4dE1vZGVsLCBkaWFnczogRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbltdKSA9PiB7XG4gICAgICBjb25zdCBlcnJvclVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICBlcnJvclVMLmNsYXNzTmFtZSA9IFwiY29tcGlsZXItZGlhZ25vc3RpY3NcIlxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JVTClcblxuICAgICAgZGlhZ3MuZm9yRWFjaChkaWFnID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRpYWdub3N0aWNcIilcbiAgICAgICAgc3dpdGNoIChkaWFnLmNhdGVnb3J5KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIndhcm5pbmdcIilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJzdWdnZXN0aW9uXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkaWFnID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBkaWFnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBzYW5kYm94LnRzLmZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoZGlhZy5tZXNzYWdlVGV4dCwgXCJcXG5cIilcbiAgICAgICAgfVxuICAgICAgICBlcnJvclVMLmFwcGVuZENoaWxkKGxpKVxuXG4gICAgICAgIGlmIChkaWFnLnN0YXJ0ICYmIGRpYWcubGVuZ3RoKSB7XG4gICAgICAgICAgYWRkRWRpdG9ySG92ZXJUb0VsZW1lbnQobGksIHsgc3RhcnQ6IGRpYWcuc3RhcnQsIGVuZDogZGlhZy5zdGFydCArIGRpYWcubGVuZ3RoIH0sIHsgdHlwZTogXCJlcnJvclwiIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChkaWFnLnN0YXJ0ICYmIGRpYWcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZGlhZy5zdGFydClcbiAgICAgICAgICAgIHNhbmRib3guZWRpdG9yLnJldmVhbExpbmUoc3RhcnQubGluZU51bWJlcilcblxuICAgICAgICAgICAgY29uc3QgZW5kID0gbW9kZWwuZ2V0UG9zaXRpb25BdChkaWFnLnN0YXJ0ICsgZGlhZy5sZW5ndGgpXG4gICAgICAgICAgICBkZWNvcmF0aW9ucyA9IHNhbmRib3guZWRpdG9yLmRlbHRhRGVjb3JhdGlvbnMoZGVjb3JhdGlvbnMsIFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhbmdlOiBuZXcgc2FuZGJveC5tb25hY28uUmFuZ2Uoc3RhcnQubGluZU51bWJlciwgc3RhcnQuY29sdW1uLCBlbmQubGluZU51bWJlciwgZW5kLmNvbHVtbiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogeyBpbmxpbmVDbGFzc05hbWU6IFwiZXJyb3ItaGlnaGxpZ2h0XCIsIGlzV2hvbGVMaW5lOiB0cnVlIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICBkZWNvcmF0aW9uTG9jayA9IHRydWVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBkZWNvcmF0aW9uTG9jayA9IGZhbHNlXG4gICAgICAgICAgICAgIHNhbmRib3guZWRpdG9yLmRlbHRhRGVjb3JhdGlvbnMoZGVjb3JhdGlvbnMsIFtdKVxuICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBlcnJvclVMXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd09wdGlvbkxpc3QgPSAob3B0aW9uczogTG9jYWxTdG9yYWdlT3B0aW9uW10sIHN0eWxlOiBPcHRpb25zTGlzdENvbmZpZykgPT4ge1xuICAgICAgY29uc3Qgb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIilcbiAgICAgIG9sLmNsYXNzTmFtZSA9IHN0eWxlLnN0eWxlID09PSBcInNlcGFyYXRlZFwiID8gXCJwbGF5Z3JvdW5kLW9wdGlvbnNcIiA6IFwicGxheWdyb3VuZC1vcHRpb25zIHRpZ2h0XCJcblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChzdHlsZS5zdHlsZSA9PT0gXCJyb3dzXCIpIG9wdGlvbi5vbmVsaW5lID0gdHJ1ZVxuICAgICAgICBpZiAoc3R5bGUucmVxdWlyZVJlc3RhcnQpIG9wdGlvbi5yZXF1aXJlUmVzdGFydCA9IHRydWVcblxuICAgICAgICBjb25zdCBzZXR0aW5nQnV0dG9uID0gbG9jYWxTdG9yYWdlT3B0aW9uKG9wdGlvbilcbiAgICAgICAgb2wuYXBwZW5kQ2hpbGQoc2V0dGluZ0J1dHRvbilcbiAgICAgIH0pXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvbClcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBU1RUcmVlID0gKG5vZGU6IE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGRpdi5jbGFzc05hbWUgPSBcImFzdFwiXG5cbiAgICAgIGNvbnN0IGluZm9Gb3JOb2RlID0gKG5vZGU6IE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRzLlN5bnRheEtpbmRbbm9kZS5raW5kXVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0eXBlIE5vZGVJbmZvID0gUmV0dXJuVHlwZTx0eXBlb2YgaW5mb0Zvck5vZGU+XG5cbiAgICAgIGNvbnN0IHJlbmRlckxpdGVyYWxGaWVsZCA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW5mbzogTm9kZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgY29uc3QgdHlwZW9mU3BhbiA9IGBhc3Qtbm9kZS0ke3R5cGVvZiB2YWx1ZX1gXG4gICAgICAgIGxldCBzdWZmaXggPSBcIlwiXG4gICAgICAgIGlmIChrZXkgPT09IFwia2luZFwiKSB7XG4gICAgICAgICAgc3VmZml4ID0gYCAoU3ludGF4S2luZC4ke2luZm8ubmFtZX0pYFxuICAgICAgICB9XG4gICAgICAgIGxpLmlubmVySFRNTCA9IGAke2tleX06IDxzcGFuIGNsYXNzPScke3R5cGVvZlNwYW59Jz4ke3ZhbHVlfTwvc3Bhbj4ke3N1ZmZpeH1gXG4gICAgICAgIHJldHVybiBsaVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZW5kZXJTaW5nbGVDaGlsZCA9IChrZXk6IHN0cmluZywgdmFsdWU6IE5vZGUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gYCR7a2V5fTogYFxuXG4gICAgICAgIHJlbmRlckl0ZW0obGksIHZhbHVlLCBkZXB0aCArIDEpXG4gICAgICAgIHJldHVybiBsaVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZW5kZXJNYW55Q2hpbGRyZW4gPSAoa2V5OiBzdHJpbmcsIG5vZGVzOiBOb2RlW10sIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNoaWxkZXJzLmNsYXNzTGlzdC5hZGQoXCJhc3QtY2hpbGRyZW5cIilcblxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsaS5pbm5lckhUTUwgPSBgJHtrZXl9OiBbPGJyLz5gXG4gICAgICAgIGNoaWxkZXJzLmFwcGVuZENoaWxkKGxpKVxuXG4gICAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgcmVuZGVySXRlbShjaGlsZGVycywgbm9kZSwgZGVwdGggKyAxKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGxpRW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpRW5kLmlubmVySFRNTCArPSBcIl1cIlxuICAgICAgICBjaGlsZGVycy5hcHBlbmRDaGlsZChsaUVuZClcbiAgICAgICAgcmV0dXJuIGNoaWxkZXJzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbmRlckl0ZW0gPSAocGFyZW50RWxlbWVudDogRWxlbWVudCwgbm9kZTogTm9kZSwgZGVwdGg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1EaXYpXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gXCJhc3QtdHJlZS1zdGFydFwiXG4gICAgICAgIGl0ZW1EaXYuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW1cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBpdGVtRGl2LmRhdGFzZXQucG9zID0gbm9kZS5wb3NcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBpdGVtRGl2LmRhdGFzZXQuZW5kID0gbm9kZS5lbmRcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBpdGVtRGl2LmRhdGFzZXQuZGVwdGggPSBkZXB0aFxuXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMCkgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKVxuXG4gICAgICAgIGNvbnN0IGluZm8gPSBpbmZvRm9yTm9kZShub2RlKVxuXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJub2RlLW5hbWVcIilcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGluZm8ubmFtZVxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGEpXG4gICAgICAgIGEub25jbGljayA9IF8gPT4gYS5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKVxuICAgICAgICBhZGRFZGl0b3JIb3ZlclRvRWxlbWVudChhLCB7IHN0YXJ0OiBub2RlLnBvcywgZW5kOiBub2RlLmVuZCB9LCB7IHR5cGU6IFwiaW5mb1wiIH0pXG5cbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICBwcm9wZXJ0aWVzLmNsYXNzTmFtZSA9IFwiYXN0LXRyZWVcIlxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHByb3BlcnRpZXMpXG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kZSkuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm5cbiAgICAgICAgICBpZiAoZmllbGQgPT09IFwicGFyZW50XCIgfHwgZmllbGQgPT09IFwiZmxvd05vZGVcIikgcmV0dXJuXG5cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IChub2RlIGFzIGFueSlbZmllbGRdXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZVswXSAmJiBcInBvc1wiIGluIHZhbHVlWzBdICYmIFwiZW5kXCIgaW4gdmFsdWVbMF0pIHtcbiAgICAgICAgICAgIC8vICBJcyBhbiBhcnJheSBvZiBOb2Rlc1xuICAgICAgICAgICAgcHJvcGVydGllcy5hcHBlbmRDaGlsZChyZW5kZXJNYW55Q2hpbGRyZW4oZmllbGQsIHZhbHVlLCBkZXB0aCkpXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgXCJwb3NcIiBpbiB2YWx1ZSAmJiBcImVuZFwiIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBJcyBhIHNpbmdsZSBjaGlsZCBwcm9wZXJ0eVxuICAgICAgICAgICAgcHJvcGVydGllcy5hcHBlbmRDaGlsZChyZW5kZXJTaW5nbGVDaGlsZChmaWVsZCwgdmFsdWUsIGRlcHRoKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcGVydGllcy5hcHBlbmRDaGlsZChyZW5kZXJMaXRlcmFsRmllbGQoZmllbGQsIHZhbHVlLCBpbmZvKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJlbmRlckl0ZW0oZGl2LCBub2RlLCAwKVxuICAgICAgY29udGFpbmVyLmFwcGVuZChkaXYpXG4gICAgICByZXR1cm4gZGl2XG4gICAgfVxuXG4gICAgdHlwZSBUZXh0SW5wdXRDb25maWcgPSB7XG4gICAgICBpZDogc3RyaW5nXG4gICAgICBwbGFjZWhvbGRlcjogc3RyaW5nXG5cbiAgICAgIG9uQ2hhbmdlZD86ICh0ZXh0OiBzdHJpbmcsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB2b2lkXG4gICAgICBvbkVudGVyOiAodGV4dDogc3RyaW5nLCBpbnB1dDogSFRNTElucHV0RWxlbWVudCkgPT4gdm9pZFxuXG4gICAgICB2YWx1ZT86IHN0cmluZ1xuICAgICAga2VlcFZhbHVlQWNyb3NzUmVsb2Fkcz86IHRydWVcbiAgICAgIGlzRW5hYmxlZD86IChpbnB1dDogSFRNTElucHV0RWxlbWVudCkgPT4gYm9vbGVhblxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRleHRJbnB1dCA9IChjb25maWc6IFRleHRJbnB1dENvbmZpZykgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgICAgIGNvbnN0IHRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgIHRleHRib3guaWQgPSBjb25maWcuaWRcbiAgICAgIHRleHRib3gucGxhY2Vob2xkZXIgPSBjb25maWcucGxhY2Vob2xkZXJcbiAgICAgIHRleHRib3guYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxuICAgICAgdGV4dGJveC5hdXRvY2FwaXRhbGl6ZSA9IFwib2ZmXCJcbiAgICAgIHRleHRib3guc3BlbGxjaGVjayA9IGZhbHNlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0ZXh0Ym94LmF1dG9jb3JyZWN0ID0gXCJvZmZcIlxuXG4gICAgICBjb25zdCBsb2NhbFN0b3JhZ2VLZXkgPSBcInBsYXlncm91bmQtaW5wdXQtXCIgKyBjb25maWcuaWRcblxuICAgICAgaWYgKGNvbmZpZy52YWx1ZSkge1xuICAgICAgICB0ZXh0Ym94LnZhbHVlID0gY29uZmlnLnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5rZWVwVmFsdWVBY3Jvc3NSZWxvYWRzKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFF1ZXJ5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KVxuICAgICAgICBpZiAoc3RvcmVkUXVlcnkpIHRleHRib3gudmFsdWUgPSBzdG9yZWRRdWVyeVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmlzRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBlbmFibGVkID0gY29uZmlnLmlzRW5hYmxlZCh0ZXh0Ym94KVxuICAgICAgICB0ZXh0Ym94LmNsYXNzTGlzdC5hZGQoZW5hYmxlZCA/IFwiZ29vZFwiIDogXCJiYWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRib3guY2xhc3NMaXN0LmFkZChcImdvb2RcIilcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGV4dFVwZGF0ZSA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgICBpZiAoY29uZmlnLmtlZXBWYWx1ZUFjcm9zc1JlbG9hZHMpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIGhyZWYpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vbkNoYW5nZWQpIGNvbmZpZy5vbkNoYW5nZWQoZS50YXJnZXQudmFsdWUsIHRleHRib3gpXG4gICAgICB9XG5cbiAgICAgIHRleHRib3guc3R5bGUud2lkdGggPSBcIjkwJVwiXG4gICAgICB0ZXh0Ym94LnN0eWxlLmhlaWdodCA9IFwiMnJlbVwiXG4gICAgICB0ZXh0Ym94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0ZXh0VXBkYXRlKVxuXG4gICAgICAvLyBTdXBwcmVzcyB0aGUgZW50ZXIga2V5XG4gICAgICB0ZXh0Ym94Lm9ua2V5ZG93biA9IChldnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0Ym94KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICByZXR1cm4gZm9ybVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvKiogQ2xlYXIgdGhlIHNpZGViYXIgKi9cbiAgICAgIGNsZWFyLFxuICAgICAgLyoqIFByZXNlbnQgY29kZSBpbiBhIHByZSA+IGNvZGUgICovXG4gICAgICBjb2RlLFxuICAgICAgLyoqIElkZWFsbHkgb25seSB1c2UgdGhpcyBvbmNlLCBhbmQgbWF5YmUgZXZlbiBwcmVmZXIgdXNpbmcgc3VidGl0bGVzIGV2ZXJ5d2hlcmUgKi9cbiAgICAgIHRpdGxlOiAodGl0bGU6IHN0cmluZykgPT4gZWwodGl0bGUsIFwiaDNcIiwgY29udGFpbmVyKSxcbiAgICAgIC8qKiBVc2VkIHRvIGRlbm90ZSBzZWN0aW9ucywgZ2l2ZSBpbmZvIGV0YyAqL1xuICAgICAgc3VidGl0bGU6IChzdWJ0aXRsZTogc3RyaW5nKSA9PiBlbChzdWJ0aXRsZSwgXCJoNFwiLCBjb250YWluZXIpLFxuICAgICAgLyoqIFVzZWQgdG8gc2hvdyBhIHBhcmFncmFwaCAqL1xuICAgICAgcDogKHN1YnRpdGxlOiBzdHJpbmcpID0+IGVsKHN1YnRpdGxlLCBcInBcIiwgY29udGFpbmVyKSxcbiAgICAgIC8qKiBXaGVuIHlvdSBjYW4ndCBkbyBzb21ldGhpbmcsIG9yIGhhdmUgbm90aGluZyB0byBzaG93ICovXG4gICAgICBzaG93RW1wdHlTY3JlZW4sXG4gICAgICAvKipcbiAgICAgICAqIFNob3dzIGEgbGlzdCBvZiBob3ZlcmFibGUsIGFuZCBzZWxlY3RhYmxlIGl0ZW1zIChlcnJvcnMsIGhpZ2hsaWdodHMgZXRjKSB3aGljaCBoYXZlIGNvZGUgcmVwcmVzZW50YXRpb24uXG4gICAgICAgKiBUaGUgdHlwZSBpcyBxdWl0ZSBzbWFsbCwgc28gaXQgc2hvdWxkIGJlIHZlcnkgZmVhc2libGUgZm9yIHlvdSB0byBtYXNzYWdlIG90aGVyIGRhdGEgdG8gZml0IGludG8gdGhpcyBmdW5jdGlvblxuICAgICAgICovXG4gICAgICBsaXN0RGlhZ3MsXG4gICAgICAvKiogU2hvd3MgYSBzaW5nbGUgb3B0aW9uIGluIGxvY2FsIHN0b3JhZ2UgKGFkZHMgYW4gbGkgdG8gdGhlIGNvbnRhaW5lciBCVFcpICovXG4gICAgICBsb2NhbFN0b3JhZ2VPcHRpb24sXG4gICAgICAvKiogVXNlcyBsb2NhbFN0b3JhZ2VPcHRpb24gdG8gY3JlYXRlIGEgbGlzdCBvZiBvcHRpb25zICovXG4gICAgICBzaG93T3B0aW9uTGlzdCxcbiAgICAgIC8qKiBTaG93cyBhIGZ1bGwtd2lkdGggdGV4dCBpbnB1dCAqL1xuICAgICAgY3JlYXRlVGV4dElucHV0LFxuICAgICAgLyoqIFJlbmRlcnMgYW4gQVNUIHRyZWUgKi9cbiAgICAgIGNyZWF0ZUFTVFRyZWUsXG4gICAgICAvKiogQ3JlYXRlcyBhbiBpbnB1dCBidXR0b24gKi9cbiAgICAgIGJ1dHRvbixcbiAgICAgIC8qKiBVc2VkIHRvIHJlLWNyZWF0ZSBhIFVJIGxpa2UgdGhlIHRhYiBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGx1Z2lucyBzZWN0aW9uICovXG4gICAgICBjcmVhdGVUYWJCYXIsXG4gICAgICAvKiogVXNlZCB3aXRoIGNyZWF0ZVRhYkJhciB0byBhZGQgYnV0dG9ucyAqL1xuICAgICAgY3JlYXRlVGFiQnV0dG9uLFxuICAgICAgLyoqIEEgZ2VuZXJhbCBcInJlc3RhcnQgeW91ciBicm93c2VyXCIgbWVzc2FnZSAgKi9cbiAgICAgIGRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQsXG4gICAgfVxuICB9XG59XG4iXX0=