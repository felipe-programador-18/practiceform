"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usereff",{

/***/ "./pages/usereff.js":
/*!**************************!*\
  !*** ./pages/usereff.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// uncontrolled form\n//lot interesting when using useref my page change of state of undefied!!\nvar createAnoEx = function() {\n    _s();\n    var reffered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), show = ref1[0], setshow = ref1[1];\n    var onHidevalue = function() {\n        var ref;\n        console.log(reffered === null || reffered === void 0 ? void 0 : (ref = reffered.current) === null || ref === void 0 ? void 0 : ref.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pratice about useRef!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"uncontrolled!\",\n                ref: reffered\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-red-500\",\n                onClick: onHidevalue,\n                children: \"Get value \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 15,\n                columnNumber: 8\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-400\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 16,\n                columnNumber: 8\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(createAnoEx, \"PDMwu3WlJrnUjxrSsDVOw07ZijM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAnoEx);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyZWZmLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTRDOztBQUM1QyxvQkFBb0I7QUFDcEIseUVBQXlFO0FBQ3pFLElBQU1HLFdBQVcsR0FBRyxXQUFNOztJQUN2QixJQUFNQyxRQUFRLEdBQUdILDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQXdCQyxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0JHLElBQUksR0FBYUgsSUFBVSxHQUF2QixFQUFFSSxPQUFPLEdBQUlKLElBQVUsR0FBZDtJQUVwQixJQUFNSyxXQUFXLEdBQUcsV0FBTTtZQUNiSCxHQUFpQjtRQUE3QkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsYUFBUkEsUUFBUSxXQUFTLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsR0FBaUIsR0FBakJBLFFBQVEsQ0FBRU0sT0FBTyxjQUFqQk4sR0FBaUIsY0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFTyxLQUFLLENBQUM7S0FDeEM7SUFDRyxxQkFBTzs7MEJBQ0wsOERBQUNDLElBQUU7MEJBQUMsd0JBQXNCOzs7OztxQkFBSztZQUM3QlAsSUFBSSxrQkFBSSw4REFBQ1EsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLFdBQVcsRUFBQyxlQUFlO2dCQUFDQyxHQUFHLEVBQUVaLFFBQVE7Ozs7O3FCQUFJOzBCQUV6RSw4REFBQ2EsUUFBTTtnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7Z0JBQUNDLE9BQU8sRUFBRVosV0FBVzswQkFBRyxZQUFVOzs7OztxQkFBUzswQkFDekUsOERBQUNVLFFBQU07Z0JBQUNDLFNBQVMsRUFBQyxhQUFhO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU9iLE9BQU8sQ0FBRWMsU0FBQUEsSUFBSTsrQkFBSSxDQUFDQSxJQUFJO3FCQUFBLENBQUU7aUJBQUE7MEJBQUksWUFBVTs7Ozs7cUJBQVM7O29CQUMvRixDQUNGO0NBQ0o7R0FmS2pCLFdBQVc7QUFpQmpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJlZmYuanM/ZDU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG4vLyB1bmNvbnRyb2xsZWQgZm9ybVxyXG4vL2xvdCBpbnRlcmVzdGluZyB3aGVuIHVzaW5nIHVzZXJlZiBteSBwYWdlIGNoYW5nZSBvZiBzdGF0ZSBvZiB1bmRlZmllZCEhXHJcbmNvbnN0IGNyZWF0ZUFub0V4ID0gKCkgPT4ge1xyXG4gICBjb25zdCByZWZmZXJlZCA9IHVzZVJlZih0cnVlKVxyXG4gICBjb25zdCBbc2hvdywgc2V0c2hvd10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICBjb25zdCBvbkhpZGV2YWx1ZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlZmZlcmVkPy5jdXJyZW50Py52YWx1ZSlcclxufVxyXG4gICAgcmV0dXJuKDw+XHJcbiAgICAgIDxoMT5QcmF0aWNlIGFib3V0IHVzZVJlZiEhPC9oMT5cclxuICAgICAgIHtzaG93ICYmIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0ndW5jb250cm9sbGVkIScgcmVmPXtyZWZmZXJlZH0gLz4gfVxyXG4gICAgICAgXHJcbiAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctcmVkLTUwMCcgb25DbGljaz17b25IaWRldmFsdWV9ID5HZXQgdmFsdWUgPC9idXR0b24+XHJcbiAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAnIG9uQ2xpY2s9eygpID0+ICBzZXRzaG93KCBjdXJyID0+ICFjdXJyICkgfSA+SGlkZSB2YWx1ZTwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFub0V4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJjcmVhdGVBbm9FeCIsInJlZmZlcmVkIiwic2hvdyIsInNldHNob3ciLCJvbkhpZGV2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwidmFsdWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImN1cnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usereff.js\n");

/***/ })

});