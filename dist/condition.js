"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(condition) {
  return function (fn) {
    return function () {
      if (typeof condition === 'function') {
        if (!condition.apply(void 0, arguments)) {
          return;
        }
      } else {
        if (!condition) {
          return;
        }
      }

      return fn.apply(void 0, arguments);
    };
  };
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25kaXRpb24uanMiXSwibmFtZXMiOlsiY29uZGl0aW9uIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxrQkFBU0EsU0FBVCxFQUFtQjtBQUNqQyxTQUFPLFVBQVNDLEVBQVQsRUFBWTtBQUNsQixXQUFPLFlBQWlCO0FBQ3ZCLFVBQUcsT0FBT0QsU0FBUCxLQUFxQixVQUF4QixFQUFtQztBQUNsQyxZQUFHLENBQUNBLGtDQUFKLEVBQXVCO0FBQ3RCO0FBQ0E7QUFDRCxPQUpELE1BS0k7QUFDSCxZQUFHLENBQUNBLFNBQUosRUFBYztBQUNiO0FBQ0E7QUFDRDs7QUFDRCxhQUFPQywyQkFBUDtBQUNBLEtBWkQ7QUFhQSxHQWREO0FBZUE7O0FBQUEiLCJmaWxlIjoiY29uZGl0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uZGl0aW9uKXtcblx0cmV0dXJuIGZ1bmN0aW9uKGZuKXtcblx0XHRyZXR1cm4gZnVuY3Rpb24oLi4uYXJncyl7XG5cdFx0XHRpZih0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0aWYoIWNvbmRpdGlvbiguLi5hcmdzKSl7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRpZighY29uZGl0aW9uKXtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmbiguLi5hcmdzKTtcblx0XHR9XG5cdH07XG59O1xuIl19