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
    exports.createTwoslashInlayProvider = void 0;
    const createTwoslashInlayProvider = (sandbox) => {
        const provider = {
            provideInlayHints: (model, _, cancel) => __awaiter(void 0, void 0, void 0, function* () {
                const text = model.getValue();
                const queryRegex = /^\s*\/\/\s*\^\?$/gm;
                let match;
                const results = [];
                const worker = yield sandbox.getWorkerProcess();
                if (model.isDisposed()) {
                    return {
                        hints: [],
                        dispose: () => { },
                    };
                }
                while ((match = queryRegex.exec(text)) !== null) {
                    const end = match.index + match[0].length - 1;
                    const endPos = model.getPositionAt(end);
                    const inspectionPos = new sandbox.monaco.Position(endPos.lineNumber - 1, endPos.column);
                    const inspectionOff = model.getOffsetAt(inspectionPos);
                    if (cancel.isCancellationRequested) {
                        return {
                            hints: [],
                            dispose: () => { },
                        };
                    }
                    const hint = yield worker.getQuickInfoAtPosition("file://" + model.uri.path, inspectionOff);
                    if (!hint || !hint.displayParts)
                        continue;
                    // Make a one-liner
                    let text = hint.displayParts.map(d => d.text).join("").replace(/\\n/g, "").replace(/  /g, "");
                    if (text.length > 120)
                        text = text.slice(0, 119) + "...";
                    const inlay = {
                        // @ts-ignore
                        kind: 0,
                        position: new sandbox.monaco.Position(endPos.lineNumber, endPos.column + 1),
                        label: text,
                        paddingLeft: true,
                    };
                    results.push(inlay);
                }
                return {
                    hints: results,
                    dispose: () => { },
                };
            }),
        };
        return provider;
    };
    exports.createTwoslashInlayProvider = createTwoslashInlayProvider;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvc2xhc2hJbmxheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy90d29zbGFzaElubGF5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRU8sTUFBTSwyQkFBMkIsR0FBRyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtRQUM5RCxNQUFNLFFBQVEsR0FBeUQ7WUFDckUsaUJBQWlCLEVBQUUsQ0FBTyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUM1QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQzdCLE1BQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFBO2dCQUN2QyxJQUFJLEtBQUssQ0FBQTtnQkFDVCxNQUFNLE9BQU8sR0FBa0QsRUFBRSxDQUFBO2dCQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO2dCQUMvQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDdEIsT0FBTzt3QkFDTCxLQUFLLEVBQUUsRUFBRTt3QkFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQztxQkFDbEIsQ0FBQTtpQkFDRjtnQkFFRCxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQy9DLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7b0JBQzdDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3ZDLE1BQU0sYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUN2RixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUV0RCxJQUFJLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRTt3QkFDbEMsT0FBTzs0QkFDTCxLQUFLLEVBQUUsRUFBRTs0QkFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQzt5QkFDbEIsQ0FBQTtxQkFDRjtvQkFFRCxNQUFNLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUE7b0JBQzNGLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTt3QkFBRSxTQUFRO29CQUV6QyxtQkFBbUI7b0JBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQzdGLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO3dCQUFFLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUE7b0JBRXhELE1BQU0sS0FBSyxHQUFnRDt3QkFDekQsYUFBYTt3QkFDYixJQUFJLEVBQUUsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUMzRSxLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQTtvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2lCQUNwQjtnQkFDRCxPQUFPO29CQUNMLEtBQUssRUFBRSxPQUFPO29CQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO2lCQUNsQixDQUFBO1lBQ0gsQ0FBQyxDQUFBO1NBQ0YsQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUMsQ0FBQTtJQW5EWSxRQUFBLDJCQUEyQiwrQkFtRHZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FuZGJveCB9IGZyb20gXCJAdHlwZXNjcmlwdC9zYW5kYm94XCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVR3b3NsYXNoSW5sYXlQcm92aWRlciA9IChzYW5kYm94OiBTYW5kYm94KSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyOiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLmxhbmd1YWdlcy5JbmxheUhpbnRzUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZUlubGF5SGludHM6IGFzeW5jIChtb2RlbCwgXywgY2FuY2VsKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gbW9kZWwuZ2V0VmFsdWUoKVxuICAgICAgY29uc3QgcXVlcnlSZWdleCA9IC9eXFxzKlxcL1xcL1xccypcXF5cXD8kL2dtXG4gICAgICBsZXQgbWF0Y2hcbiAgICAgIGNvbnN0IHJlc3VsdHM6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikubGFuZ3VhZ2VzLklubGF5SGludFtdID0gW11cbiAgICAgIGNvbnN0IHdvcmtlciA9IGF3YWl0IHNhbmRib3guZ2V0V29ya2VyUHJvY2VzcygpXG4gICAgICBpZiAobW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGludHM6IFtdLFxuICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHt9LFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICgobWF0Y2ggPSBxdWVyeVJlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gMVxuICAgICAgICBjb25zdCBlbmRQb3MgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGVuZClcbiAgICAgICAgY29uc3QgaW5zcGVjdGlvblBvcyA9IG5ldyBzYW5kYm94Lm1vbmFjby5Qb3NpdGlvbihlbmRQb3MubGluZU51bWJlciAtIDEsIGVuZFBvcy5jb2x1bW4pXG4gICAgICAgIGNvbnN0IGluc3BlY3Rpb25PZmYgPSBtb2RlbC5nZXRPZmZzZXRBdChpbnNwZWN0aW9uUG9zKVxuXG4gICAgICAgIGlmIChjYW5jZWwuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGludHM6IFtdLFxuICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4ge30sXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGludCA9IGF3YWl0IHdvcmtlci5nZXRRdWlja0luZm9BdFBvc2l0aW9uKFwiZmlsZTovL1wiICsgbW9kZWwudXJpLnBhdGgsIGluc3BlY3Rpb25PZmYpXG4gICAgICAgIGlmICghaGludCB8fCAhaGludC5kaXNwbGF5UGFydHMpIGNvbnRpbnVlXG5cbiAgICAgICAgLy8gTWFrZSBhIG9uZS1saW5lclxuICAgICAgICBsZXQgdGV4dCA9IGhpbnQuZGlzcGxheVBhcnRzLm1hcChkID0+IGQudGV4dCkuam9pbihcIlwiKS5yZXBsYWNlKC9cXFxcbi9nLCBcIlwiKS5yZXBsYWNlKC8gIC9nLCBcIlwiKVxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAxMjApIHRleHQgPSB0ZXh0LnNsaWNlKDAsIDExOSkgKyBcIi4uLlwiXG5cbiAgICAgICAgY29uc3QgaW5sYXk6IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikubGFuZ3VhZ2VzLklubGF5SGludCA9IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAga2luZDogMCxcbiAgICAgICAgICBwb3NpdGlvbjogbmV3IHNhbmRib3gubW9uYWNvLlBvc2l0aW9uKGVuZFBvcy5saW5lTnVtYmVyLCBlbmRQb3MuY29sdW1uICsgMSksXG4gICAgICAgICAgbGFiZWw6IHRleHQsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0cy5wdXNoKGlubGF5KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGludHM6IHJlc3VsdHMsXG4gICAgICAgIGRpc3Bvc2U6ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0sXG4gIH1cbiAgcmV0dXJuIHByb3ZpZGVyXG59XG4iXX0=