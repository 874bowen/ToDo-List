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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AddToDoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AddToDoForm */ \"./components/AddToDoForm.js\");\n\n\n\n\nconst index = (param)=>{\n    let { todos  } = param;\n    // console.log(\"This is todos: \", todos);\n    // todos.map(todo => console.log(todo.label));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://unpkg.com/mvp.css@1.12/mvp.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Todo List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddToDoForm__WEBPACK_IMPORTED_MODULE_3__.AddTodoForm, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        \"display\": \"flex\",\n                                        \"gap\": \"3em\",\n                                        \"justify-content\": \"space-between\",\n                                        \"align-items\": \"center\",\n                                        \"flex-direction\": \"row\"\n                                    },\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    onChange: ()=>{\n                                                        fetch(\"/api/do-todo\", {\n                                                            method: \"PUT\",\n                                                            headers: {\n                                                                \"Content-Type\": \"application/json\"\n                                                            },\n                                                            body: JSON.stringify({\n                                                                id: todo.id,\n                                                                is_done: !todo.is_done\n                                                            })\n                                                        }).then(()=>window.location.reload());\n                                                    },\n                                                    type: \"checkbox\",\n                                                    checked: todo.is_done,\n                                                    name: \"\",\n                                                    id: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                                    lineNumber: 26,\n                                                    columnNumber: 28\n                                                }, undefined),\n                                                todo.label\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>{\n                                                fetch(\"/api/delete-todo\", {\n                                                    method: \"DELETE\",\n                                                    headers: {\n                                                        \"Content-Type\": \"application/json\"\n                                                    },\n                                                    body: JSON.stringify({\n                                                        id: todo.id\n                                                    })\n                                                }).then(()=>window.location.reload());\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 22\n                                }, undefined)\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0c7QUFFMkI7QUFJeEQsTUFBTUcsUUFBUSxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFO0lBQ3JCLHlDQUF5QztJQUN6Qyw4Q0FBOEM7SUFDOUMscUJBQ0csOERBQUNDOzswQkFDRSw4REFBQ0osa0RBQUlBOzBCQUNMLDRFQUFDSztvQkFBS0MsS0FBSTtvQkFBYUMsTUFBSzs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDQzs7a0NBQ0UsOERBQUNDO2tDQUFHOzs7Ozs7a0NBRUosOERBQUNSLGdFQUFXQTs7Ozs7a0NBQ1osOERBQUNTO2tDQUNHUCxNQUFNUSxHQUFHLENBQUNDLENBQUFBLE9BQVE7NEJBQ2hCLHFCQUNBLDhEQUFDQzswQ0FDRSw0RUFBQ0w7b0NBQUlNLE9BQU87d0NBQUMsV0FBVTt3Q0FBUSxPQUFPO3dDQUFPLG1CQUFtQjt3Q0FBaUIsZUFBZTt3Q0FBUyxrQkFBa0I7b0NBQUs7b0NBQUdDLFdBQVU7O3NEQUMxSSw4REFBQ0M7NENBQU1DLFNBQVE7OzhEQUNaLDhEQUFDQztvREFBTUMsVUFBVSxJQUFNO3dEQUNwQkMsTUFBTSxnQkFBZ0I7NERBQ25CQyxRQUFTOzREQUNUQyxTQUFVO2dFQUNQLGdCQUFnQjs0REFDbkI7NERBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnRUFDbEJDLElBQUlkLEtBQUtjLEVBQUU7Z0VBQ1hDLFNBQVMsQ0FBQ2YsS0FBS2UsT0FBTzs0REFDekI7d0RBQ0gsR0FBR0MsSUFBSSxDQUFDLElBQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtvREFDdkM7b0RBQUdDLE1BQUs7b0RBQVdDLFNBQVNyQixLQUFLZSxPQUFPO29EQUFFTyxNQUFLO29EQUFHUixJQUFHOzs7Ozs7Z0RBQ3BEZCxLQUFLSSxLQUFLOzs7Ozs7O3NEQUVkLDhEQUFDbUI7NENBQU9DLFNBQVMsSUFBTTtnREFDakJoQixNQUFNLG9CQUFvQjtvREFDdkJDLFFBQVM7b0RBQ1RDLFNBQVU7d0RBQ1AsZ0JBQWdCO29EQUNuQjtvREFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dEQUNsQkMsSUFBSWQsS0FBS2MsRUFBRTtvREFDZDtnREFDSCxHQUFHRSxJQUFJLENBQUMsSUFBTUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNOzRDQUN2QztzREFBRzs7Ozs7Ozs7Ozs7OytCQTNCSG5CLEtBQUtjLEVBQUU7Ozs7O3dCQStCbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtmOztBQUVBLCtEQUFleEIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFhhdGFDbGllbnQgfSBmcm9tICcuLi91dGlsL3hhdGEnO1xyXG5pbXBvcnQgeyBBZGRUb2RvRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQWRkVG9Eb0Zvcm0nO1xyXG5pbXBvcnQgeyBhdXRob3JpemUgfSBmcm9tIFwiLi4vdXRpbC9hdXRob3JpemVcIjtcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHRvZG9zIH0pID0+IHtcclxuICAgLy8gY29uc29sZS5sb2coXCJUaGlzIGlzIHRvZG9zOiBcIiwgdG9kb3MpO1xyXG4gICAvLyB0b2Rvcy5tYXAodG9kbyA9PiBjb25zb2xlLmxvZyh0b2RvLmxhYmVsKSk7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9tdnAuY3NzQDEuMTIvbXZwLmNzc1wiIC8+IFxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5NeSBUb2RvIExpc3Q8L2gxPiBcclxuICAgICAgICAgICAgey8qIDxwPnt0b2Rvc308L3A+ICovfVxyXG4gICAgICAgICAgICA8QWRkVG9kb0Zvcm0gLz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1wiZGlzcGxheVwiOlwiZmxleFwiLCBcImdhcFwiOiBcIjNlbVwiLCBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIiwgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFwiZmxleC1kaXJlY3Rpb25cIjogXCJyb3dcIn19IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FwaS9kby10b2RvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kIDogXCJQVVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdG9kby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZG9uZTogIXRvZG8uaXNfZG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dG9kby5pc19kb25lfSBuYW1lPVwiXCIgaWQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kby5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FwaS9kZWxldGUtdG9kb1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCA6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRvZG8uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4vLyAgICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHVzZXJuYW1lIH0gPSBhd2FpdCBhdXRob3JpemUocmVxKTtcclxuICAgXHJcbi8vICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbi8vICAgICAgIGNvbnN0IHhhdGEgPSBnZXRYYXRhQ2xpZW50KCk7XHJcbi8vICAgICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgeGF0YS5kYi5pdGVtc1xyXG4vLyAgICAgICAgIC5maWx0ZXIoXCJ1c2VyLnVzZXJuYW1lXCIsIHVzZXJuYW1lKSAvLyB0by1kbyBpdGVtcyBhcmUgbm93IGZpbHRlcmVkIHRvIHRoZSBjdXJyZW50IGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4vLyAgICAgICAgIC5nZXRNYW55KCk7XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgdG9kb3MsXHJcbi8vICAgICAgICAgIH0sXHJcbi8vICAgICAgICB9O1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHJlcy53cml0ZUhlYWQoNDAxLCB7XHJcbi8vICAgICAgICAgIFwiV1dXLUF1dGhlbnRpY2F0ZVwiOiBcIkJhc2ljIHJlYWxtPSdUaGlzIGlzIGEgcHJpdmF0ZSB0by1kbyBsaXN0J1wiLFxyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgICAgICByZXR1cm4geyByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogXCIvXCIsIHBlcm1hbmVudDogZmFsc2UgfSB9O1xyXG4vLyAgICB9XHJcbi8vIH07XHJcbmNvbnN0IHhhdGEgPSBuZXcgWGF0YUNsaWVudCgpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHtyZXEsIHJlc30pID0+IHtcclxuXHJcbiAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCB1c2VybmFtZSB9ID0gYXdhaXQgYXV0aG9yaXplKHJlcSk7XHJcblxyXG4gICBpZiAoaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCB4YXRhLmRiLml0ZW1zLmdldE1hbnkoKVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdG9kb3NcclxuICAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgfSBcclxuICAgZWxzZSB7XHJcbiAgICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IHhhdGEuZGIuaXRlbXMuZ2V0TWFueSgpXHJcblxyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgICBwcm9wczoge1xyXG4gICAgLy8gICAgICAgICB0b2Rvc1xyXG4gICAgLy8gICAgICB9LFxyXG4gICAgLy8gICB9O1xyXG4gICAgY29uc3QgYm9keSA9ICdoZWxsbyB3b3JsZCc7XHJcbiAgcmVzcG9uc2VcclxuICAgIC53cml0ZUhlYWQoMjAwLCB7XHJcbiAgICAgICdDb250ZW50LUxlbmd0aCc6IEJ1ZmZlci5ieXRlTGVuZ3RoKGJvZHkpLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcbiAgICB9KVxyXG4gICAgLmVuZChib2R5KTtcclxuICAgICAgLy8gcmVzLndyaXRlSGVhZCg0MDEsIHsgXCJXV1ctQXV0aGVudGljYXRlXCI6IFwiQmFzaWMgcmVhbG09J1RoaXMgaXMgYSBwcml2YXRlIHRvLWRvIGxpc3QnXCJ9KTtcclxuICAgICAgcmV0dXJuIHsgcmVkaXJlY3QgOnsgZGVzdGluYXRpb246ICcvJywgcGVybWFuZW50OiB0cnVlIH0gfVxyXG4gICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiQWRkVG9kb0Zvcm0iLCJpbmRleCIsInRvZG9zIiwibWFpbiIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsInN0eWxlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJpc19kb25lIiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidHlwZSIsImNoZWNrZWQiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});