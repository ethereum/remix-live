(self["webpackChunk"] = self["webpackChunk"] || []).push([[8792],{

/***/ 2862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppContext = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var AppContext = /*#__PURE__*/_react["default"].createContext({
  apiKey: '',
  setAPIKey: function setAPIKey(value) {
    console.log('Set API Key from Context');
  },
  clientInstance: {},
  receipts: [],
  setReceipts: function setReceipts(receipts) {
    console.log('Calling Set Receipts');
  },
  contracts: [],
  setContracts: function setContracts(contracts) {
    console.log('Calling Set Contract Names');
  },
  themeType: 'dark',
  setThemeType: function setThemeType(themeType) {
    console.log('Calling Set Theme Type');
  },
  networkName: ''
});
exports.AppContext = AppContext;

/***/ }),

/***/ 46099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EtherscanPluginClient = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3368));
var _createClass2 = _interopRequireDefault(__webpack_require__(57270));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(51922));
var _inherits2 = _interopRequireDefault(__webpack_require__(70800));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(84919));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7539));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(3218));
var _plugin = __webpack_require__(75497);
var _pluginWebview = __webpack_require__(58519);
var _verify3 = __webpack_require__(62819);
var _utils = __webpack_require__(75604);
var _events = _interopRequireDefault(__webpack_require__(23100));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EtherscanPluginClient = /*#__PURE__*/function (_PluginClient) {
  (0, _inherits2["default"])(EtherscanPluginClient, _PluginClient);
  var _super = _createSuper(EtherscanPluginClient);
  function EtherscanPluginClient() {
    var _this;
    (0, _classCallCheck2["default"])(this, EtherscanPluginClient);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "internalEvents", void 0);
    _this.internalEvents = new _events["default"]();
    (0, _pluginWebview.createClient)((0, _assertThisInitialized2["default"])(_this));
    _this.onload();
    return _this;
  }
  (0, _createClass2["default"])(EtherscanPluginClient, [{
    key: "onActivation",
    value: function onActivation() {
      this.internalEvents.emit('etherscan_activated');
    }
  }, {
    key: "verify",
    value: function () {
      var _verify2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apiKey, contractAddress, contractArguments, contractName, compilationResultParam, chainRef, isProxyContract, expectedImplAddress) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _verify3.verify)(apiKey, contractAddress, contractArguments, contractName, compilationResultParam, chainRef, isProxyContract, expectedImplAddress, this, function (value) {}, function (value) {});
              case 2:
                result = _context.sent;
                return _context.abrupt("return", result);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function verify(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _verify2.apply(this, arguments);
      }
      return verify;
    }()
  }, {
    key: "receiptStatus",
    value: function () {
      var _receiptStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(receiptGuid, apiKey, isProxyContract) {
        var _yield$getNetworkName, network, networkId, etherscanApi, _receiptStatus2;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _utils.getNetworkName)(this);
              case 3:
                _yield$getNetworkName = _context2.sent;
                network = _yield$getNetworkName.network;
                networkId = _yield$getNetworkName.networkId;
                if (!(network === 'vm')) {
                  _context2.next = 8;
                  break;
                }
                throw new Error('Cannot check the receipt status in the selected network');
              case 8:
                etherscanApi = (0, _utils.getEtherScanApi)(networkId);
                if (!isProxyContract) {
                  _context2.next = 15;
                  break;
                }
                _context2.next = 12;
                return (0, _utils.getProxyContractReceiptStatus)(receiptGuid, apiKey, etherscanApi);
              case 12:
                _receiptStatus2 = _context2.sent;
                _context2.next = 18;
                break;
              case 15:
                _context2.next = 17;
                return (0, _utils.getReceiptStatus)(receiptGuid, apiKey, etherscanApi);
              case 17:
                _receiptStatus2 = _context2.sent;
              case 18:
                return _context2.abrupt("return", {
                  message: _receiptStatus2.result,
                  succeed: _receiptStatus2.status === '0' ? false : true
                });
              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", {
                  status: 'error',
                  message: _context2.t0.message,
                  succeed: false
                });
              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 21]]);
      }));
      function receiptStatus(_x9, _x10, _x11) {
        return _receiptStatus.apply(this, arguments);
      }
      return receiptStatus;
    }()
  }]);
  return EtherscanPluginClient;
}(_plugin.PluginClient);
exports.EtherscanPluginClient = EtherscanPluginClient;

/***/ }),

/***/ 24435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNewContractNames = exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(45616));
var _react = _interopRequireWildcard(__webpack_require__(4491));
var _EtherscanPluginClient = __webpack_require__(46099);
var _AppContext = __webpack_require__(2862);
var _routes = __webpack_require__(39630);
var _useLocalStorage5 = __webpack_require__(50090);
var _utils = __webpack_require__(75604);
__webpack_require__(98723);
var _jsxRuntime = __webpack_require__(95867);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var getNewContractNames = function getNewContractNames(compilationResult) {
  var compiledContracts = compilationResult.contracts;
  var result = [];
  for (var _i = 0, _Object$keys = Object.keys(compiledContracts); _i < _Object$keys.length; _i++) {
    var file = _Object$keys[_i];
    var newContractNames = Object.keys(compiledContracts[file]);
    result = [].concat((0, _toConsumableArray2["default"])(result), newContractNames);
  }
  return result;
};
exports.getNewContractNames = getNewContractNames;
var plugin = new _EtherscanPluginClient.EtherscanPluginClient();
var App = function App() {
  var _useLocalStorage = (0, _useLocalStorage5.useLocalStorage)('apiKey', ''),
    _useLocalStorage2 = (0, _slicedToArray2["default"])(_useLocalStorage, 2),
    apiKey = _useLocalStorage2[0],
    setAPIKey = _useLocalStorage2[1];
  var _useLocalStorage3 = (0, _useLocalStorage5.useLocalStorage)('receipts', []),
    _useLocalStorage4 = (0, _slicedToArray2["default"])(_useLocalStorage3, 2),
    receipts = _useLocalStorage4[0],
    setReceipts = _useLocalStorage4[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    contracts = _useState2[0],
    setContracts = _useState2[1];
  var _useState3 = (0, _react.useState)('dark'),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    themeType = _useState4[0],
    setThemeType = _useState4[1];
  var _useState5 = (0, _react.useState)('Loading...'),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    networkName = _useState6[0],
    setNetworkName = _useState6[1];
  var timer = (0, _react.useRef)(null);
  var contractsRef = (0, _react.useRef)(contracts);
  contractsRef.current = contracts;
  var setListeners = function setListeners() {
    plugin.on('solidity', 'compilationFinished', function (fileName, source, languageVersion, data) {
      var newContractsNames = getNewContractNames(data);
      var newContractsToSave = [].concat((0, _toConsumableArray2["default"])(contractsRef.current), (0, _toConsumableArray2["default"])(newContractsNames));
      var uniqueContracts = (0, _toConsumableArray2["default"])(new Set(newContractsToSave));
      setContracts(uniqueContracts);
    });
    plugin.on('blockchain', 'networkStatus', function (result) {
      setNetworkName("".concat(result.network.name, " ").concat(result.network.id !== '-' ? "(Chain id: ".concat(result.network.id, ")") : '(Not supported)'));
    });
    // @ts-ignore
    plugin.call('blockchain', 'getCurrentNetworkStatus').then(function (result) {
      return setNetworkName("".concat(result.network.name, " ").concat(result.network.id !== '-' ? "(Chain id: ".concat(result.network.id, ")") : '(Not supported)'));
    });
  };
  (0, _react.useEffect)(function () {
    plugin.onload(function () {
      setListeners();
    });
  }, []);
  (0, _react.useEffect)(function () {
    var receiptsNotVerified = receipts.filter(function (item) {
      return item.status === 'Pending in queue' || item.status === 'Max rate limit reached';
    });
    if (receiptsNotVerified.length > 0) {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
      timer.current = setInterval( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$getNetworkName, network, networkId, newReceipts, _iterator, _step, _loop;
        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _utils.getNetworkName)(plugin);
              case 2:
                _yield$getNetworkName = _context2.sent;
                network = _yield$getNetworkName.network;
                networkId = _yield$getNetworkName.networkId;
                if (plugin) {
                  _context2.next = 7;
                  break;
                }
                return _context2.abrupt("return");
              case 7:
                if (!(network === 'vm')) {
                  _context2.next = 9;
                  break;
                }
                return _context2.abrupt("return");
              case 9:
                newReceipts = receipts;
                _iterator = _createForOfIteratorHelper(receiptsNotVerified);
                _context2.prev = 11;
                _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop() {
                  var item, status;
                  return _regenerator["default"].wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          item = _step.value;
                          _context.next = 3;
                          return new Promise(function (r) {
                            return setTimeout(r, 500);
                          });
                        case 3:
                          // avoid api rate limit exceed.
                          status = void 0;
                          if (!item.isProxyContract) {
                            _context.next = 11;
                            break;
                          }
                          _context.next = 7;
                          return (0, _utils.getProxyContractReceiptStatus)(item.guid, apiKey, (0, _utils.getEtherScanApi)(networkId));
                        case 7:
                          status = _context.sent;
                          if (status.status === '1') {
                            status.message = status.result;
                            status.result = 'Successfully Updated';
                          }
                          _context.next = 14;
                          break;
                        case 11:
                          _context.next = 13;
                          return (0, _utils.getReceiptStatus)(item.guid, apiKey, (0, _utils.getEtherScanApi)(networkId));
                        case 13:
                          status = _context.sent;
                        case 14:
                          if (status.result === 'Pass - Verified' || status.result === 'Already Verified' || status.result === 'Successfully Updated') {
                            newReceipts = newReceipts.map(function (currentReceipt) {
                              if (currentReceipt.guid === item.guid) {
                                var res = Object.assign({}, currentReceipt, {
                                  status: status.result
                                });
                                if (currentReceipt.isProxyContract) res.message = status.message;
                                return res;
                              }
                              return currentReceipt;
                            });
                          }
                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                _iterator.s();
              case 14:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 18;
                  break;
                }
                return _context2.delegateYield(_loop(), "t0", 16);
              case 16:
                _context2.next = 14;
                break;
              case 18:
                _context2.next = 23;
                break;
              case 20:
                _context2.prev = 20;
                _context2.t1 = _context2["catch"](11);
                _iterator.e(_context2.t1);
              case 23:
                _context2.prev = 23;
                _iterator.f();
                return _context2.finish(23);
              case 26:
                receiptsNotVerified = newReceipts.filter(function (item) {
                  return item.status === 'Pending in queue' || item.status === 'Max rate limit reached';
                });
                if (timer.current && receiptsNotVerified.length === 0) {
                  clearInterval(timer.current);
                  timer.current = null;
                }
                setReceipts(newReceipts);
              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, null, [[11, 20, 23, 26]]);
      })), 10000);
    }
  }, [receipts]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppContext.AppContext.Provider, {
    value: {
      apiKey: apiKey,
      setAPIKey: setAPIKey,
      clientInstance: plugin,
      receipts: receipts,
      setReceipts: setReceipts,
      contracts: contracts,
      setContracts: setContracts,
      themeType: themeType,
      setThemeType: setThemeType,
      networkName: networkName
    },
    children: plugin && /*#__PURE__*/(0, _jsxRuntime.jsx)(_routes.DisplayRoutes, {})
  });
};
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 29745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HeaderWithSettings = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _reactRouterDom = __webpack_require__(86406);
var _helper = __webpack_require__(96612);
var _jsxRuntime = __webpack_require__(95867);
var HomeIcon = function HomeIcon(_ref) {
  var from = _ref.from;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.NavLink, {
    "data-id": "home",
    to: {
      pathname: '/'
    },
    className: function className(_ref2) {
      var isActive = _ref2.isActive;
      return isActive ? 'border border-secondary shadow-none btn p-1 m-0' : 'border-0 shadow-none btn p-1 m-0';
    },
    style: function style(_ref3) {
      var isActive = _ref3.isActive;
      return !isActive ? {
        width: '1.8rem',
        filter: 'contrast(0.5)'
      } : {
        width: '1.8rem'
      };
    },
    state: from,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
      tooltipText: "Home",
      tooltipId: "etherscan-nav-home",
      placement: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "fas fa-home"
      })
    })
  });
};
var ReceiptsIcon = function ReceiptsIcon(_ref4) {
  var from = _ref4.from;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.NavLink, {
    "data-id": "receipts",
    to: {
      pathname: '/receipts'
    },
    className: function className(_ref5) {
      var isActive = _ref5.isActive;
      return isActive ? 'border border-secondary shadow-none btn p-1 m-0' : 'border-0 shadow-none btn p-1 m-0';
    },
    style: function style(_ref6) {
      var isActive = _ref6.isActive;
      return !isActive ? {
        width: '1.8rem',
        filter: 'contrast(0.5)'
      } : {
        width: '1.8rem'
      };
    },
    state: from,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
      tooltipText: "Receipts",
      tooltipId: "etherscan-nav-receipts",
      placement: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "fas fa-receipt"
      })
    })
  });
};
var SettingsIcon = function SettingsIcon(_ref7) {
  var from = _ref7.from;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.NavLink, {
    "data-id": "settings",
    to: {
      pathname: '/settings'
    },
    className: function className(_ref8) {
      var isActive = _ref8.isActive;
      return isActive ? 'border border-secondary shadow-none btn p-1 m-0' : 'border-0 shadow-none btn p-1 m-0';
    },
    style: function style(_ref9) {
      var isActive = _ref9.isActive;
      return !isActive ? {
        width: '1.8rem',
        filter: 'contrast(0.5)'
      } : {
        width: '1.8rem'
      };
    },
    state: from,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
      tooltipText: "Settings",
      tooltipId: "etherscan-nav-settings",
      placement: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: "fas fa-cog"
      })
    })
  });
};
var HeaderWithSettings = function HeaderWithSettings(_ref10) {
  var _ref10$title = _ref10.title,
    title = _ref10$title === void 0 ? '' : _ref10$title,
    from = _ref10.from;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex justify-content-between",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
      className: "d-inline",
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "nav",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(HomeIcon, {
        from: from
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ReceiptsIcon, {
        from: from
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SettingsIcon, {
        from: from
      })]
    })]
  });
};
exports.HeaderWithSettings = HeaderWithSettings;

