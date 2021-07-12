exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 4941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);




function Layout({
  children,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: title
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E COVID-19"
      }), children]
    })]
  });
}

/***/ }),

/***/ 1972:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2965);
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

/* harmony default export */ __webpack_exports__["Z"] = (new State());

/***/ }),

/***/ 1726:
/***/ (function(module) {

const arr_RU_Letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'];
const arr_RU_Countries = ["Афганистан", "Албания", "Алжир", "Андорра", "Ангола", "Ангилья", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Австралия", "Австрия", "Азербайджан", "Багамские Острова", "Бахрейн", "Бангладеш", "Барбадос", "Беларусь", "Бельгия", "Белиз", "Бенин", "Бермудские острова", "Бутан", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Британские Виргинские острова", "Бруней", "Болгария", "Буркина-Фасо", "Бурунди", "Кабо-Верде", "Камбоджа", "Камерун", "Канада", "ЦАР", "Карибские Нидерланды", "Каймановы острова", "Чад", "Нормандские острова", "Чили", "Китай", "Колумбия", "Коморские острова", "Конго", "Коста-Рика", "Хорватия", "Куба", "Кура и цедил ао", "Кипр", "Чехия", "Дания", "Алмазная Принцесса", "Алмазная Принцесса", "Джибути", "Доминика", "Доминиканская Республика", "ДРК", "Эквадор", "Египет", "Сальвадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эсватини", "Эфиопия", "Фарерские острова", "Фолклендские острова", "Фиджи", "Финляндия", "Франция", "Французская Гвиана", "Французская Полинезия", "Габон", "Гамбия", "Грузия", "Германия", "Гана", "Гибралтар", "Греция", "Гренландия", "Гренада", "Гваделупа", "Гуам", "Гватемала", "Гвинея", "Гвинея-Бисау", "Гайана", "Гаити", "Гондурас", "Гонконг", "Венгрия", "Исландия", "Индия", "Индонезия", "Иран", "Ирак", "Ирландия", "Остров Мэн", "Израиль", "Италия", "Берег Слоновой Кости", "Ямайка", "Япония", "Иордания", "Казахстан", "Кения", "Кувейт", "Кыргызстан", "Лаос", "Латвия", "Ливан", "Лесото", "Либерия", "Ливия", "Лихтенштейн", "Литва", "Люксембург", "Макао", "Мадагаскар", "Малави", "Малайзия", "Мальдивы", "Мали", "Мальта", "Маршалловы Острова", "Мартиника", "Мавритания", "Маврикий", "Майотта", "Мексика", "Микронезия", "Молдова", "Монако", "Монголия", "Черногория", "Монтсеррат", "Марокко", "Мозамбик", "МС-Заандам", "МС-Заандам -", "Мьянма", "Намибия", "Непал", "Нидерланды", "Новая Каледония", "Новая Зеландия", "Никарагуа", "Нигер", "Нигерия", "Северная Македония", "Норвегия", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Филиппины", "Польша", "Португалия", "Пуэрто-Рико", "Катар", "Научно-исследовательский союз", "Румыния", "Россия", "Руанда", "Южная Корея", "Остров Святой Елены", "Сент-Китс и Невис", "Сент-Люсия", "Сен-Мартен", "Сен-Пьер-Микелон", "Самоа", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Сенегал", "Сербия", "Сейшельские острова", "Сьерра-Леоне", "Сингапур", "Синт-Мартен", "Словакия", "Словения", "Соломоновы Острова", "Сомали", "Южная Африка", "Южный Судан", "Испания", "Шри-Ланка", "Сент-Барт", "Сент-Винсент-Гренадины", "Судан", "Суринам", "Швеция", "Швейцария", "Сирия", "Тайвань", "Таджикистан", "Танзания", "Таиланд", "Тимор-Лешти", "Того", "Тринидад и Тобаго", "Тунис", "Турция", "Теркс и Кайкос", "ОАЭ", "Уганда", "Великобритания", "Украина", "Уругвай", "Виргинские острова США", "США", "Узбекистан", "Вануату", "Ватикан", "Венесуэла", "Вьетнам", "Уоллис и Футуна", "Западная Сахара", "Йемен", "Замбия", "Зимбабве"];
module.exports = {
  arr_RU_Letters,
  arr_RU_Countries
};

/***/ })

};
;