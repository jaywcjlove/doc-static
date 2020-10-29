define(["require", "exports", "../createUI", "../localizeWithFallback"], function (require, exports, createUI_1, localizeWithFallback_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.runWithCustomLogs = exports.clearLogs = exports.runPlugin = void 0;
    let allLogs = "";
    let addedClearAction = false;
    const runPlugin = (i, utils) => {
        const plugin = {
            id: "logs",
            displayName: i("play_sidebar_logs"),
            willMount: (sandbox, container) => {
                if (!addedClearAction) {
                    const ui = createUI_1.createUI();
                    addClearAction(sandbox, ui, i);
                }
                if (allLogs.length === 0) {
                    const noErrorsMessage = document.createElement("div");
                    noErrorsMessage.id = "empty-message-container";
                    container.appendChild(noErrorsMessage);
                    const message = document.createElement("div");
                    message.textContent = localizeWithFallback_1.localize("play_sidebar_logs_no_logs", "No logs");
                    message.classList.add("empty-plugin-message");
                    noErrorsMessage.appendChild(message);
                }
                const errorUL = document.createElement("div");
                errorUL.id = "log-container";
                container.appendChild(errorUL);
                const logs = document.createElement("div");
                logs.id = "log";
                logs.innerHTML = allLogs;
                errorUL.appendChild(logs);
            },
        };
        return plugin;
    };
    exports.runPlugin = runPlugin;
    const clearLogs = () => {
        allLogs = "";
        const logs = document.getElementById("log");
        if (logs) {
            logs.textContent = "";
        }
    };
    exports.clearLogs = clearLogs;
    const runWithCustomLogs = (closure, i) => {
        const noLogs = document.getElementById("empty-message-container");
        if (noLogs) {
            noLogs.style.display = "none";
        }
        rewireLoggingToElement(() => document.getElementById("log"), () => document.getElementById("log-container"), closure, true, i);
    };
    exports.runWithCustomLogs = runWithCustomLogs;
    // Thanks SO: https://stackoverflow.com/questions/20256760/javascript-console-log-to-html/35449256#35449256
    function rewireLoggingToElement(eleLocator, eleOverflowLocator, closure, autoScroll, i) {
        fixLoggingFunc("log", "LOG");
        fixLoggingFunc("debug", "DBG");
        fixLoggingFunc("warn", "WRN");
        fixLoggingFunc("error", "ERR");
        fixLoggingFunc("info", "INF");
        // @ts-expect-error
        console["oldclear"] = console.clear;
        console.clear = exports.clearLogs;
        closure.then(js => {
            try {
                eval(js);
            }
            catch (error) {
                console.error(i("play_run_js_fail"));
                console.error(error);
            }
            allLogs = allLogs + "<hr />";
            // @ts-expect-error
            console["clear"] = console["oldclear"];
            undoLoggingFunc("log");
            undoLoggingFunc("debug");
            undoLoggingFunc("warn");
            undoLoggingFunc("error");
            undoLoggingFunc("info");
            undoLoggingFunc("clear");
        });
        function undoLoggingFunc(name) {
            // @ts-ignore
            console[name] = console["old" + name];
        }
        function fixLoggingFunc(name, id) {
            // @ts-ignore
            console["old" + name] = console[name];
            // @ts-ignore
            console[name] = function (...objs) {
                const output = produceOutput(objs);
                const eleLog = eleLocator();
                const prefix = '[<span class="log-' + name + '">' + id + "</span>]: ";
                const eleContainerLog = eleOverflowLocator();
                allLogs = allLogs + prefix + output + "<br>";
                eleLog.innerHTML = allLogs;
                const scrollElement = eleContainerLog.parentElement;
                if (autoScroll && scrollElement) {
                    scrollToBottom(scrollElement);
                }
                // @ts-ignore
                console["old" + name].apply(undefined, objs);
            };
        }
        function scrollToBottom(element) {
            const overflowHeight = element.scrollHeight - element.clientHeight;
            const atBottom = element.scrollTop >= overflowHeight;
            if (!atBottom) {
                element.scrollTop = overflowHeight;
            }
        }
        const objectToText = (arg) => {
            const isObj = typeof arg === "object";
            let textRep = "";
            if (arg && arg.stack && arg.message) {
                // special case for err
                textRep = arg.message;
            }
            else if (arg === null) {
                textRep = "<span class='literal'>null</span>";
            }
            else if (arg === undefined) {
                textRep = "<span class='literal'>undefined</span>";
            }
            else if (Array.isArray(arg)) {
                textRep = "[" + arg.map(objectToText).join("<span class='comma'>, </span>") + "]";
            }
            else if (typeof arg === "string") {
                textRep = '"' + arg + '"';
            }
            else if (isObj) {
                const name = arg.constructor && arg.constructor.name;
                // No one needs to know an obj is an obj
                const nameWithoutObject = name && name === "Object" ? "" : name;
                const prefix = nameWithoutObject ? `${nameWithoutObject}: ` : "";
                textRep = prefix + JSON.stringify(arg, null, 2);
            }
            else {
                textRep = arg;
            }
            return textRep;
        };
        function produceOutput(args) {
            return args.reduce((output, arg, index) => {
                const textRep = objectToText(arg);
                const showComma = index !== args.length - 1;
                const comma = showComma ? "<span class='comma'>, </span>" : "";
                return output + textRep + comma + "&nbsp;";
            }, "");
        }
    }
    const addClearAction = (sandbox, ui, i) => {
        const clearLogsAction = {
            id: "clear-logs-play",
            label: "Clear Playground Logs",
            keybindings: [sandbox.monaco.KeyMod.CtrlCmd | sandbox.monaco.KeyCode.KEY_K],
            contextMenuGroupId: "run",
            contextMenuOrder: 1.5,
            run: function () {
                exports.clearLogs();
                ui.flashInfo(i("play_clear_logs"));
            },
        };
        sandbox.editor.addAction(clearLogsAction);
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvcnVudGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBS0EsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO0lBQ2hCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFBO0lBRXJCLE1BQU0sU0FBUyxHQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNuRCxNQUFNLE1BQU0sR0FBcUI7WUFDL0IsRUFBRSxFQUFFLE1BQU07WUFDVixXQUFXLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNyQixNQUFNLEVBQUUsR0FBRyxtQkFBUSxFQUFFLENBQUE7b0JBQ3JCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO2lCQUMvQjtnQkFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN4QixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNyRCxlQUFlLENBQUMsRUFBRSxHQUFHLHlCQUF5QixDQUFBO29CQUM5QyxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUV0QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUM3QyxPQUFPLENBQUMsV0FBVyxHQUFHLCtCQUFRLENBQUMsMkJBQTJCLEVBQUUsU0FBUyxDQUFDLENBQUE7b0JBQ3RFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7b0JBQzdDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENB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LE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFFM0Usa0JBQWtCLEVBQUUsS0FBSztZQUN6QixnQkFBZ0IsRUFBRSxHQUFHO1lBRXJCLEdBQUcsRUFBRTtnQkFDSCxpQkFBUyxFQUFFLENBQUE7Z0JBQ1gsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO1lBQ3BDLENBQUM7U0FDRixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDM0MsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FuZGJveCB9IGZyb20gXCJ0eXBlc2NyaXB0bGFuZy1vcmcvc3RhdGljL2pzL3NhbmRib3hcIlxuaW1wb3J0IHsgUGxheWdyb3VuZFBsdWdpbiwgUGx1Z2luRmFjdG9yeSB9IGZyb20gXCIuLlwiXG5pbXBvcnQgeyBjcmVhdGVVSSwgVUkgfSBmcm9tIFwiLi4vY3JlYXRlVUlcIlxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi4vbG9jYWxpemVXaXRoRmFsbGJhY2tcIlxuXG5sZXQgYWxsTG9ncyA9IFwiXCJcbmxldCBhZGRlZENsZWFyQWN0aW9uID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IHJ1blBsdWdpbjogUGx1Z2luRmFjdG9yeSA9IChpLCB1dGlscykgPT4ge1xuICBjb25zdCBwbHVnaW46IFBsYXlncm91bmRQbHVnaW4gPSB7XG4gICAgaWQ6IFwibG9nc1wiLFxuICAgIGRpc3BsYXlOYW1lOiBpKFwicGxheV9zaWRlYmFyX2xvZ3NcIiksXG4gICAgd2lsbE1vdW50OiAoc2FuZGJveCwgY29udGFpbmVyKSA9PiB7XG4gICAgICBpZiAoIWFkZGVkQ2xlYXJBY3Rpb24pIHtcbiAgICAgICAgY29uc3QgdWkgPSBjcmVhdGVVSSgpXG4gICAgICAgIGFkZENsZWFyQWN0aW9uKHNhbmRib3gsIHVpLCBpKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWxsTG9ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3Qgbm9FcnJvcnNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBub0Vycm9yc01lc3NhZ2UuaWQgPSBcImVtcHR5LW1lc3NhZ2UtY29udGFpbmVyXCJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vRXJyb3JzTWVzc2FnZSlcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gbG9jYWxpemUoXCJwbGF5X3NpZGViYXJfbG9nc19ub19sb2dzXCIsIFwiTm8gbG9nc1wiKVxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1wbHVnaW4tbWVzc2FnZVwiKVxuICAgICAgICBub0Vycm9yc01lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyb3JVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGVycm9yVUwuaWQgPSBcImxvZy1jb250YWluZXJcIlxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yVUwpXG5cbiAgICAgIGNvbnN0IGxvZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBsb2dzLmlkID0gXCJsb2dcIlxuICAgICAgbG9ncy5pbm5lckhUTUwgPSBhbGxMb2dzXG4gICAgICBlcnJvclVMLmFwcGVuZENoaWxkKGxvZ3MpXG4gICAgfSxcbiAgfVxuXG4gIHJldHVybiBwbHVnaW5cbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyTG9ncyA9ICgpID0+IHtcbiAgYWxsTG9ncyA9IFwiXCJcbiAgY29uc3QgbG9ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpXG4gIGlmIChsb2dzKSB7XG4gICAgbG9ncy50ZXh0Q29udGVudCA9IFwiXCJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcnVuV2l0aEN1c3RvbUxvZ3MgPSAoY2xvc3VyZTogUHJvbWlzZTxzdHJpbmc+LCBpOiBGdW5jdGlvbikgPT4ge1xuICBjb25zdCBub0xvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtcHR5LW1lc3NhZ2UtY29udGFpbmVyXCIpXG4gIGlmIChub0xvZ3MpIHtcbiAgICBub0xvZ3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cblxuICByZXdpcmVMb2dnaW5nVG9FbGVtZW50KFxuICAgICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpISxcbiAgICAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZy1jb250YWluZXJcIikhLFxuICAgIGNsb3N1cmUsXG4gICAgdHJ1ZSxcbiAgICBpXG4gIClcbn1cblxuLy8gVGhhbmtzIFNPOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDI1Njc2MC9qYXZhc2NyaXB0LWNvbnNvbGUtbG9nLXRvLWh0bWwvMzU0NDkyNTYjMzU0NDkyNTZcblxuZnVuY3Rpb24gcmV3aXJlTG9nZ2luZ1RvRWxlbWVudChcbiAgZWxlTG9jYXRvcjogKCkgPT4gRWxlbWVudCxcbiAgZWxlT3ZlcmZsb3dMb2NhdG9yOiAoKSA9PiBFbGVtZW50LFxuICBjbG9zdXJlOiBQcm9taXNlPHN0cmluZz4sXG4gIGF1dG9TY3JvbGw6IGJvb2xlYW4sXG4gIGk6IEZ1bmN0aW9uXG4pIHtcbiAgZml4TG9nZ2luZ0Z1bmMoXCJsb2dcIiwgXCJMT0dcIilcbiAgZml4TG9nZ2luZ0Z1bmMoXCJkZWJ1Z1wiLCBcIkRCR1wiKVxuICBmaXhMb2dnaW5nRnVuYyhcIndhcm5cIiwgXCJXUk5cIilcbiAgZml4TG9nZ2luZ0Z1bmMoXCJlcnJvclwiLCBcIkVSUlwiKVxuICBmaXhMb2dnaW5nRnVuYyhcImluZm9cIiwgXCJJTkZcIilcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBjb25zb2xlW1wib2xkY2xlYXJcIl0gPSBjb25zb2xlLmNsZWFyXG4gIGNvbnNvbGUuY2xlYXIgPSBjbGVhckxvZ3NcblxuICBjbG9zdXJlLnRoZW4oanMgPT4ge1xuICAgIHRyeSB7XG4gICAgICBldmFsKGpzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGkoXCJwbGF5X3J1bl9qc19mYWlsXCIpKVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG5cbiAgICBhbGxMb2dzID0gYWxsTG9ncyArIFwiPGhyIC8+XCJcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjb25zb2xlW1wiY2xlYXJcIl0gPSBjb25zb2xlW1wib2xkY2xlYXJcIl1cbiAgICB1bmRvTG9nZ2luZ0Z1bmMoXCJsb2dcIilcbiAgICB1bmRvTG9nZ2luZ0Z1bmMoXCJkZWJ1Z1wiKVxuICAgIHVuZG9Mb2dnaW5nRnVuYyhcIndhcm5cIilcbiAgICB1bmRvTG9nZ2luZ0Z1bmMoXCJlcnJvclwiKVxuICAgIHVuZG9Mb2dnaW5nRnVuYyhcImluZm9cIilcbiAgICB1bmRvTG9nZ2luZ0Z1bmMoXCJjbGVhclwiKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHVuZG9Mb2dnaW5nRnVuYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc29sZVtuYW1lXSA9IGNvbnNvbGVbXCJvbGRcIiArIG5hbWVdXG4gIH1cblxuICBmdW5jdGlvbiBmaXhMb2dnaW5nRnVuYyhuYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc29sZVtcIm9sZFwiICsgbmFtZV0gPSBjb25zb2xlW25hbWVdXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnNvbGVbbmFtZV0gPSBmdW5jdGlvbiAoLi4ub2JqczogYW55W10pIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IHByb2R1Y2VPdXRwdXQob2JqcylcbiAgICAgIGNvbnN0IGVsZUxvZyA9IGVsZUxvY2F0b3IoKVxuICAgICAgY29uc3QgcHJlZml4ID0gJ1s8c3BhbiBjbGFzcz1cImxvZy0nICsgbmFtZSArICdcIj4nICsgaWQgKyBcIjwvc3Bhbj5dOiBcIlxuICAgICAgY29uc3QgZWxlQ29udGFpbmVyTG9nID0gZWxlT3ZlcmZsb3dMb2NhdG9yKClcbiAgICAgIGFsbExvZ3MgPSBhbGxMb2dzICsgcHJlZml4ICsgb3V0cHV0ICsgXCI8YnI+XCJcbiAgICAgIGVsZUxvZy5pbm5lckhUTUwgPSBhbGxMb2dzXG4gICAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gZWxlQ29udGFpbmVyTG9nLnBhcmVudEVsZW1lbnRcbiAgICAgIGlmIChhdXRvU2Nyb2xsICYmIHNjcm9sbEVsZW1lbnQpIHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oc2Nyb2xsRWxlbWVudClcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnNvbGVbXCJvbGRcIiArIG5hbWVdLmFwcGx5KHVuZGVmaW5lZCwgb2JqcylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUb0JvdHRvbShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgY29uc3Qgb3ZlcmZsb3dIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3QgYXRCb3R0b20gPSBlbGVtZW50LnNjcm9sbFRvcCA+PSBvdmVyZmxvd0hlaWdodFxuICAgIGlmICghYXRCb3R0b20pIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gb3ZlcmZsb3dIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjb25zdCBvYmplY3RUb1RleHQgPSAoYXJnOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGlzT2JqID0gdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIlxuICAgIGxldCB0ZXh0UmVwID0gXCJcIlxuICAgIGlmIChhcmcgJiYgYXJnLnN0YWNrICYmIGFyZy5tZXNzYWdlKSB7XG4gICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIGVyclxuICAgICAgdGV4dFJlcCA9IGFyZy5tZXNzYWdlXG4gICAgfSBlbHNlIGlmIChhcmcgPT09IG51bGwpIHtcbiAgICAgIHRleHRSZXAgPSBcIjxzcGFuIGNsYXNzPSdsaXRlcmFsJz5udWxsPC9zcGFuPlwiXG4gICAgfSBlbHNlIGlmIChhcmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGV4dFJlcCA9IFwiPHNwYW4gY2xhc3M9J2xpdGVyYWwnPnVuZGVmaW5lZDwvc3Bhbj5cIlxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICB0ZXh0UmVwID0gXCJbXCIgKyBhcmcubWFwKG9iamVjdFRvVGV4dCkuam9pbihcIjxzcGFuIGNsYXNzPSdjb21tYSc+LCA8L3NwYW4+XCIpICsgXCJdXCJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRleHRSZXAgPSAnXCInICsgYXJnICsgJ1wiJ1xuICAgIH0gZWxzZSBpZiAoaXNPYmopIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBhcmcuY29uc3RydWN0b3IgJiYgYXJnLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgIC8vIE5vIG9uZSBuZWVkcyB0byBrbm93IGFuIG9iaiBpcyBhbiBvYmpcbiAgICAgIGNvbnN0IG5hbWVXaXRob3V0T2JqZWN0ID0gbmFtZSAmJiBuYW1lID09PSBcIk9iamVjdFwiID8gXCJcIiA6IG5hbWVcbiAgICAgIGNvbnN0IHByZWZpeCA9IG5hbWVXaXRob3V0T2JqZWN0ID8gYCR7bmFtZVdpdGhvdXRPYmplY3R9OiBgIDogXCJcIlxuICAgICAgdGV4dFJlcCA9IHByZWZpeCArIEpTT04uc3RyaW5naWZ5KGFyZywgbnVsbCwgMilcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dFJlcCA9IGFyZyBhcyBhbnlcbiAgICB9XG4gICAgcmV0dXJuIHRleHRSZXBcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2R1Y2VPdXRwdXQoYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gYXJncy5yZWR1Y2UoKG91dHB1dDogYW55LCBhcmc6IGFueSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHRSZXAgPSBvYmplY3RUb1RleHQoYXJnKVxuICAgICAgY29uc3Qgc2hvd0NvbW1hID0gaW5kZXggIT09IGFyZ3MubGVuZ3RoIC0gMVxuICAgICAgY29uc3QgY29tbWEgPSBzaG93Q29tbWEgPyBcIjxzcGFuIGNsYXNzPSdjb21tYSc+LCA8L3NwYW4+XCIgOiBcIlwiXG4gICAgICByZXR1cm4gb3V0cHV0ICsgdGV4dFJlcCArIGNvbW1hICsgXCImbmJzcDtcIlxuICAgIH0sIFwiXCIpXG4gIH1cbn1cblxuY29uc3QgYWRkQ2xlYXJBY3Rpb24gPSAoc2FuZGJveDogU2FuZGJveCwgdWk6IFVJLCBpOiBhbnkpID0+IHtcbiAgY29uc3QgY2xlYXJMb2dzQWN0aW9uID0ge1xuICAgIGlkOiBcImNsZWFyLWxvZ3MtcGxheVwiLFxuICAgIGxhYmVsOiBcIkNsZWFyIFBsYXlncm91bmQgTG9nc1wiLFxuICAgIGtleWJpbmRpbmdzOiBbc2FuZGJveC5tb25hY28uS2V5TW9kLkN0cmxDbWQgfCBzYW5kYm94Lm1vbmFjby5LZXlDb2RlLktFWV9LXSxcblxuICAgIGNvbnRleHRNZW51R3JvdXBJZDogXCJydW5cIixcbiAgICBjb250ZXh0TWVudU9yZGVyOiAxLjUsXG5cbiAgICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyTG9ncygpXG4gICAgICB1aS5mbGFzaEluZm8oaShcInBsYXlfY2xlYXJfbG9nc1wiKSlcbiAgICB9LFxuICB9XG5cbiAgc2FuZGJveC5lZGl0b3IuYWRkQWN0aW9uKGNsZWFyTG9nc0FjdGlvbilcbn1cbiJdfQ==