/***/ }),

/***/ 73981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SubmitButton = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _helper = __webpack_require__(96612);
var _jsxRuntime = __webpack_require__(95867);
var SubmitButton = function SubmitButton(_ref) {
  var text = _ref.text,
    dataId = _ref.dataId,
    _ref$isSubmitting = _ref.isSubmitting,
    isSubmitting = _ref$isSubmitting === void 0 ? false : _ref$isSubmitting,
    _ref$disable = _ref.disable,
    disable = _ref$disable === void 0 ? true : _ref$disable;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      "data-id": dataId,
      type: "submit",
      className: "btn btn-primary btn-block p-1 text-decoration-none",
      disabled: disable,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
        tooltipText: disable ? 'Fill in the valid value(s) and select a supported network' : 'Click to proceed',
        tooltipId: 'etherscan-submit-button-' + dataId,
        tooltipTextClasses: "border bg-light text-dark p-1 pr-3",
        placement: "bottom",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [!isSubmitting && text, isSubmitting && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "spinner-border spinner-border-sm mr-1",
              role: "status",
              "aria-hidden": "true"
            }), "Verifying... Please wait"]
          })]
        })
      })
    })
  });
};
exports.SubmitButton = SubmitButton;

/***/ }),

/***/ 67339:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "HeaderWithSettings", ({
  enumerable: true,
  get: function get() {
    return _HeaderWithSettings.HeaderWithSettings;
  }
}));
Object.defineProperty(exports, "SubmitButton", ({
  enumerable: true,
  get: function get() {
    return _SubmitButton.SubmitButton;
  }
}));
var _HeaderWithSettings = __webpack_require__(29745);
var _SubmitButton = __webpack_require__(73981);

/***/ }),

/***/ 50090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLocalStorage = useLocalStorage;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _react = __webpack_require__(4491);
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  var _useState = (0, _react.useState)(function () {
      try {
        // Get from local storage by key
        var item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.error(error);
        return initialValue;
      }
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  var setValue = function setValue(value) {
    try {
      // Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };
  return [storedValue, setValue];
}

/***/ }),

/***/ 53957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DefaultLayout = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _components = __webpack_require__(67339);
var _jsxRuntime = __webpack_require__(95867);
var DefaultLayout = function DefaultLayout(_ref) {
  var children = _ref.children,
    from = _ref.from,
    title = _ref.title;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.HeaderWithSettings, {
      from: from,
      title: title
    }), children]
  });
};
exports.DefaultLayout = DefaultLayout;

/***/ }),

/***/ 41786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DefaultLayout", ({
  enumerable: true,
  get: function get() {
    return _Default.DefaultLayout;
  }
}));
var _Default = __webpack_require__(53957);

/***/ }),

/***/ 39630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DisplayRoutes = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _reactRouterDom = __webpack_require__(86406);
var _views = __webpack_require__(30523);
var _layouts = __webpack_require__(41786);
var _jsxRuntime = __webpack_require__(95867);
var DisplayRoutes = function DisplayRoutes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.HashRouter, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_layouts.DefaultLayout, {
          from: "/",
          title: "Verify Smart Contracts",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_views.HomeView, {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/error",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_views.ErrorView, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/receipts",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_layouts.DefaultLayout, {
          from: "/receipts",
          title: "Check Receipt GUID Status",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_views.ReceiptsView, {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/settings",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_layouts.DefaultLayout, {
          from: "/settings",
          title: "Set Explorer API Key",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_views.CaptureKeyView, {})
        })
      })]
    })
  });
};
exports.DisplayRoutes = DisplayRoutes;

/***/ }),

/***/ 75604:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _utilities = __webpack_require__(53456);
Object.keys(_utilities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utilities[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utilities[key];
    }
  });
});

/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.scanAPIurls = void 0;
var scanAPIurls = {
  // all mainnet
  1: 'https://api.etherscan.io/api',
  56: 'https://api.bscscan.com/api',
  137: 'https://api.polygonscan.com/api',
  250: 'https://api.ftmscan.com/api',
  42161: 'https://api.arbiscan.io/api',
  43114: 'https://api.snowtrace.io/api',
  1285: 'https://api-moonriver.moonscan.io/api',
  1284: 'https://api-moonbeam.moonscan.io/api',
  25: 'https://api.cronoscan.com/api',
  199: 'https://api.bttcscan.com/api',
  10: 'https://api-optimistic.etherscan.io/api',
  42220: 'https://api.celoscan.io/api',
  288: 'https://api.bobascan.com/api',
  100: 'https://api.gnosisscan.io/api',
  1101: 'https://api-zkevm.polygonscan.com/api',
  59144: 'https://api.lineascan.build/api',
  8453: 'https://api.basescan.org/api',
  534352: 'https://api.scrollscan.com/api',
  1116: 'https://openapi.coredao.org/api',
  // all testnet
  17000: 'https://api-holesky.etherscan.io/api',
  11155111: 'https://api-sepolia.etherscan.io/api',
  97: 'https://api-testnet.bscscan.com/api',
  80001: 'https://api-testnet.polygonscan.com/api',
  80002: 'https://api-amoy.polygonscan.com/api',
  4002: 'https://api-testnet.ftmscan.com/api',
  421611: 'https://api-testnet.arbiscan.io/api',
  42170: 'https://api-nova.arbiscan.io/api',
  43113: 'https://api-testnet.snowtrace.io/api',
  1287: 'https://api-moonbase.moonscan.io/api',
  338: 'https://api-testnet.cronoscan.com/api',
  1028: 'https://api-testnet.bttcscan.com/api',
  420: 'https://api-goerli-optimistic.etherscan.io/api',
  44787: 'https://api-alfajores.celoscan.io/api',
  2888: 'https://api-testnet.bobascan.com/api',
  84531: 'https://api-goerli.basescan.org/api',
  84532: "https://api-sepolia.basescan.org/api",
  1442: 'https://api-testnet-zkevm.polygonscan.com/api',
  2442: 'https://api-cardona-zkevm.polygonscan.com/api',
  59140: 'https://api-testnet.lineascan.build/api',
  534351: 'https://api-sepolia.scrollscan.com/api',
  1115: 'https://api.test.btcs.network/api'
};
exports.scanAPIurls = scanAPIurls;

/***/ }),

/***/ 53456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getReceiptStatus = exports.getProxyContractReceiptStatus = exports.getNetworkName = exports.getEtherScanApi = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _axios = _interopRequireDefault(__webpack_require__(47764));
var _networks = __webpack_require__(5189);
/*
  status: 0=Error, 1=Pass
  message: OK, NOTOK
  result: explanation
*/

var getEtherScanApi = function getEtherScanApi(networkId) {
  if (!(networkId in _networks.scanAPIurls)) {
    throw new Error("no known network to verify against");
  }
  var apiUrl = _networks.scanAPIurls[networkId];
  return apiUrl;
};
exports.getEtherScanApi = getEtherScanApi;
var getNetworkName = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client) {
    var network;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.call("network", "detectNetwork");
          case 2:
            network = _context.sent;
            if (network) {
              _context.next = 5;
              break;
            }
            throw new Error("no known network to verify against");
          case 5:
            return _context.abrupt("return", {
              network: network.name.toLowerCase(),
              networkId: network.id
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getNetworkName(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getNetworkName = getNetworkName;
var getReceiptStatus = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(receiptGuid, apiKey, etherscanApi) {
    var params, response, _response$data, result, message, status;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = "guid=".concat(receiptGuid, "&module=contract&action=checkverifystatus&apiKey=").concat(apiKey);
            _context2.prev = 1;
            _context2.next = 4;
            return _axios["default"].get("".concat(etherscanApi, "?").concat(params));
          case 4:
            response = _context2.sent;
            _response$data = response.data, result = _response$data.result, message = _response$data.message, status = _response$data.status;
            return _context2.abrupt("return", {
              result: result,
              message: message,
              status: status
            });
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return function getReceiptStatus(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getReceiptStatus = getReceiptStatus;
var getProxyContractReceiptStatus = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(receiptGuid, apiKey, etherscanApi) {
    var params, response, _response$data2, result, message, status;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = "guid=".concat(receiptGuid, "&module=contract&action=checkproxyverification&apiKey=").concat(apiKey);
            _context3.prev = 1;
            _context3.next = 4;
            return _axios["default"].get("".concat(etherscanApi, "?").concat(params));
          case 4:
            response = _context3.sent;
            _response$data2 = response.data, result = _response$data2.result, message = _response$data2.message, status = _response$data2.status;
            return _context3.abrupt("return", {
              result: result,
              message: message,
              status: status
            });
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);
          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return function getProxyContractReceiptStatus(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getProxyContractReceiptStatus = getProxyContractReceiptStatus;

/***/ }),

/***/ 62819:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.verify = exports.getContractMetadata = exports.getContractFileName = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _utils = __webpack_require__(75604);
var _axios = _interopRequireDefault(__webpack_require__(47764));
var resetAfter10Seconds = function resetAfter10Seconds(client, setResults) {
  setTimeout(function () {
    client.emit("statusChanged", {
      key: "none"
    });
    setResults("");
  }, 10000);
};
var verify = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apiKeyParam, contractAddress, contractArgumentsParam, contractName, compilationResultParam, chainRef, isProxyContract, expectedImplAddress, client, onVerifiedContract, setResults) {
    var networkChainId, etherscanApi, _yield$getNetworkName, network, networkId, contractMetadata, contractMetadataParsed, fileName, jsonInput, data, body, response, _yield$response$data, message, result, status, receiptStatus, returnValue, _returnValue;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!chainRef) {
              _context.next = 4;
              break;
            }
            if (typeof chainRef === 'number') {
              networkChainId = chainRef;
              etherscanApi = (0, _utils.getEtherScanApi)(networkChainId);
            } else if (typeof chainRef === 'string') etherscanApi = chainRef;
            _context.next = 15;
            break;
          case 4:
            _context.next = 6;
            return (0, _utils.getNetworkName)(client);
          case 6:
            _yield$getNetworkName = _context.sent;
            network = _yield$getNetworkName.network;
            networkId = _yield$getNetworkName.networkId;
            if (!(network === "vm")) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", {
              succeed: false,
              message: "Cannot verify in the selected network"
            });
          case 13:
            networkChainId = networkId;
            etherscanApi = (0, _utils.getEtherScanApi)(networkChainId);
          case 15:
            _context.prev = 15;
            contractMetadata = getContractMetadata(
            // cast from the remix-plugin interface to the solidity one. Should be fixed when remix-plugin move to the remix-project repository
            compilationResultParam.data, contractName);
            if (contractMetadata) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", {
              succeed: false,
              message: "Please recompile contract"
            });
          case 19:
            contractMetadataParsed = JSON.parse(contractMetadata);
            fileName = getContractFileName(
            // cast from the remix-plugin interface to the solidity one. Should be fixed when remix-plugin move to the remix-project repository
            compilationResultParam.data, contractName);
            jsonInput = {
              language: 'Solidity',
              sources: compilationResultParam.source.sources,
              settings: {
                optimizer: {
                  enabled: contractMetadataParsed.settings.optimizer.enabled,
                  runs: contractMetadataParsed.settings.optimizer.runs
                }
              }
            };
            data = {
              apikey: apiKeyParam,
              // A valid API-Key is required
              module: "contract",
              // Do not change
              action: "verifysourcecode",
              // Do not change
              codeformat: "solidity-standard-json-input",
              sourceCode: JSON.stringify(jsonInput),
              contractname: fileName + ':' + contractName,
              compilerversion: "v".concat(contractMetadataParsed.compiler.version),
              // see http://etherscan.io/solcversions for list of support versions
              constructorArguements: contractArgumentsParam ? contractArgumentsParam.replace('0x', '') : '' // if applicable
            };

            if (isProxyContract) {
              data.action = "verifyproxycontract";
              data.expectedimplementation = expectedImplAddress;
              data.address = contractAddress;
            } else {
              data.contractaddress = contractAddress;
            }
            body = new FormData();
            Object.keys(data).forEach(function (key) {
              return body.append(key, data[key]);
            });
            client.emit("statusChanged", {
              key: "loading",
              type: "info",
              title: "Verifying ..."
            });
            _context.next = 29;
            return _axios["default"].post(etherscanApi, body);
          case 29:
            response = _context.sent;
            _context.next = 32;
            return response.data;
          case 32:
            _yield$response$data = _context.sent;
            message = _yield$response$data.message;
            result = _yield$response$data.result;
            status = _yield$response$data.status;
            if (!(message === "OK" && status === "1")) {
              _context.next = 53;
              break;
            }
            resetAfter10Seconds(client, setResults);
            if (!isProxyContract) {
              _context.next = 45;
              break;
            }
            _context.next = 41;
            return (0, _utils.getProxyContractReceiptStatus)(result, apiKeyParam, etherscanApi);
          case 41:
            receiptStatus = _context.sent;
            if (receiptStatus.status === '1') {
              receiptStatus.message = receiptStatus.result;
              receiptStatus.result = 'Successfully Updated';
            }
            _context.next = 48;
            break;
          case 45:
            _context.next = 47;
            return (0, _utils.getReceiptStatus)(result, apiKeyParam, etherscanApi);
          case 47:
            receiptStatus = _context.sent;
          case 48:
            returnValue = {
              guid: result,
              status: receiptStatus.result,
              message: "Verification request submitted successfully. Use this receipt GUID ".concat(result, " to track the status of your submission"),
              succeed: true,
              isProxyContract: isProxyContract
            };
            onVerifiedContract(returnValue);
            return _context.abrupt("return", returnValue);
          case 53:
            if (!(message === "NOTOK")) {
              _context.next = 58;
              break;
            }
            client.emit("statusChanged", {
              key: "failed",
              type: "error",
              title: result
            });
            _returnValue = {
              message: result,
              succeed: false,
              isProxyContract: isProxyContract
            };
            resetAfter10Seconds(client, setResults);
            return _context.abrupt("return", _returnValue);
          case 58:
            return _context.abrupt("return", {
              message: 'unknown reason ' + result,
              succeed: false
            });
          case 61:
            _context.prev = 61;
            _context.t0 = _context["catch"](15);
            console.error(_context.t0);
            setResults("Something wrong happened, try again");
            return _context.abrupt("return", {
              message: _context.t0.message,
              succeed: false
            });
          case 66:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[15, 61]]);
  }));
  return function verify(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11) {
    return _ref.apply(this, arguments);
  };
}();
exports.verify = verify;
var getContractFileName = function getContractFileName(compilationResult, contractName) {
  var compiledContracts = compilationResult.contracts;
  var fileName = "";
  for (var _i = 0, _Object$keys = Object.keys(compiledContracts); _i < _Object$keys.length; _i++) {
    var file = _Object$keys[_i];
    for (var _i2 = 0, _Object$keys2 = Object.keys(compiledContracts[file]); _i2 < _Object$keys2.length; _i2++) {
      var contract = _Object$keys2[_i2];
      if (contract === contractName) {
        fileName = file;
        break;
      }
    }
  }
  return fileName;
};
exports.getContractFileName = getContractFileName;
var getContractMetadata = function getContractMetadata(compilationResult, contractName) {
  var compiledContracts = compilationResult.contracts;
  var contractMetadata = "";
  for (var _i3 = 0, _Object$keys3 = Object.keys(compiledContracts); _i3 < _Object$keys3.length; _i3++) {
    var file = _Object$keys3[_i3];
    for (var _i4 = 0, _Object$keys4 = Object.keys(compiledContracts[file]); _i4 < _Object$keys4.length; _i4++) {
      var contract = _Object$keys4[_i4];
      if (contract === contractName) {
        contractMetadata = compiledContracts[file][contract].metadata;
        if (contractMetadata) {
          break;
        }
      }
    }
  }
  return contractMetadata;
};
exports.getContractMetadata = getContractMetadata;

