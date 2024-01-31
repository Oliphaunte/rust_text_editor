/* tslint:disable */
/* eslint-disable */
/**
*/
export class TextEditor {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} content
*/
  set_content(content: string): void;
/**
* @returns {string}
*/
  get_content(): string;
/**
* @param {number} start
* @param {number} end
*/
  apply_bold(start: number, end: number): void;
/**
* @param {number} start
* @param {number} end
*/
  apply_italic(start: number, end: number): void;
/**
* @param {number} start
* @param {number} end
*/
  apply_strikethrough(start: number, end: number): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_texteditor_free: (a: number) => void;
  readonly texteditor_new: () => number;
  readonly texteditor_set_content: (a: number, b: number, c: number) => void;
  readonly texteditor_get_content: (a: number, b: number) => void;
  readonly texteditor_apply_bold: (a: number, b: number, c: number) => void;
  readonly texteditor_apply_italic: (a: number, b: number, c: number) => void;
  readonly texteditor_apply_strikethrough: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
