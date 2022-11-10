(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 3463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ExternallyOwnedAccount } from \"@ethersproject/abstract-signer\";\nimport { BytesLike } from \"@ethersproject/bytes\";\nimport { Wordlist } from \"@ethersproject/wordlists\";\nexport declare const defaultPath = \"m/44'/60'/0'/0/0\";\nexport interface Mnemonic {\n    readonly phrase: string;\n    readonly path: string;\n    readonly locale: string;\n}\nexport declare class HDNode implements ExternallyOwnedAccount {\n    readonly privateKey: string;\n    readonly publicKey: string;\n    readonly fingerprint: string;\n    readonly parentFingerprint: string;\n    readonly address: string;\n    readonly mnemonic?: Mnemonic;\n    readonly path: string;\n    readonly chainCode: string;\n    readonly index: number;\n    readonly depth: number;\n    /**\n     *  This constructor should not be called directly.\n     *\n     *  Please use:\n     *   - fromMnemonic\n     *   - fromSeed\n     */\n    constructor(constructorGuard: any, privateKey: string, publicKey: string, parentFingerprint: string, chainCode: string, index: number, depth: number, mnemonicOrPath: Mnemonic | string);\n    get extendedKey(): string;\n    neuter(): HDNode;\n    private _derive;\n    derivePath(path: string): HDNode;\n    static _fromSeed(seed: BytesLike, mnemonic: Mnemonic): HDNode;\n    static fromMnemonic(mnemonic: string, password?: string, wordlist?: string | Wordlist): HDNode;\n    static fromSeed(seed: BytesLike): HDNode;\n    static fromExtendedKey(extendedKey: string): HDNode;\n}\nexport declare function mnemonicToSeed(mnemonic: string, password?: string): string;\nexport declare function mnemonicToEntropy(mnemonic: string, wordlist?: string | Wordlist): string;\nexport declare function entropyToMnemonic(entropy: BytesLike, wordlist?: string | Wordlist): string;\nexport declare function isValidMnemonic(mnemonic: string, wordlist?: Wordlist): boolean;\nexport declare function getAccountPath(index: number): string;\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-hdnode-lib-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!-ethersproject-hdnode-lib-index-d-ts.0.28.1.1668089849207.js.map