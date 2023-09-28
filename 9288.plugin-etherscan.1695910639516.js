"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9288],{

/***/ 49288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/**\n * @param {string} apikey - etherscan api key\n * @param {string} contractAddress - Address of the contract to verify\n * @param {string} contractArguments - Parameters used in the contract constructor during the initial deployment. It should be the hex encoded value\n * @param {string} contractName - Name of the contract\n * @param {string} contractFile - File where the contract is located\n * @param {number | string} chainRef - Network chain id or API URL (optional)\n * @param {boolean} isProxyContract - true, if contract is a proxy contract (optional)\n * @param {string} expectedImplAddress - Implementation contract address, in case of proxy contract verification (optional)\n * @returns {{ guid, status, message, succeed }} verification result\n */\nexport const verify = async (apikey: string, contractAddress: string, contractArguments: string, contractName: string, contractFile: string, chainRef?: number | string, isProxyContract?: boolean, expectedImplAddress?: string) => {\n  const compilationResultParam = await remix.call('compilerArtefacts' as any, 'getCompilerAbstract', contractFile)\n  console.log('verifying.. ' + contractName)\n  // update apiKey and chainRef to verify contract on multiple networks\n  return await remix.call('etherscan' as any,  'verify', apikey, contractAddress, contractArguments, contractName, compilationResultParam, chainRef, isProxyContract, expectedImplAddress)\n}\n");

/***/ })

}]);
//# sourceMappingURL=9288.plugin-etherscan.1695910639516.js.map