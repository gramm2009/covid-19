(function() {
var exports = {};
exports.id = "pages/covid/[country]";
exports.ids = ["pages/covid/[country]"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\viktor\\react\\TESTZADANIY\\Web Creator\\covid\\components\\Layout.js";

function Layout({
  children,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E COVID-19"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./mobX/state.js":
/*!***********************!*\
  !*** ./mobX/state.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class State {
  constructor() {
    _defineProperty(this, "countries", []);

    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeAutoObservable)(this);
  }

  addCountries(data) {
    this.countries = [...data];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new State());

/***/ }),

/***/ "./pages/covid/[country].js":
/*!**********************************!*\
  !*** ./pages/covid/[country].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Country; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_continentTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/continentTranslate */ "./utils/continentTranslate.js");
/* harmony import */ var _utils_countryName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/countryName */ "./utils/countryName.js");
/* harmony import */ var _utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/letterSpacing */ "./utils/letterSpacing.js");

var _jsxFileName = "C:\\viktor\\react\\TESTZADANIY\\Web Creator\\covid\\pages\\covid\\[country].js";

const axios = __webpack_require__(/*! axios */ "axios").default;






function Country({
  data
}) {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    ruCountry
  } = (0,_utils_countryName__WEBPACK_IMPORTED_MODULE_4__.countryName)(query.country);
  console.log(data);
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
                children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].cases.new)
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
                children: (0,_utils_letterSpacing__WEBPACK_IMPORTED_MODULE_5__.letterSpacing)(data[0].deaths.new)
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

/***/ "./utils/Ru_Translation.js":
/*!*********************************!*\
  !*** ./utils/Ru_Translation.js ***!
  \*********************************/
/***/ (function(module) {

const arr_RU_Letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'];
const arr_RU_Countries = ["Афганистан", "Албания", "Алжир", "Андорра", "Ангола", "Ангилья", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Австралия", "Австрия", "Азербайджан", "Багамские Острова", "Бахрейн", "Бангладеш", "Барбадос", "Беларусь", "Бельгия", "Белиз", "Бенин", "Бермудские острова", "Бутан", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Британские Виргинские острова", "Бруней", "Болгария", "Буркина-Фасо", "Бурунди", "Кабо-Верде", "Камбоджа", "Камерун", "Канада", "ЦАР", "Карибские Нидерланды", "Каймановы острова", "Чад", "Нормандские острова", "Чили", "Китай", "Колумбия", "Коморские острова", "Конго", "Коста-Рика", "Хорватия", "Куба", "Кура и цедил ао", "Кипр", "Чехия", "Дания", "Алмазная Принцесса", "Алмазная Принцесса", "Джибути", "Доминика", "Доминиканская Республика", "ДРК", "Эквадор", "Египет", "Сальвадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эсватини", "Эфиопия", "Фарерские острова", "Фолклендские острова", "Фиджи", "Финляндия", "Франция", "Французская Гвиана", "Французская Полинезия", "Габон", "Гамбия", "Грузия", "Германия", "Гана", "Гибралтар", "Греция", "Гренландия", "Гренада", "Гваделупа", "Гуам", "Гватемала", "Гвинея", "Гвинея-Бисау", "Гайана", "Гаити", "Гондурас", "Гонконг", "Венгрия", "Исландия", "Индия", "Индонезия", "Иран", "Ирак", "Ирландия", "Остров Мэн", "Израиль", "Италия", "Берег Слоновой Кости", "Ямайка", "Япония", "Иордания", "Казахстан", "Кения", "Кувейт", "Кыргызстан", "Лаос", "Латвия", "Ливан", "Лесото", "Либерия", "Ливия", "Лихтенштейн", "Литва", "Люксембург", "Макао", "Мадагаскар", "Малави", "Малайзия", "Мальдивы", "Мали", "Мальта", "Маршалловы Острова", "Мартиника", "Мавритания", "Маврикий", "Майотта", "Мексика", "Микронезия", "Молдова", "Монако", "Монголия", "Черногория", "Монтсеррат", "Марокко", "Мозамбик", "МС-Заандам", "МС-Заандам -", "Мьянма", "Намибия", "Непал", "Нидерланды", "Новая Каледония", "Новая Зеландия", "Никарагуа", "Нигер", "Нигерия", "Северная Македония", "Норвегия", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Филиппины", "Польша", "Португалия", "Пуэрто-Рико", "Катар", "Научно-исследовательский союз", "Румыния", "Россия", "Руанда", "Южная Корея", "Остров Святой Елены", "Сент-Китс и Невис", "Сент-Люсия", "Сен-Мартен", "Сен-Пьер-Микелон", "Самоа", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Сенегал", "Сербия", "Сейшельские острова", "Сьерра-Леоне", "Сингапур", "Синт-Мартен", "Словакия", "Словения", "Соломоновы Острова", "Сомали", "Южная Африка", "Южный Судан", "Испания", "Шри-Ланка", "Сент-Барт", "Сент-Винсент-Гренадины", "Судан", "Суринам", "Швеция", "Швейцария", "Сирия", "Тайвань", "Таджикистан", "Танзания", "Таиланд", "Тимор-Лешти", "Того", "Тринидад и Тобаго", "Тунис", "Турция", "Теркс и Кайкос", "ОАЭ", "Уганда", "Великобритания", "Украина", "Уругвай", "Виргинские острова США", "США", "Узбекистан", "Вануату", "Ватикан", "Венесуэла", "Вьетнам", "Уоллис и Футуна", "Западная Сахара", "Йемен", "Замбия", "Зимбабве"];
module.exports = {
  arr_RU_Letters,
  arr_RU_Countries
};

/***/ }),

