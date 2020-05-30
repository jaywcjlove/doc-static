define(["require", "exports", "./ds/createDesignSystem"], function (require, exports, createDesignSystem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUtils = void 0;
    /** Creates a set of util functions which is exposed to Plugins to make it easier to build consistent UIs */
    exports.createUtils = (sb, react) => {
        const sandbox = sb;
        const requireURL = (path) => {
            // https://unpkg.com/browse/typescript-playground-presentation-mode@0.0.1/dist/x.js => unpkg/browse/typescript-playground-presentation-mode@0.0.1/dist/x
            const isDev = document.location.host.includes("localhost");
            const prefix = isDev ? "local/" : "unpkg/typescript-playground-presentation-mode/dist/";
            return prefix + path;
        };
        const el = (str, elementType, container) => {
            const el = document.createElement(elementType);
            el.innerHTML = str;
            container.appendChild(el);
            return el;
        };
        const flashHTMLElement = (element) => {
            element.classList.add("briefly-highlight");
            setTimeout(() => element.classList.remove("briefly-highlight"), 1000);
        };
        const declareRestartRequired = (i) => {
            if (document.getElementById("restart-required"))
                return;
            const li = document.createElement("li");
            li.classList.add("disabled");
            li.id = "restart-required";
            const a = document.createElement("a");
            a.style.color = "#c63131";
            a.textContent = i("play_sidebar_options_restart_required");
            const nav = document.getElementsByClassName("navbar-right")[0];
            li.appendChild(a);
            nav.insertBefore(li, nav.firstChild);
        };
        return {
            /** Use this to make a few dumb element generation funcs */
            el,
            /** Get a relative URL for something in your dist folder depending on if you're in dev mode or not */
            requireURL,
            /** The Gatsby copy of React */
            react,
            /**
             * The playground plugin design system. Calling any of the functions will append the
             * element to the container you pass into the first param, and return the HTMLElement
             */
            createDesignSystem: createDesignSystem_1.createDesignSystem(sandbox),
            /** Flashes a HTML Element */
            flashHTMLElement,
            /** A general "restart your browser" message  */
            declareRestartRequired,
        };
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9wbHVnaW5VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsNEdBQTRHO0lBQy9GLFFBQUEsV0FBVyxHQUFHLENBQUMsRUFBTyxFQUFFLEtBQW1CLEVBQUUsRUFBRTtRQUMxRCxNQUFNLE9BQU8sR0FBWSxFQUFFLENBQUE7UUFFM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNsQyx3SkFBd0o7WUFDeEosTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzFELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxREFBcUQsQ0FBQTtZQUN2RixPQUFPLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFXLEVBQUUsV0FBbUIsRUFBRSxTQUFrQixFQUFFLEVBQUU7WUFDbEUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUM5QyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtZQUNsQixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQyxDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtZQUNoRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZFLENBQUMsQ0FBQTtRQUVELE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxDQUEwQixFQUFFLEVBQUU7WUFDNUQsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDO2dCQUFFLE9BQU07WUFFdkQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUM1QixFQUFFLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFBO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO1lBQ3pCLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7WUFFMUQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzlELEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDakIsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQTtRQUVELE9BQU87WUFDTCwyREFBMkQ7WUFDM0QsRUFBRTtZQUNGLHFHQUFxRztZQUNyRyxVQUFVO1lBQ1YsK0JBQStCO1lBQy9CLEtBQUs7WUFDTDs7O2VBR0c7WUFDSCxrQkFBa0IsRUFBRSx1Q0FBa0IsQ0FBQyxPQUFPLENBQUM7WUFDL0MsNkJBQTZCO1lBQzdCLGdCQUFnQjtZQUNoQixnREFBZ0Q7WUFDaEQsc0JBQXNCO1NBQ3ZCLENBQUE7SUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNhbmRib3ggfSBmcm9tIFwidHlwZXNjcmlwdC1zYW5kYm94XCJcbmltcG9ydCB0eXBlIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjcmVhdGVEZXNpZ25TeXN0ZW0gfSBmcm9tIFwiLi9kcy9jcmVhdGVEZXNpZ25TeXN0ZW1cIlxuXG4vKiogQ3JlYXRlcyBhIHNldCBvZiB1dGlsIGZ1bmN0aW9ucyB3aGljaCBpcyBleHBvc2VkIHRvIFBsdWdpbnMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gYnVpbGQgY29uc2lzdGVudCBVSXMgKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVVdGlscyA9IChzYjogYW55LCByZWFjdDogdHlwZW9mIFJlYWN0KSA9PiB7XG4gIGNvbnN0IHNhbmRib3g6IFNhbmRib3ggPSBzYlxuXG4gIGNvbnN0IHJlcXVpcmVVUkwgPSAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlL3R5cGVzY3JpcHQtcGxheWdyb3VuZC1wcmVzZW50YXRpb24tbW9kZUAwLjAuMS9kaXN0L3guanMgPT4gdW5wa2cvYnJvd3NlL3R5cGVzY3JpcHQtcGxheWdyb3VuZC1wcmVzZW50YXRpb24tbW9kZUAwLjAuMS9kaXN0L3hcbiAgICBjb25zdCBpc0RldiA9IGRvY3VtZW50LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJsb2NhbGhvc3RcIilcbiAgICBjb25zdCBwcmVmaXggPSBpc0RldiA/IFwibG9jYWwvXCIgOiBcInVucGtnL3R5cGVzY3JpcHQtcGxheWdyb3VuZC1wcmVzZW50YXRpb24tbW9kZS9kaXN0L1wiXG4gICAgcmV0dXJuIHByZWZpeCArIHBhdGhcbiAgfVxuXG4gIGNvbnN0IGVsID0gKHN0cjogc3RyaW5nLCBlbGVtZW50VHlwZTogc3RyaW5nLCBjb250YWluZXI6IEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpXG4gICAgZWwuaW5uZXJIVE1MID0gc3RyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKVxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgY29uc3QgZmxhc2hIVE1MRWxlbWVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJyaWVmbHktaGlnaGxpZ2h0XCIpXG4gICAgc2V0VGltZW91dCgoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJicmllZmx5LWhpZ2hsaWdodFwiKSwgMTAwMClcbiAgfVxuXG4gIGNvbnN0IGRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQgPSAoaTogKGtleTogc3RyaW5nKSA9PiBzdHJpbmcpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LXJlcXVpcmVkXCIpKSByZXR1cm5cblxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbGkuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpXG4gICAgbGkuaWQgPSBcInJlc3RhcnQtcmVxdWlyZWRcIlxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIGEuc3R5bGUuY29sb3IgPSBcIiNjNjMxMzFcIlxuICAgIGEudGV4dENvbnRlbnQgPSBpKFwicGxheV9zaWRlYmFyX29wdGlvbnNfcmVzdGFydF9yZXF1aXJlZFwiKVxuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhci1yaWdodFwiKVswXVxuICAgIGxpLmFwcGVuZENoaWxkKGEpXG4gICAgbmF2Lmluc2VydEJlZm9yZShsaSwgbmF2LmZpcnN0Q2hpbGQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8qKiBVc2UgdGhpcyB0byBtYWtlIGEgZmV3IGR1bWIgZWxlbWVudCBnZW5lcmF0aW9uIGZ1bmNzICovXG4gICAgZWwsXG4gICAgLyoqIEdldCBhIHJlbGF0aXZlIFVSTCBmb3Igc29tZXRoaW5nIGluIHlvdXIgZGlzdCBmb2xkZXIgZGVwZW5kaW5nIG9uIGlmIHlvdSdyZSBpbiBkZXYgbW9kZSBvciBub3QgKi9cbiAgICByZXF1aXJlVVJMLFxuICAgIC8qKiBUaGUgR2F0c2J5IGNvcHkgb2YgUmVhY3QgKi9cbiAgICByZWFjdCxcbiAgICAvKipcbiAgICAgKiBUaGUgcGxheWdyb3VuZCBwbHVnaW4gZGVzaWduIHN5c3RlbS4gQ2FsbGluZyBhbnkgb2YgdGhlIGZ1bmN0aW9ucyB3aWxsIGFwcGVuZCB0aGVcbiAgICAgKiBlbGVtZW50IHRvIHRoZSBjb250YWluZXIgeW91IHBhc3MgaW50byB0aGUgZmlyc3QgcGFyYW0sIGFuZCByZXR1cm4gdGhlIEhUTUxFbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlRGVzaWduU3lzdGVtOiBjcmVhdGVEZXNpZ25TeXN0ZW0oc2FuZGJveCksXG4gICAgLyoqIEZsYXNoZXMgYSBIVE1MIEVsZW1lbnQgKi9cbiAgICBmbGFzaEhUTUxFbGVtZW50LFxuICAgIC8qKiBBIGdlbmVyYWwgXCJyZXN0YXJ0IHlvdXIgYnJvd3NlclwiIG1lc3NhZ2UgICovXG4gICAgZGVjbGFyZVJlc3RhcnRSZXF1aXJlZCxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQbHVnaW5VdGlscyA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVV0aWxzPlxuIl19