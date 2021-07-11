self["webpackHotUpdate_N_E"]("pages/covid/[country]",{

/***/ "./pages/covid/[country].js":
/*!**********************************!*\
  !*** ./pages/covid/[country].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Country; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_continentTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/continentTranslate */ "./utils/continentTranslate.js");
/* harmony import */ var _utils_countryName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/countryName */ "./utils/countryName.js");
/* harmony import */ var _utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/letterSpacing */ "./utils/letterSpacing.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\viktor\\react\\TESTZADANIY\\Web Creator\\covid\\pages\\covid\\[country].js",
    _s = $RefreshSig$();






var __N_SSP = true;
function Country(_ref) {
  _s();

  var data = _ref.data;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      query = _useRouter.query;

  var _countryName = (0,_utils_countryName__WEBPACK_IMPORTED_MODULE_4__.countryName)(query.country),
      ruCountry = _countryName.ruCountry;

  console.log(data[0].continent);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: query.country,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "countryName-name",
      children: ruCountry
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "country-page__container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["\u041A\u043E\u043D\u0442\u0438\u043D\u0435\u043D\u0442: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: (0,_utils_continentTranslate__WEBPACK_IMPORTED_MODULE_3__.continentTranslate)(data[0].continent)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 32
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "country-page-margin-bottom",
        children: ["\u041F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].population)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 70
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "countryName-statistics",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "country-page",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: ["\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0448\u0438\u0435: ", (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases.total)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [(0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases["1M_pop"]), "/1 \u043C\u043B\u043D. \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u041D\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "countryName-red",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases["new"])
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u0411\u043E\u043B\u0435\u044E\u0442 \u0432 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0441\u0442\u0430\u0434\u0438\u0438: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases.active)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 54
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases.critical)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 51
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u043B\u0438: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases.recovered)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: ["\u0423\u043C\u0435\u0440\u043B\u0438: ", (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].deaths.total)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [(0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].deaths["1M_pop"]), "/1\u043C\u043B\u043D.\u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u041D\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "countryName-red",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].deaths["new"])
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: ["\u0421\u0434\u0430\u043B\u0438 \u0442\u0435\u0441\u0442: ", (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].tests.total)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [(0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].tests["1M_pop"]), "/1\u043C\u043B\u043D.\u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(Country, "wby5GzzI23pLfTlf5I7v7XLG1RQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Country;

var _c;

$RefreshReg$(_c, "Country");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY292aWQvW2NvdW50cnldLmpzIl0sIm5hbWVzIjpbIkNvdW50cnkiLCJkYXRhIiwidXNlUm91dGVyIiwicXVlcnkiLCJjb3VudHJ5TmFtZSIsImNvdW50cnkiLCJydUNvdW50cnkiLCJjb25zb2xlIiwibG9nIiwiY29udGluZW50IiwiY29udGluZW50VHJhbnNsYXRlIiwibGV0dGVyU3BhY2luZyIsInBvcHVsYXRpb24iLCJjYXNlcyIsInRvdGFsIiwiYWN0aXZlIiwiY3JpdGljYWwiLCJyZWNvdmVyZWQiLCJkZWF0aHMiLCJ0ZXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxtQkFDcEJDLHNEQUFTLEVBRFc7QUFBQSxNQUM5QkMsS0FEOEIsY0FDOUJBLEtBRDhCOztBQUFBLHFCQUVoQkMsK0RBQVcsQ0FBQ0QsS0FBSyxDQUFDRSxPQUFQLENBRks7QUFBQSxNQUU5QkMsU0FGOEIsZ0JBRTlCQSxTQUY4Qjs7QUFHdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFRLFNBQXBCO0FBRUEsc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUVOLEtBQUssQ0FBQ0UsT0FBckI7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxrQkFBYjtBQUFBLGdCQUFpQ0M7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQSw4QkFDSTtBQUFBLDRGQUNlO0FBQUEsb0JBQUlJLDZFQUFrQixDQUFDVCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFRLFNBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFB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QUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUEsdUJBQUlILG1FQUFhLENBQUNWLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWtCLEtBQVIsQ0FBYyxRQUFkLENBQUQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnREg7O0dBckR1Qm5CLE87VUFDRkUsa0Q7OztLQURFRixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvdmlkL1tjb3VudHJ5XS5mYTM3MGI3OGU4NDMwYjJhZWEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIikuZGVmYXVsdDtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGNvbnRpbmVudFRyYW5zbGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9jb250aW5lbnRUcmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgY291bnRyeU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY291bnRyeU5hbWVcIjtcclxuaW1wb3J0IHsgbGV0dGVyU3BhY2luZyB9IGZyb20gXCIuLi8uLi91dGlscy9sZXR0ZXJTcGFjaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJ5KHsgZGF0YSB9KSB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcnVDb3VudHJ5IH0gPSBjb3VudHJ5TmFtZShxdWVyeS5jb3VudHJ5KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uY29udGluZW50KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9e3F1ZXJ5LmNvdW50cnl9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3VudHJ5TmFtZS1uYW1lXCI+e3J1Q291bnRyeX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRyeS1wYWdlX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgINCa0L7QvdGC0LjQvdC10L3RgjogPGI+e2NvbnRpbmVudFRyYW5zbGF0ZShkYXRhWzBdLmNvbnRpbmVudCl9PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY291bnRyeS1wYWdlLW1hcmdpbi1ib3R0b21cIj7Qn9C+0L/Rg9C70Y/RhtC40Y86IDxiPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0ucG9wdWxhdGlvbil9PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRyeU5hbWUtc3RhdGlzdGljc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvdW50cnktcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0JfQsNCx0L7Qu9C10LLRiNC40LU6IHtsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uY2FzZXMudG90YWwpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bGV0dGVyU3BhY2luZyhkYXRhWzBdLmNhc2VzW1wiMU1fcG9wXCJdKX0vMSDQvNC70L0uINC90LDRgdC10LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndC+0LLRi9C1INGB0LvRg9GH0LDQuCDQt9CwINGB0YPRgtC60Lg6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRyeU5hbWUtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2xldHRlclNwYWNpbmcoZGF0YVswXS5jYXNlcy5uZXcpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7QkdC+0LvQtdGO0YIg0LIg0LDQutGC0LjQstC90L7QuSDRgdGC0LDQtNC40Lg6IDxiPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uY2FzZXMuYWN0aXZlKX08L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7QmtGA0LjRgtC40YfQtdGB0LrQvtC1INGB0L7RgdGC0L7Rj9C90LjQtTogPGI+e2xldHRlclNwYWNpbmcoZGF0YVswXS5jYXNlcy5jcml0aWNhbCl9PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+0JLRi9C30LTQvtGA0L7QstC10LvQuDogPGI+e2xldHRlclNwYWNpbmcoZGF0YVswXS5jYXNlcy5yZWNvdmVyZWQpfTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KPQvNC10YDQu9C4OiB7bGV0dGVyU3BhY2luZyhkYXRhWzBdLmRlYXRocy50b3RhbCl9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uZGVhdGhzW1wiMU1fcG9wXCJdKX0vMdC80LvQvS7QvdCw0YHQtdC70LXQvdC40Y88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QvtCy0YvQtSDRgdC70YPRh9Cw0Lgg0LfQsCDRgdGD0YLQutC4OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50cnlOYW1lLXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uZGVhdGhzLm5ldyl9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+0KHQtNCw0LvQuCDRgtC10YHRgjoge2xldHRlclNwYWNpbmcoZGF0YVswXS50ZXN0cy50b3RhbCl9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0udGVzdHNbXCIxTV9wb3BcIl0pfS8x0LzQu9C9LtC90LDRgdC10LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2NvdmlkLTE5My5wLnJhcGlkYXBpLmNvbS9zdGF0aXN0aWNzXCIsXHJcbiAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcIjk0Nzk4YzNjNmJtc2hmY2E5YTQ5NjBmNzVlZDNwMTJmNjNhanNuMjI5OGI5NDU5YWY1XCIsXHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiY292aWQtMTkzLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgZGF0YTogZGF0YS5yZXNwb25zZSB9LFxyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9