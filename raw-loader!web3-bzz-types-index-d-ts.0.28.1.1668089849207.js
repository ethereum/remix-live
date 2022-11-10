(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ 3487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n    This file is part of web3.js.\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.d.ts\n * @author Josh Stevens <joshstevens19@hotmail.co.uk>\n * @date 2018\n */\n\nexport class Bzz {\n    constructor();\n    constructor(provider: any);\n\n    readonly givenProvider: any;\n    static readonly givenProvider: any;\n    readonly currentProvider: any;\n    setProvider(provider: any): boolean;\n\n    upload(data: any): Promise<string>;\n\n    download(bzzHash: string, localPath?: string): Promise<any>;\n\n    pick: Pick;\n}\n\nexport interface Pick {\n    file: () => Promise<any>;\n    directory: () => Promise<any>;\n    data: () => Promise<any>;\n}\n");

/***/ })

}]);
//# sourceMappingURL=raw-loader!web3-bzz-types-index-d-ts.0.28.1.1668089849207.js.map
//# sourceMappingURL=raw-loader!web3-bzz-types-index-d-ts.0.28.1.1668089849207.js.map