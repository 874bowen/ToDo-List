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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst index = (param)=>{\n    let { todos  } = param;\n    console.log(\"This is todos: \", todos);\n    todos.map((todo)=>console.log(todo.label));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://unpkg.com/mvp.css@1.12/mvp.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Todo List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \"`\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    onChange: ()=>{\n                                                        fetch(\"/api/do-todo\", {\n                                                            method: \"POST\",\n                                                            headers: {\n                                                                \"Content-Type\": \"application/json\"\n                                                            },\n                                                            body: JSON.stringify({\n                                                                id: todo.id,\n                                                                is_done: !todo.is_done\n                                                            })\n                                                        }).then(()=>window.location.reload());\n                                                    },\n                                                    type: \"checkbox\",\n                                                    checked: todo.is_done,\n                                                    name: \"\",\n                                                    id: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                                    lineNumber: 22,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                todo.label\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        \"`\"\n                                    ]\n                                }, void 0, true)\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUc3QixNQUFNRSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO0lBQy9CQSxNQUFNRyxHQUFHLENBQUNDLENBQUFBLE9BQVFILFFBQVFDLEdBQUcsQ0FBQ0UsS0FBS0MsS0FBSztJQUN4QyxxQkFDRyw4REFBQ0M7OzBCQUNFLDhEQUFDUixrREFBSUE7MEJBQ0wsNEVBQUNTO29CQUFLQyxLQUFJO29CQUFhQyxNQUFLOzs7Ozs7Ozs7OzswQkFFNUIsOERBQUNDOztrQ0FDRSw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ0M7a0NBQ0daLE1BQU1HLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUTs0QkFDaEIscUJBQ0EsOERBQUNTOzBDQUNFOzt3Q0FBRTtzREFDRCw4REFBQ1I7NENBQU1TLFNBQVE7OzhEQUNiLDhEQUFDQztvREFBTUMsVUFBVSxJQUFNO3dEQUNwQkMsTUFBTSxnQkFBZ0I7NERBQ25CQyxRQUFTOzREQUNUQyxTQUFVO2dFQUNQLGdCQUFnQjs0REFDbkI7NERBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnRUFDbEJDLElBQUluQixLQUFLbUIsRUFBRTtnRUFDWEMsU0FBUyxDQUFDcEIsS0FBS29CLE9BQU87NERBQ3pCO3dEQUNILEdBQUdDLElBQUksQ0FBQyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07b0RBQ3ZDO29EQUFHQyxNQUFLO29EQUFXQyxTQUFTMUIsS0FBS29CLE9BQU87b0RBQUVPLE1BQUs7b0RBQUdSLElBQUc7Ozs7OztnREFDcERuQixLQUFLQyxLQUFLOzs7Ozs7O3dDQUNOOzs7K0JBaEJGRCxLQUFLbUIsRUFBRTs7Ozs7d0JBb0JuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7O0FBRUEsK0RBQWV4QixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgWGF0YUNsaWVudCB9IGZyb20gJy4uL3V0aWwveGF0YSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IHRvZG9zIH0pID0+IHtcclxuICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRvZG9zOiBcIiwgdG9kb3MpO1xyXG4gICB0b2Rvcy5tYXAodG9kbyA9PiBjb25zb2xlLmxvZyh0b2RvLmxhYmVsKSk7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9tdnAuY3NzQDEuMTIvbXZwLmNzc1wiIC8+IFxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5NeSBUb2RvIExpc3Q8L2gxPiBcclxuICAgICAgICAgICAgey8qIDxwPnt0b2Rvc308L3A+ICovfVxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICBgPGxhYmVsIGh0bWxGb3I9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FwaS9kby10b2RvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRvZG8uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2RvbmU6ICF0b2RvLmlzX2RvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RvZG8uaXNfZG9uZX0gbmFtZT1cIlwiIGlkPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+YFxyXG4gICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcblxyXG5jb25zdCB4YXRhID0gbmV3IFhhdGFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgY29uc3QgdG9kb3MgPSBhd2FpdCB4YXRhLmRiLml0ZW1zLmdldE1hbnkoKVxyXG5cclxuICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgdG9kb3NcclxuICAgICAgfVxyXG4gICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiaW5kZXgiLCJ0b2RvcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0b2RvIiwibGFiZWwiLCJtYWluIiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJpc19kb25lIiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidHlwZSIsImNoZWNrZWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});