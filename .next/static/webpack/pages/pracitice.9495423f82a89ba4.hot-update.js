"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pracitice",{

/***/ "./pages/pracitice.js":
/*!****************************!*\
  !*** ./pages/pracitice.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    name: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Preencha o campo\"),\n    email: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Prencha o campo\").email(\"Por favor preencha o campo\")\n});\nvar uf = [\n    \"RS,\",\n    \"SP\",\n    \"SC\",\n    \"RJ\"\n];\nvar ManagAll = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\",\n        subscribe: false\n    }), form = ref[0], setform = ref[1];\n    var ClickHere = function() {\n        console.log(form);\n    };\n    var GetMore = function(evt) {\n        var Form = evt.target.name;\n        var value = evt.target.type === \"checkbox\" ? evt.target.checked : evt.target.value;\n        setform(function(curr) {\n            return _objectSpread({}, curr, _defineProperty({}, Form, value));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"text-center bg-yellow-300\",\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: GetMore\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 44,\n                columnNumber: 15\n            }, _this),\n            \"E-mail\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"text-center bg-red-800\",\n                type: \"email\",\n                name: \"email\",\n                value: form.email,\n                onChange: GetMore\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 46,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                name: \"subscribe\",\n                value: form.subscribe,\n                onChange: GetMore\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 48,\n                columnNumber: 15\n            }, _this),\n            form.subscribe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Thanks for your signature !!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 49,\n                columnNumber: 34\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"uf\",\n                onChange: GetMore,\n                value: form.uf,\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        children: \" Select your City:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                        lineNumber: 51,\n                        columnNumber: 69\n                    }, _this),\n                    uf.map(function(uf1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: uf1,\n                            children: [\n                                uf1,\n                                \" \"\n                            ]\n                        }, uf1, true, {\n                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 51,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ClickHere,\n                children: \"Get All\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setform(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \" Hide all\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ManagAll, \"R1EOPmBRjkfVuoowKewFN/unAdk=\");\n_c = ManagAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManagAll);\nvar _c;\n$RefreshReg$(_c, \"ManagAll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRVosR0FBRTs7Z0NBQWFBLEdBQUU7Z0NBQUMsR0FBQzs7MkJBQVZBLEdBQUU7Ozs7a0NBQWlCO3FCQUFBLENBQzVDOzs7Ozs7cUJBQ0k7MEJBR25CLDhEQUFDdUIsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFbkIsU0FBUzswQkFBRyxTQUFPOzs7OztxQkFBUzswQkFDN0MsOERBQUNrQixRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQUtwQixPQUFPLENBQUNXLFNBQUFBLElBQUk7K0JBQUksQ0FBQ0EsSUFBSTtxQkFBQSxDQUFDO2lCQUFBOzBCQUFJLFdBQVM7Ozs7O3FCQUFTOztvQkFFaEUsQ0FBQztDQUNOO0dBakRLZCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtRGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJhY2l0aWNlLmpzPzY3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuXHJcblxyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlByZWVuY2hhIG8gY2FtcG9cIiksXHJcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUHJlbmNoYSBvIGNhbXBvXCIpLmVtYWlsKFwiUG9yIGZhdm9yIHByZWVuY2hhIG8gY2FtcG9cIilcclxufSlcclxuXHJcbmNvbnN0IHVmID0gW1wiUlMsXCIsJ1NQJywgJ1NDJywnUkonXVxyXG5cclxuY29uc3QgTWFuYWdBbGwgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtmb3JtLCBzZXRmb3JtIF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOicnLCBlbWFpbDonJywgdWY6XCJcIiwgc3Vic2NyaWJlOiBmYWxzZSAgIFxyXG4gICB9KVxyXG4gICAgICAgICAgIFxyXG4gICBjb25zdCBDbGlja0hlcmUgPSAoKSA9PiB7XHJcbiAgICAgY29uc29sZS5sb2coZm9ybSlcclxuICAgfVxyXG4gICBcclxuICAgY29uc3QgR2V0TW9yZSA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCBGb3JtID0gZXZ0LnRhcmdldC5uYW1lXHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gZXZ0LnRhcmdldC5jaGVja2VkIDogZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgc2V0Zm9ybShjdXJyID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jdXJyLFxyXG4gICAgICAgICAgICBbRm9ybV06IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICB9XHJcbiAgICAgICBcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICBcclxuICAgICAgIFxyXG4gICB9LFtdKVxyXG4gICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBiZy15ZWxsb3ctMzAwJyB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyB2YWx1ZT17Zm9ybS5uYW1lfSBvbkNoYW5nZT17R2V0TW9yZX0gIC8+XHJcbiAgICAgICAgICAgICAgRS1tYWlsXHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgYmctcmVkLTgwMCcgdHlwZT0nZW1haWwnIG5hbWU9J2VtYWlsJyB2YWx1ZT17Zm9ybS5lbWFpbH0gIG9uQ2hhbmdlPXtHZXRNb3JlfSAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgbmFtZT0nc3Vic2NyaWJlJyB2YWx1ZT17Zm9ybS5zdWJzY3JpYmV9IG9uQ2hhbmdlPXtHZXRNb3JlfSAgLz5cclxuICAgICAgICAgICAgICB7Zm9ybS5zdWJzY3JpYmUgJiYgPHA+VGhhbmtzIGZvciB5b3VyIHNpZ25hdHVyZSAhISE8L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9J3VmJyBvbkNoYW5nZT17R2V0TW9yZX0gdmFsdWU9e2Zvcm0udWZ9PiA8b3B0aW9uPiBTZWxlY3QgeW91ciBDaXR5Ojwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge3VmLm1hcCh1ZiA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt1Zn0ga2V5PXt1Zn0gPnt1Zn0gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtDbGlja0hlcmV9ID5HZXQgQWxsPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0Zm9ybShjdXJyID0+ICFjdXJyKX0gID4gSGlkZSBhbGw8L2J1dHRvbj5cclxuICAgXHJcbiAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdBbGwiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInl1cCIsInNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1ZiIsIk1hbmFnQWxsIiwic3Vic2NyaWJlIiwiZm9ybSIsInNldGZvcm0iLCJDbGlja0hlcmUiLCJjb25zb2xlIiwibG9nIiwiR2V0TW9yZSIsImV2dCIsIkZvcm0iLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJjaGVja2VkIiwiY3VyciIsImlucHV0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJwIiwic2VsZWN0Iiwib3B0aW9uIiwibWFwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pracitice.js\n");

/***/ })

});