/***/ }),

/***/ 83293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CaptureKeyView = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _react = _interopRequireWildcard(__webpack_require__(4491));
var _formik = __webpack_require__(15587);
var _reactRouterDom = __webpack_require__(86406);
var _AppContext = __webpack_require__(2862);
var _components = __webpack_require__(67339);
var _jsxRuntime = __webpack_require__(95867);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CaptureKeyView = function CaptureKeyView() {
  var location = (0, _reactRouterDom.useLocation)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    msg = _useState2[0],
    setMsg = _useState2[1];
  var context = _react["default"].useContext(_AppContext.AppContext);
  (0, _react.useEffect)(function () {
    if (!context.apiKey) setMsg('Please provide a 34 or 32 character API key to continue');
  }, [context.apiKey]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, {
      initialValues: {
        apiKey: context.apiKey
      },
      validate: function validate(values) {
        var errors = {};
        if (!values.apiKey) {
          errors.apiKey = 'Required';
        } else if (values.apiKey.length !== 34 && values.apiKey.length !== 32) {
          errors.apiKey = 'API key should be 34 or 32 characters long';
        }
        return errors;
      },
      onSubmit: function onSubmit(values) {
        var apiKey = values.apiKey;
        if (apiKey.length === 34 || apiKey.length === 32) {
          context.setAPIKey(values.apiKey);
          navigate(location && location.state ? location.state : '/');
        }
      },
      children: function children(_ref) {
        var errors = _ref.errors,
          touched = _ref.touched,
          handleSubmit = _ref.handleSubmit;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-group mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "apikey",
              children: "API Key"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
              className: errors.apiKey && touched.apiKey ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm',
              type: "password",
              name: "apiKey",
              placeholder: "e.g. GM1T20XY6JGSAPWKDCYZ7B2FJXKTJRFVGZ"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.ErrorMessage, {
              className: "invalid-feedback",
              name: "apiKey",
              component: "div"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SubmitButton, {
              text: "Save",
              dataId: "save-api-key",
              disable: errors && errors.apiKey ? true : false
            })
          })]
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-id": "api-key-result",
      className: "text-primary mt-4 text-center",
      style: {
        fontSize: '0.8em'
      },
      dangerouslySetInnerHTML: {
        __html: msg
      }
    })]
  });
};
exports.CaptureKeyView = CaptureKeyView;

/***/ }),

/***/ 46792:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ErrorView = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _jsxRuntime = __webpack_require__(95867);
var ErrorView = function ErrorView() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex w-100 flex-column align-items-center",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      className: "pb-4",
      width: "250",
      src: "https://res.cloudinary.com/key-solutions/image/upload/v1580400635/solid/error-png.png",
      alt: "Error page"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
      children: "Sorry, something unexpected happened."
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("h5", {
      children: ["Please raise an issue:", ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "text-danger",
        href: "https://github.com/ethereum/remix-project/issues",
        children: "Here"
      })]
    })]
  });
};
exports.ErrorView = ErrorView;

/***/ }),

/***/ 83135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HomeView = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(45616));
var _react = _interopRequireDefault(__webpack_require__(4491));
var _reactRouterDom = __webpack_require__(86406);
var _AppContext = __webpack_require__(2862);
var _VerifyView = __webpack_require__(87745);
var _jsxRuntime = __webpack_require__(95867);
var HomeView = function HomeView() {
  var context = _react["default"].useContext(_AppContext.AppContext);
  return !context.apiKey ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
    to: {
      pathname: '/settings'
    }
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VerifyView.VerifyView, {
    contracts: context.contracts,
    client: context.clientInstance,
    apiKey: context.apiKey,
    onVerifiedContract: function onVerifiedContract(receipt) {
      var newReceipts = [].concat((0, _toConsumableArray2["default"])(context.receipts), [receipt]);
      context.setReceipts(newReceipts);
    },
    networkName: context.networkName
  });
};
exports.HomeView = HomeView;

/***/ }),

/***/ 84545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ReceiptsView = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _react = _interopRequireWildcard(__webpack_require__(4491));
var _formik = __webpack_require__(15587);
var _utils = __webpack_require__(75604);
var _AppContext = __webpack_require__(2862);
var _components = __webpack_require__(67339);
var _reactRouterDom = __webpack_require__(86406);
var _reactBootstrap = __webpack_require__(25229);
var _helper = __webpack_require__(96612);
var _jsxRuntime = __webpack_require__(95867);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ReceiptsView = function ReceiptsView() {
  var _useState = (0, _react.useState)({
      succeed: false,
      message: ''
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    results = _useState2[0],
    setResults = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isProxyContractReceipt = _useState4[0],
    setIsProxyContractReceipt = _useState4[1];
  var context = _react["default"].useContext(_AppContext.AppContext);
  var onGetReceiptStatus = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(values, clientInstance, apiKey) {
      var _yield$getNetworkName, network, networkId, etherscanApi, result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _utils.getNetworkName)(clientInstance);
            case 3:
              _yield$getNetworkName = _context.sent;
              network = _yield$getNetworkName.network;
              networkId = _yield$getNetworkName.networkId;
              if (!(network === 'vm')) {
                _context.next = 9;
                break;
              }
              setResults({
                succeed: false,
                message: 'Cannot verify in the selected network'
              });
              return _context.abrupt("return");
            case 9:
              etherscanApi = (0, _utils.getEtherScanApi)(networkId);
              if (!isProxyContractReceipt) {
                _context.next = 17;
                break;
              }
              _context.next = 13;
              return (0, _utils.getProxyContractReceiptStatus)(values.receiptGuid, apiKey, etherscanApi);
            case 13:
              result = _context.sent;
              if (result.status === '1') {
                result.message = result.result;
                result.result = 'Successfully Updated';
              }
              _context.next = 20;
              break;
            case 17:
              _context.next = 19;
              return (0, _utils.getReceiptStatus)(values.receiptGuid, apiKey, etherscanApi);
            case 19:
              result = _context.sent;
            case 20:
              setResults({
                succeed: result.status === '1' ? true : false,
                message: result.result || (result.status === '0' ? 'Verification failed' : result.message)
              });
              _context.next = 26;
              break;
            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              setResults({
                succeed: false,
                message: _context.t0.message
              });
            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
    }));
    return function onGetReceiptStatus(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  return !context.apiKey ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
    to: {
      pathname: '/settings'
    }
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, {
      initialValues: {
        receiptGuid: ''
      },
      validate: function validate(values) {
        var errors = {};
        if (!values.receiptGuid) {
          errors.receiptGuid = 'Required';
        }
        return errors;
      },
      onSubmit: function onSubmit(values) {
        return onGetReceiptStatus(values, context.clientInstance, context.apiKey);
      },
      children: function children(_ref2) {
        var errors = _ref2.errors,
          touched = _ref2.touched,
          handleSubmit = _ref2.handleSubmit,
          handleChange = _ref2.handleChange;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-group mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "receiptGuid",
              children: "Receipt GUID"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
              className: errors.receiptGuid && touched.receiptGuid ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm',
              type: "text",
              name: "receiptGuid"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.ErrorMessage, {
              className: "invalid-feedback",
              name: "receiptGuid",
              component: "div"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "d-flex mb-2 custom-control custom-checkbox",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
              className: "custom-control-input",
              type: "checkbox",
              name: "isProxyReceipt",
              id: "isProxyReceipt",
              onChange: /*#__PURE__*/function () {
                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          handleChange(e);
                          if (e.target.checked) setIsProxyContractReceipt(true);else setIsProxyContractReceipt(false);
                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                return function (_x4) {
                  return _ref3.apply(this, arguments);
                };
              }()
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "form-check-label custom-control-label",
              htmlFor: "isProxyReceipt",
              children: "It's a proxy contract GUID"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SubmitButton, {
            dataId: null,
            text: "Check",
            disable: !touched.receiptGuid || touched.receiptGuid && errors.receiptGuid ? true : false
          })]
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: results['succeed'] ? 'text-success mt-3 text-center' : 'text-danger mt-3 text-center',
      dangerouslySetInnerHTML: {
        __html: results.message ? results.message : ''
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ReceiptsTable, {
      receipts: context.receipts
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
      tooltipText: "Clear the list of receipts",
      tooltipId: "etherscan-clear-receipts",
      placement: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Button, {
        className: "btn-sm",
        onClick: function onClick() {
          context.setReceipts([]);
        },
        children: "Clear"
      })
    })]
  });
};
exports.ReceiptsView = ReceiptsView;
var ReceiptsTable = function ReceiptsTable(_ref4) {
  var receipts = _ref4.receipts;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "table-responsive",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
      children: "Receipts"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
      className: "table h6 table-sm",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
            scope: "col",
            children: "Status"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
            scope: "col",
            children: "GUID"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
        children: receipts && receipts.length > 0 && receipts.map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
              className: item.status === 'Pass - Verified' || item.status === 'Successfully Updated' ? 'text-success' : item.status === 'Pending in queue' ? 'text-warning' : item.status === 'Already Verified' ? 'text-info' : 'text-secondary',
              children: [item.status, item.status === 'Successfully Updated' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
                placement: 'bottom',
                tooltipClasses: "text-wrap",
                tooltipId: "etherscan-receipt-proxy-status",
                tooltipText: item.message,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  style: {
                    fontSize: 'small'
                  },
                  className: 'ml-1 fal fa-info-circle align-self-center',
                  "aria-hidden": "true"
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              children: item.guid
            })]
          }, item.guid);
        })
      })]
    })]
  });
};

/***/ }),

