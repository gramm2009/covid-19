self["webpackHotUpdate_N_E"]("pages/covid/[country]",{

/***/ "./utils/continentTranslate.js":
/*!*************************************!*\
  !*** ./utils/continentTranslate.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "continentTranslate": function() { return /* binding */ continentTranslate; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var continentTranslate = function continentTranslate(continent) {
  if (continent === "Europe") return 'Европа';
  if (continent === "Africa") return 'Африка';
  if (continent === "North-America") return 'Северная Америка';
  if (continent === "Asia") return 'Азия';
  if (continent === "South-America") return 'Южная Америка';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29udGluZW50VHJhbnNsYXRlLmpzIl0sIm5hbWVzIjpbImNvbnRpbmVudFRyYW5zbGF0ZSIsImNvbnRpbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBQyxTQUFuQkEsa0JBQW1CLENBQUNDLFNBQUQsRUFBYTtBQUN6QyxNQUFHQSxTQUFTLEtBQUcsUUFBZixFQUF5QixPQUFPLFFBQVA7QUFDekIsTUFBR0EsU0FBUyxLQUFHLFFBQWYsRUFBeUIsT0FBTyxRQUFQO0FBQ3pCLE1BQUdBLFNBQVMsS0FBRyxlQUFmLEVBQWdDLE9BQU8sa0JBQVA7QUFDaEMsTUFBR0EsU0FBUyxLQUFHLE1BQWYsRUFBdUIsT0FBTyxNQUFQO0FBQ3ZCLE1BQUdBLFNBQVMsS0FBRyxlQUFmLEVBQWdDLE9BQU8sZUFBUDtBQUVuQyxDQVBNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvdmlkL1tjb3VudHJ5XS41YmZlNzBkYWM2ZWZiYTVlYThlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbnRpbmVudFRyYW5zbGF0ZT0oY29udGluZW50KT0+e1xyXG4gICAgaWYoY29udGluZW50PT09XCJFdXJvcGVcIikgcmV0dXJuICfQldCy0YDQvtC/0LAnXHJcbiAgICBpZihjb250aW5lbnQ9PT1cIkFmcmljYVwiKSByZXR1cm4gJ9CQ0YTRgNC40LrQsCdcclxuICAgIGlmKGNvbnRpbmVudD09PVwiTm9ydGgtQW1lcmljYVwiKSByZXR1cm4gJ9Ch0LXQstC10YDQvdCw0Y8g0JDQvNC10YDQuNC60LAnXHJcbiAgICBpZihjb250aW5lbnQ9PT1cIkFzaWFcIikgcmV0dXJuICfQkNC30LjRjydcclxuICAgIGlmKGNvbnRpbmVudD09PVwiU291dGgtQW1lcmljYVwiKSByZXR1cm4gJ9Cu0LbQvdCw0Y8g0JDQvNC10YDQuNC60LAnXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=