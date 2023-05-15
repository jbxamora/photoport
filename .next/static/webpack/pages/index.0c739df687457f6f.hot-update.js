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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.tsx\");\n/* harmony import */ var _utils_useLastViewedPhoto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useLastViewedPhoto */ \"./utils/useLastViewedPhoto.ts\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/About */ \"./components/About.tsx\");\n/* harmony import */ var _components_NameCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NameCard */ \"./components/NameCard.tsx\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Home = (param)=>{\n    let { images  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { photoId  } = router.query;\n    const [lastViewedPhoto, setLastViewedPhoto] = (0,_utils_useLastViewedPhoto__WEBPACK_IMPORTED_MODULE_7__.useLastViewedPhoto)();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const lastViewedPhotoRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back\n        if (lastViewedPhoto && !photoId) {\n            lastViewedPhotoRef.current.scrollIntoView({\n                block: \"center\"\n            });\n            setLastViewedPhoto(null);\n        }\n    }, [\n        photoId,\n        lastViewedPhoto,\n        setLastViewedPhoto\n    ]);\n    const filteredImages = images.filter((image)=>image.category === selectedCategory || selectedCategory === \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Sergio Urbina\"\n                }, void 0, false, {\n                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mx-auto max-w-[1960px] p-4\",\n                children: [\n                    photoId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        images: filteredImages,\n                        onClose: ()=>{\n                            setLastViewedPhoto(photoId);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NameCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                className: \"flex-grow sm:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        categories: [\n                            \"Animals\",\n                            \"people\",\n                            \"food\",\n                            \"ecommerce\",\n                            \"landscapes\"\n                        ],\n                        onCategorySelect: setSelectedCategory\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"columns-1 gap-4 mt-4 sm:columns-2 xl:columns-3 2xl:columns-4\",\n                        children: filteredImages.map((param)=>/*#__PURE__*/ {\n                            let { id , public_id , format , blurDataUrl  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/?photoId=\".concat(id),\n                                as: \"/p/\".concat(id),\n                                ref: id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null,\n                                shallow: true,\n                                className: \"after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    alt: \"\",\n                                    className: \"transform rounded brightness-90 transition will-change-auto group-hover:brightness-110\",\n                                    style: {\n                                        transform: \"translate3d(0, 0, 0)\"\n                                    },\n                                    placeholder: \"blur\",\n                                    blurDataURL: blurDataUrl,\n                                    src: \"https://res.cloudinary.com/\".concat(\"dlkopl59p\", \"/image/upload/c_scale,w_720/\").concat(public_id, \".\").concat(format),\n                                    width: 720,\n                                    height: 480,\n                                    sizes: \"(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, id, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"6jtysWY4NKF5sVJczBJXUCYtQcw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _utils_useLastViewedPhoto__WEBPACK_IMPORTED_MODULE_7__.useLastViewedPhoto\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDRTtBQUNGO0FBQ1c7QUFDWTtBQUNaO0FBSXlCO0FBQ3pCO0FBQ007QUFDSjtBQUV6QyxNQUFNWSxPQUFpQixTQUEwQztRQUF6QyxFQUFFQyxPQUFNLEVBQTRCOztJQUMxRCxNQUFNQyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxRQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUNoQyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLDZFQUFrQkE7SUFDaEUsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNZSxxQkFBcUJoQiw2Q0FBTUEsQ0FBb0IsSUFBSTtJQUV6REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLDRIQUE0SDtRQUM1SCxJQUFJYSxtQkFBbUIsQ0FBQ0YsU0FBUztZQUMvQk0sbUJBQW1CQyxPQUFPLENBQUNDLGNBQWMsQ0FBQztnQkFBRUMsT0FBTztZQUFTO1lBQzVETixtQkFBbUIsSUFBSTtRQUN6QixDQUFDO0lBQ0gsR0FBRztRQUFDSDtRQUFTRTtRQUFpQkM7S0FBbUI7SUFFakQsTUFBTU8saUJBQWlCWixPQUFPYSxNQUFNLENBQ2xDLENBQUNDLFFBQVVBLE1BQU1DLFFBQVEsS0FBS1Qsb0JBQW9CQSxxQkFBcUI7SUFHekUscUJBQ0U7OzBCQUNFLDhEQUFDbkIsa0RBQUlBOzBCQUNILDRFQUFDNkI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBS0MsV0FBVTs7b0JBQ2JoQix5QkFDQyw4REFBQ1IseURBQUtBO3dCQUNKTSxRQUFRWTt3QkFDUk8sU0FBUyxJQUFNOzRCQUNiZCxtQkFBbUJIO3dCQUNyQjs7Ozs7O2tDQUdKLDhEQUFDa0I7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDckIsNERBQVFBOzs7OzswQ0FDVCw4REFBQ0QseURBQUtBO2dDQUFDc0IsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ3BCLDJEQUFNQTt3QkFDTHVCLFlBQVk7NEJBQUM7NEJBQVc7NEJBQVU7NEJBQVE7NEJBQWE7eUJBQWE7d0JBQ3BFQyxrQkFBa0JmOzs7Ozs7a0NBR3BCLDhEQUFDYTt3QkFBSUYsV0FBVTtrQ0FDWk4sZUFBZVcsR0FBRyxDQUNqQix1QkFHRTtnQ0FGQSxFQUFFQyxHQUFFLEVBQUVDLFVBQVMsRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUU7bUNBRXRDLDhEQUFDdEMsa0RBQUlBO2dDQUVIdUMsTUFBTSxhQUFnQixPQUFISjtnQ0FDbkJLLElBQUksTUFBUyxPQUFITDtnQ0FDVk0sS0FBS04sT0FBT08sT0FBTzNCLG1CQUFtQkkscUJBQXFCLElBQUk7Z0NBQy9Ed0IsT0FBTztnQ0FDUGQsV0FBVTswQ0FFViw0RUFBQzlCLG1EQUFLQTtvQ0FDSjZDLEtBQUk7b0NBQ0pmLFdBQVU7b0NBQ1ZnQixPQUFPO3dDQUFFQyxXQUFXO29DQUF1QjtvQ0FDM0NDLGFBQVk7b0NBQ1pDLGFBQWFWO29DQUNiVyxLQUFLLDhCQUEwR2IsT0FBNUVjLFdBQTZDLEVBQUMsZ0NBQTJDYixPQUFiRCxXQUFVLEtBQVUsT0FBUEM7b0NBQzVIZ0IsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsT0FBTTs7Ozs7OytCQWhCSHBCOzs7Ozt3QkFxQkQ7Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0dBN0VNekI7O1FBQ1dULGtEQUFTQTtRQUVzQksseUVBQWtCQTs7O0tBSDVESTs7QUErRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCdcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gJy4uL3V0aWxzL2Nsb3VkaW5hcnknXG5pbXBvcnQgZ2V0QmFzZTY0SW1hZ2VVcmwgZnJvbSAnLi4vdXRpbHMvZ2VuZXJhdGVCbHVyUGxhY2Vob2xkZXInXG5pbXBvcnQgdHlwZSB7IEltYWdlUHJvcHMgfSBmcm9tICcuLi91dGlscy90eXBlcydcbmltcG9ydCB7IHVzZUxhc3RWaWV3ZWRQaG90byB9IGZyb20gJy4uL3V0aWxzL3VzZUxhc3RWaWV3ZWRQaG90bydcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IE5hbWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTmFtZUNhcmQnXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclwiXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHsgaW1hZ2VzIH06IHsgaW1hZ2VzOiBJbWFnZVByb3BzW10gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwaG90b0lkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtsYXN0Vmlld2VkUGhvdG8sIHNldExhc3RWaWV3ZWRQaG90b10gPSB1c2VMYXN0Vmlld2VkUGhvdG8oKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7IFxuXG4gIGNvbnN0IGxhc3RWaWV3ZWRQaG90b1JlZiA9IHVzZVJlZjxIVE1MQW5jaG9yRWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUaGlzIGVmZmVjdCBrZWVwcyB0cmFjayBvZiB0aGUgbGFzdCB2aWV3ZWQgcGhvdG8gaW4gdGhlIG1vZGFsIHRvIGtlZXAgdGhlIGluZGV4IHBhZ2UgaW4gc3luYyB3aGVuIHRoZSB1c2VyIG5hdmlnYXRlcyBiYWNrXG4gICAgaWYgKGxhc3RWaWV3ZWRQaG90byAmJiAhcGhvdG9JZCkge1xuICAgICAgbGFzdFZpZXdlZFBob3RvUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiB9KTtcbiAgICAgIHNldExhc3RWaWV3ZWRQaG90byhudWxsKTtcbiAgICB9XG4gIH0sIFtwaG90b0lkLCBsYXN0Vmlld2VkUGhvdG8sIHNldExhc3RWaWV3ZWRQaG90b10pO1xuXG4gIGNvbnN0IGZpbHRlcmVkSW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihcbiAgICAoaW1hZ2UpID0+IGltYWdlLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5IHx8IHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwiXCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlcmdpbyBVcmJpbmE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bMTk2MHB4XSBwLTRcIj5cbiAgICAgICAge3Bob3RvSWQgJiYgKFxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgaW1hZ2VzPXtmaWx0ZXJlZEltYWdlc30gXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldExhc3RWaWV3ZWRQaG90byhwaG90b0lkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgPE5hbWVDYXJkIC8+XG4gICAgICAgICAgPEFib3V0IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBzbTpcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZpbHRlclxuICAgICAgICAgIGNhdGVnb3JpZXM9e1tcIkFuaW1hbHNcIiwgXCJwZW9wbGVcIiwgXCJmb29kXCIsIFwiZWNvbW1lcmNlXCIsIFwibGFuZHNjYXBlc1wiXX1cbiAgICAgICAgICBvbkNhdGVnb3J5U2VsZWN0PXtzZXRTZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0xIGdhcC00IG10LTQgc206Y29sdW1ucy0yIHhsOmNvbHVtbnMtMyAyeGw6Y29sdW1ucy00XCI+XG4gICAgICAgICAge2ZpbHRlcmVkSW1hZ2VzLm1hcChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgeyBpZCwgcHVibGljX2lkLCBmb3JtYXQsIGJsdXJEYXRhVXJsIH0gXG4gICAgICAgICAgICApID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvP3Bob3RvSWQ9JHtpZH1gfVxuICAgICAgICAgICAgICAgIGFzPXtgL3AvJHtpZH1gfVxuICAgICAgICAgICAgICAgIHJlZj17aWQgPT09IE51bWJlcihsYXN0Vmlld2VkUGhvdG8pID8gbGFzdFZpZXdlZFBob3RvUmVmIDogbnVsbH1cbiAgICAgICAgICAgICAgICBzaGFsbG93XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWZ0ZXI6Y29udGVudCBncm91cCByZWxhdGl2ZSBtYi01IGJsb2NrIHctZnVsbCBjdXJzb3Item9vbS1pbiBhZnRlcjpwb2ludGVyLWV2ZW50cy1ub25lIGFmdGVyOmFic29sdXRlIGFmdGVyOmluc2V0LTAgYWZ0ZXI6cm91bmRlZC1sZyBhZnRlcjpzaGFkb3ctaGlnaGxpZ2h0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSByb3VuZGVkIGJyaWdodG5lc3MtOTAgdHJhbnNpdGlvbiB3aWxsLWNoYW5nZS1hdXRvIGdyb3VwLWhvdmVyOmJyaWdodG5lc3MtMTEwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiIH19XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxuICAgICAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9e2JsdXJEYXRhVXJsfVxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTE9VRElOQVJZX0NMT1VEX05BTUV9L2ltYWdlL3VwbG9hZC9jX3NjYWxlLHdfNzIwLyR7cHVibGljX2lkfS4ke2Zvcm1hdH1gfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezcyMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDgwfVxuICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA2NDBweCkgMTAwdncsXG4gICAgICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjgwcHgpIDUwdncsXG4gICAgICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxNTM2cHgpIDMzdncsXG4gICAgICAgICAgICAgICAgICAyNXZ3XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnNlYXJjaFxuICAgIC5leHByZXNzaW9uKGBmb2xkZXI6JHtwcm9jZXNzLmVudi5DTE9VRElOQVJZX0ZPTERFUn0vKmApXG4gICAgLnNvcnRfYnkoXCJwdWJsaWNfaWRcIiwgXCJkZXNjXCIpXG4gICAgLm1heF9yZXN1bHRzKDQwMClcbiAgICAuZXhlY3V0ZSgpO1xuICBsZXQgcmVkdWNlZFJlc3VsdHM6IEltYWdlUHJvcHNbXSA9IFtdO1xuXG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgcmVzdWx0IG9mIHJlc3VsdHMucmVzb3VyY2VzKSB7XG4gICAgcmVkdWNlZFJlc3VsdHMucHVzaCh7XG4gICAgICBpZDogaSxcbiAgICAgIGhlaWdodDogcmVzdWx0LmhlaWdodCxcbiAgICAgIHdpZHRoOiByZXN1bHQud2lkdGgsXG4gICAgICBwdWJsaWNfaWQ6IHJlc3VsdC5wdWJsaWNfaWQsXG4gICAgICBmb3JtYXQ6IHJlc3VsdC5mb3JtYXQsXG4gICAgICBjYXRlZ29yeTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9GT0xERVIsIFxuICAgIH0pO1xuICAgIGkrKztcbiAgfVxuXG4gIGNvbnN0IGJsdXJJbWFnZVByb21pc2VzID0gcmVzdWx0cy5yZXNvdXJjZXMubWFwKChpbWFnZTogSW1hZ2VQcm9wcykgPT4ge1xuICAgIHJldHVybiBnZXRCYXNlNjRJbWFnZVVybChpbWFnZSk7XG4gIH0pO1xuICBjb25zdCBpbWFnZXNXaXRoQmx1ckRhdGFVcmxzID0gYXdhaXQgUHJvbWlzZS5hbGwoYmx1ckltYWdlUHJvbWlzZXMpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVkdWNlZFJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICByZWR1Y2VkUmVzdWx0c1tpXS5ibHVyRGF0YVVybCA9IGltYWdlc1dpdGhCbHVyRGF0YVVybHNbaV07XG4gIH1cblxuICByZWR1Y2VkUmVzdWx0cy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGltYWdlczogcmVkdWNlZFJlc3VsdHMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNb2RhbCIsInVzZUxhc3RWaWV3ZWRQaG90byIsIkFib3V0IiwiTmFtZUNhcmQiLCJGaWx0ZXIiLCJIb21lIiwiaW1hZ2VzIiwicm91dGVyIiwicGhvdG9JZCIsInF1ZXJ5IiwibGFzdFZpZXdlZFBob3RvIiwic2V0TGFzdFZpZXdlZFBob3RvIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJsYXN0Vmlld2VkUGhvdG9SZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImZpbHRlcmVkSW1hZ2VzIiwiZmlsdGVyIiwiaW1hZ2UiLCJjYXRlZ29yeSIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsIm9uQ2xvc2UiLCJkaXYiLCJjYXRlZ29yaWVzIiwib25DYXRlZ29yeVNlbGVjdCIsIm1hcCIsImlkIiwicHVibGljX2lkIiwiZm9ybWF0IiwiYmx1ckRhdGFVcmwiLCJocmVmIiwiYXMiLCJyZWYiLCJOdW1iZXIiLCJzaGFsbG93IiwiYWx0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJwbGFjZWhvbGRlciIsImJsdXJEYXRhVVJMIiwic3JjIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRSIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});