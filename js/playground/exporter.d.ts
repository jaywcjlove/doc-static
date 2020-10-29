import { UI } from "./createUI";
declare type Sandbox = import("typescript-sandbox").Sandbox;
export declare const createExporter: (sandbox: Sandbox, monaco: typeof import("monaco-editor"), ui: UI) => {
    openProjectInStackBlitz: () => void;
    openProjectInCodeSandbox: () => void;
    reportIssue: () => Promise<boolean>;
    copyAsMarkdownIssue: () => Promise<boolean>;
    copyForChat: () => boolean;
    copyForChatWithPreview: () => boolean;
    openInTSAST: () => void;
    exportAsTweet: () => void;
};
export {};
