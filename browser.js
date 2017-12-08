(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["omniverse"] = factory();
	else
		root["omniverse"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/interopRequireDefault");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mixwith");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "container", {
  enumerable: true,
  get: function get() {
    return _diStrategy.default;
  }
});
Object.defineProperty(exports, "instanceOf", {
  enumerable: true,
  get: function get() {
    return _interfacePrototype.instanceOf;
  }
});
Object.defineProperty(exports, "Interface", {
  enumerable: true,
  get: function get() {
    return _interfacePrototype.Interface;
  }
});
Object.defineProperty(exports, "InterfacePrototype", {
  enumerable: true,
  get: function get() {
    return _interfacePrototype.InterfacePrototype;
  }
});
Object.defineProperty(exports, "InterfaceClass", {
  enumerable: true,
  get: function get() {
    return _interfacePrototype.InterfaceClass;
  }
});
Object.defineProperty(exports, "mixin", {
  enumerable: true,
  get: function get() {
    return _mixin2.default;
  }
});
Object.defineProperty(exports, "mix", {
  enumerable: true,
  get: function get() {
    return _mixwith.mix;
  }
});
Object.defineProperty(exports, "Mixin", {
  enumerable: true,
  get: function get() {
    return _mixwith.Mixin;
  }
});

var _diStrategy = _interopRequireDefault(__webpack_require__(4));

var _interfacePrototype = __webpack_require__(5);

var _mixin2 = _interopRequireDefault(__webpack_require__(6));

var _mixwith = __webpack_require__(1);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vbW5pdmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBWUEiLCJmaWxlIjoib21uaXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnRhaW5lciBmcm9tICdkaS1zdHJhdGVneSdcblxuZXhwb3J0IHtcblx0XG5cdGluc3RhbmNlT2YsXG5cdEludGVyZmFjZSxcblx0XG5cdEludGVyZmFjZVByb3RvdHlwZSxcblx0SW50ZXJmYWNlQ2xhc3MsXG5cdFxufSBmcm9tICdpbnRlcmZhY2UtcHJvdG90eXBlJ1xuXG5leHBvcnQgbWl4aW4gZnJvbSAnLi9taXhpbidcblxuZXhwb3J0IHtcblx0XG5cdG1peCxcblx0TWl4aW4sXG5cdFxufSBmcm9tICdtaXh3aXRoJ1xuIl19

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("di-strategy");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("interface-prototype");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mixin;

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(7));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(9));

var _inherits2 = _interopRequireDefault(__webpack_require__(10));

var _mixwith = __webpack_require__(1);

function mixin() {
  for (var _len = arguments.length, mixinClasses = new Array(_len), _key = 0; _key < _len; _key++) {
    mixinClasses[_key] = arguments[_key];
  }

  return function (classDef) {
    var _mix;

    return (
      /*#__PURE__*/
      function (_mix$with) {
        (0, _inherits2.default)(_class, _mix$with);

        function _class() {
          (0, _classCallCheck2.default)(this, _class);
          return (0, _possibleConstructorReturn2.default)(this, (_class.__proto__ || (0, _getPrototypeOf.default)(_class)).apply(this, arguments));
        }

        return _class;
      }((_mix = (0, _mixwith.mix)(classDef)).with.apply(_mix, mixinClasses))
    );
  };
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taXhpbi5qcyJdLCJuYW1lcyI6WyJtaXhpbiIsIm1peGluQ2xhc3NlcyIsImNsYXNzRGVmIiwid2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxLQUFULEdBQStCO0FBQUEsb0NBQWJDLFlBQWE7QUFBYkEsZ0JBQWE7QUFBQTs7QUFDN0MsU0FBTyxVQUFDQyxRQUFELEVBQVk7QUFBQTs7QUFDbEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxRQUFxQiwwQkFBSUEsUUFBSixHQUFjQyxJQUFkLGFBQXNCRixZQUF0QixDQUFyQjtBQUFBO0FBQ0EsR0FGRDtBQUdBOztBQUFBIiwiZmlsZSI6Im1peGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWl4LCBNaXhpbiB9IGZyb20gJ21peHdpdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKC4uLm1peGluQ2xhc3Nlcyl7XG5cdHJldHVybiAoY2xhc3NEZWYpPT57XG5cdFx0cmV0dXJuIGNsYXNzIGV4dGVuZHMgbWl4KGNsYXNzRGVmKS53aXRoKC4uLm1peGluQ2xhc3Nlcyl7fTtcblx0fTtcbn07XG4iXX0=

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ })
/******/ ]);
});
//# sourceMappingURL=browser.js.map