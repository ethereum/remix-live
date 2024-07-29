"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6735],{

/***/ 56735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("import { prove } from './utils'\n\n// You must modify the input signals to include the data you're trying to generate a proof for.\nconst signals: {[name: string]: number | string} = {}\n\nconst main = async () => {\n  if (Object.keys(signals).length === 0) {\n    console.error(\"You must modify the input signals to include the data you're trying to generate a proof for.\")\n    return\n  }\n  const proofResponse = await prove(signals)\n  console.log('Proof:\\n', JSON.stringify(proofResponse.proof, null, 2))\n}\n\nmain()\n");

/***/ })

}]);
//# sourceMappingURL=6735.plugin-etherscan.1722255338209.js.map