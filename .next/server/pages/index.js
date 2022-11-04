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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_xata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/xata */ \"./util/xata.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_xata__WEBPACK_IMPORTED_MODULE_3__]);\n_util_xata__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst index = ({ todos  })=>{\n    console.log(\"This is todos: \", todos);\n    todos.map((todo)=>console.log(todo.label));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://unpkg.com/mvp.css@1.12/mvp.css\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Todo List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: todo.is_done,\n                                            name: \"\",\n                                            id: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        todo.label\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 22\n                                }, undefined)\n                            }, todo.id, false, {\n                                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bowen\\\\Documents\\\\To-Do App\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\nconst xata = new _util_xata__WEBPACK_IMPORTED_MODULE_3__.XataClient();\nconst getServerSideProps = async ()=>{\n    const todos = await xata.db.items.getMany();\n    return {\n        props: {\n            todos\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNHO0FBQ2E7QUFFMUMsTUFBTUcsUUFBUSxDQUFDLEVBQUVDLE1BQUssRUFBRSxHQUFLO0lBQzFCQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CRjtJQUMvQkEsTUFBTUcsR0FBRyxDQUFDQyxDQUFBQSxPQUFRSCxRQUFRQyxHQUFHLENBQUNFLEtBQUtDLEtBQUs7SUFDeEMscUJBQ0csOERBQUNDOzswQkFDRSw4REFBQ1Qsa0RBQUlBOzBCQUNMLDRFQUFDVTtvQkFBS0MsS0FBSTtvQkFBYUMsTUFBSzs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDQzs7a0NBQ0UsOERBQUNDO2tDQUFHOzs7Ozs7a0NBRUosOERBQUNDO2tDQUNHWixNQUFNRyxHQUFHLENBQUNDLENBQUFBLE9BQVE7NEJBQ2hCLHFCQUNBLDhEQUFDUzswQ0FDRSw0RUFBQ1I7b0NBQU1TLFNBQVE7O3NEQUNaLDhEQUFDQzs0Q0FBTUMsTUFBSzs0Q0FBV0MsU0FBU2IsS0FBS2MsT0FBTzs0Q0FBRUMsTUFBSzs0Q0FBR0MsSUFBRzs7Ozs7O3dDQUN4RGhCLEtBQUtDLEtBQUs7Ozs7Ozs7K0JBSFJELEtBQUtnQixFQUFFOzs7Ozt3QkFPbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO0FBRUEsaUVBQWVyQixLQUFLQSxFQUFDO0FBRXJCLE1BQU1zQixPQUFPLElBQUl2QixrREFBVUE7QUFFcEIsTUFBTXdCLHFCQUFxQixVQUFZO0lBQzNDLE1BQU10QixRQUFRLE1BQU1xQixLQUFLRSxFQUFFLENBQUNDLEtBQUssQ0FBQ0MsT0FBTztJQUV6QyxPQUFPO1FBQ0pDLE9BQU87WUFDSjFCO1FBQ0g7SUFDSDtBQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFhhdGFDbGllbnQgfSBmcm9tICcuLi91dGlsL3hhdGEnO1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyB0b2RvcyB9KSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0b2RvczogXCIsIHRvZG9zKTtcclxuICAgdG9kb3MubWFwKHRvZG8gPT4gY29uc29sZS5sb2codG9kby5sYWJlbCkpO1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbXZwLmNzc0AxLjEyL212cC5jc3NcIiAvPiBcclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+TXkgVG9kbyBMaXN0PC9oMT4gXHJcbiAgICAgICAgICAgIHsvKiA8cD57dG9kb3N9PC9wPiAqL31cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RvZG8uaXNfZG9uZX0gbmFtZT1cIlwiIGlkPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5cclxuY29uc3QgeGF0YSA9IG5ldyBYYXRhQ2xpZW50KClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgIGNvbnN0IHRvZG9zID0gYXdhaXQgeGF0YS5kYi5pdGVtcy5nZXRNYW55KClcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgIHRvZG9zXHJcbiAgICAgIH1cclxuICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlhhdGFDbGllbnQiLCJpbmRleCIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRvZG8iLCJsYWJlbCIsIm1haW4iLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImgxIiwidWwiLCJsaSIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiaXNfZG9uZSIsIm5hbWUiLCJpZCIsInhhdGEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJkYiIsIml0ZW1zIiwiZ2V0TWFueSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./util/xata.js":
/*!**********************!*\
  !*** ./util/xata.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XataClient\": () => (/* binding */ XataClient),\n/* harmony export */   \"getXataClient\": () => (/* binding */ getXataClient)\n/* harmony export */ });\n/* harmony import */ var _xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xata.io/client */ \"@xata.io/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_xata_io_client__WEBPACK_IMPORTED_MODULE_0__]);\n_xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Generated by Xata Codegen 0.18.0. Please do not edit.\n\n/** @typedef { import('./types').SchemaTables } SchemaTables */ /** @type { SchemaTables } */ const tables = [\n    {\n        name: \"items\",\n        columns: [\n            {\n                name: \"label\",\n                type: \"string\"\n            },\n            {\n                name: \"is_done\",\n                type: \"bool\"\n            }\n        ]\n    }\n];\n/** @type { import('@xata.io/client').ClientConstructor<{}> } */ const DatabaseClient = (0,_xata_io_client__WEBPACK_IMPORTED_MODULE_0__.buildClient)();\nconst defaultOptions = {\n    databaseURL: \"https://Ivan-Bowen-s-workspace-t34ncp.us-east-1.xata.sh/db/to-do-list\"\n};\n/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */ /** @extends DatabaseClient<DatabaseSchema> */ class XataClient extends DatabaseClient {\n    constructor(options){\n        super({\n            ...defaultOptions,\n            ...options\n        }, tables);\n    }\n}\nlet instance = undefined;\n/** @type { () => XataClient } */ const getXataClient = ()=>{\n    if (instance) return instance;\n    instance = new XataClient();\n    return instance;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3hhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQ1Y7QUFDOUMsNkRBQTZELEdBQzdELDJCQUEyQixHQUMzQixNQUFNQyxTQUFTO0lBQ2I7UUFDRUMsTUFBTTtRQUNOQyxTQUFTO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQVNFLE1BQU07WUFBUztZQUNoQztnQkFBRUYsTUFBTTtnQkFBV0UsTUFBTTtZQUFPO1NBQ2pDO0lBQ0g7Q0FDRDtBQUNELDhEQUE4RCxHQUM5RCxNQUFNQyxpQkFBaUJMLDREQUFXQTtBQUNsQyxNQUFNTSxpQkFBaUI7SUFDckJDLGFBQ0U7QUFDSjtBQUNBLGlFQUFpRSxHQUNqRSw0Q0FBNEMsR0FDckMsTUFBTUMsbUJBQW1CSDtJQUM5QkksWUFBWUMsT0FBTyxDQUFFO1FBQ25CLEtBQUssQ0FBQztZQUFFLEdBQUdKLGNBQWM7WUFBRSxHQUFHSSxPQUFPO1FBQUMsR0FBR1Q7SUFDM0M7QUFDRixDQUFDO0FBQ0QsSUFBSVUsV0FBV0M7QUFDZiwrQkFBK0IsR0FDeEIsTUFBTUMsZ0JBQWdCLElBQU07SUFDakMsSUFBSUYsVUFBVSxPQUFPQTtJQUNyQkEsV0FBVyxJQUFJSDtJQUNmLE9BQU9HO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3V0aWwveGF0YS5qcz9jZGEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBieSBYYXRhIENvZGVnZW4gMC4xOC4wLiBQbGVhc2UgZG8gbm90IGVkaXQuXG5pbXBvcnQgeyBidWlsZENsaWVudCB9IGZyb20gXCJAeGF0YS5pby9jbGllbnRcIjtcbi8qKiBAdHlwZWRlZiB7IGltcG9ydCgnLi90eXBlcycpLlNjaGVtYVRhYmxlcyB9IFNjaGVtYVRhYmxlcyAqL1xuLyoqIEB0eXBlIHsgU2NoZW1hVGFibGVzIH0gKi9cbmNvbnN0IHRhYmxlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiaXRlbXNcIixcbiAgICBjb2x1bW5zOiBbXG4gICAgICB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgeyBuYW1lOiBcImlzX2RvbmVcIiwgdHlwZTogXCJib29sXCIgfSxcbiAgICBdLFxuICB9LFxuXTtcbi8qKiBAdHlwZSB7IGltcG9ydCgnQHhhdGEuaW8vY2xpZW50JykuQ2xpZW50Q29uc3RydWN0b3I8e30+IH0gKi9cbmNvbnN0IERhdGFiYXNlQ2xpZW50ID0gYnVpbGRDbGllbnQoKTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBkYXRhYmFzZVVSTDpcbiAgICBcImh0dHBzOi8vSXZhbi1Cb3dlbi1zLXdvcmtzcGFjZS10MzRuY3AudXMtZWFzdC0xLnhhdGEuc2gvZGIvdG8tZG8tbGlzdFwiLFxufTtcbi8qKiBAdHlwZWRlZiB7IGltcG9ydCgnLi90eXBlcycpLkRhdGFiYXNlU2NoZW1hIH0gRGF0YWJhc2VTY2hlbWEgKi9cbi8qKiBAZXh0ZW5kcyBEYXRhYmFzZUNsaWVudDxEYXRhYmFzZVNjaGVtYT4gKi9cbmV4cG9ydCBjbGFzcyBYYXRhQ2xpZW50IGV4dGVuZHMgRGF0YWJhc2VDbGllbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9LCB0YWJsZXMpO1xuICB9XG59XG5sZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4vKiogQHR5cGUgeyAoKSA9PiBYYXRhQ2xpZW50IH0gKi9cbmV4cG9ydCBjb25zdCBnZXRYYXRhQ2xpZW50ID0gKCkgPT4ge1xuICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgaW5zdGFuY2UgPSBuZXcgWGF0YUNsaWVudCgpO1xuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwidGFibGVzIiwibmFtZSIsImNvbHVtbnMiLCJ0eXBlIiwiRGF0YWJhc2VDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsImRhdGFiYXNlVVJMIiwiWGF0YUNsaWVudCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwiZ2V0WGF0YUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/xata.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ "@xata.io/client":
/*!**********************************!*\
  !*** external "@xata.io/client" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@xata.io/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();