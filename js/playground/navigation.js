var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hideNavForHandbook = exports.showNavForHandbook = exports.gistPoweredNavBar = void 0;
    /**
     * Uses the Playground gist proxy to generate a set of stories ^ which
     * correspond to files in the
     */
    const gistPoweredNavBar = (sandbox, ui, showNav) => {
        const gistHash = location.hash.split("#gist/")[1];
        const [gistID] = gistHash.split("-");
        // @ts-ignore
        window.appInsights && window.appInsights.trackEvent({ name: "Loaded Gist Playground", properties: { id: gistID } });
        sandbox.editor.updateOptions({ readOnly: true });
        ui.flashInfo(`Opening Gist ${gistID} as a Docset`, 2000);
        // Disable the handbook button because we can't have two sidenavs
        const handbookButton = document.getElementById("handbook-button");
        if (handbookButton) {
            handbookButton.parentElement.classList.add("disabled");
        }
        const playground = document.getElementById("playground-container");
        playground.style.opacity = "0.5";
        // const relay = "http://localhost:7071/api/API"
        const relay = "https://typescriptplaygroundgistproxyapi.azurewebsites.net/api/API";
        fetch(`${relay}?gistID=${gistID}`)
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            // Make editor work again
            playground.style.opacity = "1";
            sandbox.editor.updateOptions({ readOnly: false });
            const response = yield res.json();
            if ("error" in response) {
                return ui.flashInfo(`Error with getting your gist: ${response.display}.`, 3000);
            }
            // If the API response is a single code file, just throw that in
            if (response.type === "code") {
                sandbox.setText(response.code);
                sandbox.setCompilerSettings(response.params);
                // If it's multi-file, then there's work to do
            }
            else if (response.type === "story") {
                showNav();
                const prefix = `#gist/${gistID}`;
                updateNavWithStoryContent(response.title, response.files, prefix, sandbox);
            }
        }))
            .catch(() => {
            ui.flashInfo("Could not reach the gist to playground API, are you (or it) offline?");
            playground.style.opacity = "1";
            sandbox.editor.updateOptions({ readOnly: false });
        });
    };
    exports.gistPoweredNavBar = gistPoweredNavBar;
    /** Use the handbook TOC which is injected into the globals to create a sidebar  */
    const showNavForHandbook = (sandbox, escapeFunction) => {
        // @ts-ignore
        const content = window.playgroundHandbookTOC.docs;
        const button = document.createElement("button");
        button.ariaLabel = "Close handbook";
        button.className = "examples-close";
        button.innerText = "Close";
        button.onclick = escapeFunction;
        const story = document.getElementById("editor-container");
        story === null || story === void 0 ? void 0 : story.appendChild(button);
        updateNavWithStoryContent("Handbook", content, "#handbook", sandbox);
        const nav = document.getElementById("navigation-container");
        if (nav)
            nav.classList.add("handbook");
    };
    exports.showNavForHandbook = showNavForHandbook;
    /**
     * Hides the nav and the close button, specifically only when we have
     * the handbook open and not when a gist is open
     */
    const hideNavForHandbook = (sandbox) => {
        const nav = document.getElementById("navigation-container");
        if (!nav)
            return;
        if (!nav.classList.contains("handbook"))
            return;
        showCode(sandbox);
        nav.style.display = "none";
        const leftDrag = document.querySelector(".playground-dragbar.left");
        if (leftDrag)
            leftDrag.style.display = "none";
        const story = document.getElementById("editor-container");
        const possibleButtonToRemove = story === null || story === void 0 ? void 0 : story.querySelector("button");
        if (story && possibleButtonToRemove)
            story.removeChild(possibleButtonToRemove);
    };
    exports.hideNavForHandbook = hideNavForHandbook;
    /**
     * Assumes a nav has been set up already, and then fills out the content of the nav bar
     * with clickable links for each potential story.
     */
    const updateNavWithStoryContent = (title, storyContent, prefix, sandbox) => {
        const nav = document.getElementById("navigation-container");
        if (!nav)
            return;
        while (nav.firstChild) {
            nav.removeChild(nav.firstChild);
        }
        const titleh4 = document.createElement("h4");
        titleh4.textContent = title;
        nav.appendChild(titleh4);
        // Make all the sidebar elements
        const ul = document.createElement("ul");
        storyContent.forEach((element, i) => {
            const li = document.createElement("li");
            switch (element.type) {
                case "html":
                case "href":
                case "code": {
                    li.classList.add("selectable");
                    const a = document.createElement("a");
                    let logo;
                    if (element.type === "code") {
                        logo = `<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="7" fill="#187ABF"/></svg>`;
                    }
                    else if (element.type === "html") {
                        logo = `<svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5V3.25L6 1H4M8 5.5V10H1V1H4M8 5.5H4V1" stroke="#C4C4C4"/></svg>`;
                    }
                    else {
                        logo = "";
                    }
                    a.innerHTML = `${logo}${element.title}`;
                    a.href = `/play#${prefix}-${i}`;
                    a.onclick = e => {
                        e.preventDefault();
                        // Note: I'm not sure why this is needed?
                        const ed = sandbox.editor.getDomNode();
                        if (!ed)
                            return;
                        sandbox.editor.updateOptions({ readOnly: false });
                        const alreadySelected = ul.querySelector(".selected");
                        if (alreadySelected)
                            alreadySelected.classList.remove("selected");
                        li.classList.add("selected");
                        switch (element.type) {
                            case "code":
                                setCode(element.code, sandbox);
                                break;
                            case "html":
                                setStory(element.html, sandbox);
                                break;
                            case "href":
                                setStoryViaHref(element.href, sandbox);
                                break;
                        }
                        // Set the URL after selecting
                        const alwaysUpdateURL = !localStorage.getItem("disable-save-on-type");
                        if (alwaysUpdateURL) {
                            location.hash = `${prefix}-${i}`;
                        }
                        return false;
                    };
                    li.appendChild(a);
                    break;
                }
                case "hr": {
                    const hr = document.createElement("hr");
                    li.appendChild(hr);
                }
            }
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        const pageID = location.hash.split("-")[1] || "";
        const index = Number(pageID) || 0;
        const targetedLi = ul.children.item(index) || ul.children.item(0);
        if (targetedLi) {
            const a = targetedLi.getElementsByTagName("a").item(0);
            // @ts-ignore
            if (a)
                a.click();
        }
    };
    // Use fetch to grab the HTML from a URL, with a special case 
    // when that is a gatsby URL where we pull out the important
    // HTML from inside the __gatsby id.
    const setStoryViaHref = (href, sandbox) => {
        fetch(href).then((req) => __awaiter(void 0, void 0, void 0, function* () {
            if (req.ok) {
                const text = yield req.text();
                if (text.includes("___gatsby")) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, "text/html");
                    const gatsby = doc.getElementById('___gatsby');
                    if (gatsby) {
                        gatsby.id = "___inner_g";
                        if (gatsby.firstChild && gatsby.firstChild.id === "gatsby-focus-wrapper") {
                            gatsby.firstChild.id = "gatsby-playground-handbook-inner";
                        }
                        setStory(gatsby, sandbox);
                    }
                    return;
                }
                if (document.location.host === "localhost:8000") {
                    setStory("<p>Because the gatsby dev server uses JS to build your pages, and not statically, the page will not load during dev. It does work in prod though - use <code>yarn build-site</code> to test locally with a static build.</p>", sandbox);
                }
                else {
                    setStory(text, sandbox);
                }
            }
            else {
                setStory(`<p>Failed to load the content at ${href}. Reason: ${req.status} ${req.statusText}</p>`, sandbox);
            }
        }));
    };
    /**
     * Passing in either a root HTML element or the HTML for the story, present a
     * markdown doc as a 'story' inside the playground.
     */
    const setStory = (html, sandbox) => {
        const toolbar = document.getElementById("editor-toolbar");
        if (toolbar)
            toolbar.style.display = "none";
        const monaco = document.getElementById("monaco-editor-embed");
        if (monaco)
            monaco.style.display = "none";
        const story = document.getElementById("story-container");
        if (!story)
            return;
        story.style.display = "block";
        if (typeof html === "string") {
            story.innerHTML = html;
        }
        else {
            while (story.firstChild) {
                story.removeChild(story.firstChild);
            }
            story.appendChild(html);
        }
        // We need to hijack internal links
        for (const a of Array.from(story.getElementsByTagName("a"))) {
            if (!a.pathname.startsWith("/play"))
                continue;
            // Note the the header generated links also count in here
            // overwrite playground links
            if (a.hash.includes("#code/")) {
                a.onclick = e => {
                    const code = a.hash.replace("#code/", "").trim();
                    let userCode = sandbox.lzstring.decompressFromEncodedURIComponent(code);
                    // Fallback incase there is an extra level of decoding:
                    // https://gitter.im/Microsoft/TypeScript?at=5dc478ab9c39821509ff189a
                    if (!userCode)
                        userCode = sandbox.lzstring.decompressFromEncodedURIComponent(decodeURIComponent(code));
                    if (userCode)
                        setCode(userCode, sandbox);
                    e.preventDefault();
                    const alreadySelected = document.getElementById("navigation-container").querySelector("li.selected");
                    if (alreadySelected)
                        alreadySelected.classList.remove("selected");
                    return false;
                };
            }
            // overwrite gist/handbook links
            else if (a.hash.includes("#gist/") || a.hash.includes("#handbook")) {
                a.onclick = e => {
                    const index = Number(a.hash.split("-")[1]);
                    const nav = document.getElementById("navigation-container");
                    if (!nav)
                        return;
                    const ul = nav.getElementsByTagName("ul").item(0);
                    const targetedLi = ul.children.item(Number(index) || 0) || ul.children.item(0);
                    if (targetedLi) {
                        const a = targetedLi.getElementsByTagName("a").item(0);
                        // @ts-ignore
                        if (a)
                            a.click();
                    }
                    e.preventDefault();
                    return false;
                };
            }
            else {
                a.setAttribute("target", "_blank");
            }
        }
    };
    const showCode = (sandbox) => {
        const story = document.getElementById("story-container");
        if (story)
            story.style.display = "none";
        const toolbar = document.getElementById("editor-toolbar");
        if (toolbar)
            toolbar.style.display = "block";
        const monaco = document.getElementById("monaco-editor-embed");
        if (monaco)
            monaco.style.display = "block";
        sandbox.editor.layout();
    };
    const setCode = (code, sandbox) => {
        sandbox.setText(code);
        showCode(sandbox);
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL25hdmlnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVNBOzs7T0FHRztJQUNJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQU0sRUFBRSxPQUFtQixFQUFFLEVBQUU7UUFDakYsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFcEMsYUFBYTtRQUNiLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVuSCxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ2hELEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLE1BQU0sY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXhELGlFQUFpRTtRQUNqRSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDakUsSUFBSSxjQUFjLEVBQUU7WUFDbEIsY0FBYyxDQUFDLGFBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQ3hEO1FBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBRSxDQUFBO1FBQ25FLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUss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QUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3pCLENBQUMsQ0FBQTtJQUVELE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBWSxFQUFFLE9BQWdCLEVBQUUsRUFBRTtRQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFN0b3J5Q29udGVudCA9XG4gIHwgeyB0eXBlOiBcImh0bWxcIjsgaHRtbDogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH1cbiAgfCB7IHR5cGU6IFwiaHJlZlwiOyBocmVmOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogXCJjb2RlXCI7IGNvZGU6IHN0cmluZzsgcGFyYW1zOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogXCJoclwiIH1cblxuaW1wb3J0IHR5cGUgeyBTYW5kYm94IH0gZnJvbSBcIkB0eXBlc2NyaXB0L3NhbmRib3hcIlxuaW1wb3J0IHR5cGUgeyBVSSB9IGZyb20gXCIuL2NyZWF0ZVVJXCJcblxuLyoqXG4gKiBVc2VzIHRoZSBQbGF5Z3JvdW5kIGdpc3QgcHJveHkgdG8gZ2VuZXJhdGUgYSBzZXQgb2Ygc3RvcmllcyBeIHdoaWNoIFxuICogY29ycmVzcG9uZCB0byBmaWxlcyBpbiB0aGUgXG4gKi9cbmV4cG9ydCBjb25zdCBnaXN0UG93ZXJlZE5hdkJhciA9IChzYW5kYm94OiBTYW5kYm94LCB1aTogVUksIHNob3dOYXY6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgZ2lzdEhhc2ggPSBsb2NhdGlvbi5oYXNoLnNwbGl0KFwiI2dpc3QvXCIpWzFdXG4gIGNvbnN0IFtnaXN0SURdID0gZ2lzdEhhc2guc3BsaXQoXCItXCIpXG5cbiAgLy8gQHRzLWlnbm9yZVxuICB3aW5kb3cuYXBwSW5zaWdodHMgJiYgd2luZG93LmFwcEluc2lnaHRzLnRyYWNrRXZlbnQoeyBuYW1lOiBcIkxvYWRlZCBHaXN0IFBsYXlncm91bmRcIiwgcHJvcGVydGllczogeyBpZDogZ2lzdElEIH0gfSlcblxuICBzYW5kYm94LmVkaXRvci51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRydWUgfSlcbiAgdWkuZmxhc2hJbmZvKGBPcGVuaW5nIEdpc3QgJHtnaXN0SUR9IGFzIGEgRG9jc2V0YCwgMjAwMClcblxuICAvLyBEaXNhYmxlIHRoZSBoYW5kYm9vayBidXR0b24gYmVjYXVzZSB3ZSBjYW4ndCBoYXZlIHR3byBzaWRlbmF2c1xuICBjb25zdCBoYW5kYm9va0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFuZGJvb2stYnV0dG9uXCIpXG4gIGlmIChoYW5kYm9va0J1dHRvbikge1xuICAgIGhhbmRib29rQnV0dG9uLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKVxuICB9XG5cbiAgY29uc3QgcGxheWdyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWdyb3VuZC1jb250YWluZXJcIikhXG4gIHBsYXlncm91bmQuc3R5bGUub3BhY2l0eSA9IFwiMC41XCJcblxuICAvLyBjb25zdCByZWxheSA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcxL2FwaS9BUElcIlxuICBjb25zdCByZWxheSA9IFwiaHR0cHM6Ly90eXBlc2NyaXB0cGxheWdyb3VuZGdpc3Rwcm94eWFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvQVBJXCJcbiAgZmV0Y2goYCR7cmVsYXl9P2dpc3RJRD0ke2dpc3RJRH1gKVxuICAgIC50aGVuKGFzeW5jIHJlcyA9PiB7XG4gICAgICAvLyBNYWtlIGVkaXRvciB3b3JrIGFnYWluXG4gICAgICBwbGF5Z3JvdW5kLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxuICAgICAgc2FuZGJveC5lZGl0b3IudXBkYXRlT3B0aW9ucyh7IHJlYWRPbmx5OiBmYWxzZSB9KVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGlmIChcImVycm9yXCIgaW4gcmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHVpLmZsYXNoSW5mbyhgRXJyb3Igd2l0aCBnZXR0aW5nIHlvdXIgZ2lzdDogJHtyZXNwb25zZS5kaXNwbGF5fS5gLCAzMDAwKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgQVBJIHJlc3BvbnNlIGlzIGEgc2luZ2xlIGNvZGUgZmlsZSwganVzdCB0aHJvdyB0aGF0IGluXG4gICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gXCJjb2RlXCIpIHtcbiAgICAgICAgc2FuZGJveC5zZXRUZXh0KHJlc3BvbnNlLmNvZGUpXG4gICAgICAgIHNhbmRib3guc2V0Q29tcGlsZXJTZXR0aW5ncyhyZXNwb25zZS5wYXJhbXMpXG5cbiAgICAgICAgLy8gSWYgaXQncyBtdWx0aS1maWxlLCB0aGVuIHRoZXJlJ3Mgd29yayB0byBkb1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS50eXBlID09PSBcInN0b3J5XCIpIHtcbiAgICAgICAgc2hvd05hdigpXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGAjZ2lzdC8ke2dpc3RJRH1gXG4gICAgICAgIHVwZGF0ZU5hdldpdGhTdG9yeUNvbnRlbnQocmVzcG9uc2UudGl0bGUsIHJlc3BvbnNlLmZpbGVzLCBwcmVmaXgsIHNhbmRib3gpXG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgdWkuZmxhc2hJbmZvKFwiQ291bGQgbm90IHJlYWNoIHRoZSBnaXN0IHRvIHBsYXlncm91bmQgQVBJLCBhcmUgeW91IChvciBpdCkgb2ZmbGluZT9cIilcbiAgICAgIHBsYXlncm91bmQuc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgICBzYW5kYm94LmVkaXRvci51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IGZhbHNlIH0pXG4gICAgfSlcbn1cblxuLyoqIFVzZSB0aGUgaGFuZGJvb2sgVE9DIHdoaWNoIGlzIGluamVjdGVkIGludG8gdGhlIGdsb2JhbHMgdG8gY3JlYXRlIGEgc2lkZWJhciAgKi9cbmV4cG9ydCBjb25zdCBzaG93TmF2Rm9ySGFuZGJvb2sgPSAoc2FuZGJveDogU2FuZGJveCwgZXNjYXBlRnVuY3Rpb246ICgpID0+IHZvaWQpID0+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBjb250ZW50ID0gd2luZG93LnBsYXlncm91bmRIYW5kYm9va1RPQy5kb2NzXG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBidXR0b24uYXJpYUxhYmVsID0gXCJDbG9zZSBoYW5kYm9va1wiXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBcImV4YW1wbGVzLWNsb3NlXCJcbiAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQ2xvc2VcIlxuICBidXR0b24ub25jbGljayA9IGVzY2FwZUZ1bmN0aW9uXG5cbiAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvci1jb250YWluZXJcIilcbiAgc3Rvcnk/LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgdXBkYXRlTmF2V2l0aFN0b3J5Q29udGVudChcIkhhbmRib29rXCIsIGNvbnRlbnQsIFwiI2hhbmRib29rXCIsIHNhbmRib3gpXG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uLWNvbnRhaW5lclwiKVxuICBpZiAobmF2KSBuYXYuY2xhc3NMaXN0LmFkZChcImhhbmRib29rXCIpXG59XG5cbi8qKiBcbiAqIEhpZGVzIHRoZSBuYXYgYW5kIHRoZSBjbG9zZSBidXR0b24sIHNwZWNpZmljYWxseSBvbmx5IHdoZW4gd2UgaGF2ZVxuICogdGhlIGhhbmRib29rIG9wZW4gYW5kIG5vdCB3aGVuIGEgZ2lzdCBpcyBvcGVuXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlTmF2Rm9ySGFuZGJvb2sgPSAoc2FuZGJveDogU2FuZGJveCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb24tY29udGFpbmVyXCIpXG4gIGlmICghbmF2KSByZXR1cm5cbiAgaWYgKCFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFuZGJvb2tcIikpIHJldHVyblxuXG4gIHNob3dDb2RlKHNhbmRib3gpXG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblxuICBjb25zdCBsZWZ0RHJhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWdyb3VuZC1kcmFnYmFyLmxlZnRcIikgYXMgSFRNTEVsZW1lbnRcbiAgaWYgKGxlZnREcmFnKSBsZWZ0RHJhZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcblxuICBjb25zdCBzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yLWNvbnRhaW5lclwiKVxuICBjb25zdCBwb3NzaWJsZUJ1dHRvblRvUmVtb3ZlID0gc3Rvcnk/LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIilcbiAgaWYgKHN0b3J5ICYmIHBvc3NpYmxlQnV0dG9uVG9SZW1vdmUpIHN0b3J5LnJlbW92ZUNoaWxkKHBvc3NpYmxlQnV0dG9uVG9SZW1vdmUpXG59XG5cbi8qKiBcbiAqIEFzc3VtZXMgYSBuYXYgaGFzIGJlZW4gc2V0IHVwIGFscmVhZHksIGFuZCB0aGVuIGZpbGxzIG91dCB0aGUgY29udGVudCBvZiB0aGUgbmF2IGJhclxuICogd2l0aCBjbGlja2FibGUgbGlua3MgZm9yIGVhY2ggcG90ZW50aWFsIHN0b3J5LlxuICovXG5jb25zdCB1cGRhdGVOYXZXaXRoU3RvcnlDb250ZW50ID0gKHRpdGxlOiBzdHJpbmcsIHN0b3J5Q29udGVudDogU3RvcnlDb250ZW50W10sIHByZWZpeDogc3RyaW5nLCBzYW5kYm94OiBTYW5kYm94KSA9PiB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvbi1jb250YWluZXJcIilcbiAgaWYgKCFuYXYpIHJldHVyblxuXG4gIHdoaWxlIChuYXYuZmlyc3RDaGlsZCkge1xuICAgIG5hdi5yZW1vdmVDaGlsZChuYXYuZmlyc3RDaGlsZClcbiAgfVxuXG4gIGNvbnN0IHRpdGxlaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIilcbiAgdGl0bGVoNC50ZXh0Q29udGVudCA9IHRpdGxlXG4gIG5hdi5hcHBlbmRDaGlsZCh0aXRsZWg0KVxuXG4gIC8vIE1ha2UgYWxsIHRoZSBzaWRlYmFyIGVsZW1lbnRzXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gIHN0b3J5Q29udGVudC5mb3JFYWNoKChlbGVtZW50OiBTdG9yeUNvbnRlbnQsIGk6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICBjYXNlIFwiaHJlZlwiOlxuICAgICAgY2FzZSBcImNvZGVcIjoge1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0YWJsZVwiKVxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcblxuICAgICAgICBsZXQgbG9nbzogc3RyaW5nXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiY29kZVwiKSB7XG4gICAgICAgICAgbG9nbyA9IGA8c3ZnIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIiB2aWV3Qm94PVwiMCAwIDcgN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxyZWN0IHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIiBmaWxsPVwiIzE4N0FCRlwiLz48L3N2Zz5gXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC50eXBlID09PSBcImh0bWxcIikge1xuICAgICAgICAgIGxvZ28gPSBgPHN2ZyB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIxMVwiIHZpZXdCb3g9XCIwIDAgOSAxMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNOCA1LjVWMy4yNUw2IDFINE04IDUuNVYxMEgxVjFINE04IDUuNUg0VjFcIiBzdHJva2U9XCIjQzRDNEM0XCIvPjwvc3ZnPmBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dvID0gXCJcIlxuICAgICAgICB9XG5cbiAgICAgICAgYS5pbm5lckhUTUwgPSBgJHtsb2dvfSR7ZWxlbWVudC50aXRsZX1gXG4gICAgICAgIGEuaHJlZiA9IGAvcGxheSMke3ByZWZpeH0tJHtpfWBcblxuICAgICAgICBhLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIC8vIE5vdGU6IEknbSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBuZWVkZWQ/XG4gICAgICAgICAgY29uc3QgZWQgPSBzYW5kYm94LmVkaXRvci5nZXREb21Ob2RlKClcbiAgICAgICAgICBpZiAoIWVkKSByZXR1cm5cbiAgICAgICAgICBzYW5kYm94LmVkaXRvci51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IGZhbHNlIH0pXG5cbiAgICAgICAgICBjb25zdCBhbHJlYWR5U2VsZWN0ZWQgPSB1bC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgaWYgKGFscmVhZHlTZWxlY3RlZCkgYWxyZWFkeVNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKVxuXG4gICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpXG4gICAgICAgICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjb2RlXCI6XG4gICAgICAgICAgICAgIHNldENvZGUoZWxlbWVudC5jb2RlLCBzYW5kYm94KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgICAgICAgIHNldFN0b3J5KGVsZW1lbnQuaHRtbCwgc2FuZGJveClcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaHJlZlwiOlxuICAgICAgICAgICAgICBzZXRTdG9yeVZpYUhyZWYoZWxlbWVudC5ocmVmLCBzYW5kYm94KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZXQgdGhlIFVSTCBhZnRlciBzZWxlY3RpbmdcbiAgICAgICAgICBjb25zdCBhbHdheXNVcGRhdGVVUkwgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkaXNhYmxlLXNhdmUtb24tdHlwZVwiKVxuICAgICAgICAgIGlmIChhbHdheXNVcGRhdGVVUkwpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBgJHtwcmVmaXh9LSR7aX1gXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJoclwiOiB7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGhyKVxuICAgICAgfVxuICAgIH1cbiAgICB1bC5hcHBlbmRDaGlsZChsaSlcbiAgfSlcbiAgbmF2LmFwcGVuZENoaWxkKHVsKVxuXG4gIGNvbnN0IHBhZ2VJRCA9IGxvY2F0aW9uLmhhc2guc3BsaXQoXCItXCIpWzFdIHx8IFwiXCJcbiAgY29uc3QgaW5kZXggPSBOdW1iZXIocGFnZUlEKSB8fCAwXG5cbiAgY29uc3QgdGFyZ2V0ZWRMaSA9IHVsLmNoaWxkcmVuLml0ZW0oaW5kZXgpIHx8IHVsLmNoaWxkcmVuLml0ZW0oMClcbiAgaWYgKHRhcmdldGVkTGkpIHtcbiAgICBjb25zdCBhID0gdGFyZ2V0ZWRMaS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIikuaXRlbSgwKVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoYSkgYS5jbGljaygpXG4gIH1cbn1cblxuLy8gVXNlIGZldGNoIHRvIGdyYWIgdGhlIEhUTUwgZnJvbSBhIFVSTCwgd2l0aCBhIHNwZWNpYWwgY2FzZSBcbi8vIHdoZW4gdGhhdCBpcyBhIGdhdHNieSBVUkwgd2hlcmUgd2UgcHVsbCBvdXQgdGhlIGltcG9ydGFudFxuLy8gSFRNTCBmcm9tIGluc2lkZSB0aGUgX19nYXRzYnkgaWQuXG5jb25zdCBzZXRTdG9yeVZpYUhyZWYgPSAoaHJlZjogc3RyaW5nLCBzYW5kYm94OiBTYW5kYm94KSA9PiB7XG4gIGZldGNoKGhyZWYpLnRoZW4oYXN5bmMgcmVxID0+IHtcbiAgICBpZiAocmVxLm9rKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVxLnRleHQoKVxuXG4gICAgICBpZiAodGV4dC5pbmNsdWRlcyhcIl9fX2dhdHNieVwiKSkge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGV4dCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgY29uc3QgZ2F0c2J5ID0gZG9jLmdldEVsZW1lbnRCeUlkKCdfX19nYXRzYnknKVxuICAgICAgICBpZiAoZ2F0c2J5KSB7XG4gICAgICAgICAgZ2F0c2J5LmlkID0gXCJfX19pbm5lcl9nXCJcbiAgICAgICAgICBpZiAoZ2F0c2J5LmZpcnN0Q2hpbGQgJiYgKGdhdHNieS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KS5pZCA9PT0gXCJnYXRzYnktZm9jdXMtd3JhcHBlclwiKSB7XG4gICAgICAgICAgICAoZ2F0c2J5LmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLmlkID0gXCJnYXRzYnktcGxheWdyb3VuZC1oYW5kYm9vay1pbm5lclwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFN0b3J5KGdhdHNieSwgc2FuZGJveClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgPT09IFwibG9jYWxob3N0OjgwMDBcIikge1xuICAgICAgICBzZXRTdG9yeShcIjxwPkJlY2F1c2UgdGhlIGdhdHNieSBkZXYgc2VydmVyIHVzZXMgSlMgdG8gYnVpbGQgeW91ciBwYWdlcywgYW5kIG5vdCBzdGF0aWNhbGx5LCB0aGUgcGFnZSB3aWxsIG5vdCBsb2FkIGR1cmluZyBkZXYuIEl0IGRvZXMgd29yayBpbiBwcm9kIHRob3VnaCAtIHVzZSA8Y29kZT55YXJuIGJ1aWxkLXNpdGU8L2NvZGU+IHRvIHRlc3QgbG9jYWxseSB3aXRoIGEgc3RhdGljIGJ1aWxkLjwvcD5cIiwgc2FuZGJveClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0b3J5KHRleHQsIHNhbmRib3gpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0b3J5KGA8cD5GYWlsZWQgdG8gbG9hZCB0aGUgY29udGVudCBhdCAke2hyZWZ9LiBSZWFzb246ICR7cmVxLnN0YXR1c30gJHtyZXEuc3RhdHVzVGV4dH08L3A+YCwgc2FuZGJveClcbiAgICB9XG4gIH0pXG59XG5cbi8qKiBcbiAqIFBhc3NpbmcgaW4gZWl0aGVyIGEgcm9vdCBIVE1MIGVsZW1lbnQgb3IgdGhlIEhUTUwgZm9yIHRoZSBzdG9yeSwgcHJlc2VudCBhIFxuICogbWFya2Rvd24gZG9jIGFzIGEgJ3N0b3J5JyBpbnNpZGUgdGhlIHBsYXlncm91bmQuXG4gKi9cbmNvbnN0IHNldFN0b3J5ID0gKGh0bWw6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBzYW5kYm94OiBTYW5kYm94KSA9PiB7XG4gIGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvci10b29sYmFyXCIpXG4gIGlmICh0b29sYmFyKSB0b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuXG4gIGNvbnN0IG1vbmFjbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9uYWNvLWVkaXRvci1lbWJlZFwiKVxuICBpZiAobW9uYWNvKSBtb25hY28uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cbiAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5LWNvbnRhaW5lclwiKVxuICBpZiAoIXN0b3J5KSByZXR1cm5cblxuICBzdG9yeS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gIGlmICh0eXBlb2YgaHRtbCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHN0b3J5LmlubmVySFRNTCA9IGh0bWxcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3RvcnkuZmlyc3RDaGlsZCkge1xuICAgICAgc3RvcnkucmVtb3ZlQ2hpbGQoc3RvcnkuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoaHRtbClcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gaGlqYWNrIGludGVybmFsIGxpbmtzXG4gIGZvciAoY29uc3QgYSBvZiBBcnJheS5mcm9tKHN0b3J5LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSkpIHtcbiAgICBpZiAoIWEucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wbGF5XCIpKSBjb250aW51ZVxuICAgIC8vIE5vdGUgdGhlIHRoZSBoZWFkZXIgZ2VuZXJhdGVkIGxpbmtzIGFsc28gY291bnQgaW4gaGVyZVxuXG4gICAgLy8gb3ZlcndyaXRlIHBsYXlncm91bmQgbGlua3NcbiAgICBpZiAoYS5oYXNoLmluY2x1ZGVzKFwiI2NvZGUvXCIpKSB7XG4gICAgICBhLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IGEuaGFzaC5yZXBsYWNlKFwiI2NvZGUvXCIsIFwiXCIpLnRyaW0oKVxuICAgICAgICBsZXQgdXNlckNvZGUgPSBzYW5kYm94Lmx6c3RyaW5nLmRlY29tcHJlc3NGcm9tRW5jb2RlZFVSSUNvbXBvbmVudChjb2RlKVxuICAgICAgICAvLyBGYWxsYmFjayBpbmNhc2UgdGhlcmUgaXMgYW4gZXh0cmEgbGV2ZWwgb2YgZGVjb2Rpbmc6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0dGVyLmltL01pY3Jvc29mdC9UeXBlU2NyaXB0P2F0PTVkYzQ3OGFiOWMzOTgyMTUwOWZmMTg5YVxuICAgICAgICBpZiAoIXVzZXJDb2RlKSB1c2VyQ29kZSA9IHNhbmRib3gubHpzdHJpbmcuZGVjb21wcmVzc0Zyb21FbmNvZGVkVVJJQ29tcG9uZW50KGRlY29kZVVSSUNvbXBvbmVudChjb2RlKSlcbiAgICAgICAgaWYgKHVzZXJDb2RlKSBzZXRDb2RlKHVzZXJDb2RlLCBzYW5kYm94KVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvbi1jb250YWluZXJcIikhLnF1ZXJ5U2VsZWN0b3IoXCJsaS5zZWxlY3RlZFwiKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoYWxyZWFkeVNlbGVjdGVkKSBhbHJlYWR5U2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG92ZXJ3cml0ZSBnaXN0L2hhbmRib29rIGxpbmtzXG4gICAgZWxzZSBpZiAoYS5oYXNoLmluY2x1ZGVzKFwiI2dpc3QvXCIpIHx8IGEuaGFzaC5pbmNsdWRlcyhcIiNoYW5kYm9va1wiKSkge1xuICAgICAgYS5vbmNsaWNrID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGEuaGFzaC5zcGxpdChcIi1cIilbMV0pXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgaWYgKCFuYXYpIHJldHVyblxuICAgICAgICBjb25zdCB1bCA9IG5hdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpLml0ZW0oMCkhXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRMaSA9IHVsLmNoaWxkcmVuLml0ZW0oTnVtYmVyKGluZGV4KSB8fCAwKSB8fCB1bC5jaGlsZHJlbi5pdGVtKDApXG4gICAgICAgIGlmICh0YXJnZXRlZExpKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHRhcmdldGVkTGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLml0ZW0oMClcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgaWYgKGEpIGEuY2xpY2soKVxuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIilcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2hvd0NvZGUgPSAoc2FuZGJveDogU2FuZGJveCkgPT4ge1xuICBjb25zdCBzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnktY29udGFpbmVyXCIpXG4gIGlmIChzdG9yeSkgc3Rvcnkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cbiAgY29uc3QgdG9vbGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yLXRvb2xiYXJcIilcbiAgaWYgKHRvb2xiYXIpIHRvb2xiYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXG4gIGNvbnN0IG1vbmFjbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9uYWNvLWVkaXRvci1lbWJlZFwiKVxuICBpZiAobW9uYWNvKSBtb25hY28uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuXG4gIHNhbmRib3guZWRpdG9yLmxheW91dCgpXG59XG5cbmNvbnN0IHNldENvZGUgPSAoY29kZTogc3RyaW5nLCBzYW5kYm94OiBTYW5kYm94KSA9PiB7XG4gIHNhbmRib3guc2V0VGV4dChjb2RlKVxuICBzaG93Q29kZShzYW5kYm94KVxufVxuIl19