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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_macha_OneDrive_rea_de_Trabalho_practiceform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_macha_OneDrive_rea_de_Trabalho_practiceform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_macha_OneDrive_rea_de_Trabalho_practiceform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({\n    name: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(\"Preencha o campo\"),\n    email: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(\"Prencha o campo\").email(\"Por favor preencha o campo\")\n});\nvar uf = [\n    \"RS,\",\n    \"SP\",\n    \"SC\",\n    \"RJ\"\n];\nvar ManagAll = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\",\n        subscribe: false\n    }), form = ref[0], setform = ref[1];\n    var ClickHere = function() {\n        console.log(form);\n    };\n    var GetMore = function(evt) {\n        var Form = evt.target.name;\n        var value = evt.target.type === \"checkbox\" ? evt.target.checked : evt.target.value;\n        setform(function(curr) {\n            return _objectSpread({}, curr, _defineProperty({}, Form, value));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // i need create variable async to get all date!!\n        var loadDate = function() {\n            var _ref = _asyncToGenerator(C_Users_macha_OneDrive_rea_de_Trabalho_practiceform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var date, json;\n                return C_Users_macha_OneDrive_rea_de_Trabalho_practiceform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/users\");\n                        case 2:\n                            date = _ctx.sent;\n                            json = data.json();\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function loadDate() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadDate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                className: \"text-center bg-yellow-300\",\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: GetMore\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 48,\n                columnNumber: 15\n            }, _this),\n            \"E-mail\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                className: \"text-center bg-red-800\",\n                type: \"email\",\n                name: \"email\",\n                value: form.email,\n                onChange: GetMore\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 50,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                name: \"subscribe\",\n                value: form.subscribe,\n                onChange: GetMore\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 52,\n                columnNumber: 15\n            }, _this),\n            form.subscribe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Thanks for your signature !!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 53,\n                columnNumber: 34\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"uf\",\n                onChange: GetMore,\n                value: form.uf,\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        children: \" Select your City:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                        lineNumber: 55,\n                        columnNumber: 69\n                    }, _this),\n                    uf.map(function(uf1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                            value: uf1,\n                            children: [\n                                uf1,\n                                \" \"\n                            ]\n                        }, uf1, true, {\n                            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 55,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: ClickHere,\n                children: \"Get All\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setform(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \" Hide all\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\pracitice.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ManagAll, \"R1EOPmBRjkfVuoowKewFN/unAdk=\");\n_c = ManagAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManagAll);\nvar _c;\n$RefreshReg$(_c, \"ManagAll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztxQkFBSTswQkFFdkQsOERBQUNDLFFBQU07Z0JBQUM3QixJQUFJLEVBQUMsSUFBSTtnQkFBQzJCLFFBQVEsRUFBRWYsT0FBTztnQkFBRUksS0FBSyxFQUFFVCxJQUFJLENBQUNILEVBQUU7O29CQUFFLEdBQUM7a0NBQUEsOERBQUMwQixRQUFNO2tDQUFDLG9CQUFrQjs7Ozs7NkJBQVM7b0JBQ3RGMUIsRUFBRSxDQUFDMkIsR0FBRyxDQUFDM0IsU0FBQUEsR0FBRTs2Q0FDTiw4REFBQzBCLFFBQU07NEJBQUNkLEtBQUssRUFBRVosR0FBRTs7Z0NBQWFBLEdBQUU7Z0NBQUMsR0FBQzs7MkJBQVZBLEdBQUU7Ozs7a0NBQWlCO3FCQUFBLENBQzVDOzs7Ozs7cUJBQ0k7MEJBR25CLDhEQUFDNEIsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFeEIsU0FBUzswQkFBRyxTQUFPOzs7OztxQkFBUzswQkFDN0MsOERBQUN1QixRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQUt6QixPQUFPLENBQUNXLFNBQUFBLElBQUk7K0JBQUksQ0FBQ0EsSUFBSTtxQkFBQSxDQUFDO2lCQUFBOzBCQUFJLFdBQVM7Ozs7O3FCQUFTOztvQkFFaEUsQ0FBQztDQUNOO0dBckRLZCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF1RGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJhY2l0aWNlLmpzPzY3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuXHJcblxyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlByZWVuY2hhIG8gY2FtcG9cIiksXHJcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUHJlbmNoYSBvIGNhbXBvXCIpLmVtYWlsKFwiUG9yIGZhdm9yIHByZWVuY2hhIG8gY2FtcG9cIilcclxufSlcclxuXHJcbmNvbnN0IHVmID0gW1wiUlMsXCIsJ1NQJywgJ1NDJywnUkonXVxyXG5cclxuY29uc3QgTWFuYWdBbGwgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtmb3JtLCBzZXRmb3JtIF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOicnLCBlbWFpbDonJywgdWY6XCJcIiwgc3Vic2NyaWJlOiBmYWxzZSAgIFxyXG4gICB9KVxyXG4gICAgICAgICAgIFxyXG4gICBjb25zdCBDbGlja0hlcmUgPSAoKSA9PiB7XHJcbiAgICAgY29uc29sZS5sb2coZm9ybSlcclxuICAgfVxyXG4gICBcclxuICAgY29uc3QgR2V0TW9yZSA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCBGb3JtID0gZXZ0LnRhcmdldC5uYW1lXHJcbiAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gZXZ0LnRhcmdldC5jaGVja2VkIDogZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgc2V0Zm9ybShjdXJyID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jdXJyLFxyXG4gICAgICAgICAgICBbRm9ybV06IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSlcclxuICB9XHJcbiAgICAgICBcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAvLyBpIG5lZWQgY3JlYXRlIHZhcmlhYmxlIGFzeW5jIHRvIGdldCBhbGwgZGF0ZSEhXHJcbiAgICAgY29uc3QgbG9hZERhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2VycycpXHJcbiAgICAgIGNvbnN0IGpzb24gPSBkYXRhLmpzb24oKVxyXG4gICAgIH0gXHJcbiAgICAgIGxvYWREYXRlKCkgXHJcbiAgIH0sW10pXHJcbiAgICAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3RleHQtY2VudGVyIGJnLXllbGxvdy0zMDAnIHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHZhbHVlPXtmb3JtLm5hbWV9IG9uQ2hhbmdlPXtHZXRNb3JlfSAgLz5cclxuICAgICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBiZy1yZWQtODAwJyB0eXBlPSdlbWFpbCcgbmFtZT0nZW1haWwnIHZhbHVlPXtmb3JtLmVtYWlsfSAgb25DaGFuZ2U9e0dldE1vcmV9IC8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBuYW1lPSdzdWJzY3JpYmUnIHZhbHVlPXtmb3JtLnN1YnNjcmliZX0gb25DaGFuZ2U9e0dldE1vcmV9ICAvPlxyXG4gICAgICAgICAgICAgIHtmb3JtLnN1YnNjcmliZSAmJiA8cD5UaGFua3MgZm9yIHlvdXIgc2lnbmF0dXJlICEhITwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0ndWYnIG9uQ2hhbmdlPXtHZXRNb3JlfSB2YWx1ZT17Zm9ybS51Zn0+IDxvcHRpb24+IFNlbGVjdCB5b3VyIENpdHk6PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7dWYubWFwKHVmID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3VmfSBrZXk9e3VmfSA+e3VmfSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e0NsaWNrSGVyZX0gPkdldCBBbGw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXRmb3JtKGN1cnIgPT4gIWN1cnIpfSAgPiBIaWRlIGFsbDwvYnV0dG9uPlxyXG4gICBcclxuICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ0FsbCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwieXVwIiwic2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJuYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVmIiwiTWFuYWdBbGwiLCJzdWJzY3JpYmUiLCJmb3JtIiwic2V0Zm9ybSIsIkNsaWNrSGVyZSIsImNvbnNvbGUiLCJsb2ciLCJHZXRNb3JlIiwiZXZ0IiwiRm9ybSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJjdXJyIiwibG9hZERhdGUiLCJkYXRlIiwianNvbiIsImZldGNoIiwiZGF0YSIsImlucHV0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJwIiwic2VsZWN0Iiwib3B0aW9uIiwibWFwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pracitice.js\n");

/***/ })

});