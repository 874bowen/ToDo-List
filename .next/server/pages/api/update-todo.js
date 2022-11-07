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
exports.id = "pages/api/update-todo";
exports.ids = ["pages/api/update-todo"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/update-todo.js":
/*!**********************************!*\
  !*** ./pages/api/update-todo.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_xata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/xata */ \"(api)/./util/xata.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_authorize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/authorize */ \"(api)/./util/authorize.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_xata__WEBPACK_IMPORTED_MODULE_0__, _util_authorize__WEBPACK_IMPORTED_MODULE_2__]);\n([_util_xata__WEBPACK_IMPORTED_MODULE_0__, _util_authorize__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// type ResponseData = {\n//    message: string\n// }\nconst xata = (0,_util_xata__WEBPACK_IMPORTED_MODULE_0__.getXataClient)();\nconst handler = async (req, res)=>{\n    const { isAuthenticated , username  } = await (0,_util_authorize__WEBPACK_IMPORTED_MODULE_2__.authorize)(req);\n    if (!isAuthenticated) {\n        res.status(401).end();\n        return;\n    }\n    const { id , label  } = req.body;\n    await xata.db.items.update({\n        id,\n        label\n    });\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlLXRvZG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDdUI7QUFDdEI7QUFFakQsd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQixJQUFJO0FBRUosTUFBTUssT0FBT0wseURBQWFBO0FBQzFCLE1BQU1NLFVBQVUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxNQUFNLEVBQUVDLGdCQUFlLEVBQUVDLFNBQVEsRUFBRSxHQUFHLE1BQU1OLDBEQUFTQSxDQUFDRztJQUN0RCxJQUFJLENBQUNFLGlCQUFnQjtRQUNsQkQsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLEdBQUc7UUFDbkI7SUFDSCxDQUFDO0lBRUQsTUFBTSxFQUFDQyxHQUFFLEVBQUVDLE1BQUssRUFBQyxHQUFHUCxJQUFJUSxJQUFJO0lBQzVCLE1BQU1WLEtBQUtXLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUM7UUFBQ0w7UUFBSUM7SUFBSztJQUNyQ04sSUFBSUksR0FBRztBQUNWO0FBRUEsaUVBQWVOLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9wYWdlcy9hcGkvdXBkYXRlLXRvZG8uanM/MzJhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRYYXRhQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWwveGF0YVwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpSGFuZGxlciwgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGF1dGhvcml6ZSB9IGZyb20gXCIuLi8uLi91dGlsL2F1dGhvcml6ZVwiO1xyXG5cclxuLy8gdHlwZSBSZXNwb25zZURhdGEgPSB7XHJcbi8vICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG4vLyB9XHJcblxyXG5jb25zdCB4YXRhID0gZ2V0WGF0YUNsaWVudCgpO1xyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCB1c2VybmFtZSB9ID0gYXdhaXQgYXV0aG9yaXplKHJlcSk7XHJcbiAgIGlmICghaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHtpZCwgbGFiZWx9ID0gcmVxLmJvZHk7XHJcbiAgIGF3YWl0IHhhdGEuZGIuaXRlbXMudXBkYXRlKHtpZCwgbGFiZWx9KTtcclxuICAgcmVzLmVuZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJnZXRYYXRhQ2xpZW50IiwiTmV4dEFwaUhhbmRsZXIiLCJOZXh0QXBpUmVxdWVzdCIsIk5leHRBcGlSZXNwb25zZSIsImF1dGhvcml6ZSIsInhhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlcm5hbWUiLCJzdGF0dXMiLCJlbmQiLCJpZCIsImxhYmVsIiwiYm9keSIsImRiIiwiaXRlbXMiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/update-todo.js\n");

/***/ }),

