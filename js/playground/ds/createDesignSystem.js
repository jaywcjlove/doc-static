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
                    if (evt.key === "Enter" || evt.code === "Enter") {
                        config.onEnter(textbox.value, textbox);
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
    exports.createDesignSystem = createDesignSystem;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRGVzaWduU3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGxheWdyb3VuZC9zcmMvZHMvY3JlYXRlRGVzaWduU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFtQkEsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFXLEVBQUUsV0FBbUIsRUFBRSxTQUFrQixFQUFFLEVBQUU7UUFDbEUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM5QyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtRQUNsQixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQyxDQUFBO0lBRUQsc0NBQXNDO0lBQy9CLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQUU7UUFDckQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQTtRQUVyQixPQUFPLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQzVCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDakIsT0FBTyxTQUFTLENBQUMsVUFBVSxFQUFFO29CQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtpQkFDNUM7WUFDSCxDQUFDLENBQUE7WUFDRCxJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUE7WUFDOUIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFBO1lBRTFCLGlFQUFpRTtZQUNqRSxNQUFNLHVCQUF1QixHQUFHLENBQzlCLE9BQW9CLEVBQ3BCLEdBQW1DLEVBQ25DLE1BQWtDLEVBQ2xDLEVBQUU7Z0JBQ0YsT0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ25CLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTt3QkFDaEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQzVDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUN4QyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7NEJBQ3pEO2dDQUNFLEtBQUssRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0NBQzNGLE9BQU8sRUFBRSxFQUFFLGVBQWUsRUFBRSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRTs2QkFDekQ7eUJBQ0YsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsQ0FBQTtnQkFFRCxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRTt3QkFDbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7cUJBQ2pEO2dCQUNILENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQTtZQUVELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUEyQixFQUFFLEVBQUU7Z0JBQzdELElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztvQkFBRSxPQUFNO2dCQUN2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUssTUFBYyxDQUFDLENBQUMsQ0FBQTtnQkFDdkMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdkMsRUFBRSxDQUFDLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQTtnQkFFMUIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO2dCQUN6QixDQUFDLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO2dCQUNqRSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtnQkFDWixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBRTVDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDOUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDakIsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RDLENBQUMsQ0FBQTtZQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUEyQixFQUFFLEVBQUU7Z0JBQ3pELGlHQUFpRztnQkFDakcsMEJBQTBCO2dCQUMxQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUE7Z0JBRWpELE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3ZDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzdDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO2dCQUM1QyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsT0FBTyxDQUFDLE9BQU8sVUFBVSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUUzRSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO2dCQUN4QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUM3QyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtnQkFDdkIsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUE7Z0JBRWQsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRXhGLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO29CQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxhQUFhOzRCQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBOzs0QkFDaEQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFDbEM7eUJBQU07d0JBQ0wsSUFBSSxhQUFhOzRCQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBOzs0QkFDL0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFDbEM7b0JBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUNwQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7cUJBQzlDO29CQUNELElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDMUIsc0JBQXNCLEVBQUUsQ0FBQTtxQkFDekI7Z0JBQ0gsQ0FBQyxDQUFBO2dCQUVELEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQTtnQkFFeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDckIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDekIsT0FBTyxFQUFFLENBQUE7WUFDWCxDQUFDLENBQUE7WUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQStELEVBQUUsRUFBRTtnQkFDakYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUE7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTtnQkFDM0IsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUE7aUJBQ2hDO2dCQUVELFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzNCLE9BQU8sSUFBSSxDQUFBO1lBQ2IsQ0FBQyxDQUFBO1lBRUQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDNUIsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFFbEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBRTVCLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ3RDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBRXBDLE9BQU8sV0FBVyxDQUFBO1lBQ3BCLENBQUMsQ0FBQTtZQUVELE1BQU0sZUFBZSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7Z0JBQzFDLEtBQUssRUFBRSxDQUFBO2dCQUVQLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3JELGVBQWUsQ0FBQyxFQUFFLEdBQUcseUJBQXlCLENBQUE7Z0JBRTlDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2hELFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFBO2dCQUNoQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO2dCQUNoRCxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUV2QyxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2dCQUN0QyxPQUFPLGVBQWUsQ0FBQTtZQUN4QixDQUFDLENBQUE7WUFFRCxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7Z0JBQ3hCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7Z0JBRWpELDBEQUEwRDtnQkFDMUQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNyQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUE7b0JBQ3BELGFBQWE7b0JBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTt3QkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7d0JBQzdDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxZQUFZLEVBQUU7NEJBQzFCLFFBQVEsRUFBRSxDQUFBOzRCQUNWLHVDQUF1Qzs0QkFDdkMsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQ0FDM0IsUUFBUSxHQUFHLENBQUMsQ0FBQTs2QkFDYjs0QkFDRCxZQUFZO3lCQUNiOzZCQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7NEJBQ2hDLFFBQVEsRUFBRSxDQUFBOzRCQUNWLHlDQUF5Qzs0QkFDekMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dDQUNoQixRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7NkJBQzNCO3lCQUNGO3dCQUVELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUMzQzt3QkFBQyxJQUFJLENBQUMsUUFBUSxDQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7cUJBQ2pDO2dCQUNILENBQUMsQ0FBQyxDQUFBO2dCQUVGLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQzdCLE9BQU8sTUFBTSxDQUFBO1lBQ2YsQ0FBQyxDQUFBO1lBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDdkMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDaEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ25DLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO2dCQUMxQixPQUFPLE9BQU8sQ0FBQTtZQUNoQixDQUFDLENBQUE7WUFFRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQWdELEVBQUUsS0FBcUMsRUFBRSxFQUFFO2dCQUM1RyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFBO2dCQUUxQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUU5QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN2QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtvQkFDOUIsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNyQixLQUFLLENBQUM7NEJBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7NEJBQzNCLE1BQUs7d0JBQ1AsS0FBSyxDQUFDOzRCQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBOzRCQUN6QixNQUFLO3dCQUNQLEtBQUssQ0FBQzs0QkFDSixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTs0QkFDOUIsTUFBSzt3QkFDUCxLQUFLLENBQUM7NEJBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7NEJBQzNCLE1BQUs7cUJBQ1I7b0JBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQzVCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO3FCQUN0Qjt5QkFBTTt3QkFDTCxFQUFFLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtxQkFDakY7b0JBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFFdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQzdCLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO3FCQUNyRztvQkFFRCxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTt3QkFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQzdCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUM3QyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7NEJBRTNDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7NEJBQ3pELFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRTtnQ0FDekQ7b0NBQ0UsS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQztvQ0FDM0YsT0FBTyxFQUFFLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7aUNBQ25FOzZCQUNGLENBQUMsQ0FBQTs0QkFFRixjQUFjLEdBQUcsSUFBSSxDQUFBOzRCQUNyQixVQUFVLENBQUMsR0FBRyxFQUFFO2dDQUNkLGNBQWMsR0FBRyxLQUFLLENBQUE7Z0NBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBOzRCQUNsRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7eUJBQ1I7b0JBQ0gsQ0FBQyxDQUFBO2dCQUNILENBQUMsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sT0FBTyxDQUFBO1lBQ2hCLENBQUMsQ0FBQTtZQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsT0FBNkIsRUFBRSxLQUF3QixFQUFFLEVBQUU7Z0JBQ2pGLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3ZDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQTtnQkFFOUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7b0JBQ2pELElBQUksS0FBSyxDQUFDLGNBQWM7d0JBQUUsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUE7b0JBRXRELE1BQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUNoRCxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUMvQixDQUFDLENBQUMsQ0FBQTtnQkFFRixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzNCLENBQUMsQ0FBQTtZQUVELE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO2dCQUVyQixNQUFNLFdBQVcsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO29CQUNqQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFFckMsT0FBTzt3QkFDTCxJQUFJO3FCQUNMLENBQUE7Z0JBQ0gsQ0FBQyxDQUFBO2dCQUlELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQWMsRUFBRSxFQUFFO29CQUN4RSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN2QyxNQUFNLFVBQVUsR0FBRyxZQUFZLE9BQU8sS0FBSyxFQUFFLENBQUE7b0JBQzdDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtvQkFDZixJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7d0JBQ2xCLE1BQU0sR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFBO3FCQUN0QztvQkFDRCxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEVBQUUsQ0FBQTtvQkFDN0UsT0FBTyxFQUFFLENBQUE7Z0JBQ1gsQ0FBQyxDQUFBO2dCQUVELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVyxFQUFFLEtBQWEsRUFBRSxFQUFFO29CQUNwRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN2QyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUE7b0JBRXpCLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQTtvQkFDaEMsT0FBTyxFQUFFLENBQUE7Z0JBQ1gsQ0FBQyxDQUFBO2dCQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxFQUFFO29CQUN2RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUM5QyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtvQkFFdEMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFBO29CQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO29CQUV4QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNuQixVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFBO29CQUVGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQzFDLEtBQUssQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFBO29CQUN0QixRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMzQixPQUFPLFFBQVEsQ0FBQTtnQkFDakIsQ0FBQyxDQUFBO2dCQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsYUFBc0IsRUFBRSxJQUFVLEVBQUUsS0FBYSxFQUFFLEVBQUU7b0JBQ3ZFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQzdDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUE7b0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFBO29CQUMvQixtQkFBbUI7b0JBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUE7b0JBQzlCLG1CQUFtQjtvQkFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtvQkFDOUIsbUJBQW1CO29CQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7b0JBRTdCLElBQUksS0FBSyxLQUFLLENBQUM7d0JBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBRTlDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFFOUIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDckMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7b0JBQzVCLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtvQkFDekIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDdEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDMUQsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO29CQUVoRixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUMvQyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQTtvQkFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtvQkFFL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2hDLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVTs0QkFBRSxPQUFNO3dCQUN2QyxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLFVBQVU7NEJBQUUsT0FBTTt3QkFFdEQsTUFBTSxLQUFLLEdBQUksSUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUNsQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQzNHLHdCQUF3Qjs0QkFDeEIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7eUJBQ2hFOzZCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTs0QkFDeEUsNkJBQTZCOzRCQUM3QixVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTt5QkFDL0Q7NkJBQU07NEJBQ0wsVUFBVSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7eUJBQy9EO29CQUNILENBQUMsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQTtnQkFFRCxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDeEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDckIsT0FBTyxHQUFHLENBQUE7WUFDWixDQUFDLENBQUE7WUFjRCxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQXVCLEVBQUUsRUFBRTtnQkFDbEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFFM0MsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0MsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFBO2dCQUN0QixPQUFPLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7Z0JBQ3hDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFBO2dCQUM1QixPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtnQkFDOUIsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7Z0JBQzFCLGFBQWE7Z0JBQ2IsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7Z0JBRTNCLE1BQU0sZUFBZSxHQUFHLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUE7Z0JBRXZELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDaEIsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2lCQUM3QjtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtvQkFDeEMsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtvQkFDekQsSUFBSSxXQUFXO3dCQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFBO2lCQUM3QztnQkFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQ3BCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDaEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7aUJBQzlCO2dCQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7b0JBQzVCLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO29CQUNsQyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTt3QkFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUE7cUJBQzVDO29CQUNELElBQUksTUFBTSxDQUFDLFNBQVM7d0JBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtnQkFDakUsQ0FBQyxDQUFBO2dCQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO2dCQUM3QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUU3Qyx5QkFBeUI7Z0JBQ3pCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFrQixFQUFFLEVBQUU7b0JBQ3pDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTt3QkFDdEMsT0FBTyxLQUFLLENBQUE7cUJBQ2I7Z0JBQ0gsQ0FBQyxDQUFBO2dCQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3pCLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzNCLE9BQU8sSUFBSSxDQUFBO1lBQ2IsQ0FBQyxDQUFBO1lBRUQsT0FBTztnQkFDTCx3QkFBd0I7Z0JBQ3hCLEtBQUs7Z0JBQ0wsb0NBQW9DO2dCQUNwQyxJQUFJO2dCQUNKLG1GQUFtRjtnQkFDbkYsS0FBSyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7Z0JBQ3BELDZDQUE2QztnQkFDN0MsUUFBUSxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO2dCQUM3RCwrQkFBK0I7Z0JBQy9CLENBQUMsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQztnQkFDckQsMkRBQTJEO2dCQUMzRCxlQUFlO2dCQUNmOzs7bUJBR0c7Z0JBQ0gsU0FBUztnQkFDVCwrRUFBK0U7Z0JBQy9FLGtCQUFrQjtnQkFDbEIsMERBQTBEO2dCQUMxRCxjQUFjO2dCQUNkLG9DQUFvQztnQkFDcEMsZUFBZTtnQkFDZiwwQkFBMEI7Z0JBQzFCLGFBQWE7Z0JBQ2IsOEJBQThCO2dCQUM5QixNQUFNO2dCQUNOLGdGQUFnRjtnQkFDaEYsWUFBWTtnQkFDWiw0Q0FBNEM7Z0JBQzVDLGVBQWU7Z0JBQ2YsZ0RBQWdEO2dCQUNoRCxzQkFBc0I7YUFDdkIsQ0FBQTtRQUNILENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQTtJQXRjWSxRQUFBLGtCQUFrQixzQkFzYzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5kYm94IH0gZnJvbSBcInR5cGVzY3JpcHRsYW5nLW9yZy9zdGF0aWMvanMvc2FuZGJveFwiXG5pbXBvcnQgdHlwZSB7IERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24sIE5vZGUgfSBmcm9tIFwidHlwZXNjcmlwdFwiXG5cbmV4cG9ydCB0eXBlIExvY2FsU3RvcmFnZU9wdGlvbiA9IHtcbiAgYmx1cmI6IHN0cmluZ1xuICBmbGFnOiBzdHJpbmdcbiAgZGlzcGxheTogc3RyaW5nXG5cbiAgZW1wdHlJbXBsaWVzRW5hYmxlZD86IHRydWVcbiAgb25lbGluZT86IHRydWVcbiAgcmVxdWlyZVJlc3RhcnQ/OiB0cnVlXG4gIG9uY2hhbmdlPzogKG5ld1ZhbHVlOiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnNMaXN0Q29uZmlnID0ge1xuICBzdHlsZTogXCJzZXBhcmF0ZWRcIiB8IFwicm93c1wiXG4gIHJlcXVpcmVSZXN0YXJ0PzogdHJ1ZVxufVxuXG5jb25zdCBlbCA9IChzdHI6IHN0cmluZywgZWxlbWVudFR5cGU6IHN0cmluZywgY29udGFpbmVyOiBFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSlcbiAgZWwuaW5uZXJIVE1MID0gc3RyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbClcbiAgcmV0dXJuIGVsXG59XG5cbi8vIFRoZSBQbGF5Z3JvdW5kIFBsdWdpbiBkZXNpZ24gc3lzdGVtXG5leHBvcnQgY29uc3QgY3JlYXRlRGVzaWduU3lzdGVtID0gKHNhbmRib3g6IFNhbmRib3gpID0+IHtcbiAgY29uc3QgdHMgPSBzYW5kYm94LnRzXG5cbiAgcmV0dXJuIChjb250YWluZXI6IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZWNvcmF0aW9uczogc3RyaW5nW10gPSBbXVxuICAgIGxldCBkZWNvcmF0aW9uTG9jayA9IGZhbHNlXG5cbiAgICAvKiogTGV0cyBhIEhUTUwgRWxlbWVudCBob3ZlciB0byBoaWdobGlnaHQgY29kZSBpbiB0aGUgZWRpdG9yICAqL1xuICAgIGNvbnN0IGFkZEVkaXRvckhvdmVyVG9FbGVtZW50ID0gKFxuICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICBwb3M6IHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfSxcbiAgICAgIGNvbmZpZzogeyB0eXBlOiBcImVycm9yXCIgfCBcImluZm9cIiB9XG4gICAgKSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubW91c2VlbnRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFkZWNvcmF0aW9uTG9jaykge1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gc2FuZGJveC5nZXRNb2RlbCgpXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KHBvcy5zdGFydClcbiAgICAgICAgICBjb25zdCBlbmQgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KHBvcy5lbmQpXG4gICAgICAgICAgZGVjb3JhdGlvbnMgPSBzYW5kYm94LmVkaXRvci5kZWx0YURlY29yYXRpb25zKGRlY29yYXRpb25zLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbmdlOiBuZXcgc2FuZGJveC5tb25hY28uUmFuZ2Uoc3RhcnQubGluZU51bWJlciwgc3RhcnQuY29sdW1uLCBlbmQubGluZU51bWJlciwgZW5kLmNvbHVtbiksXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHsgaW5saW5lQ2xhc3NOYW1lOiBcImhpZ2hsaWdodC1cIiArIGNvbmZpZy50eXBlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZGVjb3JhdGlvbkxvY2spIHtcbiAgICAgICAgICBzYW5kYm94LmVkaXRvci5kZWx0YURlY29yYXRpb25zKGRlY29yYXRpb25zLCBbXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQgPSAoaT86IChrZXk6IHN0cmluZykgPT4gc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LXJlcXVpcmVkXCIpKSByZXR1cm5cbiAgICAgIGNvbnN0IGxvY2FsaXplID0gaSB8fCAod2luZG93IGFzIGFueSkuaVxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgIGxpLmlkID0gXCJyZXN0YXJ0LXJlcXVpcmVkXCJcblxuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICBhLnN0eWxlLmNvbG9yID0gXCIjYzYzMTMxXCJcbiAgICAgIGEudGV4dENvbnRlbnQgPSBsb2NhbGl6ZShcInBsYXlfc2lkZWJhcl9vcHRpb25zX3Jlc3RhcnRfcmVxdWlyZWRcIilcbiAgICAgIGEuaHJlZiA9IFwiI1wiXG4gICAgICBhLm9uY2xpY2sgPSAoKSA9PiBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKVxuXG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyLXJpZ2h0XCIpWzBdXG4gICAgICBsaS5hcHBlbmRDaGlsZChhKVxuICAgICAgbmF2Lmluc2VydEJlZm9yZShsaSwgbmF2LmZpcnN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgbG9jYWxTdG9yYWdlT3B0aW9uID0gKHNldHRpbmc6IExvY2FsU3RvcmFnZU9wdGlvbikgPT4ge1xuICAgICAgLy8gVGhpbmsgYWJvdXQgdGhpcyBhcyBiZWluZyBzb21ldGhpbmcgd2hpY2ggeW91IHdhbnQgZW5hYmxlZCBieSBkZWZhdWx0IGFuZCBjYW4gc3VwcHJlc3Mgd2hldGhlclxuICAgICAgLy8gaXQgc2hvdWxkIGRvIHNvbWV0aGluZy5cbiAgICAgIGNvbnN0IGludmVydGVkTG9naWMgPSBzZXR0aW5nLmVtcHR5SW1wbGllc0VuYWJsZWRcblxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICBjb25zdCBzcGxpdCA9IHNldHRpbmcub25lbGluZSA/IFwiXCIgOiBcIjxici8+XCJcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGA8c3Bhbj4ke3NldHRpbmcuZGlzcGxheX08L3NwYW4+JHtzcGxpdH0ke3NldHRpbmcuYmx1cmJ9YFxuXG4gICAgICBjb25zdCBrZXkgPSBzZXR0aW5nLmZsYWdcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICBpbnB1dC5pZCA9IGtleVxuXG4gICAgICBpbnB1dC5jaGVja2VkID0gaW52ZXJ0ZWRMb2dpYyA/ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG5cbiAgICAgIGlucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgIGlmICghaW52ZXJ0ZWRMb2dpYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBcInRydWVcIilcbiAgICAgICAgICBlbHNlIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaW52ZXJ0ZWRMb2dpYykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBcInRydWVcIilcbiAgICAgICAgICBlbHNlIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5nLm9uY2hhbmdlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbmNoYW5nZSghIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmcucmVxdWlyZVJlc3RhcnQpIHtcbiAgICAgICAgICBkZWNsYXJlUmVzdGFydFJlcXVpcmVkKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsYWJlbC5odG1sRm9yID0gaW5wdXQuaWRcblxuICAgICAgbGkuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgICBsaS5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSlcbiAgICAgIHJldHVybiBsaVxuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IChzZXR0aW5nczogeyBsYWJlbDogc3RyaW5nOyBvbmNsaWNrPzogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkIH0pID0+IHtcbiAgICAgIGNvbnN0IGpvaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICAgIGpvaW4udHlwZSA9IFwiYnV0dG9uXCJcbiAgICAgIGpvaW4udmFsdWUgPSBzZXR0aW5ncy5sYWJlbFxuICAgICAgaWYgKHNldHRpbmdzLm9uY2xpY2spIHtcbiAgICAgICAgam9pbi5vbmNsaWNrID0gc2V0dGluZ3Mub25jbGlja1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoam9pbilcbiAgICAgIHJldHVybiBqb2luXG4gICAgfVxuXG4gICAgY29uc3QgY29kZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZUNvZGVQcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpXG4gICAgICBjb25zdCBjb2RlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIpXG5cbiAgICAgIGNvZGVFbGVtZW50LmlubmVySFRNTCA9IGNvZGVcblxuICAgICAgY3JlYXRlQ29kZVByZS5hcHBlbmRDaGlsZChjb2RlRWxlbWVudClcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb2RlUHJlKVxuXG4gICAgICByZXR1cm4gY29kZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RW1wdHlTY3JlZW4gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICBjbGVhcigpXG5cbiAgICAgIGNvbnN0IG5vRXJyb3JzTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIG5vRXJyb3JzTWVzc2FnZS5pZCA9IFwiZW1wdHktbWVzc2FnZS1jb250YWluZXJcIlxuXG4gICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2VcbiAgICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImVtcHR5LXBsdWdpbi1tZXNzYWdlXCIpXG4gICAgICBub0Vycm9yc01lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZURpdilcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vRXJyb3JzTWVzc2FnZSlcbiAgICAgIHJldHVybiBub0Vycm9yc01lc3NhZ2VcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYWJCYXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0YWJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICB0YWJCYXIuY2xhc3NMaXN0LmFkZChcInBsYXlncm91bmQtcGx1Z2luLXRhYnZpZXdcIilcblxuICAgICAgLyoqIFN1cHBvcnQgbGVmdC9yaWdodCBpbiB0aGUgdGFiIGJhciBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuICAgICAgbGV0IHRhYkZvY3VzID0gMFxuICAgICAgdGFiQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICBjb25zdCB0YWJzID0gdGFiQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcbiAgICAgICAgLy8gTW92ZSByaWdodFxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiIHx8IGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKVxuICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRhYkZvY3VzKytcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgdGFiRm9jdXMtLVxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIilcbiAgICAgICAgICA7KHRhYnNbdGFiRm9jdXNdIGFzIGFueSkuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQmFyKVxuICAgICAgcmV0dXJuIHRhYkJhclxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhYkJ1dHRvbiA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0YWJcIilcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGxpc3REaWFncyA9IChtb2RlbDogaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5lZGl0b3IuSVRleHRNb2RlbCwgZGlhZ3M6IERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb25bXSkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgZXJyb3JVTC5jbGFzc05hbWUgPSBcImNvbXBpbGVyLWRpYWdub3N0aWNzXCJcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yVUwpXG5cbiAgICAgIGRpYWdzLmZvckVhY2goZGlhZyA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkaWFnbm9zdGljXCIpXG4gICAgICAgIHN3aXRjaCAoZGlhZy5jYXRlZ29yeSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ3YXJuaW5nXCIpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwic3VnZ2VzdGlvblwiKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGlhZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gZGlhZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gc2FuZGJveC50cy5mbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGRpYWcubWVzc2FnZVRleHQsIFwiXFxuXCIpXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3JVTC5hcHBlbmRDaGlsZChsaSlcblxuICAgICAgICBpZiAoZGlhZy5zdGFydCAmJiBkaWFnLmxlbmd0aCkge1xuICAgICAgICAgIGFkZEVkaXRvckhvdmVyVG9FbGVtZW50KGxpLCB7IHN0YXJ0OiBkaWFnLnN0YXJ0LCBlbmQ6IGRpYWcuc3RhcnQgKyBkaWFnLmxlbmd0aCB9LCB7IHR5cGU6IFwiZXJyb3JcIiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoZGlhZy5zdGFydCAmJiBkaWFnLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGRpYWcuc3RhcnQpXG4gICAgICAgICAgICBzYW5kYm94LmVkaXRvci5yZXZlYWxMaW5lKHN0YXJ0LmxpbmVOdW1iZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZGlhZy5zdGFydCArIGRpYWcubGVuZ3RoKVxuICAgICAgICAgICAgZGVjb3JhdGlvbnMgPSBzYW5kYm94LmVkaXRvci5kZWx0YURlY29yYXRpb25zKGRlY29yYXRpb25zLCBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYW5nZTogbmV3IHNhbmRib3gubW9uYWNvLlJhbmdlKHN0YXJ0LmxpbmVOdW1iZXIsIHN0YXJ0LmNvbHVtbiwgZW5kLmxpbmVOdW1iZXIsIGVuZC5jb2x1bW4pLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgaW5saW5lQ2xhc3NOYW1lOiBcImVycm9yLWhpZ2hsaWdodFwiLCBpc1dob2xlTGluZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgZGVjb3JhdGlvbkxvY2sgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgZGVjb3JhdGlvbkxvY2sgPSBmYWxzZVxuICAgICAgICAgICAgICBzYW5kYm94LmVkaXRvci5kZWx0YURlY29yYXRpb25zKGRlY29yYXRpb25zLCBbXSlcbiAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gZXJyb3JVTFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dPcHRpb25MaXN0ID0gKG9wdGlvbnM6IExvY2FsU3RvcmFnZU9wdGlvbltdLCBzdHlsZTogT3B0aW9uc0xpc3RDb25maWcpID0+IHtcbiAgICAgIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpXG4gICAgICBvbC5jbGFzc05hbWUgPSBzdHlsZS5zdHlsZSA9PT0gXCJzZXBhcmF0ZWRcIiA/IFwicGxheWdyb3VuZC1vcHRpb25zXCIgOiBcInBsYXlncm91bmQtb3B0aW9ucyB0aWdodFwiXG5cbiAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGUgPT09IFwicm93c1wiKSBvcHRpb24ub25lbGluZSA9IHRydWVcbiAgICAgICAgaWYgKHN0eWxlLnJlcXVpcmVSZXN0YXJ0KSBvcHRpb24ucmVxdWlyZVJlc3RhcnQgPSB0cnVlXG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ0J1dHRvbiA9IGxvY2FsU3RvcmFnZU9wdGlvbihvcHRpb24pXG4gICAgICAgIG9sLmFwcGVuZENoaWxkKHNldHRpbmdCdXR0b24pXG4gICAgICB9KVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2wpXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQVNUVHJlZSA9IChub2RlOiBOb2RlKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBkaXYuY2xhc3NOYW1lID0gXCJhc3RcIlxuXG4gICAgICBjb25zdCBpbmZvRm9yTm9kZSA9IChub2RlOiBOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0cy5TeW50YXhLaW5kW25vZGUua2luZF1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHlwZSBOb2RlSW5mbyA9IFJldHVyblR5cGU8dHlwZW9mIGluZm9Gb3JOb2RlPlxuXG4gICAgICBjb25zdCByZW5kZXJMaXRlcmFsRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGluZm86IE5vZGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGNvbnN0IHR5cGVvZlNwYW4gPSBgYXN0LW5vZGUtJHt0eXBlb2YgdmFsdWV9YFxuICAgICAgICBsZXQgc3VmZml4ID0gXCJcIlxuICAgICAgICBpZiAoa2V5ID09PSBcImtpbmRcIikge1xuICAgICAgICAgIHN1ZmZpeCA9IGAgKFN5bnRheEtpbmQuJHtpbmZvLm5hbWV9KWBcbiAgICAgICAgfVxuICAgICAgICBsaS5pbm5lckhUTUwgPSBgJHtrZXl9OiA8c3BhbiBjbGFzcz0nJHt0eXBlb2ZTcGFufSc+JHt2YWx1ZX08L3NwYW4+JHtzdWZmaXh9YFxuICAgICAgICByZXR1cm4gbGlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVuZGVyU2luZ2xlQ2hpbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBOb2RlLCBkZXB0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGAke2tleX06IGBcblxuICAgICAgICByZW5kZXJJdGVtKGxpLCB2YWx1ZSwgZGVwdGggKyAxKVxuICAgICAgICByZXR1cm4gbGlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVuZGVyTWFueUNoaWxkcmVuID0gKGtleTogc3RyaW5nLCBub2RlczogTm9kZVtdLCBkZXB0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjaGlsZGVycy5jbGFzc0xpc3QuYWRkKFwiYXN0LWNoaWxkcmVuXCIpXG5cbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gYCR7a2V5fTogWzxici8+YFxuICAgICAgICBjaGlsZGVycy5hcHBlbmRDaGlsZChsaSlcblxuICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIHJlbmRlckl0ZW0oY2hpbGRlcnMsIG5vZGUsIGRlcHRoICsgMSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsaUVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBsaUVuZC5pbm5lckhUTUwgKz0gXCJdXCJcbiAgICAgICAgY2hpbGRlcnMuYXBwZW5kQ2hpbGQobGlFbmQpXG4gICAgICAgIHJldHVybiBjaGlsZGVyc1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZW5kZXJJdGVtID0gKHBhcmVudEVsZW1lbnQ6IEVsZW1lbnQsIG5vZGU6IE5vZGUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpdGVtRGl2KVxuICAgICAgICBpdGVtRGl2LmNsYXNzTmFtZSA9IFwiYXN0LXRyZWUtc3RhcnRcIlxuICAgICAgICBpdGVtRGl2LmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgaXRlbURpdi5kYXRhc2V0LnBvcyA9IG5vZGUucG9zXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgaXRlbURpdi5kYXRhc2V0LmVuZCA9IG5vZGUuZW5kXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgaXRlbURpdi5kYXRhc2V0LmRlcHRoID0gZGVwdGhcblxuICAgICAgICBpZiAoZGVwdGggPT09IDApIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIm9wZW5cIilcblxuICAgICAgICBjb25zdCBpbmZvID0gaW5mb0Zvck5vZGUobm9kZSlcblxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibm9kZS1uYW1lXCIpXG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBpbmZvLm5hbWVcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChhKVxuICAgICAgICBhLm9uY2xpY2sgPSBfID0+IGEucGFyZW50RWxlbWVudCEuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIilcbiAgICAgICAgYWRkRWRpdG9ySG92ZXJUb0VsZW1lbnQoYSwgeyBzdGFydDogbm9kZS5wb3MsIGVuZDogbm9kZS5lbmQgfSwgeyB0eXBlOiBcImluZm9cIiB9KVxuXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgcHJvcGVydGllcy5jbGFzc05hbWUgPSBcImFzdC10cmVlXCJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChwcm9wZXJ0aWVzKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG5vZGUpLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZmllbGQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuXG4gICAgICAgICAgaWYgKGZpZWxkID09PSBcInBhcmVudFwiIHx8IGZpZWxkID09PSBcImZsb3dOb2RlXCIpIHJldHVyblxuXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSAobm9kZSBhcyBhbnkpW2ZpZWxkXVxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWVbMF0gJiYgXCJwb3NcIiBpbiB2YWx1ZVswXSAmJiBcImVuZFwiIGluIHZhbHVlWzBdKSB7XG4gICAgICAgICAgICAvLyAgSXMgYW4gYXJyYXkgb2YgTm9kZXNcbiAgICAgICAgICAgIHByb3BlcnRpZXMuYXBwZW5kQ2hpbGQocmVuZGVyTWFueUNoaWxkcmVuKGZpZWxkLCB2YWx1ZSwgZGVwdGgpKVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIFwicG9zXCIgaW4gdmFsdWUgJiYgXCJlbmRcIiBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gSXMgYSBzaW5nbGUgY2hpbGQgcHJvcGVydHlcbiAgICAgICAgICAgIHByb3BlcnRpZXMuYXBwZW5kQ2hpbGQocmVuZGVyU2luZ2xlQ2hpbGQoZmllbGQsIHZhbHVlLCBkZXB0aCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuYXBwZW5kQ2hpbGQocmVuZGVyTGl0ZXJhbEZpZWxkKGZpZWxkLCB2YWx1ZSwgaW5mbykpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZW5kZXJJdGVtKGRpdiwgbm9kZSwgMClcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KVxuICAgICAgcmV0dXJuIGRpdlxuICAgIH1cblxuICAgIHR5cGUgVGV4dElucHV0Q29uZmlnID0ge1xuICAgICAgaWQ6IHN0cmluZ1xuICAgICAgcGxhY2Vob2xkZXI6IHN0cmluZ1xuXG4gICAgICBvbkNoYW5nZWQ/OiAodGV4dDogc3RyaW5nLCBpbnB1dDogSFRNTElucHV0RWxlbWVudCkgPT4gdm9pZFxuICAgICAgb25FbnRlcjogKHRleHQ6IHN0cmluZywgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHZvaWRcblxuICAgICAgdmFsdWU/OiBzdHJpbmdcbiAgICAgIGtlZXBWYWx1ZUFjcm9zc1JlbG9hZHM/OiB0cnVlXG4gICAgICBpc0VuYWJsZWQ/OiAoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IGJvb2xlYW5cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZXh0SW5wdXQgPSAoY29uZmlnOiBUZXh0SW5wdXRDb25maWcpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gICAgICBjb25zdCB0ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICB0ZXh0Ym94LmlkID0gY29uZmlnLmlkXG4gICAgICB0ZXh0Ym94LnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyXG4gICAgICB0ZXh0Ym94LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcbiAgICAgIHRleHRib3guYXV0b2NhcGl0YWxpemUgPSBcIm9mZlwiXG4gICAgICB0ZXh0Ym94LnNwZWxsY2hlY2sgPSBmYWxzZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGV4dGJveC5hdXRvY29ycmVjdCA9IFwib2ZmXCJcblxuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gXCJwbGF5Z3JvdW5kLWlucHV0LVwiICsgY29uZmlnLmlkXG5cbiAgICAgIGlmIChjb25maWcudmFsdWUpIHtcbiAgICAgICAgdGV4dGJveC52YWx1ZSA9IGNvbmZpZy52YWx1ZVxuICAgICAgfSBlbHNlIGlmIChjb25maWcua2VlcFZhbHVlQWNyb3NzUmVsb2Fkcykge1xuICAgICAgICBjb25zdCBzdG9yZWRRdWVyeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSlcbiAgICAgICAgaWYgKHN0b3JlZFF1ZXJ5KSB0ZXh0Ym94LnZhbHVlID0gc3RvcmVkUXVlcnlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5pc0VuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgZW5hYmxlZCA9IGNvbmZpZy5pc0VuYWJsZWQodGV4dGJveClcbiAgICAgICAgdGV4dGJveC5jbGFzc0xpc3QuYWRkKGVuYWJsZWQgPyBcImdvb2RcIiA6IFwiYmFkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0Ym94LmNsYXNzTGlzdC5hZGQoXCJnb29kXCIpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRleHRVcGRhdGUgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC52YWx1ZS50cmltKClcbiAgICAgICAgaWYgKGNvbmZpZy5rZWVwVmFsdWVBY3Jvc3NSZWxvYWRzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBocmVmKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcub25DaGFuZ2VkKSBjb25maWcub25DaGFuZ2VkKGUudGFyZ2V0LnZhbHVlLCB0ZXh0Ym94KVxuICAgICAgfVxuXG4gICAgICB0ZXh0Ym94LnN0eWxlLndpZHRoID0gXCI5MCVcIlxuICAgICAgdGV4dGJveC5zdHlsZS5oZWlnaHQgPSBcIjJyZW1cIlxuICAgICAgdGV4dGJveC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGV4dFVwZGF0ZSlcblxuICAgICAgLy8gU3VwcHJlc3MgdGhlIGVudGVyIGtleVxuICAgICAgdGV4dGJveC5vbmtleWRvd24gPSAoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVudGVyXCIgfHwgZXZ0LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGNvbmZpZy5vbkVudGVyKHRleHRib3gudmFsdWUsIHRleHRib3gpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0Ym94KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICByZXR1cm4gZm9ybVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvKiogQ2xlYXIgdGhlIHNpZGViYXIgKi9cbiAgICAgIGNsZWFyLFxuICAgICAgLyoqIFByZXNlbnQgY29kZSBpbiBhIHByZSA+IGNvZGUgICovXG4gICAgICBjb2RlLFxuICAgICAgLyoqIElkZWFsbHkgb25seSB1c2UgdGhpcyBvbmNlLCBhbmQgbWF5YmUgZXZlbiBwcmVmZXIgdXNpbmcgc3VidGl0bGVzIGV2ZXJ5d2hlcmUgKi9cbiAgICAgIHRpdGxlOiAodGl0bGU6IHN0cmluZykgPT4gZWwodGl0bGUsIFwiaDNcIiwgY29udGFpbmVyKSxcbiAgICAgIC8qKiBVc2VkIHRvIGRlbm90ZSBzZWN0aW9ucywgZ2l2ZSBpbmZvIGV0YyAqL1xuICAgICAgc3VidGl0bGU6IChzdWJ0aXRsZTogc3RyaW5nKSA9PiBlbChzdWJ0aXRsZSwgXCJoNFwiLCBjb250YWluZXIpLFxuICAgICAgLyoqIFVzZWQgdG8gc2hvdyBhIHBhcmFncmFwaCAqL1xuICAgICAgcDogKHN1YnRpdGxlOiBzdHJpbmcpID0+IGVsKHN1YnRpdGxlLCBcInBcIiwgY29udGFpbmVyKSxcbiAgICAgIC8qKiBXaGVuIHlvdSBjYW4ndCBkbyBzb21ldGhpbmcsIG9yIGhhdmUgbm90aGluZyB0byBzaG93ICovXG4gICAgICBzaG93RW1wdHlTY3JlZW4sXG4gICAgICAvKipcbiAgICAgICAqIFNob3dzIGEgbGlzdCBvZiBob3ZlcmFibGUsIGFuZCBzZWxlY3RhYmxlIGl0ZW1zIChlcnJvcnMsIGhpZ2hsaWdodHMgZXRjKSB3aGljaCBoYXZlIGNvZGUgcmVwcmVzZW50YXRpb24uXG4gICAgICAgKiBUaGUgdHlwZSBpcyBxdWl0ZSBzbWFsbCwgc28gaXQgc2hvdWxkIGJlIHZlcnkgZmVhc2libGUgZm9yIHlvdSB0byBtYXNzYWdlIG90aGVyIGRhdGEgdG8gZml0IGludG8gdGhpcyBmdW5jdGlvblxuICAgICAgICovXG4gICAgICBsaXN0RGlhZ3MsXG4gICAgICAvKiogU2hvd3MgYSBzaW5nbGUgb3B0aW9uIGluIGxvY2FsIHN0b3JhZ2UgKGFkZHMgYW4gbGkgdG8gdGhlIGNvbnRhaW5lciBCVFcpICovXG4gICAgICBsb2NhbFN0b3JhZ2VPcHRpb24sXG4gICAgICAvKiogVXNlcyBsb2NhbFN0b3JhZ2VPcHRpb24gdG8gY3JlYXRlIGEgbGlzdCBvZiBvcHRpb25zICovXG4gICAgICBzaG93T3B0aW9uTGlzdCxcbiAgICAgIC8qKiBTaG93cyBhIGZ1bGwtd2lkdGggdGV4dCBpbnB1dCAqL1xuICAgICAgY3JlYXRlVGV4dElucHV0LFxuICAgICAgLyoqIFJlbmRlcnMgYW4gQVNUIHRyZWUgKi9cbiAgICAgIGNyZWF0ZUFTVFRyZWUsXG4gICAgICAvKiogQ3JlYXRlcyBhbiBpbnB1dCBidXR0b24gKi9cbiAgICAgIGJ1dHRvbixcbiAgICAgIC8qKiBVc2VkIHRvIHJlLWNyZWF0ZSBhIFVJIGxpa2UgdGhlIHRhYiBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgcGx1Z2lucyBzZWN0aW9uICovXG4gICAgICBjcmVhdGVUYWJCYXIsXG4gICAgICAvKiogVXNlZCB3aXRoIGNyZWF0ZVRhYkJhciB0byBhZGQgYnV0dG9ucyAqL1xuICAgICAgY3JlYXRlVGFiQnV0dG9uLFxuICAgICAgLyoqIEEgZ2VuZXJhbCBcInJlc3RhcnQgeW91ciBicm93c2VyXCIgbWVzc2FnZSAgKi9cbiAgICAgIGRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQsXG4gICAgfVxuICB9XG59XG4iXX0=