/***/ 87745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VerifyView = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _react = _interopRequireWildcard(__webpack_require__(4491));
var _web = __webpack_require__(63338);
var _helper = __webpack_require__(96612);
var _formik = __webpack_require__(15587);
var _components = __webpack_require__(67339);
var _verify = __webpack_require__(62819);
var _remixWsTemplates = __webpack_require__(81511);
var _jsxRuntime = __webpack_require__(95867);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var VerifyView = function VerifyView(_ref) {
  var apiKey = _ref.apiKey,
    client = _ref.client,
    contracts = _ref.contracts,
    onVerifiedContract = _ref.onVerifiedContract,
    networkName = _ref.networkName;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    results = _useState2[0],
    setResults = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    selectedContract = _useState4[0],
    setSelectedContract = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    showConstructorArgs = _useState6[0],
    setShowConstructorArgs = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isProxyContract = _useState8[0],
    setIsProxyContract = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    constructorInputs = _useState10[0],
    setConstructorInputs = _useState10[1];
  var verificationResult = (0, _react.useRef)({});
  (0, _react.useEffect)(function () {
    if (contracts.includes(selectedContract)) updateConsFields(selectedContract);
  }, [contracts]);
  var updateConsFields = function updateConsFields(contractName) {
    client.call('compilerArtefacts', 'getArtefactsByContractName', contractName).then(function (result) {
      var artefact = result.artefact;
      if (artefact && artefact.abi && artefact.abi[0] && artefact.abi[0].type && artefact.abi[0].type === 'constructor' && artefact.abi[0].inputs.length > 0) {
        setConstructorInputs(artefact.abi[0].inputs);
        setShowConstructorArgs(true);
      } else {
        setConstructorInputs([]);
        setShowConstructorArgs(false);
      }
    });
  };
  var onVerifyContract = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(values) {
      var compilationResult, constructorValues, key, web3, constructorTypes, contractArguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.call('solidity', 'getCompilationResult');
            case 2:
              compilationResult = _context.sent;
              if (compilationResult) {
                _context.next = 5;
                break;
              }
              throw new Error('no compilation result available');
            case 5:
              constructorValues = [];
              for (key in values) {
                if (key.startsWith('contractArgValue')) constructorValues.push(values[key]);
              }
              web3 = new _web.Web3();
              constructorTypes = constructorInputs.map(function (e) {
                return e.type;
              });
              contractArguments = web3.eth.abi.encodeParameters(constructorTypes, constructorValues);
              contractArguments = contractArguments.replace('0x', '');
              _context.next = 13;
              return (0, _verify.verify)(apiKey, values.contractAddress, contractArguments, values.contractName, compilationResult, null, isProxyContract, values.expectedImplAddress, client, onVerifiedContract, setResults);
            case 13:
              verificationResult.current = _context.sent;
              setResults(verificationResult.current['message']);
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onVerifyContract(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, {
      initialValues: {
        contractName: '',
        contractAddress: ''
      },
      validate: function validate(values) {
        var errors = {};
        if (!values.contractName) {
          errors.contractName = 'Required';
        }
        if (!values.contractAddress) {
          errors.contractAddress = 'Required';
        }
        if (values.contractAddress.trim() === '' || !values.contractAddress.startsWith('0x') || values.contractAddress.length !== 42) {
          errors.contractAddress = 'Please enter a valid contract address';
        }
        return errors;
      },
      onSubmit: function onSubmit(values) {
        return onVerifyContract(values);
      },
      children: function children(_ref3) {
        var errors = _ref3.errors,
          touched = _ref3.touched,
          handleSubmit = _ref3.handleSubmit,
          handleChange = _ref3.handleChange,
          isSubmitting = _ref3.isSubmitting;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "network",
              children: "Selected Network"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
              tooltipText: "Network is fetched from 'Deploy and Run Transactions' plugin's ENVIRONMENT field",
              tooltipId: "etherscan-impl-address2",
              placement: "bottom",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                className: "form-control",
                type: "text",
                name: "network",
                value: networkName,
                disabled: true
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "contractName",
              children: "Contract Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_formik.Field, {
              as: "select",
              className: errors.contractName && touched.contractName && contracts.length ? 'form-control is-invalid' : 'form-control',
              name: "contractName",
              onChange: /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          handleChange(e);
                          setSelectedContract(e.target.value);
                          updateConsFields(e.target.value);
                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }(),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                disabled: true,
                value: "",
                children: contracts.length ? 'Select a contract' : "--- No compiled contracts ---"
              }), contracts.map(function (item) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                  value: item,
                  children: item
                }, item);
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.ErrorMessage, {
              className: "invalid-feedback",
              name: "contractName",
              component: "div"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: showConstructorArgs ? 'form-group d-block' : 'form-group d-none',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              children: "Constructor Arguments"
            }), constructorInputs.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "d-flex",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                  className: "form-control m-1",
                  type: "text",
                  name: "contractArgName".concat(index),
                  value: item.name,
                  disabled: true
                }, "contractArgName".concat(index)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
                  tooltipText: "value of ".concat(item.name),
                  tooltipId: "etherscan-constructor-value".concat(index),
                  placement: "top",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                    className: "form-control m-1",
                    type: "text",
                    name: "contractArgValue".concat(index),
                    placeholder: item.type
                  }, "contractArgValue".concat(index))
                })]
              });
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "contractAddress",
              children: "Contract Address"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
              className: errors.contractAddress && touched.contractAddress ? 'form-control is-invalid' : 'form-control',
              type: "text",
              name: "contractAddress",
              placeholder: "e.g. 0x11b79afc03baf25c631dd70169bb6a3160b2706e"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.ErrorMessage, {
              className: "invalid-feedback",
              name: "contractAddress",
              component: "div"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "d-flex mb-2 custom-control custom-checkbox",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                className: "custom-control-input",
                type: "checkbox",
                name: "isProxy",
                id: "isProxy",
                onChange: /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(e) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            handleChange(e);
                            if (e.target.checked) setIsProxyContract(true);else setIsProxyContract(false);
                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  return function (_x3) {
                    return _ref5.apply(this, arguments);
                  };
                }()
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                className: "form-check-label custom-control-label",
                htmlFor: "isProxy",
                children: "It's a proxy contract address"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: isProxyContract ? 'form-group d-block' : 'form-group d-none',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "expectedImplAddress",
              children: "Expected Implementation Address"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
              tooltipText: "Providing expected implementation address enforces a check to ensure the returned implementation contract address is same as address picked up by the verifier",
              tooltipId: "etherscan-impl-address",
              placement: "bottom",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Field, {
                className: "form-control",
                type: "text",
                name: "expectedImplAddress",
                placeholder: "verified implementation contract address"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              style: {
                fontSize: 'x-small'
              },
              className: 'ml-1 fal fa-info-circle align-self-center',
              "aria-hidden": "true"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              children: " \xA0Make sure contract is already verified on Etherscan"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SubmitButton, {
            dataId: "verify-contract",
            text: "Verify",
            isSubmitting: isSubmitting,
            disable: !contracts.length || !touched.contractName || !touched.contractAddress || touched.contractName && errors.contractName || touched.contractAddress && errors.contractAddress || networkName === 'VM (Not supported)' ? true : false
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
            tooltipText: "Generate the required TS scripts to verify a contract on Etherscan",
            tooltipId: "etherscan-generate-scripts",
            placement: "bottom",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "mr-2 mb-2 py-1 px-2 btn btn-secondary btn-block",
              onClick: /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        (0, _remixWsTemplates.etherscanScripts)({}, client);
                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })),
              children: "Generate Verification Scripts"
            })
          })]
        });
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-id": "verify-result",
      className: verificationResult.current['succeed'] ? 'text-success mt-4 text-center' : 'text-danger mt-4 text-center',
      style: {
        fontSize: '0.8em'
      },
      dangerouslySetInnerHTML: {
        __html: results
      }
    })]
  });
};
exports.VerifyView = VerifyView;

/***/ }),

/***/ 30523:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "CaptureKeyView", ({
  enumerable: true,
  get: function get() {
    return _CaptureKeyView.CaptureKeyView;
  }
}));
Object.defineProperty(exports, "ErrorView", ({
  enumerable: true,
  get: function get() {
    return _ErrorView.ErrorView;
  }
}));
Object.defineProperty(exports, "HomeView", ({
  enumerable: true,
  get: function get() {
    return _HomeView.HomeView;
  }
}));
Object.defineProperty(exports, "ReceiptsView", ({
  enumerable: true,
  get: function get() {
    return _ReceiptsView.ReceiptsView;
  }
}));
var _HomeView = __webpack_require__(83135);
var _ErrorView = __webpack_require__(46792);
var _ReceiptsView = __webpack_require__(84545);
var _CaptureKeyView = __webpack_require__(83293);

/***/ }),

/***/ 85747:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
var _react = _interopRequireDefault(__webpack_require__(4491));
var _client = __webpack_require__(4447);
var _app = _interopRequireDefault(__webpack_require__(24435));
var _jsxRuntime = __webpack_require__(95867);
var container = document.getElementById('root');
if (container) {
  (0, _client.createRoot)(container).render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_app["default"], {}));
}

/***/ }),

/***/ 96612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _remixUiHelper = __webpack_require__(92397);
Object.keys(_remixUiHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _remixUiHelper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _remixUiHelper[key];
    }
  });
});
var _bleach = __webpack_require__(82257);
Object.keys(_bleach).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bleach[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bleach[key];
    }
  });
});
var _helperComponents = __webpack_require__(38625);
Object.keys(_helperComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helperComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helperComponents[key];
    }
  });
});
var _PluginViewWrapper = __webpack_require__(88936);
Object.keys(_PluginViewWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PluginViewWrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PluginViewWrapper[key];
    }
  });
});
var _customDropdown = __webpack_require__(79390);
Object.keys(_customDropdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customDropdown[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customDropdown[key];
    }
  });
});
var _customTooltip = __webpack_require__(50784);
Object.keys(_customTooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customTooltip[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customTooltip[key];
    }
  });
});

/***/ }),

/***/ 82257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bleach = void 0;
var he = _interopRequireWildcard(__webpack_require__(44316));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/*
 * remixBleach
 * a minimal html sanitizer
 * credits to cam@onswipe.com
 */

var bleach = {
  matcher: /<\/?([a-zA-Z0-9]+)*(.*?)\/?>/igm,
  whitelist: ['a', 'b', 'p', 'em', 'strong'],
  analyze: function analyze(html) {
    html = String(html) || '';
    var matches = [];
    var match;

    // extract all tags
    var _loop = function _loop() {
      var attrr = match[2].split(' ');
      var attrs = [];

      // extract attributes from the tag
      attrr.shift();
      attrr.forEach(function (attr) {
        attr = attr.split('=');
        var attrName = attr[0];
        var attrValue = attr.length > 1 ? attr.slice(1).join('=') : null;
        // remove quotes from attributes
        if (attrValue && attrValue.charAt(0).match(/'|"/)) attrValue = attrValue.slice(1);
        if (attrValue && attrValue.charAt(attrValue.length - 1).match(/'|"/)) attrValue = attrValue.slice(0, -1);
        attr = {
          name: attrName,
          value: attrValue
        };
        if (!attr.value) delete attr.value;
        if (attr.name) attrs.push(attr);
      });
      var tag = {
        full: match[0],
        name: match[1],
        attr: attrs
      };
      matches.push(tag);
    };
    while ((match = bleach.matcher.exec(html)) != null) {
      _loop();
    }
    return matches;
  },
  sanitize: function sanitize(html) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      mode: 'white',
      list: bleach.whitelist,
      encode_entities: false
    };
    html = String(html) || '';
    var mode = options.mode || 'white';
    var list = options.list || bleach.whitelist;
    var matches = bleach.analyze(html);
    if (mode === 'white' && list.indexOf('script') === -1 || mode === 'black' && list.indexOf('script') !== -1) {
      html = html.replace(/<script(.*?)>(.*?[\r\n])*?(.*?)(.*?[\r\n])*?<\/script>/gim, '');
    }
    if (mode === 'white' && list.indexOf('style') === -1 || mode === 'black' && list.indexOf('style') !== -1) {
      html = html.replace(/<style(.*?)>(.*?[\r\n])*?(.*?)(.*?[\r\n])*?<\/style>/gim, '');
    }
    matches.forEach(function (tag) {
      if (mode === 'white') {
        if (list.indexOf(tag.name) === -1) {
          html = html.replace(tag.full, '');
        }
      } else if (mode === 'black') {
        if (list.indexOf(tag.name) !== -1) {
          html = html.replace(tag.full, '');
        }
      } else {
        throw new Error('Unknown sanitization mode "' + mode + '"');
      }
    });
    if (options.encode_entities) html = he.encode(html);
    return html;
  }
};
exports.bleach = bleach;

/***/ }),

/***/ 88936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PluginViewWrapper = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _react = _interopRequireWildcard(__webpack_require__(4491));
var _jsxRuntime = __webpack_require__(95867);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PluginViewWrapper = function PluginViewWrapper(props) {
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0, _react.useEffect)(function () {
    if (props.plugin.setDispatch) {
      props.plugin.setDispatch(setState);
    }
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: state ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: props.plugin.updateComponent(state)
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {})
  });
};
exports.PluginViewWrapper = PluginViewWrapper;

/***/ }),

/***/ 79390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ProxyDropdownMenu = exports.ProxyAddressToggle = exports.CustomToggle = exports.CustomMenu = exports.CustomIconsToggle = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _reactIntl = __webpack_require__(20777);
var _helper = __webpack_require__(96612);
var _jsxRuntime = __webpack_require__(95867);
// The forwardRef is important!!

