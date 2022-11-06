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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_xata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/xata */ \"(api)/./util/xata.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_xata__WEBPACK_IMPORTED_MODULE_0__]);\n_util_xata__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// type ResponseData = {\n//    message: string\n// }\nconst xata = new _util_xata__WEBPACK_IMPORTED_MODULE_0__.XataClient();\nconst handler = async (req, res)=>{\n    const { id  } = req.body;\n    await xata.db.items.delete(id);\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlLXRvZG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUMwQjtBQUV2RSx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixNQUFNSSxPQUFPLElBQUlKLGtEQUFVQTtBQUMzQixNQUFNSyxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDakMsTUFBTSxFQUFDQyxHQUFFLEVBQUMsR0FBR0YsSUFBSUcsSUFBSTtJQUNyQixNQUFNTCxLQUFLTSxFQUFFLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSjtJQUMzQkQsSUFBSU0sR0FBRztBQUNWO0FBRUEsaUVBQWVSLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9wYWdlcy9hcGkvZGVsZXRlLXRvZG8uanM/NTU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYYXRhQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWwveGF0YVwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpSGFuZGxlciwgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG4vLyB0eXBlIFJlc3BvbnNlRGF0YSA9IHtcclxuLy8gICAgbWVzc2FnZTogc3RyaW5nXHJcbi8vIH1cclxuXHJcbmNvbnN0IHhhdGEgPSBuZXcgWGF0YUNsaWVudCgpO1xyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IHtpZH0gPSByZXEuYm9keTtcclxuICAgYXdhaXQgeGF0YS5kYi5pdGVtcy5kZWxldGUoaWQpO1xyXG4gICByZXMuZW5kKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIlhhdGFDbGllbnQiLCJOZXh0QXBpSGFuZGxlciIsIk5leHRBcGlSZXF1ZXN0IiwiTmV4dEFwaVJlc3BvbnNlIiwieGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJkYiIsIml0ZW1zIiwiZGVsZXRlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/delete-todo.js\n");

/***/ }),

