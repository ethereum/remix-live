"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9628],{

/***/ 69628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\nimport \"remix_tests.sol\";\nimport \"../contracts/MyToken.sol\";\n\ncontract MyTokenTest {\n\n    MyToken s;\n    function beforeAll () public {\n        s = new MyToken();\n    }\n\n    function testTokenNameAndSymbol () public {\n        Assert.equal(s.name(), \"MyToken\", \"token name did not match\");\n        Assert.equal(s.symbol(), \"MTK\", \"token symbol did not match\");\n    }\n}");

/***/ })

}]);
//# sourceMappingURL=9628.plugin-etherscan.1695910639516.js.map