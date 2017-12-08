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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taXhpbi5qcyJdLCJuYW1lcyI6WyJtaXhpbiIsIm1peGluQ2xhc3NlcyIsImNsYXNzRGVmIiwid2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxLQUFULEdBQStCO0FBQUEsb0NBQWJDLFlBQWE7QUFBYkEsZ0JBQWE7QUFBQTs7QUFDN0MsU0FBTyxVQUFDQyxRQUFELEVBQVk7QUFBQTs7QUFDbEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxRQUFxQiwwQkFBSUEsUUFBSixHQUFjQyxJQUFkLGFBQXNCRixZQUF0QixDQUFyQjtBQUFBO0FBQ0EsR0FGRDtBQUdBOztBQUFBIiwiZmlsZSI6Im1peGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWl4LCBNaXhpbiB9IGZyb20gJ21peHdpdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1peGluKC4uLm1peGluQ2xhc3Nlcyl7XG5cdHJldHVybiAoY2xhc3NEZWYpPT57XG5cdFx0cmV0dXJuIGNsYXNzIGV4dGVuZHMgbWl4KGNsYXNzRGVmKS53aXRoKC4uLm1peGluQ2xhc3Nlcyl7fTtcblx0fTtcbn07XG4iXX0=