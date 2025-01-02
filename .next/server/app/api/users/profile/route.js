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
exports.id = "app/api/users/profile/route";
exports.ids = ["app/api/users/profile/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5Ctoday%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctoday&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5Ctoday%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctoday&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_today_app_api_users_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/profile/route.js */ \"(rsc)/./app/api/users/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/profile/route\",\n        pathname: \"/api/users/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/profile/route\"\n    },\n    resolvedPagePath: \"D:\\\\today\\\\app\\\\api\\\\users\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: D_today_app_api_users_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnByb2ZpbGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGcHJvZmlsZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDdG9kYXklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUN0b2RheSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDSDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcdG9kYXlcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9wcm9maWxlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXHRvZGF5XFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxccHJvZmlsZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5Ctoday%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctoday&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/users/profile/route.js":
/*!****************************************!*\
  !*** ./app/api/users/profile/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/db */ \"(rsc)/./utils/db.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/User */ \"(rsc)/./models/User.js\");\n// import connectToDatabase from '../../../../utils/db';\n// import User from '../../../../models/User';\n// export default async function handler(req, res) {\n//   if (req.method !== 'GET') {\n//     return res.status(405).json({ message: 'Method not allowed' });\n//   }\n//   await connectToDatabase();\n//   try {\n//     const { username } = req.query;\n//     const user = await User.findOne({ username });\n//     if (!user) {\n//       return res.status(404).json({ message: 'User not found' });\n//     }\n//     res.status(200).json(user);\n//   } catch (error) {\n//     console.error('Error fetching user profile:', error);\n//     res.status(500).json({ message: 'Failed to fetch profile' });\n//   }\n// }\n// import connectToDatabase from '../../../../utils/db';\n// import User from '../../../../models/User';\n// export async function GET(req) {\n//   if (req.method !== 'GET') {\n//     return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405 });\n//   }\n//   await connectToDatabase();\n//   try {\n//     const { username } = req.nextUrl.searchParams; // Use `nextUrl.searchParams` for query params in Next.js 13\n//     const user = await User.findOne({ username });\n//     if (!user) {\n//       return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });\n//     }\n//     return new Response(JSON.stringify(user), { status: 200 });\n//   } catch (error) {\n//     console.error('Error fetching user profile:', error);\n//     return new Response(JSON.stringify({ message: 'Failed to fetch profile' }), { status: 500 });\n//   }\n// }\n// app/api/users/profile/route.js\n// import connectToDatabase from '../../../../utils/db';\n// import User from '../../../../models/User';\n// export async function GET(req) {\n//   const { username } = req.nextUrl.searchParams; // Get query parameter\n//   await connectToDatabase();\n//   try {\n//     const user = await User.findOne({ username }); // Query user from DB\n//     if (!user) {\n//       return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });\n//     }\n//     return new Response(JSON.stringify(user), { status: 200 });\n//   } catch (error) {\n//     console.error('Error fetching user profile:', error);\n//     return new Response(JSON.stringify({ message: 'Failed to fetch profile' }), { status: 500 });\n//   }\n// }\n\n\n\nconst GET = async (req)=>{\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    try {\n        const searchParams = req.nextUrl.searchParams;\n        const username = searchParams.get(\"username\");\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            username\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching user profile:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Failed to fetch profile\"\n        }, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL3Byb2ZpbGUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHdEQUF3RDtBQUN4RCw4Q0FBOEM7QUFFOUMsb0RBQW9EO0FBQ3BELGdDQUFnQztBQUNoQyxzRUFBc0U7QUFDdEUsTUFBTTtBQUVOLCtCQUErQjtBQUUvQixVQUFVO0FBQ1Ysc0NBQXNDO0FBQ3RDLHFEQUFxRDtBQUVyRCxtQkFBbUI7QUFDbkIsb0VBQW9FO0FBQ3BFLFFBQVE7QUFFUixrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBQ3RCLDREQUE0RDtBQUM1RCxvRUFBb0U7QUFDcEUsTUFBTTtBQUNOLElBQUk7QUFFSix3REFBd0Q7QUFDeEQsOENBQThDO0FBRTlDLG1DQUFtQztBQUNuQyxnQ0FBZ0M7QUFDaEMsK0ZBQStGO0FBQy9GLE1BQU07QUFFTiwrQkFBK0I7QUFFL0IsVUFBVTtBQUNWLGtIQUFrSDtBQUNsSCxxREFBcUQ7QUFFckQsbUJBQW1CO0FBQ25CLDZGQUE2RjtBQUM3RixRQUFRO0FBRVIsa0VBQWtFO0FBQ2xFLHNCQUFzQjtBQUN0Qiw0REFBNEQ7QUFDNUQsb0dBQW9HO0FBQ3BHLE1BQU07QUFDTixJQUFJO0FBRUosaUNBQWlDO0FBRWpDLHdEQUF3RDtBQUN4RCw4Q0FBOEM7QUFFOUMsbUNBQW1DO0FBQ25DLDBFQUEwRTtBQUUxRSwrQkFBK0I7QUFFL0IsVUFBVTtBQUNWLDJFQUEyRTtBQUUzRSxtQkFBbUI7QUFDbkIsNkZBQTZGO0FBQzdGLFFBQVE7QUFFUixrRUFBa0U7QUFDbEUsc0JBQXNCO0FBQ3RCLDREQUE0RDtBQUM1RCxvR0FBb0c7QUFDcEcsTUFBTTtBQUNOLElBQUk7QUFJdUM7QUFDVTtBQUNWO0FBRXBDLE1BQU1HLE1BQU0sT0FBT0M7SUFDeEIsTUFBTUgscURBQWlCQTtJQUV2QixJQUFJO1FBQ0YsTUFBTUksZUFBZUQsSUFBSUUsT0FBTyxDQUFDRCxZQUFZO1FBQzdDLE1BQU1FLFdBQVNGLGFBQWFHLEdBQUcsQ0FBQztRQUNoQyxNQUFNQyxPQUFPLE1BQU1QLG9EQUFJQSxDQUFDUSxPQUFPLENBQUM7WUFBRUg7UUFBUztRQUUzQyxJQUFJLENBQUNFLE1BQU07WUFDVCxPQUFPVCxxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN4RTtRQUVBLE9BQU9iLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUY7UUFBSyxHQUFHO1lBQUVJLFFBQVE7UUFBSTtJQUNuRCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBT2QscURBQVlBLENBQUNXLElBQUksQ0FDdEI7WUFBRUMsU0FBUztRQUEwQixHQUNyQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJEOlxcdG9kYXlcXGFwcFxcYXBpXFx1c2Vyc1xccHJvZmlsZVxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2RiJztcclxuLy8gaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnF1ZXJ5O1xyXG4vLyAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG5cclxuLy8gICAgIGlmICghdXNlcikge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnIH0pO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHByb2ZpbGU6JywgZXJyb3IpO1xyXG4vLyAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIHByb2ZpbGUnIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2RiJztcclxuLy8gaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuLy8gICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcclxuLy8gICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KSwgeyBzdGF0dXM6IDQwNSB9KTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXEubmV4dFVybC5zZWFyY2hQYXJhbXM7IC8vIFVzZSBgbmV4dFVybC5zZWFyY2hQYXJhbXNgIGZvciBxdWVyeSBwYXJhbXMgaW4gTmV4dC5qcyAxM1xyXG4vLyAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG5cclxuLy8gICAgIGlmICghdXNlcikge1xyXG4vLyAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJyB9KSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7IHN0YXR1czogMjAwIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHByb2ZpbGU6JywgZXJyb3IpO1xyXG4vLyAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZScgfSksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhcHAvYXBpL3VzZXJzL3Byb2ZpbGUvcm91dGUuanNcclxuXHJcbi8vIGltcG9ydCBjb25uZWN0VG9EYXRhYmFzZSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9kYic7XHJcbi8vIGltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9Vc2VyJztcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbi8vICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLm5leHRVcmwuc2VhcmNoUGFyYW1zOyAvLyBHZXQgcXVlcnkgcGFyYW1ldGVyXHJcblxyXG4vLyAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWUgfSk7IC8vIFF1ZXJ5IHVzZXIgZnJvbSBEQlxyXG5cclxuLy8gICAgIGlmICghdXNlcikge1xyXG4vLyAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJyB9KSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7IHN0YXR1czogMjAwIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIHByb2ZpbGU6JywgZXJyb3IpO1xyXG4vLyAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZScgfSksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvVXNlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jIChyZXEpID0+IHtcclxuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gcmVxLm5leHRVcmwuc2VhcmNoUGFyYW1zO1xyXG4gICAgY29uc3QgdXNlcm5hbWU9c2VhcmNoUGFyYW1zLmdldChcInVzZXJuYW1lXCIpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIHByb2ZpbGU6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiBcIkZhaWxlZCB0byBmZXRjaCBwcm9maWxlXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJVc2VyIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwibmV4dFVybCIsInVzZXJuYW1lIiwiZ2V0IiwidXNlciIsImZpbmRPbmUiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: String,\n    points: {\n        type: Number,\n        default: 0\n    },\n    completedActivities: [\n        String\n    ],\n    achievements: [\n        String\n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVQztJQUNWQyxRQUFRO1FBQUVDLE1BQU1DO1FBQVFDLFNBQVM7SUFBRTtJQUNuQ0MscUJBQXFCO1FBQUNMO0tBQU87SUFDN0JNLGNBQWM7UUFBQ047S0FBTztBQUN4QjtBQUVBLGlFQUFlSix3REFBZSxDQUFDWSxJQUFJLElBQUlaLHFEQUFjLENBQUMsUUFBUUMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXHRvZGF5XFxtb2RlbHNcXFVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VybmFtZTogU3RyaW5nLFxyXG4gIHBvaW50czogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuICBjb21wbGV0ZWRBY3Rpdml0aWVzOiBbU3RyaW5nXSwgLy8gSURzIG9mIGNvbXBsZXRlZCBhY3Rpdml0aWVzXHJcbiAgYWNoaWV2ZW1lbnRzOiBbU3RyaW5nXSwgLy8gRWFybmVkIGJhZGdlc1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsIlN0cmluZyIsInBvaW50cyIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwiY29tcGxldGVkQWN0aXZpdGllcyIsImFjaGlldmVtZW50cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDatabase = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log('Connected to MongoDB');\n    } catch (error) {\n        console.error('MongoDB connection error:', error);\n        throw new Error('Database connection failed');\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsb0JBQW9CO0lBQ3hCLElBQUlELDREQUFtQixDQUFDRyxVQUFVLEtBQUssR0FBRztRQUN4QyxPQUFPSCwwREFBbUIsQ0FBQ0ksU0FBUztJQUN0QztJQUVBLElBQUk7UUFDRixNQUFNSix1REFBZ0IsQ0FBQ00sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7WUFDOUNDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1FBQ3RCO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRjtBQUVBLGlFQUFlYixpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFx0b2RheVxcdXRpbHNcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREInKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5Ctoday%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctoday&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();