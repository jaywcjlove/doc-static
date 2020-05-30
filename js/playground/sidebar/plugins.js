define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.optionsPlugin = exports.addCustomPlugin = exports.activePlugins = exports.allowConnectingToLocalhost = void 0;
    const pluginRegistry = [
        {
            module: "typescript-playground-presentation-mode",
            display: "Presentation Mode",
            blurb: "Create presentations inside the TypeScript playground, seamlessly jump between slides and live-code.",
            repo: "https://github.com/orta/playground-slides/#readme",
            author: {
                name: "Orta",
                href: "https://orta.io",
            },
        },
        {
            module: "playground-collaborate",
            display: "Collaborate",
            blurb: "Create rooms to inspect code together.",
            repo: "https://github.com/orta/playground-collaborate/#readme",
            author: {
                name: "Orta",
                href: "https://orta.io",
            },
        },
    ];
    /** Whether the playground should actively reach out to an existing plugin */
    exports.allowConnectingToLocalhost = () => {
        return !!localStorage.getItem("compiler-setting-connect-dev-plugin");
    };
    exports.activePlugins = () => {
        const existing = customPlugins().map(module => ({ module }));
        return existing.concat(pluginRegistry.filter(p => !!localStorage.getItem("plugin-" + p.module)));
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
                ds.subtitle(i("play_sidebar_plugins_options_external"));
                const pluginsOL = document.createElement("ol");
                pluginsOL.className = "playground-plugins";
                pluginRegistry.forEach(plugin => {
                    const settingButton = createPlugin(plugin);
                    pluginsOL.appendChild(settingButton);
                });
                container.appendChild(pluginsOL);
                const warning = document.createElement("p");
                warning.className = "warning";
                warning.textContent = i("play_sidebar_plugins_options_external_warning");
                container.appendChild(warning);
                ds.subtitle(i("play_sidebar_plugins_options_modules"));
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
                            utils.declareRestartRequired(i);
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
                        utils.declareRestartRequired(i);
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
            const top = `<span>${plugin.display}</span> by <a href='${plugin.author.href}'>${plugin.author.name}</a><br/>${plugin.blurb}`;
            const bottom = `<a href='https://www.npmjs.com/package/${plugin.module}'>npm</a> | <a href="${plugin.repo}">repo</a>`;
            label.innerHTML = `${top}<br/>${bottom}`;
            const key = "plugin-" + plugin.module;
            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = key;
            input.checked = !!localStorage.getItem(key);
            input.onchange = () => {
                utils.declareRestartRequired(i);
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
            newModuleInput.id = "gist-input";
            newModuleInput.placeholder = i("play_sidebar_plugins_options_modules_placeholder");
            form.appendChild(newModuleInput);
            form.onsubmit = e => {
                utils.declareRestartRequired(i);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvcGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBRUEsTUFBTSxjQUFjLEdBQUc7UUFDckI7WUFDRSxNQUFNLEVBQUUseUNBQXlDO1lBQ2pELE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsS0FBSyxFQUFFLHNHQUFzRztZQUM3RyxJQUFJLEVBQUUsbURBQW1EO1lBQ3pELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCO1NBQ0Y7UUFDRDtZQUNFLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsT0FBTyxFQUFFLGFBQWE7WUFDdEIsS0FBSyxFQUFFLHdDQUF3QztZQUMvQyxJQUFJLEVBQUUsd0RBQXdEO1lBQzlELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCO1NBQ0Y7S0FDRixDQUFBO0lBRUQsNkVBQTZFO0lBQ2hFLFFBQUEsMEJBQTBCLEdBQUcsR0FBRyxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQTtJQUN0RSxDQUFDLENBQUE7SUFFWSxRQUFBLGFBQWEsR0FBRyxHQUFHLEVBQUU7UUFDaEMsTUFBTSxRQUFRLEdBQUcsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM1RCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lB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Q0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEQsY0FBYyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7WUFDNUIsY0FBYyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUE7WUFDaEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsa0RBQWtELENBQUMsQ0FBQTtZQUNsRixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBRWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDL0IsdUJBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3JDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtnQkFDbkIsUUFBUSxFQUFFLENBQUE7Z0JBQ1YsT0FBTyxLQUFLLENBQUE7WUFDZCxDQUFDLENBQUE7WUFFRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUMsQ0FBQTtRQUVELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWdyb3VuZFBsdWdpbiwgUGx1Z2luRmFjdG9yeSB9IGZyb20gXCIuLlwiXG5cbmNvbnN0IHBsdWdpblJlZ2lzdHJ5ID0gW1xuICB7XG4gICAgbW9kdWxlOiBcInR5cGVzY3JpcHQtcGxheWdyb3VuZC1wcmVzZW50YXRpb24tbW9kZVwiLFxuICAgIGRpc3BsYXk6IFwiUHJlc2VudGF0aW9uIE1vZGVcIixcbiAgICBibHVyYjogXCJDcmVhdGUgcHJlc2VudGF0aW9ucyBpbnNpZGUgdGhlIFR5cGVTY3JpcHQgcGxheWdyb3VuZCwgc2VhbWxlc3NseSBqdW1wIGJldHdlZW4gc2xpZGVzIGFuZCBsaXZlLWNvZGUuXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vb3J0YS9wbGF5Z3JvdW5kLXNsaWRlcy8jcmVhZG1lXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIk9ydGFcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9vcnRhLmlvXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG1vZHVsZTogXCJwbGF5Z3JvdW5kLWNvbGxhYm9yYXRlXCIsXG4gICAgZGlzcGxheTogXCJDb2xsYWJvcmF0ZVwiLFxuICAgIGJsdXJiOiBcIkNyZWF0ZSByb29tcyB0byBpbnNwZWN0IGNvZGUgdG9nZXRoZXIuXCIsXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vb3J0YS9wbGF5Z3JvdW5kLWNvbGxhYm9yYXRlLyNyZWFkbWVcIixcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IFwiT3J0YVwiLFxuICAgICAgaHJlZjogXCJodHRwczovL29ydGEuaW9cIixcbiAgICB9LFxuICB9LFxuXVxuXG4vKiogV2hldGhlciB0aGUgcGxheWdyb3VuZCBzaG91bGQgYWN0aXZlbHkgcmVhY2ggb3V0IHRvIGFuIGV4aXN0aW5nIHBsdWdpbiAqL1xuZXhwb3J0IGNvbnN0IGFsbG93Q29ubmVjdGluZ1RvTG9jYWxob3N0ID0gKCkgPT4ge1xuICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBpbGVyLXNldHRpbmctY29ubmVjdC1kZXYtcGx1Z2luXCIpXG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmVQbHVnaW5zID0gKCkgPT4ge1xuICBjb25zdCBleGlzdGluZyA9IGN1c3RvbVBsdWdpbnMoKS5tYXAobW9kdWxlID0+ICh7IG1vZHVsZSB9KSlcbiAgcmV0dXJuIGV4aXN0aW5nLmNvbmNhdChwbHVnaW5SZWdpc3RyeS5maWx0ZXIocCA9PiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGx1Z2luLVwiICsgcC5tb2R1bGUpKSlcbn1cblxuY29uc3QgcmVtb3ZlQ3VzdG9tUGx1Z2lucyA9IChtb2Q6IHN0cmluZykgPT4ge1xuICBjb25zdCBuZXdQbHVnaW5zID0gY3VzdG9tUGx1Z2lucygpLmZpbHRlcihwID0+IHAgIT09IG1vZClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXN0b20tcGx1Z2lucy1wbGF5Z3JvdW5kXCIsIEpTT04uc3RyaW5naWZ5KG5ld1BsdWdpbnMpKVxufVxuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tUGx1Z2luID0gKG1vZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG5ld1BsdWdpbnMgPSBjdXN0b21QbHVnaW5zKClcbiAgbmV3UGx1Z2lucy5wdXNoKG1vZClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXN0b20tcGx1Z2lucy1wbGF5Z3JvdW5kXCIsIEpTT04uc3RyaW5naWZ5KG5ld1BsdWdpbnMpKVxuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5hcHBJbnNpZ2h0cyAmJlxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3aW5kb3cuYXBwSW5zaWdodHMudHJhY2tFdmVudCh7IG5hbWU6IFwiQWRkZWQgQ3VzdG9tIE1vZHVsZVwiLCBwcm9wZXJ0aWVzOiB7IGlkOiBtb2QgfSB9KVxufVxuXG5jb25zdCBjdXN0b21QbHVnaW5zID0gKCk6IHN0cmluZ1tdID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXN0b20tcGx1Z2lucy1wbGF5Z3JvdW5kXCIpIHx8IFwiW11cIilcbn1cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNQbHVnaW46IFBsdWdpbkZhY3RvcnkgPSAoaSwgdXRpbHMpID0+IHtcbiAgY29uc3QgcGx1Z2luOiBQbGF5Z3JvdW5kUGx1Z2luID0ge1xuICAgIGlkOiBcInBsdWdpbnNcIixcbiAgICBkaXNwbGF5TmFtZTogaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zXCIpLFxuICAgIC8vIHNob3VsZEJlU2VsZWN0ZWQ6ICgpID0+IHRydWUsIC8vIHVuY29tbWVudCB0byBtYWtlIHRoaXMgdGhlIGZpcnN0IHRhYiBvbiByZWxvYWRzXG4gICAgd2lsbE1vdW50OiAoX3NhbmRib3gsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgY29uc3QgZHMgPSB1dGlscy5jcmVhdGVEZXNpZ25TeXN0ZW0oY29udGFpbmVyKVxuXG4gICAgICBkcy5zdWJ0aXRsZShpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfb3B0aW9uc19leHRlcm5hbFwiKSlcblxuICAgICAgY29uc3QgcGx1Z2luc09MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpXG4gICAgICBwbHVnaW5zT0wuY2xhc3NOYW1lID0gXCJwbGF5Z3JvdW5kLXBsdWdpbnNcIlxuICAgICAgcGx1Z2luUmVnaXN0cnkuZm9yRWFjaChwbHVnaW4gPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nQnV0dG9uID0gY3JlYXRlUGx1Z2luKHBsdWdpbilcbiAgICAgICAgcGx1Z2luc09MLmFwcGVuZENoaWxkKHNldHRpbmdCdXR0b24pXG4gICAgICB9KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsdWdpbnNPTClcblxuICAgICAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICB3YXJuaW5nLmNsYXNzTmFtZSA9IFwid2FybmluZ1wiXG4gICAgICB3YXJuaW5nLnRleHRDb250ZW50ID0gaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX29wdGlvbnNfZXh0ZXJuYWxfd2FybmluZ1wiKVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmcpXG5cbiAgICAgIGRzLnN1YnRpdGxlKGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc19vcHRpb25zX21vZHVsZXNcIikpXG5cbiAgICAgIGNvbnN0IGN1c3RvbU1vZHVsZXNPTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKVxuICAgICAgY3VzdG9tTW9kdWxlc09MLmNsYXNzTmFtZSA9IFwiY3VzdG9tLW1vZHVsZXNcIlxuXG4gICAgICBjb25zdCB1cGRhdGVDdXN0b21Nb2R1bGVzID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAoY3VzdG9tTW9kdWxlc09MLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBjdXN0b21Nb2R1bGVzT0wucmVtb3ZlQ2hpbGQoY3VzdG9tTW9kdWxlc09MLmZpcnN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgY3VzdG9tUGx1Z2lucygpLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICAgIGxpLmlubmVySFRNTCA9IG1vZHVsZVxuICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICAgIGEuaHJlZiA9IFwiI1wiXG4gICAgICAgICAgYS50ZXh0Q29udGVudCA9IFwiWFwiXG4gICAgICAgICAgYS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlQ3VzdG9tUGx1Z2lucyhtb2R1bGUpXG4gICAgICAgICAgICB1cGRhdGVDdXN0b21Nb2R1bGVzKClcbiAgICAgICAgICAgIHV0aWxzLmRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoaSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKVxuXG4gICAgICAgICAgY3VzdG9tTW9kdWxlc09MLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdXBkYXRlQ3VzdG9tTW9kdWxlcygpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXN0b21Nb2R1bGVzT0wpXG4gICAgICBjb25zdCBpbnB1dEZvcm0gPSBjcmVhdGVOZXdNb2R1bGVJbnB1dEZvcm0odXBkYXRlQ3VzdG9tTW9kdWxlcywgaSlcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZvcm0pXG5cbiAgICAgIGRzLnN1YnRpdGxlKGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc19wbHVnaW5fZGV2XCIpKVxuXG4gICAgICBjb25zdCBwbHVnaW5zRGV2T0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIilcbiAgICAgIHBsdWdpbnNEZXZPTC5jbGFzc05hbWUgPSBcInBsYXlncm91bmQtb3B0aW9uc1wiXG5cbiAgICAgIGNvbnN0IGNvbm5lY3RUb0RldiA9IGRzLmxvY2FsU3RvcmFnZU9wdGlvbih7XG4gICAgICAgIGRpc3BsYXk6IGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc19wbHVnaW5fZGV2X29wdGlvblwiKSxcbiAgICAgICAgYmx1cmI6IGkoXCJwbGF5X3NpZGViYXJfcGx1Z2luc19wbHVnaW5fZGV2X2NvcHlcIiksXG4gICAgICAgIGZsYWc6IFwiY29tcGlsZXItc2V0dGluZy1jb25uZWN0LWRldi1wbHVnaW5cIixcbiAgICAgICAgb25jaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgICB1dGlscy5kZWNsYXJlUmVzdGFydFJlcXVpcmVkKGkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBwbHVnaW5zRGV2T0wuYXBwZW5kQ2hpbGQoY29ubmVjdFRvRGV2KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsdWdpbnNEZXZPTClcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgY3JlYXRlUGx1Z2luID0gKHBsdWdpbjogdHlwZW9mIHBsdWdpblJlZ2lzdHJ5WzBdKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuXG4gICAgY29uc3QgdG9wID0gYDxzcGFuPiR7cGx1Z2luLmRpc3BsYXl9PC9zcGFuPiBieSA8YSBocmVmPScke3BsdWdpbi5hdXRob3IuaHJlZn0nPiR7cGx1Z2luLmF1dGhvci5uYW1lfTwvYT48YnIvPiR7cGx1Z2luLmJsdXJifWBcbiAgICBjb25zdCBib3R0b20gPSBgPGEgaHJlZj0naHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvJHtwbHVnaW4ubW9kdWxlfSc+bnBtPC9hPiB8IDxhIGhyZWY9XCIke3BsdWdpbi5yZXBvfVwiPnJlcG88L2E+YFxuICAgIGxhYmVsLmlubmVySFRNTCA9IGAke3RvcH08YnIvPiR7Ym90dG9tfWBcblxuICAgIGNvbnN0IGtleSA9IFwicGx1Z2luLVwiICsgcGx1Z2luLm1vZHVsZVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0LmlkID0ga2V5XG4gICAgaW5wdXQuY2hlY2tlZCA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuXG4gICAgaW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB1dGlscy5kZWNsYXJlUmVzdGFydFJlcXVpcmVkKGkpXG4gICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHdpbmRvdy5hcHBJbnNpZ2h0cyAmJlxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB3aW5kb3cuYXBwSW5zaWdodHMudHJhY2tFdmVudCh7IG5hbWU6IFwiQWRkZWQgUmVnaXN0cnkgUGx1Z2luXCIsIHByb3BlcnRpZXM6IHsgaWQ6IGtleSB9IH0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgXCJ0cnVlXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFiZWwuaHRtbEZvciA9IGlucHV0LmlkXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKVxuICAgIGxpLmFwcGVuZENoaWxkKGRpdilcbiAgICByZXR1cm4gbGlcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU5ld01vZHVsZUlucHV0Rm9ybSA9ICh1cGRhdGVPTDogRnVuY3Rpb24sIGk6IGFueSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuXG4gICAgY29uc3QgbmV3TW9kdWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBuZXdNb2R1bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCJcbiAgICBuZXdNb2R1bGVJbnB1dC5pZCA9IFwiZ2lzdC1pbnB1dFwiXG4gICAgbmV3TW9kdWxlSW5wdXQucGxhY2Vob2xkZXIgPSBpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfb3B0aW9uc19tb2R1bGVzX3BsYWNlaG9sZGVyXCIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuZXdNb2R1bGVJbnB1dClcblxuICAgIGZvcm0ub25zdWJtaXQgPSBlID0+IHtcbiAgICAgIHV0aWxzLmRlY2xhcmVSZXN0YXJ0UmVxdWlyZWQoaSlcbiAgICAgIGFkZEN1c3RvbVBsdWdpbihuZXdNb2R1bGVJbnB1dC52YWx1ZSlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHVwZGF0ZU9MKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICByZXR1cm4gcGx1Z2luXG59XG4iXX0=