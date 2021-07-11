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
  console.log(countries);
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
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        value: inputSearch,
        onChange: handlerInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        onClick: function onClick(e) {
          return navClick(e);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "nav-arrow-left nav-arrow left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Vector1__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_navButtons__WEBPACK_IMPORTED_MODULE_9__.default, {
          letters: arr_RU_Letters
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "nav-arrow-right nav-arrow right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Vector2__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "box-filter",
        children: inputSearch ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_FilteredByInput__WEBPACK_IMPORTED_MODULE_10__.default, {
          arr_RU_Countries: arr_RU_Countries,
          inputSearch: inputSearch,
          countries: countries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_FilteredByLetter__WEBPACK_IMPORTED_MODULE_11__.default, {
          arr_RU_Countries: arr_RU_Countries,
          letter: letter,
          countries: countries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY292aWQuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiQ292aWQiLCJjb3VudHJpZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJ1c2VTdGF0ZSIsImNsaWNrSWQiLCJzZXRDbGlja0lkIiwib2xkSWQiLCJzZXRPbGRJZCIsImxldHRlciIsInNldExldHRlciIsImlucHV0U2VhcmNoIiwic2V0SW5wdXRTZWFyY2giLCJhcnJfUlVfTGV0dGVycyIsIlJ1X1RyYW5zbGF0aW9uIiwiYXJyX1JVX0NvdW50cmllcyIsIm5hdkNsaWNrIiwiZSIsImVsZW1lbnQiLCJ0YXJnZXQiLCJoYW5kbGVyQ2xpY2siLCJuZXdDbGljayIsIm9sZENsaWNrIiwic3RhdHVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiaGFuZGxlcklucHV0IiwicmVzZXRTdHlsZSIsInZhbHVlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwiZGF0YSIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLHlFQUFkOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQyxLQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBRyxnRUFBQSxDQUFtQkgsU0FBbkI7O0FBRnlDLGtCQUlYSSwrQ0FBUSxDQUFDLENBQUQsQ0FKRztBQUFBLE1BSWxDQyxPQUprQztBQUFBLE1BSXpCQyxVQUp5Qjs7QUFBQSxtQkFLZkYsK0NBQVEsQ0FBQyxDQUFELENBTE87QUFBQSxNQUtsQ0csS0FMa0M7QUFBQSxNQUszQkMsUUFMMkI7O0FBQUEsbUJBTWJKLCtDQUFRLENBQUMsRUFBRCxDQU5LO0FBQUEsTUFNbENLLE1BTmtDO0FBQUEsTUFNMUJDLFNBTjBCOztBQUFBLG1CQU9ITiwrQ0FBUSxDQUFDLEVBQUQsQ0FQTDtBQUFBLE1BT2xDTyxXQVBrQztBQUFBLE1BT3JCQyxjQVBxQjs7QUFTekMsTUFBTUMsY0FBYyxHQUFHQyw2RUFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0QsK0VBQXpCOztBQUVBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQkwsa0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQSxRQUFNTSxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsTUFBbEI7O0FBRm9CLHdCQUdtQkMsZ0VBQVksQ0FBQ0YsT0FBRCxFQUFVYixPQUFWLEVBQW1CRSxLQUFuQixDQUgvQjtBQUFBLFFBR1pjLFFBSFksaUJBR1pBLFFBSFk7QUFBQSxRQUdGQyxRQUhFLGlCQUdGQSxRQUhFO0FBQUEsUUFHUUMsTUFIUixpQkFHUUEsTUFIUjs7QUFLcEIsUUFBSUEsTUFBSixFQUFZYixTQUFTLENBQUNjLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsUUFBeEIsRUFBa0NJLFdBQW5DLENBQVQ7QUFFWmxCLFlBQVEsQ0FBQ2MsUUFBRCxDQUFSO0FBQ0FoQixjQUFVLENBQUNlLFFBQUQsQ0FBVjtBQUNILEdBVEQ7O0FBV0EsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1YsQ0FBRCxFQUFPO0FBQ3hCaEIsV0FBTyxDQUFDQyxHQUFSLENBQVlHLE9BQVo7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVo7QUFDQXFCLGlFQUFVLENBQUNyQixLQUFELENBQVY7QUFDQUssa0JBQWMsQ0FBQ0ssQ0FBQyxDQUFDRSxNQUFGLENBQVNVLEtBQVYsQ0FBZDtBQUNILEdBTEQ7O0FBT0Esc0JBQ0ksOERBQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUMsVUFBZDtBQUFBLDJCQUVJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFbEIsV0FBMUI7QUFBdUMsZ0JBQVEsRUFBRWdCO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJO0FBQUssZUFBTyxFQUFFLGlCQUFDVixDQUFEO0FBQUEsaUJBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsU0FBZDtBQUFBLGdDQUNJO0FBQU0sbUJBQVMsRUFBQywrQkFBaEI7QUFBQSxpQ0FDSSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJLDhEQUFDLDJEQUFEO0FBQVksaUJBQU8sRUFBRUo7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJO0FBQU0sbUJBQVMsRUFBQyxpQ0FBaEI7QUFBQSxpQ0FDSSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQWVJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsa0JBQ0tGLFdBQVcsZ0JBQ1IsOERBQUMsaUVBQUQ7QUFBaUIsMEJBQWdCLEVBQUVJLGdCQUFuQztBQUFxRCxxQkFBVyxFQUFFSixXQUFsRTtBQUErRSxtQkFBUyxFQUFFWDtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURRLGdCQUdSLDhEQUFDLGtFQUFEO0FBQWtCLDBCQUFnQixFQUFFZSxnQkFBcEM7QUFBc0QsZ0JBQU0sRUFBRU4sTUFBOUQ7QUFBc0UsbUJBQVMsRUFBRVQ7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Qkg7O0dBMUR1QkQsSzs7S0FBQUEsSzs7QUE0RHhCQSxLQUFLLENBQUMrQixlQUFOO0FBQUEsMFNBQXdCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsbUJBRGMsR0FDSjtBQUNaQyxvQkFBTSxFQUFFLEtBREk7QUFFWkMsaUJBQUcsRUFBRSw0Q0FGTztBQUdaQyxxQkFBTyxFQUFFO0FBQ0wsa0NBQWtCLG9EQURiO0FBRUwsbUNBQW1CO0FBRmQ7QUFIRyxhQURJO0FBQUE7QUFBQSxtQkFVR3RDLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBY0osT0FBZCxDQVZIOztBQUFBO0FBQUE7QUFVWkssZ0JBVlksd0JBVVpBLElBVlk7QUFBQSw2Q0FXYjtBQUNIckMsdUJBQVMsRUFBRXFDLElBQUksQ0FBQ0M7QUFEYixhQVhhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvdmlkLjJjNjkwOWM1ZTExMmMzNTNiMWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgUnVfVHJhbnNsYXRpb24gZnJvbSBcIi4uL3V0aWxzL1J1X1RyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBWZWN0b3IxIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlY3RvcjFcIjtcclxuaW1wb3J0IFZlY3RvcjIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBoYW5kbGVyQ2xpY2sgfSBmcm9tIFwiLi4vdXRpbHMvaGFuZGxlQ2xpY2tcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVzZXRTdHlsZSB9IGZyb20gXCIuLi91dGlscy9yZXNldFN0eWxlXCI7XHJcbmltcG9ydCBOYXZCdXR0b25zIGZyb20gXCIuLi9jb21wb25lbnRzL25hdkJ1dHRvbnNcIjtcclxuaW1wb3J0IEZpbHRlcmVkQnlJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJlZEJ5SW5wdXRcIjtcclxuaW1wb3J0IEZpbHRlcmVkQnlMZXR0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsdGVyZWRCeUxldHRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4uL21vYlgvc3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3ZpZCh7IGNvdW50cmllcyB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb3VudHJpZXMpO1xyXG4gICAgc3RhdGUuYWRkQ291bnRyaWVzKGNvdW50cmllcylcclxuICAgIFxyXG4gICAgY29uc3QgW2NsaWNrSWQsIHNldENsaWNrSWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbb2xkSWQsIHNldE9sZElkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xldHRlciwgc2V0TGV0dGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lucHV0U2VhcmNoLCBzZXRJbnB1dFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBhcnJfUlVfTGV0dGVycyA9IFJ1X1RyYW5zbGF0aW9uLmFycl9SVV9MZXR0ZXJzO1xyXG4gICAgY29uc3QgYXJyX1JVX0NvdW50cmllcyA9IFJ1X1RyYW5zbGF0aW9uLmFycl9SVV9Db3VudHJpZXM7XHJcblxyXG4gICAgY29uc3QgbmF2Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0U2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB7IG5ld0NsaWNrLCBvbGRDbGljaywgc3RhdHVzIH0gPSBoYW5kbGVyQ2xpY2soZWxlbWVudCwgY2xpY2tJZCwgb2xkSWQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhdHVzKSBzZXRMZXR0ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2xkQ2xpY2spLnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgc2V0T2xkSWQob2xkQ2xpY2spO1xyXG4gICAgICAgIHNldENsaWNrSWQobmV3Q2xpY2spO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVySW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9sZElkKTtcclxuICAgICAgICByZXNldFN0eWxlKG9sZElkKTtcclxuICAgICAgICBzZXRJbnB1dFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkNvdmlkLTE5XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPtCf0L7QuNGB0Log0L/QviDRgdGC0YDQsNC90LU8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0U2VhcmNofSBvbkNoYW5nZT17aGFuZGxlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBvbkNsaWNrPXsoZSkgPT4gbmF2Q2xpY2soZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1hcnJvdy1sZWZ0IG5hdi1hcnJvdyBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWZWN0b3IxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCdXR0b25zIGxldHRlcnM9e2Fycl9SVV9MZXR0ZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1hcnJvdy1yaWdodCBuYXYtYXJyb3cgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZlY3RvcjIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRTZWFyY2ggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJlZEJ5SW5wdXQgYXJyX1JVX0NvdW50cmllcz17YXJyX1JVX0NvdW50cmllc30gaW5wdXRTZWFyY2g9e2lucHV0U2VhcmNofSBjb3VudHJpZXM9e2NvdW50cmllc30gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyZWRCeUxldHRlciBhcnJfUlVfQ291bnRyaWVzPXthcnJfUlVfQ291bnRyaWVzfSBsZXR0ZXI9e2xldHRlcn0gY291bnRyaWVzPXtjb3VudHJpZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5Db3ZpZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb3ZpZC0xOTMucC5yYXBpZGFwaS5jb20vY291bnRyaWVzXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiOTQ3OThjM2M2Ym1zaGZjYTlhNDk2MGY3NWVkM3AxMmY2M2Fqc24yMjk4Yjk0NTlhZjVcIixcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJjb3ZpZC0xOTMucC5yYXBpZGFwaS5jb21cIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50cmllczogZGF0YS5yZXNwb25zZSxcclxuICAgIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=