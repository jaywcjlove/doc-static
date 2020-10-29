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
    const showErrors = (i, utils) => {
        let model;
        let container;
        let sandbox;
        let timer;
        const updateUI = () => {
            const ds = utils.createDesignSystem(container);
            const markers = sandbox.monaco.editor.getModelMarkers({ resource: model.uri });
            // @ts-ignore
            const playground = window.playground;
            if (!playground)
                return;
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
    exports.showErrors = showErrors;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd0Vycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXlncm91bmQvc3JjL3NpZGViYXIvc2hvd0Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSU8sTUFBTSxVQUFVLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3BELElBQUksS0FBZ0QsQ0FBQTtRQUNwRCxJQUFJLFNBQXNCLENBQUE7UUFDMUIsSUFBSSxPQUFnQixDQUFBO1FBQ3BCLElBQUksS0FBVSxDQUFBO1FBRWQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM5QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7WUFFOUUsYUFBYTtZQUNiLE1BQU0sVUFBVSxHQUFlLE1BQU0sQ0FBQyxVQUFVLENBQUE7WUFFaEQsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTTtZQUN2QixJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsS0FBSyxRQUFRO2dCQUFFLE9BQU07WUFFekQsd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNuQixFQUFFLENBQUMsZUFBZSxDQUFDLCtCQUFRLENBQUMsK0JBQStCLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtnQkFDMUUsT0FBTTthQUNQO1lBRUQsb0NBQW9DO1lBQ3BDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUVWLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELENBQUMsQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFxQjtZQUMvQixFQUFFLEVBQUUsUUFBUTtZQUNaLFdBQVcsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUM7WUFDckMsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDYixRQUFRLEVBQUUsQ0FBQTtnQkFDVixLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzVDLENBQUM7WUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO2dCQUNmLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN0QixDQUFDO1lBQ0Qsb0JBQW9CLEVBQUUsQ0FBTyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFO2dCQUMzRCxPQUFPLEdBQUcsUUFBUSxDQUFBO2dCQUNsQixTQUFTLEdBQUcsVUFBVSxDQUFBO2dCQUN0QixLQUFLLEdBQUcsTUFBTSxDQUFBO1lBQ2hCLENBQUMsQ0FBQTtTQUNGLENBQUE7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUMsQ0FBQTtJQTdDWSxRQUFBLFVBQVUsY0E2Q3RCO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixLQUE0QyxFQUM1QyxPQUFpRCxFQUNJLEVBQUU7UUFDdkQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUE7WUFDekYsT0FBTztnQkFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNSLFFBQVEsRUFBRSxDQUFDO2dCQUNYLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUs7Z0JBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTzthQUN2QixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNhbmRib3ggfSBmcm9tIFwidHlwZXNjcmlwdGxhbmctb3JnL3N0YXRpYy9qcy9zYW5kYm94XCJcbmltcG9ydCB7IFBsYXlncm91bmRQbHVnaW4sIFBsdWdpbkZhY3RvcnksIFBsYXlncm91bmQgfSBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi4vbG9jYWxpemVXaXRoRmFsbGJhY2tcIlxuXG5leHBvcnQgY29uc3Qgc2hvd0Vycm9yczogUGx1Z2luRmFjdG9yeSA9IChpLCB1dGlscykgPT4ge1xuICBsZXQgbW9kZWw6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikuZWRpdG9yLklUZXh0TW9kZWxcbiAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgbGV0IHNhbmRib3g6IFNhbmRib3hcbiAgbGV0IHRpbWVyOiBhbnlcblxuICBjb25zdCB1cGRhdGVVSSA9ICgpID0+IHtcbiAgICBjb25zdCBkcyA9IHV0aWxzLmNyZWF0ZURlc2lnblN5c3RlbShjb250YWluZXIpXG4gICAgY29uc3QgbWFya2VycyA9IHNhbmRib3gubW9uYWNvLmVkaXRvci5nZXRNb2RlbE1hcmtlcnMoeyByZXNvdXJjZTogbW9kZWwudXJpIH0pXG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcGxheWdyb3VuZDogUGxheWdyb3VuZCA9IHdpbmRvdy5wbGF5Z3JvdW5kXG5cbiAgICBpZiAoIXBsYXlncm91bmQpIHJldHVyblxuICAgIGlmIChwbGF5Z3JvdW5kLmdldEN1cnJlbnRQbHVnaW4oKS5pZCAhPT0gXCJlcnJvcnNcIikgcmV0dXJuXG5cbiAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZXJlJ3Mgbm90aGluZyB0byBzaG93XG4gICAgaWYgKCFtYXJrZXJzLmxlbmd0aCkge1xuICAgICAgZHMuc2hvd0VtcHR5U2NyZWVuKGxvY2FsaXplKFwicGxheV9zaWRlYmFyX2Vycm9yc19ub19lcnJvcnNcIiwgXCJObyBlcnJvcnNcIikpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBDbGVhbiBhbnkgcG90ZW50aWFsIGVtcHR5IHNjcmVlbnNcbiAgICBkcy5jbGVhcigpXG5cbiAgICBkcy5saXN0RGlhZ3MobW9kZWwsIG1hcmtlcnNUb1RTRGlhZ3MobW9kZWwsIG1hcmtlcnMpKVxuICB9XG5cbiAgY29uc3QgcGx1Z2luOiBQbGF5Z3JvdW5kUGx1Z2luID0ge1xuICAgIGlkOiBcImVycm9yc1wiLFxuICAgIGRpc3BsYXlOYW1lOiBpKFwicGxheV9zaWRlYmFyX2Vycm9yc1wiKSxcbiAgICBkaWRNb3VudDogKCkgPT4ge1xuICAgICAgdXBkYXRlVUkoKVxuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB1cGRhdGVVSSgpLCA1MDApXG4gICAgfSxcbiAgICBkaWRVbm1vdW50OiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIH0sXG4gICAgbW9kZWxDaGFuZ2VkRGVib3VuY2U6IGFzeW5jIChfc2FuZGJveCwgX21vZGVsLCBfY29udGFpbmVyKSA9PiB7XG4gICAgICBzYW5kYm94ID0gX3NhbmRib3hcbiAgICAgIGNvbnRhaW5lciA9IF9jb250YWluZXJcbiAgICAgIG1vZGVsID0gX21vZGVsXG4gICAgfSxcbiAgfVxuICByZXR1cm4gcGx1Z2luXG59XG5cbmNvbnN0IG1hcmtlcnNUb1RTRGlhZ3MgPSAoXG4gIG1vZGVsOiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLmVkaXRvci5JTW9kZWwsXG4gIG1hcmtlcnM6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikuZWRpdG9yLklNYXJrZXJbXVxuKTogaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5EaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uW10gPT4ge1xuICByZXR1cm4gbWFya2Vycy5tYXAobSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBtb2RlbC5nZXRPZmZzZXRBdCh7IGNvbHVtbjogbS5zdGFydENvbHVtbiwgbGluZU51bWJlcjogbS5zdGFydExpbmVOdW1iZXIgfSlcbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogLTEsXG4gICAgICBjYXRlZ29yeTogMSxcbiAgICAgIGZpbGU6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0LFxuICAgICAgbGVuZ3RoOiBtb2RlbC5nZXRDaGFyYWN0ZXJDb3VudEluUmFuZ2UobSksXG4gICAgICBtZXNzYWdlVGV4dDogbS5tZXNzYWdlLFxuICAgIH1cbiAgfSlcbn1cbiJdfQ==