define(["require", "exports", "./fixtures/npmPlugins"], function (require, exports, npmPlugins_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.optionsPlugin = exports.addCustomPlugin = exports.activePlugins = exports.allowConnectingToLocalhost = void 0;
    const pluginRegistry = ["typescript-playground-presentation-mode", "playground-transformer-timeline"];
    /** Whether the playground should actively reach out to an existing plugin */
    const allowConnectingToLocalhost = () => {
        return !!localStorage.getItem("compiler-setting-connect-dev-plugin");
    };
    exports.allowConnectingToLocalhost = allowConnectingToLocalhost;
    const activePlugins = () => {
        const existing = customPlugins().map(module => ({ id: module }));
        return existing.concat(npmPlugins_1.allNPMPlugins.filter(p => !!localStorage.getItem("plugin-" + p.id)));
    };
    exports.activePlugins = activePlugins;
    const removeCustomPlugins = (mod) => {
        const newPlugins = customPlugins().filter(p => p !== mod);
        localStorage.setItem("custom-plugins-playground", JSON.stringify(newPlugins));
    };
    const addCustomPlugin = (mod) => {
        const newPlugins = customPlugins();
        newPlugins.push(mod);
        localStorage.setItem("custom-plugins-playground", JSON.stringify(newPlugins));
        // @ts-ignore
        window.appInsights &&
            // @ts-ignore
            window.appInsights.trackEvent({ name: "Added Custom Module", properties: { id: mod } });
    };
    exports.addCustomPlugin = addCustomPlugin;
    const customPlugins = () => {
        return JSON.parse(localStorage.getItem("custom-plugins-playground") || "[]");
    };
    const optionsPlugin = (i, utils) => {
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
    exports.optionsPlugin = optionsPlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvcGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsTUFBTSxjQUFjLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBO0lBRXJHLDZFQUE2RTtJQUN0RSxNQUFNLDBCQUEwQixHQUFHLEdBQUcsRUFBRTtRQUM3QyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7SUFDdEUsQ0FBQyxDQUFBO0lBRlksUUFBQSwwQkFBMEIsOEJBRXRDO0lBRU0sTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFO1FBQ2hDLE1BQU0sUUFBUSxHQUFHLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQywwQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdGLENBQUMsQ0FBQTtJQUhZLFFBQUEsYUFBYSxpQkFHekI7SUFFRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7UUFDMUMsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUMsQ0FBQTtJQUVNLE1BQU0s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QUUsdUJBQXVCLENBQUMsQ0FBQTtZQUN2RSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBRWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDekMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUU1Qix1QkFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDckMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFBO2dCQUNuQixRQUFRLEVBQUUsQ0FBQTtnQkFDVixPQUFPLEtBQUssQ0FBQTtZQUNkLENBQUMsQ0FBQTtZQUVELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQyxDQUFBO1FBRUQsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDLENBQUE7SUEzSlksUUFBQSxhQUFhLGlCQTJKekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5Z3JvdW5kUGx1Z2luLCBQbHVnaW5GYWN0b3J5IH0gZnJvbSBcIi4uXCJcblxuaW1wb3J0IHsgYWxsTlBNUGx1Z2lucyB9IGZyb20gXCIuL2ZpeHR1cmVzL25wbVBsdWdpbnNcIlxuXG5jb25zdCBwbHVnaW5SZWdpc3RyeSA9IFtcInR5cGVzY3JpcHQtcGxheWdyb3VuZC1wcmVzZW50YXRpb24tbW9kZVwiLCBcInBsYXlncm91bmQtdHJhbnNmb3JtZXItdGltZWxpbmVcIl1cblxuLyoqIFdoZXRoZXIgdGhlIHBsYXlncm91bmQgc2hvdWxkIGFjdGl2ZWx5IHJlYWNoIG91dCB0byBhbiBleGlzdGluZyBwbHVnaW4gKi9cbmV4cG9ydCBjb25zdCBhbGxvd0Nvbm5lY3RpbmdUb0xvY2FsaG9zdCA9ICgpID0+IHtcbiAgcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21waWxlci1zZXR0aW5nLWNvbm5lY3QtZGV2LXBsdWdpblwiKVxufVxuXG5leHBvcnQgY29uc3QgYWN0aXZlUGx1Z2lucyA9ICgpID0+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBjdXN0b21QbHVnaW5zKCkubWFwKG1vZHVsZSA9PiAoeyBpZDogbW9kdWxlIH0pKVxuICByZXR1cm4gZXhpc3RpbmcuY29uY2F0KGFsbE5QTVBsdWdpbnMuZmlsdGVyKHAgPT4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsdWdpbi1cIiArIHAuaWQpKSlcbn1cblxuY29uc3QgcmVtb3ZlQ3VzdG9tUGx1Z2lucyA9IChtb2Q6IHN0cmluZykgPT4ge1xuICBjb25zdCBuZXdQbHVnaW5zID0gY3VzdG9tUGx1Z2lucygpLmZpbHRlcihwID0+IHAgIT09IG1vZClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXN0b20tcGx1Z2lucy1wbGF5Z3JvdW5kXCIsIEpTT04uc3RyaW5naWZ5KG5ld1BsdWdpbnMpKVxufVxuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tUGx1Z2luID0gKG1vZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG5ld1BsdWdpbnMgPSBjdXN0b21QbHVnaW5zKClcbiAgbmV3UGx1Z2lucy5wdXNoKG1vZClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXN0b20tcGx1Z2lucy1wbGF5Z3JvdW5kXCIsIEpTT04uc3RyaW5naWZ5KG5ld1BsdWdpbnMpKVxuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5hcHBJbnNpZ2h0cyAmJlxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3aW5kb3cuYXBwSW5zaWdodHMudHJhY2tFdmVudCh7IG5hbWU6IFwiQWRkZWQgQ3VzdG9tIE1vZHVsZVwiLCBwcm9wZXJ0aWVzOiB7IGlkOiBtb2QgfSB9KVxufVxuXG5jb25zdCBjdXN0b21QbHVnaW5zID0gKCk6IHN0cmluZ1tdID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXN0b20tcGx1Z2lucy1wbGF5Z3JvdW5kXCIpIHx8IFwiW11cIilcbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNQbHVnaW46IFBsdWdpbkZhY3RvcnkgPSAoaSwgdXRpbHMpID0+IHtcbiAgY29uc3QgcGx1Z2luOiBQbGF5Z3JvdW5kUGx1Z2luID0ge1xuICAgIGlkOiBcInBsdWdpbnNcIixcbiAgICBkaXNwbGF5TmFtZTogaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zXCIpLFxuICAgIC8vIHNob3VsZEJlU2VsZWN0ZWQ6ICgpID0+IHRydWUsIC8vIHVuY29tbWVudCB0byBtYWtlIHRoaXMgdGhlIGZpcnN0IHRhYiBvbiByZWxvYWRzXG4gICAgd2lsbE1vdW50OiAoX3NhbmRib3gsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgY29uc3QgZHMgPSB1dGlscy5jcmVhdGVEZXNpZ25TeXN0ZW0oY29udGFpbmVyKVxuXG4gICAgICBjb25zdCBmZWF0dXJlZCA9IGFsbE5QTVBsdWdpbnMuZmlsdGVyKHAgPT4gcGx1Z2luUmVnaXN0cnkuaW5jbHVkZXMocC5pZCkpXG4gICAgICBjb25zdCByZXN0ID0gYWxsTlBNUGx1Z2lucy5maWx0ZXIocCA9PiAhcGx1Z2luUmVnaXN0cnkuaW5jbHVkZXMocC5pZCkpXG5cbiAgICAgIGRzLnN1YnRpdGxlKGkoXCJwbGF5X3NpZGViYXJfZmVhdHVyZWRfcGx1Z2luc1wiKSlcblxuICAgICAgY29uc3QgZmVhdHVyZWRQbHVnaW5zT0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIilcbiAgICAgIGZlYXR1cmVkUGx1Z2luc09MLmNsYXNzTmFtZSA9IFwicGxheWdyb3VuZC1wbHVnaW5zIGZlYXR1cmVkXCJcbiAgICAgIGZlYXR1cmVkLmZvckVhY2gocGx1Z2luID0+IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ0J1dHRvbiA9IGNyZWF0ZVBsdWdpbihwbHVnaW4pXG4gICAgICAgIGZlYXR1cmVkUGx1Z2luc09MLmFwcGVuZENoaWxkKHNldHRpbmdCdXR0b24pXG4gICAgICB9KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZlYXR1cmVkUGx1Z2luc09MKVxuXG4gICAgICBkcy5zdWJ0aXRsZShpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfb3B0aW9uc19leHRlcm5hbFwiKSlcblxuICAgICAgY29uc3QgcGx1Z2luc09MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpXG4gICAgICBwbHVnaW5zT0wuY2xhc3NOYW1lID0gXCJwbGF5Z3JvdW5kLXBsdWdpbnNcIlxuICAgICAgcmVzdC5mb3JFYWNoKHBsdWdpbiA9PiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdCdXR0b24gPSBjcmVhdGVQbHVnaW4ocGx1Z2luKVxuICAgICAgICBwbHVnaW5zT0wuYXBwZW5kQ2hpbGQoc2V0dGluZ0J1dHRvbilcbiAgICAgIH0pXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGx1Z2luc09MKVxuXG4gICAgICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIHdhcm5pbmcuY2xhc3NOYW1lID0gXCJ3YXJuaW5nXCJcbiAgICAgIHdhcm5pbmcudGV4dENvbnRlbnQgPSBpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfb3B0aW9uc19leHRlcm5hbF93YXJuaW5nXCIpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2FybmluZylcblxuICAgICAgY29uc3Qgc3ViaGVhZGluZyA9IGRzLnN1YnRpdGxlKGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc19vcHRpb25zX21vZHVsZXNcIikpXG4gICAgICBzdWJoZWFkaW5nLmlkID0gXCJjdXN0b20tbW9kdWxlcy1oZWFkZXJcIlxuXG4gICAgICBjb25zdCBjdXN0b21Nb2R1bGVzT0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIilcbiAgICAgIGN1c3RvbU1vZHVsZXNPTC5jbGFzc05hbWUgPSBcImN1c3RvbS1tb2R1bGVzXCJcblxuICAgICAgY29uc3QgdXBkYXRlQ3VzdG9tTW9kdWxlcyA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGN1c3RvbU1vZHVsZXNPTC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY3VzdG9tTW9kdWxlc09MLnJlbW92ZUNoaWxkKGN1c3RvbU1vZHVsZXNPTC5maXJzdENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGN1c3RvbVBsdWdpbnMoKS5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICBsaS5pbm5lckhUTUwgPSBtb2R1bGVcbiAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgICBhLmhyZWYgPSBcIiNcIlxuICAgICAgICAgIGEudGV4dENvbnRlbnQgPSBcIlhcIlxuICAgICAgICAgIGEub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUN1c3RvbVBsdWdpbnMobW9kdWxlKVxuICAgICAgICAgICAgdXBkYXRlQ3VzdG9tTW9kdWxlcygpXG4gICAgICAgICAgICBkcy5kZWNsYXJlUmVzdGFydFJlcXVpcmVkKGkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSlcblxuICAgICAgICAgIGN1c3RvbU1vZHVsZXNPTC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHVwZGF0ZUN1c3RvbU1vZHVsZXMoKVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VzdG9tTW9kdWxlc09MKVxuICAgICAgY29uc3QgaW5wdXRGb3JtID0gY3JlYXRlTmV3TW9kdWxlSW5wdXRGb3JtKHVwZGF0ZUN1c3RvbU1vZHVsZXMsIGkpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGb3JtKVxuXG4gICAgICBkcy5zdWJ0aXRsZShpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfcGx1Z2luX2RldlwiKSlcblxuICAgICAgY29uc3QgcGx1Z2luc0Rldk9MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpXG4gICAgICBwbHVnaW5zRGV2T0wuY2xhc3NOYW1lID0gXCJwbGF5Z3JvdW5kLW9wdGlvbnNcIlxuXG4gICAgICBjb25zdCBjb25uZWN0VG9EZXYgPSBkcy5sb2NhbFN0b3JhZ2VPcHRpb24oe1xuICAgICAgICBkaXNwbGF5OiBpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfcGx1Z2luX2Rldl9vcHRpb25cIiksXG4gICAgICAgIGJsdXJiOiBpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfcGx1Z2luX2Rldl9jb3B5XCIpLFxuICAgICAgICBmbGFnOiBcImNvbXBpbGVyLXNldHRpbmctY29ubmVjdC1kZXYtcGx1Z2luXCIsXG4gICAgICAgIG9uY2hhbmdlOiAoKSA9PiB7XG4gICAgICAgICAgZHMuZGVjbGFyZVJlc3RhcnRSZXF1aXJlZChpKVxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgcGx1Z2luc0Rldk9MLmFwcGVuZENoaWxkKGNvbm5lY3RUb0RldilcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVnaW5zRGV2T0wpXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVBsdWdpbiA9IChwbHVnaW46IHR5cGVvZiBhbGxOUE1QbHVnaW5zWzBdKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuXG4gICAgLy8gQXZvaWQgWFNTIGJ5IHNvbWVvbmUgaW5qZWN0aW5nIEpTIHZpYSB0aGUgZGVzY3JpcHRpb24sIHdoaWNoIGlzIHRoZSBvbmx5IGZyZWUgdGV4dCBzb21lb25lIGNhbiB1c2VcbiAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwbHVnaW4uZGVzY3JpcHRpb24pKVxuICAgIGNvbnN0IGVzY2FwZWREZXNjcmlwdGlvbiA9IHAuaW5uZXJIVE1MXG5cbiAgICBjb25zdCB0b3AgPSBgPHNwYW4+JHtwbHVnaW4ubmFtZX08L3NwYW4+IGJ5IDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9+JHtwbHVnaW4uYXV0aG9yfSc+JHtwbHVnaW4uYXV0aG9yfTwvYT48YnIvPiR7ZXNjYXBlZERlc2NyaXB0aW9ufWBcbiAgICBjb25zdCByZXBvID0gcGx1Z2luLmhyZWYuaW5jbHVkZXMoXCJnaXRodWJcIikgPyBgfCA8YSBocmVmPVwiJHtwbHVnaW4uaHJlZn1cIj5yZXBvPC9hPmAgOiBcIlwiXG4gICAgY29uc3QgYm90dG9tID0gYDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlLyR7cGx1Z2luLmlkfSc+bnBtPC9hPiAke3JlcG99YFxuICAgIGxhYmVsLmlubmVySFRNTCA9IGAke3RvcH08YnIvPiR7Ym90dG9tfWBcblxuICAgIGNvbnN0IGtleSA9IFwicGx1Z2luLVwiICsgcGx1Z2luLmlkXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiXG4gICAgaW5wdXQuaWQgPSBrZXlcbiAgICBpbnB1dC5jaGVja2VkID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG5cbiAgICBpbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRzID0gdXRpbHMuY3JlYXRlRGVzaWduU3lzdGVtKGRpdilcbiAgICAgIGRzLmRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoaSlcbiAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2luZG93LmFwcEluc2lnaHRzICYmXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHdpbmRvdy5hcHBJbnNpZ2h0cy50cmFja0V2ZW50KHsgbmFtZTogXCJBZGRlZCBSZWdpc3RyeSBQbHVnaW5cIiwgcHJvcGVydGllczogeyBpZDoga2V5IH0gfSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBcInRydWVcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYWJlbC5odG1sRm9yID0gaW5wdXQuaWRcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHJldHVybiBsaVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTmV3TW9kdWxlSW5wdXRGb3JtID0gKHVwZGF0ZU9MOiBGdW5jdGlvbiwgaTogYW55KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cbiAgICBjb25zdCBuZXdNb2R1bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIG5ld01vZHVsZUlucHV0LnR5cGUgPSBcInRleHRcIlxuICAgIG5ld01vZHVsZUlucHV0LnBsYWNlaG9sZGVyID0gaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX29wdGlvbnNfbW9kdWxlc19wbGFjZWhvbGRlclwiKVxuICAgIG5ld01vZHVsZUlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBcImN1c3RvbS1tb2R1bGVzLWhlYWRlclwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmV3TW9kdWxlSW5wdXQpXG5cbiAgICBmb3JtLm9uc3VibWl0ID0gZSA9PiB7XG4gICAgICBjb25zdCBkcyA9IHV0aWxzLmNyZWF0ZURlc2lnblN5c3RlbShmb3JtKVxuICAgICAgZHMuZGVjbGFyZVJlc3RhcnRSZXF1aXJlZChpKVxuXG4gICAgICBhZGRDdXN0b21QbHVnaW4obmV3TW9kdWxlSW5wdXQudmFsdWUpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB1cGRhdGVPTCgpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgcmV0dXJuIHBsdWdpblxufVxuIl19