/***/ "(api)/./util/xata.js":
/*!**********************!*\
  !*** ./util/xata.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XataClient\": () => (/* binding */ XataClient),\n/* harmony export */   \"getXataClient\": () => (/* binding */ getXataClient)\n/* harmony export */ });\n/* harmony import */ var _xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xata.io/client */ \"@xata.io/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_xata_io_client__WEBPACK_IMPORTED_MODULE_0__]);\n_xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Generated by Xata Codegen 0.18.0. Please do not edit.\n\n/** @typedef { import('./types').SchemaTables } SchemaTables */ /** @type { SchemaTables } */ const tables = [\n    {\n        name: \"items\",\n        columns: [\n            {\n                name: \"label\",\n                type: \"string\"\n            },\n            {\n                name: \"is_done\",\n                type: \"bool\"\n            }\n        ]\n    }\n];\n/** @type { import('@xata.io/client').ClientConstructor<{}> } */ const DatabaseClient = (0,_xata_io_client__WEBPACK_IMPORTED_MODULE_0__.buildClient)();\nconst defaultOptions = {\n    databaseURL: \"https://Ivan-Bowen-s-workspace-t34ncp.us-east-1.xata.sh/db/to-do-list\"\n};\n/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */ /** @extends DatabaseClient<DatabaseSchema> */ class XataClient extends DatabaseClient {\n    constructor(options){\n        super({\n            ...defaultOptions,\n            ...options\n        }, tables);\n    }\n}\nlet instance = undefined;\n/** @type { () => XataClient } */ const getXataClient = ()=>{\n    if (instance) return instance;\n    instance = new XataClient();\n    return instance;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL3hhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQ1Y7QUFDOUMsNkRBQTZELEdBQzdELDJCQUEyQixHQUMzQixNQUFNQyxTQUFTO0lBQ2I7UUFDRUMsTUFBTTtRQUNOQyxTQUFTO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQVNFLE1BQU07WUFBUztZQUNoQztnQkFBRUYsTUFBTTtnQkFBV0UsTUFBTTtZQUFPO1NBQ2pDO0lBQ0g7Q0FDRDtBQUNELDhEQUE4RCxHQUM5RCxNQUFNQyxpQkFBaUJMLDREQUFXQTtBQUNsQyxNQUFNTSxpQkFBaUI7SUFDckJDLGFBQ0U7QUFDSjtBQUNBLGlFQUFpRSxHQUNqRSw0Q0FBNEMsR0FDckMsTUFBTUMsbUJBQW1CSDtJQUM5QkksWUFBWUMsT0FBTyxDQUFFO1FBQ25CLEtBQUssQ0FBQztZQUFFLEdBQUdKLGNBQWM7WUFBRSxHQUFHSSxPQUFPO1FBQUMsR0FBR1Q7SUFDM0M7QUFDRixDQUFDO0FBQ0QsSUFBSVUsV0FBV0M7QUFDZiwrQkFBK0IsR0FDeEIsTUFBTUMsZ0JBQWdCLElBQU07SUFDakMsSUFBSUYsVUFBVSxPQUFPQTtJQUNyQkEsV0FBVyxJQUFJSDtJQUNmLE9BQU9HO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3V0aWwveGF0YS5qcz9jZGEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBieSBYYXRhIENvZGVnZW4gMC4xOC4wLiBQbGVhc2UgZG8gbm90IGVkaXQuXG5pbXBvcnQgeyBidWlsZENsaWVudCB9IGZyb20gXCJAeGF0YS5pby9jbGllbnRcIjtcbi8qKiBAdHlwZWRlZiB7IGltcG9ydCgnLi90eXBlcycpLlNjaGVtYVRhYmxlcyB9IFNjaGVtYVRhYmxlcyAqL1xuLyoqIEB0eXBlIHsgU2NoZW1hVGFibGVzIH0gKi9cbmNvbnN0IHRhYmxlcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiaXRlbXNcIixcbiAgICBjb2x1bW5zOiBbXG4gICAgICB7IG5hbWU6IFwibGFiZWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgeyBuYW1lOiBcImlzX2RvbmVcIiwgdHlwZTogXCJib29sXCIgfSxcbiAgICBdLFxuICB9LFxuXTtcbi8qKiBAdHlwZSB7IGltcG9ydCgnQHhhdGEuaW8vY2xpZW50JykuQ2xpZW50Q29uc3RydWN0b3I8e30+IH0gKi9cbmNvbnN0IERhdGFiYXNlQ2xpZW50ID0gYnVpbGRDbGllbnQoKTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBkYXRhYmFzZVVSTDpcbiAgICBcImh0dHBzOi8vSXZhbi1Cb3dlbi1zLXdvcmtzcGFjZS10MzRuY3AudXMtZWFzdC0xLnhhdGEuc2gvZGIvdG8tZG8tbGlzdFwiLFxufTtcbi8qKiBAdHlwZWRlZiB7IGltcG9ydCgnLi90eXBlcycpLkRhdGFiYXNlU2NoZW1hIH0gRGF0YWJhc2VTY2hlbWEgKi9cbi8qKiBAZXh0ZW5kcyBEYXRhYmFzZUNsaWVudDxEYXRhYmFzZVNjaGVtYT4gKi9cbmV4cG9ydCBjbGFzcyBYYXRhQ2xpZW50IGV4dGVuZHMgRGF0YWJhc2VDbGllbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9LCB0YWJsZXMpO1xuICB9XG59XG5sZXQgaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4vKiogQHR5cGUgeyAoKSA9PiBYYXRhQ2xpZW50IH0gKi9cbmV4cG9ydCBjb25zdCBnZXRYYXRhQ2xpZW50ID0gKCkgPT4ge1xuICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgaW5zdGFuY2UgPSBuZXcgWGF0YUNsaWVudCgpO1xuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwidGFibGVzIiwibmFtZSIsImNvbHVtbnMiLCJ0eXBlIiwiRGF0YWJhc2VDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsImRhdGFiYXNlVVJMIiwiWGF0YUNsaWVudCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwiZ2V0WGF0YUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/xata.js\n");

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