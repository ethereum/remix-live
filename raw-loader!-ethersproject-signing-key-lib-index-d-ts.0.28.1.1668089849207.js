(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 3474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BytesLike, Signature, SignatureLike } from \"@ethersproject/bytes\";\nexport declare class SigningKey {\n    readonly curve: string;\n    readonly privateKey: string;\n    readonly publicKey: string;\n    readonly compressedPublicKey: string;\n    readonly _isSigningKey: boolean;\n    constructor(privateKey: BytesLike);\n    _addPoint(other: BytesLike): string;\n    signDigest(digest: BytesLike): Signature;\n    computeSharedSecret(otherKey: BytesLike): string;\n    static isSigningKey(value: any): value is SigningKey;\n}\nexport declare function recoverPublicKey(digest: BytesLike, signature: SignatureLike): string;\nexport declare function computePublicKey(key: BytesLike, compressed?: boolean): string;\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-signing-key-lib-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!-ethersproject-signing-key-lib-index-d-ts.0.28.1.1668089849207.js.map