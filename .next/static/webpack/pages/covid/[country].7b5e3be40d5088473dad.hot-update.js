self["webpackHotUpdate_N_E"]("pages/covid/[country]",{

/***/ "./utils/letterSpacing.js":
/*!********************************!*\
  !*** ./utils/letterSpacing.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "letterSpacing": function() { return /* binding */ letterSpacing; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var letterSpacing = function letterSpacing(s) {
  if (s) {
    var str = s.toString();
    var newStr = [];
    var count = 0;

    for (var i = str.length - 1; i >= 0; i--) {
      newStr.push(str[i]);

      if (count === 2 || count === 5 || count === 8) {
        newStr.push(' ');
      }

      count++;
    }

    newStr = newStr.reverse();
    newStr = newStr.join('');
    return newStr;
  }

  return "Нет данных";
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbGV0dGVyU3BhY2luZy5qcyJdLCJuYW1lcyI6WyJsZXR0ZXJTcGFjaW5nIiwicyIsInN0ciIsInRvU3RyaW5nIiwibmV3U3RyIiwiY291bnQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInJldmVyc2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGFBQWEsR0FBQyxTQUFkQSxhQUFjLENBQUNDLENBQUQsRUFBSztBQUNoQyxNQUFHQSxDQUFILEVBQUs7QUFDRCxRQUFJQyxHQUFHLEdBQUNELENBQUMsQ0FBQ0UsUUFBRixFQUFSO0FBRUEsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQ0osR0FBRyxDQUFDSyxNQUFKLEdBQVcsQ0FBckIsRUFBdUJELENBQUMsSUFBRSxDQUExQixFQUE0QkEsQ0FBQyxFQUE3QixFQUFnQztBQUM1QkYsWUFBTSxDQUFDSSxJQUFQLENBQVlOLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFmOztBQUNBLFVBQUlELEtBQUssS0FBRyxDQUFULElBQWNBLEtBQUssS0FBRyxDQUF0QixJQUEyQkEsS0FBSyxLQUFHLENBQXRDLEVBQXlDO0FBQ3JDRCxjQUFNLENBQUNJLElBQVAsQ0FBWSxHQUFaO0FBQ0g7O0FBQ0RILFdBQUs7QUFDUjs7QUFDREQsVUFBTSxHQUFDQSxNQUFNLENBQUNLLE9BQVAsRUFBUDtBQUNBTCxVQUFNLEdBQUNBLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLEVBQVosQ0FBUDtBQUNBLFdBQU9OLE1BQVA7QUFDSDs7QUFDRCxTQUFPLFlBQVA7QUFDQyxDQWxCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3ZpZC9bY291bnRyeV0uN2I1ZTNiZTQwZDUwODg0NzNkYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsZXR0ZXJTcGFjaW5nPShzKT0+e1xyXG5pZihzKXtcclxuICAgIGxldCBzdHI9cy50b1N0cmluZygpXHJcblxyXG4gICAgbGV0IG5ld1N0ciA9IFtdXHJcbiAgICBsZXQgY291bnQgPSAwXHJcbiAgICBmb3IobGV0IGk9c3RyLmxlbmd0aC0xO2k+PTA7aS0tKXtcclxuICAgICAgICBuZXdTdHIucHVzaChzdHJbaV0pXHJcbiAgICAgICAgaWYoKGNvdW50PT09Mil8fChjb3VudD09PTUpfHwoY291bnQ9PT04KSl7XHJcbiAgICAgICAgICAgIG5ld1N0ci5wdXNoKCcgJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrK1xyXG4gICAgfVxyXG4gICAgbmV3U3RyPW5ld1N0ci5yZXZlcnNlKClcclxuICAgIG5ld1N0cj1uZXdTdHIuam9pbignJylcclxuICAgIHJldHVybiBuZXdTdHJcclxufVxyXG5yZXR1cm4gXCLQndC10YIg0LTQsNC90L3Ri9GFXCJcclxufSJdLCJzb3VyY2VSb290IjoiIn0=