// Dropdown needs access to the DOM node in order to position the Menu
var CustomToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    _onClick = _ref.onClick,
    icon = _ref.icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick(e);
    },
    className: className.replace('dropdown-toggle', ''),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mr-auto text-nowrap text-truncate overflow-hidden",
        children: children
      }), icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pr-1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "".concat(icon, " pr-1")
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "fad fa-sort-circle"
        })
      })]
    })
  });
});
exports.CustomToggle = CustomToggle;
var CustomIconsToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, ref) {
  var _onClick2 = _ref2.onClick,
    icon = _ref2.icon,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick2();
    },
    className: "".concat(className.replace('dropdown-toggle', ''), " mr-1 mb-0 pb-0 d-flex justify-content-end align-items-end remixuimenuicon_shadow remixuimenuicon_hamburger_menu fs-3"),
    "data-id": "workspaceMenuDropdown",
    children: icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_helper.CustomTooltip, {
      placement: 'top',
      tooltipClasses: "text-nowrap text-left",
      tooltipId: "remixHamburgerTooltip",
      tooltipText: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactIntl.FormattedMessage, {
        id: "filePanel.workspaceActions"
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        style: {
          fontSize: 'large'
        },
        className: "".concat(icon),
        "data-id": "workspaceDropdownMenuIcon"
      })
    })
  });
});

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
exports.CustomIconsToggle = CustomIconsToggle;
var CustomMenu = /*#__PURE__*/_react["default"].forwardRef(function (_ref3, ref) {
  var children = _ref3.children,
    style = _ref3.style,
    dataId = _ref3['data-id'],
    className = _ref3.className,
    labeledBy = _ref3['aria-labelledby'];
  var height = window.innerHeight * 0.6;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    style: style,
    className: className,
    "aria-labelledby": labeledBy,
    "data-id": dataId,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "overflow-auto list-unstyled mb-0",
      style: {
        maxHeight: height + 'px'
      },
      children: children
    })
  });
});
exports.CustomMenu = CustomMenu;
var ProxyAddressToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref4, ref) {
  var address = _ref4.address,
    _onClick3 = _ref4.onClick,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? '' : _ref4$className,
    _onChange = _ref4.onChange;
  var intl = (0, _reactIntl.useIntl)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick3(e);
    },
    className: 'd-flex ' + className.replace('dropdown-toggle', ''),
    "data-id": "toggleProxyAddressDropdown",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      onChange: function onChange(e) {
        e.preventDefault();
        _onChange(e);
      },
      className: "udapp_input form-control",
      value: address,
      placeholder: intl.formatMessage({
        id: 'udapp.enterProxyAddress'
      }),
      style: {
        width: '100%'
      },
      "data-id": "ERC1967AddressInput"
    })
  });
});
exports.ProxyAddressToggle = ProxyAddressToggle;
var ProxyDropdownMenu = /*#__PURE__*/_react["default"].forwardRef(function (_ref5, ref) {
  var children = _ref5.children,
    style = _ref5.style,
    className = _ref5.className,
    labeledBy = _ref5['aria-labelledby'];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    style: style,
    className: className,
    "aria-labelledby": labeledBy,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "list-unstyled mb-0",
      children: children
    })
  });
});
exports.ProxyDropdownMenu = ProxyDropdownMenu;

/***/ }),

/***/ 50784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(61469);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CustomTooltip = CustomTooltip;
var _react = _interopRequireWildcard(__webpack_require__(4491));
var _reactBootstrap = __webpack_require__(25229);
var _jsxRuntime = __webpack_require__(95867);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CustomTooltip(_ref) {
  var children = _ref.children,
    placement = _ref.placement,
    tooltipId = _ref.tooltipId,
    tooltipClasses = _ref.tooltipClasses,
    tooltipText = _ref.tooltipText,
    tooltipTextClasses = _ref.tooltipTextClasses,
    delay = _ref.delay,
    hide = _ref.hide;
  if (typeof tooltipText !== 'string') {
    var newTooltipText = /*#__PURE__*/_react["default"].cloneElement(tooltipText, {
      className: ' bg-secondary text-wrap p-1 px-2 '
    });
    tooltipText = newTooltipText;
  }
  return !hide ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.OverlayTrigger, {
      placement: placement,
      overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Popover, {
        id: "popover-positioned-".concat(placement),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Popover.Content, {
          id: !tooltipId ? "".concat(tooltipText, "Tooltip") : tooltipId,
          style: {
            minWidth: 'fit-content'
          },
          className: 'text-wrap p-1 px-2 bg-secondary w-100' + tooltipClasses,
          children: typeof tooltipText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: 'text-wrap p-1 px-2 bg-secondary ' + {
              tooltipTextClasses: tooltipTextClasses
            },
            children: tooltipText
          }) : tooltipText
        })
      }),
      children: children
    })
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: children
    })
  });
}

/***/ }),

/***/ 38625:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RenderIf = RenderIf;
exports.RenderIfNot = RenderIfNot;
exports.upgradeWithProxyMsg = exports.upgradeReportMsg = exports.unavailableProxyLayoutMsg = exports.storageFullMessage = exports.sourceVerificationNotAvailableToastMsg = exports.recursivePasteToastMsg = exports.notFoundToastMsg = exports.logBuilder = exports.localCompilationToastMsg = exports.fileChangedToastMsg = exports.envChangeNotification = exports.deployWithProxyMsg = exports.compilingToastMsg = exports.compilerConfigChangedToastMsg = exports.compileToastMsg = exports.compilationFinishedToastMsg = exports.cancelUpgradeMsg = exports.cancelProxyMsg = void 0;
var _react = _interopRequireDefault(__webpack_require__(4491));
var _jsxRuntime = __webpack_require__(95867);
var fileChangedToastMsg = function fileChangedToastMsg(from, path) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "fas fa-exclamation-triangle text-danger mr-1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      children: [from, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-weight-bold text-warning",
        children: "is modifying"
      }), " ", path]
    })]
  });
};
exports.fileChangedToastMsg = fileChangedToastMsg;
var compilerConfigChangedToastMsg = function compilerConfigChangedToastMsg(from, value) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: from
    }), " is updating the ", /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Solidity compiler configuration"
    }), ".", /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
      className: "text-left",
      children: value
    })]
  });
};
exports.compilerConfigChangedToastMsg = compilerConfigChangedToastMsg;
var compileToastMsg = function compileToastMsg(from, fileName) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: from
    }), " is requiring to compile ", /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: fileName
    })]
  });
};
exports.compileToastMsg = compileToastMsg;
var compilingToastMsg = function compilingToastMsg(settings) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Recompiling and debugging with params"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
      className: "text-left",
      children: settings
    })]
  });
};
exports.compilingToastMsg = compilingToastMsg;
var compilationFinishedToastMsg = function compilationFinishedToastMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Compilation failed..."
    }), " continuing ", /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      children: "without"
    }), " source code debugging."]
  });
};
exports.compilationFinishedToastMsg = compilationFinishedToastMsg;
var notFoundToastMsg = function notFoundToastMsg(address) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("b", {
      children: ["Contract ", address, " not found in source code repository"]
    }), " continuing ", /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      children: "without"
    }), " source code debugging."]
  });
};
exports.notFoundToastMsg = notFoundToastMsg;
var localCompilationToastMsg = function localCompilationToastMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Using compilation result from Solidity module"
    })
  });
};
exports.localCompilationToastMsg = localCompilationToastMsg;
var sourceVerificationNotAvailableToastMsg = function sourceVerificationNotAvailableToastMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Source verification plugin not activated or not available."
    }), " continuing ", /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      children: "without"
    }), " source code debugging."]
  });
};
exports.sourceVerificationNotAvailableToastMsg = sourceVerificationNotAvailableToastMsg;
var envChangeNotification = function envChangeNotification(env, from) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "fas fa-exclamation-triangle text-danger mr-1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      children: [from + ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-weight-bold text-warning",
        children: "set your environment to"
      }), " ", env && env.context]
    })]
  });
};
exports.envChangeNotification = envChangeNotification;
var storageFullMessage = function storageFullMessage() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "fas fa-exclamation-triangle text-danger mr-1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "font-weight-bold",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Cannot save this file due to full LocalStorage. Backup existing files and free up some space."
      })
    })]
  });
};
exports.storageFullMessage = storageFullMessage;
var recursivePasteToastMsg = function recursivePasteToastMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: "File(s) to paste is an ancestor of the destination folder"
  });
};
exports.recursivePasteToastMsg = recursivePasteToastMsg;
var logBuilder = function logBuilder(msg) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
    children: msg
  });
};
exports.logBuilder = logBuilder;
var cancelProxyMsg = function cancelProxyMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Proxy deployment cancelled."
    })
  });
};
exports.cancelProxyMsg = cancelProxyMsg;
var cancelUpgradeMsg = function cancelUpgradeMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Upgrade with proxy cancelled."
    })
  });
};
exports.cancelUpgradeMsg = cancelUpgradeMsg;
var deployWithProxyMsg = function deployWithProxyMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Deploy with Proxy"
    }), " will initiate two (2) transactions:", /*#__PURE__*/(0, _jsxRuntime.jsxs)("ol", {
      className: "pl-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: "Deploying the implementation contract"
      }, "impl-contract"), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: "Deploying an ERC1967 proxy contract"
      }, "proxy-contract")]
    })]
  });
};
exports.deployWithProxyMsg = deployWithProxyMsg;
var upgradeWithProxyMsg = function upgradeWithProxyMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
      children: "Upgrade with Proxy"
    }), " will initiate two (2) transactions:", /*#__PURE__*/(0, _jsxRuntime.jsxs)("ol", {
      className: "pl-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: "Deploying the new implementation contract"
      }, "new-impl-contract"), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: "Updating the proxy contract with the address of the new implementation contract"
      }, "update-proxy-contract")]
    })]
  });
};
exports.upgradeWithProxyMsg = upgradeWithProxyMsg;
var unavailableProxyLayoutMsg = function unavailableProxyLayoutMsg() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["The previous contract implementation is NOT available for an upgrade comparison", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), " A new storage layout will be saved for future upgrades."]
    })
  });
};
exports.unavailableProxyLayoutMsg = unavailableProxyLayoutMsg;
var upgradeReportMsg = function upgradeReportMsg(report) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "py-2 ml-2 mb-1 align-self-end mb-2 d-flex",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "align-self-center pl-4 mt-1",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "pr-2 text-warning far fa-exclamation-triangle",
          "aria-hidden": "true",
          style: {
            fontSize: 'xxx-large',
            fontWeight: 'lighter'
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "pl-4 mt-1",
          children: "The storage layout of new implementation is NOT"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "pl-4 mt-1",
          children: "compatible with the previous implementation."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "pl-4 mt-1",
          children: "Your contract's storage may be partially or fully erased!"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pl-4 text-danger",
      children: report.explain()
    })]
  });
};
exports.upgradeReportMsg = upgradeReportMsg;
function RenderIf(_ref) {
  var condition = _ref.condition,
    children = _ref.children;
  return condition ? children : null;
}
function RenderIfNot(_ref2) {
  var condition = _ref2.condition,
    children = _ref2.children;
  return condition ? null : children;
}

/***/ }),

