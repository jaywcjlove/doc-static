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
                    addedClearAction = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvcnVudGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBS0EsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO0lBQ2hCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFBO0lBRXJCLE1BQU0sU0FBUyxHQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNuRCxNQUFNLE1BQU0sR0FBcUI7WUFDL0IsRUFBRSxFQUFFLE1BQU07WUFDVixXQUFXLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNyQixNQUFNLEVBQUUsR0FBRyxtQkFBUSxFQUFFLENBQUE7b0JBQ3JCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUE7aUJBQ3hCO2dCQUVELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3JELGVBQWUsQ0FBQyxFQUFFLEdBQUcseUJBQXlCLENBQUE7b0JBQzlDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7b0JBRXRDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQzdDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsK0JBQVEsQ0FBQywyQkFBMkIsRUFBRSxTQUFTLENBQUMsQ0FBQTtvQkFDdEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtvQkFDN0MsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDckM7Z0JBRUQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDN0MsT0FBTyxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUE7Z0JBQzVCLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBRTlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFBO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO2dCQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzNCLENBQUM7U0FDRixDQUFBO1FBRUQsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDLENBQUE7SUFsQ1ksUUFBQSxTQUFTLGFBa0NyQjtJQUVNLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUM1QixPQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ1osTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQyxDQUFBO0lBTlksUUFBQSxTQUFTLGFBTXJCO0lBRU0sTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQXdCLEVBQUUsQ0FBVyxFQUFFLEVBQUU7UUFDekUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQ2pFLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1NBQzlCO1FBRUQsc0JBQXNCLENBQ3BCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFFLEVBQ3JDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFFLEVBQy9DLE9BQU8sRUFDUCxJQUFJLEVBQ0osQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDLENBQUE7SUFiWSxRQUFBLGlCQUFpQixxQkFhN0I7SUFFRCwyR0FBMkc7SUFFM0csU0FBUyxzQkFBc0IsQ0FDN0IsVUFBeUIsRUFDekIsa0JBQWlDLEVBQ2pDLE9BQXdCLEVBQ3hCLFVBQW1CLEVBQ25CLENBQVc7UUFFWCxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzVCLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUIsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM3QixjQUFjLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzlCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0IsbUJBQW1CO1FBQ25CLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLEdBQUcsaUJBQVMsQ0FBQTtRQUV6QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2hCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBQ1Q7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDckI7WUFFRCxPQUFPLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQTtZQUU1QixtQkFBbUI7WUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN0QyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN2QixlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDeEIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3ZCLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUVGLFNBQVMsZUFBZSxDQUFDLElBQVk7WUFDbkMsYUFBYTtZQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFZLEVBQUUsRUFBVTtZQUM5QyxhQUFhO1lBQ2IsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckMsYUFBYTtZQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBVztnQkFDdEMsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNsQyxNQUFNLE1BQU0sR0FBRyxVQUFVLEVBQUUsQ0FBQTtnQkFDM0IsTUFBTSxNQUFNLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsWUFBWSxDQUFBO2dCQUNyRSxNQUFNLGVBQWUsR0FBRyxrQkFBa0IsRUFBRSxDQUFBO2dCQUM1QyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFBO2dCQUM1QyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtnQkFDMUIsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQTtnQkFDbkQsSUFBSSxVQUFVLElBQUksYUFBYSxFQUFFO29CQUMvQixjQUFjLENBQUMsYUFBYSxDQUFDLENBQUE7aUJBQzlCO2dCQUNELGFBQWE7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQzlDLENBQUMsQ0FBQTtRQUNILENBQUM7UUFFRCxTQUFTLGNBQWMsQ0FBQyxPQUFnQjtZQUN0QyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUE7WUFDbEUsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUE7WUFDcEQsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQTthQUNuQztRQUNILENBQUM7UUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVEsRUFBVSxFQUFFO1lBQ3hDLE1BQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQTtZQUNyQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNuQyx1QkFBdUI7Z0JBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFBO2FBQ3RCO2lCQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDdkIsT0FBTyxHQUFHLG1DQUFtQyxDQUFBO2FBQzlDO2lCQUFNLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxHQUFHLHdDQUF3QyxDQUFBO2FBQ25EO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQTthQUNsRjtpQkFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFBO2FBQzFCO2lCQUFNLElBQUksS0FBSyxFQUFFO2dCQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO2dCQUNwRCx3Q0FBd0M7Z0JBQ3hDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO2dCQUMvRCxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7Z0JBQ2hFLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ2hEO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxHQUFVLENBQUE7YUFDckI7WUFDRCxPQUFPLE9BQU8sQ0FBQTtRQUNoQixDQUFDLENBQUE7UUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFXO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQVcsRUFBRSxHQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2xELE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDakMsTUFBTSxTQUFTLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7Z0JBQzlELE9BQU8sTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFBO1lBQzVDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtRQUMxRCxNQUFNLGVBQWUsR0FBRztZQUN0QixFQUFFLEVBQUUsaUJBQWlCO1lBQ3JCLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUUzRSxrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGdCQUFnQixFQUFFLEdBQUc7WUFFckIsR0FBRyxFQUFFO2dCQUNILGlCQUFTLEVBQUUsQ0FBQTtnQkFDWCxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7WUFDcEMsQ0FBQztTQUNGLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUMzQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW5kYm94IH0gZnJvbSBcInR5cGVzY3JpcHRsYW5nLW9yZy9zdGF0aWMvanMvc2FuZGJveFwiXG5pbXBvcnQgeyBQbGF5Z3JvdW5kUGx1Z2luLCBQbHVnaW5GYWN0b3J5IH0gZnJvbSBcIi4uXCJcbmltcG9ydCB7IGNyZWF0ZVVJLCBVSSB9IGZyb20gXCIuLi9jcmVhdGVVSVwiXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuLi9sb2NhbGl6ZVdpdGhGYWxsYmFja1wiXG5cbmxldCBhbGxMb2dzID0gXCJcIlxubGV0IGFkZGVkQ2xlYXJBY3Rpb24gPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgcnVuUGx1Z2luOiBQbHVnaW5GYWN0b3J5ID0gKGksIHV0aWxzKSA9PiB7XG4gIGNvbnN0IHBsdWdpbjogUGxheWdyb3VuZFBsdWdpbiA9IHtcbiAgICBpZDogXCJsb2dzXCIsXG4gICAgZGlzcGxheU5hbWU6IGkoXCJwbGF5X3NpZGViYXJfbG9nc1wiKSxcbiAgICB3aWxsTW91bnQ6IChzYW5kYm94LCBjb250YWluZXIpID0+IHtcbiAgICAgIGlmICghYWRkZWRDbGVhckFjdGlvbikge1xuICAgICAgICBjb25zdCB1aSA9IGNyZWF0ZVVJKClcbiAgICAgICAgYWRkQ2xlYXJBY3Rpb24oc2FuZGJveCwgdWksIGkpXG4gICAgICAgIGFkZGVkQ2xlYXJBY3Rpb24gPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChhbGxMb2dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBub0Vycm9yc01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG5vRXJyb3JzTWVzc2FnZS5pZCA9IFwiZW1wdHktbWVzc2FnZS1jb250YWluZXJcIlxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9FcnJvcnNNZXNzYWdlKVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBsb2NhbGl6ZShcInBsYXlfc2lkZWJhcl9sb2dzX25vX2xvZ3NcIiwgXCJObyBsb2dzXCIpXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImVtcHR5LXBsdWdpbi1tZXNzYWdlXCIpXG4gICAgICAgIG5vRXJyb3JzTWVzc2FnZS5hcHBlbmRDaGlsZChtZXNzYWdlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJvclVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgZXJyb3JVTC5pZCA9IFwibG9nLWNvbnRhaW5lclwiXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JVTClcblxuICAgICAgY29uc3QgbG9ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIGxvZ3MuaWQgPSBcImxvZ1wiXG4gICAgICBsb2dzLmlubmVySFRNTCA9IGFsbExvZ3NcbiAgICAgIGVycm9yVUwuYXBwZW5kQ2hpbGQobG9ncylcbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIHBsdWdpblxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJMb2dzID0gKCkgPT4ge1xuICBhbGxMb2dzID0gXCJcIlxuICBjb25zdCBsb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIilcbiAgaWYgKGxvZ3MpIHtcbiAgICBsb2dzLnRleHRDb250ZW50ID0gXCJcIlxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBydW5XaXRoQ3VzdG9tTG9ncyA9IChjbG9zdXJlOiBQcm9taXNlPHN0cmluZz4sIGk6IEZ1bmN0aW9uKSA9PiB7XG4gIGNvbnN0IG5vTG9ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wdHktbWVzc2FnZS1jb250YWluZXJcIilcbiAgaWYgKG5vTG9ncykge1xuICAgIG5vTG9ncy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfVxuXG4gIHJld2lyZUxvZ2dpbmdUb0VsZW1lbnQoXG4gICAgKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dcIikhLFxuICAgICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nLWNvbnRhaW5lclwiKSEsXG4gICAgY2xvc3VyZSxcbiAgICB0cnVlLFxuICAgIGlcbiAgKVxufVxuXG4vLyBUaGFua3MgU086IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMjU2NzYwL2phdmFzY3JpcHQtY29uc29sZS1sb2ctdG8taHRtbC8zNTQ0OTI1NiMzNTQ0OTI1NlxuXG5mdW5jdGlvbiByZXdpcmVMb2dnaW5nVG9FbGVtZW50KFxuICBlbGVMb2NhdG9yOiAoKSA9PiBFbGVtZW50LFxuICBlbGVPdmVyZmxvd0xvY2F0b3I6ICgpID0+IEVsZW1lbnQsXG4gIGNsb3N1cmU6IFByb21pc2U8c3RyaW5nPixcbiAgYXV0b1Njcm9sbDogYm9vbGVhbixcbiAgaTogRnVuY3Rpb25cbikge1xuICBmaXhMb2dnaW5nRnVuYyhcImxvZ1wiLCBcIkxPR1wiKVxuICBmaXhMb2dnaW5nRnVuYyhcImRlYnVnXCIsIFwiREJHXCIpXG4gIGZpeExvZ2dpbmdGdW5jKFwid2FyblwiLCBcIldSTlwiKVxuICBmaXhMb2dnaW5nRnVuYyhcImVycm9yXCIsIFwiRVJSXCIpXG4gIGZpeExvZ2dpbmdGdW5jKFwiaW5mb1wiLCBcIklORlwiKVxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGNvbnNvbGVbXCJvbGRjbGVhclwiXSA9IGNvbnNvbGUuY2xlYXJcbiAgY29uc29sZS5jbGVhciA9IGNsZWFyTG9nc1xuXG4gIGNsb3N1cmUudGhlbihqcyA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGV2YWwoanMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoaShcInBsYXlfcnVuX2pzX2ZhaWxcIikpXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cblxuICAgIGFsbExvZ3MgPSBhbGxMb2dzICsgXCI8aHIgLz5cIlxuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNvbnNvbGVbXCJjbGVhclwiXSA9IGNvbnNvbGVbXCJvbGRjbGVhclwiXVxuICAgIHVuZG9Mb2dnaW5nRnVuYyhcImxvZ1wiKVxuICAgIHVuZG9Mb2dnaW5nRnVuYyhcImRlYnVnXCIpXG4gICAgdW5kb0xvZ2dpbmdGdW5jKFwid2FyblwiKVxuICAgIHVuZG9Mb2dnaW5nRnVuYyhcImVycm9yXCIpXG4gICAgdW5kb0xvZ2dpbmdGdW5jKFwiaW5mb1wiKVxuICAgIHVuZG9Mb2dnaW5nRnVuYyhcImNsZWFyXCIpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdW5kb0xvZ2dpbmdGdW5jKG5hbWU6IHN0cmluZykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zb2xlW25hbWVdID0gY29uc29sZVtcIm9sZFwiICsgbmFtZV1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpeExvZ2dpbmdGdW5jKG5hbWU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zb2xlW1wib2xkXCIgKyBuYW1lXSA9IGNvbnNvbGVbbmFtZV1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc29sZVtuYW1lXSA9IGZ1bmN0aW9uICguLi5vYmpzOiBhbnlbXSkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gcHJvZHVjZU91dHB1dChvYmpzKVxuICAgICAgY29uc3QgZWxlTG9nID0gZWxlTG9jYXRvcigpXG4gICAgICBjb25zdCBwcmVmaXggPSAnWzxzcGFuIGNsYXNzPVwibG9nLScgKyBuYW1lICsgJ1wiPicgKyBpZCArIFwiPC9zcGFuPl06IFwiXG4gICAgICBjb25zdCBlbGVDb250YWluZXJMb2cgPSBlbGVPdmVyZmxvd0xvY2F0b3IoKVxuICAgICAgYWxsTG9ncyA9IGFsbExvZ3MgKyBwcmVmaXggKyBvdXRwdXQgKyBcIjxicj5cIlxuICAgICAgZWxlTG9nLmlubmVySFRNTCA9IGFsbExvZ3NcbiAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSBlbGVDb250YWluZXJMb2cucGFyZW50RWxlbWVudFxuICAgICAgaWYgKGF1dG9TY3JvbGwgJiYgc2Nyb2xsRWxlbWVudCkge1xuICAgICAgICBzY3JvbGxUb0JvdHRvbShzY3JvbGxFbGVtZW50KVxuICAgICAgfVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc29sZVtcIm9sZFwiICsgbmFtZV0uYXBwbHkodW5kZWZpbmVkLCBvYmpzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBvdmVyZmxvd0hlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBhdEJvdHRvbSA9IGVsZW1lbnQuc2Nyb2xsVG9wID49IG92ZXJmbG93SGVpZ2h0XG4gICAgaWYgKCFhdEJvdHRvbSkge1xuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBvdmVyZmxvd0hlaWdodFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9iamVjdFRvVGV4dCA9IChhcmc6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgaXNPYmogPSB0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiXG4gICAgbGV0IHRleHRSZXAgPSBcIlwiXG4gICAgaWYgKGFyZyAmJiBhcmcuc3RhY2sgJiYgYXJnLm1lc3NhZ2UpIHtcbiAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgZXJyXG4gICAgICB0ZXh0UmVwID0gYXJnLm1lc3NhZ2VcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gbnVsbCkge1xuICAgICAgdGV4dFJlcCA9IFwiPHNwYW4gY2xhc3M9J2xpdGVyYWwnPm51bGw8L3NwYW4+XCJcbiAgICB9IGVsc2UgaWYgKGFyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZXh0UmVwID0gXCI8c3BhbiBjbGFzcz0nbGl0ZXJhbCc+dW5kZWZpbmVkPC9zcGFuPlwiXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgIHRleHRSZXAgPSBcIltcIiArIGFyZy5tYXAob2JqZWN0VG9UZXh0KS5qb2luKFwiPHNwYW4gY2xhc3M9J2NvbW1hJz4sIDwvc3Bhbj5cIikgKyBcIl1cIlxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGV4dFJlcCA9ICdcIicgKyBhcmcgKyAnXCInXG4gICAgfSBlbHNlIGlmIChpc09iaikge1xuICAgICAgY29uc3QgbmFtZSA9IGFyZy5jb25zdHJ1Y3RvciAmJiBhcmcuY29uc3RydWN0b3IubmFtZVxuICAgICAgLy8gTm8gb25lIG5lZWRzIHRvIGtub3cgYW4gb2JqIGlzIGFuIG9ialxuICAgICAgY29uc3QgbmFtZVdpdGhvdXRPYmplY3QgPSBuYW1lICYmIG5hbWUgPT09IFwiT2JqZWN0XCIgPyBcIlwiIDogbmFtZVxuICAgICAgY29uc3QgcHJlZml4ID0gbmFtZVdpdGhvdXRPYmplY3QgPyBgJHtuYW1lV2l0aG91dE9iamVjdH06IGAgOiBcIlwiXG4gICAgICB0ZXh0UmVwID0gcHJlZml4ICsgSlNPTi5zdHJpbmdpZnkoYXJnLCBudWxsLCAyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0UmVwID0gYXJnIGFzIGFueVxuICAgIH1cbiAgICByZXR1cm4gdGV4dFJlcFxuICB9XG5cbiAgZnVuY3Rpb24gcHJvZHVjZU91dHB1dChhcmdzOiBhbnlbXSkge1xuICAgIHJldHVybiBhcmdzLnJlZHVjZSgob3V0cHV0OiBhbnksIGFyZzogYW55LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dFJlcCA9IG9iamVjdFRvVGV4dChhcmcpXG4gICAgICBjb25zdCBzaG93Q29tbWEgPSBpbmRleCAhPT0gYXJncy5sZW5ndGggLSAxXG4gICAgICBjb25zdCBjb21tYSA9IHNob3dDb21tYSA/IFwiPHNwYW4gY2xhc3M9J2NvbW1hJz4sIDwvc3Bhbj5cIiA6IFwiXCJcbiAgICAgIHJldHVybiBvdXRwdXQgKyB0ZXh0UmVwICsgY29tbWEgKyBcIiZuYnNwO1wiXG4gICAgfSwgXCJcIilcbiAgfVxufVxuXG5jb25zdCBhZGRDbGVhckFjdGlvbiA9IChzYW5kYm94OiBTYW5kYm94LCB1aTogVUksIGk6IGFueSkgPT4ge1xuICBjb25zdCBjbGVhckxvZ3NBY3Rpb24gPSB7XG4gICAgaWQ6IFwiY2xlYXItbG9ncy1wbGF5XCIsXG4gICAgbGFiZWw6IFwiQ2xlYXIgUGxheWdyb3VuZCBMb2dzXCIsXG4gICAga2V5YmluZGluZ3M6IFtzYW5kYm94Lm1vbmFjby5LZXlNb2QuQ3RybENtZCB8IHNhbmRib3gubW9uYWNvLktleUNvZGUuS0VZX0tdLFxuXG4gICAgY29udGV4dE1lbnVHcm91cElkOiBcInJ1blwiLFxuICAgIGNvbnRleHRNZW51T3JkZXI6IDEuNSxcblxuICAgIHJ1bjogZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJMb2dzKClcbiAgICAgIHVpLmZsYXNoSW5mbyhpKFwicGxheV9jbGVhcl9sb2dzXCIpKVxuICAgIH0sXG4gIH1cblxuICBzYW5kYm94LmVkaXRvci5hZGRBY3Rpb24oY2xlYXJMb2dzQWN0aW9uKVxufVxuIl19