"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/othercontrolle",{

/***/ "./pages/othercontrolle.js":
/*!*********************************!*\
  !*** ./pages/othercontrolle.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar creatControllForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\",\n        checkbox: false\n    }), form = ref[0], setform = ref[1];\n    var getAllValue = function() {\n        console.log(form);\n    };\n    var onChange = function(event) {\n        var formState = event.target.name;\n        setform(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create another page to practice about form controlled!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 21,\n                columnNumber: 15\n            }, _this),\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                value: form.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 23,\n                columnNumber: 14\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 23,\n                columnNumber: 66\n            }, _this),\n            \"Email:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"email\",\n                value: form.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 26,\n                columnNumber: 14\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 26,\n                columnNumber: 68\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getAllValue,\n                children: \"Get State\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 28,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onChange: function() {\n                    return setform(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide State\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 29,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: [\n                    \" \",\n                    JSON.stringify(form)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 31,\n                columnNumber: 14\n            }, _this),\n            form === \"Pj\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please adding your Pj\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\othercontrolle.js\",\n                lineNumber: 33,\n                columnNumber: 32\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(creatControllForm, \"iw02hzA8t2vI7Z3CIGl9LwFUfgg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (creatControllForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vdGhlcmNvbnRyb2xsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFvQzs7QUFFcEMsSUFBTUUsaUJBQWlCLEdBQUcsV0FBTTs7SUFDNUIsSUFBd0JELEdBS3RCLEdBTHNCQSwrQ0FBUSxDQUFDO1FBQzdCRSxJQUFJLEVBQUMsRUFBRTtRQUNQQyxLQUFLLEVBQUMsRUFBRTtRQUNSQyxFQUFFLEVBQUUsRUFBRTtRQUNOQyxRQUFRLEVBQUUsS0FBSztLQUNsQixDQUFDLEVBUk4sSUFHZSxHQUFhTCxHQUt0QixHQUxTLEVBSGYsT0FHd0IsR0FBSUEsR0FLdEIsR0FMa0I7SUFPcEIsSUFBTVEsV0FBVyxHQUFHLFdBQU07UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7S0FDcEI7SUFFRCxJQUFNSyxRQUFRLEdBQUdDLFNBQUFBLEtBQUssRUFBRztRQUN4QixJQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDWixJQUFJO1FBQ25DSyxPQUFPLENBQUNLLEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDM0I7SUFHRCxxQkFBTzs7WUFBRSxHQUFDOzBCQUFBLDhEQUFDQyxJQUFFOzBCQUFDLHlEQUF1RDs7Ozs7cUJBQUs7WUFBQSxPQUVqRTswQkFBQSw4REFBQ0MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNoQixJQUFJLEVBQUMsTUFBTTtnQkFBQ2EsS0FBSyxFQUFFVCxJQUFJLENBQUNKLElBQUk7Ozs7O3FCQUFJO1lBQUEsR0FBQzswQkFBQSw4REFBQ2lCLElBQUU7Ozs7cUJBQUU7WUFBQSxRQUd6RDswQkFBQSw4REFBQ0YsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNoQixJQUFJLEVBQUMsT0FBTztnQkFBQ2EsS0FBSyxFQUFFVCxJQUFJLENBQUNILEtBQUs7Ozs7O3FCQUFJO1lBQUEsR0FBQzswQkFBQSw4REFBQ2dCLElBQUU7Ozs7cUJBQUU7MEJBRTNELDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUViLFdBQVc7MEJBQUksV0FBUzs7Ozs7cUJBQVM7MEJBQ2xELDhEQUFDWSxRQUFNO2dCQUFDVCxRQUFRLEVBQUU7MkJBQU1KLE9BQU8sQ0FBQ2UsU0FBQUEsSUFBSTsrQkFBSSxDQUFDQSxJQUFJO3FCQUFBLENBQUM7aUJBQUE7MEJBQUcsWUFBVTs7Ozs7cUJBQVM7MEJBRXBFLDhEQUFDQyxLQUFHOztvQkFBQyxHQUFDO29CQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ25CLElBQUksQ0FBQzs7Ozs7O3FCQUFPO1lBRWpDQSxJQUFJLEtBQUssSUFBSSxrQkFBSSw4REFBQ29CLEdBQUM7MEJBQUMsdUJBQXFCOzs7OztxQkFBSTs7b0JBQ25ELENBQUM7Q0FDUjtHQWhDS3pCLGlCQUFpQjtBQWtDdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vdGhlcmNvbnRyb2xsZS5qcz9hY2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgY3JlYXRDb250cm9sbEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Zm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICB1ZjogJycsXHJcbiAgICAgICAgY2hlY2tib3g6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXRBbGxWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZlbnQgPT57XHJcbiAgICAgY29uc3QgZm9ybVN0YXRlID0gZXZlbnQudGFyZ2V0Lm5hbWUgICBcclxuICAgICBzZXRmb3JtKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKDw+IDxoMT5DcmVhdGUgYW5vdGhlciBwYWdlIHRvIHByYWN0aWNlIGFib3V0IGZvcm0gY29udHJvbGxlZCEhPC9oMT4gICAgICAgXHJcbiAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgdmFsdWU9e2Zvcm0ubmFtZX0gLz4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2VtYWlsJyB2YWx1ZT17Zm9ybS5lbWFpbH0gLz4gPGJyLz5cclxuXHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEFsbFZhbHVlfSAgPkdldCBTdGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNoYW5nZT17KCkgPT4gc2V0Zm9ybShjdXJyID0+ICFjdXJyKSB9PkhpZGUgU3RhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPHByZT4ge0pTT04uc3RyaW5naWZ5KGZvcm0pfTwvcHJlPlxyXG5cclxuICAgICAgICAgICAgIHtmb3JtID09PSAnUGonICYmIDxwPlBsZWFzZSBhZGRpbmcgeW91ciBQajwvcD59ICAgICAgICAgICAgXHJcbiAgICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdENvbnRyb2xsRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRDb250cm9sbEZvcm0iLCJuYW1lIiwiZW1haWwiLCJ1ZiIsImNoZWNrYm94IiwiZm9ybSIsInNldGZvcm0iLCJnZXRBbGxWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2ZW50IiwiZm9ybVN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoMSIsImlucHV0IiwidHlwZSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/othercontrolle.js\n");

/***/ })

});