/***/ 92397:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shortenProxyAddress = exports.shortenHexData = exports.shortenDate = exports.shortenAddress = exports.joinPath = exports.isValidHash = exports.isNumeric = exports.isHexadecimal = exports.is0XPrefixed = exports.getPathIcon = exports.extractParentFromKey = exports.extractNameFromKey = exports.createNonClashingTitle = exports.createNonClashingNameAsync = exports.checkSpecialChars = exports.checkSlash = exports.addressToString = exports.addSlash = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _util = __webpack_require__(97193);
var extractNameFromKey = function extractNameFromKey(key) {
  if (!key) return;
  var keyPath = key.split('/');
  return keyPath[keyPath.length - 1];
};
exports.extractNameFromKey = extractNameFromKey;
var extractParentFromKey = function extractParentFromKey(key) {
  if (!key) return;
  var keyPath = key.split('/');
  keyPath.pop();
  return keyPath.join('/');
};
exports.extractParentFromKey = extractParentFromKey;
var checkSpecialChars = function checkSpecialChars(name) {
  return name.match(/[:*?"<>\\'|]/) != null;
};
exports.checkSpecialChars = checkSpecialChars;
var checkSlash = function checkSlash(name) {
  return name.match(/\//) != null;
};
exports.checkSlash = checkSlash;
var createNonClashingNameAsync = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name, fileManager) {
    var prefix,
      _counter,
      ext,
      reg,
      split,
      exist,
      isDuplicate,
      counter,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            prefix = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
            if (!name) name = 'Undefined';
            ext = 'sol';
            reg = /(.*)\.([^.]+)/g;
            split = reg.exec(name);
            if (split) {
              name = split[1];
              ext = split[2];
            }
            exist = true;
          case 7:
            _context.next = 9;
            return fileManager.exists(name + (_counter || '') + prefix + '.' + ext);
          case 9:
            isDuplicate = _context.sent;
            if (isDuplicate) _counter = (_counter || 0) + 1;else exist = false;
          case 11:
            if (exist) {
              _context.next = 7;
              break;
            }
          case 12:
            counter = _counter || '';
            return _context.abrupt("return", name + counter + prefix + '.' + ext);
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function createNonClashingNameAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createNonClashingNameAsync = createNonClashingNameAsync;
var createNonClashingTitle = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name, fileManager) {
    var _counter, exist, isDuplicate, counter;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!name) name = 'Undefined';
            exist = true;
          case 2:
            _context2.next = 4;
            return fileManager.exists(name + (_counter || ''));
          case 4:
            isDuplicate = _context2.sent;
            if (isDuplicate) _counter = (_counter || 0) + 1;else exist = false;
          case 6:
            if (exist) {
              _context2.next = 2;
              break;
            }
          case 7:
            counter = _counter || '';
            return _context2.abrupt("return", name + counter);
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function createNonClashingTitle(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createNonClashingTitle = createNonClashingTitle;
var joinPath = function joinPath() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }
  paths = paths.filter(function (value) {
    return value !== '';
  }).map(function (path) {
    return path.replace(/^\/|\/$/g, '');
  }); // remove first and last slash)
  if (paths.length === 1) return paths[0];
  return paths.join('/');
};
exports.joinPath = joinPath;
var getPathIcon = function getPathIcon(path) {
  return path.endsWith('.txt') ? 'far fa-file-alt' : path.endsWith('.md') ? 'fab fa-markdown' : path.endsWith('.sol') ? 'fa-kit fa-solidity-mono' : path.endsWith('.js') ? 'fab fa-js' : path.endsWith('.json') ? 'small fas fa-brackets-curly' : path.endsWith('.vy') ? 'small fa-kit fa-vyper2' : path.endsWith('.lex') ? 'fa-kit fa-lexon' : path.endsWith('ts') ? 'small fa-kit fa-ts-logo' : path.endsWith('.tsc') ? 'fad fa-brackets-curly' : path.endsWith('.cairo') ? 'small fa-kit fa-cairo' : path.endsWith('.circom') ? 'fa-kit fa-circom' : 'far fa-file';
};
exports.getPathIcon = getPathIcon;
var isNumeric = function isNumeric(value) {
  return /^\+?(0|[1-9]\d*)$/.test(value);
};
exports.isNumeric = isNumeric;
var shortenAddress = function shortenAddress(address, etherBalance) {
  var len = address.length;
  return address.slice(0, 5) + '...' + address.slice(len - 5, len) + (etherBalance ? ' (' + etherBalance.toString() + ' ether)' : '');
};
exports.shortenAddress = shortenAddress;
var addressToString = function addressToString(address) {
  if (!address) return null;
  if (typeof address !== 'string') {
    address = (0, _util.bytesToHex)(address);
  }
  if (address.indexOf('0x') === -1) {
    address = '0x' + address;
  }
  return (0, _util.toChecksumAddress)(address);
};
exports.addressToString = addressToString;
var is0XPrefixed = function is0XPrefixed(value) {
  return value.substr(0, 2) === '0x';
};
exports.is0XPrefixed = is0XPrefixed;
var isHexadecimal = function isHexadecimal(value) {
  return /^[0-9a-fA-F]+$/.test(value) && value.length % 2 === 0;
};
exports.isHexadecimal = isHexadecimal;
var isValidHash = function isValidHash(hash) {
  // 0x prefixed, hexadecimal, 64digit
  var hexValue = hash.slice(2, hash.length);
  return is0XPrefixed(hash) && /^[0-9a-fA-F]{64}$/.test(hexValue);
};
exports.isValidHash = isValidHash;
var shortenHexData = function shortenHexData(data) {
  if (!data) return '';
  if (data.length < 5) return data;
  var len = data.length;
  return data.slice(0, 5) + '...' + data.slice(len - 5, len);
};
exports.shortenHexData = shortenHexData;
var addSlash = function addSlash(file) {
  if (!file.startsWith('/')) file = '/' + file;
  return file;
};
exports.addSlash = addSlash;
var shortenProxyAddress = function shortenProxyAddress(address) {
  var len = address.length;
  return address.slice(0, 5) + '...' + address.slice(len - 5, len);
};
exports.shortenProxyAddress = shortenProxyAddress;
var shortenDate = function shortenDate(dateString) {
  var date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  }) + ', ' + date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });
};
exports.shortenDate = shortenDate;

/***/ }),

/***/ 81511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "blank", ({
  enumerable: true,
  get: function get() {
    return _blank["default"];
  }
}));
Object.defineProperty(exports, "contractCreate2Factory", ({
  enumerable: true,
  get: function get() {
    return _create2SolidityFactory.contractCreate2Factory;
  }
}));
Object.defineProperty(exports, "contractDeployerScripts", ({
  enumerable: true,
  get: function get() {
    return _contractDeployer.contractDeployerScripts;
  }
}));
Object.defineProperty(exports, "etherscanScripts", ({
  enumerable: true,
  get: function get() {
    return _etherscan.etherscanScripts;
  }
}));
Object.defineProperty(exports, "gnosisSafeMultisig", ({
  enumerable: true,
  get: function get() {
    return _gnosisSafeMultisig["default"];
  }
}));
Object.defineProperty(exports, "hashchecker", ({
  enumerable: true,
  get: function get() {
    return _hashchecker["default"];
  }
}));
Object.defineProperty(exports, "ozerc1155", ({
  enumerable: true,
  get: function get() {
    return _ozerc3["default"];
  }
}));
Object.defineProperty(exports, "ozerc20", ({
  enumerable: true,
  get: function get() {
    return _ozerc["default"];
  }
}));
Object.defineProperty(exports, "ozerc721", ({
  enumerable: true,
  get: function get() {
    return _ozerc2["default"];
  }
}));
Object.defineProperty(exports, "playground", ({
  enumerable: true,
  get: function get() {
    return _playground["default"];
  }
}));
Object.defineProperty(exports, "remixDefault", ({
  enumerable: true,
  get: function get() {
    return _remixDefault["default"];
  }
}));
Object.defineProperty(exports, "rln", ({
  enumerable: true,
  get: function get() {
    return _rln["default"];
  }
}));
Object.defineProperty(exports, "runJsTestAction", ({
  enumerable: true,
  get: function get() {
    return _runJsTestAction.runJsTestAction;
  }
}));
Object.defineProperty(exports, "runSlitherAction", ({
  enumerable: true,
  get: function get() {
    return _slitherAction.runSlitherAction;
  }
}));
Object.defineProperty(exports, "runSolidityUnittestingAction", ({
  enumerable: true,
  get: function get() {
    return _solidityTestAction.runSolidityUnittestingAction;
  }
}));
Object.defineProperty(exports, "semaphore", ({
  enumerable: true,
  get: function get() {
    return _semaphore["default"];
  }
}));
Object.defineProperty(exports, "sindriScripts", ({
  enumerable: true,
  get: function get() {
    return _sindri.sindriScripts;
  }
}));
Object.defineProperty(exports, "zeroxErc20", ({
  enumerable: true,
  get: function get() {
    return _zeroxErc["default"];
  }
}));
var _remixDefault = _interopRequireDefault(__webpack_require__(51526));
var _blank = _interopRequireDefault(__webpack_require__(44350));
var _ozerc = _interopRequireDefault(__webpack_require__(7569));
var _ozerc2 = _interopRequireDefault(__webpack_require__(66249));
var _ozerc3 = _interopRequireDefault(__webpack_require__(1555));
var _zeroxErc = _interopRequireDefault(__webpack_require__(26932));
var _gnosisSafeMultisig = _interopRequireDefault(__webpack_require__(31200));
var _playground = _interopRequireDefault(__webpack_require__(40369));
var _semaphore = _interopRequireDefault(__webpack_require__(85010));
var _hashchecker = _interopRequireDefault(__webpack_require__(21955));
var _rln = _interopRequireDefault(__webpack_require__(25132));
var _contractDeployer = __webpack_require__(20095);
var _etherscan = __webpack_require__(73919);
var _sindri = __webpack_require__(57238);
var _create2SolidityFactory = __webpack_require__(6177);
var _solidityTestAction = __webpack_require__(88275);
var _slitherAction = __webpack_require__(39048);
var _runJsTestAction = __webpack_require__(8817);

/***/ }),

/***/ 20095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.contractDeployerScripts = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var contractDeployerScripts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, plugin) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = plugin;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 9935).then(__webpack_require__.bind(__webpack_require__, 29935));
          case 3:
            _context.t1 = _context.sent["default"];
            _context.next = 6;
            return _context.t0.call.call(_context.t0, 'fileManager', 'writeFile', 'scripts/contract-deployer/create2-factory-deploy.ts', _context.t1);
          case 6:
            _context.next = 8;
            return plugin.call('fileManager', 'open', 'scripts/contract-deployer/create2-factory-deploy.ts');
          case 8:
            _context.t2 = plugin;
            _context.next = 11;
            return __webpack_require__.e(/* import() */ 7083).then(__webpack_require__.bind(__webpack_require__, 87083));
          case 11:
            _context.t3 = _context.sent["default"];
            _context.next = 14;
            return _context.t2.call.call(_context.t2, 'fileManager', 'writeFile', 'scripts/contract-deployer/basic-contract-deploy.ts', _context.t3);
          case 14:
            _context.next = 16;
            return plugin.call('fileManager', 'open', 'scripts/contract-deployer/basic-contract-deploy.ts');
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function contractDeployerScripts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.contractDeployerScripts = contractDeployerScripts;

/***/ }),

/***/ 6177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.contractCreate2Factory = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var contractCreate2Factory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, plugin) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = plugin;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 1702).then(__webpack_require__.bind(__webpack_require__, 21702));
          case 3:
            _context.t1 = _context.sent["default"];
            _context.next = 6;
            return _context.t0.call.call(_context.t0, 'fileManager', 'writeFile', 'contracts/libs/create2-factory.sol', _context.t1);
          case 6:
            _context.next = 8;
            return plugin.call('fileManager', 'open', 'contracts/libs/create2-factory.sol');
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function contractCreate2Factory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.contractCreate2Factory = contractCreate2Factory;

/***/ }),

/***/ 73919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.etherscanScripts = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var etherscanScripts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, plugin) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = plugin;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 654).then(__webpack_require__.bind(__webpack_require__, 70654));
          case 3:
            _context.t1 = _context.sent["default"];
            _context.next = 6;
            return _context.t0.call.call(_context.t0, 'fileManager', 'writeFile', 'scripts/etherscan/verifyScript.ts', _context.t1);
          case 6:
            _context.next = 8;
            return plugin.call('fileManager', 'open', 'scripts/etherscan/verifyScript.ts');
          case 8:
            _context.t2 = plugin;
            _context.next = 11;
            return __webpack_require__.e(/* import() */ 9716).then(__webpack_require__.bind(__webpack_require__, 9716));
          case 11:
            _context.t3 = _context.sent["default"];
            _context.next = 14;
            return _context.t2.call.call(_context.t2, 'fileManager', 'writeFile', 'scripts/etherscan/receiptGuidScript.ts', _context.t3);
          case 14:
            _context.next = 16;
            return plugin.call('fileManager', 'open', 'scripts/etherscan/receiptGuidScript.ts');
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function etherscanScripts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.etherscanScripts = etherscanScripts;

/***/ }),

/***/ 8817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.runJsTestAction = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var runJsTestAction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, plugin) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = plugin;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 5719).then(__webpack_require__.bind(__webpack_require__, 95719));
          case 3:
            _context.t1 = _context.sent["default"];
            _context.next = 6;
            return _context.t0.call.call(_context.t0, 'fileManager', 'writeFile', '.github/workflows/run-js-test.yml', _context.t1);
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function runJsTestAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.runJsTestAction = runJsTestAction;

/***/ }),

