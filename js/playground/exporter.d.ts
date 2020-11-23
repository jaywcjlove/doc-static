import { UI } from "./createUI";
declare type Sandbox = import("typescript-sandbox").Sandbox;
export declare const createExporter: (sandbox: Sandbox, monaco: typeof import("monaco-editor"), ui: UI) => {
    openProjectInStackBlitz: () => void;
    openProjectInCodeSandbox: () => void;
    reportIssue: (e: React.MouseEvent) => Promise<boolean>;
    copyAsMarkdownIssue: (e: React.MouseEvent) => Promise<boolean>;
    copyForChat: (e: React.MouseEvent) => boolean;
    copyForChatWithPreview: (e: React.MouseEvent) => boolean;
    openInTSAST: () => void;
    exportAsTweet: () => void;
};
export {};
