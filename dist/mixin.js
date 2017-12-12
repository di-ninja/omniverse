"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mixin;

var _getPrototypeOf = _interopRequireDefault(require("babel-runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("babel-runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("babel-runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("babel-runtime/helpers/inherits"));

var _mixwith = require("mixwith");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taXhpbi5qcyJdLCJuYW1lcyI6WyJtaXhpbiIsIm1peGluQ2xhc3NlcyIsImNsYXNzRGVmIiwid2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxLQUFULEdBQStCO0FBQUEsb0NBQWJDLFlBQWE7QUFBYkEsZ0JBQWE7QUFBQTs7QUFDN0MsU0FBTyxVQUFTQyxRQUFULEVBQWtCO0FBQUE7O0FBQ3hCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsUUFBcUIsMEJBQUlBLFFBQUosR0FBY0MsSUFBZCxhQUFzQkYsWUFBdEIsQ0FBckI7QUFBQTtBQUNBLEdBRkQ7QUFHQTs7QUFBQSIsImZpbGUiOiJtaXhpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1peCwgTWl4aW4gfSBmcm9tICdtaXh3aXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbiguLi5taXhpbkNsYXNzZXMpe1xuXHRyZXR1cm4gZnVuY3Rpb24oY2xhc3NEZWYpe1xuXHRcdHJldHVybiBjbGFzcyBleHRlbmRzIG1peChjbGFzc0RlZikud2l0aCguLi5taXhpbkNsYXNzZXMpe307XG5cdH07XG59O1xuIl19