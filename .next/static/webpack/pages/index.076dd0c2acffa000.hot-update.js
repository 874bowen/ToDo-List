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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst index = (param)=>{\n    let { todos  } = param;\n    console.log(\"This is todos: \", todos);\n    todos.map((todo)=>console.log(todo.label));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://unpkg.com/mvp.css@1.12/mvp.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Todo List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        \"display\": \"flex\",\n                                        \"gap\": \"3em\",\n                                        \"align-items\": \"center\",\n                                        \"flex-direction\": \"row\"\n                                    },\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    onChange: ()=>{\n                                                        fetch(\"/api/do-todo\", {\n                                                            method: \"PUT\",\n                                                            headers: {\n                                                                \"Content-Type\": \"application/json\"\n                                                            },\n                                                            body: JSON.stringify({\n                                                                id: todo.id,\n                                                                is_done: !todo.is_done\n                                                            })\n                                                        }).then(()=>window.location.reload());\n                                                    },\n                                                    type: \"checkbox\",\n                                                    checked: todo.is_done,\n                                                    name: \"\",\n                                                    id: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                                    lineNumber: 22,\n                                                    columnNumber: 28\n                                                }, undefined),\n                                                todo.label\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>{\n                                                fetch(\"/api/delete-todo\", {\n                                                    method: \"DELETE\",\n                                                    headers: {\n                                                        \"Content-Type\": \"application/json\"\n                                                    },\n                                                    body: JSON.stringify({\n                                                        id: todo.id\n                                                    })\n                                                }).then(()=>window.location.reload());\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 22\n                                }, undefined)\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUc3QixNQUFNRSxRQUFRLFNBQWU7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO0lBQy9CQSxNQUFNRyxHQUFHLENBQUNDLENBQUFBLE9BQVFILFFBQVFDLEdBQUcsQ0FBQ0UsS0FBS0MsS0FBSztJQUN4QyxxQkFDRyw4REFBQ0M7OzBCQUNFLDhEQUFDUixrREFBSUE7MEJBQ0wsNEVBQUNTO29CQUFLQyxLQUFJO29CQUFhQyxNQUFLOzs7Ozs7Ozs7OzswQkFFNUIsOERBQUNDOztrQ0FDRSw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ0M7a0NBQ0daLE1BQU1HLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUTs0QkFDaEIscUJBQ0EsOERBQUNTOzBDQUNFLDRFQUFDSDtvQ0FBSUksT0FBTzt3Q0FBQyxXQUFVO3dDQUFRLE9BQU87d0NBQU8sZUFBZTt3Q0FBUyxrQkFBa0I7b0NBQUs7b0NBQUdDLFdBQVU7O3NEQUN0Ryw4REFBQ1Y7NENBQU1XLFNBQVE7OzhEQUNaLDhEQUFDQztvREFBTUMsVUFBVSxJQUFNO3dEQUNwQkMsTUFBTSxnQkFBZ0I7NERBQ25CQyxRQUFTOzREQUNUQyxTQUFVO2dFQUNQLGdCQUFnQjs0REFDbkI7NERBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnRUFDbEJDLElBQUlyQixLQUFLcUIsRUFBRTtnRUFDWEMsU0FBUyxDQUFDdEIsS0FBS3NCLE9BQU87NERBQ3pCO3dEQUNILEdBQUdDLElBQUksQ0FBQyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07b0RBQ3ZDO29EQUFHQyxNQUFLO29EQUFXQyxTQUFTNUIsS0FBS3NCLE9BQU87b0RBQUVPLE1BQUs7b0RBQUdSLElBQUc7Ozs7OztnREFDcERyQixLQUFLQyxLQUFLOzs7Ozs7O3NEQUVkLDhEQUFDNkI7NENBQU9DLFNBQVMsSUFBTTtnREFDakJoQixNQUFNLG9CQUFvQjtvREFDdkJDLFFBQVM7b0RBQ1RDLFNBQVU7d0RBQ1AsZ0JBQWdCO29EQUNuQjtvREFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dEQUNsQkMsSUFBSXJCLEtBQUtxQixFQUFFO29EQUNkO2dEQUNILEdBQUdFLElBQUksQ0FBQyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07NENBQ3ZDO3NEQUFHOzs7Ozs7Ozs7Ozs7K0JBM0JIMUIsS0FBS3FCLEVBQUU7Ozs7O3dCQStCbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtmOztBQUVBLCtEQUFlMUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFhhdGFDbGllbnQgfSBmcm9tICcuLi91dGlsL3hhdGEnO1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyB0b2RvcyB9KSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0b2RvczogXCIsIHRvZG9zKTtcclxuICAgdG9kb3MubWFwKHRvZG8gPT4gY29uc29sZS5sb2codG9kby5sYWJlbCkpO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbXZwLmNzc0AxLjEyL212cC5jc3NcIiAvPiBcclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+TXkgVG9kbyBMaXN0PC9oMT4gXHJcbiAgICAgICAgICAgIHsvKiA8cD57dG9kb3N9PC9wPiAqL31cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1wiZGlzcGxheVwiOlwiZmxleFwiLCBcImdhcFwiOiBcIjNlbVwiLCBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXCJmbGV4LWRpcmVjdGlvblwiOiBcInJvd1wifX0gY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL2RvLXRvZG9cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2QgOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0b2RvLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kb25lOiAhdG9kby5pc19kb25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0b2RvLmlzX2RvbmV9IG5hbWU9XCJcIiBpZD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL2RlbGV0ZS10b2RvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kIDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdG9kby5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuXHJcbmNvbnN0IHhhdGEgPSBuZXcgWGF0YUNsaWVudCgpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICBjb25zdCB0b2RvcyA9IGF3YWl0IHhhdGEuZGIuaXRlbXMuZ2V0TWFueSgpXHJcblxyXG4gICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICB0b2Rvc1xyXG4gICAgICB9XHJcbiAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJpbmRleCIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRvZG8iLCJsYWJlbCIsIm1haW4iLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImgxIiwidWwiLCJsaSIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiaXNfZG9uZSIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInR5cGUiLCJjaGVja2VkIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});