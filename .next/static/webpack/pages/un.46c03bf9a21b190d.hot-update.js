"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/un",{

/***/ "./pages/un.js":
/*!*********************!*\
  !*** ./pages/un.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Testing = function() {\n    _s();\n    var reffered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), showup = ref1[0], setshowup = ref1[1];\n    var Caught = function() {\n        var ref;\n        console.log(reffered === null || reffered === void 0 ? void 0 : (ref = reffered.current) === null || ref === void 0 ? void 0 : ref.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Practice more about uncontrolled form\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\un.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, _this),\n            showup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"\",\n                type: \"text\",\n                placeholder: \"Practice Uncontrolled\",\n                ref: reffered\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\un.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: Caught,\n                children: \"GetSta\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\un.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setshowup(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\un.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Testing, \"PDMwu3WlJrnUjxrSsDVOw07ZijM=\");\n_c = Testing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testing);\nvar _c;\n$RefreshReg$(_c, \"Testing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUErQzs7QUFFL0MsSUFBTUcsT0FBTyxHQUFHLFdBQUs7O0lBQ25CLElBQU1DLFFBQVEsR0FBRUYsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsSUFBMkJELElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUp2QyxNQUljLEdBQWVBLElBQVUsR0FBekIsRUFKZCxTQUl5QixHQUFJQSxJQUFVLEdBQWQ7SUFFdkIsSUFBTU0sTUFBTSxHQUFHLFdBQUs7WUFDSkgsR0FBaUI7UUFBN0JJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxRQUFRLGFBQVJBLFFBQVEsV0FBUyxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLENBQUFBLEdBQWlCLEdBQWpCQSxRQUFRLENBQUVNLE9BQU8sY0FBakJOLEdBQWlCLGNBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRU8sS0FBSyxDQUFDO0tBQ3hDO0lBR0QscUJBQU87OzBCQUNMLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsYUFBYTswQkFBRSx1Q0FBcUM7Ozs7O3FCQUFLO1lBQ25FUixNQUFNLGtCQUNSLDhEQUFDUyxPQUFLO2dCQUFDRCxTQUFTLEVBQUMsRUFBRTtnQkFBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQUVDLFdBQVcsRUFBQyx1QkFBdUI7Z0JBQUNDLEdBQUcsRUFBRWIsUUFBUTs7Ozs7cUJBQUc7MEJBRXRGLDhEQUFDYyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVaLE1BQU07MEJBQUcsUUFBTTs7Ozs7cUJBQVM7MEJBQ3pDLDhEQUFDVyxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1iLFNBQVMsQ0FBQ2MsU0FBQUEsSUFBSTsrQkFBSSxDQUFDQSxJQUFJO3FCQUFBLENBQUM7aUJBQUE7MEJBQU0sWUFBVTs7Ozs7cUJBQVM7O29CQUN6RSxDQUFDO0NBQ0w7R0FqQktqQixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUFvQmIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdW4uanM/NTZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmfSAgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXN0aW5nID0gKCkgPT57XHJcbiAgY29uc3QgcmVmZmVyZWQgPXVzZVJlZih0cnVlKVxyXG4gIGNvbnN0W3Nob3d1cCwgc2V0c2hvd3VwXSA9IHVzZVN0YXRlKClcclxuICAgIFxyXG4gIGNvbnN0IENhdWdodCA9ICgpID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZWZmZXJlZD8uY3VycmVudD8udmFsdWUpXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuKDw+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiA+UHJhY3RpY2UgbW9yZSBhYm91dCB1bmNvbnRyb2xsZWQgZm9ybTwvaDE+XHJcbiAgICAgIHsgc2hvd3VwICYmXHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJcIiB0eXBlPXsndGV4dCd9IHBsYWNlaG9sZGVyPSdQcmFjdGljZSBVbmNvbnRyb2xsZWQnIHJlZj17cmVmZmVyZWR9Lz5cclxuICAgICAgfSAgXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Q2F1Z2h0fSA+R2V0U3RhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0c2hvd3VwKGN1cnIgPT4gIWN1cnIpICB9ICA+SGlkZSBpbnB1dDwvYnV0dG9uPlxyXG4gIDwvPikgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiVGVzdGluZyIsInJlZmZlcmVkIiwic2hvd3VwIiwic2V0c2hvd3VwIiwiQ2F1Z2h0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImgxIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiY3VyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/un.js\n");

/***/ })

});