/***/ "(api)/./util/authorize.js":
/*!***************************!*\
  !*** ./util/authorize.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorize\": () => (/* binding */ authorize)\n/* harmony export */ });\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _xata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xata */ \"(api)/./util/xata.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_xata__WEBPACK_IMPORTED_MODULE_2__]);\n_xata__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst compare = (0,util__WEBPACK_IMPORTED_MODULE_4__.promisify)((bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare));\nconst hash = (0,util__WEBPACK_IMPORTED_MODULE_4__.promisify)((bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash));\nconst authorize = async (req)=>{\n    const { authorization  } = req.headers;\n    // const authorization = req;\n    // console.log(\"This is \"+ authorization);\n    if (!authorization) {\n        return {\n            isAuthenticated: false\n        };\n    }\n    // authorization: \"Basic base64(username:password\"\n    const [, credentials] = authorization.split(\" \");\n    const [username, password] = Buffer.from(credentials, \"base64\").toString(\"utf-8\").split(\":\");\n    const xata = (0,_xata__WEBPACK_IMPORTED_MODULE_2__.getXataClient)();\n    const user = await xata.db.users.filter(\"username\", username).getFirst();\n    //user doesn't exist\n    if (!user) {\n        await xata.db.users.create({\n            username,\n            password: await hash(password, 10)\n        });\n        return {\n            isAuthenticated: true,\n            username\n        };\n    }\n    // user exists & we have passwords\n    const passwordsMatch = compare(password, user.password);\n    if (!passwordsMatch) {\n        return {\n            isAuthenticated: false,\n            username\n        };\n    }\n    return {\n        isAuthenticated: true,\n        username\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL2F1dGhvcml6ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2dDO0FBRWhDO0FBQ1g7QUFDSztBQUVqQyxNQUFNTyxVQUFVRCwrQ0FBU0EsQ0FBQ0QsdURBQWM7QUFDeEMsTUFBTUcsT0FBT0YsK0NBQVNBLENBQUNELG9EQUFXO0FBRzNCLE1BQU1JLFlBQVksT0FBT0MsTUFBUTtJQUVyQyxNQUFNLEVBQUVDLGNBQWEsRUFBRSxHQUFHRCxJQUFJRSxPQUFPO0lBQ3JDLDZCQUE2QjtJQUM3QiwwQ0FBMEM7SUFFMUMsSUFBSSxDQUFDRCxlQUFlO1FBQ2pCLE9BQU87WUFBQ0UsaUJBQWlCLEtBQUs7UUFBQTtJQUNqQyxDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELE1BQU0sR0FBR0MsWUFBWSxHQUFHSCxjQUFjSSxLQUFLLENBQUM7SUFDNUMsTUFBTSxDQUFDQyxVQUFVQyxTQUFTLEdBQUdDLE9BQU9DLElBQUksQ0FBQ0wsYUFBYSxVQUFVTSxRQUFRLENBQUMsU0FBU0wsS0FBSyxDQUFDO0lBR3hGLE1BQU1NLE9BQU9qQixvREFBYUE7SUFDMUIsTUFBTWtCLE9BQU8sTUFBTUQsS0FBS0UsRUFBRSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxZQUFZVCxVQUFVVSxRQUFRO0lBRXRFLG9CQUFvQjtJQUNwQixJQUFJLENBQUNKLE1BQUs7UUFDUCxNQUFNRCxLQUFLRSxFQUFFLENBQUNDLEtBQUssQ0FBQ0csTUFBTSxDQUFDO1lBQUNYO1lBQVVDLFVBQVUsTUFBTVQsS0FBS1MsVUFBVTtRQUFHO1FBQ3hFLE9BQU87WUFBQ0osaUJBQWlCLElBQUk7WUFBRUc7UUFBUTtJQUMxQyxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU1ZLGlCQUFpQnJCLFFBQVFVLFVBQVVLLEtBQUtMLFFBQVE7SUFFdEQsSUFBSSxDQUFDVyxnQkFBZ0I7UUFDbEIsT0FBTztZQUFDZixpQkFBaUIsS0FBSztZQUFFRztRQUFRO0lBQzNDLENBQUM7SUFFRCxPQUFPO1FBQUNILGlCQUFpQixJQUFJO1FBQUVHO0lBQVE7QUFDMUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3V0aWwvYXV0aG9yaXplLmpzPzVkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlIH0gZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0WGF0YUNsaWVudCB9IGZyb20gXCIuL3hhdGFcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5jb25zdCBjb21wYXJlID0gcHJvbWlzaWZ5KGJjcnlwdC5jb21wYXJlKTtcclxuY29uc3QgaGFzaCA9IHByb21pc2lmeShiY3J5cHQuaGFzaCk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhvcml6ZSA9IGFzeW5jIChyZXEpID0+IHtcclxuICAgXHJcbiAgIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XHJcbiAgIC8vIGNvbnN0IGF1dGhvcml6YXRpb24gPSByZXE7XHJcbiAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBcIisgYXV0aG9yaXphdGlvbik7XHJcbiAgIFxyXG4gICBpZiAoIWF1dGhvcml6YXRpb24pIHtcclxuICAgICAgcmV0dXJuIHtpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlfTtcclxuICAgfVxyXG5cclxuICAgLy8gYXV0aG9yaXphdGlvbjogXCJCYXNpYyBiYXNlNjQodXNlcm5hbWU6cGFzc3dvcmRcIlxyXG4gICBjb25zdCBbLCBjcmVkZW50aWFsc10gPSBhdXRob3JpemF0aW9uLnNwbGl0KFwiIFwiKTtcclxuICAgY29uc3QgW3VzZXJuYW1lLCBwYXNzd29yZF0gPSBCdWZmZXIuZnJvbShjcmVkZW50aWFscywgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGYtOFwiKS5zcGxpdChcIjpcIik7XHJcblxyXG5cclxuICAgY29uc3QgeGF0YSA9IGdldFhhdGFDbGllbnQoKTtcclxuICAgY29uc3QgdXNlciA9IGF3YWl0IHhhdGEuZGIudXNlcnMuZmlsdGVyKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpLmdldEZpcnN0KCk7XHJcblxyXG4gICAvL3VzZXIgZG9lc24ndCBleGlzdFxyXG4gICBpZiAoIXVzZXIpe1xyXG4gICAgICBhd2FpdCB4YXRhLmRiLnVzZXJzLmNyZWF0ZSh7dXNlcm5hbWUsIHBhc3N3b3JkOiBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMCl9KVxyXG4gICAgICByZXR1cm4ge2lzQXV0aGVudGljYXRlZDogdHJ1ZSwgdXNlcm5hbWV9O1xyXG4gICB9XHJcblxyXG4gICAvLyB1c2VyIGV4aXN0cyAmIHdlIGhhdmUgcGFzc3dvcmRzXHJcbiAgIGNvbnN0IHBhc3N3b3Jkc01hdGNoID0gY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgIFxyXG4gICBpZiAoIXBhc3N3b3Jkc01hdGNoKSB7XHJcbiAgICAgIHJldHVybiB7aXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgdXNlcm5hbWV9XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiB7aXNBdXRoZW50aWNhdGVkOiB0cnVlLCB1c2VybmFtZX1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5jb21pbmdNZXNzYWdlIiwiTmV4dEFwaUhhbmRsZXIiLCJOZXh0QXBpUmVxdWVzdCIsIk5leHRBcGlSZXNwb25zZSIsImdldFhhdGFDbGllbnQiLCJiY3J5cHQiLCJwcm9taXNpZnkiLCJjb21wYXJlIiwiaGFzaCIsImF1dGhvcml6ZSIsInJlcSIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwiaXNBdXRoZW50aWNhdGVkIiwiY3JlZGVudGlhbHMiLCJzcGxpdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJ4YXRhIiwidXNlciIsImRiIiwidXNlcnMiLCJmaWx0ZXIiLCJnZXRGaXJzdCIsImNyZWF0ZSIsInBhc3N3b3Jkc01hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./util/authorize.js\n");

