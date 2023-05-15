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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FilterComponent = (param)=>{\n    let { categories , onCategorySelect  } = param;\n    _s();\n    // Rest of the component\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCategorySelect = async (category)=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/images?folder=\".concat(category));\n        setImages(res.data.images);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-around gap-4 rounded bg-white/10 px-4 py-4 sm:px-0\",\n        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"m-1 rounded-lg border px-2 py-1 text-xs text-gray-200 shadow-md transition-colors duration-200 hover:animate-pulse focus:outline-none sm:m-0 sm:px-4 sm:py-2 sm:text-base\",\n                onClick: ()=>handleCategorySelect(category),\n                children: category\n            }, index, false, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/Filter.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/Filter.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterComponent, \"mOoWwfdsCKBG2MIVzAXM/MEStpE=\");\n_c = FilterComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponent);\nvar _c;\n$RefreshReg$(_c, \"FilterComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDZDtBQVMxQixNQUFNRyxrQkFBa0QsU0FHbEQ7UUFIbUQsRUFDdkRDLFdBQVUsRUFDVkMsaUJBQWdCLEVBQ2pCOztJQUNDLHdCQUF3QjtJQUV4QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV2QyxNQUFNTyx1QkFBdUIsT0FBT0MsV0FBYTtRQUMvQyxNQUFNQyxNQUFNLE1BQU1SLGlEQUFTLENBQUMsc0JBQStCLE9BQVRPO1FBQ2xERixVQUFVRyxJQUFJRSxJQUFJLENBQUNOLE1BQU07SUFDM0I7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDWlYsV0FBV1csR0FBRyxDQUFDLENBQUNOLFVBQVVPLHNCQUN6Qiw4REFBQ0M7Z0JBRUNILFdBQVU7Z0JBQ1ZJLFNBQVMsSUFBTVYscUJBQXFCQzswQkFFbkNBO2VBSklPOzs7Ozs7Ozs7O0FBU2Y7R0ExQk1iO0tBQUFBO0FBNEJOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmlsdGVyLnRzeD9lNDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG50eXBlIEZpbHRlckNvbXBvbmVudFByb3BzID0ge1xuICBjYXRlZ29yaWVzOiBzdHJpbmdbXTtcbiAgb25DYXRlZ29yeVNlbGVjdDogKGNhdGVnb3J5OiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgXG59O1xuXG5jb25zdCBGaWx0ZXJDb21wb25lbnQ6IFJlYWN0LkZDPEZpbHRlckNvbXBvbmVudFByb3BzPiA9ICh7XG4gIGNhdGVnb3JpZXMsXG4gIG9uQ2F0ZWdvcnlTZWxlY3QsXG59KSA9PiB7XG4gIC8vIFJlc3Qgb2YgdGhlIGNvbXBvbmVudFxuXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlTZWxlY3QgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvaW1hZ2VzP2ZvbGRlcj0ke2NhdGVnb3J5fWApO1xuICAgIHNldEltYWdlcyhyZXMuZGF0YS5pbWFnZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWFyb3VuZCBnYXAtNCByb3VuZGVkIGJnLXdoaXRlLzEwIHB4LTQgcHktNCBzbTpweC0wXCI+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtLTEgcm91bmRlZC1sZyBib3JkZXIgcHgtMiBweS0xIHRleHQteHMgdGV4dC1ncmF5LTIwMCBzaGFkb3ctbWQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGhvdmVyOmFuaW1hdGUtcHVsc2UgZm9jdXM6b3V0bGluZS1ub25lIHNtOm0tMCBzbTpweC00IHNtOnB5LTIgc206dGV4dC1iYXNlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVNlbGVjdChjYXRlZ29yeSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmlsdGVyQ29tcG9uZW50IiwiY2F0ZWdvcmllcyIsIm9uQ2F0ZWdvcnlTZWxlY3QiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJoYW5kbGVDYXRlZ29yeVNlbGVjdCIsImNhdGVnb3J5IiwicmVzIiwiZ2V0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Filter.tsx\n"));

/***/ })

});