var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "./showDTS", "./showJS", "./showErrors", "./plugins", "./ast", "./runtime"], function (require, exports, showDTS_1, showJS_1, showErrors_1, plugins_1, ast_1, runtime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.settingsPlugin = exports.getPlaygroundPlugins = void 0;
    const getPlaygroundPlugins = () => {
        const defaults = [];
        if (!localStorage.getItem("disable-sidebar-js"))
            defaults.push(showJS_1.compiledJSPlugin);
        if (!localStorage.getItem("disable-sidebar-dts"))
            defaults.push(showDTS_1.showDTSPlugin);
        if (!localStorage.getItem("disable-sidebar-err"))
            defaults.push(showErrors_1.showErrors);
        if (!localStorage.getItem("disable-sidebar-run"))
            defaults.push(runtime_1.runPlugin);
        if (!localStorage.getItem("disable-sidebar-plugins"))
            defaults.push(plugins_1.optionsPlugin);
        // Sidebar items which are more dev/introspection focused
        if (localStorage.getItem("enable-sidebar-ast"))
            defaults.push(ast_1.showASTPlugin);
        // Don't let it ever be zero, this is mostly laziness on my part but every
        // possible UI state needs to be considered across so many other states
        // and reducing the matrix is worth it
        if (defaults.length === 0)
            defaults.push(showJS_1.compiledJSPlugin);
        return defaults;
    };
    exports.getPlaygroundPlugins = getPlaygroundPlugins;
    const settingsPlugin = (i, utils) => {
        const settings = [
            {
                display: i("play_sidebar_options_disable_ata"),
                blurb: i("play_sidebar_options_disable_ata_copy"),
                flag: "disable-ata",
            },
            {
                display: i("play_sidebar_options_disable_save"),
                blurb: i("play_sidebar_options_disable_save_copy"),
                flag: "disable-save-on-type",
            },
        ];
        const uiPlugins = [
            {
                display: i("play_sidebar_js_title"),
                blurb: i("play_sidebar_js_blurb"),
                flag: "disable-sidebar-js",
                emptyImpliesEnabled: true,
            },
            {
                display: i("play_sidebar_dts_title"),
                blurb: i("play_sidebar_dts_blurb"),
                flag: "disable-sidebar-dts",
                emptyImpliesEnabled: true,
            },
            {
                display: i("play_sidebar_err_title"),
                blurb: i("play_sidebar_err_blurb"),
                flag: "disable-sidebar-err",
                emptyImpliesEnabled: true,
            },
            {
                display: i("play_sidebar_run_title"),
                blurb: i("play_sidebar_run_blurb"),
                flag: "disable-sidebar-run",
                emptyImpliesEnabled: true,
            },
            {
                display: i("play_sidebar_plugins_title"),
                blurb: i("play_sidebar_plugins_blurb"),
                flag: "disable-sidebar-plugins",
                emptyImpliesEnabled: true,
            },
            {
                display: i("play_sidebar_ast_title"),
                blurb: i("play_sidebar_ast_blurb"),
                flag: "enable-sidebar-ast",
            },
        ];
        const plugin = {
            id: "settings",
            displayName: i("play_subnav_settings"),
            didMount: (sandbox, container) => __awaiter(void 0, void 0, void 0, function* () {
                const ds = utils.createDesignSystem(container);
                ds.subtitle(i("play_subnav_settings"));
                ds.showOptionList(settings, { style: "separated", requireRestart: true });
                ds.subtitle(i("play_settings_tabs_settings"));
                ds.showOptionList(uiPlugins, { style: "separated", requireRestart: true });
            }),
        };
        return plugin;
    };
    exports.settingsPlugin = settingsPlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9zaWRlYmFyL3NldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFTTyxNQUFNLG9CQUFvQixHQUFHLEdBQW9CLEVBQUU7UUFDeEQsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFBO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBYSxDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUM7WUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLHVCQUFVLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztZQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBYSxDQUFDLENBQUE7UUFFbEYseURBQXlEO1FBQ3pELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztZQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQWEsQ0FBQyxDQUFBO1FBRTVFLDBFQUEwRTtRQUMxRSx1RUFBdUU7UUFDdkUsc0NBQXNDO1FBQ3RDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFBO1FBRTFELE9BQU8sUUFBUSxDQUFBO0lBQ2pC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IGZyb20gXCIuLlwiXG5pbXBvcnQgeyBzaG93RFRTUGx1Z2luIH0gZnJvbSBcIi4vc2hvd0RUU1wiXG5pbXBvcnQgeyBjb21waWxlZEpTUGx1Z2luIH0gZnJvbSBcIi4vc2hvd0pTXCJcbmltcG9ydCB7IHNob3dFcnJvcnMgfSBmcm9tIFwiLi9zaG93RXJyb3JzXCJcbmltcG9ydCB7IG9wdGlvbnNQbHVnaW4gfSBmcm9tIFwiLi9wbHVnaW5zXCJcbmltcG9ydCB7IHNob3dBU1RQbHVnaW4gfSBmcm9tIFwiLi9hc3RcIlxuaW1wb3J0IHsgcnVuUGx1Z2luIH0gZnJvbSBcIi4vcnVudGltZVwiXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VPcHRpb24gfSBmcm9tIFwiLi4vZHMvY3JlYXRlRGVzaWduU3lzdGVtXCJcblxuZXhwb3J0IGNvbnN0IGdldFBsYXlncm91bmRQbHVnaW5zID0gKCk6IFBsdWdpbkZhY3RvcnlbXSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRzID0gW11cbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRpc2FibGUtc2lkZWJhci1qc1wiKSkgZGVmYXVsdHMucHVzaChjb21waWxlZEpTUGx1Z2luKVxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGlzYWJsZS1zaWRlYmFyLWR0c1wiKSkgZGVmYXVsdHMucHVzaChzaG93RFRTUGx1Z2luKVxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGlzYWJsZS1zaWRlYmFyLWVyclwiKSkgZGVmYXVsdHMucHVzaChzaG93RXJyb3JzKVxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGlzYWJsZS1zaWRlYmFyLXJ1blwiKSkgZGVmYXVsdHMucHVzaChydW5QbHVnaW4pXG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkaXNhYmxlLXNpZGViYXItcGx1Z2luc1wiKSkgZGVmYXVsdHMucHVzaChvcHRpb25zUGx1Z2luKVxuXG4gIC8vIFNpZGViYXIgaXRlbXMgd2hpY2ggYXJlIG1vcmUgZGV2L2ludHJvc3BlY3Rpb24gZm9jdXNlZFxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbmFibGUtc2lkZWJhci1hc3RcIikpIGRlZmF1bHRzLnB1c2goc2hvd0FTVFBsdWdpbilcblxuICAvLyBEb24ndCBsZXQgaXQgZXZlciBiZSB6ZXJvLCB0aGlzIGlzIG1vc3RseSBsYXppbmVzcyBvbiBteSBwYXJ0IGJ1dCBldmVyeVxuICAvLyBwb3NzaWJsZSBVSSBzdGF0ZSBuZWVkcyB0byBiZSBjb25zaWRlcmVkIGFjcm9zcyBzbyBtYW55IG90aGVyIHN0YXRlc1xuICAvLyBhbmQgcmVkdWNpbmcgdGhlIG1hdHJpeCBpcyB3b3J0aCBpdFxuICBpZiAoZGVmYXVsdHMubGVuZ3RoID09PSAwKSBkZWZhdWx0cy5wdXNoKGNvbXBpbGVkSlNQbHVnaW4pXG5cbiAgcmV0dXJuIGRlZmF1bHRzXG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1BsdWdpbjogUGx1Z2luRmFjdG9yeSA9IChpLCB1dGlscykgPT4ge1xuICBjb25zdCBzZXR0aW5nczogTG9jYWxTdG9yYWdlT3B0aW9uW10gPSBbXG4gICAge1xuICAgICAgZGlzcGxheTogaShcInBsYXlfc2lkZWJhcl9vcHRpb25zX2Rpc2FibGVfYXRhXCIpLFxuICAgICAgYmx1cmI6IGkoXCJwbGF5X3NpZGViYXJfb3B0aW9uc19kaXNhYmxlX2F0YV9jb3B5XCIpLFxuICAgICAgZmxhZzogXCJkaXNhYmxlLWF0YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGlzcGxheTogaShcInBsYXlfc2lkZWJhcl9vcHRpb25zX2Rpc2FibGVfc2F2ZVwiKSxcbiAgICAgIGJsdXJiOiBpKFwicGxheV9zaWRlYmFyX29wdGlvbnNfZGlzYWJsZV9zYXZlX2NvcHlcIiksXG4gICAgICBmbGFnOiBcImRpc2FibGUtc2F2ZS1vbi10eXBlXCIsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBkaXNwbGF5OiAnVmVyYm9zZSBMb2dnaW5nJyxcbiAgICAvLyAgIGJsdXJiOiAnVHVybiBvbiBzdXBlcmZsdW91cyBsb2dnaW5nJyxcbiAgICAvLyAgIGZsYWc6ICdlbmFibGUtc3VwZXJmbHVvdXMtbG9nZ2luZycsXG4gICAgLy8gfSxcbiAgXVxuXG4gIGNvbnN0IHVpUGx1Z2luczogTG9jYWxTdG9yYWdlT3B0aW9uW10gPSBbXG4gICAge1xuICAgICAgZGlzcGxheTogaShcInBsYXlfc2lkZWJhcl9qc190aXRsZVwiKSxcbiAgICAgIGJsdXJiOiBpKFwicGxheV9zaWRlYmFyX2pzX2JsdXJiXCIpLFxuICAgICAgZmxhZzogXCJkaXNhYmxlLXNpZGViYXItanNcIixcbiAgICAgIGVtcHR5SW1wbGllc0VuYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBkaXNwbGF5OiBpKFwicGxheV9zaWRlYmFyX2R0c190aXRsZVwiKSxcbiAgICAgIGJsdXJiOiBpKFwicGxheV9zaWRlYmFyX2R0c19ibHVyYlwiKSxcbiAgICAgIGZsYWc6IFwiZGlzYWJsZS1zaWRlYmFyLWR0c1wiLFxuICAgICAgZW1wdHlJbXBsaWVzRW5hYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGRpc3BsYXk6IGkoXCJwbGF5X3NpZGViYXJfZXJyX3RpdGxlXCIpLFxuICAgICAgYmx1cmI6IGkoXCJwbGF5X3NpZGViYXJfZXJyX2JsdXJiXCIpLFxuICAgICAgZmxhZzogXCJkaXNhYmxlLXNpZGViYXItZXJyXCIsXG4gICAgICBlbXB0eUltcGxpZXNFbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgZGlzcGxheTogaShcInBsYXlfc2lkZWJhcl9ydW5fdGl0bGVcIiksXG4gICAgICBibHVyYjogaShcInBsYXlfc2lkZWJhcl9ydW5fYmx1cmJcIiksXG4gICAgICBmbGFnOiBcImRpc2FibGUtc2lkZWJhci1ydW5cIixcbiAgICAgIGVtcHR5SW1wbGllc0VuYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBkaXNwbGF5OiBpKFwicGxheV9zaWRlYmFyX3BsdWdpbnNfdGl0bGVcIiksXG4gICAgICBibHVyYjogaShcInBsYXlfc2lkZWJhcl9wbHVnaW5zX2JsdXJiXCIpLFxuICAgICAgZmxhZzogXCJkaXNhYmxlLXNpZGViYXItcGx1Z2luc1wiLFxuICAgICAgZW1wdHlJbXBsaWVzRW5hYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGRpc3BsYXk6IGkoXCJwbGF5X3NpZGViYXJfYXN0X3RpdGxlXCIpLFxuICAgICAgYmx1cmI6IGkoXCJwbGF5X3NpZGViYXJfYXN0X2JsdXJiXCIpLFxuICAgICAgZmxhZzogXCJlbmFibGUtc2lkZWJhci1hc3RcIixcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgcGx1Z2luOiBQbGF5Z3JvdW5kUGx1Z2luID0ge1xuICAgIGlkOiBcInNldHRpbmdzXCIsXG4gICAgZGlzcGxheU5hbWU6IGkoXCJwbGF5X3N1Ym5hdl9zZXR0aW5nc1wiKSxcbiAgICBkaWRNb3VudDogYXN5bmMgKHNhbmRib3gsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgY29uc3QgZHMgPSB1dGlscy5jcmVhdGVEZXNpZ25TeXN0ZW0oY29udGFpbmVyKVxuXG4gICAgICBkcy5zdWJ0aXRsZShpKFwicGxheV9zdWJuYXZfc2V0dGluZ3NcIikpXG4gICAgICBkcy5zaG93T3B0aW9uTGlzdChzZXR0aW5ncywgeyBzdHlsZTogXCJzZXBhcmF0ZWRcIiwgcmVxdWlyZVJlc3RhcnQ6IHRydWUgfSlcblxuICAgICAgZHMuc3VidGl0bGUoaShcInBsYXlfc2V0dGluZ3NfdGFic19zZXR0aW5nc1wiKSlcbiAgICAgIGRzLnNob3dPcHRpb25MaXN0KHVpUGx1Z2lucywgeyBzdHlsZTogXCJzZXBhcmF0ZWRcIiwgcmVxdWlyZVJlc3RhcnQ6IHRydWUgfSlcbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIHBsdWdpblxufVxuIl19