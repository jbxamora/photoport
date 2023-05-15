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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.tsx\");\n/* harmony import */ var _utils_useLastViewedPhoto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useLastViewedPhoto */ \"./utils/useLastViewedPhoto.ts\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/About */ \"./components/About.tsx\");\n/* harmony import */ var _components_NameCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NameCard */ \"./components/NameCard.tsx\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Home = (param)=>{\n    let { images  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { photoId  } = router.query;\n    const [lastViewedPhoto, setLastViewedPhoto] = (0,_utils_useLastViewedPhoto__WEBPACK_IMPORTED_MODULE_7__.useLastViewedPhoto)();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const lastViewedPhotoRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back\n        if (lastViewedPhoto && !photoId) {\n            lastViewedPhotoRef.current.scrollIntoView({\n                block: \"center\"\n            });\n            setLastViewedPhoto(null);\n        }\n    }, [\n        photoId,\n        lastViewedPhoto,\n        setLastViewedPhoto\n    ]);\n    const filteredImages = images.filter((image)=>image.category === selectedCategory || selectedCategory === \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Sergio Urbina\"\n                }, void 0, false, {\n                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mx-auto max-w-[1960px] p-4\",\n                children: [\n                    photoId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        images: filteredImages,\n                        onClose: ()=>{\n                            setLastViewedPhoto(photoId);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NameCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                className: \"flex-grow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        categories: [\n                            \"Animals\",\n                            \"people\",\n                            \"food\",\n                            \"ecommerce\",\n                            \"landscapes\"\n                        ],\n                        onCategorySelect: setSelectedCategory\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"columns-1 gap-4 mt-4 sm:columns-2 xl:columns-3 2xl:columns-4\",\n                        children: filteredImages.map((param)=>/*#__PURE__*/ {\n                            let { id , public_id , format , blurDataUrl  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/?photoId=\".concat(id),\n                                as: \"/p/\".concat(id),\n                                ref: id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null,\n                                shallow: true,\n                                className: \"after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    alt: \"\",\n                                    className: \"transform rounded brightness-90 transition will-change-auto group-hover:brightness-110\",\n                                    style: {\n                                        transform: \"translate3d(0, 0, 0)\"\n                                    },\n                                    placeholder: \"blur\",\n                                    blurDataURL: blurDataUrl,\n                                    src: \"https://res.cloudinary.com/\".concat(\"dlkopl59p\", \"/image/upload/c_scale,w_720/\").concat(public_id, \".\").concat(format),\n                                    width: 720,\n                                    height: 480,\n                                    sizes: \"(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, id, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"6jtysWY4NKF5sVJczBJXUCYtQcw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _utils_useLastViewedPhoto__WEBPACK_IMPORTED_MODULE_7__.useLastViewedPhoto\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDRTtBQUNGO0FBQ1c7QUFDWTtBQUNaO0FBSXlCO0FBQ3pCO0FBQ007QUFDSjtBQUV6QyxNQUFNWSxPQUFpQixTQUEwQztRQUF6QyxFQUFFQyxPQUFNLEVBQTRCOztJQUMxRCxNQUFNQyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxRQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUNoQyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLDZFQUFrQkE7SUFDaEUsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNZSxxQkFBcUJoQiw2Q0FBTUEsQ0FBb0IsSUFBSTtJQUV6REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLDRIQUE0SDtRQUM1SCxJQUFJYSxtQkFBbUIsQ0FBQ0YsU0FBUztZQUMvQk0sbUJBQW1CQyxPQUFPLENBQUNDLGNBQWMsQ0FBQztnQkFBRUMsT0FBTztZQUFTO1lBQzVETixtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsR0FBRztRQUFDSDtRQUFTRTtRQUFpQkM7S0FBbUI7SUFFakQsTUFBTU8saUJBQWlCWixPQUFPYSxNQUFNLENBQ2xDLENBQUNDLFFBQVVBLE1BQU1DLFFBQVEsS0FBS1Qsb0JBQW9CQSxxQkFBcUI7SUFHekUscUJBQ0U7OzBCQUNFLDhEQUFDbkIsa0RBQUlBOzBCQUNILDRFQUFDNkI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBS0MsV0FBVTs7b0JBQ2JoQix5QkFDQyw4REFBQ1IseURBQUtBO3dCQUNKTSxRQUFRWTt3QkFDUk8sU0FBUyxJQUFNOzRCQUNiZCxtQkFBbUJIO3dCQUNyQjs7Ozs7O2tDQUdKLDhEQUFDa0I7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDckIsNERBQVFBOzs7OzswQ0FDVCw4REFBQ0QseURBQUtBO2dDQUFDc0IsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ3BCLDJEQUFNQTt3QkFDTHVCLFlBQVk7NEJBQUM7NEJBQVc7NEJBQVU7NEJBQVE7NEJBQWE7eUJBQWE7d0JBQ3BFQyxrQkFBa0JmOzs7Ozs7a0NBR3BCLDhEQUFDYTt3QkFBSUYsV0FBVTtrQ0FDWk4sZUFBZVcsR0FBRyxDQUNqQix1QkFHRTtnQ0FGQSxFQUFFQyxHQUFFLEVBQUVDLFVBQVMsRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUU7bUNBRXRDLDhEQUFDdEMsa0RBQUlBO2dDQUVIdUMsTUFBTSxhQUFnQixPQUFISjtnQ0FDbkJLLElBQUksTUFBUyxPQUFITDtnQ0FDVk0sS0FBS04sT0FBT08sT0FBTzNCLG1CQUFtQkkscUJBQXFCLElBQUk7Z0NBQy9Ed0IsT0FBTztnQ0FDUGQsV0FBVTswQ0FFViw0RUFBQzlCLG1EQUFLQTtvQ0FDSjZDLEtBQUk7b0NBQ0pmLFdBQVU7b0NBQ1ZnQixPQUFPO3dDQUFFQyxXQUFXO29DQUF1QjtvQ0FDM0NDLGFBQVk7b0NBQ1pDLGFBQWFWO29DQUNiVyxLQUFLLDhCQUEwR2IsT0FBNUVjLFdBQTZDLEVBQUMsZ0NBQTJDYixPQUFiRCxXQUFVLEtBQVUsT0FBUEM7b0NBQzVIZ0IsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsT0FBTTs7Ozs7OytCQWhCSHBCOzs7Ozt3QkFxQkQ7Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0dBN0VNekI7O1FBQ1dULGtEQUFTQTtRQUVzQksseUVBQWtCQTs7O0tBSDVESTs7QUErRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCdcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gJy4uL3V0aWxzL2Nsb3VkaW5hcnknXG5pbXBvcnQgZ2V0QmFzZTY0SW1hZ2VVcmwgZnJvbSAnLi4vdXRpbHMvZ2VuZXJhdGVCbHVyUGxhY2Vob2xkZXInXG5pbXBvcnQgdHlwZSB7IEltYWdlUHJvcHMgfSBmcm9tICcuLi91dGlscy90eXBlcydcbmltcG9ydCB7IHVzZUxhc3RWaWV3ZWRQaG90byB9IGZyb20gJy4uL3V0aWxzL3VzZUxhc3RWaWV3ZWRQaG90bydcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IE5hbWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTmFtZUNhcmQnXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclwiXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHsgaW1hZ2VzIH06IHsgaW1hZ2VzOiBJbWFnZVByb3BzW10gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwaG90b0lkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtsYXN0Vmlld2VkUGhvdG8sIHNldExhc3RWaWV3ZWRQaG90b10gPSB1c2VMYXN0Vmlld2VkUGhvdG8oKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7IFxuXG4gIGNvbnN0IGxhc3RWaWV3ZWRQaG90b1JlZiA9IHVzZVJlZjxIVE1MQW5jaG9yRWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUaGlzIGVmZmVjdCBrZWVwcyB0cmFjayBvZiB0aGUgbGFzdCB2aWV3ZWQgcGhvdG8gaW4gdGhlIG1vZGFsIHRvIGtlZXAgdGhlIGluZGV4IHBhZ2UgaW4gc3luYyB3aGVuIHRoZSB1c2VyIG5hdmlnYXRlcyBiYWNrXG4gICAgaWYgKGxhc3RWaWV3ZWRQaG90byAmJiAhcGhvdG9JZCkge1xuICAgICAgbGFzdFZpZXdlZFBob3RvUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiB9KTtcbiAgICAgIHNldExhc3RWaWV3ZWRQaG90byhudWxsKTtcbiAgICB9XG4gIH0sIFtwaG90b0lkLCBsYXN0Vmlld2VkUGhvdG8sIHNldExhc3RWaWV3ZWRQaG90b10pO1xuXG4gIGNvbnN0IGZpbHRlcmVkSW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihcbiAgICAoaW1hZ2UpID0+IGltYWdlLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5IHx8IHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwiXCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlcmdpbyBVcmJpbmE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bMTk2MHB4XSBwLTRcIj5cbiAgICAgICAge3Bob3RvSWQgJiYgKFxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgaW1hZ2VzPXtmaWx0ZXJlZEltYWdlc30gXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldExhc3RWaWV3ZWRQaG90byhwaG90b0lkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgPE5hbWVDYXJkIC8+XG4gICAgICAgICAgPEFib3V0IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgY2F0ZWdvcmllcz17W1wiQW5pbWFsc1wiLCBcInBlb3BsZVwiLCBcImZvb2RcIiwgXCJlY29tbWVyY2VcIiwgXCJsYW5kc2NhcGVzXCJdfVxuICAgICAgICAgIG9uQ2F0ZWdvcnlTZWxlY3Q9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTEgZ2FwLTQgbXQtNCBzbTpjb2x1bW5zLTIgeGw6Y29sdW1ucy0zIDJ4bDpjb2x1bW5zLTRcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRJbWFnZXMubWFwKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICB7IGlkLCBwdWJsaWNfaWQsIGZvcm1hdCwgYmx1ckRhdGFVcmwgfSBcbiAgICAgICAgICAgICkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgaHJlZj17YC8/cGhvdG9JZD0ke2lkfWB9XG4gICAgICAgICAgICAgICAgYXM9e2AvcC8ke2lkfWB9XG4gICAgICAgICAgICAgICAgcmVmPXtpZCA9PT0gTnVtYmVyKGxhc3RWaWV3ZWRQaG90bykgPyBsYXN0Vmlld2VkUGhvdG9SZWYgOiBudWxsfVxuICAgICAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZnRlcjpjb250ZW50IGdyb3VwIHJlbGF0aXZlIG1iLTUgYmxvY2sgdy1mdWxsIGN1cnNvci16b29tLWluIGFmdGVyOnBvaW50ZXItZXZlbnRzLW5vbmUgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6aW5zZXQtMCBhZnRlcjpyb3VuZGVkLWxnIGFmdGVyOnNoYWRvdy1oaWdobGlnaHRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNmb3JtIHJvdW5kZWQgYnJpZ2h0bmVzcy05MCB0cmFuc2l0aW9uIHdpbGwtY2hhbmdlLWF1dG8gZ3JvdXAtaG92ZXI6YnJpZ2h0bmVzcy0xMTBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsIDAsIDApXCIgfX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXG4gICAgICAgICAgICAgICAgICBibHVyRGF0YVVSTD17Ymx1ckRhdGFVcmx9XG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRX0vaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd183MjAvJHtwdWJsaWNfaWR9LiR7Zm9ybWF0fWB9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NzIwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0ODB9XG4gICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDY0MHB4KSAxMDB2dyxcbiAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDEyODBweCkgNTB2dyxcbiAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDE1MzZweCkgMzN2dyxcbiAgICAgICAgICAgICAgICAgIDI1dndcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsb3VkaW5hcnkudjIuc2VhcmNoXG4gICAgLmV4cHJlc3Npb24oYGZvbGRlcjoke3Byb2Nlc3MuZW52LkNMT1VESU5BUllfRk9MREVSfS8qYClcbiAgICAuc29ydF9ieShcInB1YmxpY19pZFwiLCBcImRlc2NcIilcbiAgICAubWF4X3Jlc3VsdHMoNDAwKVxuICAgIC5leGVjdXRlKCk7XG4gIGxldCByZWR1Y2VkUmVzdWx0czogSW1hZ2VQcm9wc1tdID0gW107XG5cbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCByZXN1bHQgb2YgcmVzdWx0cy5yZXNvdXJjZXMpIHtcbiAgICByZWR1Y2VkUmVzdWx0cy5wdXNoKHtcbiAgICAgIGlkOiBpLFxuICAgICAgaGVpZ2h0OiByZXN1bHQuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHJlc3VsdC53aWR0aCxcbiAgICAgIHB1YmxpY19pZDogcmVzdWx0LnB1YmxpY19pZCxcbiAgICAgIGZvcm1hdDogcmVzdWx0LmZvcm1hdCxcbiAgICAgIGNhdGVnb3J5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0ZPTERFUiwgXG4gICAgfSk7XG4gICAgaSsrO1xuICB9XG5cbiAgY29uc3QgYmx1ckltYWdlUHJvbWlzZXMgPSByZXN1bHRzLnJlc291cmNlcy5tYXAoKGltYWdlOiBJbWFnZVByb3BzKSA9PiB7XG4gICAgcmV0dXJuIGdldEJhc2U2NEltYWdlVXJsKGltYWdlKTtcbiAgfSk7XG4gIGNvbnN0IGltYWdlc1dpdGhCbHVyRGF0YVVybHMgPSBhd2FpdCBQcm9taXNlLmFsbChibHVySW1hZ2VQcm9taXNlcyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWR1Y2VkUmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgIHJlZHVjZWRSZXN1bHRzW2ldLmJsdXJEYXRhVXJsID0gaW1hZ2VzV2l0aEJsdXJEYXRhVXJsc1tpXTtcbiAgfVxuXG4gIHJlZHVjZWRSZXN1bHRzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW1hZ2VzOiByZWR1Y2VkUmVzdWx0cyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidXNlTGFzdFZpZXdlZFBob3RvIiwiQWJvdXQiLCJOYW1lQ2FyZCIsIkZpbHRlciIsIkhvbWUiLCJpbWFnZXMiLCJyb3V0ZXIiLCJwaG90b0lkIiwicXVlcnkiLCJsYXN0Vmlld2VkUGhvdG8iLCJzZXRMYXN0Vmlld2VkUGhvdG8iLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsImxhc3RWaWV3ZWRQaG90b1JlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiZmlsdGVyZWRJbWFnZXMiLCJmaWx0ZXIiLCJpbWFnZSIsImNhdGVnb3J5IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwib25DbG9zZSIsImRpdiIsImNhdGVnb3JpZXMiLCJvbkNhdGVnb3J5U2VsZWN0IiwibWFwIiwiaWQiLCJwdWJsaWNfaWQiLCJmb3JtYXQiLCJibHVyRGF0YVVybCIsImhyZWYiLCJhcyIsInJlZiIsIk51bWJlciIsInNoYWxsb3ciLCJhbHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBsYWNlaG9sZGVyIiwiYmx1ckRhdGFVUkwiLCJzcmMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xPVURJTkFSWV9DTE9VRF9OQU1FIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});