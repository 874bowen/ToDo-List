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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst index = (param)=>{\n    let { todos  } = param;\n    console.log(\"This is todos: \", todos);\n    todos.map((todo)=>console.log(todo.label));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://unpkg.com/mvp.css@1.12/mvp.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Todo List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        display: \"flex\"\n                                    },\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    onChange: ()=>{\n                                                        fetch(\"/api/do-todo\", {\n                                                            method: \"POST\",\n                                                            headers: {\n                                                                \"Content-Type\": \"application/json\"\n                                                            },\n                                                            body: JSON.stringify({\n                                                                id: todo.id,\n                                                                is_done: !todo.is_done\n                                                            })\n                                                        }).then(()=>window.location.reload());\n                                                    },\n                                                    type: \"checkbox\",\n                                                    checked: todo.is_done,\n                                                    name: \"\",\n                                                    id: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                                    lineNumber: 22,\n                                                    columnNumber: 28\n                                                }, undefined),\n                                                todo.label\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 22\n                                }, undefined)\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUc3QixNQUFNRSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO0lBQy9CQSxNQUFNRyxHQUFHLENBQUNDLENBQUFBLE9BQVFILFFBQVFDLEdBQUcsQ0FBQ0UsS0FBS0MsS0FBSztJQUN4QyxxQkFDRyw4REFBQ0M7OzBCQUNFLDhEQUFDUixrREFBSUE7MEJBQ0wsNEVBQUNTO29CQUFLQyxLQUFJO29CQUFhQyxNQUFLOzs7Ozs7Ozs7OzswQkFFNUIsOERBQUNDOztrQ0FDRSw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ0M7a0NBQ0daLE1BQU1HLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUTs0QkFDaEIscUJBQ0EsOERBQUNTOzBDQUNFLDRFQUFDSDtvQ0FBSUksT0FBTzt3Q0FBQ0MsU0FBUTtvQ0FBTTtvQ0FBR0MsV0FBVTs7c0RBQ3JDLDhEQUFDWDs0Q0FBTVksU0FBUTs7OERBQ1osOERBQUNDO29EQUFNQyxVQUFVLElBQU07d0RBQ3BCQyxNQUFNLGdCQUFnQjs0REFDbkJDLFFBQVM7NERBQ1RDLFNBQVU7Z0VBQ1AsZ0JBQWdCOzREQUNuQjs0REFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dFQUNsQkMsSUFBSXRCLEtBQUtzQixFQUFFO2dFQUNYQyxTQUFTLENBQUN2QixLQUFLdUIsT0FBTzs0REFDekI7d0RBQ0gsR0FBR0MsSUFBSSxDQUFDLElBQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtvREFDdkM7b0RBQUdDLE1BQUs7b0RBQVdDLFNBQVM3QixLQUFLdUIsT0FBTztvREFBRU8sTUFBSztvREFBR1IsSUFBRzs7Ozs7O2dEQUNwRHRCLEtBQUtDLEtBQUs7Ozs7Ozs7c0RBRWQsOERBQUM4QjtzREFBTzs7Ozs7Ozs7Ozs7OytCQWpCTC9CLEtBQUtzQixFQUFFOzs7Ozt3QkFxQm5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjs7QUFFQSwrREFBZTNCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBYYXRhQ2xpZW50IH0gZnJvbSAnLi4vdXRpbC94YXRhJztcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgdG9kb3MgfSkgPT4ge1xyXG4gICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdG9kb3M6IFwiLCB0b2Rvcyk7XHJcbiAgIHRvZG9zLm1hcCh0b2RvID0+IGNvbnNvbGUubG9nKHRvZG8ubGFiZWwpKTtcclxuICAgcmV0dXJuIChcclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL212cC5jc3NAMS4xMi9tdnAuY3NzXCIgLz4gXHJcbiAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPk15IFRvZG8gTGlzdDwvaDE+IFxyXG4gICAgICAgICAgICB7LyogPHA+e3RvZG9zfTwvcD4gKi99XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0gY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL2RvLXRvZG9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2QgOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdG9kby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZG9uZTogIXRvZG8uaXNfZG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dG9kby5pc19kb25lfSBuYW1lPVwiXCIgaWQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kby5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5cclxuY29uc3QgeGF0YSA9IG5ldyBYYXRhQ2xpZW50KClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgIGNvbnN0IHRvZG9zID0gYXdhaXQgeGF0YS5kYi5pdGVtcy5nZXRNYW55KClcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgIHRvZG9zXHJcbiAgICAgIH1cclxuICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsImluZGV4IiwidG9kb3MiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidG9kbyIsImxhYmVsIiwibWFpbiIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiaDEiLCJ1bCIsImxpIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiaXNfZG9uZSIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInR5cGUiLCJjaGVja2VkIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});