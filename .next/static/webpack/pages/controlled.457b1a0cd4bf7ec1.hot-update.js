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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar controForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setvaleu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    //this test i created to practice and understood better about form controled\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), test = ref2[0], settest = ref2[1];\n    var getState = function() {\n        console.log(value);\n    };\n    // inside functions i have passed it setvalue to get event of input!!\n    var onChange = function(event) {\n        setvaleu(event.target.value);\n        if (event.target.value === \"\") {\n            console.log(\"fill in the fielt please!!!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"training about form controlled!!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Controlled\",\n                        value: value,\n                        onChange: onChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                        lineNumber: 24,\n                        columnNumber: 18\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-600\",\n                        onClick: getState,\n                        children: \"Get value\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-yellow-500\",\n                        onClick: function() {\n                            return setshow(function(curr) {\n                                return !curr;\n                            });\n                        },\n                        children: \"hide value\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    value,\n                    value === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"fielt invalidated!!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                        lineNumber: 28,\n                        columnNumber: 26\n                    }, _this),\n                    test && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"testing some things!!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-700\",\n                                onClick: function() {\n                                    return settest(function(curr) {\n                                        return !curr;\n                                    });\n                                },\n                                children: \"Hide div\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"table text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Song\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 7\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Artist\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 7\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Year\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 7\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                lineNumber: 44,\n                                columnNumber: 5\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                            lineNumber: 43,\n                            columnNumber: 3\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"The Sliding Mr. Bones (Next Stop, Pottersville)\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 7\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"Malcolm Lockyer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 7\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"1961\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 7\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 5\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"Witchy Woman\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 7\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"The Eagles\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 7\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"1972\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 7\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 5\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"Shining Star\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 7\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"Earth, Wind, and Fire\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 7\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: \"1975\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 7\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                            lineNumber: 50,\n                            columnNumber: 3\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                    lineNumber: 42,\n                    columnNumber: 2\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 41,\n                columnNumber: 2\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controForm, \"0dxeTCjmodODtml1ZeBr2xvf88c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0M7Ozs7O2lEQUFLO3NEQUN4RCw4REFBQ0EsSUFBRTtzREFBQyxpQkFBZTs7Ozs7aURBQUs7c0RBQ3hCLDhEQUFDQSxJQUFFO3NEQUFDLE1BQUk7Ozs7O2lEQUFLOzs7Ozs7eUNBQ1Y7OENBQ0wsOERBQUNILElBQUU7O3NEQUNELDhEQUFDRyxJQUFFO3NEQUFDLGNBQVk7Ozs7O2lEQUFLO3NEQUNyQiw4REFBQ0EsSUFBRTtzREFBQyxZQUFVOzs7OztpREFBSztzREFDbkIsOERBQUNBLElBQUU7c0RBQUMsTUFBSTs7Ozs7aURBQUs7Ozs7Ozt5Q0FDVjs4Q0FDTCw4REFBQ0gsSUFBRTs7c0RBQ0QsOERBQUNHLElBQUU7c0RBQUMsY0FBWTs7Ozs7aURBQUs7c0RBQ3JCLDhEQUFDQSxJQUFFO3NEQUFDLHVCQUFxQjs7Ozs7aURBQUs7c0RBQzlCLDhEQUFDQSxJQUFFO3NEQUFDLE1BQUk7Ozs7O2lEQUFLOzs7Ozs7eUNBQ1Y7Ozs7OztpQ0FDQzs7Ozs7O3lCQUNGOzs7OztxQkFDRjs7b0JBQ0YsQ0FBQztDQUNKO0dBbkVLNUIsVUFBVTtBQXFFaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJvbGxlZC5qcz85MzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNvbnRyb0Zvcm0gPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsZXVdID0gdXNlU3RhdGUoJycpXHJcbiAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgIFxyXG4gICAvL3RoaXMgdGVzdCBpIGNyZWF0ZWQgdG8gcHJhY3RpY2UgYW5kIHVuZGVyc3Rvb2QgYmV0dGVyIGFib3V0IGZvcm0gY29udHJvbGVkXHJcbiAgIGNvbnN0IFt0ZXN0LCBzZXR0ZXN0XSA9IHVzZVN0YXRlKHRydWUpIFxyXG4gICBcclxuICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PntcclxuICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgfVxyXG4gICAvLyBpbnNpZGUgZnVuY3Rpb25zIGkgaGF2ZSBwYXNzZWQgaXQgc2V0dmFsdWUgdG8gZ2V0IGV2ZW50IG9mIGlucHV0ISFcclxuICAgY29uc3Qgb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICBzZXR2YWxldShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09Jycpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGluIHRoZSBmaWVsdCBwbGVhc2UhISEnKVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICByZXR1cm4oPD5cclxuICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgPGgxPnRyYWluaW5nIGFib3V0IGZvcm0gY29udHJvbGxlZCEhPC9oMT5cclxuICAgICAgIHsgc2hvdyAmJiA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NvbnRyb2xsZWQnIHZhbHVlPXt2YWx1ZX0gIG9uQ2hhbmdlPXtvbkNoYW5nZX0gIC8+IH1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctZ3JlZW4tNjAwJyBvbkNsaWNrPXtnZXRTdGF0ZX0+R2V0IHZhbHVlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXllbGxvdy01MDAnICBvbkNsaWNrPXsoKT0+IHNldHNob3coY3VyciA9PiAhY3Vycil9PmhpZGUgdmFsdWU8L2J1dHRvbj5cclxuICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAge3ZhbHVlID09PSAnJyAmJiA8cD5maWVsdCBpbnZhbGlkYXRlZCEhPC9wPn1cclxuXHJcbiAgICAgICB7IHRlc3QgJiZcclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgIDxwPnRlc3Rpbmcgc29tZSB0aGluZ3MhITwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTcwMCcgb25DbGljaz17KCkgPT4gc2V0dGVzdChjdXJyID0+ICFjdXJyKSAgfSAgPkhpZGUgZGl2PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuIDwvZGl2PlxyXG4gXHJcbiA8ZGl2IGNsYXNzTmFtZT0nIHRleHQtY2VudGVyJyA+XHJcbiA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGV4dC1jZW50ZXIgXCI+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGg+U29uZzwvdGg+XHJcbiAgICAgIDx0aD5BcnRpc3Q8L3RoPlxyXG4gICAgICA8dGg+WWVhcjwvdGg+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5PlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+VGhlIFNsaWRpbmcgTXIuIEJvbmVzIChOZXh0IFN0b3AsIFBvdHRlcnN2aWxsZSk8L3RkPlxyXG4gICAgICA8dGQ+TWFsY29sbSBMb2NreWVyPC90ZD5cclxuICAgICAgPHRkPjE5NjE8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPldpdGNoeSBXb21hbjwvdGQ+XHJcbiAgICAgIDx0ZD5UaGUgRWFnbGVzPC90ZD5cclxuICAgICAgPHRkPjE5NzI8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPlNoaW5pbmcgU3RhcjwvdGQ+XHJcbiAgICAgIDx0ZD5FYXJ0aCwgV2luZCwgYW5kIEZpcmU8L3RkPlxyXG4gICAgICA8dGQ+MTk3NTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbjwvZGl2PlxyXG4gPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9Gb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250cm9Gb3JtIiwidmFsdWUiLCJzZXR2YWxldSIsInNob3ciLCJzZXRzaG93IiwidGVzdCIsInNldHRlc3QiLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyIiwicCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/controlled.js\n");

/***/ })

});