(function() {
var exports = {};
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 7643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Country; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(4941);
;// CONCATENATED MODULE: ./utils/continentTranslate.js
const continentTranslate = continent => {
  if (continent) {
    if (continent === "Europe") return 'Европа';
    if (continent === "Africa") return 'Африка';
    if (continent === "North-America") return 'Северная Америка';
    if (continent === "Asia") return 'Азия';
    if (continent === "South-America") return 'Южная Америка';
    if (continent === "Oceania") return 'Океания';
  }

  return "-";
};
// EXTERNAL MODULE: ./utils/Ru_Translation.js
var Ru_Translation = __webpack_require__(1726);
var Ru_Translation_default = /*#__PURE__*/__webpack_require__.n(Ru_Translation);
// EXTERNAL MODULE: ./mobX/state.js
var state = __webpack_require__(1972);
;// CONCATENATED MODULE: ./utils/countryName.js


const countryName = country => {
  let countries = state/* default.countries */.Z.countries;
  const countryName = country.toLowerCase();
  countries = countries.map(el => el.toLowerCase());
  const index = countries.indexOf(countryName);
  const ruCountry = (Ru_Translation_default()).arr_RU_Countries[index];
  return {
    ruCountry
  };
};
;// CONCATENATED MODULE: ./utils/letterSpacing.js
const letterSpacing = s => {
  if (s) {
    let str = s.toString();
    let newStr = [];
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
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

  return "-";
};
;// CONCATENATED MODULE: ./pages/covid/[country].js



const axios = __webpack_require__(2376).default;






function Country({
  data
}) {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    ruCountry
  } = countryName(query.country);
  console.log(data);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    title: query.country,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "countryName-name",
      children: ruCountry
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "country-page__container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["\u041A\u043E\u043D\u0442\u0438\u043D\u0435\u043D\u0442: ", /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: continentTranslate(data[0].continent)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "country-page-margin-bottom",
        children: ["\u041F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u044F: ", /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: letterSpacing(data[0].population)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "countryName-statistics",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "country-page",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: ["\u0417\u0430\u0431\u043E\u043B\u0435\u0432\u0448\u0438\u0435: ", letterSpacing(data[0].cases.total)]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [letterSpacing(data[0].cases["1M_pop"]), "/1 \u043C\u043B\u043D. \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\u041D\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "countryName-red",
              children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: letterSpacing(data[0].cases.new)
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\u0411\u043E\u043B\u0435\u044E\u0442 \u0432 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0441\u0442\u0430\u0434\u0438\u0438: ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: letterSpacing(data[0].cases.active)
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: letterSpacing(data[0].cases.critical)
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\u0412\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u043B\u0438: ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: letterSpacing(data[0].cases.recovered)
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: ["\u0423\u043C\u0435\u0440\u043B\u0438: ", letterSpacing(data[0].deaths.total)]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [letterSpacing(data[0].deaths["1M_pop"]), "/1\u043C\u043B\u043D.\u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["\u041D\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0438 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "countryName-red",
              children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: letterSpacing(data[0].deaths.new)
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
              children: ["\u0421\u0434\u0430\u043B\u0438 \u0442\u0435\u0441\u0442: ", letterSpacing(data[0].tests.total)]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [letterSpacing(data[0].tests["1M_pop"]), "/1\u043C\u043B\u043D.\u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F"]
          })]
        })]
      })]
    })]
  });
}
async function getServerSideProps({
  params
}) {
  const {
    data
  } = await axios({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    params,
    headers: {
      "x-rapidapi-key": "94798c3c6bmshfca9a4960f75ed3p12f63ajsn2298b9459af5",
      "x-rapidapi-host": "covid-193.p.rapidapi.com"
    }
  });
  return {
    props: {
      data: data.response
    }
  };
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 2965:
/***/ (function(module) {

"use strict";
module.exports = require("mobx");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [640], function() { return __webpack_exec__(7643); });
module.exports = __webpack_exports__;

})();