"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/otheruncro",{

/***/ "./pages/otheruncro.js":
/*!*****************************!*\
  !*** ./pages/otheruncro.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n//practice little bit about form uncontrolled!!!\n//remember uncontrolled form is when\nvar formUncot = function() {\n    _s();\n    var myReffer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), show = ref[0], setshow = ref[1];\n    var handCons = function() {\n        console.log(myReffer.current);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"bg-red-700\",\n                    children: \"Practice more about form uncontrolled!!!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\otheruncro.js\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, _this),\n                show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    ref: myReffer\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\otheruncro.js\",\n                    lineNumber: 17,\n                    columnNumber: 10\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handCons,\n                    children: \" Get State\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\otheruncro.js\",\n                    lineNumber: 19,\n                    columnNumber: 10\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return setshow(function(curr) {\n                            return !curr;\n                        });\n                    },\n                    children: \"Hide State\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\otheruncro.js\",\n                    lineNumber: 20,\n                    columnNumber: 10\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\otheruncro.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(formUncot, \"6kNsenmFfFfKwAefYOEF8uGEbTQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (formUncot);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vdGhlcnVuY3JvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTRDOztBQUU1QyxnREFBZ0Q7QUFDaEQsb0NBQW9DO0FBQ3BDLElBQU1HLFNBQVMsR0FBRyxXQUFNOztJQUNwQixJQUFNQyxRQUFRLEdBQUdILDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQXdCQyxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0JHLElBQUksR0FBYUgsR0FBVSxHQUF2QixFQUFFSSxPQUFPLEdBQUlKLEdBQVUsR0FBZDtJQUVwQixJQUFNSyxRQUFRLEdBQUcsV0FBSTtRQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQ00sT0FBTyxDQUFDO0tBQ2hDO0lBRUQscUJBQU87a0JBQ1AsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7OEJBQ25DLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsWUFBWTs4QkFBQywwQ0FBd0M7Ozs7O3lCQUFLO2dCQUNsRVAsSUFBSSxrQkFDTCw4REFBQ1MsT0FBSztvQkFBQ0MsSUFBSSxFQUFFLE1BQU07b0JBQUlDLEdBQUcsRUFBRVosUUFBUTs7Ozs7eUJBQUk7OEJBRXhDLDhEQUFDYSxRQUFNO29CQUFDQyxPQUFPLEVBQUVYLFFBQVE7OEJBQUUsWUFBVTs7Ozs7eUJBQVM7OEJBQzlDLDhEQUFDVSxRQUFNO29CQUFDQyxPQUFPLEVBQUU7K0JBQU1aLE9BQU8sQ0FBQ2EsU0FBQUEsSUFBSTttQ0FBSSxDQUFDQSxJQUFJO3lCQUFBLENBQUM7cUJBQUE7OEJBQUcsWUFBVTs7Ozs7eUJBQVM7Ozs7OztpQkFFN0Q7cUJBQ1IsQ0FBQztDQUNQO0dBbkJLaEIsU0FBUztBQXNCZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vdGhlcnVuY3JvLmpzPzg1YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vcHJhY3RpY2UgbGl0dGxlIGJpdCBhYm91dCBmb3JtIHVuY29udHJvbGxlZCEhIVxyXG4vL3JlbWVtYmVyIHVuY29udHJvbGxlZCBmb3JtIGlzIHdoZW5cclxuY29uc3QgZm9ybVVuY290ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbXlSZWZmZXIgPSB1c2VSZWYodHJ1ZSlcclxuICAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKClcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZENvbnMgPSAoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG15UmVmZmVyLmN1cnJlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IHRleHQtY2VudGVyJz5cclxuICAgIDxoMSBjbGFzc05hbWU9J2JnLXJlZC03MDAnPlByYWN0aWNlIG1vcmUgYWJvdXQgZm9ybSB1bmNvbnRyb2xsZWQhISE8L2gxPlxyXG4gICAgICAgICB7c2hvdyAmJiBcclxuICAgICAgICAgPGlucHV0IHR5cGU9eyd0ZXh0J30gICByZWY9e215UmVmZmVyfSAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kQ29uc30+IEdldCBTdGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldHNob3coY3VyciA9PiAhY3Vycil9ID5IaWRlIFN0YXRlPC9idXR0b24+XHJcbiAgICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtVW5jb3RcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJmb3JtVW5jb3QiLCJteVJlZmZlciIsInNob3ciLCJzZXRzaG93IiwiaGFuZENvbnMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicmVmIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/otheruncro.js\n");

/***/ })

});