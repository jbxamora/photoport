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

/***/ "./components/About.tsx":
/*!******************************!*\
  !*** ./components/About.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_serg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/serg.png */ \"./public/serg.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Icons_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Icons/Instagram */ \"./components/Icons/Instagram.tsx\");\n/* harmony import */ var _components_Icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Icons/Email */ \"./components/Icons/Email.tsx\");\n/* harmony import */ var _components_Icons_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Icons/Twitter */ \"./components/Icons/Twitter.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst About = (param)=>{\n    let { className =\"\"  } = param;\n    _s();\n    const [showContact, setShowContact] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" container col-span-1 flex h-[629px] flex-col overflow-y-auto rounded-lg bg-white/10  px-6 text-white shadow-highlight\"),\n        children: [\n            !showContact && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _public_serg_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"Serg\",\n                    width: 200,\n                    height: 200,\n                    className: \"mb-5 mt-10 rounded-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            !showContact ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-10 mt-10 text-center text-2xl font-bold uppercase tracking-widest\",\n                        children: \"About Me\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto px-4 text-center text-lg text-white/75 lg:hidden\",\n                        children: \"I am a software engineer with a passion for photography. I love to travel and capture the world around me. I am currently based in Washington, DC.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto hidden px-4 text-center text-lg text-white/75 lg:block\",\n                        children: \"I am a software engineer with a passion for photography... // truncated for brevity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 self-center rounded  border px-4 py-2 font-bold text-white hover:border-green-400\",\n                        onClick: ()=>setShowContact(true),\n                        children: \"Get In Touch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-5 mt-10 text-center text-2xl font-bold uppercase tracking-widest\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto p-4 text-center text-lg text-white/75\",\n                        children: \"If interested in a shoot, send me an email below:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto p-4 text-center text-lg text-white/75\",\n                        children: \"I will contact you to work out further details regarding the time, location, and price of the shoot through email as soon as possible. I'm looking forward to capturing the perfect shots for your needs!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto mt-5 p-4 text-center text-lg text-white/75\",\n                        children: \"If you have any special requests/questions, message me through instagram or reach me by email!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"https://instagram.com/sondersergio\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center rounded px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Instagram__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"mailto:sergiourbina1@yahoo.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center rounded px-4 py-2 font-bold text-white\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Email__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"mailto:sergiourbina1@yahoo.com\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-center rounded px-4 py-2 font-bold text-white\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icons_Twitter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-4 self-center rounded border  px-4 py-2 font-bold text-white hover:border-green-400\",\n                        onClick: ()=>setShowContact(false),\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jorge/Desktop/BOOTCAMP/photoport/components/About.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"1m+16GgzE/oRpbz2V4F0OLcfizc=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About); // // Engaging Approach:\n // Let's Create Together\n // Ready to bring your vision to life? Email me to discuss your next shoot!\n // We'll iron out the details about the time, location, and the pricing over email as soon as possible. I'm excited to deliver stunning shots that meet your expectations.\n // Got any unique requests or queries? Don't hesitate to DM me on Instagram or drop me an email. I'm here to answer all your questions.\n // Professional Approach:\n // Get in Touch for Your Next Shoot\n // Interested in scheduling a photoshoot? Please contact me via email at your earliest convenience.\n // I will respond promptly to discuss specifics such as timing, location, and pricing. I'm committed to delivering high-quality images tailored to your needs.\n // If you have any additional requirements or questions, feel free to reach out to me on Instagram or via email. Your satisfaction is my top priority.\n // Friendly Approach:\n // Let's Capture Some Amazing Memories\n // Looking forward to an amazing shoot? Just hit me up with an email and we'll get the ball rolling!\n // I'll get back to you as quickly as I can to sort out all the nitty-gritty details - like when and where we're shooting, and what it'll cost. I can't wait to help you capture the perfect shots!\n // Got any special ideas or questions? Feel free to slide into my DMs on Instagram or shoot me an email. I'm all ears!\n // Artistic Approach:\n // Let's Paint with Light Together\n // Are you ready to create a masterpiece? Send me an email and we can start planning your perfect photoshoot.\n // We will work out the details such as time, location, and cost as soon as possible. I am eager to help you create beautiful images that tell your unique story.\n // Have a special request or question? Feel free to reach out on Instagram or email me. I'm here to make your vision come to life.\n // Casual Approach:\n // Let's Shoot Some Great Pics\n // Wanna create some cool snaps? Just drop me an email and we'll start sorting out the details.\n // We'll chat about the best time and place for your shoot, and how much it'll cost. I'm stoked to help you get the perfect shots!\n // Got a special idea or a question? Hit me up on Instagram or send me an email. Can't wait to hear from you!\n // Energetic Approach:\n // Ready, Set, Shoot!\n // Excited for an amazing photoshoot? Shoot me an email and let's get the planning started!\n // We'll quickly sort out all the details including the time, location, and pricing. I'm thrilled to capture the best shots for you!\n // If you have any unique requests or queries, just message me on Instagram or reach me via email. Let's make your photoshoot a memorable one!\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDRjtBQUNPO0FBQ1Q7QUFFeUI7QUFDVDtBQUNJO0FBRWpELE1BQU1PLFFBQVEsU0FBd0I7UUFBdkIsRUFBRUMsV0FBWSxHQUFFLEVBQUU7O0lBQy9CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBELHFCQUNFLDhEQUFDVztRQUNDSCxXQUFXLEdBQWEsT0FBVkEsV0FBVTs7WUFFdkIsQ0FBQ0MsNkJBQ0EsOERBQUNFO2dCQUFJSCxXQUFVOzBCQUNiLDRFQUFDUCxtREFBS0E7b0JBQ0pXLEtBQUtWLHdEQUFJQTtvQkFDVFcsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUlAsV0FBVTs7Ozs7Ozs7Ozs7WUFJZixDQUFDQyw0QkFDQTs7a0NBQ0UsOERBQUNPO3dCQUFHUixXQUFVO2tDQUF1RTs7Ozs7O2tDQUdyRiw4REFBQ1M7d0JBQUVULFdBQVU7a0NBQTJEOzs7Ozs7a0NBS3hFLDhEQUFDUzt3QkFBRVQsV0FBVTtrQ0FBaUU7Ozs7OztrQ0FJOUUsOERBQUNVO3dCQUNDVixXQUFVO3dCQUNWVyxTQUFTLElBQU1ULGVBQWUsSUFBSTtrQ0FDbkM7Ozs7Ozs7NkNBS0g7O2tDQUNFLDhEQUFDTTt3QkFBR1IsV0FBVTtrQ0FBc0U7Ozs7OztrQ0FHcEYsOERBQUNTO3dCQUFFVCxXQUFVO2tDQUFnRDs7Ozs7O2tDQUc3RCw4REFBQ1M7d0JBQUVULFdBQVU7a0NBQWdEOzs7Ozs7a0NBSzdELDhEQUFDUzt3QkFBRVQsV0FBVTtrQ0FBcUQ7Ozs7OztrQ0FJbEUsOERBQUNHO3dCQUFJSCxXQUFVOzswQ0FDYiw4REFBQ0wsa0RBQUlBO2dDQUFDaUIsTUFBSztnQ0FBcUNDLFFBQU87MENBQ3JELDRFQUFDSDtvQ0FBT1YsV0FBVTs4Q0FDaEIsNEVBQUNKLG1FQUFTQTs7Ozs7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDRCxrREFBSUE7Z0NBQUNpQixNQUFLOzBDQUNULDRFQUFDRjtvQ0FBT1YsV0FBVTs4Q0FDaEIsNEVBQUNILCtEQUFLQTs7Ozs7Ozs7Ozs7Ozs7OzBDQUdWLDhEQUFDRixrREFBSUE7Z0NBQUNpQixNQUFLOzBDQUNULDRFQUFDRjtvQ0FBT1YsV0FBVTs4Q0FDaEIsNEVBQUNGLGlFQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlkLDhEQUFDWTt3QkFDQ1YsV0FBVTt3QkFDVlcsU0FBUyxJQUFNVCxlQUFlLEtBQUs7a0NBQ3BDOzs7Ozs7OzRCQUlKOzs7Ozs7O0FBR1A7R0FuRk1IO0tBQUFBO0FBcUZOLCtEQUFlQSxLQUFLQSxFQUFDLENBRXJCLHdCQUF3QjtDQUV4Qix3QkFBd0I7Q0FFeEIsMkVBQTJFO0NBRTNFLDBLQUEwSztDQUUxSyx1SUFBdUk7Q0FFdkkseUJBQXlCO0NBRXpCLG1DQUFtQztDQUVuQyxtR0FBbUc7Q0FFbkcsOEpBQThKO0NBRTlKLHNKQUFzSjtDQUV0SixxQkFBcUI7Q0FFckIsc0NBQXNDO0NBRXRDLG9HQUFvRztDQUVwRyxtTUFBbU07Q0FFbk0sc0hBQXNIO0NBRXRILHFCQUFxQjtDQUVyQixrQ0FBa0M7Q0FFbEMsNkdBQTZHO0NBRTdHLGlLQUFpSztDQUVqSyxrSUFBa0k7Q0FFbEksbUJBQW1CO0NBRW5CLDhCQUE4QjtDQUU5QiwrRkFBK0Y7Q0FFL0Ysa0lBQWtJO0NBRWxJLDZHQUE2RztDQUU3RyxzQkFBc0I7Q0FFdEIscUJBQXFCO0NBRXJCLDJGQUEyRjtDQUUzRixvSUFBb0k7Q0FFcEksOElBQThJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWJvdXQudHN4P2U1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFBvcnQgZnJvbSBcIi4uL3B1YmxpYy9zZXJnLnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zL0luc3RhZ3JhbVwiO1xuaW1wb3J0IEVtYWlsIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zL0VtYWlsXCJcbmltcG9ydCBUd2l0dGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zL1R3aXR0ZXJcIlxuXG5jb25zdCBBYm91dCA9ICh7IGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xuICBjb25zdCBbc2hvd0NvbnRhY3QsIHNldFNob3dDb250YWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjb250YWluZXIgY29sLXNwYW4tMSBmbGV4IGgtWzYyOXB4XSBmbGV4LWNvbCBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1sZyBiZy13aGl0ZS8xMCAgcHgtNiB0ZXh0LXdoaXRlIHNoYWRvdy1oaWdobGlnaHRgfVxuICAgID5cbiAgICAgIHshc2hvd0NvbnRhY3QgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17UG9ydH1cbiAgICAgICAgICAgIGFsdD1cIlNlcmdcIlxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNSBtdC0xMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshc2hvd0NvbnRhY3QgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTEwIG10LTEwIHRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBBYm91dCBNZVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBweC00IHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZS83NSBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIGEgcGFzc2lvbiBmb3IgcGhvdG9ncmFwaHkuIEkgbG92ZSB0b1xuICAgICAgICAgICAgdHJhdmVsIGFuZCBjYXB0dXJlIHRoZSB3b3JsZCBhcm91bmQgbWUuIEkgYW0gY3VycmVudGx5IGJhc2VkIGluXG4gICAgICAgICAgICBXYXNoaW5ndG9uLCBEQy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBoaWRkZW4gcHgtNCB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGUvNzUgbGc6YmxvY2tcIj5cbiAgICAgICAgICAgIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIGEgcGFzc2lvbiBmb3IgcGhvdG9ncmFwaHkuLi4gLy9cbiAgICAgICAgICAgIHRydW5jYXRlZCBmb3IgYnJldml0eVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHNlbGYtY2VudGVyIHJvdW5kZWQgIGJvcmRlciBweC00IHB5LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLWdyZWVuLTQwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29udGFjdCh0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZXQgSW4gVG91Y2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IG10LTEwIHRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC1hdXRvIHAtNCB0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGUvNzVcIj5cbiAgICAgICAgICAgIElmIGludGVyZXN0ZWQgaW4gYSBzaG9vdCwgc2VuZCBtZSBhbiBlbWFpbCBiZWxvdzpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBwLTQgdGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlLzc1XCI+XG4gICAgICAgICAgICBJIHdpbGwgY29udGFjdCB5b3UgdG8gd29yayBvdXQgZnVydGhlciBkZXRhaWxzIHJlZ2FyZGluZyB0aGUgdGltZSxcbiAgICAgICAgICAgIGxvY2F0aW9uLCBhbmQgcHJpY2Ugb2YgdGhlIHNob290IHRocm91Z2ggZW1haWwgYXMgc29vbiBhcyBwb3NzaWJsZS5cbiAgICAgICAgICAgIEknbSBsb29raW5nIGZvcndhcmQgdG8gY2FwdHVyaW5nIHRoZSBwZXJmZWN0IHNob3RzIGZvciB5b3VyIG5lZWRzIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC1hdXRvIG10LTUgcC00IHRleHQtY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZS83NVwiPlxuICAgICAgICAgICAgSWYgeW91IGhhdmUgYW55IHNwZWNpYWwgcmVxdWVzdHMvcXVlc3Rpb25zLCBtZXNzYWdlIG1lIHRocm91Z2hcbiAgICAgICAgICAgIGluc3RhZ3JhbSBvciByZWFjaCBtZSBieSBlbWFpbCFcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3NvbmRlcnNlcmdpb1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgPEluc3RhZ3JhbSAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86c2VyZ2lvdXJiaW5hMUB5YWhvby5jb21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxFbWFpbCAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86c2VyZ2lvdXJiaW5hMUB5YWhvby5jb21cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxUd2l0dGVyIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgc2VsZi1jZW50ZXIgcm91bmRlZCBib3JkZXIgIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZSBob3Zlcjpib3JkZXItZ3JlZW4tNDAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb250YWN0KGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuXG4vLyAvLyBFbmdhZ2luZyBBcHByb2FjaDpcblxuLy8gTGV0J3MgQ3JlYXRlIFRvZ2V0aGVyXG5cbi8vIFJlYWR5IHRvIGJyaW5nIHlvdXIgdmlzaW9uIHRvIGxpZmU/IEVtYWlsIG1lIHRvIGRpc2N1c3MgeW91ciBuZXh0IHNob290IVxuXG4vLyBXZSdsbCBpcm9uIG91dCB0aGUgZGV0YWlscyBhYm91dCB0aGUgdGltZSwgbG9jYXRpb24sIGFuZCB0aGUgcHJpY2luZyBvdmVyIGVtYWlsIGFzIHNvb24gYXMgcG9zc2libGUuIEknbSBleGNpdGVkIHRvIGRlbGl2ZXIgc3R1bm5pbmcgc2hvdHMgdGhhdCBtZWV0IHlvdXIgZXhwZWN0YXRpb25zLlxuXG4vLyBHb3QgYW55IHVuaXF1ZSByZXF1ZXN0cyBvciBxdWVyaWVzPyBEb24ndCBoZXNpdGF0ZSB0byBETSBtZSBvbiBJbnN0YWdyYW0gb3IgZHJvcCBtZSBhbiBlbWFpbC4gSSdtIGhlcmUgdG8gYW5zd2VyIGFsbCB5b3VyIHF1ZXN0aW9ucy5cblxuLy8gUHJvZmVzc2lvbmFsIEFwcHJvYWNoOlxuXG4vLyBHZXQgaW4gVG91Y2ggZm9yIFlvdXIgTmV4dCBTaG9vdFxuXG4vLyBJbnRlcmVzdGVkIGluIHNjaGVkdWxpbmcgYSBwaG90b3Nob290PyBQbGVhc2UgY29udGFjdCBtZSB2aWEgZW1haWwgYXQgeW91ciBlYXJsaWVzdCBjb252ZW5pZW5jZS5cblxuLy8gSSB3aWxsIHJlc3BvbmQgcHJvbXB0bHkgdG8gZGlzY3VzcyBzcGVjaWZpY3Mgc3VjaCBhcyB0aW1pbmcsIGxvY2F0aW9uLCBhbmQgcHJpY2luZy4gSSdtIGNvbW1pdHRlZCB0byBkZWxpdmVyaW5nIGhpZ2gtcXVhbGl0eSBpbWFnZXMgdGFpbG9yZWQgdG8geW91ciBuZWVkcy5cblxuLy8gSWYgeW91IGhhdmUgYW55IGFkZGl0aW9uYWwgcmVxdWlyZW1lbnRzIG9yIHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byBtZSBvbiBJbnN0YWdyYW0gb3IgdmlhIGVtYWlsLiBZb3VyIHNhdGlzZmFjdGlvbiBpcyBteSB0b3AgcHJpb3JpdHkuXG5cbi8vIEZyaWVuZGx5IEFwcHJvYWNoOlxuXG4vLyBMZXQncyBDYXB0dXJlIFNvbWUgQW1hemluZyBNZW1vcmllc1xuXG4vLyBMb29raW5nIGZvcndhcmQgdG8gYW4gYW1hemluZyBzaG9vdD8gSnVzdCBoaXQgbWUgdXAgd2l0aCBhbiBlbWFpbCBhbmQgd2UnbGwgZ2V0IHRoZSBiYWxsIHJvbGxpbmchXG5cbi8vIEknbGwgZ2V0IGJhY2sgdG8geW91IGFzIHF1aWNrbHkgYXMgSSBjYW4gdG8gc29ydCBvdXQgYWxsIHRoZSBuaXR0eS1ncml0dHkgZGV0YWlscyAtIGxpa2Ugd2hlbiBhbmQgd2hlcmUgd2UncmUgc2hvb3RpbmcsIGFuZCB3aGF0IGl0J2xsIGNvc3QuIEkgY2FuJ3Qgd2FpdCB0byBoZWxwIHlvdSBjYXB0dXJlIHRoZSBwZXJmZWN0IHNob3RzIVxuXG4vLyBHb3QgYW55IHNwZWNpYWwgaWRlYXMgb3IgcXVlc3Rpb25zPyBGZWVsIGZyZWUgdG8gc2xpZGUgaW50byBteSBETXMgb24gSW5zdGFncmFtIG9yIHNob290IG1lIGFuIGVtYWlsLiBJJ20gYWxsIGVhcnMhXG5cbi8vIEFydGlzdGljIEFwcHJvYWNoOlxuXG4vLyBMZXQncyBQYWludCB3aXRoIExpZ2h0IFRvZ2V0aGVyXG5cbi8vIEFyZSB5b3UgcmVhZHkgdG8gY3JlYXRlIGEgbWFzdGVycGllY2U/IFNlbmQgbWUgYW4gZW1haWwgYW5kIHdlIGNhbiBzdGFydCBwbGFubmluZyB5b3VyIHBlcmZlY3QgcGhvdG9zaG9vdC5cblxuLy8gV2Ugd2lsbCB3b3JrIG91dCB0aGUgZGV0YWlscyBzdWNoIGFzIHRpbWUsIGxvY2F0aW9uLCBhbmQgY29zdCBhcyBzb29uIGFzIHBvc3NpYmxlLiBJIGFtIGVhZ2VyIHRvIGhlbHAgeW91IGNyZWF0ZSBiZWF1dGlmdWwgaW1hZ2VzIHRoYXQgdGVsbCB5b3VyIHVuaXF1ZSBzdG9yeS5cblxuLy8gSGF2ZSBhIHNwZWNpYWwgcmVxdWVzdCBvciBxdWVzdGlvbj8gRmVlbCBmcmVlIHRvIHJlYWNoIG91dCBvbiBJbnN0YWdyYW0gb3IgZW1haWwgbWUuIEknbSBoZXJlIHRvIG1ha2UgeW91ciB2aXNpb24gY29tZSB0byBsaWZlLlxuXG4vLyBDYXN1YWwgQXBwcm9hY2g6XG5cbi8vIExldCdzIFNob290IFNvbWUgR3JlYXQgUGljc1xuXG4vLyBXYW5uYSBjcmVhdGUgc29tZSBjb29sIHNuYXBzPyBKdXN0IGRyb3AgbWUgYW4gZW1haWwgYW5kIHdlJ2xsIHN0YXJ0IHNvcnRpbmcgb3V0IHRoZSBkZXRhaWxzLlxuXG4vLyBXZSdsbCBjaGF0IGFib3V0IHRoZSBiZXN0IHRpbWUgYW5kIHBsYWNlIGZvciB5b3VyIHNob290LCBhbmQgaG93IG11Y2ggaXQnbGwgY29zdC4gSSdtIHN0b2tlZCB0byBoZWxwIHlvdSBnZXQgdGhlIHBlcmZlY3Qgc2hvdHMhXG5cbi8vIEdvdCBhIHNwZWNpYWwgaWRlYSBvciBhIHF1ZXN0aW9uPyBIaXQgbWUgdXAgb24gSW5zdGFncmFtIG9yIHNlbmQgbWUgYW4gZW1haWwuIENhbid0IHdhaXQgdG8gaGVhciBmcm9tIHlvdSFcblxuLy8gRW5lcmdldGljIEFwcHJvYWNoOlxuXG4vLyBSZWFkeSwgU2V0LCBTaG9vdCFcblxuLy8gRXhjaXRlZCBmb3IgYW4gYW1hemluZyBwaG90b3Nob290PyBTaG9vdCBtZSBhbiBlbWFpbCBhbmQgbGV0J3MgZ2V0IHRoZSBwbGFubmluZyBzdGFydGVkIVxuXG4vLyBXZSdsbCBxdWlja2x5IHNvcnQgb3V0IGFsbCB0aGUgZGV0YWlscyBpbmNsdWRpbmcgdGhlIHRpbWUsIGxvY2F0aW9uLCBhbmQgcHJpY2luZy4gSSdtIHRocmlsbGVkIHRvIGNhcHR1cmUgdGhlIGJlc3Qgc2hvdHMgZm9yIHlvdSFcblxuLy8gSWYgeW91IGhhdmUgYW55IHVuaXF1ZSByZXF1ZXN0cyBvciBxdWVyaWVzLCBqdXN0IG1lc3NhZ2UgbWUgb24gSW5zdGFncmFtIG9yIHJlYWNoIG1lIHZpYSBlbWFpbC4gTGV0J3MgbWFrZSB5b3VyIHBob3Rvc2hvb3QgYSBtZW1vcmFibGUgb25lIVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIlBvcnQiLCJMaW5rIiwiSW5zdGFncmFtIiwiRW1haWwiLCJUd2l0dGVyIiwiQWJvdXQiLCJjbGFzc05hbWUiLCJzaG93Q29udGFjdCIsInNldFNob3dDb250YWN0IiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/About.tsx\n"));

/***/ })

});