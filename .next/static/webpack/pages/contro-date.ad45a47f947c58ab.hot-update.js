"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contro-date",{

/***/ "./pages/contro-date.js":
/*!******************************!*\
  !*** ./pages/contro-date.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n//practice more little bit about form controlled\nvar uf = [\n    \"RS\",\n    \"SC\",\n    \"RJ\",\n    \"SP\"\n];\nvar controlleFormDate = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\",\n        subscribe: false\n    }), form = ref[0], setform = ref[1];\n    var Onchange = function(evt) {\n        var Formform = evt.target.value;\n        //this i did to verify checkbox\n        var value = evt.target.type === \"checkbox\" ? evt.target.checked : evt.target.value;\n        setform(function(evoq) {\n            return _objectSpread({}, evoq, _defineProperty({}, Formform, value));\n        });\n    };\n    var getAllValue = function() {\n        console.log(form);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    \"Name:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-300\",\n                        type: \"text\",\n                        placeholder: \"Your Name:\",\n                        value: form.name,\n                        onChange: Onchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, _this),\n                    \"E-mail:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-300\",\n                        type: \"email\",\n                        placeholder: \"Your Email:\",\n                        onChange: Onchange,\n                        value: form.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, _this),\n                    \"Wish receive either week news.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        name: \"submit\",\n                        value: form.subscribe,\n                        onChange: Onchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, _this),\n                    form.subscribe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Thanks, for agree in share your e-mail with us! Every week, send you email, trendings, insight about world of programmers!!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 43,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        placeholder: \"State\",\n                        value: form.uf,\n                        onChange: Onchange,\n                        children: [\n                            \"     \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: \" Select your state. \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                                lineNumber: 47,\n                                columnNumber: 77\n                            }, _this),\n                            uf.map(function(uf1) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: uf1,\n                                    children: uf1\n                                }, uf1, false, {\n                                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 23\n                                }, _this1);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-800\",\n                        onClick: getAllValue,\n                        children: \"Send Value!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 55,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-900\",\n                        onClick: function() {\n                            return setform(function(curr) {\n                                return !curr;\n                            });\n                        },\n                        children: \"Hide Value!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: [\n                            \" \",\n                            JSON.stringify(form, null, 2),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 58,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlleFormDate, \"eGsldtCCOTiMgf9PzHzp2FKlORA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlleFormDate);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ1ksUUFBTTt3QkFBQ1IsU0FBUyxFQUFDLGFBQWE7d0JBQUVTLE9BQU8sRUFBRTttQ0FBS3RCLE9BQU8sQ0FBQ3VCLFNBQUFBLElBQUk7dUNBQUksQ0FBQ0EsSUFBSTs2QkFBQSxDQUFDO3lCQUFBO2tDQUFLLGFBQVc7Ozs7OzZCQUFTO2tDQUU3Riw4REFBQ0MsS0FBRzs7NEJBQUMsR0FBQzs0QkFBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUMzQixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs0QkFBQyxHQUFDOzs7Ozs7NkJBQU07Ozs7OztxQkFFdkM7O29CQUNMLENBQUM7Q0FFTDtHQXhES0osaUJBQWlCO0FBMkR2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyby1kYXRlLmpzPzM2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG4vL3ByYWN0aWNlIG1vcmUgbGl0dGxlIGJpdCBhYm91dCBmb3JtIGNvbnRyb2xsZWRcclxuXHJcbmNvbnN0IHVmID0gWydSUycsJ1NDJywnUkonLCdTUCddXHJcbiBcclxuY29uc3QgY29udHJvbGxlRm9ybURhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldGZvcm1dID0gdXNlU3RhdGUoeyBuYW1lOicnICwgZW1haWw6JycsIHVmOicnLCBzdWJzY3JpYmU6IGZhbHNlIH0pXHJcbiBcclxuICBjb25zdCBPbmNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgY29uc3QgRm9ybWZvcm0gPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgXHJcbiAgLy90aGlzIGkgZGlkIHRvIHZlcmlmeSBjaGVja2JveFxyXG4gIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZXZ0LnRhcmdldC5jaGVja2VkIDogZXZ0LnRhcmdldC52YWx1ZVxyXG5cclxuICAgIHNldGZvcm0oIGV2b3EgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmV2b3EsXHJcbiAgICAgICAgICAgIFtGb3JtZm9ybV06IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbiAgfSAgXHJcblxyXG5cclxuICBjb25zdCBnZXRBbGxWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybSlcclxuICB9XHJcblxyXG4gIHJldHVybig8PiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInID5cclxuXHJcbiAgICBOYW1lOiAgXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lPSdiZy1ncmF5LTMwMCcgdHlwZT17J3RleHQnfSBwbGFjZWhvbGRlcj0nWW91ciBOYW1lOicgdmFsdWU9e2Zvcm0ubmFtZX0gb25DaGFuZ2U9e09uY2hhbmdlfSAvPlxyXG4gICAgRS1tYWlsOlxyXG4gICAgPGlucHV0IGNsYXNzTmFtZT0nYmctZ3JheS0zMDAnICB0eXBlPXsnZW1haWwnfSBwbGFjZWhvbGRlcj0nWW91ciBFbWFpbDonIG9uQ2hhbmdlPXtPbmNoYW5nZX0gdmFsdWU9e2Zvcm0uZW1haWx9IC8+XHJcbiAgICBXaXNoIHJlY2VpdmUgZWl0aGVyIHdlZWsgbmV3cy5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT17J2NoZWNrYm94J30gXHJcbiAgICBuYW1lPSdzdWJtaXQnXHJcbiAgICB2YWx1ZT17Zm9ybS5zdWJzY3JpYmV9XHJcbiAgICAgb25DaGFuZ2U9e09uY2hhbmdlfSAgLz5cclxuICAgIFxyXG4gICAge2Zvcm0uc3Vic2NyaWJlICYmIFxyXG4gICAgIDxwPiBUaGFua3MsIGZvciBhZ3JlZSBpbiBzaGFyZSB5b3VyIGUtbWFpbCB3aXRoIHVzISBFdmVyeSB3ZWVrLCBzZW5kIHlvdSBlbWFpbCwgdHJlbmRpbmdzLCBpbnNpZ2h0IGFib3V0IHdvcmxkIG9mIHByb2dyYW1tZXJzISFcclxuICAgICA8L3A+fVxyXG5cclxuXHJcbiAgICA8c2VsZWN0IHBsYWNlaG9sZGVyPSdTdGF0ZScgIHZhbHVlPXtmb3JtLnVmfSAgb25DaGFuZ2U9e09uY2hhbmdlfSA+ICAgICA8b3B0aW9uPiBTZWxlY3QgeW91ciBzdGF0ZS4gPC9vcHRpb24+IFxyXG4gICAgICAgIHt1Zi5tYXAodWYgPT4gPG9wdGlvbiBrZXk9e3VmfSB2YWx1ZT17dWZ9ID4gXHJcbiAgICAgICAge3VmfSBcclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICApfSAgICAgXHJcbiAgICAgICAgXHJcbiAgICA8L3NlbGVjdD5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctcmVkLTgwMCcgb25DbGljaz17Z2V0QWxsVmFsdWV9ICA+U2VuZCBWYWx1ZSE8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTkwMCcgIG9uQ2xpY2s9eygpPT4gc2V0Zm9ybShjdXJyID0+ICFjdXJyKSB9ICA+SGlkZSBWYWx1ZSE8L2J1dHRvbj5cclxuICAgICBcclxuICAgICA8cHJlPiB7SlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9IDwvcHJlPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgPC8+KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZUZvcm1EYXRlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1ZiIsImNvbnRyb2xsZUZvcm1EYXRlIiwibmFtZSIsImVtYWlsIiwic3Vic2NyaWJlIiwiZm9ybSIsInNldGZvcm0iLCJPbmNoYW5nZSIsImV2dCIsIkZvcm1mb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsImV2b3EiLCJnZXRBbGxWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwIiwic2VsZWN0Iiwib3B0aW9uIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contro-date.js\n");

/***/ })

});