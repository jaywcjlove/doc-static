define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.activatePlugin = exports.createTabForPlugin = exports.createPluginContainer = exports.createTabBar = exports.setupSidebarToggle = exports.createSidebar = exports.sidebarHidden = exports.createDragBar = void 0;
    const createDragBar = () => {
        const sidebar = document.createElement("div");
        sidebar.className = "playground-dragbar";
        let left, right;
        const drag = (e) => {
            if (left && right) {
                // Get how far right the mouse is from the right
                const rightX = right.getBoundingClientRect().right;
                const offset = rightX - e.pageX;
                const screenClampLeft = window.innerWidth - 320;
                const clampedOffset = Math.min(Math.max(offset, 280), screenClampLeft);
                // Set the widths
                left.style.width = `calc(100% - ${clampedOffset}px)`;
                right.style.width = `${clampedOffset}px`;
                right.style.flexBasis = `${clampedOffset}px`;
                right.style.maxWidth = `${clampedOffset}px`;
                // Save the x coordinate of the
                if (window.localStorage) {
                    window.localStorage.setItem("dragbar-x", "" + clampedOffset);
                    window.localStorage.setItem("dragbar-window-width", "" + window.innerWidth);
                }
                // @ts-ignore - I know what I'm doing
                window.sandbox.editor.layout();
                // Don't allow selection
                e.stopPropagation();
                e.cancelBubble = true;
            }
        };
        sidebar.addEventListener("mousedown", e => {
            var _a;
            left = document.getElementById("editor-container");
            right = (_a = sidebar.parentElement) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("playground-sidebar").item(0);
            // Handle dragging all over the screen
            document.addEventListener("mousemove", drag);
            // Remove it when you lt go anywhere
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", drag);
                document.body.style.userSelect = "auto";
            });
            // Don't allow the drag to select text accidentally
            document.body.style.userSelect = "none";
            e.stopPropagation();
            e.cancelBubble = true;
        });
        return sidebar;
    };
    exports.createDragBar = createDragBar;
    const sidebarHidden = () => !!window.localStorage.getItem("sidebar-hidden");
    exports.sidebarHidden = sidebarHidden;
    const createSidebar = () => {
        const sidebar = document.createElement("div");
        sidebar.className = "playground-sidebar";
        // Start with the sidebar hidden on small screens
        const isTinyScreen = window.innerWidth < 800;
        // This is independent of the sizing below so that you keep the same sized sidebar
        if (isTinyScreen || exports.sidebarHidden()) {
            sidebar.style.display = "none";
        }
        if (window.localStorage && window.localStorage.getItem("dragbar-x")) {
            // Don't restore the x pos if the window isn't the same size
            if (window.innerWidth === Number(window.localStorage.getItem("dragbar-window-width"))) {
                // Set the dragger to the previous x pos
                let width = window.localStorage.getItem("dragbar-x");
                if (isTinyScreen) {
                    width = String(Math.min(Number(width), 280));
                }
                sidebar.style.width = `${width}px`;
                sidebar.style.flexBasis = `${width}px`;
                sidebar.style.maxWidth = `${width}px`;
                const left = document.getElementById("editor-container");
                left.style.width = `calc(100% - ${width}px)`;
            }
        }
        return sidebar;
    };
    exports.createSidebar = createSidebar;
    const toggleIconWhenOpen = "&#x21E5;";
    const toggleIconWhenClosed = "&#x21E4;";
    const setupSidebarToggle = () => {
        const toggle = document.getElementById("sidebar-toggle");
        const updateToggle = () => {
            const sidebar = window.document.querySelector(".playground-sidebar");
            const sidebarShowing = sidebar.style.display !== "none";
            toggle.innerHTML = sidebarShowing ? toggleIconWhenOpen : toggleIconWhenClosed;
            toggle.setAttribute("aria-label", sidebarShowing ? "Hide Sidebar" : "Show Sidebar");
        };
        toggle.onclick = () => {
            const sidebar = window.document.querySelector(".playground-sidebar");
            const newState = sidebar.style.display !== "none";
            if (newState) {
                localStorage.setItem("sidebar-hidden", "true");
                sidebar.style.display = "none";
            }
            else {
                localStorage.removeItem("sidebar-hidden");
                sidebar.style.display = "block";
            }
            updateToggle();
            // @ts-ignore - I know what I'm doing
            window.sandbox.editor.layout();
            return false;
        };
        // Ensure its set up at the start
        updateToggle();
    };
    exports.setupSidebarToggle = setupSidebarToggle;
    const createTabBar = () => {
        const tabBar = document.createElement("div");
        tabBar.classList.add("playground-plugin-tabview");
        tabBar.id = "playground-plugin-tabbar";
        tabBar.setAttribute("aria-label", "Tabs for plugins");
        tabBar.setAttribute("role", "tablist");
        /** Support left/right in the tab bar for accessibility */
        let tabFocus = 0;
        tabBar.addEventListener("keydown", e => {
            const tabs = document.querySelectorAll('.playground-plugin-tabview [role="tab"]');
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
        return tabBar;
    };
    exports.createTabBar = createTabBar;
    const createPluginContainer = () => {
        const container = document.createElement("div");
        container.setAttribute("role", "tabpanel");
        container.classList.add("playground-plugin-container");
        return container;
    };
    exports.createPluginContainer = createPluginContainer;
    const createTabForPlugin = (plugin) => {
        const element = document.createElement("button");
        element.setAttribute("role", "tab");
        element.id = "playground-plugin-tab-" + plugin.id;
        element.textContent = plugin.displayName;
        return element;
    };
    exports.createTabForPlugin = createTabForPlugin;
    const activatePlugin = (plugin, previousPlugin, sandbox, tabBar, container) => {
        let newPluginTab, oldPluginTab;
        // @ts-ignore - This works at runtime
        for (const tab of tabBar.children) {
            if (tab.id === `playground-plugin-tab-${plugin.id}`)
                newPluginTab = tab;
            if (previousPlugin && tab.id === `playground-plugin-tab-${previousPlugin.id}`)
                oldPluginTab = tab;
        }
        // @ts-ignore
        if (!newPluginTab)
            throw new Error("Could not get a tab for the plugin: " + plugin.displayName);
        // Tell the old plugin it's getting the boot
        // @ts-ignore
        if (previousPlugin && oldPluginTab) {
            if (previousPlugin.willUnmount)
                previousPlugin.willUnmount(sandbox, container);
            oldPluginTab.classList.remove("active");
            oldPluginTab.setAttribute("aria-selected", "false");
            oldPluginTab.setAttribute("tabindex", "-1");
        }
        // Wipe the sidebar
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // Start booting up the new plugin
        newPluginTab.classList.add("active");
        newPluginTab.setAttribute("aria-selected", "true");
        newPluginTab.setAttribute("tabindex", "0");
        // Tell the new plugin to start doing some work
        if (plugin.willMount)
            plugin.willMount(sandbox, container);
        if (plugin.modelChanged)
            plugin.modelChanged(sandbox, sandbox.getModel(), container);
        if (plugin.modelChangedDebounce)
            plugin.modelChangedDebounce(sandbox, sandbox.getModel(), container);
        if (plugin.didMount)
            plugin.didMount(sandbox, container);
        // Let the previous plugin do any slow work after it's all done
        if (previousPlugin && previousPlugin.didUnmount)
            previousPlugin.didUnmount(sandbox, container);
    };
    exports.activatePlugin = activatePlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9jcmVhdGVFbGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSU8sTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQTtRQUV4QyxJQUFJLElBQWlCLEVBQUUsS0FBa0IsQ0FBQTtRQUN6QyxNQUFNLElBQUksR0FBRyxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQzdCLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDakIsZ0RBQWdEO2dCQUNoRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUE7Z0JBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFBO2dCQUMvQixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtnQkFDL0MsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQTtnQkFFdEUsaUJBQWlCO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxlQUFlLGFBQWEsS0FBSyxDQUFBO2dCQUNwRCxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLGFBQWEsSUFBSSxDQUFBO2dCQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLGFBQWEsSUFBSSxDQUFBO2dCQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLGFBQWEsSUFBSSxDQUFBO2dCQUUzQywr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QVE7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUV4RCwrREFBK0Q7UUFDL0QsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLFVBQVU7WUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNoRyxDQUFDLENBQUE7SUE1Q1ksUUFBQSxjQUFjLGtCQTRDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5Z3JvdW5kUGx1Z2luIH0gZnJvbSBcIi5cIlxuXG50eXBlIFNhbmRib3ggPSBpbXBvcnQoXCJ0eXBlc2NyaXB0LXNhbmRib3hcIikuU2FuZGJveFxuXG5leHBvcnQgY29uc3QgY3JlYXRlRHJhZ0JhciA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgc2lkZWJhci5jbGFzc05hbWUgPSBcInBsYXlncm91bmQtZHJhZ2JhclwiXG5cbiAgbGV0IGxlZnQ6IEhUTUxFbGVtZW50LCByaWdodDogSFRNTEVsZW1lbnRcbiAgY29uc3QgZHJhZyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGxlZnQgJiYgcmlnaHQpIHtcbiAgICAgIC8vIEdldCBob3cgZmFyIHJpZ2h0IHRoZSBtb3VzZSBpcyBmcm9tIHRoZSByaWdodFxuICAgICAgY29uc3QgcmlnaHRYID0gcmlnaHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHRcbiAgICAgIGNvbnN0IG9mZnNldCA9IHJpZ2h0WCAtIGUucGFnZVhcbiAgICAgIGNvbnN0IHNjcmVlbkNsYW1wTGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMzIwXG4gICAgICBjb25zdCBjbGFtcGVkT2Zmc2V0ID0gTWF0aC5taW4oTWF0aC5tYXgob2Zmc2V0LCAyODApLCBzY3JlZW5DbGFtcExlZnQpXG5cbiAgICAgIC8vIFNldCB0aGUgd2lkdGhzXG4gICAgICBsZWZ0LnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSAtICR7Y2xhbXBlZE9mZnNldH1weClgXG4gICAgICByaWdodC5zdHlsZS53aWR0aCA9IGAke2NsYW1wZWRPZmZzZXR9cHhgXG4gICAgICByaWdodC5zdHlsZS5mbGV4QmFzaXMgPSBgJHtjbGFtcGVkT2Zmc2V0fXB4YFxuICAgICAgcmlnaHQuc3R5bGUubWF4V2lkdGggPSBgJHtjbGFtcGVkT2Zmc2V0fXB4YFxuXG4gICAgICAvLyBTYXZlIHRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlXG4gICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkcmFnYmFyLXhcIiwgXCJcIiArIGNsYW1wZWRPZmZzZXQpXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRyYWdiYXItd2luZG93LXdpZHRoXCIsIFwiXCIgKyB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgIH1cblxuICAgICAgLy8gQHRzLWlnbm9yZSAtIEkga25vdyB3aGF0IEknbSBkb2luZ1xuICAgICAgd2luZG93LnNhbmRib3guZWRpdG9yLmxheW91dCgpXG5cbiAgICAgIC8vIERvbid0IGFsbG93IHNlbGVjdGlvblxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgIGxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvci1jb250YWluZXJcIikhXG4gICAgcmlnaHQgPSBzaWRlYmFyLnBhcmVudEVsZW1lbnQ/LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5Z3JvdW5kLXNpZGViYXJcIikuaXRlbSgwKSEgYXMgYW55XG4gICAgLy8gSGFuZGxlIGRyYWdnaW5nIGFsbCBvdmVyIHRoZSBzY3JlZW5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWcpXG4gICAgLy8gUmVtb3ZlIGl0IHdoZW4geW91IGx0IGdvIGFueXdoZXJlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnKVxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS51c2VyU2VsZWN0ID0gXCJhdXRvXCJcbiAgICB9KVxuXG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlIGRyYWcgdG8gc2VsZWN0IHRleHQgYWNjaWRlbnRhbGx5XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlXG4gIH0pXG5cbiAgcmV0dXJuIHNpZGViYXJcbn1cblxuZXhwb3J0IGNvbnN0IHNpZGViYXJIaWRkZW4gPSAoKSA9PiAhIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZGViYXItaGlkZGVuXCIpXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwicGxheWdyb3VuZC1zaWRlYmFyXCJcblxuICAvLyBTdGFydCB3aXRoIHRoZSBzaWRlYmFyIGhpZGRlbiBvbiBzbWFsbCBzY3JlZW5zXG4gIGNvbnN0IGlzVGlueVNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgODAwXG5cbiAgLy8gVGhpcyBpcyBpbmRlcGVuZGVudCBvZiB0aGUgc2l6aW5nIGJlbG93IHNvIHRoYXQgeW91IGtlZXAgdGhlIHNhbWUgc2l6ZWQgc2lkZWJhclxuICBpZiAoaXNUaW55U2NyZWVuIHx8IHNpZGViYXJIaWRkZW4oKSkge1xuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cblxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkcmFnYmFyLXhcIikpIHtcbiAgICAvLyBEb24ndCByZXN0b3JlIHRoZSB4IHBvcyBpZiB0aGUgd2luZG93IGlzbid0IHRoZSBzYW1lIHNpemVcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPT09IE51bWJlcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkcmFnYmFyLXdpbmRvdy13aWR0aFwiKSkpIHtcbiAgICAgIC8vIFNldCB0aGUgZHJhZ2dlciB0byB0aGUgcHJldmlvdXMgeCBwb3NcbiAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRyYWdiYXIteFwiKVxuXG4gICAgICBpZiAoaXNUaW55U2NyZWVuKSB7XG4gICAgICAgIHdpZHRoID0gU3RyaW5nKE1hdGgubWluKE51bWJlcih3aWR0aCksIDI4MCkpXG4gICAgICB9XG5cbiAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgIHNpZGViYXIuc3R5bGUuZmxleEJhc2lzID0gYCR7d2lkdGh9cHhgXG4gICAgICBzaWRlYmFyLnN0eWxlLm1heFdpZHRoID0gYCR7d2lkdGh9cHhgXG5cbiAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvci1jb250YWluZXJcIikhXG4gICAgICBsZWZ0LnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSAtICR7d2lkdGh9cHgpYFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzaWRlYmFyXG59XG5cbmNvbnN0IHRvZ2dsZUljb25XaGVuT3BlbiA9IFwiJiN4MjFFNTtcIlxuY29uc3QgdG9nZ2xlSWNvbldoZW5DbG9zZWQgPSBcIiYjeDIxRTQ7XCJcblxuZXhwb3J0IGNvbnN0IHNldHVwU2lkZWJhclRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXRvZ2dsZVwiKSFcblxuICBjb25zdCB1cGRhdGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlncm91bmQtc2lkZWJhclwiKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIGNvbnN0IHNpZGViYXJTaG93aW5nID0gc2lkZWJhci5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIlxuXG4gICAgdG9nZ2xlLmlubmVySFRNTCA9IHNpZGViYXJTaG93aW5nID8gdG9nZ2xlSWNvbldoZW5PcGVuIDogdG9nZ2xlSWNvbldoZW5DbG9zZWRcbiAgICB0b2dnbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzaWRlYmFyU2hvd2luZyA/IFwiSGlkZSBTaWRlYmFyXCIgOiBcIlNob3cgU2lkZWJhclwiKVxuICB9XG5cbiAgdG9nZ2xlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlncm91bmQtc2lkZWJhclwiKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIGNvbnN0IG5ld1N0YXRlID0gc2lkZWJhci5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIlxuXG4gICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZGViYXItaGlkZGVuXCIsIFwidHJ1ZVwiKVxuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzaWRlYmFyLWhpZGRlblwiKVxuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfVxuXG4gICAgdXBkYXRlVG9nZ2xlKClcblxuICAgIC8vIEB0cy1pZ25vcmUgLSBJIGtub3cgd2hhdCBJJ20gZG9pbmdcbiAgICB3aW5kb3cuc2FuZGJveC5lZGl0b3IubGF5b3V0KClcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRW5zdXJlIGl0cyBzZXQgdXAgYXQgdGhlIHN0YXJ0XG4gIHVwZGF0ZVRvZ2dsZSgpXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRhYkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgdGFiQmFyLmNsYXNzTGlzdC5hZGQoXCJwbGF5Z3JvdW5kLXBsdWdpbi10YWJ2aWV3XCIpXG4gIHRhYkJhci5pZCA9IFwicGxheWdyb3VuZC1wbHVnaW4tdGFiYmFyXCJcbiAgdGFiQmFyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJUYWJzIGZvciBwbHVnaW5zXCIpXG4gIHRhYkJhci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFibGlzdFwiKVxuXG4gIC8qKiBTdXBwb3J0IGxlZnQvcmlnaHQgaW4gdGhlIHRhYiBiYXIgZm9yIGFjY2Vzc2liaWxpdHkgKi9cbiAgbGV0IHRhYkZvY3VzID0gMFxuICB0YWJCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5Z3JvdW5kLXBsdWdpbi10YWJ2aWV3IFtyb2xlPVwidGFiXCJdJylcbiAgICAvLyBNb3ZlIHJpZ2h0XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKVxuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICB0YWJGb2N1cysrXG4gICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxuICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcbiAgICAgICAgICB0YWJGb2N1cyA9IDBcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGxlZnRcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgdGFiRm9jdXMtLVxuICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxuICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XG4gICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIilcbiAgICAgIDsodGFic1t0YWJGb2N1c10gYXMgYW55KS5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB0YWJCYXJcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsdWdpbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRhYnBhbmVsXCIpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWdyb3VuZC1wbHVnaW4tY29udGFpbmVyXCIpXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhYkZvclBsdWdpbiA9IChwbHVnaW46IFBsYXlncm91bmRQbHVnaW4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFiXCIpXG4gIGVsZW1lbnQuaWQgPSBcInBsYXlncm91bmQtcGx1Z2luLXRhYi1cIiArIHBsdWdpbi5pZFxuICBlbGVtZW50LnRleHRDb250ZW50ID0gcGx1Z2luLmRpc3BsYXlOYW1lXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVBsdWdpbiA9IChcbiAgcGx1Z2luOiBQbGF5Z3JvdW5kUGx1Z2luLFxuICBwcmV2aW91c1BsdWdpbjogUGxheWdyb3VuZFBsdWdpbiB8IHVuZGVmaW5lZCxcbiAgc2FuZGJveDogU2FuZGJveCxcbiAgdGFiQmFyOiBIVE1MRGl2RWxlbWVudCxcbiAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuKSA9PiB7XG4gIGxldCBuZXdQbHVnaW5UYWI6IEVsZW1lbnQsIG9sZFBsdWdpblRhYjogRWxlbWVudFxuICAvLyBAdHMtaWdub3JlIC0gVGhpcyB3b3JrcyBhdCBydW50aW1lXG4gIGZvciAoY29uc3QgdGFiIG9mIHRhYkJhci5jaGlsZHJlbikge1xuICAgIGlmICh0YWIuaWQgPT09IGBwbGF5Z3JvdW5kLXBsdWdpbi10YWItJHtwbHVnaW4uaWR9YCkgbmV3UGx1Z2luVGFiID0gdGFiXG4gICAgaWYgKHByZXZpb3VzUGx1Z2luICYmIHRhYi5pZCA9PT0gYHBsYXlncm91bmQtcGx1Z2luLXRhYi0ke3ByZXZpb3VzUGx1Z2luLmlkfWApIG9sZFBsdWdpblRhYiA9IHRhYlxuICB9XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBpZiAoIW5ld1BsdWdpblRhYikgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGdldCBhIHRhYiBmb3IgdGhlIHBsdWdpbjogXCIgKyBwbHVnaW4uZGlzcGxheU5hbWUpXG5cbiAgLy8gVGVsbCB0aGUgb2xkIHBsdWdpbiBpdCdzIGdldHRpbmcgdGhlIGJvb3RcbiAgLy8gQHRzLWlnbm9yZVxuICBpZiAocHJldmlvdXNQbHVnaW4gJiYgb2xkUGx1Z2luVGFiKSB7XG4gICAgaWYgKHByZXZpb3VzUGx1Z2luLndpbGxVbm1vdW50KSBwcmV2aW91c1BsdWdpbi53aWxsVW5tb3VudChzYW5kYm94LCBjb250YWluZXIpXG4gICAgb2xkUGx1Z2luVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBvbGRQbHVnaW5UYWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpXG4gICAgb2xkUGx1Z2luVGFiLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIilcbiAgfVxuXG4gIC8vIFdpcGUgdGhlIHNpZGViYXJcbiAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKVxuICB9XG5cbiAgLy8gU3RhcnQgYm9vdGluZyB1cCB0aGUgbmV3IHBsdWdpblxuICBuZXdQbHVnaW5UYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICBuZXdQbHVnaW5UYWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcInRydWVcIilcbiAgbmV3UGx1Z2luVGFiLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKVxuXG4gIC8vIFRlbGwgdGhlIG5ldyBwbHVnaW4gdG8gc3RhcnQgZG9pbmcgc29tZSB3b3JrXG4gIGlmIChwbHVnaW4ud2lsbE1vdW50KSBwbHVnaW4ud2lsbE1vdW50KHNhbmRib3gsIGNvbnRhaW5lcilcbiAgaWYgKHBsdWdpbi5tb2RlbENoYW5nZWQpIHBsdWdpbi5tb2RlbENoYW5nZWQoc2FuZGJveCwgc2FuZGJveC5nZXRNb2RlbCgpLCBjb250YWluZXIpXG4gIGlmIChwbHVnaW4ubW9kZWxDaGFuZ2VkRGVib3VuY2UpIHBsdWdpbi5tb2RlbENoYW5nZWREZWJvdW5jZShzYW5kYm94LCBzYW5kYm94LmdldE1vZGVsKCksIGNvbnRhaW5lcilcbiAgaWYgKHBsdWdpbi5kaWRNb3VudCkgcGx1Z2luLmRpZE1vdW50KHNhbmRib3gsIGNvbnRhaW5lcilcblxuICAvLyBMZXQgdGhlIHByZXZpb3VzIHBsdWdpbiBkbyBhbnkgc2xvdyB3b3JrIGFmdGVyIGl0J3MgYWxsIGRvbmVcbiAgaWYgKHByZXZpb3VzUGx1Z2luICYmIHByZXZpb3VzUGx1Z2luLmRpZFVubW91bnQpIHByZXZpb3VzUGx1Z2luLmRpZFVubW91bnQoc2FuZGJveCwgY29udGFpbmVyKVxufVxuIl19