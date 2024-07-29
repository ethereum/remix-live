"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1207],{

/***/ 11207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// This script can be used to deploy the \"Storage\" contract using ethers.js library.\n// Please make sure to compile \"./contracts/1_Storage.sol\" file before running this script.\n// And use Right click -> \"Run\" from context menu of the file to run the script. Shortcut: Ctrl+Shift+S\n\nimport { deploy } from './ethers-lib'\n\n(async () => {\n  try {\n    const result = await deploy('HelloWorld', [])\n    console.log(`address: ${result.address}`)\n  } catch (e) {\n    console.log(e.message)\n  }\n})()");

/***/ })

}]);
//# sourceMappingURL=1207.plugin-etherscan.1722255338209.js.map