define(["require", "exports", "./fixtures/npmPlugins"], function (require, exports, npmPlugins_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.optionsPlugin = exports.addCustomPlugin = exports.activePlugins = exports.allowConnectingToLocalhost = void 0;
    const pluginRegistry = ["typescript-playground-presentation-mode", "playground-transformer-timeline"];
    /** Whether the playground should actively reach out to an existing plugin */
    exports.allowConnectingToLocalhost = () => {
        return !!localStorage.getItem("compiler-setting-connect-dev-plugin");
    };
    exports.activePlugins = () => {
        const existing = customPlugins().map(module => ({ id: module }));
        return existing.concat(npmPlugins_1.allNPMPlugins.filter(p => !!localStorage.getItem("plugin-" + p.id)));
    };
    const removeCustomPlugins = (mod) => {
        const newPlugins = customPlugins().filter(p => p !== mod);
        localStorage.setItem("custom-plugins-playground", JSON.stringify(newPlugins));
    };
    exports.addCustomPlugin = (mod) => {
        const newPlugins = customPlugins();
        newPlugins.push(mod);
        localStorage.setItem("custom-plugins-playground", JSON.stringify(newPlugins));
        // @ts-ignore
        window.appInsights &&
            // @ts-ignore
            window.appInsights.trackEvent({ name: "Added Custom Module", properties: { id: mod } });
    };
    const customPlugins = () => {
        return JSON.parse(localStorage.getItem("custom-plugins-playground") || "[]");
    };
    exports.optionsPlugin = (i, utils) => {
        const plugin = {
            id: "plugins",
            displayName: i("play_sidebar_plugins"),
            // shouldBeSelected: () => true, // uncomment to make this the first tab on reloads
            willMount: (_sandbox, container) => {
                const ds = utils.createDesignSystem(container);
                const featured = npmPlugins_1.allNPMPlugins.filter(p => pluginRegistry.includes(p.id));
                const rest = npmPlugins_1.allNPMPlugins.filter(p => !pluginRegistry.includes(p.id));
                ds.subtitle(i("play_sidebar_featured_plugins"));
                const featuredPluginsOL = document.createElement("ol");
                featuredPluginsOL.className = "playground-plugins featured";
                featured.forEach(plugin => {
                    const settingButton = createPlugin(plugin);
                    featuredPluginsOL.appendChild(settingButton);
                });
                container.appendChild(featuredPluginsOL);
                ds.subtitle(i("play_sidebar_plugins_options_external"));
                const pluginsOL = document.createElement("ol");
                pluginsOL.className = "playground-plugins";
                rest.forEach(plugin => {
                    const settingButton = createPlugin(plugin);
                    pluginsOL.appendChild(settingButton);
                });
                container.appendChild(pluginsOL);
                const warning = document.createElement("p");
                warning.className = "warning";
                warning.textContent = i("play_sidebar_plugins_options_external_warning");
                container.appendChild(warning);
                const subheading = ds.subtitle(i("play_sidebar_plugins_options_modules"));
                subheading.id = "custom-modules-header";
                const customModulesOL = document.createElement("ol");
                customModulesOL.className = "custom-modules";
                const updateCustomModules = () => {
                    while (customModulesOL.firstChild) {
                        customModulesOL.removeChild(customModulesOL.firstChild);
                    }
                    customPlugins().forEach(module => {
                        const li = document.createElement("li");
                        li.innerHTML = module;
                        const a = document.createElement("a");
                        a.href = "#";
                        a.textContent = "X";
                        a.onclick = () => {
                            removeCustomPlugins(module);
                            updateCustomModules();
                            ds.declareRestartRequired(i);
                            return false;
                        };
                        li.appendChild(a);
                        customModulesOL.appendChild(li);
                    });
                };
                updateCustomModules();
                container.appendChild(customModulesOL);
                const inputForm = createNewModuleInputForm(updateCustomModules, i);
                container.appendChild(inputForm);
                ds.subtitle(i("play_sidebar_plugins_plugin_dev"));
                const pluginsDevOL = document.createElement("ol");
                pluginsDevOL.className = "playground-options";
                const connectToDev = ds.localStorageOption({
                    display: i("play_sidebar_plugins_plugin_dev_option"),
                    blurb: i("play_sidebar_plugins_plugin_dev_copy"),
                    flag: "compiler-setting-connect-dev-plugin",
                    onchange: () => {
                        ds.declareRestartRequired(i);
                    },
                });
                pluginsDevOL.appendChild(connectToDev);
                container.appendChild(pluginsDevOL);
            },
        };
        const createPlugin = (plugin) => {
            const li = document.createElement("li");
            const div = document.createElement("div");
            const label = document.createElement("label");
            // Avoid XSS by someone injecting JS via the description, which is the only free text someone can use
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(plugin.description));
            const escapedDescription = p.innerHTML;
            const top = `<span>${plugin.name}</span> by <a href='https://www.npmjs.com/~${plugin.author}'>${plugin.author}</a><br/>${escapedDescription}`;
            const repo = plugin.href.includes("github") ? `| <a href="${plugin.href}">repo</a>` : "";
            const bottom = `<a href='https://www.npmjs.com/package/${plugin.id}'>npm</a> ${repo}`;
            label.innerHTML = `${top}<br/>${bottom}`;
            const key = "plugin-" + plugin.id;
            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = key;
            input.checked = !!localStorage.getItem(key);
            input.onchange = () => {
                const ds = utils.createDesignSystem(div);
                ds.declareRestartRequired(i);
                if (input.checked) {
                    // @ts-ignore
                    window.appInsights &&
                        // @ts-ignore
                        window.appInsights.trackEvent({ name: "Added Registry Plugin", properties: { id: key } });
                    localStorage.setItem(key, "true");
                }
                else {
                    localStorage.removeItem(key);
                }
            };
            label.htmlFor = input.id;
            div.appendChild(input);
            div.appendChild(label);
            li.appendChild(div);
            return li;
        };
        const createNewModuleInputForm = (updateOL, i) => {
            const form = document.createElement("form");
            const newModuleInput = document.createElement("input");
            newModuleInput.type = "text";
            newModuleInput.placeholder = i("play_sidebar_plugins_options_modules_placeholder");
            newModuleInput.setAttribute("aria-labelledby", "custom-modules-header");
            form.appendChild(newModuleInput);
            form.onsubmit = e => {
                const ds = utils.createDesignSystem(form);
                ds.declareRestartRequired(i);
                exports.addCustomPlugin(newModuleInput.value);
                e.stopPropagation();
                updateOL();
                return false;
            };
            return form;
        };
        return plugin;
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvcGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsTUFBTSxjQUFjLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBO0lBRXJHLDZFQUE2RTtJQUNoRSxRQUFBLDBCQUEwQixHQUFHLEdBQUcsRUFBRTtRQUM3QyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7SUFDdEUsQ0FBQyxDQUFBO0lBRVksUUFBQSxhQUFhLEdBQUcsR0FBRyxFQUFFO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQywwQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdGLENBQUMsQ0FBQTtJQUVELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDL0UsQ0FBQyxDQUFBO0lBRVksUUFBQSxlQUFlLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUM3QyxNQUFNLFVBQVUs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QUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3pDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFNUIsdUJBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3JDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtnQkFDbkIsUUFBUSxFQUFFLENBQUE7Z0JBQ1YsT0FBTyxLQUFLLENBQUE7WUFDZCxDQUFDLENBQUE7WUFFRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUMsQ0FBQTtRQUVELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWdyb3VuZFBsdWdpbiwgUGx1Z2luRmFjdG9yeSB9IGZyb20gXCIuLlwiXG5cbmltcG9ydCB7IGFsbE5QTVBsdWdpbnMgfSBmcm9tIFwiLi9maXh0dXJlcy9ucG1QbHVnaW5zXCJcblxuY29uc3QgcGx1Z2luUmVnaXN0cnkgPSBbXCJ0eXBlc2NyaXB0LXBsYXlncm91bmQtcHJlc2VudGF0aW9uLW1vZGVcIiwgXCJwbGF5Z3JvdW5kLXRyYW5zZm9ybWVyLXRpbWVsaW5lXCJdXG5cbi8qKiBXaGV0aGVyIHRoZSBwbGF5Z3JvdW5kIHNob3VsZCBhY3RpdmVseSByZWFjaCBvdXQgdG8gYW4gZXhpc3RpbmcgcGx1Z2luICovXG5leHBvcnQgY29uc3QgYWxsb3dDb25uZWN0aW5nVG9Mb2NhbGhvc3QgPSAoKSA9PiB7XG4gIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGlsZXItc2V0dGluZy1jb25uZWN0LWRldi1wbHVnaW5cIilcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2ZVBsdWdpbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gY3VzdG9tUGx1Z2lucygpLm1hcChtb2R1bGUgPT4gKHsgaWQ6IG1vZHVsZSB9KSlcbiAgcmV0dXJuIGV4aXN0aW5nLmNvbmNhdChhbGxOUE1QbHVnaW5zLmZpbHRlcihwID0+ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbHVnaW4tXCIgKyBwLmlkKSkpXG59XG5cbmNvbnN0IHJlbW92ZUN1c3RvbVBsdWdpbnMgPSAobW9kOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbmV3UGx1Z2lucyA9IGN1c3RvbVBsdWdpbnMoKS5maWx0ZXIocCA9PiBwICE9PSBtb2QpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VzdG9tLXBsdWdpbnMtcGxheWdyb3VuZFwiLCBKU09OLnN0cmluZ2lmeShuZXdQbHVnaW5zKSlcbn1cblxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVBsdWdpbiA9IChtb2Q6IHN0cmluZykgPT4ge1xuICBjb25zdCBuZXdQbHVnaW5zID0gY3VzdG9tUGx1Z2lucygpXG4gIG5ld1BsdWdpbnMucHVzaChtb2QpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VzdG9tLXBsdWdpbnMtcGxheWdyb3VuZFwiLCBKU09OLnN0cmluZ2lmeShuZXdQbHVnaW5zKSlcbiAgLy8gQHRzLWlnbm9yZVxuICB3aW5kb3cuYXBwSW5zaWdodHMgJiZcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgd2luZG93LmFwcEluc2lnaHRzLnRyYWNrRXZlbnQoeyBuYW1lOiBcIkFkZGVkIEN1c3RvbSBNb2R1bGVcIiwgcHJvcGVydGllczogeyBpZDogbW9kIH0gfSlcbn1cblxuY29uc3QgY3VzdG9tUGx1Z2lucyA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VzdG9tLXBsdWdpbnMtcGxheWdyb3VuZFwiKSB8fCBcIltdXCIpXG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zUGx1Z2luOiBQbHVnaW5GYWN0b3J5ID0gKGksIHV0aWxzKSA9PiB7XG4gIGNvbnN0IHBsdWdpbjogUGxheWdyb3VuZFBsdWdpbiA9IHtcbiAgICBpZDogXCJwbHVnaW5zXCIsXG4gICAgZGlzcGxheU5hbWU6IGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc1wiKSxcbiAgICAvLyBzaG91bGRCZVNlbGVjdGVkOiAoKSA9PiB0cnVlLCAvLyB1bmNvbW1lbnQgdG8gbWFrZSB0aGlzIHRoZSBmaXJzdCB0YWIgb24gcmVsb2Fkc1xuICAgIHdpbGxNb3VudDogKF9zYW5kYm94LCBjb250YWluZXIpID0+IHtcbiAgICAgIGNvbnN0IGRzID0gdXRpbHMuY3JlYXRlRGVzaWduU3lzdGVtKGNvbnRhaW5lcilcblxuICAgICAgY29uc3QgZmVhdHVyZWQgPSBhbGxOUE1QbHVnaW5zLmZpbHRlcihwID0+IHBsdWdpblJlZ2lzdHJ5LmluY2x1ZGVzKHAuaWQpKVxuICAgICAgY29uc3QgcmVzdCA9IGFsbE5QTVBsdWdpbnMuZmlsdGVyKHAgPT4gIXBsdWdpblJlZ2lzdHJ5LmluY2x1ZGVzKHAuaWQpKVxuXG4gICAgICBkcy5zdWJ0aXRsZShpKFwicGxheV9zaWRlYmFyX2ZlYXR1cmVkX3BsdWdpbnNcIikpXG5cbiAgICAgIGNvbnN0IGZlYXR1cmVkUGx1Z2luc09MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpXG4gICAgICBmZWF0dXJlZFBsdWdpbnNPTC5jbGFzc05hbWUgPSBcInBsYXlncm91bmQtcGx1Z2lucyBmZWF0dXJlZFwiXG4gICAgICBmZWF0dXJlZC5mb3JFYWNoKHBsdWdpbiA9PiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdCdXR0b24gPSBjcmVhdGVQbHVnaW4ocGx1Z2luKVxuICAgICAgICBmZWF0dXJlZFBsdWdpbnNPTC5hcHBlbmRDaGlsZChzZXR0aW5nQnV0dG9uKVxuICAgICAgfSlcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmZWF0dXJlZFBsdWdpbnNPTClcblxuICAgICAgZHMuc3VidGl0bGUoaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX29wdGlvbnNfZXh0ZXJuYWxcIikpXG5cbiAgICAgIGNvbnN0IHBsdWdpbnNPTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKVxuICAgICAgcGx1Z2luc09MLmNsYXNzTmFtZSA9IFwicGxheWdyb3VuZC1wbHVnaW5zXCJcbiAgICAgIHJlc3QuZm9yRWFjaChwbHVnaW4gPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nQnV0dG9uID0gY3JlYXRlUGx1Z2luKHBsdWdpbilcbiAgICAgICAgcGx1Z2luc09MLmFwcGVuZENoaWxkKHNldHRpbmdCdXR0b24pXG4gICAgICB9KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsdWdpbnNPTClcblxuICAgICAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICB3YXJuaW5nLmNsYXNzTmFtZSA9IFwid2FybmluZ1wiXG4gICAgICB3YXJuaW5nLnRleHRDb250ZW50ID0gaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX29wdGlvbnNfZXh0ZXJuYWxfd2FybmluZ1wiKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmcpXG5cbiAgICAgIGNvbnN0IHN1YmhlYWRpbmcgPSBkcy5zdWJ0aXRsZShpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfb3B0aW9uc19tb2R1bGVzXCIpKVxuICAgICAgc3ViaGVhZGluZy5pZCA9IFwiY3VzdG9tLW1vZHVsZXMtaGVhZGVyXCJcblxuICAgICAgY29uc3QgY3VzdG9tTW9kdWxlc09MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpXG4gICAgICBjdXN0b21Nb2R1bGVzT0wuY2xhc3NOYW1lID0gXCJjdXN0b20tbW9kdWxlc1wiXG5cbiAgICAgIGNvbnN0IHVwZGF0ZUN1c3RvbU1vZHVsZXMgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChjdXN0b21Nb2R1bGVzT0wuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGN1c3RvbU1vZHVsZXNPTC5yZW1vdmVDaGlsZChjdXN0b21Nb2R1bGVzT0wuZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgICBjdXN0b21QbHVnaW5zKCkuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgbGkuaW5uZXJIVE1MID0gbW9kdWxlXG4gICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgICAgYS5ocmVmID0gXCIjXCJcbiAgICAgICAgICBhLnRleHRDb250ZW50ID0gXCJYXCJcbiAgICAgICAgICBhLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVDdXN0b21QbHVnaW5zKG1vZHVsZSlcbiAgICAgICAgICAgIHVwZGF0ZUN1c3RvbU1vZHVsZXMoKVxuICAgICAgICAgICAgZHMuZGVjbGFyZVJlc3RhcnRSZXF1aXJlZChpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpXG5cbiAgICAgICAgICBjdXN0b21Nb2R1bGVzT0wuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB1cGRhdGVDdXN0b21Nb2R1bGVzKClcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1c3RvbU1vZHVsZXNPTClcbiAgICAgIGNvbnN0IGlucHV0Rm9ybSA9IGNyZWF0ZU5ld01vZHVsZUlucHV0Rm9ybSh1cGRhdGVDdXN0b21Nb2R1bGVzLCBpKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Rm9ybSlcblxuICAgICAgZHMuc3VidGl0bGUoaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX3BsdWdpbl9kZXZcIikpXG5cbiAgICAgIGNvbnN0IHBsdWdpbnNEZXZPTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKVxuICAgICAgcGx1Z2luc0Rldk9MLmNsYXNzTmFtZSA9IFwicGxheWdyb3VuZC1vcHRpb25zXCJcblxuICAgICAgY29uc3QgY29ubmVjdFRvRGV2ID0gZHMubG9jYWxTdG9yYWdlT3B0aW9uKHtcbiAgICAgICAgZGlzcGxheTogaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX3BsdWdpbl9kZXZfb3B0aW9uXCIpLFxuICAgICAgICBibHVyYjogaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX3BsdWdpbl9kZXZfY29weVwiKSxcbiAgICAgICAgZmxhZzogXCJjb21waWxlci1zZXR0aW5nLWNvbm5lY3QtZGV2LXBsdWdpblwiLFxuICAgICAgICBvbmNoYW5nZTogKCkgPT4ge1xuICAgICAgICAgIGRzLmRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoaSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIHBsdWdpbnNEZXZPTC5hcHBlbmRDaGlsZChjb25uZWN0VG9EZXYpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGx1Z2luc0Rldk9MKVxuICAgIH0sXG4gIH1cblxuICBjb25zdCBjcmVhdGVQbHVnaW4gPSAocGx1Z2luOiB0eXBlb2YgYWxsTlBNUGx1Z2luc1swXSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcblxuICAgIC8vIEF2b2lkIFhTUyBieSBzb21lb25lIGluamVjdGluZyBKUyB2aWEgdGhlIGRlc2NyaXB0aW9uLCB3aGljaCBpcyB0aGUgb25seSBmcmVlIHRleHQgc29tZW9uZSBjYW4gdXNlXG4gICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGx1Z2luLmRlc2NyaXB0aW9uKSlcbiAgICBjb25zdCBlc2NhcGVkRGVzY3JpcHRpb24gPSBwLmlubmVySFRNTFxuXG4gICAgY29uc3QgdG9wID0gYDxzcGFuPiR7cGx1Z2luLm5hbWV9PC9zcGFuPiBieSA8YSBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vfiR7cGx1Z2luLmF1dGhvcn0nPiR7cGx1Z2luLmF1dGhvcn08L2E+PGJyLz4ke2VzY2FwZWREZXNjcmlwdGlvbn1gXG4gICAgY29uc3QgcmVwbyA9IHBsdWdpbi5ocmVmLmluY2x1ZGVzKFwiZ2l0aHViXCIpID8gYHwgPGEgaHJlZj1cIiR7cGx1Z2luLmhyZWZ9XCI+cmVwbzwvYT5gIDogXCJcIlxuICAgIGNvbnN0IGJvdHRvbSA9IGA8YSBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS8ke3BsdWdpbi5pZH0nPm5wbTwvYT4gJHtyZXBvfWBcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBgJHt0b3B9PGJyLz4ke2JvdHRvbX1gXG5cbiAgICBjb25zdCBrZXkgPSBcInBsdWdpbi1cIiArIHBsdWdpbi5pZFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0LmlkID0ga2V5XG4gICAgaW5wdXQuY2hlY2tlZCA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuXG4gICAgaW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkcyA9IHV0aWxzLmNyZWF0ZURlc2lnblN5c3RlbShkaXYpXG4gICAgICBkcy5kZWNsYXJlUmVzdGFydFJlcXVpcmVkKGkpXG4gICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHdpbmRvdy5hcHBJbnNpZ2h0cyAmJlxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB3aW5kb3cuYXBwSW5zaWdodHMudHJhY2tFdmVudCh7IG5hbWU6IFwiQWRkZWQgUmVnaXN0cnkgUGx1Z2luXCIsIHByb3BlcnRpZXM6IHsgaWQ6IGtleSB9IH0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgXCJ0cnVlXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFiZWwuaHRtbEZvciA9IGlucHV0LmlkXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxpLmFwcGVuZENoaWxkKGRpdilcbiAgICByZXR1cm4gbGlcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU5ld01vZHVsZUlucHV0Rm9ybSA9ICh1cGRhdGVPTDogRnVuY3Rpb24sIGk6IGFueSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gICAgY29uc3QgbmV3TW9kdWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBuZXdNb2R1bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCJcbiAgICBuZXdNb2R1bGVJbnB1dC5wbGFjZWhvbGRlciA9IGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc19vcHRpb25zX21vZHVsZXNfcGxhY2Vob2xkZXJcIilcbiAgICBuZXdNb2R1bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJjdXN0b20tbW9kdWxlcy1oZWFkZXJcIilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5ld01vZHVsZUlucHV0KVxuXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGUgPT4ge1xuICAgICAgY29uc3QgZHMgPSB1dGlscy5jcmVhdGVEZXNpZ25TeXN0ZW0oZm9ybSlcbiAgICAgIGRzLmRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoaSlcblxuICAgICAgYWRkQ3VzdG9tUGx1Z2luKG5ld01vZHVsZUlucHV0LnZhbHVlKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdXBkYXRlT0woKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW5cbn1cbiJdfQ==