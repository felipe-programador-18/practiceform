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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar showCounter = function(param) {\n    var counter = param.counter, identifier = param.identifier;\n    _s();\n    var render = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(identifier);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        render.current = render.current + 1;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \" counter : \",\n            counter,\n            \" here inside // renders: \",\n            render.current,\n            \" \",\n            identifier,\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, _this);\n};\n_s(showCounter, \"BJfq/AdyccqagZZ0GKQ44hLJJ18=\");\nvar createInsig = function() {\n    _s1();\n    // try learning about useRef\n    var mydiv = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), counter = ref[0], setcounter = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mydiv,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Learning about useRef\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 26,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pratice more about that!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 27,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setcounter(function(old) {\n                        return old + 1;\n                    });\n                },\n                children: \"try code!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n                lineNumber: 29,\n                columnNumber: 6\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\usereff.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s1(createInsig, \"2ALGCAdI5PaWBLw1pR0xyvzlSg8=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (createInsig);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyZWZmLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXVEOztBQUV2RCxJQUFNSSxXQUFXLEdBQUcsZ0JBQTRCO1FBQXpCQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsVUFBVSxTQUFWQSxVQUFVOztJQUN6QyxJQUFNQyxNQUFNLEdBQUdOLDZDQUFNLENBQUNLLFVBQVUsQ0FBQztJQUVqQ0osZ0RBQVMsQ0FBQyxXQUFNO1FBQ2ZLLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQU8sR0FBRSxDQUFDO0tBQ2xDLENBQUM7SUFFRCxxQkFDSSw4REFBQ0MsR0FBQzs7WUFBQyxhQUFXO1lBQUNKLE9BQU87WUFBQywyQkFBeUI7WUFBQ0UsTUFBTSxDQUFDQyxPQUFPO1lBQUMsR0FBQztZQUFDRixVQUFVO1lBQUMsR0FBQzs7Ozs7O2FBQUksQ0FDckY7Q0FDRjtHQVZLRixXQUFXO0FBZWpCLElBQU1NLFdBQVcsR0FBRyxXQUFNOztJQUN6Qiw0QkFBNEI7SUFDNUIsSUFBTUMsS0FBSyxHQUFHViw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUMxQixJQUE4QkUsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQXBCMUMsT0FvQmUsR0FBZ0JBLEdBQVcsR0FBM0IsRUFwQmYsVUFvQjJCLEdBQUlBLEdBQVcsR0FBZjtJQUd2QixxQkFDQSw4REFBQ1UsS0FBRztRQUFFQyxHQUFHLEVBQUVILEtBQUs7OzBCQUNmLDhEQUFDSSxJQUFFOzBCQUFDLHVCQUFxQjs7Ozs7cUJBQUs7MEJBQzlCLDhEQUFDQyxJQUFFOzBCQUFDLDJCQUF5Qjs7Ozs7cUJBQUs7MEJBRWxDLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUc7MkJBQUtOLFVBQVUsQ0FBQ08sU0FBQUEsR0FBRzsrQkFBSUEsR0FBRyxHQUFDLENBQUM7cUJBQUEsQ0FBQztpQkFBQTswQkFBSSxZQUFVOzs7OztxQkFBUzs7Ozs7O2FBR2pFLENBQUM7Q0FDVjtJQWZLVCxXQUFXO0FBaUJqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyZWZmLmpzP2Q1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3Qgc2hvd0NvdW50ZXIgPSAoeyBjb3VudGVyLCBpZGVudGlmaWVyIH0pID0+e1xyXG4gY29uc3QgcmVuZGVyID0gdXNlUmVmKGlkZW50aWZpZXIpXHJcbiAgXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIHJlbmRlci5jdXJyZW50ID0gcmVuZGVyLmN1cnJlbnQgKzFcclxuIH0pXHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxwPiBjb3VudGVyIDoge2NvdW50ZXJ9IGhlcmUgaW5zaWRlIC8vIHJlbmRlcnM6IHtyZW5kZXIuY3VycmVudH0ge2lkZW50aWZpZXJ9IDwvcD5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUluc2lnID0gKCkgPT4ge1xyXG4gLy8gdHJ5IGxlYXJuaW5nIGFib3V0IHVzZVJlZlxyXG4gY29uc3QgbXlkaXYgPSB1c2VSZWYobnVsbClcclxuIGNvbnN0IFtjb3VudGVyLCBzZXRjb3VudGVyXSA9IHVzZVN0YXRlKDApXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxkaXYgIHJlZj17bXlkaXZ9PlxyXG4gICAgIDxoMT5MZWFybmluZyBhYm91dCB1c2VSZWY8L2gxPlxyXG4gICAgIDxoMj5QcmF0aWNlIG1vcmUgYWJvdXQgdGhhdCEhPC9oMj5cclxuXHJcbiAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCk9PiBzZXRjb3VudGVyKG9sZCA9PiBvbGQrMSkgfSA+dHJ5IGNvZGUhITwvYnV0dG9uPlxyXG4gICAgIFxyXG5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5zaWciXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNob3dDb3VudGVyIiwiY291bnRlciIsImlkZW50aWZpZXIiLCJyZW5kZXIiLCJjdXJyZW50IiwicCIsImNyZWF0ZUluc2lnIiwibXlkaXYiLCJzZXRjb3VudGVyIiwiZGl2IiwicmVmIiwiaDEiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usereff.js\n");

/***/ })

});