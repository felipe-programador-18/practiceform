"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/unconpra",{

/***/ "./pages/unconpra.js":
/*!***************************!*\
  !*** ./pages/unconpra.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar practiForm = function() {\n    _s();\n    var reffere = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    var _useState = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState, 2), show = _useState[0], setshow = _useState[1];\n    var getState = function() {\n        console.log(reffere.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"training about form uncontrolled!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\unconpra.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"uncontrolled\",\n                ref: reffere\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\unconpra.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getState,\n                children: \"Get value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\unconpra.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(practiForm, \"hjsCVU5T96kxTRmsZmtAjEQjZI4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (practiForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91bmNvbnByYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDLElBQU1HLFVBQVUsR0FBRyxXQUFLOztJQUN2QixJQUFNQyxPQUFPLEdBQUdILDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzVCLElBQXdCQyxTQUFRLGtCQUFSQSwyQ0FBUSxNQUF6QkcsSUFBSSxHQUFhSCxTQUFRLEdBQXJCLEVBQUVJLE9BQU8sR0FBSUosU0FBUSxHQUFaO0lBQ3BCLElBQU1LLFFBQVEsR0FBRyxXQUFLO1FBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDTSxPQUFPLENBQUNDLEtBQUssQ0FBQztLQUNyQztJQUVELHFCQUFPOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxvQ0FBa0M7Ozs7O3FCQUFLOzBCQUMzQyw4REFBQ0MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLFdBQVcsRUFBQyxjQUFjO2dCQUFDQyxHQUFHLEVBQUVaLE9BQU87Ozs7O3FCQUFJOzBCQUM5RCw4REFBQ2EsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFWCxRQUFROzBCQUFFLFdBQVM7Ozs7O3FCQUFTOztvQkFDakQsQ0FBQztDQUdKO0dBZEtKLFVBQVU7QUFnQmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VuY29ucHJhLmpzPzc3YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBwcmFjdGlGb3JtID0gKCkgPT57XHJcbiBjb25zdCByZWZmZXJlID0gdXNlUmVmKHRydWUpXHJcbiBjb25zdCBbc2hvdywgc2V0c2hvd10gPSB1c2VTdGF0ZVxyXG4gY29uc3QgZ2V0U3RhdGUgPSAoKSA9PntcclxuICAgICBjb25zb2xlLmxvZyhyZWZmZXJlLmN1cnJlbnQudmFsdWUpXHJcbiB9XHJcblxyXG4gcmV0dXJuKDw+XHJcbiAgICAgICAgPGgxPnRyYWluaW5nIGFib3V0IGZvcm0gdW5jb250cm9sbGVkISE8L2gxPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0ndW5jb250cm9sbGVkJyByZWY9e3JlZmZlcmV9IC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRTdGF0ZX0+R2V0IHZhbHVlPC9idXR0b24+XHJcbiA8Lz4pXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJhY3RpRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJhY3RpRm9ybSIsInJlZmZlcmUiLCJzaG93Iiwic2V0c2hvdyIsImdldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/unconpra.js\n");

/***/ })

});