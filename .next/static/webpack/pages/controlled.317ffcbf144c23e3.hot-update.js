"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/controlled",{

/***/ "./pages/controlled.js":
/*!*****************************!*\
  !*** ./pages/controlled.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar controForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setvaleu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getState = function() {\n        console.log(value);\n    };\n    // inside functions i have passed it setvalue to get event of input!!\n    var onChange = function(event) {\n        setvaleu(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"training about form uncontrolled!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Controlled\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 16,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getState,\n                children: \"Get value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"hide value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this),\n            value,\n            value === \"\"\n        ]\n    }, void 0, true);\n};\n_s(controForm, \"THPOt514uOZyMZGnEhMZbkuOIaE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQW9DOztBQUVwQyxJQUFNRSxVQUFVLEdBQUcsV0FBTTs7SUFDdEIsSUFBMEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFIekMsS0FHZSxHQUFjQSxHQUFZLEdBQTFCLEVBSGYsUUFHeUIsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QixJQUF3QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUp6QyxJQUljLEdBQWFBLElBQWMsR0FBM0IsRUFKZCxPQUl1QixHQUFJQSxJQUFjLEdBQWxCO0lBQ25CLElBQU1NLFFBQVEsR0FBRyxXQUFLO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0tBQ25CO0lBQ0QscUVBQXFFO0lBQ3JFLElBQU1PLFFBQVEsR0FBR0MsU0FBQUEsS0FBSyxFQUFJO1FBQ3hCUCxRQUFRLENBQUNPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVCxLQUFLLENBQUM7S0FDN0I7SUFFRCxxQkFBTzs7MEJBQ0YsOERBQUNVLElBQUU7MEJBQUMsb0NBQWtDOzs7OztxQkFBSztZQUMxQ1IsSUFBSSxrQkFBSSw4REFBQ1MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLFdBQVcsRUFBQyxZQUFZO2dCQUFDYixLQUFLLEVBQUVBLEtBQUs7Z0JBQUdPLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUs7MEJBQzNGLDhEQUFDTyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVYLFFBQVE7MEJBQUUsV0FBUzs7Ozs7cUJBQVM7MEJBQzdDLDhEQUFDVSxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQUtaLE9BQU8sQ0FBQ2EsU0FBQUEsSUFBSTsrQkFBSSxDQUFDQSxJQUFJO3FCQUFBLENBQUM7aUJBQUE7MEJBQUUsWUFBVTs7Ozs7cUJBQVM7WUFDaEVoQixLQUFLO1lBQ0xBLEtBQUssS0FBSyxFQUFFOztvQkFDakIsQ0FBQztDQUNKO0dBbkJLRCxVQUFVO0FBcUJoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cm9sbGVkLmpzPzkzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBjb250cm9Gb3JtID0gKCkgPT4ge1xyXG4gICBjb25zdCBbdmFsdWUsIHNldHZhbGV1XSA9IHVzZVN0YXRlKCcnKVxyXG4gICBjb25zdCBbc2hvdywgc2V0c2hvd10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PntcclxuICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgfVxyXG4gICAvLyBpbnNpZGUgZnVuY3Rpb25zIGkgaGF2ZSBwYXNzZWQgaXQgc2V0dmFsdWUgdG8gZ2V0IGV2ZW50IG9mIGlucHV0ISFcclxuICAgY29uc3Qgb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgc2V0dmFsZXUoZXZlbnQudGFyZ2V0LnZhbHVlKSAgIFxyXG4gICB9IFxyXG5cclxuICAgcmV0dXJuKDw+XHJcbiAgICAgICAgPGgxPnRyYWluaW5nIGFib3V0IGZvcm0gdW5jb250cm9sbGVkISE8L2gxPlxyXG4gICAgICAgeyBzaG93ICYmIDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQ29udHJvbGxlZCcgdmFsdWU9e3ZhbHVlfSAgb25DaGFuZ2U9e29uQ2hhbmdlfSAgLz4gfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0U3RhdGV9PkdldCB2YWx1ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXRzaG93KGN1cnIgPT4gIWN1cnIpfT5oaWRlIHZhbHVlPC9idXR0b24+XHJcbiAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgIHt2YWx1ZSA9PT0gJyd9XHJcbiA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyb0Zvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnRyb0Zvcm0iLCJ2YWx1ZSIsInNldHZhbGV1Iiwic2hvdyIsInNldHNob3ciLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/controlled.js\n");

/***/ })

});