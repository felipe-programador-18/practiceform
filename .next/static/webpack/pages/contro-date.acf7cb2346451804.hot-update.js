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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n//practice more little bit about form controlled\nvar uf = [\n    \"RS\",\n    \"SC\",\n    \"RJ\",\n    \"SP\"\n];\nvar controlleFormDate = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\",\n        subscribe: false\n    }), form = ref[0], setform = ref[1];\n    var Onchange = function(evt) {\n        var Formform = evt.target.value;\n        //this i did to verify checkbox\n        var value = evt.target.type === \"checkbox\" ? evt.target.checked : evt.target.value;\n        setform(function(evoq) {\n            return _objectSpread({}, evoq, _defineProperty({}, Formform, value));\n        });\n    };\n    var getAllValue = function() {\n        console.log(form);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    \"Name:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-300\",\n                        type: \"text\",\n                        placeholder: \"Your Name:\",\n                        value: form.name,\n                        onChange: Onchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, _this),\n                    \"E-mail:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-300\",\n                        type: \"email\",\n                        placeholder: \"Your Email:\",\n                        onChange: Onchange,\n                        value: form.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, _this),\n                    \"Wish receive either week news.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        placeholder: \"submit\",\n                        value: form.subscribe,\n                        onChange: Onchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, _this),\n                    form.subscribe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Thanks, for agree in share your e-mail with us! Every week, send you email, trendings, insight about world of programmers!!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 40,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        placeholder: \"State\",\n                        value: form.uf,\n                        onChange: Onchange,\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: [\n                                    uf.map(function(ufs) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: ufs,\n                                            children: [\n                                                \" \",\n                                                ufs,\n                                                \" \"\n                                            ]\n                                        }, ufs, true, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 24\n                                        }, _this1);\n                                    }),\n                                    \"     \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                                lineNumber: 44,\n                                columnNumber: 73\n                            }, _this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-800\",\n                        onClick: getAllValue,\n                        children: \"Send Value!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-900\",\n                        onClick: function() {\n                            return setform(function(curr) {\n                                return !curr;\n                            });\n                        },\n                        children: \"Hide Value!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contro-date.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlleFormDate, \"eGsldtCCOTiMgf9PzHzp2FKlORA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlleFormDate);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VztrQ0FBSSxhQUFXOzs7Ozs2QkFBUztrQ0FDM0UsOERBQUNhLFFBQU07d0JBQUNULFNBQVMsRUFBQyxhQUFhO3dCQUFFVSxPQUFPLEVBQUU7bUNBQUt2QixPQUFPLENBQUN3QixTQUFBQSxJQUFJO3VDQUFJLENBQUNBLElBQUk7NkJBQUEsQ0FBQzt5QkFBQTtrQ0FBSyxhQUFXOzs7Ozs2QkFBUzs7Ozs7O3FCQUd4Rjs7b0JBQ0wsQ0FBQztDQUVMO0dBL0NLN0IsaUJBQWlCO0FBa0R2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyby1kYXRlLmpzPzM2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG4vL3ByYWN0aWNlIG1vcmUgbGl0dGxlIGJpdCBhYm91dCBmb3JtIGNvbnRyb2xsZWRcclxuXHJcbmNvbnN0IHVmID0gWydSUycsJ1NDJywnUkonLCdTUCddXHJcbiBcclxuY29uc3QgY29udHJvbGxlRm9ybURhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldGZvcm1dID0gdXNlU3RhdGUoeyBuYW1lOicnICwgZW1haWw6JycsIHVmOicnLCBzdWJzY3JpYmU6IGZhbHNlIH0pXHJcbiBcclxuICBjb25zdCBPbmNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgY29uc3QgRm9ybWZvcm0gPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgXHJcbiAgLy90aGlzIGkgZGlkIHRvIHZlcmlmeSBjaGVja2JveFxyXG4gIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZXZ0LnRhcmdldC5jaGVja2VkIDogZXZ0LnRhcmdldC52YWx1ZVxyXG5cclxuICAgIHNldGZvcm0oIGV2b3EgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmV2b3EsXHJcbiAgICAgICAgICAgIFtGb3JtZm9ybV06IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbiAgfSAgXHJcblxyXG5cclxuICBjb25zdCBnZXRBbGxWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybSlcclxuICB9XHJcblxyXG4gIHJldHVybig8PiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInID5cclxuXHJcbiAgICBOYW1lOiAgXHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lPSdiZy1ncmF5LTMwMCcgdHlwZT17J3RleHQnfSBwbGFjZWhvbGRlcj0nWW91ciBOYW1lOicgdmFsdWU9e2Zvcm0ubmFtZX0gb25DaGFuZ2U9e09uY2hhbmdlfSAvPlxyXG4gICAgRS1tYWlsOlxyXG4gICAgPGlucHV0IGNsYXNzTmFtZT0nYmctZ3JheS0zMDAnICB0eXBlPXsnZW1haWwnfSBwbGFjZWhvbGRlcj0nWW91ciBFbWFpbDonIG9uQ2hhbmdlPXtPbmNoYW5nZX0gdmFsdWU9e2Zvcm0uZW1haWx9IC8+XHJcbiAgICBXaXNoIHJlY2VpdmUgZWl0aGVyIHdlZWsgbmV3cy5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT17J2NoZWNrYm94J30gcGxhY2Vob2xkZXI9J3N1Ym1pdCcgdmFsdWU9e2Zvcm0uc3Vic2NyaWJlfSBvbkNoYW5nZT17T25jaGFuZ2V9ICAvPlxyXG4gICAgXHJcbiAgICB7Zm9ybS5zdWJzY3JpYmUgJiYgXHJcbiAgICAgPHA+IFRoYW5rcywgZm9yIGFncmVlIGluIHNoYXJlIHlvdXIgZS1tYWlsIHdpdGggdXMhIEV2ZXJ5IHdlZWssIHNlbmQgeW91IGVtYWlsLCB0cmVuZGluZ3MsIGluc2lnaHQgYWJvdXQgd29ybGQgb2YgcHJvZ3JhbW1lcnMhIVxyXG4gICAgIDwvcD59XHJcblxyXG5cclxuICAgIDxzZWxlY3QgcGxhY2Vob2xkZXI9J1N0YXRlJyAgdmFsdWU9e2Zvcm0udWZ9ICBvbkNoYW5nZT17T25jaGFuZ2V9ID4gPG9wdGlvbj4gXHJcbiAgICAgICAge3VmLm1hcCh1ZnMgPT4gPG9wdGlvbiBrZXk9e3Vmc30gdmFsdWU9e3Vmc30gPiB7dWZzfSA8L29wdGlvbj4pfSAgICAgPC9vcHRpb24+IDwvc2VsZWN0PlxyXG5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1yZWQtODAwJyBvbkNsaWNrPXtnZXRBbGxWYWx1ZX0gID5TZW5kIFZhbHVlITwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtOTAwJyAgb25DbGljaz17KCk9PiBzZXRmb3JtKGN1cnIgPT4gIWN1cnIpIH0gID5IaWRlIFZhbHVlITwvYnV0dG9uPlxyXG4gIFxyXG4gIFxyXG4gICAgPC9kaXY+XHJcbiAgPC8+KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZUZvcm1EYXRlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1ZiIsImNvbnRyb2xsZUZvcm1EYXRlIiwibmFtZSIsImVtYWlsIiwic3Vic2NyaWJlIiwiZm9ybSIsInNldGZvcm0iLCJPbmNoYW5nZSIsImV2dCIsIkZvcm1mb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsImV2b3EiLCJnZXRBbGxWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJwIiwic2VsZWN0Iiwib3B0aW9uIiwibWFwIiwidWZzIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contro-date.js\n");

/***/ })

});