/***/ }),

/***/ "(api)/./util/xata.js":
/*!**********************!*\
  !*** ./util/xata.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XataClient\": () => (/* binding */ XataClient),\n/* harmony export */   \"getXataClient\": () => (/* binding */ getXataClient)\n/* harmony export */ });\n/* harmony import */ var _xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xata.io/client */ \"@xata.io/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_xata_io_client__WEBPACK_IMPORTED_MODULE_0__]);\n_xata_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Generated by Xata Codegen 0.18.0. Please do not edit.\n\n/** @typedef { import('./types').SchemaTables } SchemaTables */ /** @type { SchemaTables } */ const tables = [\n    {\n        name: \"items\",\n        columns: [\n            {\n                name: \"label\",\n                type: \"string\"\n            },\n            {\n                name: \"is_done\",\n                type: \"bool\"\n            },\n            {\n                name: \"user\",\n                type: \"link\",\n                link: {\n                    table: \"users\"\n                }\n            }\n        ]\n    },\n    {\n        name: \"users\",\n        columns: [\n            {\n                name: \"username\",\n                type: \"string\",\n                notNull: true,\n                defaultValue: \"undefined\"\n            },\n            {\n                name: \"password\",\n                type: \"string\",\n                notNull: true,\n                defaultValue: \"undefined\"\n            }\n        ]\n    }\n];\n/** @type { import('@xata.io/client').ClientConstructor<{}> } */ const DatabaseClient = (0,_xata_io_client__WEBPACK_IMPORTED_MODULE_0__.buildClient)();\nconst defaultOptions = {\n    databaseURL: \"https://Ivan-Bowen-s-workspace-t34ncp.us-east-1.xata.sh/db/to-do-list\"\n};\n/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */ /** @extends DatabaseClient<DatabaseSchema> */ class XataClient extends DatabaseClient {\n    constructor(options){\n        super({\n            ...defaultOptions,\n            ...options\n        }, tables);\n    }\n}\nlet instance = undefined;\n/** @type { () => XataClient } */ const getXataClient = ()=>{\n    if (instance) return instance;\n    instance = new XataClient();\n    return instance;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL3hhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQ1Y7QUFDOUMsNkRBQTZELEdBQzdELDJCQUEyQixHQUMzQixNQUFNQyxTQUFTO0lBQ2I7UUFDRUMsTUFBTTtRQUNOQyxTQUFTO1lBQ1A7Z0JBQUVELE1BQU07Z0JBQVNFLE1BQU07WUFBUztZQUNoQztnQkFBRUYsTUFBTTtnQkFBV0UsTUFBTTtZQUFPO1lBQ2hDO2dCQUFFRixNQUFNO2dCQUFRRSxNQUFNO2dCQUFRQyxNQUFNO29CQUFFQyxPQUFPO2dCQUFRO1lBQUU7U0FDeEQ7SUFDSDtJQUNBO1FBQ0VKLE1BQU07UUFDTkMsU0FBUztZQUNQO2dCQUNFRCxNQUFNO2dCQUNORSxNQUFNO2dCQUNORyxTQUFTLElBQUk7Z0JBQ2JDLGNBQWM7WUFDaEI7WUFDQTtnQkFDRU4sTUFBTTtnQkFDTkUsTUFBTTtnQkFDTkcsU0FBUyxJQUFJO2dCQUNiQyxjQUFjO1lBQ2hCO1NBQ0Q7SUFDSDtDQUNEO0FBQ0QsOERBQThELEdBQzlELE1BQU1DLGlCQUFpQlQsNERBQVdBO0FBQ2xDLE1BQU1VLGlCQUFpQjtJQUNyQkMsYUFDRTtBQUNKO0FBQ0EsaUVBQWlFLEdBQ2pFLDRDQUE0QyxHQUNyQyxNQUFNQyxtQkFBbUJIO0lBQzlCSSxZQUFZQyxPQUFPLENBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQUUsR0FBR0osY0FBYztZQUFFLEdBQUdJLE9BQU87UUFBQyxHQUFHYjtJQUMzQztBQUNGLENBQUM7QUFDRCxJQUFJYyxXQUFXQztBQUNmLCtCQUErQixHQUN4QixNQUFNQyxnQkFBZ0IsSUFBTTtJQUNqQyxJQUFJRixVQUFVLE9BQU9BO0lBQ3JCQSxXQUFXLElBQUlIO0lBQ2YsT0FBT0c7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vdXRpbC94YXRhLmpzP2NkYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGJ5IFhhdGEgQ29kZWdlbiAwLjE4LjAuIFBsZWFzZSBkbyBub3QgZWRpdC5cbmltcG9ydCB7IGJ1aWxkQ2xpZW50IH0gZnJvbSBcIkB4YXRhLmlvL2NsaWVudFwiO1xuLyoqIEB0eXBlZGVmIHsgaW1wb3J0KCcuL3R5cGVzJykuU2NoZW1hVGFibGVzIH0gU2NoZW1hVGFibGVzICovXG4vKiogQHR5cGUgeyBTY2hlbWFUYWJsZXMgfSAqL1xuY29uc3QgdGFibGVzID0gW1xuICB7XG4gICAgbmFtZTogXCJpdGVtc1wiLFxuICAgIGNvbHVtbnM6IFtcbiAgICAgIHsgbmFtZTogXCJsYWJlbFwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICB7IG5hbWU6IFwiaXNfZG9uZVwiLCB0eXBlOiBcImJvb2xcIiB9LFxuICAgICAgeyBuYW1lOiBcInVzZXJcIiwgdHlwZTogXCJsaW5rXCIsIGxpbms6IHsgdGFibGU6IFwidXNlcnNcIiB9IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwidXNlcnNcIixcbiAgICBjb2x1bW5zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbm90TnVsbDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcInVuZGVmaW5lZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBub3ROdWxsOiB0cnVlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwidW5kZWZpbmVkXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuLyoqIEB0eXBlIHsgaW1wb3J0KCdAeGF0YS5pby9jbGllbnQnKS5DbGllbnRDb25zdHJ1Y3Rvcjx7fT4gfSAqL1xuY29uc3QgRGF0YWJhc2VDbGllbnQgPSBidWlsZENsaWVudCgpO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRhdGFiYXNlVVJMOlxuICAgIFwiaHR0cHM6Ly9JdmFuLUJvd2VuLXMtd29ya3NwYWNlLXQzNG5jcC51cy1lYXN0LTEueGF0YS5zaC9kYi90by1kby1saXN0XCIsXG59O1xuLyoqIEB0eXBlZGVmIHsgaW1wb3J0KCcuL3R5cGVzJykuRGF0YWJhc2VTY2hlbWEgfSBEYXRhYmFzZVNjaGVtYSAqL1xuLyoqIEBleHRlbmRzIERhdGFiYXNlQ2xpZW50PERhdGFiYXNlU2NoZW1hPiAqL1xuZXhwb3J0IGNsYXNzIFhhdGFDbGllbnQgZXh0ZW5kcyBEYXRhYmFzZUNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0sIHRhYmxlcyk7XG4gIH1cbn1cbmxldCBpbnN0YW5jZSA9IHVuZGVmaW5lZDtcbi8qKiBAdHlwZSB7ICgpID0+IFhhdGFDbGllbnQgfSAqL1xuZXhwb3J0IGNvbnN0IGdldFhhdGFDbGllbnQgPSAoKSA9PiB7XG4gIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICBpbnN0YW5jZSA9IG5ldyBYYXRhQ2xpZW50KCk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJ0YWJsZXMiLCJuYW1lIiwiY29sdW1ucyIsInR5cGUiLCJsaW5rIiwidGFibGUiLCJub3ROdWxsIiwiZGVmYXVsdFZhbHVlIiwiRGF0YWJhc2VDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsImRhdGFiYXNlVVJMIiwiWGF0YUNsaWVudCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImluc3RhbmNlIiwidW5kZWZpbmVkIiwiZ2V0WGF0YUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/xata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/update-todo.js"));
module.exports = __webpack_exports__;

})();