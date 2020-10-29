define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parsePrimitive = exports.extractTwoSlashComplierOptions = void 0;
    const booleanConfigRegexp = /^\/\/\s?@(\w+)$/;
    // https://regex101.com/r/8B2Wwh/1
    const valuedConfigRegexp = /^\/\/\s?@(\w+):\s?(.+)$/;
    /**
     * This is a port of the twoslash bit which grabs compiler options
     * from the source code
     */
    const extractTwoSlashComplierOptions = (ts) => {
        let optMap = new Map();
        // @ts-ignore - optionDeclarations is not public API
        for (const opt of ts.optionDeclarations) {
            optMap.set(opt.name.toLowerCase(), opt);
        }
        return (code) => {
            const codeLines = code.split("\n");
            const options = {};
            codeLines.forEach(line => {
                let match;
                if ((match = booleanConfigRegexp.exec(line))) {
                    if (optMap.has(match[1].toLowerCase())) {
                        options[match[1]] = true;
                        setOption(match[1], "true", options, optMap);
                    }
                }
                else if ((match = valuedConfigRegexp.exec(line))) {
                    console.log(match);
                    if (optMap.has(match[1].toLowerCase())) {
                        setOption(match[1], match[2], options, optMap);
                    }
                }
            });
            return options;
        };
    };
    exports.extractTwoSlashComplierOptions = extractTwoSlashComplierOptions;
    function setOption(name, value, opts, optMap) {
        const opt = optMap.get(name.toLowerCase());
        if (!opt)
            return;
        switch (opt.type) {
            case "number":
            case "string":
            case "boolean":
                opts[opt.name] = parsePrimitive(value, opt.type);
                break;
            case "list":
                opts[opt.name] = value.split(",").map(v => parsePrimitive(v, opt.element.type));
                break;
            default:
                opts[opt.name] = opt.type.get(value.toLowerCase());
                if (opts[opt.name] === undefined) {
                    const keys = Array.from(opt.type.keys());
                    console.log(`Invalid value ${value} for ${opt.name}. Allowed values: ${keys.join(",")}`);
                }
        }
    }
    function parsePrimitive(value, type) {
        switch (type) {
            case "number":
                return +value;
            case "string":
                return value;
            case "boolean":
                return value.toLowerCase() === "true" || value.length === 0;
        }
        console.log(`Unknown primitive type ${type} with - ${value}`);
    }
    exports.parsePrimitive = parsePrimitive;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvc2xhc2hTdXBwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2FuZGJveC9zcmMvdHdvc2xhc2hTdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFBQSxNQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUFBO0lBRTdDLGtDQUFrQztJQUNsQyxNQUFNLGtCQUFrQixHQUFHLHlCQUF5QixDQUFBO0lBS3BEOzs7T0FHRztJQUVJLE1BQU0sOEJBQThCLEdBQUcsQ0FBQyxFQUFNLEVBQUUsRUFBRTtRQUN2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFBO1FBRW5DLG9EQUFvRDtRQUNwRCxLQUFLLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtZQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDeEM7UUFFRCxPQUFPLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQyxNQUFNLE9BQU8sR0FBRyxFQUFTLENBQUE7WUFFekIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxLQUFLLENBQUE7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO3dCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO3dCQUN4QixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7cUJBQzdDO2lCQUNGO3FCQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTt3QkFDdEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO3FCQUMvQztpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxPQUFPLENBQUE7UUFDaEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFBO0lBNUJZLFFBQUEsOEJBQThCLGtDQTRCMUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQXFCLEVBQUUsTUFBd0I7UUFDN0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU07UUFDaEIsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDaEQsTUFBSztZQUVQLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBUSxDQUFDLElBQWMsQ0FBQyxDQUFDLENBQUE7Z0JBQzFGLE1BQUs7WUFFUDtnQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO2dCQUVsRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUNoQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFTLENBQUMsQ0FBQTtvQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxRQUFRLEdBQUcsQ0FBQyxJQUFJLHFCQUFxQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtpQkFDekY7U0FDSjtJQUNILENBQUM7SUFFRCxTQUFnQixjQUFjLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDeEQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQTtZQUNmLEtBQUssUUFBUTtnQkFDWCxPQUFPLEtBQUssQ0FBQTtZQUNkLEtBQUssU0FBUztnQkFDWixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7U0FDOUQ7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixJQUFJLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBVkQsd0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib29sZWFuQ29uZmlnUmVnZXhwID0gL15cXC9cXC9cXHM/QChcXHcrKSQvXG5cbi8vIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvOEIyV3doLzFcbmNvbnN0IHZhbHVlZENvbmZpZ1JlZ2V4cCA9IC9eXFwvXFwvXFxzP0AoXFx3Kyk6XFxzPyguKykkL1xuXG50eXBlIFRTID0gdHlwZW9mIGltcG9ydChcInR5cGVzY3JpcHRcIilcbnR5cGUgQ29tcGlsZXJPcHRpb25zID0gaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5Db21waWxlck9wdGlvbnNcblxuLyoqXG4gKiBUaGlzIGlzIGEgcG9ydCBvZiB0aGUgdHdvc2xhc2ggYml0IHdoaWNoIGdyYWJzIGNvbXBpbGVyIG9wdGlvbnNcbiAqIGZyb20gdGhlIHNvdXJjZSBjb2RlXG4gKi9cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RUd29TbGFzaENvbXBsaWVyT3B0aW9ucyA9ICh0czogVFMpID0+IHtcbiAgbGV0IG9wdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KClcblxuICAvLyBAdHMtaWdub3JlIC0gb3B0aW9uRGVjbGFyYXRpb25zIGlzIG5vdCBwdWJsaWMgQVBJXG4gIGZvciAoY29uc3Qgb3B0IG9mIHRzLm9wdGlvbkRlY2xhcmF0aW9ucykge1xuICAgIG9wdE1hcC5zZXQob3B0Lm5hbWUudG9Mb3dlckNhc2UoKSwgb3B0KVxuICB9XG5cbiAgcmV0dXJuIChjb2RlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb2RlTGluZXMgPSBjb2RlLnNwbGl0KFwiXFxuXCIpXG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9IGFzIGFueVxuXG4gICAgY29kZUxpbmVzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBsZXQgbWF0Y2hcbiAgICAgIGlmICgobWF0Y2ggPSBib29sZWFuQ29uZmlnUmVnZXhwLmV4ZWMobGluZSkpKSB7XG4gICAgICAgIGlmIChvcHRNYXAuaGFzKG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgb3B0aW9uc1ttYXRjaFsxXV0gPSB0cnVlXG4gICAgICAgICAgc2V0T3B0aW9uKG1hdGNoWzFdLCBcInRydWVcIiwgb3B0aW9ucywgb3B0TWFwKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChtYXRjaCA9IHZhbHVlZENvbmZpZ1JlZ2V4cC5leGVjKGxpbmUpKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaClcbiAgICAgICAgaWYgKG9wdE1hcC5oYXMobWF0Y2hbMV0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBzZXRPcHRpb24obWF0Y2hbMV0sIG1hdGNoWzJdLCBvcHRpb25zLCBvcHRNYXApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0T3B0aW9uKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0czogQ29tcGlsZXJPcHRpb25zLCBvcHRNYXA6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgY29uc3Qgb3B0ID0gb3B0TWFwLmdldChuYW1lLnRvTG93ZXJDYXNlKCkpXG4gIGlmICghb3B0KSByZXR1cm5cbiAgc3dpdGNoIChvcHQudHlwZSkge1xuICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgIG9wdHNbb3B0Lm5hbWVdID0gcGFyc2VQcmltaXRpdmUodmFsdWUsIG9wdC50eXBlKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgXCJsaXN0XCI6XG4gICAgICBvcHRzW29wdC5uYW1lXSA9IHZhbHVlLnNwbGl0KFwiLFwiKS5tYXAodiA9PiBwYXJzZVByaW1pdGl2ZSh2LCBvcHQuZWxlbWVudCEudHlwZSBhcyBzdHJpbmcpKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvcHRzW29wdC5uYW1lXSA9IG9wdC50eXBlLmdldCh2YWx1ZS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAob3B0c1tvcHQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBrZXlzID0gQXJyYXkuZnJvbShvcHQudHlwZS5rZXlzKCkgYXMgYW55KVxuICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCB2YWx1ZSAke3ZhbHVlfSBmb3IgJHtvcHQubmFtZX0uIEFsbG93ZWQgdmFsdWVzOiAke2tleXMuam9pbihcIixcIil9YClcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcmltaXRpdmUodmFsdWU6IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgcmV0dXJuICt2YWx1ZVxuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCIgfHwgdmFsdWUubGVuZ3RoID09PSAwXG4gIH1cbiAgY29uc29sZS5sb2coYFVua25vd24gcHJpbWl0aXZlIHR5cGUgJHt0eXBlfSB3aXRoIC0gJHt2YWx1ZX1gKVxufVxuIl19