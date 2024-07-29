"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3495],{

/***/ 53495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("name: Slither Analysis\non: [push]\n\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm install\n    - uses: crytic/slither-action@v0.2.0\n      with:\n        target: 'contracts'\n        slither-args: '--solc-remaps \"@openzeppelin/contracts=./node_modules/@openzeppelin/contracts hardhat=./node_modules/hardhat\"'\n        fail-on: 'low'\n        solc-version: '0.8.2'");

/***/ })

}]);
//# sourceMappingURL=3495.plugin-etherscan.1722255338209.js.map