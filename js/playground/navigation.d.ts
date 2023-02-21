import type { Sandbox } from "@typescript/sandbox";
import type { UI } from "./createUI";
/**
 * Uses the Playground gist proxy to generate a set of stories ^ which
 * correspond to files in the
 */
export declare const gistPoweredNavBar: (sandbox: Sandbox, ui: UI, showNav: () => void) => void;
/** Use the handbook TOC which is injected into the globals to create a sidebar  */
export declare const showNavForHandbook: (sandbox: Sandbox, escapeFunction: () => void) => void;
/**
 * Hides the nav and the close button, specifically only when we have
 * the handbook open and not when a gist is open
 */
export declare const hideNavForHandbook: (sandbox: Sandbox) => void;
