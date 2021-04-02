module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/env */ \"./src/util/env.js\");\n\nvar _jsxFileName = \"/Users/brad/dev/docker-secrets/src/pages/index.js\";\n\n\nconst Page = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [\"Hi! - env for \\\"test\\\" is \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n      children: JSON.stringify(Object(_util_env__WEBPACK_IMPORTED_MODULE_1__[\"env\"])(\"test\"))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 31\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJQYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVudiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQ0U7QUFBQSwwREFDMEI7QUFBQSxnQkFBT0MsSUFBSSxDQUFDQyxTQUFMLENBQWVDLHFEQUFHLENBQUMsTUFBRCxDQUFsQjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRZUgsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnYgfSBmcm9tIFwiLi4vdXRpbC9lbnZcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgSGkhIC0gZW52IGZvciBcInRlc3RcIiBpcyA8Y29kZT57SlNPTi5zdHJpbmdpZnkoZW52KFwidGVzdFwiKSl9PC9jb2RlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/util/env.js":
/*!*************************!*\
  !*** ./src/util/env.js ***!
  \*************************/
/*! exports provided: env, privateEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"env\", function() { return env; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"privateEnv\", function() { return privateEnv; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nconst publicEnvB64 = \"eyJ0ZXN0IjpbMSwyLDNdfQ==\";\nconst privateEnvB64 = process.env.PRIVATE_ENV;\nconst publicEnv = JSON.parse(true ? Buffer.from(publicEnvB64, \"base64\").toString(\"utf-8\") : undefined);\nconst privateEnvVal = JSON.parse(true ? Buffer.from(privateEnvB64, \"base64\").toString(\"utf-8\") : undefined);\nconst env = path => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(publicEnv, path);\nconst privateEnv = path => {\n  if (!privateEnvVal) throw new Error(\"Cannot get private env values on the client-side!\");\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(privateEnvVal, path);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9lbnYuanM/NDM2NSJdLCJuYW1lcyI6WyJwdWJsaWNFbnZCNjQiLCJwcm9jZXNzIiwicHJpdmF0ZUVudkI2NCIsImVudiIsIlBSSVZBVEVfRU5WIiwicHVibGljRW52IiwiSlNPTiIsInBhcnNlIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiYXRvYiIsInByaXZhdGVFbnZWYWwiLCJwYXRoIiwiZ2V0IiwicHJpdmF0ZUVudiIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLDBCQUFyQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVlDLFdBQWxDO0FBRUEsTUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDaEIsT0FDSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlULFlBQVosRUFBMEIsUUFBMUIsRUFBb0NVLFFBQXBDLENBQTZDLE9BQTdDLENBREosR0FFSUMsU0FIWSxDQUFsQjtBQU1BLE1BQU1DLGFBQWEsR0FBR04sSUFBSSxDQUFDQyxLQUFMLENBQ3BCLE9BQ0lDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxhQUFaLEVBQTJCLFFBQTNCLEVBQXFDUSxRQUFyQyxDQUE4QyxPQUE5QyxDQURKLEdBRUksU0FIZ0IsQ0FBdEI7QUFNTyxNQUFNUCxHQUFHLEdBQUlVLElBQUQsSUFBVUMsa0RBQUcsQ0FBQ1QsU0FBRCxFQUFZUSxJQUFaLENBQXpCO0FBQ0EsTUFBTUUsVUFBVSxHQUFJRixJQUFELElBQVU7QUFDbEMsTUFBSSxDQUFDRCxhQUFMLEVBQ0UsTUFBTSxJQUFJSSxLQUFKLENBQVUsbURBQVYsQ0FBTjtBQUNGLFNBQU9GLGtEQUFHLENBQUNGLGFBQUQsRUFBZ0JDLElBQWhCLENBQVY7QUFDRCxDQUpNIiwiZmlsZSI6Ii4vc3JjL3V0aWwvZW52LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImxvZGFzaFwiO1xuXG5jb25zdCBwdWJsaWNFbnZCNjQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTlY7XG5jb25zdCBwcml2YXRlRW52QjY0ID0gcHJvY2Vzcy5lbnYuUFJJVkFURV9FTlY7XG5cbmNvbnN0IHB1YmxpY0VudiA9IEpTT04ucGFyc2UoXG4gIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCJcbiAgICA/IEJ1ZmZlci5mcm9tKHB1YmxpY0VudkI2NCwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGYtOFwiKVxuICAgIDogYXRvYihwdWJsaWNFbnZCNjQpXG4pO1xuXG5jb25zdCBwcml2YXRlRW52VmFsID0gSlNPTi5wYXJzZShcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgID8gQnVmZmVyLmZyb20ocHJpdmF0ZUVudkI2NCwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGYtOFwiKVxuICAgIDogXCIwXCJcbik7XG5cbmV4cG9ydCBjb25zdCBlbnYgPSAocGF0aCkgPT4gZ2V0KHB1YmxpY0VudiwgcGF0aCk7XG5leHBvcnQgY29uc3QgcHJpdmF0ZUVudiA9IChwYXRoKSA9PiB7XG4gIGlmICghcHJpdmF0ZUVudlZhbClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHByaXZhdGUgZW52IHZhbHVlcyBvbiB0aGUgY2xpZW50LXNpZGUhXCIpO1xuICByZXR1cm4gZ2V0KHByaXZhdGVFbnZWYWwsIHBhdGgpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/env.js\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIj85N2RlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });