define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUI = void 0;
    exports.createUI = () => {
        const flashInfo = (message) => {
            var _a;
            let flashBG = document.getElementById('flash-bg');
            if (flashBG) {
                (_a = flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
            }
            flashBG = document.createElement('div');
            flashBG.id = 'flash-bg';
            const p = document.createElement('p');
            p.textContent = message;
            flashBG.appendChild(p);
            document.body.appendChild(flashBG);
            setTimeout(() => {
                var _a;
                (_a = flashBG === null || flashBG === void 0 ? void 0 : flashBG.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(flashBG);
            }, 1000);
        };
        const createModalOverlay = (classList) => {
            document.querySelectorAll('.navbar-sub li.open').forEach(i => i.classList.remove('open'));
            const existingPopover = document.getElementById('popover-modal');
            if (existingPopover)
                existingPopover.parentElement.removeChild(existingPopover);
            const modalBG = document.createElement('div');
            modalBG.id = 'popover-background';
            document.body.appendChild(modalBG);
            const modal = document.createElement('div');
            modal.id = 'popover-modal';
            if (classList)
                modal.className = classList;
            const closeButton = document.createElement('button');
            closeButton.innerText = 'Close';
            closeButton.classList.add('close');
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
            document.onkeydown = function (evt) {
                evt = evt || window.event;
                var isEscape = false;
                if ('key' in evt) {
                    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
                }
                else {
                    // @ts-ignore - this used to be the case
                    isEscape = evt.keyCode === 27;
                }
                if (isEscape) {
                    close();
                }
            };
            document.body.appendChild(modal);
            return modal;
        };
        /** For showing a lot of code */
        const showModal = (code, subtitle, links) => {
            const modal = createModalOverlay();
            if (subtitle) {
                const titleElement = document.createElement('p');
                titleElement.textContent = subtitle;
                modal.appendChild(titleElement);
            }
            const pre = document.createElement('pre');
            modal.appendChild(pre);
            pre.textContent = code;
            const buttonContainer = document.createElement('div');
            const copyButton = document.createElement('button');
            copyButton.innerText = 'Copy';
            buttonContainer.appendChild(copyButton);
            const selectAllButton = document.createElement('button');
            selectAllButton.innerText = 'Select All';
            buttonContainer.appendChild(selectAllButton);
            modal.appendChild(buttonContainer);
            if (links) {
                Object.keys(links).forEach(name => {
                    const href = links[name];
                    const extraButton = document.createElement('button');
                    extraButton.innerText = name;
                    extraButton.onclick = () => (document.location = href);
                    buttonContainer.appendChild(extraButton);
                });
            }
            const selectAll = () => {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(pre);
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            };
            selectAll();
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9jcmVhdGVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBU2EsUUFBQSxRQUFRLEdBQUcsR0FBTyxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7O1lBQ3BDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBQSxPQUFPLENBQUMsYUFBYSwwQ0FBRSxXQUFXLENBQUMsT0FBTyxFQUFDO2FBQzVDO1lBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdkMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUE7WUFFdkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNyQyxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtZQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRWxDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7O2dCQUNkLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsMENBQUUsV0FBVyxDQUFDLE9BQU8sRUFBQztZQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDVixDQUFDLENBQUE7UUFFRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQ2hELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFD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LENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFBO29CQUMzQixTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO2lCQUMxQjtZQUNILENBQUMsQ0FBQTtZQUNELFNBQVMsRUFBRSxDQUFBO1lBRVgsZUFBZSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUE7WUFDbkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQTtRQUVELE9BQU87WUFDTCxrQkFBa0I7WUFDbEIsU0FBUztZQUNULFNBQVM7U0FDVixDQUFBO0lBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBVSSB7XG4gIC8qKiBTaG93IGEgdGV4dCBtb2RhbCwgd2l0aCBzb21lIGJ1dHRvbnMgKi9cbiAgc2hvd01vZGFsOiAobWVzc2FnZTogc3RyaW5nLCBzdWJ0aXRsZT86IHN0cmluZywgYnV0dG9ucz86IHsgW3RleHQ6IHN0cmluZ106IHN0cmluZyB9KSA9PiB2b2lkXG4gIC8qKiBBIHF1aWNrIGZsYXNoIG9mIHNvbWUgdGV4dCAqL1xuICBmbGFzaEluZm86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqIENyZWF0ZXMgYSBtb2RhbCBjb250YWluZXIgd2hpY2ggeW91IGNhbiBwdXQgeW91ciBvd24gRE9NIGVsZW1lbnRzIGluc2lkZSAqL1xuICBjcmVhdGVNb2RhbE92ZXJsYXk6IChjbGFzc2VzPzogc3RyaW5nKSA9PiBIVE1MRGl2RWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVUkgPSAoKTogVUkgPT4ge1xuICBjb25zdCBmbGFzaEluZm8gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGZsYXNoQkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhc2gtYmcnKVxuICAgIGlmIChmbGFzaEJHKSB7XG4gICAgICBmbGFzaEJHLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGZsYXNoQkcpXG4gICAgfVxuXG4gICAgZmxhc2hCRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmxhc2hCRy5pZCA9ICdmbGFzaC1iZydcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgIGZsYXNoQkcuYXBwZW5kQ2hpbGQocClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZsYXNoQkcpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZsYXNoQkc/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKGZsYXNoQkcpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU1vZGFsT3ZlcmxheSA9IChjbGFzc0xpc3Q/OiBzdHJpbmcpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyLXN1YiBsaS5vcGVuJykuZm9yRWFjaChpID0+IGkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpKVxuXG4gICAgY29uc3QgZXhpc3RpbmdQb3BvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcG92ZXItbW9kYWwnKVxuICAgIGlmIChleGlzdGluZ1BvcG92ZXIpIGV4aXN0aW5nUG9wb3Zlci5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChleGlzdGluZ1BvcG92ZXIpXG5cbiAgICBjb25zdCBtb2RhbEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbEJHLmlkID0gJ3BvcG92ZXItYmFja2dyb3VuZCdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQkcpXG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWwuaWQgPSAncG9wb3Zlci1tb2RhbCdcbiAgICBpZiAoY2xhc3NMaXN0KSBtb2RhbC5jbGFzc05hbWUgPSBjbGFzc0xpc3RcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSAnQ2xvc2UnXG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKVxuXG4gICAgY29uc3Qgb2xkT25rZXlEb3duID0gZG9jdW1lbnQub25rZXlkb3duXG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAgIG1vZGFsQkcucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobW9kYWxCRylcbiAgICAgIG1vZGFsLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG1vZGFsKVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gb2xkT25rZXlEb3duXG4gICAgfVxuXG4gICAgbW9kYWxCRy5vbmNsaWNrID0gY2xvc2VcbiAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gY2xvc2VcblxuICAgIC8vIFN1cHBvcnQgaGlkaW5nIHRoZSBtb2RhbCB2aWEgZXNjYXBlXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQgPSBldnQgfHwgd2luZG93LmV2ZW50XG4gICAgICB2YXIgaXNFc2NhcGUgPSBmYWxzZVxuICAgICAgaWYgKCdrZXknIGluIGV2dCkge1xuICAgICAgICBpc0VzY2FwZSA9IGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXkgPT09ICdFc2MnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBAdHMtaWdub3JlIC0gdGhpcyB1c2VkIHRvIGJlIHRoZSBjYXNlXG4gICAgICAgIGlzRXNjYXBlID0gZXZ0LmtleUNvZGUgPT09IDI3XG4gICAgICB9XG4gICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgY2xvc2UoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpXG5cbiAgICByZXR1cm4gbW9kYWxcbiAgfVxuXG4gIC8qKiBGb3Igc2hvd2luZyBhIGxvdCBvZiBjb2RlICovXG4gIGNvbnN0IHNob3dNb2RhbCA9IChjb2RlOiBzdHJpbmcsIHN1YnRpdGxlPzogc3RyaW5nLCBsaW5rcz86IHsgW3RleHQ6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVNb2RhbE92ZXJsYXkoKVxuXG4gICAgaWYgKHN1YnRpdGxlKSB7XG4gICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHN1YnRpdGxlXG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJylcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwcmUpXG4gICAgcHJlLnRleHRDb250ZW50ID0gY29kZVxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gJ0NvcHknXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlCdXR0b24pXG5cbiAgICBjb25zdCBzZWxlY3RBbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHNlbGVjdEFsbEJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IEFsbCdcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsQnV0dG9uKVxuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKVxuXG4gICAgaWYgKGxpbmtzKSB7XG4gICAgICBPYmplY3Qua2V5cyhsaW5rcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGxpbmtzW25hbWVdXG4gICAgICAgIGNvbnN0IGV4dHJhQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZXh0cmFCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgICAgICBleHRyYUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gKGRvY3VtZW50LmxvY2F0aW9uID0gaHJlZiBhcyBhbnkpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChleHRyYUJ1dHRvbilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0QWxsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhwcmUpXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG4gICAgICB9XG4gICAgfVxuICAgIHNlbGVjdEFsbCgpXG5cbiAgICBzZWxlY3RBbGxCdXR0b24ub25jbGljayA9IHNlbGVjdEFsbFxuICAgIGNvcHlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVNb2RhbE92ZXJsYXksXG4gICAgc2hvd01vZGFsLFxuICAgIGZsYXNoSW5mbyxcbiAgfVxufVxuIl19