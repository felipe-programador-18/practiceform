"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/contr";
exports.ids = ["pages/contr"];
exports.modules = {

/***/ "./pages/contr.js":
/*!************************!*\
  !*** ./pages/contr.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//practice little bit about form controoled\nconst controlledForm = ()=>{\n    const { 0: value , 1: setvalue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: show , 1: setshow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // this together works with value inside status\n    const getConsdole = ()=>{\n        console.log(value);\n    };\n    // create one function to onchange\n    const Onchange = (evt)=>{\n        setvalue(evt.target.value);\n        if (evt.target.value !== \"\") {\n            console.log(\"fielt fill !!!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pratice little bit about Form controlled\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contr.js\",\n                lineNumber: 23,\n                columnNumber: 12\n            }, undefined),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: Onchange,\n                value: value,\n                placeholder: \"controlled practice\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contr.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getConsdole,\n                children: \"Caught\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contr.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setshow((one)=>!one\n                    )\n                ,\n                children: \"Hiddem\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\contr.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controlledForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW9DO0FBRXBDLDJDQUEyQztBQUUzQyxNQUFNRSxjQUFjLEdBQUUsSUFBTTtJQUN6QixNQUFNLEVBTFQsR0FLVUMsS0FBSyxHQUxmLEdBS2lCQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sRUFOVCxHQU1VSSxJQUFJLEdBTmQsR0FNZ0JDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFdEMsK0NBQStDO0lBQy9DLE1BQU1NLFdBQVcsR0FBRyxJQUFLO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0tBQ3JCO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU1PLFFBQVEsR0FBR0MsQ0FBQUEsR0FBRyxHQUFJO1FBQ3BCUCxRQUFRLENBQUNPLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDVCxLQUFLLENBQUM7UUFDMUIsSUFBR1EsR0FBRyxDQUFDQyxNQUFNLENBQUNULEtBQUssS0FBSyxFQUFFLEVBQUM7WUFDdkJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1NBQ2hDO0tBQ0o7SUFHSCxxQkFBTzs7WUFBRSxHQUFDOzBCQUFBLDhEQUFDSSxJQUFFOzBCQUFDLDBDQUF3Qzs7Ozs7eUJBQUs7WUFDckRSLElBQUksa0JBQ1AsOERBQUNTLE9BQUs7Z0JBQUNDLElBQUksRUFBRSxNQUFNO2dCQUFFQyxRQUFRLEVBQUVOLFFBQVE7Z0JBQUlQLEtBQUssRUFBRUEsS0FBSztnQkFBR2MsV0FBVyxFQUFDLHFCQUFxQjs7Ozs7eUJBQUk7MEJBRS9GLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVaLFdBQVc7MEJBQUUsUUFBTTs7Ozs7eUJBQVM7MEJBQzdDLDhEQUFDVyxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBS2IsT0FBTyxDQUFDYyxDQUFBQSxHQUFHLEdBQUksQ0FBQ0EsR0FBRztvQkFBQSxDQUFDO2dCQUFBOzBCQUFJLFFBQU07Ozs7O3lCQUFTOztvQkFFN0QsQ0FBQztDQUVKO0FBQ0QsaUVBQWVsQixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2Vmb3JtLy4vcGFnZXMvY29udHIuanM/MTgwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vcHJhY3RpY2UgbGl0dGxlIGJpdCBhYm91dCBmb3JtIGNvbnRyb29sZWRcclxuXHJcbmNvbnN0IGNvbnRyb2xsZWRGb3JtID0oKSA9PiB7XHJcbiAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoJycpXHJcbiAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICAgXHJcbiAgIC8vIHRoaXMgdG9nZXRoZXIgd29ya3Mgd2l0aCB2YWx1ZSBpbnNpZGUgc3RhdHVzXHJcbiAgIGNvbnN0IGdldENvbnNkb2xlID0gKCkgPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgfVxyXG4gIFxyXG4gICAvLyBjcmVhdGUgb25lIGZ1bmN0aW9uIHRvIG9uY2hhbmdlXHJcbiAgIGNvbnN0IE9uY2hhbmdlID0gZXZ0ID0+IHtcclxuICAgICAgIHNldHZhbHVlKGV2dC50YXJnZXQudmFsdWUpXHJcbiAgICAgICBpZihldnQudGFyZ2V0LnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpZWx0IGZpbGwgISEhJylcclxuICAgICAgIH1cclxuICAgfVxyXG5cclxuICAgIFxyXG4gcmV0dXJuKDw+IDxoMT5QcmF0aWNlIGxpdHRsZSBiaXQgYWJvdXQgRm9ybSBjb250cm9sbGVkPC9oMT5cclxuICAgICB7IHNob3cgJiZcclxuICAgIDxpbnB1dCB0eXBlPXsndGV4dCd9IG9uQ2hhbmdlPXtPbmNoYW5nZX0gICB2YWx1ZT17dmFsdWV9ICBwbGFjZWhvbGRlcj0nY29udHJvbGxlZCBwcmFjdGljZScgIC8+XHJcbiAgICAgfVxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDb25zZG9sZX0+Q2F1Z2h0PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0c2hvdyhvbmUgPT4gIW9uZSl9ICA+SGlkZGVtPC9idXR0b24+XHJcblxyXG4gPC8+KSAgIFxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVkRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29udHJvbGxlZEZvcm0iLCJ2YWx1ZSIsInNldHZhbHVlIiwic2hvdyIsInNldHNob3ciLCJnZXRDb25zZG9sZSIsImNvbnNvbGUiLCJsb2ciLCJPbmNoYW5nZSIsImV2dCIsInRhcmdldCIsImgxIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contr.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/contr.js"));
module.exports = __webpack_exports__;

})();