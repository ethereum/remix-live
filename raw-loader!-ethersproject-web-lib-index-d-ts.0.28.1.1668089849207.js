(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ 3480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export declare type ConnectionInfo = {\n    url: string;\n    headers?: {\n        [key: string]: string | number;\n    };\n    user?: string;\n    password?: string;\n    allowInsecureAuthentication?: boolean;\n    allowGzip?: boolean;\n    throttleLimit?: number;\n    throttleSlotInterval?: number;\n    throttleCallback?: (attempt: number, url: string) => Promise<boolean>;\n    timeout?: number;\n};\nexport interface OnceBlockable {\n    once(eventName: \"block\", handler: () => void): void;\n}\nexport interface OncePollable {\n    once(eventName: \"poll\", handler: () => void): void;\n}\nexport declare type PollOptions = {\n    timeout?: number;\n    floor?: number;\n    ceiling?: number;\n    interval?: number;\n    retryLimit?: number;\n    onceBlock?: OnceBlockable;\n    oncePoll?: OncePollable;\n};\nexport declare type FetchJsonResponse = {\n    statusCode: number;\n    headers: {\n        [header: string]: string;\n    };\n};\nexport declare function _fetchData<T = Uint8Array>(connection: string | ConnectionInfo, body?: Uint8Array, processFunc?: (value: Uint8Array, response: FetchJsonResponse) => T): Promise<T>;\nexport declare function fetchJson(connection: string | ConnectionInfo, json?: string, processFunc?: (value: any, response: FetchJsonResponse) => any): Promise<any>;\nexport declare function poll<T>(func: () => Promise<T>, options?: PollOptions): Promise<T>;\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-web-lib-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!-ethersproject-web-lib-index-d-ts.0.28.1.1668089849207.js.map