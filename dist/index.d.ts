/// <reference types="ts-toolbelt" />
export declare const search: import("Function/Curry").Curry<(query: string, list: string[]) => string[]>;
export declare const searchPreservingOrder: import("Function/Curry").Curry<(query: string, list: string[]) => string[]>;
export declare const vagueSearch: import("Function/Curry").Curry<(query: string, list: string[]) => string[]>;
export declare const vagueSearchPreservingOrder: import("Function/Curry").Curry<(query: string, list: string[]) => string[]>;
export declare const objectSearch: import("Function/Curry").Curry<(<T>(query: string, keys: string[], list: T[]) => T[])>;
export declare const objectSearchPreservingOrder: import("Function/Curry").Curry<(<T>(query: string, keys: string[], list: T[]) => T[])>;
export declare const vagueObjectSearch: import("Function/Curry").Curry<(<T>(query: string, keys: string[], list: T[]) => T[])>;
export declare const vagueObjectSearchPreservingOrder: import("Function/Curry").Curry<(<T>(query: string, keys: string[], list: T[]) => T[])>;