/***/ 57238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sindriScripts = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(45616));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(31210));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var getWorkspaceFilesByPath = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(plugin) {
    var pathRegex,
      filesByPath,
      workspace,
      childQueue,
      _childQueue$pop,
      _childQueue$pop2,
      _path,
      child,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathRegex = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            filesByPath = {};
            _context.next = 4;
            return plugin.call('fileManager', 'copyFolderToJson', '/');
          case 4:
            workspace = _context.sent;
            childQueue = Object.entries(workspace);
            while (childQueue.length > 0) {
              _childQueue$pop = childQueue.pop(), _childQueue$pop2 = (0, _slicedToArray2["default"])(_childQueue$pop, 2), _path = _childQueue$pop2[0], child = _childQueue$pop2[1];
              if ('content' in child && (pathRegex === null || pathRegex.test(_path))) {
                filesByPath[_path] = new File([child.content], _path);
              }
              if ('children' in child) {
                childQueue.push.apply(childQueue, (0, _toConsumableArray2["default"])(Object.entries(child.children)));
              }
            }
            return _context.abrupt("return", filesByPath);
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getWorkspaceFilesByPath(_x) {
    return _ref.apply(this, arguments);
  };
}();
var sindriScripts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(opts, plugin) {
    var existingFilesByPath, writeIfNotExists, sindriManifest, circomPathsAndContents, circomCircuitPath, _yield$plugin$call, workspaceName;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getWorkspaceFilesByPath(plugin, /sindri|\.circom$/i);
          case 2:
            existingFilesByPath = _context4.sent;
            writeIfNotExists = /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(path, content) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (path in existingFilesByPath) {
                          _context2.next = 3;
                          break;
                        }
                        _context2.next = 3;
                        return plugin.call('fileManager', 'writeFile', path, content);
                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return function writeIfNotExists(_x4, _x5) {
                return _ref3.apply(this, arguments);
              };
            }(); // Write out all of the static files if they don't exist.
            // @ts-ignore
            _context4.t0 = writeIfNotExists;
            _context4.next = 7;
            return __webpack_require__.e(/* import() */ 9456).then(__webpack_require__.bind(__webpack_require__, 9456));
          case 7:
            _context4.t1 = _context4.sent["default"];
            _context4.next = 10;
            return (0, _context4.t0)('.sindriignore', _context4.t1);
          case 10:
            _context4.t2 = writeIfNotExists;
            _context4.next = 13;
            return __webpack_require__.e(/* import() */ 4650).then(__webpack_require__.bind(__webpack_require__, 64650));
          case 13:
            _context4.t3 = _context4.sent["default"];
            _context4.next = 16;
            return (0, _context4.t2)('scripts/sindri/README.md', _context4.t3);
          case 16:
            _context4.t4 = writeIfNotExists;
            _context4.next = 19;
            return __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(__webpack_require__, 17));
          case 19:
            _context4.t5 = _context4.sent["default"];
            _context4.next = 22;
            return (0, _context4.t4)('scripts/sindri/run_compile.ts', _context4.t5);
          case 22:
            _context4.t6 = writeIfNotExists;
            _context4.next = 25;
            return __webpack_require__.e(/* import() */ 1882).then(__webpack_require__.bind(__webpack_require__, 81882));
          case 25:
            _context4.t7 = _context4.sent["default"];
            _context4.next = 28;
            return (0, _context4.t6)('scripts/sindri/run_prove.ts', _context4.t7);
          case 28:
            _context4.t8 = writeIfNotExists;
            _context4.next = 31;
            return __webpack_require__.e(/* import() */ 9155).then(__webpack_require__.bind(__webpack_require__, 79155));
          case 31:
            _context4.t9 = _context4.sent["default"];
            _context4.next = 34;
            return (0, _context4.t8)('scripts/sindri/utils.ts', _context4.t9);
          case 34:
            if ('sindri.json' in existingFilesByPath) {
              _context4.next = 50;
              break;
            }
            _context4.next = 37;
            return __webpack_require__.e(/* import() */ 6875).then(__webpack_require__.t.bind(__webpack_require__, 26875, 19));
          case 37:
            sindriManifest = _context4.sent["default"];
            if (!(sindriManifest.circuitType === 'circom')) {
              _context4.next = 44;
              break;
            }
            _context4.next = 41;
            return Promise.all(Object.entries(existingFilesByPath).filter(function (_ref4) {
              var _ref5 = (0, _slicedToArray2["default"])(_ref4, 1),
                path = _ref5[0];
              return /\.circom$/i.test(path);
            }).map( /*#__PURE__*/function () {
              var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref6) {
                var _ref8, path, file;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _ref8 = (0, _slicedToArray2["default"])(_ref6, 2), path = _ref8[0], file = _ref8[1];
                        _context3.t0 = path;
                        _context3.next = 4;
                        return file.text();
                      case 4:
                        _context3.t1 = _context3.sent;
                        return _context3.abrupt("return", [_context3.t0, _context3.t1]);
                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
              return function (_x6) {
                return _ref7.apply(this, arguments);
              };
            }()));
          case 41:
            circomPathsAndContents = _context4.sent;
            // Now we apply some heuristics to find the "best" file.
            circomCircuitPath = circomPathsAndContents.map(function (_ref9) {
              var _path$split$pop;
              var _ref10 = (0, _slicedToArray2["default"])(_ref9, 2),
                path = _ref10[0],
                content = _ref10[1];
              return {
                content: content,
                hasMainComponent: !!/^[ \t\f]*component[ \t\f]+main[^\n\r]*;[ \t\f]*$/m.test(content),
                // These files are the entrypoints to the Remix Circom templates, so we give them a boost if there are multiple main components.
                isTemplateEntrypoint: !!['calculate_hash.circom', 'rln.circom', 'semaphore.circom'].includes((_path$split$pop = path.split('/').pop()) !== null && _path$split$pop !== void 0 ? _path$split$pop : ''),
                path: path
              };
            }).sort(function (a, b) {
              if (a.hasMainComponent !== b.hasMainComponent) return +b.hasMainComponent - +a.hasMainComponent;
              if (a.isTemplateEntrypoint !== b.isTemplateEntrypoint) return +b.isTemplateEntrypoint - +a.isTemplateEntrypoint;
              return a.path.localeCompare(b.path);
            }).map(function (_ref11) {
              var path = _ref11.path;
              return path;
            })[0] || './circuit.circom';
            sindriManifest.circuitPath = circomCircuitPath;
          case 44:
            _context4.next = 46;
            return plugin.call('filePanel', 'getCurrentWorkspace');
          case 46:
            _yield$plugin$call = _context4.sent;
            workspaceName = _yield$plugin$call.name;
            sindriManifest.name = workspaceName.replace(/\s*-+\s*\d*$/, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^[^a-zA-Z]+/, '').toLowerCase() || "my-".concat(sindriManifest.circuitType, "-circuit");

            // Write out the modified manifest file.
            writeIfNotExists('sindri.json', JSON.stringify(sindriManifest, null, 2));
          case 50:
            _context4.next = 52;
            return plugin.call('doc-viewer', 'viewDocs', ["scripts/sindri/README.md"]);
          case 52:
            plugin.call('tabs', 'focus', 'doc-viewer');
          case 53:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function sindriScripts(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.sindriScripts = sindriScripts;

/***/ }),

/***/ 39048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.runSlitherAction = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var runSlitherAction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, plugin) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = plugin;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 5116).then(__webpack_require__.bind(__webpack_require__, 35116));
          case 3:
            _context.t1 = _context.sent["default"];
            _context.next = 6;
            return _context.t0.call.call(_context.t0, 'fileManager', 'writeFile', '.github/workflows/run-slither-action.yml', _context.t1);
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function runSlitherAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.runSlitherAction = runSlitherAction;

/***/ }),

/***/ 88275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.runSolidityUnittestingAction = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var runSolidityUnittestingAction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts, plugin) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = plugin;
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 6987).then(__webpack_require__.bind(__webpack_require__, 36987));
          case 3:
            _context.t1 = _context.sent["default"];
            _context.next = 6;
            return _context.t0.call.call(_context.t0, 'fileManager', 'writeFile', '.github/workflows/run-solidity-unittesting.yml', _context.t1);
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function runSolidityUnittestingAction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.runSolidityUnittestingAction = runSolidityUnittestingAction;

/***/ }),

/***/ 44350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 3862).then(__webpack_require__.bind(__webpack_require__, 13862));
        case 2:
          _context.t0 = _context.sent["default"];
          return _context.abrupt("return", {
            '.prettierrc.json': _context.t0
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 31200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 7809).then(__webpack_require__.bind(__webpack_require__, 37809));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 6844).then(__webpack_require__.bind(__webpack_require__, 56844));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 7122).then(__webpack_require__.bind(__webpack_require__, 97122));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 5471).then(__webpack_require__.bind(__webpack_require__, 75471));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 3273).then(__webpack_require__.bind(__webpack_require__, 33273));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 8154).then(__webpack_require__.bind(__webpack_require__, 8154));
        case 17:
          _context.t5 = _context.sent["default"];
          return _context.abrupt("return", {
            'contracts/MultisigWallet.sol': _context.t0,
            'scripts/deploy_with_ethers.ts': _context.t1,
            'scripts/deploy_with_web3.ts': _context.t2,
            'scripts/ethers-lib.ts': _context.t3,
            'scripts/web3-lib.ts': _context.t4,
            '.prettierrc.json': _context.t5
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 21955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 2794).then(__webpack_require__.bind(__webpack_require__, 12794));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 8278).then(__webpack_require__.bind(__webpack_require__, 68278));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 780).then(__webpack_require__.bind(__webpack_require__, 20780));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 1390).then(__webpack_require__.bind(__webpack_require__, 51390));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 5060).then(__webpack_require__.bind(__webpack_require__, 45060));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 4863).then(__webpack_require__.bind(__webpack_require__, 54863));
        case 17:
          _context.t5 = _context.sent["default"];
          _context.next = 20;
          return __webpack_require__.e(/* import() */ 9928).then(__webpack_require__.bind(__webpack_require__, 39928));
        case 20:
          _context.t6 = _context.sent["default"];
          _context.next = 23;
          return __webpack_require__.e(/* import() */ 9792).then(__webpack_require__.bind(__webpack_require__, 29792));
        case 23:
          _context.t7 = _context.sent["default"];
          return _context.abrupt("return", {
            'circuits/calculate_hash.circom': _context.t0,
            'scripts/groth16/groth16_trusted_setup.ts': _context.t1,
            'scripts/groth16/groth16_zkproof.ts': _context.t2,
            'scripts/plonk/plonk_trusted_setup.ts': _context.t3,
            'scripts/plonk/plonk_zkproof.ts': _context.t4,
            'templates/groth16_verifier.sol.ejs': _context.t5,
            'templates/plonk_verifier.sol.ejs': _context.t6,
            'README.md': _context.t7
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 1555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _wizard = __webpack_require__(93712);
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts) {
    var filesObj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (opts) {
              _wizard.erc1155.defaults.mintable = opts.mintable;
              _wizard.erc1155.defaults.burnable = opts.burnable;
              _wizard.erc1155.defaults.pausable = opts.pausable;
            }
            _context.t0 = _wizard.erc1155.print(Object.assign({}, _wizard.erc1155.defaults, {
              upgradeable: opts && opts.upgradeable ? opts.upgradeable : false
            }));
            _context.next = 4;
            return __webpack_require__.e(/* import() */ 9047).then(__webpack_require__.bind(__webpack_require__, 39047));
          case 4:
            _context.t1 = _context.sent["default"];
            _context.next = 7;
            return __webpack_require__.e(/* import() */ 8857).then(__webpack_require__.bind(__webpack_require__, 98857));
          case 7:
            _context.t2 = _context.sent["default"];
            _context.next = 10;
            return __webpack_require__.e(/* import() */ 8000).then(__webpack_require__.bind(__webpack_require__, 28000));
          case 10:
            _context.t3 = _context.sent["default"];
            _context.next = 13;
            return __webpack_require__.e(/* import() */ 6870).then(__webpack_require__.bind(__webpack_require__, 26870));
          case 13:
            _context.t4 = _context.sent["default"];
            _context.next = 16;
            return __webpack_require__.e(/* import() */ 593).then(__webpack_require__.bind(__webpack_require__, 70593));
          case 16:
            _context.t5 = _context.sent["default"];
            filesObj = {
              'contracts/MyToken.sol': _context.t0,
              'scripts/deploy_with_ethers.ts': _context.t1,
              'scripts/deploy_with_web3.ts': _context.t2,
              'scripts/ethers-lib.ts': _context.t3,
              'scripts/web3-lib.ts': _context.t4,
              '.prettierrc.json': _context.t5
            };
            if (!(!opts || opts.upgradeable === undefined || !opts.upgradeable)) {
              _context.next = 28;
              break;
            }
            if (!_wizard.erc1155.defaults.mintable) {
              _context.next = 25;
              break;
            }
            _context.next = 22;
            return __webpack_require__.e(/* import() */ 4346).then(__webpack_require__.bind(__webpack_require__, 84346));
          case 22:
            filesObj['tests/MyToken_test.sol'] = _context.sent["default"];
            _context.next = 28;
            break;
          case 25:
            _context.next = 27;
            return __webpack_require__.e(/* import() */ 1383).then(__webpack_require__.bind(__webpack_require__, 81383));
          case 27:
            filesObj['tests/MyToken_test.sol'] = _context.sent["default"];
          case 28:
            return _context.abrupt("return", filesObj);
          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;

/***/ }),

/***/ 7569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _wizard = __webpack_require__(93712);
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts) {
    var filesObj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (opts) {
              _wizard.erc20.defaults.mintable = opts.mintable;
              _wizard.erc20.defaults.burnable = opts.burnable;
              _wizard.erc20.defaults.pausable = opts.pausable;
            }
            _context.t0 = _wizard.erc20.print(Object.assign({}, _wizard.erc20.defaults, {
              upgradeable: opts && opts.upgradeable ? opts.upgradeable : false
            }));
            _context.next = 4;
            return __webpack_require__.e(/* import() */ 9821).then(__webpack_require__.bind(__webpack_require__, 89821));
          case 4:
            _context.t1 = _context.sent["default"];
            _context.next = 7;
            return __webpack_require__.e(/* import() */ 251).then(__webpack_require__.bind(__webpack_require__, 50251));
          case 7:
            _context.t2 = _context.sent["default"];
            _context.next = 10;
            return __webpack_require__.e(/* import() */ 2434).then(__webpack_require__.bind(__webpack_require__, 2434));
          case 10:
            _context.t3 = _context.sent["default"];
            _context.next = 13;
            return __webpack_require__.e(/* import() */ 1604).then(__webpack_require__.bind(__webpack_require__, 21604));
          case 13:
            _context.t4 = _context.sent["default"];
            _context.next = 16;
            return __webpack_require__.e(/* import() */ 8711).then(__webpack_require__.bind(__webpack_require__, 28711));
          case 16:
            _context.t5 = _context.sent["default"];
            filesObj = {
              'contracts/MyToken.sol': _context.t0,
              'scripts/deploy_with_ethers.ts': _context.t1,
              'scripts/deploy_with_web3.ts': _context.t2,
              'scripts/ethers-lib.ts': _context.t3,
              'scripts/web3-lib.ts': _context.t4,
              '.prettierrc.json': _context.t5
            };
            if (!(!opts || opts.upgradeable === undefined || !opts.upgradeable)) {
              _context.next = 28;
              break;
            }
            if (!_wizard.erc20.defaults.mintable) {
              _context.next = 25;
              break;
            }
            _context.next = 22;
            return __webpack_require__.e(/* import() */ 7684).then(__webpack_require__.bind(__webpack_require__, 47684));
          case 22:
            filesObj['tests/MyToken_test.sol'] = _context.sent["default"];
            _context.next = 28;
            break;
          case 25:
            _context.next = 27;
            return __webpack_require__.e(/* import() */ 6753).then(__webpack_require__.bind(__webpack_require__, 16753));
          case 27:
            filesObj['tests/MyToken_test.sol'] = _context.sent["default"];
          case 28:
            return _context.abrupt("return", filesObj);
          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;

/***/ }),

