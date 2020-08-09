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
        const setNotifications = (pluginID, amount) => {
            const tab = document.getElementById("playground-plugin-tab-" + pluginID);
            if (!tab)
                return;
            const notification = tab.querySelector("div.plugin-tab-notification");
            if (!amount && notification)
                tab.removeChild(notification);
            if (amount) {
                if (!notification) {
                    const label = document.createElement("div");
                    label.textContent = String(amount);
                    label.classList.add("plugin-tab-notification");
                    tab.appendChild(label);
                }
                else {
                    if (notification.textContent !== String(amount)) {
                        notification.textContent = String(amount);
                    }
                }
            }
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
            /** Add a little red button in the top corner of a plugin tab with a number */
            setNotifications,
        };
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9wbHVnaW5VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsNEdBQTRHO0lBQy9GLFFBQUEsV0FBVyxHQUFHLENBQUMsRUFBTyxFQUFFLEtBQW1CLEVBQUUsRUFBRTtRQUMxRCxNQUFNLE9BQU8sR0FBWSxFQUFFLENBQUE7UUFFM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNsQyx3SkFBd0o7WUFDeEosTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzFELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxREFBcUQsQ0FBQTtZQUN2RixPQUFPLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFXLEVBQUUsV0FBbUIsRUFBRSxTQUFrQixFQUFFLEVBQUU7WUFDbEUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUM5QyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtZQUNsQixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sRUFBRSxDQUFBO1FBQ1gsQ0FBQyxDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtZQUNoRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZFLENBQUMsQ0FBQTtRQUVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQzVELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLENBQUE7WUFDeEUsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTTtZQUVoQixNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLENBQUE7WUFDckUsSUFBSSxDQUFDLE1BQU0sSUFBSSxZQUFZO2dCQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7WUFFMUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDakIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDM0MsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ2xDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7b0JBQzlDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ3ZCO3FCQUFNO29CQUNMLElBQUksWUFBWSxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQy9DLFlBQVksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO3FCQUMxQztpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsT0FBTztZQUNMLDJEQUEyRDtZQUMzRCxFQUFFO1lBQ0YscUdBQXFHO1lBQ3JHLFVBQVU7WUFDViwrQkFBK0I7WUFDL0IsS0FBSztZQUNMOzs7ZUFHRztZQUNILGtCQUFrQixFQUFFLHVDQUFrQixDQUFDLE9BQU8sQ0FBQztZQUMvQyw2QkFBNkI7WUFDN0IsZ0JBQWdCO1lBQ2hCLDhFQUE4RTtZQUM5RSxnQkFBZ0I7U0FDakIsQ0FBQTtJQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuZGJveCB9IGZyb20gXCJ0eXBlc2NyaXB0LXNhbmRib3hcIlxuaW1wb3J0IHR5cGUgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNyZWF0ZURlc2lnblN5c3RlbSB9IGZyb20gXCIuL2RzL2NyZWF0ZURlc2lnblN5c3RlbVwiXG5cbi8qKiBDcmVhdGVzIGEgc2V0IG9mIHV0aWwgZnVuY3Rpb25zIHdoaWNoIGlzIGV4cG9zZWQgdG8gUGx1Z2lucyB0byBtYWtlIGl0IGVhc2llciB0byBidWlsZCBjb25zaXN0ZW50IFVJcyAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVV0aWxzID0gKHNiOiBhbnksIHJlYWN0OiB0eXBlb2YgUmVhY3QpID0+IHtcbiAgY29uc3Qgc2FuZGJveDogU2FuZGJveCA9IHNiXG5cbiAgY29uc3QgcmVxdWlyZVVSTCA9IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAvLyBodHRwczovL3VucGtnLmNvbS9icm93c2UvdHlwZXNjcmlwdC1wbGF5Z3JvdW5kLXByZXNlbnRhdGlvbi1tb2RlQDAuMC4xL2Rpc3QveC5qcyA9PiB1bnBrZy9icm93c2UvdHlwZXNjcmlwdC1wbGF5Z3JvdW5kLXByZXNlbnRhdGlvbi1tb2RlQDAuMC4xL2Rpc3QveFxuICAgIGNvbnN0IGlzRGV2ID0gZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcyhcImxvY2FsaG9zdFwiKVxuICAgIGNvbnN0IHByZWZpeCA9IGlzRGV2ID8gXCJsb2NhbC9cIiA6IFwidW5wa2cvdHlwZXNjcmlwdC1wbGF5Z3JvdW5kLXByZXNlbnRhdGlvbi1tb2RlL2Rpc3QvXCJcbiAgICByZXR1cm4gcHJlZml4ICsgcGF0aFxuICB9XG5cbiAgY29uc3QgZWwgPSAoc3RyOiBzdHJpbmcsIGVsZW1lbnRUeXBlOiBzdHJpbmcsIGNvbnRhaW5lcjogRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSlcbiAgICBlbC5pbm5lckhUTUwgPSBzdHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICBjb25zdCBmbGFzaEhUTUxFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJpZWZseS1oaWdobGlnaHRcIilcbiAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJyaWVmbHktaGlnaGxpZ2h0XCIpLCAxMDAwKVxuICB9XG5cbiAgY29uc3Qgc2V0Tm90aWZpY2F0aW9ucyA9IChwbHVnaW5JRDogc3RyaW5nLCBhbW91bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWdyb3VuZC1wbHVnaW4tdGFiLVwiICsgcGx1Z2luSUQpXG4gICAgaWYgKCF0YWIpIHJldHVyblxuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCJkaXYucGx1Z2luLXRhYi1ub3RpZmljYXRpb25cIilcbiAgICBpZiAoIWFtb3VudCAmJiBub3RpZmljYXRpb24pIHRhYi5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pXG5cbiAgICBpZiAoYW1vdW50KSB7XG4gICAgICBpZiAoIW5vdGlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBTdHJpbmcoYW1vdW50KVxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicGx1Z2luLXRhYi1ub3RpZmljYXRpb25cIilcbiAgICAgICAgdGFiLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCAhPT0gU3RyaW5nKGFtb3VudCkpIHtcbiAgICAgICAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSBTdHJpbmcoYW1vdW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvKiogVXNlIHRoaXMgdG8gbWFrZSBhIGZldyBkdW1iIGVsZW1lbnQgZ2VuZXJhdGlvbiBmdW5jcyAqL1xuICAgIGVsLFxuICAgIC8qKiBHZXQgYSByZWxhdGl2ZSBVUkwgZm9yIHNvbWV0aGluZyBpbiB5b3VyIGRpc3QgZm9sZGVyIGRlcGVuZGluZyBvbiBpZiB5b3UncmUgaW4gZGV2IG1vZGUgb3Igbm90ICovXG4gICAgcmVxdWlyZVVSTCxcbiAgICAvKiogVGhlIEdhdHNieSBjb3B5IG9mIFJlYWN0ICovXG4gICAgcmVhY3QsXG4gICAgLyoqXG4gICAgICogVGhlIHBsYXlncm91bmQgcGx1Z2luIGRlc2lnbiBzeXN0ZW0uIENhbGxpbmcgYW55IG9mIHRoZSBmdW5jdGlvbnMgd2lsbCBhcHBlbmQgdGhlXG4gICAgICogZWxlbWVudCB0byB0aGUgY29udGFpbmVyIHlvdSBwYXNzIGludG8gdGhlIGZpcnN0IHBhcmFtLCBhbmQgcmV0dXJuIHRoZSBIVE1MRWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZURlc2lnblN5c3RlbTogY3JlYXRlRGVzaWduU3lzdGVtKHNhbmRib3gpLFxuICAgIC8qKiBGbGFzaGVzIGEgSFRNTCBFbGVtZW50ICovXG4gICAgZmxhc2hIVE1MRWxlbWVudCxcbiAgICAvKiogQWRkIGEgbGl0dGxlIHJlZCBidXR0b24gaW4gdGhlIHRvcCBjb3JuZXIgb2YgYSBwbHVnaW4gdGFiIHdpdGggYSBudW1iZXIgKi9cbiAgICBzZXROb3RpZmljYXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBsdWdpblV0aWxzID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlVXRpbHM+XG4iXX0=