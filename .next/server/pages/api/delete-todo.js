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
exports.id = "pages/api/delete-todo";
exports.ids = ["pages/api/delete-todo"];
exports.modules = {

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "@xata.io/client":
/*!**********************************!*\
  !*** external "@xata.io/client" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@xata.io/client");;

/***/ }),

/***/ "(api)/./pages/api/delete-todo.js":
/*!**********************************!*\
  !*** ./pages/api/delete-todo.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_xata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/xata */ \"(api)/./util/xata.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_xata__WEBPACK_IMPORTED_MODULE_0__]);\n_util_xata__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// type ResponseData = {\n//    message: string\n// }\nconst xata = (0,_util_xata__WEBPACK_IMPORTED_MODULE_0__.getXataClient)();\nconst handler = async (req, res)=>{\n    const { id  } = req.body;\n    await xata.db.items.delete(id);\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlLXRvZG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUN1QjtBQUV2RSx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixNQUFNSSxPQUFPSix5REFBYUE7QUFDMUIsTUFBTUssVUFBVSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU0sRUFBQ0MsR0FBRSxFQUFDLEdBQUdGLElBQUlHLElBQUk7SUFDckIsTUFBTUwsS0FBS00sRUFBRSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0o7SUFDM0JELElBQUlNLEdBQUc7QUFDVjtBQUVBLGlFQUFlUixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vcGFnZXMvYXBpL2RlbGV0ZS10b2RvLmpzPzU1NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0WGF0YUNsaWVudCB9IGZyb20gXCIuLi8uLi91dGlsL3hhdGFcIjtcclxuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuLy8gdHlwZSBSZXNwb25zZURhdGEgPSB7XHJcbi8vICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG4vLyB9XHJcblxyXG5jb25zdCB4YXRhID0gZ2V0WGF0YUNsaWVudCgpO1xyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IHtpZH0gPSByZXEuYm9keTtcclxuICAgYXdhaXQgeGF0YS5kYi5pdGVtcy5kZWxldGUoaWQpO1xyXG4gICByZXMuZW5kKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImdldFhhdGFDbGllbnQiLCJOZXh0QXBpSGFuZGxlciIsIk5leHRBcGlSZXF1ZXN0IiwiTmV4dEFwaVJlc3BvbnNlIiwieGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJkYiIsIml0ZW1zIiwiZGVsZXRlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/delete-todo.js\n");

/***/ }),

