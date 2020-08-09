var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "../localizeWithFallback"], function (require, exports, localizeWithFallback_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showErrors = void 0;
    exports.showErrors = (i, utils) => {
        let model;
        let container;
        let sandbox;
        let timer;
        const updateUI = () => {
            const ds = utils.createDesignSystem(container);
            const markers = sandbox.monaco.editor.getModelMarkers({ resource: model.uri });
            // @ts-ignore
            const playground = window.playground;
            if (playground.getCurrentPlugin().id !== "errors")
                return;
            // Bail early if there's nothing to show
            if (!markers.length) {
                ds.showEmptyScreen(localizeWithFallback_1.localize("play_sidebar_errors_no_errors", "No errors"));
                return;
            }
            // Clean any potential empty screens
            ds.clear();
            ds.listDiags(model, markersToTSDiags(model, markers));
        };
        const plugin = {
            id: "errors",
            displayName: i("play_sidebar_errors"),
            didMount: () => {
                updateUI();
                timer = setInterval(() => updateUI(), 500);
            },
            didUnmount: () => {
                clearInterval(timer);
            },
            modelChangedDebounce: (_sandbox, _model, _container) => __awaiter(void 0, void 0, void 0, function* () {
                sandbox = _sandbox;
                container = _container;
                model = _model;
            }),
        };
        return plugin;
    };
    const markersToTSDiags = (model, markers) => {
        return markers.map(m => {
            const start = model.getOffsetAt({ column: m.startColumn, lineNumber: m.startLineNumber });
            return {
                code: -1,
                category: 1,
                file: undefined,
                start,
                length: model.getCharacterCountInRange(m),
                messageText: m.message,
            };
        });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd0Vycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvc2hvd0Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSWEsUUFBQSxVQUFVLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3BELElBQUksS0FBZ0QsQ0FBQTtRQUNwRCxJQUFJLFNBQXNCLENBQUE7UUFDMUIsSUFBSSxPQUFnQixDQUFBO1FBQ3BCLElBQUksS0FBVSxDQUFBO1FBRWQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM5QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7WUFFOUUsYUFBYTtZQUNiLE1BQU0sVUFBVSxHQUFlLE1BQU0sQ0FBQyxVQUFVLENBQUE7WUFFaEQsSUFBSSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEtBQUssUUFBUTtnQkFBRSxPQUFNO1lBRXpELHdDQUF3QztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsRUFBRSxDQUFDLGVBQWUsQ0FBQywrQkFBUSxDQUFDLCtCQUErQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7Z0JBQzFFLE9BQU07YUFDUDtZQUVELG9DQUFvQztZQUNwQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFVixFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUN2RCxDQUFDLENBQUE7UUFFRCxNQUFNLE1BQU0sR0FBcUI7WUFDL0IsRUFBRSxFQUFFLFFBQVE7WUFDWixXQUFXLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLENBQUE7Z0JBQ1YsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM1QyxDQUFDO1lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQkFDZixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdEIsQ0FBQztZQUNELG9CQUFvQixFQUFFLENBQU8sUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtnQkFDM0QsT0FBTyxHQUFHLFFBQVEsQ0FBQTtnQkFDbEIsU0FBUyxHQUFHLFVBQVUsQ0FBQTtnQkFDdEIsS0FBSyxHQUFHLE1BQU0sQ0FBQTtZQUNoQixDQUFDLENBQUE7U0FDRixDQUFBO1FBQ0QsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDLENBQUE7SUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQ3ZCLEtBQTRDLEVBQzVDLE9BQWlELEVBQ0ksRUFBRTtRQUN2RCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtZQUN6RixPQUFPO2dCQUNMLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ1IsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSztnQkFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztnQkFDekMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ3ZCLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuZGJveCB9IGZyb20gXCJ0eXBlc2NyaXB0bGFuZy1vcmcvc3RhdGljL2pzL3NhbmRib3hcIlxuaW1wb3J0IHsgUGxheWdyb3VuZFBsdWdpbiwgUGx1Z2luRmFjdG9yeSwgUGxheWdyb3VuZCB9IGZyb20gXCIuLlwiXG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuLi9sb2NhbGl6ZVdpdGhGYWxsYmFja1wiXG5cbmV4cG9ydCBjb25zdCBzaG93RXJyb3JzOiBQbHVnaW5GYWN0b3J5ID0gKGksIHV0aWxzKSA9PiB7XG4gIGxldCBtb2RlbDogaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5lZGl0b3IuSVRleHRNb2RlbFxuICBsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudFxuICBsZXQgc2FuZGJveDogU2FuZGJveFxuICBsZXQgdGltZXI6IGFueVxuXG4gIGNvbnN0IHVwZGF0ZVVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGRzID0gdXRpbHMuY3JlYXRlRGVzaWduU3lzdGVtKGNvbnRhaW5lcilcbiAgICBjb25zdCBtYXJrZXJzID0gc2FuZGJveC5tb25hY28uZWRpdG9yLmdldE1vZGVsTWFya2Vycyh7IHJlc291cmNlOiBtb2RlbC51cmkgfSlcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBwbGF5Z3JvdW5kOiBQbGF5Z3JvdW5kID0gd2luZG93LnBsYXlncm91bmRcblxuICAgIGlmIChwbGF5Z3JvdW5kLmdldEN1cnJlbnRQbHVnaW4oKS5pZCAhPT0gXCJlcnJvcnNcIikgcmV0dXJuXG5cbiAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZXJlJ3Mgbm90aGluZyB0byBzaG93XG4gICAgaWYgKCFtYXJrZXJzLmxlbmd0aCkge1xuICAgICAgZHMuc2hvd0VtcHR5U2NyZWVuKGxvY2FsaXplKFwicGxheV9zaWRlYmFyX2Vycm9yc19ub19lcnJvcnNcIiwgXCJObyBlcnJvcnNcIikpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBDbGVhbiBhbnkgcG90ZW50aWFsIGVtcHR5IHNjcmVlbnNcbiAgICBkcy5jbGVhcigpXG5cbiAgICBkcy5saXN0RGlhZ3MobW9kZWwsIG1hcmtlcnNUb1RTRGlhZ3MobW9kZWwsIG1hcmtlcnMpKVxuICB9XG5cbiAgY29uc3QgcGx1Z2luOiBQbGF5Z3JvdW5kUGx1Z2luID0ge1xuICAgIGlkOiBcImVycm9yc1wiLFxuICAgIGRpc3BsYXlOYW1lOiBpKFwicGxheV9zaWRlYmFyX2Vycm9yc1wiKSxcbiAgICBkaWRNb3VudDogKCkgPT4ge1xuICAgICAgdXBkYXRlVUkoKVxuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB1cGRhdGVVSSgpLCA1MDApXG4gICAgfSxcbiAgICBkaWRVbm1vdW50OiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIH0sXG4gICAgbW9kZWxDaGFuZ2VkRGVib3VuY2U6IGFzeW5jIChfc2FuZGJveCwgX21vZGVsLCBfY29udGFpbmVyKSA9PiB7XG4gICAgICBzYW5kYm94ID0gX3NhbmRib3hcbiAgICAgIGNvbnRhaW5lciA9IF9jb250YWluZXJcbiAgICAgIG1vZGVsID0gX21vZGVsXG4gICAgfSxcbiAgfVxuICByZXR1cm4gcGx1Z2luXG59XG5cbmNvbnN0IG1hcmtlcnNUb1RTRGlhZ3MgPSAoXG4gIG1vZGVsOiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLmVkaXRvci5JTW9kZWwsXG4gIG1hcmtlcnM6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikuZWRpdG9yLklNYXJrZXJbXVxuKTogaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5EaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uW10gPT4ge1xuICByZXR1cm4gbWFya2Vycy5tYXAobSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBtb2RlbC5nZXRPZmZzZXRBdCh7IGNvbHVtbjogbS5zdGFydENvbHVtbiwgbGluZU51bWJlcjogbS5zdGFydExpbmVOdW1iZXIgfSlcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogLTEsXG4gICAgICBjYXRlZ29yeTogMSxcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0LFxuICAgICAgbGVuZ3RoOiBtb2RlbC5nZXRDaGFyYWN0ZXJDb3VudEluUmFuZ2UobSksXG4gICAgICBtZXNzYWdlVGV4dDogbS5tZXNzYWdlLFxuICAgIH1cbiAgfSlcbn1cbiJdfQ==