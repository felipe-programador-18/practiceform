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
exports.id = "pages/controlled";
exports.ids = ["pages/controlled"];
exports.modules = {

/***/ "./pages/controlled.js":
/*!*****************************!*\
  !*** ./pages/controlled.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst controForm = ()=>{\n    const { 0: value , 1: setvaleu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: show , 1: setshow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getState = ()=>{\n        console.log(value);\n    };\n    // inside functions i have passed it setvalue to get event of input!!\n    const onChange = (event)=>{\n        setvaleu(event.target.value);\n        if (event.target.value === \"\") {\n            console.log(\"fill in the fielt please!!!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"training about form uncontrolled!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Controlled\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 20,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getState,\n                children: \"Get value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setshow((curr)=>!curr\n                    )\n                ,\n                children: \"hide value\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            value,\n            value === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"fielt invalidated!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\practiceform\\\\pages\\\\controlled.js\",\n                lineNumber: 24,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBb0M7QUFFcEMsTUFBTUUsVUFBVSxHQUFHLElBQU07SUFDdEIsTUFBTSxFQUhULEdBR1VDLEtBQUssR0FIZixHQUdpQkMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEVBSlQsR0FJVUksSUFBSSxHQUpkLEdBSWdCQyxPQUFPLE1BQUlMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3JDLE1BQU1NLFFBQVEsR0FBRyxJQUFLO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0tBQ25CO0lBQ0QscUVBQXFFO0lBQ3JFLE1BQU1PLFFBQVEsR0FBR0MsQ0FBQUEsS0FBSyxHQUFJO1FBQ3RCUCxRQUFRLENBQUNPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVCxLQUFLLENBQUM7UUFDNUIsSUFBR1EsS0FBSyxDQUFDQyxNQUFNLENBQUNULEtBQUssS0FBSyxFQUFFLEVBQUM7WUFDekJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO1NBQzVDO0tBRUw7SUFFRCxxQkFBTzs7MEJBQ0YsOERBQUNJLElBQUU7MEJBQUMsb0NBQWtDOzs7Ozt5QkFBSztZQUMxQ1IsSUFBSSxrQkFBSSw4REFBQ1MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLFdBQVcsRUFBQyxZQUFZO2dCQUFDYixLQUFLLEVBQUVBLEtBQUs7Z0JBQUdPLFFBQVEsRUFBRUEsUUFBUTs7Ozs7eUJBQUs7MEJBQzNGLDhEQUFDTyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVYLFFBQVE7MEJBQUUsV0FBUzs7Ozs7eUJBQVM7MEJBQzdDLDhEQUFDVSxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBS1osT0FBTyxDQUFDYSxDQUFBQSxJQUFJLEdBQUksQ0FBQ0EsSUFBSTtvQkFBQSxDQUFDO2dCQUFBOzBCQUFFLFlBQVU7Ozs7O3lCQUFTO1lBQ2hFaEIsS0FBSztZQUNMQSxLQUFLLEtBQUssRUFBRSxrQkFBSSw4REFBQ2lCLEdBQUM7MEJBQUMscUJBQW1COzs7Ozt5QkFBSTs7b0JBQy9DLENBQUM7Q0FDSjtBQUVELGlFQUFlbEIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWNlZm9ybS8uL3BhZ2VzL2NvbnRyb2xsZWQuanM/OTM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNvbnRyb0Zvcm0gPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsZXVdID0gdXNlU3RhdGUoJycpXHJcbiAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+e1xyXG4gICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICB9XHJcbiAgIC8vIGluc2lkZSBmdW5jdGlvbnMgaSBoYXZlIHBhc3NlZCBpdCBzZXR2YWx1ZSB0byBnZXQgZXZlbnQgb2YgaW5wdXQhIVxyXG4gICBjb25zdCBvbkNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgIHNldHZhbGV1KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsIGluIHRoZSBmaWVsdCBwbGVhc2UhISEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgfSBcclxuXHJcbiAgIHJldHVybig8PlxyXG4gICAgICAgIDxoMT50cmFpbmluZyBhYm91dCBmb3JtIHVuY29udHJvbGxlZCEhPC9oMT5cclxuICAgICAgIHsgc2hvdyAmJiA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NvbnRyb2xsZWQnIHZhbHVlPXt2YWx1ZX0gIG9uQ2hhbmdlPXtvbkNoYW5nZX0gIC8+IH1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldFN0YXRlfT5HZXQgdmFsdWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0c2hvdyhjdXJyID0+ICFjdXJyKX0+aGlkZSB2YWx1ZTwvYnV0dG9uPlxyXG4gICAgICAgIHt2YWx1ZX1cclxuICAgICAgICB7dmFsdWUgPT09ICcnICYmIDxwPmZpZWx0IGludmFsaWRhdGVkISE8L3A+fVxyXG4gPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9Gb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250cm9Gb3JtIiwidmFsdWUiLCJzZXR2YWxldSIsInNob3ciLCJzZXRzaG93IiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY3VyciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controlled.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/controlled.js"));
module.exports = __webpack_exports__;

})();