/***/ "./utils/continentTranslate.js":
/*!*************************************!*\
  !*** ./utils/continentTranslate.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "continentTranslate": function() { return /* binding */ continentTranslate; }
/* harmony export */ });
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

/***/ }),

/***/ "./utils/countryName.js":
/*!******************************!*\
  !*** ./utils/countryName.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countryName": function() { return /* binding */ countryName; }
/* harmony export */ });
/* harmony import */ var _utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././utils/Ru_Translation */ "./utils/Ru_Translation.js");
/* harmony import */ var _utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobX_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobX/state */ "./mobX/state.js");


const countryName = country => {
  let countries = _mobX_state__WEBPACK_IMPORTED_MODULE_1__.default.countries;
  const countryName = country.toLowerCase();
  countries = countries.map(el => el.toLowerCase());
  const index = countries.indexOf(countryName);
  const ruCountry = (_utils_Ru_Translation__WEBPACK_IMPORTED_MODULE_0___default().arr_RU_Countries)[index];
  return {
    ruCountry
  };
};

/***/ }),

/***/ "./utils/letterSpacing.js":
/*!********************************!*\
  !*** ./utils/letterSpacing.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "letterSpacing": function() { return /* binding */ letterSpacing; }
/* harmony export */ });
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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("mobx");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/covid/[country].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2NvdmlkLy4vbW9iWC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9jb3ZpZC8uL3BhZ2VzL2NvdmlkL1tjb3VudHJ5XS5qcyIsIndlYnBhY2s6Ly9jb3ZpZC8uL3V0aWxzL1J1X1RyYW5zbGF0aW9uLmpzIiwid2VicGFjazovL2NvdmlkLy4vdXRpbHMvY29udGluZW50VHJhbnNsYXRlLmpzIiwid2VicGFjazovL2NvdmlkLy4vdXRpbHMvY291bnRyeU5hbWUuanMiLCJ3ZWJwYWNrOi8vY292aWQvLi91dGlscy9sZXR0ZXJTcGFjaW5nLmpzIiwid2VicGFjazovL2NvdmlkL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jb3ZpZC9leHRlcm5hbCBcIm1vYnhcIiIsIndlYnBhY2s6Ly9jb3ZpZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NvdmlkL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jb3ZpZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJTdGF0ZSIsImNvbnN0cnVjdG9yIiwibWFrZUF1dG9PYnNlcnZhYmxlIiwiYWRkQ291bnRyaWVzIiwiZGF0YSIsImNvdW50cmllcyIsImF4aW9zIiwicmVxdWlyZSIsIkNvdW50cnkiLCJxdWVyeSIsInVzZVJvdXRlciIsInJ1Q291bnRyeSIsImNvdW50cnlOYW1lIiwiY291bnRyeSIsImNvbnNvbGUiLCJsb2ciLCJjb250aW5lbnRUcmFuc2xhdGUiLCJjb250aW5lbnQiLCJsZXR0ZXJTcGFjaW5nIiwicG9wdWxhdGlvbiIsImNhc2VzIiwidG90YWwiLCJuZXciLCJhY3RpdmUiLCJjcml0aWNhbCIsInJlY292ZXJlZCIsImRlYXRocyIsInRlc3RzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInByb3BzIiwicmVzcG9uc2UiLCJhcnJfUlVfTGV0dGVycyIsImFycl9SVV9Db3VudHJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RhdGUiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImVsIiwiaW5kZXgiLCJpbmRleE9mIiwiUnVfVHJhbnNsYXRpb24iLCJzIiwic3RyIiwidG9TdHJpbmciLCJuZXdTdHIiLCJjb3VudCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicmV2ZXJzZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBaEIsRUFBcUM7QUFDaEQsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUEsa0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBRUNELFFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQSxrQkFESjtBQVdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDs7QUFFQSxNQUFNRSxLQUFOLENBQVk7QUFHUkMsYUFBVyxHQUFHO0FBQUEsdUNBRkYsRUFFRTs7QUFDVkMsNERBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVEQyxjQUFZLENBQUNDLElBQUQsRUFBTztBQUNmLFNBQUtDLFNBQUwsR0FBaUIsQ0FBQyxHQUFHRCxJQUFKLENBQWpCO0FBQ0g7O0FBVE87O0FBWVosK0RBQWUsSUFBSUosS0FBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQU1NLEtBQUssR0FBR0MsaURBQWQ7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNB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QVhNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLE1BQU1PLGFBQWEsR0FBRTRCLENBQUQsSUFBSztBQUNoQyxNQUFHQSxDQUFILEVBQUs7QUFDRCxRQUFJQyxHQUFHLEdBQUNELENBQUMsQ0FBQ0UsUUFBRixFQUFSO0FBRUEsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQ0osR0FBRyxDQUFDSyxNQUFKLEdBQVcsQ0FBckIsRUFBdUJELENBQUMsSUFBRSxDQUExQixFQUE0QkEsQ0FBQyxFQUE3QixFQUFnQztBQUM1QkYsWUFBTSxDQUFDSSxJQUFQLENBQVlOLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFmOztBQUNBLFVBQUlELEtBQUssS0FBRyxDQUFULElBQWNBLEtBQUssS0FBRyxDQUF0QixJQUEyQkEsS0FBSyxLQUFHLENBQXRDLEVBQXlDO0FBQ3JDRCxjQUFNLENBQUNJLElBQVAsQ0FBWSxHQUFaO0FBQ0g7O0FBQ0RILFdBQUs7QUFDUjs7QUFDREQsVUFBTSxHQUFDQSxNQUFNLENBQUNLLE9BQVAsRUFBUDtBQUNBTCxVQUFNLEdBQUNBLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLEVBQVosQ0FBUDtBQUNBLFdBQU9OLE1BQVA7QUFDSDs7QUFDRCxTQUFPLEdBQVA7QUFDQyxDQWxCTSxDOzs7Ozs7Ozs7OztBQ0FQLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2NvdmlkL1tjb3VudHJ5XS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIHRpdGxlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPtCh0YLQsNGC0LjRgdGC0LjQutCwINC/0L4gQ09WSUQtMTk8L2gxPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5cclxuY2xhc3MgU3RhdGUge1xyXG4gICAgY291bnRyaWVzID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvdW50cmllcyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBbLi4uZGF0YV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdGF0ZSgpO1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKS5kZWZhdWx0O1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgY29udGluZW50VHJhbnNsYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnRpbmVudFRyYW5zbGF0ZVwiO1xyXG5pbXBvcnQgeyBjb3VudHJ5TmFtZSB9IGZyb20gXCIuLi8uLi91dGlscy9jb3VudHJ5TmFtZVwiO1xyXG5pbXBvcnQgeyBsZXR0ZXJTcGFjaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xldHRlclNwYWNpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50cnkoeyBkYXRhIH0pIHtcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBydUNvdW50cnkgfSA9IGNvdW50cnlOYW1lKHF1ZXJ5LmNvdW50cnkpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtxdWVyeS5jb3VudHJ5fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY291bnRyeU5hbWUtbmFtZVwiPntydUNvdW50cnl9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50cnktcGFnZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICDQmtC+0L3RgtC40L3QtdC90YI6IDxiPntjb250aW5lbnRUcmFuc2xhdGUoZGF0YVswXS5jb250aW5lbnQpfTwvYj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvdW50cnktcGFnZS1tYXJnaW4tYm90dG9tXCI+0J/QvtC/0YPQu9GP0YbQuNGPOiA8Yj57bGV0dGVyU3BhY2luZyhkYXRhWzBdLnBvcHVsYXRpb24pfTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50cnlOYW1lLXN0YXRpc3RpY3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3VudHJ5LXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCX0LDQsdC+0LvQtdCy0YjQuNC1OiB7bGV0dGVyU3BhY2luZyhkYXRhWzBdLmNhc2VzLnRvdGFsKX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xldHRlclNwYWNpbmcoZGF0YVswXS5jYXNlc1tcIjFNX3BvcFwiXSl9LzEg0LzQu9C9LiDQvdCw0YHQtdC70LXQvdC40Y88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QvtCy0YvQtSDRgdC70YPRh9Cw0Lgg0LfQsCDRgdGD0YLQutC4OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50cnlOYW1lLXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uY2FzZXMubmV3KX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+0JHQvtC70LXRjtGCINCyINCw0LrRgtC40LLQvdC+0Lkg0YHRgtCw0LTQuNC4OiA8Yj57bGV0dGVyU3BhY2luZyhkYXRhWzBdLmNhc2VzLmFjdGl2ZSl9PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+0JrRgNC40YLQuNGH0LXRgdC60L7QtSDRgdC+0YHRgtC+0Y/QvdC40LU6IDxiPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uY2FzZXMuY3JpdGljYWwpfTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPtCS0YvQt9C00L7RgNC+0LLQtdC70Lg6IDxiPntsZXR0ZXJTcGFjaW5nKGRhdGFbMF0uY2FzZXMucmVjb3ZlcmVkKX08L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCj0LzQtdGA0LvQuDoge2xldHRlclNwYWNpbmcoZGF0YVswXS5kZWF0aHMudG90YWwpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bGV0dGVyU3BhY2luZyhkYXRhWzBdLmRlYXRoc1tcIjFNX3BvcFwiXSl9LzHQvNC70L0u0L3QsNGB0LXQu9C10L3QuNGPPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0L7QstGL0LUg0YHQu9GD0YfQsNC4INC30LAg0YHRg9GC0LrQuDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudHJ5TmFtZS1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57bGV0dGVyU3BhY2luZyhkYXRhWzBdLmRlYXRocy5uZXcpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPtCh0LTQsNC70Lgg0YLQtdGB0YI6IHtsZXR0ZXJTcGFjaW5nKGRhdGFbMF0udGVzdHMudG90YWwpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bGV0dGVyU3BhY2luZyhkYXRhWzBdLnRlc3RzW1wiMU1fcG9wXCJdKX0vMdC80LvQvS7QvdCw0YHQtdC70LXQvdC40Y88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb3ZpZC0xOTMucC5yYXBpZGFwaS5jb20vc3RhdGlzdGljc1wiLFxyXG4gICAgICAgIHBhcmFtcyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCI5NDc5OGMzYzZibXNoZmNhOWE0OTYwZjc1ZWQzcDEyZjYzYWpzbjIyOThiOTQ1OWFmNVwiLFxyXG4gICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcImNvdmlkLTE5My5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IGRhdGE6IGRhdGEucmVzcG9uc2UgfSxcclxuICAgIH07XHJcbn1cclxuIiwiY29uc3QgYXJyX1JVX0xldHRlcnMgPSBbJ9CQJywgJ9CRJywgJ9CSJywgJ9CTJywgJ9CUJywgJ9CVJywgICfQlycsICfQmCcsICAn0JonLCAn0JsnLCAn0JwnLCAn0J0nLCAn0J4nLCAn0J8nLCAn0KAnLCAn0KEnLCAn0KInLCAn0KMnLCAn0KQnLCAn0KUnLCAn0KYnLCAn0KcnLCAn0KgnLCAn0K0nLCAn0K4nLCAn0K8nXTtcclxuXHJcbmNvbnN0IGFycl9SVV9Db3VudHJpZXMgPSBbXHJcbiAgICBcItCQ0YTQs9Cw0L3QuNGB0YLQsNC9XCIsXHJcbiAgICBcItCQ0LvQsdCw0L3QuNGPXCIsXHJcbiAgICBcItCQ0LvQttC40YBcIixcclxuICAgIFwi0JDQvdC00L7RgNGA0LBcIixcclxuICAgIFwi0JDQvdCz0L7Qu9CwXCIsXHJcbiAgICBcItCQ0L3Qs9C40LvRjNGPXCIsXHJcbiAgICBcItCQ0L3RgtC40LPRg9CwINC4INCR0LDRgNCx0YPQtNCwXCIsXHJcbiAgICBcItCQ0YDQs9C10L3RgtC40L3QsFwiLFxyXG4gICAgXCLQkNGA0LzQtdC90LjRj1wiLFxyXG4gICAgXCLQkNGA0YPQsdCwXCIsXHJcbiAgICBcItCQ0LLRgdGC0YDQsNC70LjRj1wiLFxyXG4gICAgXCLQkNCy0YHRgtGA0LjRj1wiLFxyXG4gICAgXCLQkNC30LXRgNCx0LDQudC00LbQsNC9XCIsXHJcbiAgICBcItCR0LDQs9Cw0LzRgdC60LjQtSDQntGB0YLRgNC+0LLQsFwiLFxyXG4gICAgXCLQkdCw0YXRgNC10LnQvVwiLFxyXG4gICAgXCLQkdCw0L3Qs9C70LDQtNC10YhcIixcclxuICAgIFwi0JHQsNGA0LHQsNC00L7RgVwiLFxyXG4gICAgXCLQkdC10LvQsNGA0YPRgdGMXCIsXHJcbiAgICBcItCR0LXQu9GM0LPQuNGPXCIsXHJcbiAgICBcItCR0LXQu9C40LdcIixcclxuICAgIFwi0JHQtdC90LjQvVwiLFxyXG4gICAgXCLQkdC10YDQvNGD0LTRgdC60LjQtSDQvtGB0YLRgNC+0LLQsFwiLFxyXG4gICAgXCLQkdGD0YLQsNC9XCIsXHJcbiAgICBcItCR0L7Qu9C40LLQuNGPXCIsXHJcbiAgICBcItCR0L7RgdC90LjRjyDQuCDQk9C10YDRhtC10LPQvtCy0LjQvdCwXCIsXHJcbiAgICBcItCR0L7RgtGB0LLQsNC90LBcIixcclxuICAgIFwi0JHRgNCw0LfQuNC70LjRj1wiLFxyXG4gICAgXCLQkdGA0LjRgtCw0L3RgdC60LjQtSDQktC40YDQs9C40L3RgdC60LjQtSDQvtGB0YLRgNC+0LLQsFwiLFxyXG4gICAgXCLQkdGA0YPQvdC10LlcIixcclxuICAgIFwi0JHQvtC70LPQsNGA0LjRj1wiLFxyXG4gICAgXCLQkdGD0YDQutC40L3QsC3QpNCw0YHQvlwiLFxyXG4gICAgXCLQkdGD0YDRg9C90LTQuFwiLFxyXG4gICAgXCLQmtCw0LHQvi3QktC10YDQtNC1XCIsXHJcbiAgICBcItCa0LDQvNCx0L7QtNC20LBcIixcclxuICAgIFwi0JrQsNC80LXRgNGD0L1cIixcclxuICAgIFwi0JrQsNC90LDQtNCwXCIsXHJcbiAgICBcItCm0JDQoFwiLFxyXG4gICAgXCLQmtCw0YDQuNCx0YHQutC40LUg0J3QuNC00LXRgNC70LDQvdC00YtcIixcclxuICAgIFwi0JrQsNC50LzQsNC90L7QstGLINC+0YHRgtGA0L7QstCwXCIsXHJcbiAgICBcItCn0LDQtFwiLFxyXG4gICAgXCLQndC+0YDQvNCw0L3QtNGB0LrQuNC1INC+0YHRgtGA0L7QstCwXCIsXHJcbiAgICBcItCn0LjQu9C4XCIsXHJcbiAgICBcItCa0LjRgtCw0LlcIixcclxuICAgIFwi0JrQvtC70YPQvNCx0LjRj1wiLFxyXG4gICAgXCLQmtC+0LzQvtGA0YHQutC40LUg0L7RgdGC0YDQvtCy0LBcIixcclxuICAgIFwi0JrQvtC90LPQvlwiLFxyXG4gICAgXCLQmtC+0YHRgtCwLdCg0LjQutCwXCIsXHJcbiAgICBcItCl0L7RgNCy0LDRgtC40Y9cIixcclxuICAgIFwi0JrRg9Cx0LBcIixcclxuICAgIFwi0JrRg9GA0LAg0Lgg0YbQtdC00LjQuyDQsNC+XCIsXHJcbiAgICBcItCa0LjQv9GAXCIsXHJcbiAgICBcItCn0LXRhdC40Y9cIixcclxuICAgIFwi0JTQsNC90LjRj1wiLFxyXG4gICAgXCLQkNC70LzQsNC30L3QsNGPINCf0YDQuNC90YbQtdGB0YHQsFwiLFxyXG4gICAgXCLQkNC70LzQsNC30L3QsNGPINCf0YDQuNC90YbQtdGB0YHQsFwiLFxyXG4gICAgXCLQlNC20LjQsdGD0YLQuFwiLFxyXG4gICAgXCLQlNC+0LzQuNC90LjQutCwXCIsXHJcbiAgICBcItCU0L7QvNC40L3QuNC60LDQvdGB0LrQsNGPINCg0LXRgdC/0YPQsdC70LjQutCwXCIsXHJcbiAgICBcItCU0KDQmlwiLFxyXG4gICAgXCLQrdC60LLQsNC00L7RgFwiLFxyXG4gICAgXCLQldCz0LjQv9C10YJcIixcclxuICAgIFwi0KHQsNC70YzQstCw0LTQvtGAXCIsXHJcbiAgICBcItCt0LrQstCw0YLQvtGA0LjQsNC70YzQvdCw0Y8g0JPQstC40L3QtdGPXCIsXHJcbiAgICBcItCt0YDQuNGC0YDQtdGPXCIsXHJcbiAgICBcItCt0YHRgtC+0L3QuNGPXCIsXHJcbiAgICBcItCt0YHQstCw0YLQuNC90LhcIixcclxuICAgIFwi0K3RhNC40L7Qv9C40Y9cIixcclxuICAgIFwi0KTQsNGA0LXRgNGB0LrQuNC1INC+0YHRgtGA0L7QstCwXCIsXHJcbiAgICBcItCk0L7Qu9C60LvQtdC90LTRgdC60LjQtSDQvtGB0YLRgNC+0LLQsFwiLFxyXG4gICAgXCLQpNC40LTQttC4XCIsXHJcbiAgICBcItCk0LjQvdC70Y/QvdC00LjRj1wiLFxyXG4gICAgXCLQpNGA0LDQvdGG0LjRj1wiLFxyXG4gICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQsNGPINCT0LLQuNCw0L3QsFwiLFxyXG4gICAgXCLQpNGA0LDQvdGG0YPQt9GB0LrQsNGPINCf0L7Qu9C40L3QtdC30LjRj1wiLFxyXG4gICAgXCLQk9Cw0LHQvtC9XCIsXHJcbiAgICBcItCT0LDQvNCx0LjRj1wiLFxyXG4gICAgXCLQk9GA0YPQt9C40Y9cIixcclxuICAgIFwi0JPQtdGA0LzQsNC90LjRj1wiLFxyXG4gICAgXCLQk9Cw0L3QsFwiLFxyXG4gICAgXCLQk9C40LHRgNCw0LvRgtCw0YBcIixcclxuICAgIFwi0JPRgNC10YbQuNGPXCIsXHJcbiAgICBcItCT0YDQtdC90LvQsNC90LTQuNGPXCIsXHJcbiAgICBcItCT0YDQtdC90LDQtNCwXCIsXHJcbiAgICBcItCT0LLQsNC00LXQu9GD0L/QsFwiLFxyXG4gICAgXCLQk9GD0LDQvFwiLFxyXG4gICAgXCLQk9Cy0LDRgtC10LzQsNC70LBcIixcclxuICAgIFwi0JPQstC40L3QtdGPXCIsXHJcbiAgICBcItCT0LLQuNC90LXRjy3QkdC40YHQsNGDXCIsXHJcbiAgICBcItCT0LDQudCw0L3QsFwiLFxyXG4gICAgXCLQk9Cw0LjRgtC4XCIsXHJcbiAgICBcItCT0L7QvdC00YPRgNCw0YFcIixcclxuICAgIFwi0JPQvtC90LrQvtC90LNcIixcclxuICAgIFwi0JLQtdC90LPRgNC40Y9cIixcclxuICAgIFwi0JjRgdC70LDQvdC00LjRj1wiLFxyXG4gICAgXCLQmNC90LTQuNGPXCIsXHJcbiAgICBcItCY0L3QtNC+0L3QtdC30LjRj1wiLFxyXG4gICAgXCLQmNGA0LDQvVwiLFxyXG4gICAgXCLQmNGA0LDQulwiLFxyXG4gICAgXCLQmNGA0LvQsNC90LTQuNGPXCIsXHJcbiAgICBcItCe0YHRgtGA0L7QsiDQnNGN0L1cIixcclxuICAgIFwi0JjQt9GA0LDQuNC70YxcIixcclxuICAgIFwi0JjRgtCw0LvQuNGPXCIsXHJcbiAgICBcItCR0LXRgNC10LMg0KHQu9C+0L3QvtCy0L7QuSDQmtC+0YHRgtC4XCIsXHJcbiAgICBcItCv0LzQsNC50LrQsFwiLFxyXG4gICAgXCLQr9C/0L7QvdC40Y9cIixcclxuICAgIFwi0JjQvtGA0LTQsNC90LjRj1wiLFxyXG4gICAgXCLQmtCw0LfQsNGF0YHRgtCw0L1cIixcclxuICAgIFwi0JrQtdC90LjRj1wiLFxyXG4gICAgXCLQmtGD0LLQtdC50YJcIixcclxuICAgIFwi0JrRi9GA0LPRi9C30YHRgtCw0L1cIixcclxuICAgIFwi0JvQsNC+0YFcIixcclxuICAgIFwi0JvQsNGC0LLQuNGPXCIsXHJcbiAgICBcItCb0LjQstCw0L1cIixcclxuICAgIFwi0JvQtdGB0L7RgtC+XCIsXHJcbiAgICBcItCb0LjQsdC10YDQuNGPXCIsXHJcbiAgICBcItCb0LjQstC40Y9cIixcclxuICAgIFwi0JvQuNGF0YLQtdC90YjRgtC10LnQvVwiLFxyXG4gICAgXCLQm9C40YLQstCwXCIsXHJcbiAgICBcItCb0Y7QutGB0LXQvNCx0YPRgNCzXCIsXHJcbiAgICBcItCc0LDQutCw0L5cIixcclxuICAgIFwi0JzQsNC00LDQs9Cw0YHQutCw0YBcIixcclxuICAgIFwi0JzQsNC70LDQstC4XCIsXHJcbiAgICBcItCc0LDQu9Cw0LnQt9C40Y9cIixcclxuICAgIFwi0JzQsNC70YzQtNC40LLRi1wiLFxyXG4gICAgXCLQnNCw0LvQuFwiLFxyXG4gICAgXCLQnNCw0LvRjNGC0LBcIixcclxuICAgIFwi0JzQsNGA0YjQsNC70LvQvtCy0Ysg0J7RgdGC0YDQvtCy0LBcIixcclxuICAgIFwi0JzQsNGA0YLQuNC90LjQutCwXCIsXHJcbiAgICBcItCc0LDQstGA0LjRgtCw0L3QuNGPXCIsXHJcbiAgICBcItCc0LDQstGA0LjQutC40LlcIixcclxuICAgIFwi0JzQsNC50L7RgtGC0LBcIixcclxuICAgIFwi0JzQtdC60YHQuNC60LBcIixcclxuICAgIFwi0JzQuNC60YDQvtC90LXQt9C40Y9cIixcclxuICAgIFwi0JzQvtC70LTQvtCy0LBcIixcclxuICAgIFwi0JzQvtC90LDQutC+XCIsXHJcbiAgICBcItCc0L7QvdCz0L7Qu9C40Y9cIixcclxuICAgIFwi0KfQtdGA0L3QvtCz0L7RgNC40Y9cIixcclxuICAgIFwi0JzQvtC90YLRgdC10YDRgNCw0YJcIixcclxuICAgIFwi0JzQsNGA0L7QutC60L5cIixcclxuICAgIFwi0JzQvtC30LDQvNCx0LjQulwiLFxyXG4gICAgXCLQnNChLdCX0LDQsNC90LTQsNC8XCIsXHJcbiAgICBcItCc0KEt0JfQsNCw0L3QtNCw0LwgLVwiLFxyXG4gICAgXCLQnNGM0Y/QvdC80LBcIixcclxuICAgIFwi0J3QsNC80LjQsdC40Y9cIixcclxuICAgIFwi0J3QtdC/0LDQu1wiLFxyXG4gICAgXCLQndC40LTQtdGA0LvQsNC90LTRi1wiLFxyXG4gICAgXCLQndC+0LLQsNGPINCa0LDQu9C10LTQvtC90LjRj1wiLFxyXG4gICAgXCLQndC+0LLQsNGPINCX0LXQu9Cw0L3QtNC40Y9cIixcclxuICAgIFwi0J3QuNC60LDRgNCw0LPRg9CwXCIsXHJcbiAgICBcItCd0LjQs9C10YBcIixcclxuICAgIFwi0J3QuNCz0LXRgNC40Y9cIixcclxuICAgIFwi0KHQtdCy0LXRgNC90LDRjyDQnNCw0LrQtdC00L7QvdC40Y9cIixcclxuICAgIFwi0J3QvtGA0LLQtdCz0LjRj1wiLFxyXG4gICAgXCLQntC80LDQvVwiLFxyXG4gICAgXCLQn9Cw0LrQuNGB0YLQsNC9XCIsXHJcbiAgICBcItCf0LDQu9C10YHRgtC40L3QsFwiLFxyXG4gICAgXCLQn9Cw0L3QsNC80LBcIixcclxuICAgIFwi0J/QsNC/0YPQsC3QndC+0LLQsNGPINCT0LLQuNC90LXRj1wiLFxyXG4gICAgXCLQn9Cw0YDQsNCz0LLQsNC5XCIsXHJcbiAgICBcItCf0LXRgNGDXCIsXHJcbiAgICBcItCk0LjQu9C40L/Qv9C40L3Ri1wiLFxyXG4gICAgXCLQn9C+0LvRjNGI0LBcIixcclxuICAgIFwi0J/QvtGA0YLRg9Cz0LDQu9C40Y9cIixcclxuICAgIFwi0J/Rg9GN0YDRgtC+LdCg0LjQutC+XCIsXHJcbiAgICBcItCa0LDRgtCw0YBcIixcclxuICAgIFwi0J3QsNGD0YfQvdC+LdC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YHQvtGO0LdcIixcclxuICAgIFwi0KDRg9C80YvQvdC40Y9cIixcclxuICAgIFwi0KDQvtGB0YHQuNGPXCIsXHJcbiAgICBcItCg0YPQsNC90LTQsFwiLFxyXG4gICAgXCLQrtC20L3QsNGPINCa0L7RgNC10Y9cIixcclxuICAgIFwi0J7RgdGC0YDQvtCyINCh0LLRj9GC0L7QuSDQldC70LXQvdGLXCIsXHJcbiAgICBcItCh0LXQvdGCLdCa0LjRgtGBINC4INCd0LXQstC40YFcIixcclxuICAgIFwi0KHQtdC90YIt0JvRjtGB0LjRj1wiLFxyXG4gICAgXCLQodC10L0t0JzQsNGA0YLQtdC9XCIsXHJcbiAgICBcItCh0LXQvS3Qn9GM0LXRgC3QnNC40LrQtdC70L7QvVwiLFxyXG4gICAgXCLQodCw0LzQvtCwXCIsXHJcbiAgICBcItCh0LDQvS3QnNCw0YDQuNC90L5cIixcclxuICAgIFwi0KHQsNC9LdCi0L7QvNC1INC4INCf0YDQuNC90YHQuNC/0LhcIixcclxuICAgIFwi0KHQsNGD0LTQvtCy0YHQutCw0Y8g0JDRgNCw0LLQuNGPXCIsXHJcbiAgICBcItCh0LXQvdC10LPQsNC7XCIsXHJcbiAgICBcItCh0LXRgNCx0LjRj1wiLFxyXG4gICAgXCLQodC10LnRiNC10LvRjNGB0LrQuNC1INC+0YHRgtGA0L7QstCwXCIsXHJcbiAgICBcItCh0YzQtdGA0YDQsC3Qm9C10L7QvdC1XCIsXHJcbiAgICBcItCh0LjQvdCz0LDQv9GD0YBcIixcclxuICAgIFwi0KHQuNC90YIt0JzQsNGA0YLQtdC9XCIsXHJcbiAgICBcItCh0LvQvtCy0LDQutC40Y9cIixcclxuICAgIFwi0KHQu9C+0LLQtdC90LjRj1wiLFxyXG4gICAgXCLQodC+0LvQvtC80L7QvdC+0LLRiyDQntGB0YLRgNC+0LLQsFwiLFxyXG4gICAgXCLQodC+0LzQsNC70LhcIixcclxuICAgIFwi0K7QttC90LDRjyDQkNGE0YDQuNC60LBcIixcclxuICAgIFwi0K7QttC90YvQuSDQodGD0LTQsNC9XCIsXHJcbiAgICBcItCY0YHQv9Cw0L3QuNGPXCIsXHJcbiAgICBcItCo0YDQuC3Qm9Cw0L3QutCwXCIsXHJcbiAgICBcItCh0LXQvdGCLdCR0LDRgNGCXCIsXHJcbiAgICBcItCh0LXQvdGCLdCS0LjQvdGB0LXQvdGCLdCT0YDQtdC90LDQtNC40L3Ri1wiLFxyXG4gICAgXCLQodGD0LTQsNC9XCIsXHJcbiAgICBcItCh0YPRgNC40L3QsNC8XCIsXHJcbiAgICBcItCo0LLQtdGG0LjRj1wiLFxyXG4gICAgXCLQqNCy0LXQudGG0LDRgNC40Y9cIixcclxuICAgIFwi0KHQuNGA0LjRj1wiLFxyXG4gICAgXCLQotCw0LnQstCw0L3RjFwiLFxyXG4gICAgXCLQotCw0LTQttC40LrQuNGB0YLQsNC9XCIsXHJcbiAgICBcItCi0LDQvdC30LDQvdC40Y9cIixcclxuICAgIFwi0KLQsNC40LvQsNC90LRcIixcclxuICAgIFwi0KLQuNC80L7RgC3Qm9C10YjRgtC4XCIsXHJcbiAgICBcItCi0L7Qs9C+XCIsXHJcbiAgICBcItCi0YDQuNC90LjQtNCw0LQg0Lgg0KLQvtCx0LDQs9C+XCIsXHJcbiAgICBcItCi0YPQvdC40YFcIixcclxuICAgIFwi0KLRg9GA0YbQuNGPXCIsXHJcbiAgICBcItCi0LXRgNC60YEg0Lgg0JrQsNC50LrQvtGBXCIsXHJcbiAgICBcItCe0JDQrVwiLFxyXG4gICAgXCLQo9Cz0LDQvdC00LBcIixcclxuICAgIFwi0JLQtdC70LjQutC+0LHRgNC40YLQsNC90LjRj1wiLFxyXG4gICAgXCLQo9C60YDQsNC40L3QsFwiLFxyXG4gICAgXCLQo9GA0YPQs9Cy0LDQuVwiLFxyXG4gICAgXCLQktC40YDQs9C40L3RgdC60LjQtSDQvtGB0YLRgNC+0LLQsCDQodCo0JBcIixcclxuICAgIFwi0KHQqNCQXCIsXHJcbiAgICBcItCj0LfQsdC10LrQuNGB0YLQsNC9XCIsXHJcbiAgICBcItCS0LDQvdGD0LDRgtGDXCIsXHJcbiAgICBcItCS0LDRgtC40LrQsNC9XCIsXHJcbiAgICBcItCS0LXQvdC10YHRg9GN0LvQsFwiLFxyXG4gICAgXCLQktGM0LXRgtC90LDQvFwiLFxyXG4gICAgXCLQo9C+0LvQu9C40YEg0Lgg0KTRg9GC0YPQvdCwXCIsXHJcbiAgICBcItCX0LDQv9Cw0LTQvdCw0Y8g0KHQsNGF0LDRgNCwXCIsXHJcbiAgICBcItCZ0LXQvNC10L1cIixcclxuICAgIFwi0JfQsNC80LHQuNGPXCIsXHJcbiAgICBcItCX0LjQvNCx0LDQsdCy0LVcIixcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID17XHJcbiAgICBhcnJfUlVfTGV0dGVycyxcclxuICAgIGFycl9SVV9Db3VudHJpZXNcclxufSIsImV4cG9ydCBjb25zdCBjb250aW5lbnRUcmFuc2xhdGU9KGNvbnRpbmVudCk9PntcclxuICAgIGlmKGNvbnRpbmVudCl7XHJcbiAgICAgICAgaWYoY29udGluZW50PT09XCJFdXJvcGVcIikgcmV0dXJuICfQldCy0YDQvtC/0LAnXHJcbiAgICAgICAgaWYoY29udGluZW50PT09XCJBZnJpY2FcIikgcmV0dXJuICfQkNGE0YDQuNC60LAnXHJcbiAgICAgICAgaWYoY29udGluZW50PT09XCJOb3J0aC1BbWVyaWNhXCIpIHJldHVybiAn0KHQtdCy0LXRgNC90LDRjyDQkNC80LXRgNC40LrQsCdcclxuICAgICAgICBpZihjb250aW5lbnQ9PT1cIkFzaWFcIikgcmV0dXJuICfQkNC30LjRjydcclxuICAgICAgICBpZihjb250aW5lbnQ9PT1cIlNvdXRoLUFtZXJpY2FcIikgcmV0dXJuICfQrtC20L3QsNGPINCQ0LzQtdGA0LjQutCwJ1xyXG4gICAgICAgIGlmKGNvbnRpbmVudD09PVwiT2NlYW5pYVwiKSByZXR1cm4gJ9Ce0LrQtdCw0L3QuNGPJ1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5yZXR1cm4gXCItXCJcclxuICAgIFxyXG59IiwiaW1wb3J0IFJ1X1RyYW5zbGF0aW9uIGZyb20gXCIuLi8uL3V0aWxzL1J1X1RyYW5zbGF0aW9uXCI7XHJcblxyXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4uL21vYlgvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudHJ5TmFtZT0oY291bnRyeSk9PntcclxuICAgIFxyXG4gICAgbGV0IGNvdW50cmllcyA9IHN0YXRlLmNvdW50cmllc1xyXG4gICAgXHJcbiAgICBjb25zdCBjb3VudHJ5TmFtZSA9IGNvdW50cnkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5tYXAoKGVsKSA9PiBlbC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IGluZGV4ID0gY291bnRyaWVzLmluZGV4T2YoY291bnRyeU5hbWUpO1xyXG4gICAgY29uc3QgcnVDb3VudHJ5ID0gUnVfVHJhbnNsYXRpb24uYXJyX1JVX0NvdW50cmllc1tpbmRleF1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtydUNvdW50cnl9XHJcbiAgICBcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbGV0dGVyU3BhY2luZz0ocyk9PntcclxuaWYocyl7XHJcbiAgICBsZXQgc3RyPXMudG9TdHJpbmcoKVxyXG5cclxuICAgIGxldCBuZXdTdHIgPSBbXVxyXG4gICAgbGV0IGNvdW50ID0gMFxyXG4gICAgZm9yKGxldCBpPXN0ci5sZW5ndGgtMTtpPj0wO2ktLSl7XHJcbiAgICAgICAgbmV3U3RyLnB1c2goc3RyW2ldKVxyXG4gICAgICAgIGlmKChjb3VudD09PTIpfHwoY291bnQ9PT01KXx8KGNvdW50PT09OCkpe1xyXG4gICAgICAgICAgICBuZXdTdHIucHVzaCgnICcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50KytcclxuICAgIH1cclxuICAgIG5ld1N0cj1uZXdTdHIucmV2ZXJzZSgpXHJcbiAgICBuZXdTdHI9bmV3U3RyLmpvaW4oJycpXHJcbiAgICByZXR1cm4gbmV3U3RyXHJcbn1cclxucmV0dXJuIFwiLVwiXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9