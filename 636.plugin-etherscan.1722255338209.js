"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[636],{

/***/ 70636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity ^0.5.9;\nimport \"remix_tests.sol\";\nimport \"../contracts/SampleERC20.sol\";\n\ncontract SampleERC20Test {\n\n    SampleERC20 s;\n    function beforeAll () public {\n        s = new SampleERC20(\"TestToken\", \"TST\", 18, 1000);\n    }\n\n    function testTokenNameAndSymbol () public {\n        Assert.equal(s.name(), \"TestToken\", \"token name did not match\");\n        Assert.equal(s.symbol(), \"TST\", \"token symbol did not match\");\n    }\n}");

/***/ })

}]);
//# sourceMappingURL=636.plugin-etherscan.1722255338209.js.map