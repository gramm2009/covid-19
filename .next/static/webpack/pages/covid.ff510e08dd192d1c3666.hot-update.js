self["webpackHotUpdate_N_E"]("pages/covid",{

/***/ "./pages/covid.js":
/*!************************!*\
  !*** ./pages/covid.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Covid; }
/* harmony export */ });
/* harmony import */ var C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Ru_Translation */ "./utils/Ru_Translation.js");
/* harmony import */ var _utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Vector1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Vector1 */ "./components/Vector1.js");
/* harmony import */ var _components_Vector2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Vector2 */ "./components/Vector2.js");
/* harmony import */ var _utils_handleClick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/handleClick */ "./utils/handleClick.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_resetStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/resetStyle */ "./utils/resetStyle.js");
/* harmony import */ var _components_navButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navButtons */ "./components/navButtons.js");
/* harmony import */ var _components_FilteredByInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FilteredByInput */ "./components/FilteredByInput.js");
/* harmony import */ var _components_FilteredByLetter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/FilteredByLetter */ "./components/FilteredByLetter.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _mobX_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mobX/state */ "./mobX/state.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\viktor\\react\\TESTZADANIY\\Web Creator\\covid\\pages\\covid.js",
    _s = $RefreshSig$();

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default;












function Covid(_ref) {
  _s();

  var countries = _ref.countries;
  _mobX_state__WEBPACK_IMPORTED_MODULE_13__.default.addCountries(countries);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      clickId = _useState[0],
      setClickId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      oldId = _useState2[0],
      setOldId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      letter = _useState3[0],
      setLetter = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      inputSearch = _useState4[0],
      setInputSearch = _useState4[1];

  var arr_RU_Letters = (_utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_3___default().arr_RU_Letters);
  var arr_RU_Countries = (_utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_3___default().arr_RU_Countries);

  var navClick = function navClick(e) {
    setInputSearch("");
    var element = e.target;

    var _handlerClick = (0,_utils_handleClick__WEBPACK_IMPORTED_MODULE_6__.handlerClick)(element, clickId, oldId),
        newClick = _handlerClick.newClick,
        oldClick = _handlerClick.oldClick,
        status = _handlerClick.status;

    if (status) setLetter(document.getElementById(oldClick).textContent);
    setOldId(oldClick);
    setClickId(newClick);
  };

  var handlerInput = function handlerInput(e) {
    console.log(clickId);
    console.log(oldId);
    (0,_utils_resetStyle__WEBPACK_IMPORTED_MODULE_8__.resetStyle)(oldId);
    setInputSearch(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_12__.default, {
    title: "Covid-19",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
          children: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        value: inputSearch,
        onChange: handlerInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        onClick: function onClick(e) {
          return navClick(e);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "nav-arrow-left nav-arrow left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Vector1__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_navButtons__WEBPACK_IMPORTED_MODULE_9__.default, {
          letters: arr_RU_Letters
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "nav-arrow-right nav-arrow right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Vector2__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "box-filter",
        children: inputSearch ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_FilteredByInput__WEBPACK_IMPORTED_MODULE_10__.default, {
          arr_RU_Countries: arr_RU_Countries,
          inputSearch: inputSearch,
          countries: countries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_FilteredByLetter__WEBPACK_IMPORTED_MODULE_11__.default, {
          arr_RU_Countries: arr_RU_Countries,
          letter: letter,
          countries: countries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

_s(Covid, "FbvpknNG3Y/z+FIyWIRcT2xYkEo=");

_c = Covid;

Covid.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    var options, _yield$axios$request, data;

    return C_viktor_react_TESTZADANIY_Web_Creator_covid_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              method: "GET",
              url: "https://covid-193.p.rapidapi.com/countries",
              headers: {
                "x-rapidapi-key": "94798c3c6bmshfca9a4960f75ed3p12f63ajsn2298b9459af5",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
              }
            };
            _context.next = 3;
            return axios.request(options);

          case 3:
            _yield$axios$request = _context.sent;
            data = _yield$axios$request.data;
            return _context.abrupt("return", {
              countries: data.response
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "Covid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY292aWQuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiQ292aWQiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInVzZVN0YXRlIiwiY2xpY2tJZCIsInNldENsaWNrSWQiLCJvbGRJZCIsInNldE9sZElkIiwibGV0dGVyIiwic2V0TGV0dGVyIiwiaW5wdXRTZWFyY2giLCJzZXRJbnB1dFNlYXJjaCIsImFycl9SVV9MZXR0ZXJzIiwiUnVfVHJhbnNsYXRpb24iLCJhcnJfUlVfQ291bnRyaWVzIiwibmF2Q2xpY2siLCJlIiwiZWxlbWVudCIsInRhcmdldCIsImhhbmRsZXJDbGljayIsIm5ld0NsaWNrIiwib2xkQ2xpY2siLCJzdGF0dXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJoYW5kbGVySW5wdXQiLCJjb25zb2xlIiwibG9nIiwicmVzZXRTdHlsZSIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLHlFQUFkOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQyxLQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3pDQyxnRUFBQSxDQUFtQkQsU0FBbkI7O0FBRHlDLGtCQUdYRSwrQ0FBUSxDQUFDLENBQUQsQ0FIRztBQUFBLE1BR2xDQyxPQUhrQztBQUFBLE1BR3pCQyxVQUh5Qjs7QUFBQSxtQkFJZkYsK0NBQVEsQ0FBQyxDQUFELENBSk87QUFBQSxNQUlsQ0csS0FKa0M7QUFBQSxNQUkzQkMsUUFKMkI7O0FBQUEsbUJB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RCxLOztLQUFBQSxLOztBQTJEeEJBLEtBQUssQ0FBQytCLGVBQU47QUFBQSwwU0FBd0IsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyxtQkFEYyxHQUNKO0FBQ1pDLG9CQUFNLEVBQUUsS0FESTtBQUVaQyxpQkFBRyxFQUFFLDRDQUZPO0FBR1pDLHFCQUFPLEVBQUU7QUFDTCxrQ0FBa0Isb0RBRGI7QUFFTCxtQ0FBbUI7QUFGZDtBQUhHLGFBREk7QUFBQTtBQUFBLG1CQVVHdEMsS0FBSyxDQUFDdUMsT0FBTixDQUFjSixPQUFkLENBVkg7O0FBQUE7QUFBQTtBQVVaSyxnQkFWWSx3QkFVWkEsSUFWWTtBQUFBLDZDQVdiO0FBQ0hyQyx1QkFBUyxFQUFFcUMsSUFBSSxDQUFDQztBQURiLGFBWGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY292aWQuZmY1MTBlMDhkZDE5MmQxYzM2NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcbmltcG9ydCBSdV9UcmFuc2xhdGlvbiBmcm9tIFwiLi4vdXRpbHMvUnVfVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IFZlY3RvcjEgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVjdG9yMVwiO1xyXG5pbXBvcnQgVmVjdG9yMiBmcm9tIFwiLi4vY29tcG9uZW50cy9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IGhhbmRsZXJDbGljayB9IGZyb20gXCIuLi91dGlscy9oYW5kbGVDbGlja1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNldFN0eWxlIH0gZnJvbSBcIi4uL3V0aWxzL3Jlc2V0U3R5bGVcIjtcclxuaW1wb3J0IE5hdkJ1dHRvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2QnV0dG9uc1wiO1xyXG5pbXBvcnQgRmlsdGVyZWRCeUlucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlcmVkQnlJbnB1dFwiO1xyXG5pbXBvcnQgRmlsdGVyZWRCeUxldHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJlZEJ5TGV0dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vbW9iWC9zdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdmlkKHsgY291bnRyaWVzIH0pIHtcclxuICAgIHN0YXRlLmFkZENvdW50cmllcyhjb3VudHJpZXMpXHJcbiAgICBcclxuICAgIGNvbnN0IFtjbGlja0lkLCBzZXRDbGlja0lkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW29sZElkLCBzZXRPbGRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsZXR0ZXIsIHNldExldHRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpbnB1dFNlYXJjaCwgc2V0SW5wdXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgYXJyX1JVX0xldHRlcnMgPSBSdV9UcmFuc2xhdGlvbi5hcnJfUlVfTGV0dGVycztcclxuICAgIGNvbnN0IGFycl9SVV9Db3VudHJpZXMgPSBSdV9UcmFuc2xhdGlvbi5hcnJfUlVfQ291bnRyaWVzO1xyXG5cclxuICAgIGNvbnN0IG5hdkNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFNlYXJjaChcIlwiKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgeyBuZXdDbGljaywgb2xkQ2xpY2ssIHN0YXR1cyB9ID0gaGFuZGxlckNsaWNrKGVsZW1lbnQsIGNsaWNrSWQsIG9sZElkKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXR1cykgc2V0TGV0dGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9sZENsaWNrKS50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIHNldE9sZElkKG9sZENsaWNrKTtcclxuICAgICAgICBzZXRDbGlja0lkKG5ld0NsaWNrKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlcklucHV0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjbGlja0lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhvbGRJZCk7XHJcbiAgICAgICAgcmVzZXRTdHlsZShvbGRJZCk7XHJcbiAgICAgICAgc2V0SW5wdXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJDb3ZpZC0xOVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj7Qn9C+0LjRgdC6INC/0L4g0YHRgtGA0LDQvdC1PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFNlYXJjaH0gb25DaGFuZ2U9e2hhbmRsZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgIDxuYXYgb25DbGljaz17KGUpID0+IG5hdkNsaWNrKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtYXJyb3ctbGVmdCBuYXYtYXJyb3cgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmVjdG9yMSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QnV0dG9ucyBsZXR0ZXJzPXthcnJfUlVfTGV0dGVyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtYXJyb3ctcmlnaHQgbmF2LWFycm93IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWZWN0b3IyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2lucHV0U2VhcmNoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyZWRCeUlucHV0IGFycl9SVV9Db3VudHJpZXM9e2Fycl9SVV9Db3VudHJpZXN9IGlucHV0U2VhcmNoPXtpbnB1dFNlYXJjaH0gY291bnRyaWVzPXtjb3VudHJpZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlcmVkQnlMZXR0ZXIgYXJyX1JVX0NvdW50cmllcz17YXJyX1JVX0NvdW50cmllc30gbGV0dGVyPXtsZXR0ZXJ9IGNvdW50cmllcz17Y291bnRyaWVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuQ292aWQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vY292aWQtMTkzLnAucmFwaWRhcGkuY29tL2NvdW50cmllc1wiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcIjk0Nzk4YzNjNmJtc2hmY2E5YTQ5NjBmNzVlZDNwMTJmNjNhanNuMjI5OGI5NDU5YWY1XCIsXHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiY292aWQtMTkzLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb3VudHJpZXM6IGRhdGEucmVzcG9uc2UsXHJcbiAgICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9