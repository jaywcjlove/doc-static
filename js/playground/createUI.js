define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUI = void 0;
    exports.createUI = () => {
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
        const createModalOverlay = (classList) => {
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
            };
            modalBG.onclick = close;
            closeButton.onclick = close;
            // Support hiding the modal via escape
            document.onkeydown = whenEscape(close);
            document.body.appendChild(modal);
            return modal;
        };
        /** For showing a lot of code */
        const showModal = (code, subtitle, links) => {
            const modal = createModalOverlay();
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
                if (e.keyCode === 9) {
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
                if (e.keyCode === 9) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9jcmVhdGVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBU2EsUUFBQSxRQUFRLEdBQUcsR0FBTyxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7O1lBQ3BDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBQSxPQUFPLENBQUMsYUFBYSwwQ0FBRSxXQUFXLENBQUMsT0FBTyxFQUFDO2FBQzVDO1lBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUE7WUFFdkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNyQyxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRWxDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7O2dCQUNkLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsMENBQUUsV0FBVyxDQUFDLE9BQU8sRUFBQztZQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDVixDQUFDLENBQUE7UUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQ2hELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFD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LFFBQVEsR0FBRyxLQUFLLENBQUE7UUFDcEIsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ2hCLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQTtTQUNyRDthQUFNO1lBQ0wsd0NBQXdDO1lBQ3hDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQTtTQUM5QjtRQUNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxFQUFFLENBQUE7U0FDUDtJQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVUkge1xuICAvKiogU2hvdyBhIHRleHQgbW9kYWwsIHdpdGggc29tZSBidXR0b25zICovXG4gIHNob3dNb2RhbDogKG1lc3NhZ2U6IHN0cmluZywgc3VidGl0bGU/OiBzdHJpbmcsIGJ1dHRvbnM/OiB7IFt0ZXh0OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4gdm9pZFxuICAvKiogQSBxdWljayBmbGFzaCBvZiBzb21lIHRleHQgKi9cbiAgZmxhc2hJbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXG4gIC8qKiBDcmVhdGVzIGEgbW9kYWwgY29udGFpbmVyIHdoaWNoIHlvdSBjYW4gcHV0IHlvdXIgb3duIERPTSBlbGVtZW50cyBpbnNpZGUgKi9cbiAgY3JlYXRlTW9kYWxPdmVybGF5OiAoY2xhc3Nlcz86IHN0cmluZykgPT4gSFRNTERpdkVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVJID0gKCk6IFVJID0+IHtcbiAgY29uc3QgZmxhc2hJbmZvID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIGxldCBmbGFzaEJHID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGFzaC1iZ1wiKVxuICAgIGlmIChmbGFzaEJHKSB7XG4gICAgICBmbGFzaEJHLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGZsYXNoQkcpXG4gICAgfVxuXG4gICAgZmxhc2hCRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmbGFzaEJHLmlkID0gXCJmbGFzaC1iZ1wiXG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIGZsYXNoQkcuYXBwZW5kQ2hpbGQocClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZsYXNoQkcpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZsYXNoQkc/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGZsYXNoQkcpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU1vZGFsT3ZlcmxheSA9IChjbGFzc0xpc3Q/OiBzdHJpbmcpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhci1zdWIgbGkub3BlblwiKS5mb3JFYWNoKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKSlcblxuICAgIGNvbnN0IGV4aXN0aW5nUG9wb3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wb3Zlci1tb2RhbFwiKVxuICAgIGlmIChleGlzdGluZ1BvcG92ZXIpIGV4aXN0aW5nUG9wb3Zlci5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChleGlzdGluZ1BvcG92ZXIpXG5cbiAgICBjb25zdCBtb2RhbEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1vZGFsQkcuaWQgPSBcInBvcG92ZXItYmFja2dyb3VuZFwiXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbEJHKVxuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbW9kYWwuaWQgPSBcInBvcG92ZXItbW9kYWxcIlxuICAgIGlmIChjbGFzc0xpc3QpIG1vZGFsLmNsYXNzTmFtZSA9IGNsYXNzTGlzdFxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJDbG9zZVwiXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpXG4gICAgY2xvc2VCdXR0b24udGFiSW5kZXggPSAxXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXG5cbiAgICBjb25zdCBvbGRPbmtleURvd24gPSBkb2N1bWVudC5vbmtleWRvd25cblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgbW9kYWxCRy5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChtb2RhbEJHKVxuICAgICAgbW9kYWwucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobW9kYWwpXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBvbGRPbmtleURvd25cbiAgICB9XG5cbiAgICBtb2RhbEJHLm9uY2xpY2sgPSBjbG9zZVxuICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSBjbG9zZVxuXG4gICAgLy8gU3VwcG9ydCBoaWRpbmcgdGhlIG1vZGFsIHZpYSBlc2NhcGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSB3aGVuRXNjYXBlKGNsb3NlKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbClcblxuICAgIHJldHVybiBtb2RhbFxuICB9XG5cbiAgLyoqIEZvciBzaG93aW5nIGEgbG90IG9mIGNvZGUgKi9cbiAgY29uc3Qgc2hvd01vZGFsID0gKGNvZGU6IHN0cmluZywgc3VidGl0bGU/OiBzdHJpbmcsIGxpbmtzPzogeyBbdGV4dDogc3RyaW5nXTogc3RyaW5nIH0pID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZU1vZGFsT3ZlcmxheSgpXG5cbiAgICBpZiAoc3VidGl0bGUpIHtcbiAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gc3VidGl0bGVcbiAgICAgIHRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiYWxlcnRcIilcbiAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuICAgIHRleHRhcmVhLmF1dG9mb2N1cyA9IHRydWVcbiAgICB0ZXh0YXJlYS5yZWFkT25seSA9IHRydWVcbiAgICB0ZXh0YXJlYS53cmFwID0gXCJvZmZcIlxuICAgIHRleHRhcmVhLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMjBweFwiXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQodGV4dGFyZWEpXG4gICAgdGV4dGFyZWEudGV4dENvbnRlbnQgPSBjb2RlXG4gICAgdGV4dGFyZWEucm93cyA9IDYwXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBjb25zdCBjb3B5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gXCJDb3B5XCJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29weUJ1dHRvbilcblxuICAgIGNvbnN0IHNlbGVjdEFsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBzZWxlY3RBbGxCdXR0b24uaW5uZXJUZXh0ID0gXCJTZWxlY3QgQWxsXCJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnV0dG9uKVxuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKVxuICAgIGNvbnN0IGNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKSBhcyBIVE1MRWxlbWVudFxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgICA7KG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKSBhcyBhbnkpLmZvY3VzKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChsaW5rcykge1xuICAgICAgT2JqZWN0LmtleXMobGlua3MpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rc1tuYW1lXVxuICAgICAgICBjb25zdCBleHRyYUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgZXh0cmFCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgICAgICBleHRyYUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gKGRvY3VtZW50LmxvY2F0aW9uID0gaHJlZiBhcyBhbnkpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChleHRyYUJ1dHRvbilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0QWxsID0gKCkgPT4ge1xuICAgICAgdGV4dGFyZWEuc2VsZWN0KClcbiAgICB9XG4gICAgc2VsZWN0QWxsKClcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXG4gICAgY29uc3QgbGFzdEJ1dHRvbiA9IGJ1dHRvbnMuaXRlbShidXR0b25zLmxlbmd0aCAtIDEpIGFzIEhUTUxFbGVtZW50XG4gICAgbGFzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgOyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpIGFzIGFueSkuZm9jdXMoKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc2VsZWN0QWxsQnV0dG9uLm9uY2xpY2sgPSBzZWxlY3RBbGxcbiAgICBjb3B5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlTW9kYWxPdmVybGF5LFxuICAgIHNob3dNb2RhbCxcbiAgICBmbGFzaEluZm8sXG4gIH1cbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBjbG9zdXJlIHdoZW4gZXNjYXBlIGlzIHRhcHBlZFxuICogQHBhcmFtIGZ1bmMgY2xvc3VyZSB0byBydW4gb24gZXNjYXBlIGJlaW5nIHByZXNzZWRcbiAqL1xuY29uc3Qgd2hlbkVzY2FwZSA9IChmdW5jOiAoKSA9PiB2b2lkKSA9PiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgY29uc3QgZXZ0ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50XG4gIGxldCBpc0VzY2FwZSA9IGZhbHNlXG4gIGlmIChcImtleVwiIGluIGV2dCkge1xuICAgIGlzRXNjYXBlID0gZXZ0LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldnQua2V5ID09PSBcIkVzY1wiXG4gIH0gZWxzZSB7XG4gICAgLy8gQHRzLWlnbm9yZSAtIHRoaXMgdXNlZCB0byBiZSB0aGUgY2FzZVxuICAgIGlzRXNjYXBlID0gZXZ0LmtleUNvZGUgPT09IDI3XG4gIH1cbiAgaWYgKGlzRXNjYXBlKSB7XG4gICAgZnVuYygpXG4gIH1cbn1cbiJdfQ==