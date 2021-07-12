(function() {
var exports = {};
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 8205:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Covid; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./utils/Ru_Translation.js
var Ru_Translation = __webpack_require__(1726);
var Ru_Translation_default = /*#__PURE__*/__webpack_require__.n(Ru_Translation);
;// CONCATENATED MODULE: ./components/Vector1.js

function Vector1() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: "left",
    width: "78",
    height: "8",
    viewBox: "0 0 78 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M77 4.5C77.2761 4.5 77.5 4.27614 77.5 4C77.5 3.72386 77.2761 3.5 77 3.5V4.5ZM0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM77 3.5H1V4.5H77V3.5Z",
      fill: "#333333"
    })
  });
}
;// CONCATENATED MODULE: ./components/Vector2.js

function Vector2() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: "right",
    width: "78",
    height: "8",
    viewBox: "0 0 78 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M1 4.5C0.723854 4.5 0.5 4.27614 0.5 4C0.5 3.72386 0.723854 3.5 1 3.5V4.5ZM77.3536 3.64645C77.5488 3.84171 77.5488 4.15829 77.3536 4.35355L74.1716 7.53553C73.9763 7.7308 73.6597 7.7308 73.4645 7.53553C73.2692 7.34027 73.2692 7.02369 73.4645 6.82843L76.2929 4L73.4645 1.17157C73.2692 0.976311 73.2692 0.659728 73.4645 0.464466C73.6597 0.269204 73.9763 0.269204 74.1716 0.464466L77.3536 3.64645ZM1 3.5H77V4.5H1V3.5Z",
      fill: "#333333"
    })
  });
}
;// CONCATENATED MODULE: ./utils/changeBGC.js
const changeBGC = (newId, oldId) => {
  console.log(newId + '  newId');
  console.log(oldId + '  oldId');

  if (newId === oldId) {
    console.log("ОНИ ОДИНАКОВЫ");
    return newId;
  } else {
    let clickElement = document.getElementById(newId);
    clickElement.style.color = "#333333";
    clickElement.style.fontWeight = "600";

    if (oldId !== "0") {
      let prevElement = document.getElementById(oldId);
      prevElement.style.color = "#BDBDBD";
      prevElement.style.fontWeight = "400";
    }

    return newId;
  }
};
;// CONCATENATED MODULE: ./utils/handleClick.js

const handlerClick = (e, clickId, oldId) => {
  let newClick = clickId;
  let oldClick = oldId;
  let status = false;
  const clickElement = e;

  if (clickElement.classList.contains("nav-letter")) {
    oldClick = changeBGC(clickElement.id, oldClick.toString());
    status = true;
    return {
      newClick,
      oldClick,
      status
    };
  }

  if (clickElement.classList.contains("left")) {
    if (newClick === 0 || newClick === 1) {
      newClick = 26;
      oldClick = changeBGC(newClick.toString(), oldClick.toString());
    } else {
      newClick--;
      oldClick = changeBGC(newClick.toString(), oldClick.toString());
    }

    status = true;
    return {
      newClick,
      oldClick,
      status
    };
  }

  if (clickElement.classList.contains("right")) {
    if (newClick === 26) {
      newClick = 1;
      oldClick = changeBGC(newClick.toString(), oldClick.toString());
    } else {
      newClick++;
      oldClick = changeBGC(newClick.toString(), oldClick.toString());
    }

    status = true;
    return {
      newClick,
      oldClick,
      status
    };
  }

  return {
    newClick,
    oldClick,
    status
  };
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./utils/resetStyle.js
const resetStyle = id => {
  if (id) {
    let element = document.getElementById(id);
    element.style.color = "#BDBDBD";
    element.style.fontWeight = "400";
  }
};
;// CONCATENATED MODULE: ./components/navButtons.js


function NavButtons({
  letters
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: letters.map((el, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "nav-letter",
        id: i + 1,
        children: el
      }, i);
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/FilteredByInput.js


function FilteredByInput({
  arr_RU_Countries,
  inputSearch,
  countries
}) {
  let arr_index = [];
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    children: arr_RU_Countries.filter((el, i) => {
      if (el.toLowerCase().includes(inputSearch.toLowerCase())) {
        arr_index.push(i);
        return el;
      }
    }).map((el, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/covid/${countries[arr_index[i]].toLowerCase()}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: el
        })
      })
    }, arr_index[i]))
  });
}
;// CONCATENATED MODULE: ./utils/filterLetter.js
const filterLetter = (item, letter) => {
  let res = item.substr(0, 1);
  if (res === letter) return true;else return false;
};
;// CONCATENATED MODULE: ./components/FilteredByLetter.js



function FilteredByLetter({
  arr_RU_Countries,
  letter,
  countries
}) {
  let arr_index = [];
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    children: arr_RU_Countries.filter((el, i) => {
      if (filterLetter(el, letter)) {
        arr_index.push(i);
        return el;
      }
    }).map((el, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/covid/${countries[arr_index[i]].toLowerCase()}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: el
        })
      })
    }, arr_index[i]))
  });
}
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(4941);
// EXTERNAL MODULE: ./mobX/state.js
var state = __webpack_require__(1972);
;// CONCATENATED MODULE: ./pages/covid.js



const axios = __webpack_require__(2376).default;












function Covid({
  countries
}) {
  state/* default.addCountries */.Z.addCountries(countries);
  const {
    0: clickId,
    1: setClickId
  } = (0,external_react_.useState)(0);
  const {
    0: oldId,
    1: setOldId
  } = (0,external_react_.useState)(0);
  const {
    0: letter,
    1: setLetter
  } = (0,external_react_.useState)("");
  const {
    0: inputSearch,
    1: setInputSearch
  } = (0,external_react_.useState)("");
  const arr_RU_Letters = (Ru_Translation_default()).arr_RU_Letters;
  const arr_RU_Countries = (Ru_Translation_default()).arr_RU_Countries;

  const navClick = e => {
    setInputSearch("");
    const element = e.target;
    const {
      newClick,
      oldClick,
      status
    } = handlerClick(element, clickId, oldId);
    if (status) setLetter(document.getElementById(oldClick).textContent);
    setOldId(oldClick);
    setClickId(newClick);
  };

  const handlerInput = e => {
    resetStyle(oldId);
    setInputSearch(e.target.value);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: "Covid-19",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0435"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        value: inputSearch,
        onChange: handlerInput
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        onClick: e => navClick(e),
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "nav-arrow-left nav-arrow left",
          children: /*#__PURE__*/jsx_runtime_.jsx(Vector1, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(NavButtons, {
          letters: arr_RU_Letters
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "nav-arrow-right nav-arrow right",
          children: /*#__PURE__*/jsx_runtime_.jsx(Vector2, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "box-filter",
        children: inputSearch ? /*#__PURE__*/jsx_runtime_.jsx(FilteredByInput, {
          arr_RU_Countries: arr_RU_Countries,
          inputSearch: inputSearch,
          countries: countries
        }) : /*#__PURE__*/jsx_runtime_.jsx(FilteredByLetter, {
          arr_RU_Countries: arr_RU_Countries,
          letter: letter,
          countries: countries
        })
      })]
    })
  });
}

Covid.getInitialProps = async ctx => {
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/countries",
    headers: {
      "x-rapidapi-key": "94798c3c6bmshfca9a4960f75ed3p12f63ajsn2298b9459af5",
      "x-rapidapi-host": "covid-193.p.rapidapi.com"
    }
  };
  const {
    data
  } = await axios.request(options);
  return {
    countries: data.response
  };
};

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

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,640], function() { return __webpack_exec__(8205); });
module.exports = __webpack_exports__;

})();