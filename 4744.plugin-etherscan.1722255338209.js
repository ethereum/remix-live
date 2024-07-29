"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4744],{

/***/ 54744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\nimport \"remix_tests.sol\";\nimport \"../contracts/MyToken.sol\";\n\ncontract MyTokenTest is MyToken {\n\n    function testTokenInitialValues() public {\n        Assert.equal(name(), \"MyToken\", \"token name did not match\");\n        Assert.equal(symbol(), \"MTK\", \"token symbol did not match\");\n        Assert.equal(decimals(), 18, \"token decimals did not match\");\n        Assert.equal(totalSupply(), 0, \"token supply should be zero\");\n    }\n}");

/***/ })

}]);
//# sourceMappingURL=4744.plugin-etherscan.1722255338209.js.map