(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ 3477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BigNumber, BigNumberish } from \"@ethersproject/bignumber\";\nimport { BytesLike, SignatureLike } from \"@ethersproject/bytes\";\nexport declare type AccessList = Array<{\n    address: string;\n    storageKeys: Array<string>;\n}>;\nexport declare type AccessListish = AccessList | Array<[string, Array<string>]> | Record<string, Array<string>>;\nexport declare enum TransactionTypes {\n    legacy = 0,\n    eip2930 = 1,\n    eip1559 = 2\n}\nexport declare type UnsignedTransaction = {\n    to?: string;\n    nonce?: number;\n    gasLimit?: BigNumberish;\n    gasPrice?: BigNumberish;\n    data?: BytesLike;\n    value?: BigNumberish;\n    chainId?: number;\n    type?: number | null;\n    accessList?: AccessListish;\n    maxPriorityFeePerGas?: BigNumberish;\n    maxFeePerGas?: BigNumberish;\n};\nexport interface Transaction {\n    hash?: string;\n    to?: string;\n    from?: string;\n    nonce: number;\n    gasLimit: BigNumber;\n    gasPrice?: BigNumber;\n    data: string;\n    value: BigNumber;\n    chainId: number;\n    r?: string;\n    s?: string;\n    v?: number;\n    type?: number | null;\n    accessList?: AccessList;\n    maxPriorityFeePerGas?: BigNumber;\n    maxFeePerGas?: BigNumber;\n}\nexport declare function computeAddress(key: BytesLike | string): string;\nexport declare function recoverAddress(digest: BytesLike, signature: SignatureLike): string;\nexport declare function accessListify(value: AccessListish): AccessList;\nexport declare function serialize(transaction: UnsignedTransaction, signature?: SignatureLike): string;\nexport declare function parse(rawTransaction: BytesLike): Transaction;\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-transactions-lib-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!-ethersproject-transactions-lib-index-d-ts.0.28.1.1668089849207.js.map