define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUI = void 0;
    const createUI = () => {
        const flashInfo = (message) => {
            var _a;
            let flashBG = document.getElementById("flash-bg");
            if (flashBG) {
                (_a = flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
            }
            flashBG = document.createElement("div");
            flashBG.id = "flash-bg";
            const p = document.createElement("p");
            p.textContent = message;
            flashBG.appendChild(p);
            document.body.appendChild(flashBG);
            setTimeout(() => {
                var _a;
                (_a = flashBG === null || flashBG === void 0 ? void 0 : flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
            }, 1000);
        };
        const createModalOverlay = (postFocalElement, classList) => {
            document.querySelectorAll(".navbar-sub li.open").forEach(i => i.classList.remove("open"));
            const existingPopover = document.getElementById("popover-modal");
            if (existingPopover)
                existingPopover.parentElement.removeChild(existingPopover);
            const modalBG = document.createElement("div");
            modalBG.id = "popover-background";
            document.body.appendChild(modalBG);
            const modal = document.createElement("div");
            modal.id = "popover-modal";
            if (classList)
                modal.className = classList;
            const closeButton = document.createElement("button");
            closeButton.innerText = "Close";
            closeButton.classList.add("close");
            closeButton.tabIndex = 1;
            modal.appendChild(closeButton);
            const oldOnkeyDown = document.onkeydown;
            const close = () => {
                modalBG.parentNode.removeChild(modalBG);
                modal.parentNode.removeChild(modal);
                // @ts-ignore
                document.onkeydown = oldOnkeyDown;
                postFocalElement.focus();
            };
            modalBG.onclick = close;
            closeButton.onclick = close;
            // Support hiding the modal via escape
            document.onkeydown = whenEscape(close);
            document.body.appendChild(modal);
            return modal;
        };
        /** For showing a lot of code */
        const showModal = (code, postFocalElement, subtitle, links) => {
            const modal = createModalOverlay(postFocalElement);
            if (subtitle) {
                const titleElement = document.createElement("h3");
                titleElement.textContent = subtitle;
                titleElement.setAttribute("role", "alert");
                modal.appendChild(titleElement);
            }
            const textarea = document.createElement("textarea");
            textarea.autofocus = true;
            textarea.readOnly = true;
            textarea.wrap = "off";
            textarea.style.marginBottom = "20px";
            modal.appendChild(textarea);
            textarea.textContent = code;
            textarea.rows = 60;
            const buttonContainer = document.createElement("div");
            const copyButton = document.createElement("button");
            copyButton.innerText = "Copy";
            buttonContainer.appendChild(copyButton);
            const selectAllButton = document.createElement("button");
            selectAllButton.innerText = "Select All";
            buttonContainer.appendChild(selectAllButton);
            modal.appendChild(buttonContainer);
            const close = modal.querySelector(".close");
            close.addEventListener("keydown", e => {
                if (e.key === "Tab") {
                    ;
                    modal.querySelector("textarea").focus();
                    e.preventDefault();
                }
            });
            if (links) {
                Object.keys(links).forEach(name => {
                    const href = links[name];
                    const extraButton = document.createElement("button");
                    extraButton.innerText = name;
                    extraButton.onclick = () => (document.location = href);
                    buttonContainer.appendChild(extraButton);
                });
            }
            const selectAll = () => {
                textarea.select();
            };
            selectAll();
            const buttons = modal.querySelectorAll("button");
            const lastButton = buttons.item(buttons.length - 1);
            lastButton.addEventListener("keydown", e => {
                if (e.key === "Tab") {
                    ;
                    document.querySelector(".close").focus();
                    e.preventDefault();
                }
            });
            selectAllButton.onclick = selectAll;
            copyButton.onclick = () => {
                navigator.clipboard.writeText(code);
            };
        };
        return {
            createModalOverlay,
            showModal,
            flashInfo,
        };
    };
    exports.createUI = createUI;
    /**
     * Runs the closure when escape is tapped
     * @param func closure to run on escape being pressed
     */
    const whenEscape = (func) => (event) => {
        const evt = event || window.event;
        let isEscape = false;
        if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
        }
        else {
            // @ts-ignore - this used to be the case
            isEscape = evt.keyCode === 27;
        }
        if (isEscape) {
            func();
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9jcmVhdGVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBU08sTUFBTSxRQUFRLEdBQUcsR0FBTyxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7O1lBQ3BDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBQSxPQUFPLENBQUMsYUFBYSwwQ0FBRSxXQUFXLENBQUMsT0FBTyxFQUFDO2FBQzVDO1lBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUE7WUFFdkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNyQyxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRWxDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7O2dCQUNkLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsMENBQUUsV0FBVyxDQUFDLE9BQU8sRUFBQztZQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDVixDQUFDLENBQUE7UUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsZ0JBQTZCLEVBQUUsU0FBa0IsRUFBRSxFQUFFO1lBQy9FLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENB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LEVBQUUsQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtRQUNoRSxNQUFNLEdBQUcsR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUE7UUFDcEIsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ2hCLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQTtTQUNyRDthQUFNO1lBQ0wsd0NBQXdDO1lBQ3hDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQTtTQUM5QjtRQUNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxFQUFFLENBQUE7U0FDUDtJQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVUkge1xuICAvKiogU2hvdyBhIHRleHQgbW9kYWwsIHdpdGggc29tZSBidXR0b25zICovXG4gIHNob3dNb2RhbDogKG1lc3NhZ2U6IHN0cmluZywgcG9zdEZvY2FsRWxlbWVudDogSFRNTEVsZW1lbnQsIHN1YnRpdGxlPzogc3RyaW5nLCBidXR0b25zPzogeyBbdGV4dDogc3RyaW5nXTogc3RyaW5nIH0pID0+IHZvaWRcbiAgLyoqIEEgcXVpY2sgZmxhc2ggb2Ygc29tZSB0ZXh0ICovXG4gIGZsYXNoSW5mbzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxuICAvKiogQ3JlYXRlcyBhIG1vZGFsIGNvbnRhaW5lciB3aGljaCB5b3UgY2FuIHB1dCB5b3VyIG93biBET00gZWxlbWVudHMgaW5zaWRlICovXG4gIGNyZWF0ZU1vZGFsT3ZlcmxheTogKHBvc3RGb2NhbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzPzogc3RyaW5nKSA9PiBIVE1MRGl2RWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVUkgPSAoKTogVUkgPT4ge1xuICBjb25zdCBmbGFzaEluZm8gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGZsYXNoQkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsYXNoLWJnXCIpXG4gICAgaWYgKGZsYXNoQkcpIHtcbiAgICAgIGZsYXNoQkcucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoZmxhc2hCRylcbiAgICB9XG5cbiAgICBmbGFzaEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZsYXNoQkcuaWQgPSBcImZsYXNoLWJnXCJcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgZmxhc2hCRy5hcHBlbmRDaGlsZChwKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmxhc2hCRylcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmxhc2hCRz8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoZmxhc2hCRylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTW9kYWxPdmVybGF5ID0gKHBvc3RGb2NhbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc0xpc3Q/OiBzdHJpbmcpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhci1zdWIgbGkub3BlblwiKS5mb3JFYWNoKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKSlcblxuICAgIGNvbnN0IGV4aXN0aW5nUG9wb3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wb3Zlci1tb2RhbFwiKVxuICAgIGlmIChleGlzdGluZ1BvcG92ZXIpIGV4aXN0aW5nUG9wb3Zlci5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChleGlzdGluZ1BvcG92ZXIpXG5cbiAgICBjb25zdCBtb2RhbEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1vZGFsQkcuaWQgPSBcInBvcG92ZXItYmFja2dyb3VuZFwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbEJHKVxuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbW9kYWwuaWQgPSBcInBvcG92ZXItbW9kYWxcIlxuICAgIGlmIChjbGFzc0xpc3QpIG1vZGFsLmNsYXNzTmFtZSA9IGNsYXNzTGlzdFxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJDbG9zZVwiXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpXG4gICAgY2xvc2VCdXR0b24udGFiSW5kZXggPSAxXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXG5cbiAgICBjb25zdCBvbGRPbmtleURvd24gPSBkb2N1bWVudC5vbmtleWRvd25cblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgbW9kYWxCRy5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChtb2RhbEJHKVxuICAgICAgbW9kYWwucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobW9kYWwpXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBvbGRPbmtleURvd25cbiAgICAgIHBvc3RGb2NhbEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIG1vZGFsQkcub25jbGljayA9IGNsb3NlXG4gICAgY2xvc2VCdXR0b24ub25jbGljayA9IGNsb3NlXG5cbiAgICAvLyBTdXBwb3J0IGhpZGluZyB0aGUgbW9kYWwgdmlhIGVzY2FwZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHdoZW5Fc2NhcGUoY2xvc2UpXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxuXG4gICAgcmV0dXJuIG1vZGFsXG4gIH1cblxuICAvKiogRm9yIHNob3dpbmcgYSBsb3Qgb2YgY29kZSAqL1xuICBjb25zdCBzaG93TW9kYWwgPSAoY29kZTogc3RyaW5nLCBwb3N0Rm9jYWxFbGVtZW50OiBIVE1MRWxlbWVudCwgc3VidGl0bGU/OiBzdHJpbmcsIGxpbmtzPzogeyBbdGV4dDogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZU1vZGFsT3ZlcmxheShwb3N0Rm9jYWxFbGVtZW50KVxuXG4gICAgaWYgKHN1YnRpdGxlKSB7XG4gICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHN1YnRpdGxlXG4gICAgICB0aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImFsZXJ0XCIpXG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcbiAgICB0ZXh0YXJlYS5hdXRvZm9jdXMgPSB0cnVlXG4gICAgdGV4dGFyZWEucmVhZE9ubHkgPSB0cnVlXG4gICAgdGV4dGFyZWEud3JhcCA9IFwib2ZmXCJcbiAgICB0ZXh0YXJlYS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjIwcHhcIlxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHRleHRhcmVhKVxuICAgIHRleHRhcmVhLnRleHRDb250ZW50ID0gY29kZVxuICAgIHRleHRhcmVhLnJvd3MgPSA2MFxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgY29uc3QgY29weUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29weVwiXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlCdXR0b24pXG5cbiAgICBjb25zdCBzZWxlY3RBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgc2VsZWN0QWxsQnV0dG9uLmlubmVyVGV4dCA9IFwiU2VsZWN0IEFsbFwiXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEFsbEJ1dHRvbilcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcbiAgICBjb25zdCBjbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIikgYXMgSFRNTEVsZW1lbnRcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICA7IChtb2RhbC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIikgYXMgYW55KS5mb2N1cygpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAobGlua3MpIHtcbiAgICAgIE9iamVjdC5rZXlzKGxpbmtzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gbGlua3NbbmFtZV1cbiAgICAgICAgY29uc3QgZXh0cmFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGV4dHJhQnV0dG9uLmlubmVyVGV4dCA9IG5hbWVcbiAgICAgICAgZXh0cmFCdXR0b24ub25jbGljayA9ICgpID0+IChkb2N1bWVudC5sb2NhdGlvbiA9IGhyZWYgYXMgYW55KVxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZXh0cmFCdXR0b24pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICAgIHRleHRhcmVhLnNlbGVjdCgpXG4gICAgfVxuICAgIHNlbGVjdEFsbCgpXG5cbiAgICBjb25zdCBidXR0b25zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGxhc3RCdXR0b24gPSBidXR0b25zLml0ZW0oYnV0dG9ucy5sZW5ndGggLSAxKSBhcyBIVE1MRWxlbWVudFxuICAgIGxhc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgICAgOyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKSBhcyBhbnkpLmZvY3VzKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNlbGVjdEFsbEJ1dHRvbi5vbmNsaWNrID0gc2VsZWN0QWxsXG4gICAgY29weUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29kZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZU1vZGFsT3ZlcmxheSxcbiAgICBzaG93TW9kYWwsXG4gICAgZmxhc2hJbmZvLFxuICB9XG59XG5cbi8qKlxuICogUnVucyB0aGUgY2xvc3VyZSB3aGVuIGVzY2FwZSBpcyB0YXBwZWRcbiAqIEBwYXJhbSBmdW5jIGNsb3N1cmUgdG8gcnVuIG9uIGVzY2FwZSBiZWluZyBwcmVzc2VkXG4gKi9cbmNvbnN0IHdoZW5Fc2NhcGUgPSAoZnVuYzogKCkgPT4gdm9pZCkgPT4gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gIGNvbnN0IGV2dCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudFxuICBsZXQgaXNFc2NhcGUgPSBmYWxzZVxuICBpZiAoXCJrZXlcIiBpbiBldnQpIHtcbiAgICBpc0VzY2FwZSA9IGV2dC5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXZ0LmtleSA9PT0gXCJFc2NcIlxuICB9IGVsc2Uge1xuICAgIC8vIEB0cy1pZ25vcmUgLSB0aGlzIHVzZWQgdG8gYmUgdGhlIGNhc2VcbiAgICBpc0VzY2FwZSA9IGV2dC5rZXlDb2RlID09PSAyN1xuICB9XG4gIGlmIChpc0VzY2FwZSkge1xuICAgIGZ1bmMoKVxuICB9XG59XG4iXX0=