/***/ 66249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _wizard = __webpack_require__(93712);
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(opts) {
    var filesObj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (opts) {
              _wizard.erc721.defaults.mintable = opts.mintable;
              _wizard.erc721.defaults.burnable = opts.burnable;
              _wizard.erc721.defaults.pausable = opts.pausable;
            }
            _context.t0 = _wizard.erc721.print(Object.assign({}, _wizard.erc721.defaults, {
              upgradeable: opts && opts.upgradeable ? opts.upgradeable : false
            }));
            _context.next = 4;
            return __webpack_require__.e(/* import() */ 8731).then(__webpack_require__.bind(__webpack_require__, 68731));
          case 4:
            _context.t1 = _context.sent["default"];
            _context.next = 7;
            return __webpack_require__.e(/* import() */ 8725).then(__webpack_require__.bind(__webpack_require__, 8725));
          case 7:
            _context.t2 = _context.sent["default"];
            _context.next = 10;
            return __webpack_require__.e(/* import() */ 3684).then(__webpack_require__.bind(__webpack_require__, 33684));
          case 10:
            _context.t3 = _context.sent["default"];
            _context.next = 13;
            return __webpack_require__.e(/* import() */ 6738).then(__webpack_require__.bind(__webpack_require__, 86738));
          case 13:
            _context.t4 = _context.sent["default"];
            _context.next = 16;
            return __webpack_require__.e(/* import() */ 3797).then(__webpack_require__.bind(__webpack_require__, 83797));
          case 16:
            _context.t5 = _context.sent["default"];
            filesObj = {
              'contracts/MyToken.sol': _context.t0,
              'scripts/deploy_with_ethers.ts': _context.t1,
              'scripts/deploy_with_web3.ts': _context.t2,
              'scripts/ethers-lib.ts': _context.t3,
              'scripts/web3-lib.ts': _context.t4,
              '.prettierrc.json': _context.t5
            };
            if (!(!opts || opts.upgradeable === undefined || !opts.upgradeable)) {
              _context.next = 28;
              break;
            }
            if (!_wizard.erc721.defaults.mintable) {
              _context.next = 25;
              break;
            }
            _context.next = 22;
            return __webpack_require__.e(/* import() */ 3974).then(__webpack_require__.bind(__webpack_require__, 53974));
          case 22:
            filesObj['tests/MyToken_test.sol'] = _context.sent["default"];
            _context.next = 28;
            break;
          case 25:
            _context.next = 27;
            return __webpack_require__.e(/* import() */ 8443).then(__webpack_require__.bind(__webpack_require__, 18443));
          case 27:
            filesObj['tests/MyToken_test.sol'] = _context.sent["default"];
          case 28:
            return _context.abrupt("return", filesObj);
          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports["default"] = _default;

/***/ }),

/***/ 40369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 7757).then(__webpack_require__.bind(__webpack_require__, 47757));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 9491).then(__webpack_require__.bind(__webpack_require__, 29491));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 253).then(__webpack_require__.bind(__webpack_require__, 60253));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 7852).then(__webpack_require__.bind(__webpack_require__, 47852));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 298).then(__webpack_require__.bind(__webpack_require__, 10298));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 5533).then(__webpack_require__.bind(__webpack_require__, 65533));
        case 17:
          _context.t5 = _context.sent["default"];
          return _context.abrupt("return", {
            'contracts/HelloWorld.sol': _context.t0,
            'scripts/deploy_with_ethers.ts': _context.t1,
            'scripts/deploy_with_web3.ts': _context.t2,
            'scripts/ethers-lib.ts': _context.t3,
            'scripts/web3-lib.ts': _context.t4,
            '.prettierrc.json': _context.t5
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 51526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 7973).then(__webpack_require__.bind(__webpack_require__, 57973));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 5312).then(__webpack_require__.bind(__webpack_require__, 75312));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 9694).then(__webpack_require__.bind(__webpack_require__, 49694));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 9334).then(__webpack_require__.bind(__webpack_require__, 29334));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 8024).then(__webpack_require__.bind(__webpack_require__, 58024));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 6661).then(__webpack_require__.bind(__webpack_require__, 56661));
        case 17:
          _context.t5 = _context.sent["default"];
          _context.next = 20;
          return __webpack_require__.e(/* import() */ 491).then(__webpack_require__.bind(__webpack_require__, 50491));
        case 20:
          _context.t6 = _context.sent["default"];
          _context.next = 23;
          return __webpack_require__.e(/* import() */ 8161).then(__webpack_require__.bind(__webpack_require__, 98161));
        case 23:
          _context.t7 = _context.sent["default"];
          _context.next = 26;
          return __webpack_require__.e(/* import() */ 4122).then(__webpack_require__.bind(__webpack_require__, 24122));
        case 26:
          _context.t8 = _context.sent["default"];
          _context.next = 29;
          return __webpack_require__.e(/* import() */ 7310).then(__webpack_require__.bind(__webpack_require__, 67310));
        case 29:
          _context.t9 = _context.sent["default"];
          _context.next = 32;
          return __webpack_require__.e(/* import() */ 5644).then(__webpack_require__.bind(__webpack_require__, 95644));
        case 32:
          _context.t10 = _context.sent["default"];
          return _context.abrupt("return", {
            'contracts/1_Storage.sol': _context.t0,
            'contracts/2_Owner.sol': _context.t1,
            'contracts/3_Ballot.sol': _context.t2,
            'scripts/deploy_with_ethers.ts': _context.t3,
            'scripts/deploy_with_web3.ts': _context.t4,
            'scripts/ethers-lib.ts': _context.t5,
            'scripts/web3-lib.ts': _context.t6,
            'tests/Ballot_test.sol': _context.t7,
            'tests/storage.test.js': _context.t8,
            'README.txt': _context.t9,
            '.prettierrc.json': _context.t10
          });
        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 25132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 8982).then(__webpack_require__.bind(__webpack_require__, 98982));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 5551).then(__webpack_require__.bind(__webpack_require__, 85551));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 3254).then(__webpack_require__.bind(__webpack_require__, 73254));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 7953).then(__webpack_require__.bind(__webpack_require__, 47953));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 5435).then(__webpack_require__.bind(__webpack_require__, 15435));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 993).then(__webpack_require__.bind(__webpack_require__, 40993));
        case 17:
          _context.t5 = _context.sent["default"];
          _context.next = 20;
          return __webpack_require__.e(/* import() */ 4091).then(__webpack_require__.bind(__webpack_require__, 84091));
        case 20:
          _context.t6 = _context.sent["default"];
          _context.next = 23;
          return __webpack_require__.e(/* import() */ 6748).then(__webpack_require__.bind(__webpack_require__, 36748));
        case 23:
          _context.t7 = _context.sent["default"];
          _context.next = 26;
          return __webpack_require__.e(/* import() */ 7071).then(__webpack_require__.bind(__webpack_require__, 17071));
        case 26:
          _context.t8 = _context.sent["default"];
          _context.next = 29;
          return __webpack_require__.e(/* import() */ 5010).then(__webpack_require__.bind(__webpack_require__, 45010));
        case 29:
          _context.t9 = _context.sent["default"];
          _context.next = 32;
          return __webpack_require__.e(/* import() */ 2226).then(__webpack_require__.bind(__webpack_require__, 72226));
        case 32:
          _context.t10 = _context.sent["default"];
          _context.next = 35;
          return __webpack_require__.e(/* import() */ 3389).then(__webpack_require__.bind(__webpack_require__, 73389));
        case 35:
          _context.t11 = _context.sent["default"];
          return _context.abrupt("return", {
            'circuits/rln.circom': _context.t0,
            'circuits/utils.circom': _context.t1,
            'circuits/withdraw.circom': _context.t2,
            'scripts/groth16/groth16_trusted_setup.ts': _context.t3,
            'scripts/groth16/groth16_zkproof.ts': _context.t4,
            'scripts/plonk/plonk_trusted_setup.ts': _context.t5,
            'scripts/plonk/plonk_zkproof.ts': _context.t6,
            'templates/groth16_verifier.sol.ejs': _context.t7,
            'templates/plonk_verifier.sol.ejs': _context.t8,
            'LICENSE-APACHE': _context.t9,
            'LICENSE-MIT': _context.t10,
            'README.md': _context.t11
          });
        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 85010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 674).then(__webpack_require__.bind(__webpack_require__, 30674));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 7626).then(__webpack_require__.bind(__webpack_require__, 67626));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 8112).then(__webpack_require__.bind(__webpack_require__, 68112));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 8579).then(__webpack_require__.bind(__webpack_require__, 88579));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 4749).then(__webpack_require__.bind(__webpack_require__, 94749));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 3067).then(__webpack_require__.bind(__webpack_require__, 73067));
        case 17:
          _context.t5 = _context.sent["default"];
          _context.next = 20;
          return __webpack_require__.e(/* import() */ 7589).then(__webpack_require__.bind(__webpack_require__, 77589));
        case 20:
          _context.t6 = _context.sent["default"];
          _context.next = 23;
          return __webpack_require__.e(/* import() */ 2838).then(__webpack_require__.bind(__webpack_require__, 52838));
        case 23:
          _context.t7 = _context.sent["default"];
          _context.next = 26;
          return __webpack_require__.e(/* import() */ 3085).then(__webpack_require__.bind(__webpack_require__, 3085));
        case 26:
          _context.t8 = _context.sent["default"];
          _context.next = 29;
          return __webpack_require__.e(/* import() */ 7327).then(__webpack_require__.bind(__webpack_require__, 27327));
        case 29:
          _context.t9 = _context.sent["default"];
          return _context.abrupt("return", {
            'circuits/semaphore.circom': _context.t0,
            'circuits/tree.circom': _context.t1,
            'circuits/simple.circom': _context.t2,
            'scripts/groth16/groth16_trusted_setup.ts': _context.t3,
            'scripts/groth16/groth16_zkproof.ts': _context.t4,
            'scripts/plonk/plonk_trusted_setup.ts': _context.t5,
            'scripts/plonk/plonk_zkproof.ts': _context.t6,
            'templates/groth16_verifier.sol.ejs': _context.t7,
            'templates/plonk_verifier.sol.ejs': _context.t8,
            'README.md': _context.t9
          });
        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 26932:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(86903);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(49482));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(3282));
var _default = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 7376).then(__webpack_require__.bind(__webpack_require__, 47376));
        case 2:
          _context.t0 = _context.sent["default"];
          _context.next = 5;
          return __webpack_require__.e(/* import() */ 6272).then(__webpack_require__.bind(__webpack_require__, 66272));
        case 5:
          _context.t1 = _context.sent["default"];
          _context.next = 8;
          return __webpack_require__.e(/* import() */ 6334).then(__webpack_require__.bind(__webpack_require__, 26334));
        case 8:
          _context.t2 = _context.sent["default"];
          _context.next = 11;
          return __webpack_require__.e(/* import() */ 4787).then(__webpack_require__.bind(__webpack_require__, 44787));
        case 11:
          _context.t3 = _context.sent["default"];
          _context.next = 14;
          return __webpack_require__.e(/* import() */ 5957).then(__webpack_require__.bind(__webpack_require__, 65957));
        case 14:
          _context.t4 = _context.sent["default"];
          _context.next = 17;
          return __webpack_require__.e(/* import() */ 6137).then(__webpack_require__.bind(__webpack_require__, 96137));
        case 17:
          _context.t5 = _context.sent["default"];
          _context.next = 20;
          return __webpack_require__.e(/* import() */ 6254).then(__webpack_require__.bind(__webpack_require__, 26254));
        case 20:
          _context.t6 = _context.sent["default"];
          return _context.abrupt("return", {
            'contracts/SampleERC20.sol': _context.t0,
            'scripts/deploy_with_ethers.ts': _context.t1,
            'scripts/deploy_with_web3.ts': _context.t2,
            'scripts/ethers-lib.ts': _context.t3,
            'scripts/web3-lib.ts': _context.t4,
            'tests/SampleERC20_test.sol': _context.t5,
            '.prettierrc.json': _context.t6
          });
        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
exports["default"] = _default;

/***/ }),

/***/ 98723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 12024:
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4121], () => (__webpack_exec__(85747)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.plugin-etherscan.1727332389869.js.map