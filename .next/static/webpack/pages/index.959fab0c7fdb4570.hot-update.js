"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Filter.tsx":
/*!*******************************!*\
  !*** ./components/Filter.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FilterComponent = (param)=>{\n    let { categories , onCategorySelect  } = param;\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCategorySelect = async (category)=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/images?folder=\".concat(category));\n        setImages(res.data.images);\n        onCategorySelect(category);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-around gap-4 rounded bg-white/10 px-4 py-4 sm:px-0\",\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"m-1 rounded-lg border px-2 py-1 text-xs text-gray-200 shadow-md transition-colors duration-200 hover:animate-pulse focus:outline-none sm:m-0 sm:px-4 sm:py-2 sm:text-base\",\n                onClick: ()=>handleCategorySelect(category),\n                children: category\n            }, index, false, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/Filter.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/Filter.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterComponent, \"mOoWwfdsCKBG2MIVzAXM/MEStpE=\");\n_c = FilterComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponent);\nvar _c;\n$RefreshReg$(_c, \"FilterComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDZDtBQVMxQixNQUFNRyxrQkFBa0QsU0FHbEQ7UUFIbUQsRUFDdkRDLFdBQVUsRUFDVkMsaUJBQWdCLEVBQ2pCOztJQUlDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDLE1BQU1PLHVCQUF1QixPQUFPQyxXQUFhO1FBQy9DLE1BQU1DLE1BQU0sTUFBTVIsaURBQVMsQ0FBQyxzQkFBK0IsT0FBVE87UUFDbERGLFVBQVVHLElBQUlFLElBQUksQ0FBQ04sTUFBTTtRQUN6QkQsaUJBQWlCSTtJQUNuQjtJQUdBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNaVixXQUFXVyxHQUFHLENBQUMsQ0FBQ04sVUFBVU8sc0JBQ3pCLDhEQUFDQztnQkFFQ0gsV0FBVTtnQkFDVkksU0FBUyxJQUFNVixxQkFBcUJDOzBCQUVuQ0E7ZUFKSU87Ozs7Ozs7Ozs7QUFTZjtHQTdCTWI7S0FBQUE7QUErQk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXIudHN4P2U0M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbnR5cGUgRmlsdGVyQ29tcG9uZW50UHJvcHMgPSB7XG4gIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICBvbkNhdGVnb3J5U2VsZWN0OiAoY2F0ZWdvcnk6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cblxuXG5jb25zdCBGaWx0ZXJDb21wb25lbnQ6IFJlYWN0LkZDPEZpbHRlckNvbXBvbmVudFByb3BzPiA9ICh7XG4gIGNhdGVnb3JpZXMsXG4gIG9uQ2F0ZWdvcnlTZWxlY3QsXG59KSA9PiB7XG4gIFxuXG5cbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeVNlbGVjdCA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9pbWFnZXM/Zm9sZGVyPSR7Y2F0ZWdvcnl9YCk7XG4gICAgc2V0SW1hZ2VzKHJlcy5kYXRhLmltYWdlcyk7XG4gICAgb25DYXRlZ29yeVNlbGVjdChjYXRlZ29yeSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1hcm91bmQgZ2FwLTQgcm91bmRlZCBiZy13aGl0ZS8xMCBweC00IHB5LTQgc206cHgtMFwiPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0xIHJvdW5kZWQtbGcgYm9yZGVyIHB4LTIgcHktMSB0ZXh0LXhzIHRleHQtZ3JheS0yMDAgc2hhZG93LW1kIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBob3ZlcjphbmltYXRlLXB1bHNlIGZvY3VzOm91dGxpbmUtbm9uZSBzbTptLTAgc206cHgtNCBzbTpweS0yIHNtOnRleHQtYmFzZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoY2F0ZWdvcnkpfVxuICAgICAgICA+XG4gICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkZpbHRlckNvbXBvbmVudCIsImNhdGVnb3JpZXMiLCJvbkNhdGVnb3J5U2VsZWN0IiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaGFuZGxlQ2F0ZWdvcnlTZWxlY3QiLCJjYXRlZ29yeSIsInJlcyIsImdldCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Filter.tsx\n"));

/***/ })

});