/***/ "(api)/./util/xata.js":
/*!**********************!*\
  !*** ./util/xata.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XataClient\": () => (/* binding */ XataClient),\n/* harmony export */   \"getXataClient\": () => (/* binding */ getXataClient)\n/* harmony export */ });\n/* harmony import */ var _xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xata.io/client */ \"@xata.io/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_xata_io_client__WEBPACK_IMPORTED_MODULE_0__]);\n_xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Generated by Xata Codegen 0.18.0. Please do not edit.\n\n/** @typedef { import('./types').SchemaTables } SchemaTables */ /** @type { SchemaTables } */ const tables = [\n    {\n        name: \"items\",\n        columns: [\n            {\n                name: \"label\",\n                type: \"string\"\n            },\n            {\n                name: \"is_done\",\n                type: \"bool\"\n            }\n        ]\n    },\n    {\n        name: \"users\",\n        columns: [\n            {\n                name: \"username\",\n                type: \"string\",\n                notNull: true,\n                defaultValue: \"undefined\"\n            },\n            {\n                name: \"password\",\n                type: \"string\",\n                notNull: true,\n                defaultValue: \"undefined\"\n            }\n        ]\n    }\n];\n/** @type { import('@xata.io/client').ClientConstructor<{}> } */ const DatabaseClient = (0,_xata_io_client__WEBPACK_IMPORTED_MODULE_0__.buildClient)();\nconst defaultOptions = {\n    databaseURL: \"https://Ivan-Bowen-s-workspace-t34ncp.us-east-1.xata.sh/db/to-do-list\"\n};\n/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */ /** @extends DatabaseClient<DatabaseSchema> */ class XataClient extends DatabaseClient {\n    constructor(options){\n        super({\n            ...defaultOptions,\n            ...options\n        }, tables);\n    }\n}\nlet instance = undefined;\n/** @type { () => XataClient } */ const getXataClient = ()=>{\n    if (instance) return instance;\n    instance = new XataClient();\n    return instance;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL3hhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQ1Y7QUFDOUMsNkRBQTZELEdBQzdELDJCQUEyQixHQUMzQixNQUFNQyxTQUFTO0lBQ2I7UUFDRUMsTUFBTTtRQUNOQyxTQUFTO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQVNFLE1BQU07WUFBUztZQUNoQztnQkFBRUYsTUFBTTtnQkFBV0UsTUFBTTtZQUFPO1NBQ2pDO0lBQ0g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLFNBQVM7WUFDUDtnQkFDRUQsTUFBTTtnQkFDTkUsTUFBTTtnQkFDTkMsU0FBUyxJQUFJO2dCQUNiQyxjQUFjO1lBQ2hCO1lBQ0E7Z0JBQ0VKLE1BQU07Z0JBQ05FLE1BQU07Z0JBQ05DLFNBQVMsSUFBSTtnQkFDYkMsY0FBYztZQUNoQjtTQUNEO0lBQ0g7Q0FDRDtBQUNELDhEQUE4RCxHQUM5RCxNQUFNQyxpQkFBaUJQLDREQUFXQTtBQUNsQyxNQUFNUSxpQkFBaUI7SUFDckJDLGFBQ0U7QUFDSjtBQUNBLGlFQUFpRSxHQUNqRSw0Q0FBNEMsR0FDckMsTUFBTUMsbUJBQW1CSDtJQUM5QkksWUFBWUMsT0FBTyxDQUFFO1FBQ25CLEtBQUssQ0FBQztZQUFFLEdBQUdKLGNBQWM7WUFBRSxHQUFHSSxPQUFPO1FBQUMsR0FBR1g7SUFDM0M7QUFDRixDQUFDO0FBQ0QsSUFBSVksV0FBV0M7QUFDZiwrQkFBK0IsR0FDeEIsTUFBTUMsZ0JBQWdCLElBQU07SUFDakMsSUFBSUYsVUFBVSxPQUFPQTtJQUNyQkEsV0FBVyxJQUFJSDtJQUNmLE9BQU9HO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3V0aWwveGF0YS5qcz9jZGEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBieSBYYXRhIENvZGVnZW4gMC4xOC4wLiBQbGVhc2UgZG8gbm90IGVkaXQuXG5pbXBvcnQgeyBidWlsZENsaWVudCB9IGZyb20gXCJAeGF0YS5pby9jbGllbnRcIjtcbi8qKiBAdHlwZWRlZiB7IGltcG9ydCgnLi90eXBlcycpLlNjaGVtYVRhYmxlcyB9IFNjaGVtYVRhYmxlcyAqL1xuLyoqIEB0eXBlIHsgU2NoZW1hVGFibGVzIH0gKi9cbmNvbnN0IHRhYmxlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiaXRlbXNcIixcbiAgICBjb2x1bW5zOiBbXG4gICAgICB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgeyBuYW1lOiBcImlzX2RvbmVcIiwgdHlwZTogXCJib29sXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJ1c2Vyc1wiLFxuICAgIGNvbHVtbnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ1c2VybmFtZVwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBub3ROdWxsOiB0cnVlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwidW5kZWZpbmVkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIG5vdE51bGw6IHRydWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJ1bmRlZmluZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4vKiogQHR5cGUgeyBpbXBvcnQoJ0B4YXRhLmlvL2NsaWVudCcpLkNsaWVudENvbnN0cnVjdG9yPHt9PiB9ICovXG5jb25zdCBEYXRhYmFzZUNsaWVudCA9IGJ1aWxkQ2xpZW50KCk7XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZGF0YWJhc2VVUkw6XG4gICAgXCJodHRwczovL0l2YW4tQm93ZW4tcy13b3Jrc3BhY2UtdDM0bmNwLnVzLWVhc3QtMS54YXRhLnNoL2RiL3RvLWRvLWxpc3RcIixcbn07XG4vKiogQHR5cGVkZWYgeyBpbXBvcnQoJy4vdHlwZXMnKS5EYXRhYmFzZVNjaGVtYSB9IERhdGFiYXNlU2NoZW1hICovXG4vKiogQGV4dGVuZHMgRGF0YWJhc2VDbGllbnQ8RGF0YWJhc2VTY2hlbWE+ICovXG5leHBvcnQgY2xhc3MgWGF0YUNsaWVudCBleHRlbmRzIERhdGFiYXNlQ2xpZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSwgdGFibGVzKTtcbiAgfVxufVxubGV0IGluc3RhbmNlID0gdW5kZWZpbmVkO1xuLyoqIEB0eXBlIHsgKCkgPT4gWGF0YUNsaWVudCB9ICovXG5leHBvcnQgY29uc3QgZ2V0WGF0YUNsaWVudCA9ICgpID0+IHtcbiAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gIGluc3RhbmNlID0gbmV3IFhhdGFDbGllbnQoKTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsInRhYmxlcyIsIm5hbWUiLCJjb2x1bW5zIiwidHlwZSIsIm5vdE51bGwiLCJkZWZhdWx0VmFsdWUiLCJEYXRhYmFzZUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwiZGF0YWJhc2VVUkwiLCJYYXRhQ2xpZW50IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJnZXRYYXRhQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./util/xata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/delete-todo.js"));
module.exports = __webpack_exports__;

})();