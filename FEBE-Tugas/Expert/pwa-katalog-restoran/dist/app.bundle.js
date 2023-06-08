/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/images/hero-image_2.jpg */ "./src/public/images/hero-image_2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 650px) {
    .app-bar {
        grid-template-columns: 1fr auto;
        padding: 8px 32px;
    }

    .app-bar .app-bar__brand h1 {
        font-size: 1.5em;
    }

    .app-bar .app-bar__menu {
        display: none;
    }

    .app-bar .app-bar__navigation {
        position: static;
        width: 100%;
    }

    .app-bar .app-bar__navigation ul li {
        display: inline-block;
    }

    .app-bar .app-bar__navigation ul li a {
        display: inline-block;
        width: 120px;
        text-align: center;
        margin: 0;
    }

    .restaurants {
        grid-template-columns: 1fr 1fr;
    }

    .restaurant {
        grid-template-columns: auto 1fr;
    }

    .restaurant .restaurant__name {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .restaurant .restaurant__description {
        grid-column-start: 1;
        grid-column-end: 3;
    }
}

@media screen and (max-width: 650px) {
    .resto__picture {
        max-width: 100%;
    }
}

@media screen and (min-width: 800px) {
    .app-bar .app-bar__brand h1 {
        font-size: 2em;
    }
}

@media screen and (min-width: 850px) {
    .restaurants {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (min-width: 1200px) {
    .restaurants {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (min-width: 1600px) {
    .restaurants {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media screen and (min-width: 1024px) {
    .hero {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA;IACI;QACI,+BAA+B;QAC/B,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,WAAW;IACf;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,qBAAqB;QACrB,YAAY;QACZ,kBAAkB;QAClB,SAAS;IACb;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,+BAA+B;IACnC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,yDAA0D;IAC9D;AACJ","sourcesContent":["@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n        grid-template-columns: 1fr auto;\r\n        padding: 8px 32px;\r\n    }\r\n\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n\r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 120px;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n\r\n    .restaurants {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .restaurant {\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n\r\n    .restaurant .restaurant__name {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .restaurant .restaurant__description {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .resto__picture {\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n    .restaurants {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .restaurants {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n    .restaurants {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .hero {\r\n        background-image: url('../public/images/hero-image_2.jpg');\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/images/hero-image_2.jpg */ "./src/public/images/hero-image_2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/*
  AppBar
*/

.app-bar {
    padding: 8px 16px;
    background-color: #0B4619;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    position: sticky;
    top: 0;
    z-index: 99;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.app-bar .app-bar__menu {
    display: flex;
    align-items: center;
}

.app-bar .app-bar__menu button {
    background-color: transparent;
    border: none;
    font-size: 28px;
    padding: 10px;
    cursor: pointer;
    color: #FFCC1D;
}

.app-bar .app-bar__brand {
    display: flex;
    align-items: center;
}

.app-bar .app-bar__brand h1 {
    color: #FFCC1D;
    text-transform: uppercase;
    font-size: 22px;
    user-select: none;
}

.app-bar .app-bar__navigation {
    position: absolute;
    top: 50px;
    left: -180px;
    width: 150px;
    transition: all 0.3s;
    padding: 8px;
    overflow: hidden;
    background-color: #0B4619;
}

.app-bar .app-bar__navigation.open {
    left: 0;
}

.app-bar .app-bar__navigation ul li a {
    display: inline-block;
    text-decoration: none;
    color: #FFCC1D;
    padding: 10px;
    margin-bottom: 5px;
    width: 100%;
}

/* jumbotron */

.hero {
    display: flex;
    align-items: center;
    min-height: 380px;
    width: 100%;
    text-align: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-color: green;
    position: relative;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.hero__inner {
    margin: 0 auto;
    max-width: 800px;
    z-index: 2;
}

.hero__title {
    color: #fff;
    font-weight: 500;
    font-size: 36px;
}

.hero__tagline {
    color: #fff;
    margin-top: 16px;
    font-size: 18px;
    font-weight: 300;
}

/*
  Main Content
*/

main {
    padding: 32px;
    flex: 1;
}

.content {
    margin: 0 auto;
    min-height: 100%;
}

.content .content__heading {
    font-weight: normal;
    text-align: center;
    margin-bottom: 1em;
}

/*
  Restaurants
*/

.restaurants {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 32px 0;
}


/*
  Resto Item
*/

.resto-item {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
}

.resto-item__header {
    position: relative;
}

.resto-item .resto-item__header .resto-item__header__poster {
    width: 100%;
}

.resto-item .resto-item__header .resto-item__header__rating {
    position: absolute;
    padding: 8px;
    bottom: 20px;
    left: 0;
    display: inline-block;
    background-color: #0B4619;
    color: #FFCC1D;
}

.resto-item .resto-item__header .resto-item__header__rating .resto-item__header__rating__score {
    margin-left: 10px;
}

.resto-item .resto-item__content {
    padding: 16px;
}

.resto-item .resto-item__content h3 {
    margin: 0 0 10px 0;
}

.resto-item .resto-item__content h3 a {
    color: #0B4619;
    text-decoration: none;
    padding: 10px;
}

.resto-item .resto-item__content p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    /* number of lines to show */
    -webkit-box-orient: vertical;
}


/*
  Resto
*/

.resto {
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px 16px;
}

.resto__name {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.resto__picture {
    display: block;
    margin: 0 auto;
    margin-bottom: 1em;
    max-width: 100%;
    height: auto;
}

.resto .resto__picture {
    width: 100%;
    max-width: 400px;
}

.resto .resto__info h4 {
    margin: 8px 0;
}

.resto__menus {
    display: flex;
    gap: 5em;
}

/* Customer Review  */

.resto__reviews h3 {
    text-align: center;
}

.customer__review {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 32px 0;
    justify-content: center;
}

.card {
    width: 100%;
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
}

.card__name {
    font-weight: bold;
    margin-bottom: 8px;
}

.card__date {
    color: #888;
    margin-bottom: 8px;
}

.card__review {
    margin-bottom: 0;
}

/*
  Like
*/

.like {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0B4619;

    position: fixed;
    bottom: 16px;
    right: 16px;
    border-radius: 50%;
    border: 0;

    font-size: 18px;
    color: white;
    cursor: pointer;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background-color: #bf1722;
    color: white;
    padding: 8px;
    z-index: 100;
}

.skip-link:focus {
    top: 0;
}

footer {
    background-color: #0B4619;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    width: 100%;
    text-align: center;
    color: #FFCC1D;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: #0B4619;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 28px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    color: #FFCC1D;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #FFCC1D;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    overflow: hidden;\r\n    background-color: #0B4619;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: #FFCC1D;\r\n    padding: 10px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n}\r\n\r\n/* jumbotron */\r\n\r\n.hero {\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 380px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-image: url(\"../public/images/hero-image_2.jpg\");\r\n    background-position: center;\r\n    background-color: green;\r\n    position: relative;\r\n}\r\n\r\n.hero::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 1;\r\n}\r\n\r\n.hero__inner {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n    z-index: 2;\r\n}\r\n\r\n.hero__title {\r\n    color: #fff;\r\n    font-weight: 500;\r\n    font-size: 36px;\r\n}\r\n\r\n.hero__tagline {\r\n    color: #fff;\r\n    margin-top: 16px;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\nmain {\r\n    padding: 32px;\r\n    flex: 1;\r\n}\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n    text-align: center;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n/*\r\n  Restaurants\r\n*/\r\n\r\n.restaurants {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Resto Item\r\n*/\r\n\r\n.resto-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n}\r\n\r\n.resto-item__header {\r\n    position: relative;\r\n}\r\n\r\n.resto-item .resto-item__header .resto-item__header__poster {\r\n    width: 100%;\r\n}\r\n\r\n.resto-item .resto-item__header .resto-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: #0B4619;\r\n    color: #FFCC1D;\r\n}\r\n\r\n.resto-item .resto-item__header .resto-item__header__rating .resto-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.resto-item .resto-item__content {\r\n    padding: 16px;\r\n}\r\n\r\n.resto-item .resto-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.resto-item .resto-item__content h3 a {\r\n    color: #0B4619;\r\n    text-decoration: none;\r\n    padding: 10px;\r\n}\r\n\r\n.resto-item .resto-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n\r\n/*\r\n  Resto\r\n*/\r\n\r\n.resto {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.resto__name {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.resto__picture {\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-bottom: 1em;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.resto .resto__picture {\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n\r\n.resto .resto__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n.resto__menus {\r\n    display: flex;\r\n    gap: 5em;\r\n}\r\n\r\n/* Customer Review  */\r\n\r\n.resto__reviews h3 {\r\n    text-align: center;\r\n}\r\n\r\n.customer__review {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n    justify-content: center;\r\n}\r\n\r\n.card {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 8px;\r\n    padding: 16px;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.card__name {\r\n    font-weight: bold;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.card__date {\r\n    color: #888;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.card__review {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n\r\n.like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #0B4619;\r\n\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n\r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.skip-link {\r\n    position: absolute;\r\n    top: -40px;\r\n    left: 0;\r\n    background-color: #bf1722;\r\n    color: white;\r\n    padding: 8px;\r\n    z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n    top: 0;\r\n}\r\n\r\nfooter {\r\n    background-color: #0B4619;\r\n    padding-top: 1.5em;\r\n    padding-bottom: 1.5em;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #FFCC1D;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ ((module) => {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js":
/*!********************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(window, factory) {
	if(!window) {return;}
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(typeof window != 'undefined' ?
	window : 0, function(window, document, lazySizes) {
	'use strict';

	if(!window.addEventListener){return;}

	var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
	var regCssFit = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/;
	var regCssObject = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/;
	var regPicture = /^picture$/i;
	var cfg = lazySizes.cfg;

	var getCSS = function (elem){
		return (getComputedStyle(elem, null) || {});
	};

	var parentFit = {

		getParent: function(element, parentSel){
			var parent = element;
			var parentNode = element.parentNode;

			if((!parentSel || parentSel == 'prev') && parentNode && regPicture.test(parentNode.nodeName || '')){
				parentNode = parentNode.parentNode;
			}

			if(parentSel != 'self'){
				if(parentSel == 'prev'){
					parent = element.previousElementSibling;
				} else if(parentSel && (parentNode.closest || window.jQuery)){
					parent = (parentNode.closest ?
							parentNode.closest(parentSel) :
							jQuery(parentNode).closest(parentSel)[0]) ||
						parentNode
					;
				} else {
					parent = parentNode;
				}
			}

			return parent;
		},

		getFit: function(element){
			var tmpMatch, parentObj;
			var css = getCSS(element);
			var content = css.content || css.fontFamily;
			var obj = {
				fit: element._lazysizesParentFit || element.getAttribute('data-parent-fit')
			};

			if(!obj.fit && content && (tmpMatch = content.match(regCssFit))){
				obj.fit = tmpMatch[1];
			}

			if(obj.fit){
				parentObj = element._lazysizesParentContainer || element.getAttribute('data-parent-container');

				if(!parentObj && content && (tmpMatch = content.match(regCssObject))){
					parentObj = tmpMatch[1];
				}

				obj.parent = parentFit.getParent(element, parentObj);


			} else {
				obj.fit = css.objectFit;
			}

			return obj;
		},

		getImageRatio: function(element){
			var i, srcset, media, ratio, match, width, height;
			var parent = element.parentNode;
			var elements = parent && regPicture.test(parent.nodeName || '') ?
					parent.querySelectorAll('source, img') :
					[element]
				;

			for(i = 0; i < elements.length; i++){
				element = elements[i];
				srcset = element.getAttribute(cfg.srcsetAttr) || element.getAttribute('srcset') || element.getAttribute('data-pfsrcset') || element.getAttribute('data-risrcset') || '';
				media = element._lsMedia || element.getAttribute('media');
				media = cfg.customMedia[element.getAttribute('data-media') || media] || media;

				if(srcset && (!media || (window.matchMedia && matchMedia(media) || {}).matches )){
					ratio = parseFloat(element.getAttribute('data-aspectratio'));

					if (!ratio) {
						match = srcset.match(regDescriptors);

						if (match) {
							if(match[2] == 'w'){
								width = match[1];
								height = match[3];
							} else {
								width = match[3];
								height = match[1];
							}
						} else {
							width = element.getAttribute('width');
							height = element.getAttribute('height');
						}

						ratio = width / height;
					}

					break;
				}
			}

			return ratio;
		},

		calculateSize: function(element, width){
			var displayRatio, height, imageRatio, retWidth;
			var fitObj = this.getFit(element);
			var fit = fitObj.fit;
			var fitElem = fitObj.parent;

			if(fit != 'width' && ((fit != 'contain' && fit != 'cover') || !(imageRatio = this.getImageRatio(element)))){
				return width;
			}

			if(fitElem){
				width = fitElem.clientWidth;
			} else {
				fitElem = element;
			}

			retWidth = width;

			if(fit == 'width'){
				retWidth = width;
			} else {
				height = fitElem.clientHeight;

				if((displayRatio =  width / height) && ((fit == 'cover' && displayRatio < imageRatio) || (fit == 'contain' && displayRatio > imageRatio))){
					retWidth = width * (imageRatio / displayRatio);
				}
			}

			return retWidth;
		}
	};

	lazySizes.parentFit = parentFit;

	document.addEventListener('lazybeforesizes', function(e){
		if(e.defaultPrevented || e.detail.instance != lazySizes){return;}

		var element = e.target;
		e.detail.width = parentFit.calculateSize(element, e.detail.width);
	});
}));


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/styles/responsive.css":
/*!***********************************!*\
  !*** ./src/styles/responsive.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/data/favorite-resto-idb.js":
/*!************************************************!*\
  !*** ./src/scripts/data/favorite-resto-idb.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/config */ "./src/scripts/globals/config.js");
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */



const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = _globals_config__WEBPACK_IMPORTED_MODULE_1__["default"];

const dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
const FavoriteRestoIdb = {
  async getResto(id) {
    if (id) {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    }
    return null;
  },
  async getAllRestos() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(restaurant) {
    if (restaurant.hasOwnProperty('id')) {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    }
    return null;
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestoIdb);


/***/ }),

/***/ "./src/scripts/data/restaurants-source.js":
/*!************************************************!*\
  !*** ./src/scripts/data/restaurants-source.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/api-endpoint */ "./src/scripts/globals/api-endpoint.js");


class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestaurantSource);


/***/ }),

/***/ "./src/scripts/globals/api-endpoint.js":
/*!*********************************************!*\
  !*** ./src/scripts/globals/api-endpoint.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/scripts/globals/config.js");


const API_ENDPOINT = {
  RESTAURANTS: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}list`,
  DETAIL: (id) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}detail/${id}`,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_ENDPOINT);


/***/ }),

/***/ "./src/scripts/globals/config.js":
/*!***************************************!*\
  !*** ./src/scripts/globals/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/large/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);


/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_like__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/like */ "./src/scripts/views/pages/like.js");
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/detail */ "./src/scripts/views/pages/detail.js");
/* harmony import */ var _views_pages_restaurants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/restaurants */ "./src/scripts/views/pages/restaurants.js");




const routes = {
  '/': _views_pages_restaurants__WEBPACK_IMPORTED_MODULE_2__["default"], // default page
  '/restaurants': _views_pages_restaurants__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/like': _views_pages_like__WEBPACK_IMPORTED_MODULE_0__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/scripts/routes/url-parser.js":
/*!******************************************!*\
  !*** ./src/scripts/routes/url-parser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
    + (splitedUrl.id ? '/:id' : '')
    + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);


/***/ }),

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ }),

/***/ "./src/scripts/utils/like-button-initiator.js":
/*!****************************************************!*\
  !*** ./src/scripts/utils/like-button-initiator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* eslint-disable max-len */
// import FavoriteRestoIdb from '../data/favorite-resto-idb';
// import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';



const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    // const restaurant = await this._favoriteRestaurants.getResto(id);
    const restaurant = await this._favoriteRestaurants.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createLikeButtonTemplate;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createLikedButtonTemplate;

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButtonInitiator);


/***/ }),

/***/ "./src/scripts/utils/sw-register.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/sw-register.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");


const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swRegister);


/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/scripts/routes/routes.js");




class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _data_restaurants_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/restaurants-source */ "./src/scripts/data/restaurants-source.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* harmony import */ var _utils_like_button_initiator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/like-button-initiator */ "./src/scripts/utils/like-button-initiator.js");
/* harmony import */ var _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/favorite-resto-idb */ "./src/scripts/data/favorite-resto-idb.js");






const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseActiveUrlWithoutCombiner();
    const restaurant = await _data_restaurants_source__WEBPACK_IMPORTED_MODULE_1__["default"].detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_2__.createRestoDetailTemplate)(restaurant);

    const jumbotron = document.querySelector('.hero');
    jumbotron.style.display = 'none';

    _utils_like_button_initiator__WEBPACK_IMPORTED_MODULE_3__["default"].init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_4__["default"],
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ }),

/***/ "./src/scripts/views/pages/like.js":
/*!*****************************************!*\
  !*** ./src/scripts/views/pages/like.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/favorite-resto-idb */ "./src/scripts/data/favorite-resto-idb.js");
/* harmony import */ var _liked_restaurants_favorite_restaurant_search_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liked-restaurants/favorite-restaurant-search-view */ "./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view.js");
/* harmony import */ var _liked_restaurants_favorite_restaurant_show_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liked-restaurants/favorite-restaurant-show-presenter */ "./src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter.js");
/* harmony import */ var _liked_restaurants_favorite_restaurant_search_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liked-restaurants/favorite-restaurant-search-presenter */ "./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter.js");
/* eslint-disable no-new */
/* eslint-disable operator-linebreak */





const view = new _liked_restaurants_favorite_restaurant_search_view__WEBPACK_IMPORTED_MODULE_1__["default"]();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new _liked_restaurants_favorite_restaurant_show_presenter__WEBPACK_IMPORTED_MODULE_2__["default"]({
      view,
      favoriteRestaurants: _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__["default"],
    });
    new _liked_restaurants_favorite_restaurant_search_presenter__WEBPACK_IMPORTED_MODULE_3__["default"]({
      view,
      favoriteRestaurants: _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__["default"],
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);


/***/ }),

/***/ "./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter.js":
/*!*******************************************************************************************!*\
  !*** ./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable operator-linebreak */

const _showFoundRestaurants = (restaurants, view) => {
  view.showRestaurants(restaurants);
};

class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(
        this.latestQuery
      );
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestos();
    }

    _showFoundRestaurants(foundRestaurants, this._view);
  }

  _showFoundRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantSearchPresenter);


/***/ }),

/***/ "./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view.js":
/*!**************************************************************************************!*\
  !*** ./src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable class-methods-use-this */


class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Restaurant</h2>
          <div class="restaurants" id="restaurants">
          </div>
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat((0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createRestoItemTemplate)(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantSearchView);


/***/ }),

/***/ "./src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter.js":
/*!*****************************************************************************************!*\
  !*** ./src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurants = await this._favoriteRestaurants.getAllRestos();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantShowPresenter);


/***/ }),

/***/ "./src/scripts/views/pages/restaurants.js":
/*!************************************************!*\
  !*** ./src/scripts/views/pages/restaurants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_restaurants_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/restaurants-source */ "./src/scripts/data/restaurants-source.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");



const Restaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Find Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await _data_restaurants_source__WEBPACK_IMPORTED_MODULE_0__["default"].listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createRestoItemTemplate)(restaurant);
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restaurants);


/***/ }),

/***/ "./src/scripts/views/templates/template-creator.js":
/*!*********************************************************!*\
  !*** ./src/scripts/views/templates/template-creator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLikeButtonTemplate: () => (/* binding */ createLikeButtonTemplate),
/* harmony export */   createLikedButtonTemplate: () => (/* binding */ createLikedButtonTemplate),
/* harmony export */   createRestoDetailTemplate: () => (/* binding */ createRestoDetailTemplate),
/* harmony export */   createRestoItemTemplate: () => (/* binding */ createRestoItemTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/config */ "./src/scripts/globals/config.js");


const createRestoDetailTemplate = (restaurant) => `
  <h1 class="resto__name">${restaurant.name}</h1>
  <img class="resto__picture" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="resto__description">
    <h3>Descrirption</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto__menus">
    <div class="foods">
      <h3>Foods</h3>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="drinks">
      <h3>Drinks</h3>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="resto__reviews">
    <h3>Customer Reviews</h3>
    <div class="customer__review">
      ${restaurant.customerReviews.map((review) => `
        <div class="card">
          <p class="card__name">${review.name}</p>
          <p class="card__date">${review.date}</p>
          <p class="card__review">${review.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;
 
const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img loading="lazy" class="resto-item__header__poster" alt="${restaurants.name}"
           src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurants.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 


/***/ }),

/***/ "./src/public/images/hero-image_2.jpg":
/*!********************************************!*\
  !*** ./src/public/images/hero-image_2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bd6b63650298f334a08b.jpg";

/***/ }),

/***/ "./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDB: () => (/* binding */ deleteDB),
/* harmony export */   openDB: () => (/* binding */ openDB),
/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ reverseTransformCache),
/* harmony export */   i: () => (/* binding */ instanceOfAny),
/* harmony export */   r: () => (/* binding */ replaceTraps),
/* harmony export */   u: () => (/* binding */ unwrap),
/* harmony export */   w: () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Workbox: () => (/* binding */ v),
/* harmony export */   WorkboxEvent: () => (/* binding */ u),
/* harmony export */   messageSW: () => (/* binding */ n)
/* harmony export */ });
try{self["workbox:window:7.0.0"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:7.0.0"]&&_()}catch(n){}var i=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function o(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var u=function(n,t){this.type=n,Object.assign(this,t)};function a(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function c(){}var f={type:"SKIP_WAITING"};function s(n,t){if(!t)return n&&n.then?n.then(c):Promise.resolve()}var v=function(r){var e,c;function v(n,t){var e,c;return void 0===t&&(t={}),(e=r.call(this)||this).nn={},e.tn=0,e.rn=new i,e.en=new i,e.on=new i,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!o(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,i=r.state,o=r===e.vn,a={sw:r,isExternal:o,originalEvent:n};!o&&e.mn&&(a.isUpdate=!0),e.dispatchEvent(new u(i,a)),"installed"===i?e.wn=self.setTimeout((function(){"installed"===i&&t.waiting===r&&e.dispatchEvent(new u("waiting",a))}),200):"activating"===i&&(clearTimeout(e.wn),o||e.en.resolve(r))},e.dn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new u("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t)},e.gn=(c=function(n){var t=n.data,r=n.ports,i=n.source;return a(e.getSW(),(function(){e.an.has(i)&&e.dispatchEvent(new u("message",{data:t,originalEvent:n,ports:r,sw:i}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=t,navigator.serviceWorker.addEventListener("message",e.gn),e}c=r,(e=v).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c;var h,l,m,w=v.prototype;return w.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return s(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),a(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&o(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new u("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},w.update=function(){try{return this.fn?s(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},w.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},w.messageSW=function(t){try{return a(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},w.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,f)},w.pn=function(){var n=navigator.serviceWorker.controller;return n&&o(n.scriptURL,this.sn.toString())?n:void 0},w.bn=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return a(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},h=v,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&t(h.prototype,l),m&&t(h,m),v}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.Sn(n.type));!(t=r()).done;){(0,t.value)(n)}},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());
//# sourceMappingURL=workbox-window.prod.es5.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./src/styles/responsive.css");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/app */ "./src/scripts/views/app.js");
/* harmony import */ var _utils_sw_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/sw-register */ "./src/scripts/utils/sw-register.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_6__);








const app = new _views_app__WEBPACK_IMPORTED_MODULE_3__["default"]({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  (0,_utils_sw_register__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFB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U0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsMEJBQTBCLFVBQVUsSUFBSTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFJO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RjVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtB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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0E7QUFDSztBQUNKO0FBQ2U7QUFDMUI7QUFDaUM7QUFDcEQ7QUFDQSxnQkFBZ0Isa0RBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFVO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vc3JjL3N0eWxlcy9yZXNwb25zaXZlLmNzcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy9sYXp5c2l6ZXMvbGF6eXNpemVzLmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9wbHVnaW5zL3BhcmVudC1maXQvbHMucGFyZW50LWZpdC5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc3R5bGVzL3Jlc3BvbnNpdmUuY3NzPzdkNzUiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy9kYXRhL2Zhdm9yaXRlLXJlc3RvLWlkYi5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL2RhdGEvcmVzdGF1cmFudHMtc291cmNlLmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vc3JjL3NjcmlwdHMvZ2xvYmFscy9hcGktZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy9nbG9iYWxzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy9yb3V0ZXMvdXJsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL3V0aWxzL2RyYXdlci1pbml0aWF0b3IuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy91dGlscy9saWtlLWJ1dHRvbi1pbml0aWF0b3IuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy91dGlscy9zdy1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL3ZpZXdzL2FwcC5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2RldGFpbC5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2xpa2UuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9saWtlZC1yZXN0YXVyYW50cy9mYXZvcml0ZS1yZXN0YXVyYW50LXNlYXJjaC1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9saWtlZC1yZXN0YXVyYW50cy9mYXZvcml0ZS1yZXN0YXVyYW50LXNlYXJjaC12aWV3LmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvbGlrZWQtcmVzdGF1cmFudHMvZmF2b3JpdGUtcmVzdGF1cmFudC1zaG93LXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL3Jlc3RhdXJhbnRzLmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC93cmFwLWlkYi12YWx1ZS5qcyIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL25vZGVfbW9kdWxlcy93b3JrYm94LXdpbmRvdy9idWlsZC93b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHdhLWthdGFsb2ctcmVzdG9yYW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3B3YS1rYXRhbG9nLXJlc3RvcmFuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wd2Eta2F0YWxvZy1yZXN0b3Jhbi8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9wdWJsaWMvaW1hZ2VzL2hlcm8taW1hZ2VfMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgICAuYXBwLWJhciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA4cHggMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24gdWwgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbiB1bCBsaSBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3RhdXJhbnRzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3RhdXJhbnQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3RhdXJhbnQgLnJlc3RhdXJhbnRfX25hbWUge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxuXHJcbiAgICAucmVzdGF1cmFudCAucmVzdGF1cmFudF9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5yZXN0b19fcGljdHVyZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgIC5yZXN0YXVyYW50cyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAucmVzdGF1cmFudHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgLnJlc3RhdXJhbnRzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5oZXJvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLCtCQUErQjtJQUNuQzs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztBQUNKOztBQUVBO0lBQ0k7UUFDSSx5REFBMEQ7SUFDOUQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xcclxcbiAgICAuYXBwLWJhciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX21lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbiB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24gdWwgbGkge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcHAtYmFyIC5hcHAtYmFyX19uYXZpZ2F0aW9uIHVsIGxpIGEge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yZXN0YXVyYW50cyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlc3RhdXJhbnQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVzdGF1cmFudCAucmVzdGF1cmFudF9fbmFtZSB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVzdGF1cmFudCAucmVzdGF1cmFudF9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICAgLnJlc3RvX19waWN0dXJlIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAuYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcXHJcXG4gICAgLnJlc3RhdXJhbnRzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5yZXN0YXVyYW50cyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xcclxcbiAgICAucmVzdGF1cmFudHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmhlcm8ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvaW1hZ2VzL2hlcm8taW1hZ2VfMi5qcGcnKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9pbWFnZXMvaGVyby1pbWFnZV8yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qXHJcbiAgQXBwQmFyXHJcbiovXHJcblxyXG4uYXBwLWJhciB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjQ2MTk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uYXBwLWJhciAuYXBwLWJhcl9fbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFwcC1iYXIgLmFwcC1iYXJfX21lbnUgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRkZDQzFEO1xyXG59XHJcblxyXG4uYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcHAtYmFyIC5hcHAtYmFyX19icmFuZCBoMSB7XHJcbiAgICBjb2xvcjogI0ZGQ0MxRDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogLTE4MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCNDYxOTtcclxufVxyXG5cclxuLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24ub3BlbiB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbiB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZDQzFEO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBqdW1ib3Ryb24gKi9cclxuXHJcbi5oZXJvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVybzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGVyb19faW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhlcm9fX3RpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLmhlcm9fX3RhZ2xpbmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLypcclxuICBNYWluIENvbnRlbnRcclxuKi9cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMzJweDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnRfX2hlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLypcclxuICBSZXN0YXVyYW50c1xyXG4qL1xyXG5cclxuLnJlc3RhdXJhbnRzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTZweDtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG59XHJcblxyXG5cclxuLypcclxuICBSZXN0byBJdGVtXHJcbiovXHJcblxyXG4ucmVzdG8taXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5yZXN0by1pdGVtX19oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVzdG8taXRlbSAucmVzdG8taXRlbV9faGVhZGVyIC5yZXN0by1pdGVtX19oZWFkZXJfX3Bvc3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2hlYWRlciAucmVzdG8taXRlbV9faGVhZGVyX19yYXRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjQ2MTk7XHJcbiAgICBjb2xvcjogI0ZGQ0MxRDtcclxufVxyXG5cclxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2hlYWRlciAucmVzdG8taXRlbV9faGVhZGVyX19yYXRpbmcgLnJlc3RvLWl0ZW1fX2hlYWRlcl9fcmF0aW5nX19zY29yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2NvbnRlbnQgaDMge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG59XHJcblxyXG4ucmVzdG8taXRlbSAucmVzdG8taXRlbV9fY29udGVudCBoMyBhIHtcclxuICAgIGNvbG9yOiAjMEI0NjE5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2NvbnRlbnQgcCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAgIC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5cclxuLypcclxuICBSZXN0b1xyXG4qL1xyXG5cclxuLnJlc3RvIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxOHB4IDE2cHg7XHJcbn1cclxuXHJcbi5yZXN0b19fbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnJlc3RvX19waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN0byAucmVzdG9fX3BpY3R1cmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ucmVzdG8gLnJlc3RvX19pbmZvIGg0IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi5yZXN0b19fbWVudXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNWVtO1xyXG59XHJcblxyXG4vKiBDdXN0b21lciBSZXZpZXcgICovXHJcblxyXG4ucmVzdG9fX3Jldmlld3MgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY3VzdG9tZXJfX3JldmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZF9fbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmNhcmRfX2RhdGUge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkX19yZXZpZXcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLypcclxuICBMaWtlXHJcbiovXHJcblxyXG4ubGlrZSB7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI0NjE5O1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNraXAtbGluayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZjE3MjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5za2lwLWxpbms6Zm9jdXMge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCNDYxOTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkNDMUQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0NBRUM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsU0FBUztJQUNULGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sV0FBVztJQUNYLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlEQUEwRDtJQUMxRCwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZC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YztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgQXBwQmFyXFxyXFxuKi9cXHJcXG5cXHJcXG4uYXBwLWJhciB7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI0NjE5O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWJhciAuYXBwLWJhcl9fbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtYmFyIC5hcHAtYmFyX19tZW51IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogI0ZGQ0MxRDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIGgxIHtcXHJcXG4gICAgY29sb3I6ICNGRkNDMUQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtYmFyIC5hcHAtYmFyX19uYXZpZ2F0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxuICAgIGxlZnQ6IC0xODBweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI0NjE5O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbi5vcGVuIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24gdWwgbGkgYSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogI0ZGQ0MxRDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoganVtYm90cm9uICovXFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzODBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9wdWJsaWMvaW1hZ2VzL2hlcm8taW1hZ2VfMi5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybzo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19pbm5lciB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fdGl0bGUge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fdGFnbGluZSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICBNYWluIENvbnRlbnRcXHJcXG4qL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAuY29udGVudF9faGVhZGluZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgUmVzdGF1cmFudHNcXHJcXG4qL1xcclxcblxcclxcbi5yZXN0YXVyYW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIG1hcmdpbjogMzJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAgUmVzdG8gSXRlbVxcclxcbiovXFxyXFxuXFxyXFxuLnJlc3RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5yZXN0by1pdGVtX19oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5yZXN0by1pdGVtIC5yZXN0by1pdGVtX19oZWFkZXIgLnJlc3RvLWl0ZW1fX2hlYWRlcl9fcG9zdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZXN0by1pdGVtIC5yZXN0by1pdGVtX19oZWFkZXIgLnJlc3RvLWl0ZW1fX2hlYWRlcl9fcmF0aW5nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEI0NjE5O1xcclxcbiAgICBjb2xvcjogI0ZGQ0MxRDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2hlYWRlciAucmVzdG8taXRlbV9faGVhZGVyX19yYXRpbmcgLnJlc3RvLWl0ZW1fX2hlYWRlcl9fcmF0aW5nX19zY29yZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdG8taXRlbSAucmVzdG8taXRlbV9fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXN0by1pdGVtIC5yZXN0by1pdGVtX19jb250ZW50IGgzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdG8taXRlbSAucmVzdG8taXRlbV9fY29udGVudCBoMyBhIHtcXHJcXG4gICAgY29sb3I6ICMwQjQ2MTk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RvLWl0ZW0gLnJlc3RvLWl0ZW1fX2NvbnRlbnQgcCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xcclxcbiAgICAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xcclxcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAgUmVzdG9cXHJcXG4qL1xcclxcblxcclxcbi5yZXN0byB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdhcDogMThweCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdG9fX25hbWUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXN0b19fcGljdHVyZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RvIC5yZXN0b19fcGljdHVyZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdG8gLnJlc3RvX19pbmZvIGg0IHtcXHJcXG4gICAgbWFyZ2luOiA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RvX19tZW51cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDdXN0b21lciBSZXZpZXcgICovXFxyXFxuXFxyXFxuLnJlc3RvX19yZXZpZXdzIGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tZXJfX3JldmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDMycHggMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX25hbWUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9fZGF0ZSB7XFxyXFxuICAgIGNvbG9yOiAjODg4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19yZXZpZXcge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgTGlrZVxcclxcbiovXFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgICB3aWR0aDogNTVweDtcXHJcXG4gICAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCNDYxOTtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDE2cHg7XFxyXFxuICAgIHJpZ2h0OiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraXAtbGluayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtNDBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmMTcyMjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNraXAtbGluazpmb2N1cyB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCNDYxOTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjRkZDQzFEO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG5cdHZhciBsYXp5U2l6ZXMgPSBmYWN0b3J5KHdpbmRvdywgd2luZG93LmRvY3VtZW50LCBEYXRlKTtcblx0d2luZG93LmxhenlTaXplcyA9IGxhenlTaXplcztcblx0aWYodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBsYXp5U2l6ZXM7XG5cdH1cbn0odHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/XG4gICAgICB3aW5kb3cgOiB7fSwgXG4vKipcbiAqIGltcG9ydChcIi4vdHlwZXMvZ2xvYmFsXCIpXG4gKiBAdHlwZWRlZiB7IGltcG9ydChcIi4vdHlwZXMvbGF6eXNpemVzLWNvbmZpZ1wiKS5MYXp5U2l6ZXNDb25maWdQYXJ0aWFsIH0gTGF6eVNpemVzQ29uZmlnUGFydGlhbFxuICovXG5mdW5jdGlvbiBsKHdpbmRvdywgZG9jdW1lbnQsIERhdGUpIHsgLy8gUGFzcyBpbiB0aGUgd2luZG93IERhdGUgZnVuY3Rpb24gYWxzbyBmb3IgU1NSIGJlY2F1c2UgdGhlIERhdGUgY2xhc3MgY2FuIGJlIGxvc3Rcblx0J3VzZSBzdHJpY3QnO1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXG5cdHZhciBsYXp5c2l6ZXMsXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUgeyBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsIH1cblx0XHQgKi9cblx0XHRsYXp5U2l6ZXNDZmc7XG5cblx0KGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHByb3A7XG5cblx0XHR2YXIgbGF6eVNpemVzRGVmYXVsdHMgPSB7XG5cdFx0XHRsYXp5Q2xhc3M6ICdsYXp5bG9hZCcsXG5cdFx0XHRsb2FkZWRDbGFzczogJ2xhenlsb2FkZWQnLFxuXHRcdFx0bG9hZGluZ0NsYXNzOiAnbGF6eWxvYWRpbmcnLFxuXHRcdFx0cHJlbG9hZENsYXNzOiAnbGF6eXByZWxvYWQnLFxuXHRcdFx0ZXJyb3JDbGFzczogJ2xhenllcnJvcicsXG5cdFx0XHQvL3N0cmljdENsYXNzOiAnbGF6eXN0cmljdCcsXG5cdFx0XHRhdXRvc2l6ZXNDbGFzczogJ2xhenlhdXRvc2l6ZXMnLFxuXHRcdFx0ZmFzdExvYWRlZENsYXNzOiAnbHMtaXMtY2FjaGVkJyxcblx0XHRcdGlmcmFtZUxvYWRNb2RlOiAwLFxuXHRcdFx0c3JjQXR0cjogJ2RhdGEtc3JjJyxcblx0XHRcdHNyY3NldEF0dHI6ICdkYXRhLXNyY3NldCcsXG5cdFx0XHRzaXplc0F0dHI6ICdkYXRhLXNpemVzJyxcblx0XHRcdC8vcHJlbG9hZEFmdGVyTG9hZDogZmFsc2UsXG5cdFx0XHRtaW5TaXplOiA0MCxcblx0XHRcdGN1c3RvbU1lZGlhOiB7fSxcblx0XHRcdGluaXQ6IHRydWUsXG5cdFx0XHRleHBGYWN0b3I6IDEuNSxcblx0XHRcdGhGYWM6IDAuOCxcblx0XHRcdGxvYWRNb2RlOiAyLFxuXHRcdFx0bG9hZEhpZGRlbjogdHJ1ZSxcblx0XHRcdHJpY1RpbWVvdXQ6IDAsXG5cdFx0XHR0aHJvdHRsZURlbGF5OiAxMjUsXG5cdFx0fTtcblxuXHRcdGxhenlTaXplc0NmZyA9IHdpbmRvdy5sYXp5U2l6ZXNDb25maWcgfHwgd2luZG93LmxhenlzaXplc0NvbmZpZyB8fCB7fTtcblxuXHRcdGZvcihwcm9wIGluIGxhenlTaXplc0RlZmF1bHRzKXtcblx0XHRcdGlmKCEocHJvcCBpbiBsYXp5U2l6ZXNDZmcpKXtcblx0XHRcdFx0bGF6eVNpemVzQ2ZnW3Byb3BdID0gbGF6eVNpemVzRGVmYXVsdHNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSgpO1xuXG5cdGlmICghZG9jdW1lbnQgfHwgIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCkge30sXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlIHsgTGF6eVNpemVzQ29uZmlnUGFydGlhbCB9XG5cdFx0XHQgKi9cblx0XHRcdGNmZzogbGF6eVNpemVzQ2ZnLFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAdHlwZSB7IHRydWUgfVxuXHRcdFx0ICovXG5cdFx0XHRub1N1cHBvcnQ6IHRydWUsXG5cdFx0fTtcblx0fVxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cdHZhciBzdXBwb3J0UGljdHVyZSA9IHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XG5cblx0dmFyIF9hZGRFdmVudExpc3RlbmVyID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuXG5cdHZhciBfZ2V0QXR0cmlidXRlID0gJ2dldEF0dHJpYnV0ZSc7XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0byBiaW5kIHRvIHdpbmRvdyBiZWNhdXNlICd0aGlzJyBiZWNvbWVzIG51bGwgZHVyaW5nIFNTUlxuXHQgKiBidWlsZHMuXG5cdCAqL1xuXHR2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHdpbmRvd1tfYWRkRXZlbnRMaXN0ZW5lcl0uYmluZCh3aW5kb3cpO1xuXG5cdHZhciBzZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdElkbGVDYWxsYmFjayA9IHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXG5cdHZhciByZWdQaWN0dXJlID0gL15waWN0dXJlJC9pO1xuXG5cdHZhciBsb2FkRXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJywgJ2xhenlpbmNsdWRlZCcsICdfbGF6eWxvYWRlZCddO1xuXG5cdHZhciByZWdDbGFzc0NhY2hlID0ge307XG5cblx0dmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZSB7RWxlbWVudH1cblx0ICogQHBhcmFtIGNscyB7c3RyaW5nfVxuXHQgKi9cblx0dmFyIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZighcmVnQ2xhc3NDYWNoZVtjbHNdKXtcblx0XHRcdHJlZ0NsYXNzQ2FjaGVbY2xzXSA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ0NsYXNzQ2FjaGVbY2xzXS50ZXN0KGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykgJiYgcmVnQ2xhc3NDYWNoZVtjbHNdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gY2xzIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmICghaGFzQ2xhc3MoZWxlLCBjbHMpKXtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykudHJpbSgpICsgJyAnICsgY2xzKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGUge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSBjbHMge3N0cmluZ31cblx0ICovXG5cdHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0dmFyIHJlZztcblx0XHRpZiAoKHJlZyA9IGhhc0NsYXNzKGVsZSxjbHMpKSkge1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS5yZXBsYWNlKHJlZywgJyAnKSk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBhZGRSZW1vdmVMb2FkRXZlbnRzID0gZnVuY3Rpb24oZG9tLCBmbiwgYWRkKXtcblx0XHR2YXIgYWN0aW9uID0gYWRkID8gX2FkZEV2ZW50TGlzdGVuZXIgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cdFx0aWYoYWRkKXtcblx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZG9tLCBmbik7XG5cdFx0fVxuXHRcdGxvYWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldnQpe1xuXHRcdFx0ZG9tW2FjdGlvbl0oZXZ0LCBmbik7XG5cdFx0fSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGVtIHsgRWxlbWVudCB9XG5cdCAqIEBwYXJhbSBuYW1lIHsgc3RyaW5nIH1cblx0ICogQHBhcmFtIGRldGFpbCB7IGFueSB9XG5cdCAqIEBwYXJhbSBub0J1YmJsZXMgeyBib29sZWFuIH1cblx0ICogQHBhcmFtIG5vQ2FuY2VsYWJsZSB7IGJvb2xlYW4gfVxuXHQgKiBAcmV0dXJucyB7IEN1c3RvbUV2ZW50IH1cblx0ICovXG5cdHZhciB0cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbihlbGVtLCBuYW1lLCBkZXRhaWwsIG5vQnViYmxlcywgbm9DYW5jZWxhYmxlKXtcblx0XHR2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblxuXHRcdGlmKCFkZXRhaWwpe1xuXHRcdFx0ZGV0YWlsID0ge307XG5cdFx0fVxuXG5cdFx0ZGV0YWlsLmluc3RhbmNlID0gbGF6eXNpemVzO1xuXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KG5hbWUsICFub0J1YmJsZXMsICFub0NhbmNlbGFibGUpO1xuXG5cdFx0ZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuXG5cdFx0ZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cblx0dmFyIHVwZGF0ZVBvbHlmaWxsID0gZnVuY3Rpb24gKGVsLCBmdWxsKXtcblx0XHR2YXIgcG9seWZpbGw7XG5cdFx0aWYoICFzdXBwb3J0UGljdHVyZSAmJiAoIHBvbHlmaWxsID0gKHdpbmRvdy5waWN0dXJlZmlsbCB8fCBsYXp5U2l6ZXNDZmcucGYpICkgKXtcblx0XHRcdGlmKGZ1bGwgJiYgZnVsbC5zcmMgJiYgIWVsW19nZXRBdHRyaWJ1dGVdKCdzcmNzZXQnKSl7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnc3Jjc2V0JywgZnVsbC5zcmMpO1xuXHRcdFx0fVxuXHRcdFx0cG9seWZpbGwoe3JlZXZhbHVhdGU6IHRydWUsIGVsZW1lbnRzOiBbZWxdfSk7XG5cdFx0fSBlbHNlIGlmKGZ1bGwgJiYgZnVsbC5zcmMpe1xuXHRcdFx0ZWwuc3JjID0gZnVsbC5zcmM7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBnZXRDU1MgPSBmdW5jdGlvbiAoZWxlbSwgc3R5bGUpe1xuXHRcdHJldHVybiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKSB8fCB7fSlbc3R5bGVdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gZWxlbSB7IEVsZW1lbnQgfVxuXHQgKiBAcGFyYW0gcGFyZW50IHsgRWxlbWVudCB9XG5cdCAqIEBwYXJhbSBbd2lkdGhdIHtudW1iZXJ9XG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHR2YXIgZ2V0V2lkdGggPSBmdW5jdGlvbihlbGVtLCBwYXJlbnQsIHdpZHRoKXtcblx0XHR3aWR0aCA9IHdpZHRoIHx8IGVsZW0ub2Zmc2V0V2lkdGg7XG5cblx0XHR3aGlsZSh3aWR0aCA8IGxhenlTaXplc0NmZy5taW5TaXplICYmIHBhcmVudCAmJiAhZWxlbS5fbGF6eXNpemVzV2lkdGgpe1xuXHRcdFx0d2lkdGggPSAgcGFyZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9O1xuXG5cdHZhciByQUYgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgcnVubmluZywgd2FpdGluZztcblx0XHR2YXIgZmlyc3RGbnMgPSBbXTtcblx0XHR2YXIgc2Vjb25kRm5zID0gW107XG5cdFx0dmFyIGZucyA9IGZpcnN0Rm5zO1xuXG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgcnVuRm5zID0gZm5zO1xuXG5cdFx0XHRmbnMgPSBmaXJzdEZucy5sZW5ndGggPyBzZWNvbmRGbnMgOiBmaXJzdEZucztcblxuXHRcdFx0cnVubmluZyA9IHRydWU7XG5cdFx0XHR3YWl0aW5nID0gZmFsc2U7XG5cblx0XHRcdHdoaWxlKHJ1bkZucy5sZW5ndGgpe1xuXHRcdFx0XHRydW5GbnMuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHZhciByYWZCYXRjaCA9IGZ1bmN0aW9uKGZuLCBxdWV1ZSl7XG5cdFx0XHRpZihydW5uaW5nICYmICFxdWV1ZSl7XG5cdFx0XHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmbnMucHVzaChmbik7XG5cblx0XHRcdFx0aWYoIXdhaXRpbmcpe1xuXHRcdFx0XHRcdHdhaXRpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdChkb2N1bWVudC5oaWRkZW4gPyBzZXRUaW1lb3V0IDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKShydW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJhZkJhdGNoLl9sc0ZsdXNoID0gcnVuO1xuXG5cdFx0cmV0dXJuIHJhZkJhdGNoO1xuXHR9KSgpO1xuXG5cdHZhciByQUZJdCA9IGZ1bmN0aW9uKGZuLCBzaW1wbGUpe1xuXHRcdHJldHVybiBzaW1wbGUgP1xuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJBRihmbik7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHRcdHJBRihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQ7XG5cdH07XG5cblx0dmFyIHRocm90dGxlID0gZnVuY3Rpb24oZm4pe1xuXHRcdHZhciBydW5uaW5nO1xuXHRcdHZhciBsYXN0VGltZSA9IDA7XG5cdFx0dmFyIGdEZWxheSA9IGxhenlTaXplc0NmZy50aHJvdHRsZURlbGF5O1xuXHRcdHZhciBySUNUaW1lb3V0ID0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQ7XG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRsYXN0VGltZSA9IERhdGUubm93KCk7XG5cdFx0XHRmbigpO1xuXHRcdH07XG5cdFx0dmFyIGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgcklDVGltZW91dCA+IDQ5ID9cblx0XHRcdGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJlcXVlc3RJZGxlQ2FsbGJhY2socnVuLCB7dGltZW91dDogcklDVGltZW91dH0pO1xuXG5cdFx0XHRcdGlmKHJJQ1RpbWVvdXQgIT09IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0KXtcblx0XHRcdFx0XHRySUNUaW1lb3V0ID0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gOlxuXHRcdFx0ckFGSXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0c2V0VGltZW91dChydW4pO1xuXHRcdFx0fSwgdHJ1ZSlcblx0XHQ7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oaXNQcmlvcml0eSl7XG5cdFx0XHR2YXIgZGVsYXk7XG5cblx0XHRcdGlmKChpc1ByaW9yaXR5ID0gaXNQcmlvcml0eSA9PT0gdHJ1ZSkpe1xuXHRcdFx0XHRySUNUaW1lb3V0ID0gMzM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHJ1bm5pbmcpe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSAgdHJ1ZTtcblxuXHRcdFx0ZGVsYXkgPSBnRGVsYXkgLSAoRGF0ZS5ub3coKSAtIGxhc3RUaW1lKTtcblxuXHRcdFx0aWYoZGVsYXkgPCAwKXtcblx0XHRcdFx0ZGVsYXkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihpc1ByaW9yaXR5IHx8IGRlbGF5IDwgOSl7XG5cdFx0XHRcdGlkbGVDYWxsYmFjaygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0VGltZW91dChpZGxlQ2FsbGJhY2ssIGRlbGF5KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdC8vYmFzZWQgb24gaHR0cDovL21vZGVybmphdmFzY3JpcHQuYmxvZ3Nwb3QuZGUvMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHR2YXIgZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jKSB7XG5cdFx0dmFyIHRpbWVvdXQsIHRpbWVzdGFtcDtcblx0XHR2YXIgd2FpdCA9IDk5O1xuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRmdW5jKCk7XG5cdFx0fTtcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0aWYgKGxhc3QgPCB3YWl0KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdChyZXF1ZXN0SWRsZUNhbGxiYWNrIHx8IHJ1bikocnVuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdHZhciBsb2FkZXIgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJlbG9hZEVsZW1zLCBpc0NvbXBsZXRlZCwgcmVzZXRQcmVsb2FkaW5nVGltZXIsIGxvYWRNb2RlLCBzdGFydGVkO1xuXG5cdFx0dmFyIGVMdlcsIGVsdkgsIGVMdG9wLCBlTGxlZnQsIGVMcmlnaHQsIGVMYm90dG9tLCBpc0JvZHlIaWRkZW47XG5cblx0XHR2YXIgcmVnSW1nID0gL15pbWckL2k7XG5cdFx0dmFyIHJlZ0lmcmFtZSA9IC9eaWZyYW1lJC9pO1xuXG5cdFx0dmFyIHN1cHBvcnRTY3JvbGwgPSAoJ29uc2Nyb2xsJyBpbiB3aW5kb3cpICYmICEoLyhnbGV8aW5nKWJvdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG5cblx0XHR2YXIgc2hyaW5rRXhwYW5kID0gMDtcblx0XHR2YXIgY3VycmVudEV4cGFuZCA9IDA7XG5cblx0XHR2YXIgaXNMb2FkaW5nID0gMDtcblx0XHR2YXIgbG93UnVucyA9IC0xO1xuXG5cdFx0dmFyIHJlc2V0UHJlbG9hZGluZyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0aXNMb2FkaW5nLS07XG5cdFx0XHRpZighZSB8fCBpc0xvYWRpbmcgPCAwIHx8ICFlLnRhcmdldCl7XG5cdFx0XHRcdGlzTG9hZGluZyA9IDA7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0aWYgKGlzQm9keUhpZGRlbiA9PSBudWxsKSB7XG5cdFx0XHRcdGlzQm9keUhpZGRlbiA9IGdldENTUyhkb2N1bWVudC5ib2R5LCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXNCb2R5SGlkZGVuIHx8ICEoZ2V0Q1NTKGVsZW0ucGFyZW50Tm9kZSwgJ3Zpc2liaWxpdHknKSA9PSAnaGlkZGVuJyAmJiBnZXRDU1MoZWxlbSwgJ3Zpc2liaWxpdHknKSA9PSAnaGlkZGVuJyk7XG5cdFx0fTtcblxuXHRcdHZhciBpc05lc3RlZFZpc2libGUgPSBmdW5jdGlvbihlbGVtLCBlbGVtRXhwYW5kKXtcblx0XHRcdHZhciBvdXRlclJlY3Q7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbTtcblx0XHRcdHZhciB2aXNpYmxlID0gaXNWaXNpYmxlKGVsZW0pO1xuXG5cdFx0XHRlTHRvcCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxib3R0b20gKz0gZWxlbUV4cGFuZDtcblx0XHRcdGVMbGVmdCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxyaWdodCArPSBlbGVtRXhwYW5kO1xuXG5cdFx0XHR3aGlsZSh2aXNpYmxlICYmIChwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50KSAmJiBwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJiBwYXJlbnQgIT0gZG9jRWxlbSl7XG5cdFx0XHRcdHZpc2libGUgPSAoKGdldENTUyhwYXJlbnQsICdvcGFjaXR5JykgfHwgMSkgPiAwKTtcblxuXHRcdFx0XHRpZih2aXNpYmxlICYmIGdldENTUyhwYXJlbnQsICdvdmVyZmxvdycpICE9ICd2aXNpYmxlJyl7XG5cdFx0XHRcdFx0b3V0ZXJSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHZpc2libGUgPSBlTHJpZ2h0ID4gb3V0ZXJSZWN0LmxlZnQgJiZcblx0XHRcdFx0XHRcdGVMbGVmdCA8IG91dGVyUmVjdC5yaWdodCAmJlxuXHRcdFx0XHRcdFx0ZUxib3R0b20gPiBvdXRlclJlY3QudG9wIC0gMSAmJlxuXHRcdFx0XHRcdFx0ZUx0b3AgPCBvdXRlclJlY3QuYm90dG9tICsgMVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmlzaWJsZTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoZWNrRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlTGxlbiwgaSwgcmVjdCwgYXV0b0xvYWRFbGVtLCBsb2FkZWRTb21ldGhpbmcsIGVsZW1FeHBhbmQsIGVsZW1OZWdhdGl2ZUV4cGFuZCwgZWxlbUV4cGFuZFZhbCxcblx0XHRcdFx0YmVmb3JlRXhwYW5kVmFsLCBkZWZhdWx0RXhwYW5kLCBwcmVsb2FkRXhwYW5kLCBoRmFjO1xuXHRcdFx0dmFyIGxhenlsb2FkRWxlbXMgPSBsYXp5c2l6ZXMuZWxlbWVudHM7XG5cblx0XHRcdGlmKChsb2FkTW9kZSA9IGxhenlTaXplc0NmZy5sb2FkTW9kZSkgJiYgaXNMb2FkaW5nIDwgOCAmJiAoZUxsZW4gPSBsYXp5bG9hZEVsZW1zLmxlbmd0aCkpe1xuXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRcdGxvd1J1bnMrKztcblxuXHRcdFx0XHRmb3IoOyBpIDwgZUxsZW47IGkrKyl7XG5cblx0XHRcdFx0XHRpZighbGF6eWxvYWRFbGVtc1tpXSB8fCBsYXp5bG9hZEVsZW1zW2ldLl9sYXp5UmFjZSl7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIXN1cHBvcnRTY3JvbGwgfHwgKGxhenlzaXplcy5wcmVtYXR1cmVVbnZlaWwgJiYgbGF6eXNpemVzLnByZW1hdHVyZVVudmVpbChsYXp5bG9hZEVsZW1zW2ldKSkpe3VudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIShlbGVtRXhwYW5kVmFsID0gbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1leHBhbmQnKSkgfHwgIShlbGVtRXhwYW5kID0gZWxlbUV4cGFuZFZhbCAqIDEpKXtcblx0XHRcdFx0XHRcdGVsZW1FeHBhbmQgPSBjdXJyZW50RXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghZGVmYXVsdEV4cGFuZCkge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdEV4cGFuZCA9ICghbGF6eVNpemVzQ2ZnLmV4cGFuZCB8fCBsYXp5U2l6ZXNDZmcuZXhwYW5kIDwgMSkgP1xuXHRcdFx0XHRcdFx0XHRkb2NFbGVtLmNsaWVudEhlaWdodCA+IDUwMCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID4gNTAwID8gNTAwIDogMzcwIDpcblx0XHRcdFx0XHRcdFx0bGF6eVNpemVzQ2ZnLmV4cGFuZDtcblxuXHRcdFx0XHRcdFx0bGF6eXNpemVzLl9kZWZFeCA9IGRlZmF1bHRFeHBhbmQ7XG5cblx0XHRcdFx0XHRcdHByZWxvYWRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kICogbGF6eVNpemVzQ2ZnLmV4cEZhY3Rvcjtcblx0XHRcdFx0XHRcdGhGYWMgPSBsYXp5U2l6ZXNDZmcuaEZhYztcblx0XHRcdFx0XHRcdGlzQm9keUhpZGRlbiA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGlmKGN1cnJlbnRFeHBhbmQgPCBwcmVsb2FkRXhwYW5kICYmIGlzTG9hZGluZyA8IDEgJiYgbG93UnVucyA+IDIgJiYgbG9hZE1vZGUgPiAyICYmICFkb2N1bWVudC5oaWRkZW4pe1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gcHJlbG9hZEV4cGFuZDtcblx0XHRcdFx0XHRcdFx0bG93UnVucyA9IDA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYobG9hZE1vZGUgPiAxICYmIGxvd1J1bnMgPiAxICYmIGlzTG9hZGluZyA8IDYpe1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gZGVmYXVsdEV4cGFuZDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBzaHJpbmtFeHBhbmQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoYmVmb3JlRXhwYW5kVmFsICE9PSBlbGVtRXhwYW5kKXtcblx0XHRcdFx0XHRcdGVMdlcgPSBpbm5lcldpZHRoICsgKGVsZW1FeHBhbmQgKiBoRmFjKTtcblx0XHRcdFx0XHRcdGVsdkggPSBpbm5lckhlaWdodCArIGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0XHRlbGVtTmVnYXRpdmVFeHBhbmQgPSBlbGVtRXhwYW5kICogLTE7XG5cdFx0XHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwgPSBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlY3QgPSBsYXp5bG9hZEVsZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdFx0aWYgKChlTGJvdHRvbSA9IHJlY3QuYm90dG9tKSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgJiZcblx0XHRcdFx0XHRcdChlTHRvcCA9IHJlY3QudG9wKSA8PSBlbHZIICYmXG5cdFx0XHRcdFx0XHQoZUxyaWdodCA9IHJlY3QucmlnaHQpID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAqIGhGYWMgJiZcblx0XHRcdFx0XHRcdChlTGxlZnQgPSByZWN0LmxlZnQpIDw9IGVMdlcgJiZcblx0XHRcdFx0XHRcdChlTGJvdHRvbSB8fCBlTHJpZ2h0IHx8IGVMbGVmdCB8fCBlTHRvcCkgJiZcblx0XHRcdFx0XHRcdChsYXp5U2l6ZXNDZmcubG9hZEhpZGRlbiB8fCBpc1Zpc2libGUobGF6eWxvYWRFbGVtc1tpXSkpICYmXG5cdFx0XHRcdFx0XHQoKGlzQ29tcGxldGVkICYmIGlzTG9hZGluZyA8IDMgJiYgIWVsZW1FeHBhbmRWYWwgJiYgKGxvYWRNb2RlIDwgMyB8fCBsb3dSdW5zIDwgNCkpIHx8IGlzTmVzdGVkVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldLCBlbGVtRXhwYW5kKSkpe1xuXHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtcblx0XHRcdFx0XHRcdGxvYWRlZFNvbWV0aGluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZihpc0xvYWRpbmcgPiA5KXticmVhazt9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKCFsb2FkZWRTb21ldGhpbmcgJiYgaXNDb21wbGV0ZWQgJiYgIWF1dG9Mb2FkRWxlbSAmJlxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nIDwgNCAmJiBsb3dSdW5zIDwgNCAmJiBsb2FkTW9kZSA+IDIgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eVNpemVzQ2ZnLnByZWxvYWRBZnRlckxvYWQpICYmXG5cdFx0XHRcdFx0XHQocHJlbG9hZEVsZW1zWzBdIHx8ICghZWxlbUV4cGFuZFZhbCAmJiAoKGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSB8fCBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zaXplc0F0dHIpICE9ICdhdXRvJykpKSl7XG5cdFx0XHRcdFx0XHRhdXRvTG9hZEVsZW0gPSBwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eWxvYWRFbGVtc1tpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihhdXRvTG9hZEVsZW0gJiYgIWxvYWRlZFNvbWV0aGluZyl7XG5cdFx0XHRcdFx0dW52ZWlsRWxlbWVudChhdXRvTG9hZEVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB0aHJvdHRsZWRDaGVja0VsZW1lbnRzID0gdGhyb3R0bGUoY2hlY2tFbGVtZW50cyk7XG5cblx0XHR2YXIgc3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgZWxlbSA9IGUudGFyZ2V0O1xuXG5cdFx0XHRpZiAoZWxlbS5fbGF6eUNhY2hlKSB7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5Q2FjaGU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmVzZXRQcmVsb2FkaW5nKGUpO1xuXHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRlZENsYXNzKTtcblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuXHRcdFx0dHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5bG9hZGVkJyk7XG5cdFx0fTtcblx0XHR2YXIgcmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MgPSByQUZJdChzd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuXHRcdHZhciByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzKHt0YXJnZXQ6IGUudGFyZ2V0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBjaGFuZ2VJZnJhbWVTcmMgPSBmdW5jdGlvbihlbGVtLCBzcmMpe1xuXHRcdFx0dmFyIGxvYWRNb2RlID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZC1tb2RlJykgfHwgbGF6eVNpemVzQ2ZnLmlmcmFtZUxvYWRNb2RlO1xuXG5cdFx0XHQvLyBsb2FkTW9kZSBjYW4gYmUgYWxzbyBhIHN0cmluZyFcblx0XHRcdGlmIChsb2FkTW9kZSA9PSAwKSB7XG5cdFx0XHRcdGVsZW0uY29udGVudFdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHNyYyk7XG5cdFx0XHR9IGVsc2UgaWYgKGxvYWRNb2RlID09IDEpIHtcblx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBoYW5kbGVTb3VyY2VzID0gZnVuY3Rpb24oc291cmNlKXtcblx0XHRcdHZhciBjdXN0b21NZWRpYTtcblxuXHRcdFx0dmFyIHNvdXJjZVNyY3NldCA9IHNvdXJjZVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cblx0XHRcdGlmKCAoY3VzdG9tTWVkaWEgPSBsYXp5U2l6ZXNDZmcuY3VzdG9tTWVkaWFbc291cmNlW19nZXRBdHRyaWJ1dGVdKCdkYXRhLW1lZGlhJykgfHwgc291cmNlW19nZXRBdHRyaWJ1dGVdKCdtZWRpYScpXSkgKXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjdXN0b21NZWRpYSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNvdXJjZVNyY3NldCl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNvdXJjZVNyY3NldCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBsYXp5VW52ZWlsID0gckFGSXQoZnVuY3Rpb24gKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpe1xuXHRcdFx0dmFyIHNyYywgc3Jjc2V0LCBwYXJlbnQsIGlzUGljdHVyZSwgZXZlbnQsIGZpcmVzTG9hZDtcblxuXHRcdFx0aWYoIShldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXVudmVpbCcsIGRldGFpbCkpLmRlZmF1bHRQcmV2ZW50ZWQpe1xuXG5cdFx0XHRcdGlmKHNpemVzKXtcblx0XHRcdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgc2l6ZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNyY3NldCA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXHRcdFx0XHRzcmMgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNBdHRyKTtcblxuXHRcdFx0XHRpZihpc0ltZykge1xuXHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpc1BpY3R1cmUgPSBwYXJlbnQgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmaXJlc0xvYWQgPSBkZXRhaWwuZmlyZXNMb2FkIHx8ICgoJ3NyYycgaW4gZWxlbSkgJiYgKHNyY3NldCB8fCBzcmMgfHwgaXNQaWN0dXJlKSk7XG5cblx0XHRcdFx0ZXZlbnQgPSB7dGFyZ2V0OiBlbGVtfTtcblxuXHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblxuXHRcdFx0XHRpZihmaXJlc0xvYWQpe1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChyZXNldFByZWxvYWRpbmdUaW1lcik7XG5cdFx0XHRcdFx0cmVzZXRQcmVsb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KHJlc2V0UHJlbG9hZGluZywgMjUwMCk7XG5cdFx0XHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRmb3JFYWNoLmNhbGwocGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKSwgaGFuZGxlU291cmNlcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihzcmNzZXQpe1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXQpO1xuXHRcdFx0XHR9IGVsc2UgaWYoc3JjICYmICFpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGlmKHJlZ0lmcmFtZS50ZXN0KGVsZW0ubm9kZU5hbWUpKXtcblx0XHRcdFx0XHRcdGNoYW5nZUlmcmFtZVNyYyhlbGVtLCBzcmMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc0ltZyAmJiAoc3Jjc2V0IHx8IGlzUGljdHVyZSkpe1xuXHRcdFx0XHRcdHVwZGF0ZVBvbHlmaWxsKGVsZW0sIHtzcmM6IHNyY30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGVsZW0uX2xhenlSYWNlKXtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlSYWNlO1xuXHRcdFx0fVxuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxhenlDbGFzcyk7XG5cblx0XHRcdHJBRihmdW5jdGlvbigpe1xuXHRcdFx0XHQvLyBQYXJ0IG9mIHRoaXMgY2FuIGJlIHJlbW92ZWQgYXMgc29vbiBhcyB0aGlzIGZpeCBpcyBvbGRlcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzczMSAoMjAxNSlcblx0XHRcdFx0dmFyIGlzTG9hZGVkID0gZWxlbS5jb21wbGV0ZSAmJiBlbGVtLm5hdHVyYWxXaWR0aCA+IDE7XG5cblx0XHRcdFx0aWYoICFmaXJlc0xvYWQgfHwgaXNMb2FkZWQpe1xuXHRcdFx0XHRcdGlmIChpc0xvYWRlZCkge1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmZhc3RMb2FkZWRDbGFzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN3aXRjaExvYWRpbmdDbGFzcyhldmVudCk7XG5cdFx0XHRcdFx0ZWxlbS5fbGF6eUNhY2hlID0gdHJ1ZTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRpZiAoJ19sYXp5Q2FjaGUnIGluIGVsZW0pIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlDYWNoZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWxlbS5sb2FkaW5nID09ICdsYXp5Jykge1xuXHRcdFx0XHRcdGlzTG9hZGluZy0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIGVsZW0geyBFbGVtZW50IH1cblx0XHQgKi9cblx0XHR2YXIgdW52ZWlsRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtKXtcblx0XHRcdGlmIChlbGVtLl9sYXp5UmFjZSkge3JldHVybjt9XG5cdFx0XHR2YXIgZGV0YWlsO1xuXG5cdFx0XHR2YXIgaXNJbWcgPSByZWdJbWcudGVzdChlbGVtLm5vZGVOYW1lKTtcblxuXHRcdFx0Ly9hbGxvdyB1c2luZyBzaXplcz1cImF1dG9cIiwgYnV0IGRvbid0IHVzZS4gaXQncyBpbnZhbGlkLiBVc2UgZGF0YS1zaXplcz1cImF1dG9cIiBvciBhIHZhbGlkIHZhbHVlIGZvciBzaXplcyBpbnN0ZWFkIChpLmUuOiBzaXplcz1cIjgwdndcIilcblx0XHRcdHZhciBzaXplcyA9IGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zaXplc0F0dHIpIHx8IGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NpemVzJykpO1xuXHRcdFx0dmFyIGlzQXV0byA9IHNpemVzID09ICdhdXRvJztcblxuXHRcdFx0aWYoIChpc0F1dG8gfHwgIWlzQ29tcGxldGVkKSAmJiBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXSgnc3JjJykgfHwgZWxlbS5zcmNzZXQpICYmICFlbGVtLmNvbXBsZXRlICYmICFoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuZXJyb3JDbGFzcykgJiYgaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxhenlDbGFzcykpe3JldHVybjt9XG5cblx0XHRcdGRldGFpbCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eXVudmVpbHJlYWQnKS5kZXRhaWw7XG5cblx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdCBhdXRvU2l6ZXIudXBkYXRlRWxlbShlbGVtLCB0cnVlLCBlbGVtLm9mZnNldFdpZHRoKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5fbGF6eVJhY2UgPSB0cnVlO1xuXHRcdFx0aXNMb2FkaW5nKys7XG5cblx0XHRcdGxhenlVbnZlaWwoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyk7XG5cdFx0fTtcblxuXHRcdHZhciBhZnRlclNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdH0pO1xuXG5cdFx0dmFyIGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPT0gMyl7XG5cdFx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDI7XG5cdFx0XHR9XG5cdFx0XHRhZnRlclNjcm9sbCgpO1xuXHRcdH07XG5cblx0XHR2YXIgb25sb2FkID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGlzQ29tcGxldGVkKXtyZXR1cm47fVxuXHRcdFx0aWYoRGF0ZS5ub3coKSAtIHN0YXJ0ZWQgPCA5OTkpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgOTk5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlzQ29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMztcblxuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIsIHRydWUpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0c3RhcnRlZCA9IERhdGUubm93KCk7XG5cblx0XHRcdFx0bGF6eXNpemVzLmVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcblx0XHRcdFx0cHJlbG9hZEVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzICsgJyAnICsgbGF6eVNpemVzQ2ZnLnByZWxvYWRDbGFzcyk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGlmIChlLnBlcnNpc3RlZCkge1xuXHRcdFx0XHRcdFx0dmFyIGxvYWRpbmdFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cblx0XHRcdFx0XHRcdGlmIChsb2FkaW5nRWxlbWVudHMubGVuZ3RoICYmIGxvYWRpbmdFbGVtZW50cy5mb3JFYWNoKSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZ0VsZW1lbnRzLmZvckVhY2goIGZ1bmN0aW9uIChpbWcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpbWcuY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChpbWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKXtcblx0XHRcdFx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyApLm9ic2VydmUoIGRvY0VsZW0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWV9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTU5vZGVJbnNlcnRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01BdHRyTW9kaWZpZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0XHRzZXRJbnRlcnZhbCh0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCA5OTkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdC8vLCAnZnVsbHNjcmVlbmNoYW5nZSdcblx0XHRcdFx0Wydmb2N1cycsICdtb3VzZW92ZXInLCAnY2xpY2snLCAnbG9hZCcsICd0cmFuc2l0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCddLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKG5hbWUsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZigoL2QkfF5jLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSl7XG5cdFx0XHRcdFx0b25sb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Db250ZW50TG9hZGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDIwMDAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGxhenlzaXplcy5lbGVtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHRcdGNoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0XHRyQUYuX2xzRmx1c2goKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLFxuXHRcdFx0dW52ZWlsOiB1bnZlaWxFbGVtZW50LFxuXHRcdFx0X2FMU0w6IGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lcixcblx0XHR9O1xuXHR9KSgpO1xuXG5cblx0dmFyIGF1dG9TaXplciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBhdXRvc2l6ZXNFbGVtcztcblxuXHRcdHZhciBzaXplRWxlbWVudCA9IHJBRkl0KGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKXtcblx0XHRcdHZhciBzb3VyY2VzLCBpLCBsZW47XG5cdFx0XHRlbGVtLl9sYXp5c2l6ZXNXaWR0aCA9IHdpZHRoO1xuXHRcdFx0d2lkdGggKz0gJ3B4JztcblxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXG5cdFx0XHRpZihyZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKSl7XG5cdFx0XHRcdHNvdXJjZXMgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpO1xuXHRcdFx0XHRmb3IoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdHNvdXJjZXNbaV0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighZXZlbnQuZGV0YWlsLmRhdGFBdHRyKXtcblx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwgZXZlbnQuZGV0YWlsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBlbGVtIHtFbGVtZW50fVxuXHRcdCAqIEBwYXJhbSBkYXRhQXR0clxuXHRcdCAqIEBwYXJhbSBbd2lkdGhdIHsgbnVtYmVyIH1cblx0XHQgKi9cblx0XHR2YXIgZ2V0U2l6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbSwgZGF0YUF0dHIsIHdpZHRoKXtcblx0XHRcdHZhciBldmVudDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmKHBhcmVudCl7XG5cdFx0XHRcdHdpZHRoID0gZ2V0V2lkdGgoZWxlbSwgcGFyZW50LCB3aWR0aCk7XG5cdFx0XHRcdGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3Jlc2l6ZXMnLCB7d2lkdGg6IHdpZHRoLCBkYXRhQXR0cjogISFkYXRhQXR0cn0pO1xuXG5cdFx0XHRcdGlmKCFldmVudC5kZWZhdWx0UHJldmVudGVkKXtcblx0XHRcdFx0XHR3aWR0aCA9IGV2ZW50LmRldGFpbC53aWR0aDtcblxuXHRcdFx0XHRcdGlmKHdpZHRoICYmIHdpZHRoICE9PSBlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHRcdFx0XHRzaXplRWxlbWVudChlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVFbGVtZW50c1NpemVzID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBpO1xuXHRcdFx0dmFyIGxlbiA9IGF1dG9zaXplc0VsZW1zLmxlbmd0aDtcblx0XHRcdGlmKGxlbil7XG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0Z2V0U2l6ZUVsZW1lbnQoYXV0b3NpemVzRWxlbXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzID0gZGVib3VuY2UodXBkYXRlRWxlbWVudHNTaXplcyk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0YXV0b3NpemVzRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5hdXRvc2l6ZXNDbGFzcyk7XG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMpO1xuXHRcdFx0fSxcblx0XHRcdGNoZWNrRWxlbXM6IGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMsXG5cdFx0XHR1cGRhdGVFbGVtOiBnZXRTaXplRWxlbWVudFxuXHRcdH07XG5cdH0pKCk7XG5cblx0dmFyIGluaXQgPSBmdW5jdGlvbigpe1xuXHRcdGlmKCFpbml0LmkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSl7XG5cdFx0XHRpbml0LmkgPSB0cnVlO1xuXHRcdFx0YXV0b1NpemVyLl8oKTtcblx0XHRcdGxvYWRlci5fKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRpZihsYXp5U2l6ZXNDZmcuaW5pdCl7XG5cdFx0XHRpbml0KCk7XG5cdFx0fVxuXHR9KTtcblxuXHRsYXp5c2l6ZXMgPSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUgeyBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsIH1cblx0XHQgKi9cblx0XHRjZmc6IGxhenlTaXplc0NmZyxcblx0XHRhdXRvU2l6ZXI6IGF1dG9TaXplcixcblx0XHRsb2FkZXI6IGxvYWRlcixcblx0XHRpbml0OiBpbml0LFxuXHRcdHVQOiB1cGRhdGVQb2x5ZmlsbCxcblx0XHRhQzogYWRkQ2xhc3MsXG5cdFx0ckM6IHJlbW92ZUNsYXNzLFxuXHRcdGhDOiBoYXNDbGFzcyxcblx0XHRmaXJlOiB0cmlnZ2VyRXZlbnQsXG5cdFx0Z1c6IGdldFdpZHRoLFxuXHRcdHJBRjogckFGLFxuXHR9O1xuXG5cdHJldHVybiBsYXp5c2l6ZXM7XG59XG4pKTtcbiIsIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0aWYoIXdpbmRvdykge3JldHVybjt9XG5cdHZhciBnbG9iYWxJbnN0YWxsID0gZnVuY3Rpb24oKXtcblx0XHRmYWN0b3J5KHdpbmRvdy5sYXp5U2l6ZXMpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xuXHR9O1xuXG5cdGZhY3RvcnkgPSBmYWN0b3J5LmJpbmQobnVsbCwgd2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuXG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdGZhY3RvcnkocmVxdWlyZSgnbGF6eXNpemVzJykpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbGF6eXNpemVzJ10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYod2luZG93LmxhenlTaXplcykge1xuXHRcdGdsb2JhbEluc3RhbGwoKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbGF6eXVudmVpbHJlYWQnLCBnbG9iYWxJbnN0YWxsLCB0cnVlKTtcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cblx0d2luZG93IDogMCwgZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgbGF6eVNpemVzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRpZighd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpe3JldHVybjt9XG5cblx0dmFyIHJlZ0Rlc2NyaXB0b3JzID0gL1xccysoXFxkKykod3xoKVxccysoXFxkKykod3xoKS87XG5cdHZhciByZWdDc3NGaXQgPSAvcGFyZW50LWZpdFtcIiddKlxccyo6XFxzKltcIiddKihjb250YWlufGNvdmVyfHdpZHRoKS87XG5cdHZhciByZWdDc3NPYmplY3QgPSAvcGFyZW50LWNvbnRhaW5lcltcIiddKlxccyo6XFxzKltcIiddKiguKz8pKD89KFxcc3wkfCx8J3xcInw7KSkvO1xuXHR2YXIgcmVnUGljdHVyZSA9IC9ecGljdHVyZSQvaTtcblx0dmFyIGNmZyA9IGxhenlTaXplcy5jZmc7XG5cblx0dmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtKXtcblx0XHRyZXR1cm4gKGdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCkgfHwge30pO1xuXHR9O1xuXG5cdHZhciBwYXJlbnRGaXQgPSB7XG5cblx0XHRnZXRQYXJlbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHBhcmVudFNlbCl7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbWVudDtcblx0XHRcdHZhciBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZigoIXBhcmVudFNlbCB8fCBwYXJlbnRTZWwgPT0gJ3ByZXYnKSAmJiBwYXJlbnROb2RlICYmIHJlZ1BpY3R1cmUudGVzdChwYXJlbnROb2RlLm5vZGVOYW1lIHx8ICcnKSl7XG5cdFx0XHRcdHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudFNlbCAhPSAnc2VsZicpe1xuXHRcdFx0XHRpZihwYXJlbnRTZWwgPT0gJ3ByZXYnKXtcblx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0XHRcdH0gZWxzZSBpZihwYXJlbnRTZWwgJiYgKHBhcmVudE5vZGUuY2xvc2VzdCB8fCB3aW5kb3cualF1ZXJ5KSl7XG5cdFx0XHRcdFx0cGFyZW50ID0gKHBhcmVudE5vZGUuY2xvc2VzdCA/XG5cdFx0XHRcdFx0XHRcdHBhcmVudE5vZGUuY2xvc2VzdChwYXJlbnRTZWwpIDpcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KHBhcmVudE5vZGUpLmNsb3Nlc3QocGFyZW50U2VsKVswXSkgfHxcblx0XHRcdFx0XHRcdHBhcmVudE5vZGVcblx0XHRcdFx0XHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50Tm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xuXHRcdH0sXG5cblx0XHRnZXRGaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuXHRcdFx0dmFyIHRtcE1hdGNoLCBwYXJlbnRPYmo7XG5cdFx0XHR2YXIgY3NzID0gZ2V0Q1NTKGVsZW1lbnQpO1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3MuY29udGVudCB8fCBjc3MuZm9udEZhbWlseTtcblx0XHRcdHZhciBvYmogPSB7XG5cdFx0XHRcdGZpdDogZWxlbWVudC5fbGF6eXNpemVzUGFyZW50Rml0IHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudC1maXQnKVxuXHRcdFx0fTtcblxuXHRcdFx0aWYoIW9iai5maXQgJiYgY29udGVudCAmJiAodG1wTWF0Y2ggPSBjb250ZW50Lm1hdGNoKHJlZ0Nzc0ZpdCkpKXtcblx0XHRcdFx0b2JqLmZpdCA9IHRtcE1hdGNoWzFdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihvYmouZml0KXtcblx0XHRcdFx0cGFyZW50T2JqID0gZWxlbWVudC5fbGF6eXNpemVzUGFyZW50Q29udGFpbmVyIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudC1jb250YWluZXInKTtcblxuXHRcdFx0XHRpZighcGFyZW50T2JqICYmIGNvbnRlbnQgJiYgKHRtcE1hdGNoID0gY29udGVudC5tYXRjaChyZWdDc3NPYmplY3QpKSl7XG5cdFx0XHRcdFx0cGFyZW50T2JqID0gdG1wTWF0Y2hbMV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvYmoucGFyZW50ID0gcGFyZW50Rml0LmdldFBhcmVudChlbGVtZW50LCBwYXJlbnRPYmopO1xuXG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9iai5maXQgPSBjc3Mub2JqZWN0Rml0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH0sXG5cblx0XHRnZXRJbWFnZVJhdGlvOiBmdW5jdGlvbihlbGVtZW50KXtcblx0XHRcdHZhciBpLCBzcmNzZXQsIG1lZGlhLCByYXRpbywgbWF0Y2gsIHdpZHRoLCBoZWlnaHQ7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdFx0dmFyIGVsZW1lbnRzID0gcGFyZW50ICYmIHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpID9cblx0XHRcdFx0XHRwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnc291cmNlLCBpbWcnKSA6XG5cdFx0XHRcdFx0W2VsZW1lbnRdXG5cdFx0XHRcdDtcblxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudHNbaV07XG5cdFx0XHRcdHNyY3NldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGNmZy5zcmNzZXRBdHRyKSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3Jjc2V0JykgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGZzcmNzZXQnKSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yaXNyY3NldCcpIHx8ICcnO1xuXHRcdFx0XHRtZWRpYSA9IGVsZW1lbnQuX2xzTWVkaWEgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21lZGlhJyk7XG5cdFx0XHRcdG1lZGlhID0gY2ZnLmN1c3RvbU1lZGlhW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW1lZGlhJykgfHwgbWVkaWFdIHx8IG1lZGlhO1xuXG5cdFx0XHRcdGlmKHNyY3NldCAmJiAoIW1lZGlhIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSAmJiBtYXRjaE1lZGlhKG1lZGlhKSB8fCB7fSkubWF0Y2hlcyApKXtcblx0XHRcdFx0XHRyYXRpbyA9IHBhcnNlRmxvYXQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNwZWN0cmF0aW8nKSk7XG5cblx0XHRcdFx0XHRpZiAoIXJhdGlvKSB7XG5cdFx0XHRcdFx0XHRtYXRjaCA9IHNyY3NldC5tYXRjaChyZWdEZXNjcmlwdG9ycyk7XG5cblx0XHRcdFx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRpZihtYXRjaFsyXSA9PSAndycpe1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoID0gbWF0Y2hbMV07XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0ID0gbWF0Y2hbM107XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGggPSBtYXRjaFszXTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQgPSBtYXRjaFsxXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0d2lkdGggPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByYXRpbztcblx0XHR9LFxuXG5cdFx0Y2FsY3VsYXRlU2l6ZTogZnVuY3Rpb24oZWxlbWVudCwgd2lkdGgpe1xuXHRcdFx0dmFyIGRpc3BsYXlSYXRpbywgaGVpZ2h0LCBpbWFnZVJhdGlvLCByZXRXaWR0aDtcblx0XHRcdHZhciBmaXRPYmogPSB0aGlzLmdldEZpdChlbGVtZW50KTtcblx0XHRcdHZhciBmaXQgPSBmaXRPYmouZml0O1xuXHRcdFx0dmFyIGZpdEVsZW0gPSBmaXRPYmoucGFyZW50O1xuXG5cdFx0XHRpZihmaXQgIT0gJ3dpZHRoJyAmJiAoKGZpdCAhPSAnY29udGFpbicgJiYgZml0ICE9ICdjb3ZlcicpIHx8ICEoaW1hZ2VSYXRpbyA9IHRoaXMuZ2V0SW1hZ2VSYXRpbyhlbGVtZW50KSkpKXtcblx0XHRcdFx0cmV0dXJuIHdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihmaXRFbGVtKXtcblx0XHRcdFx0d2lkdGggPSBmaXRFbGVtLmNsaWVudFdpZHRoO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zml0RWxlbSA9IGVsZW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldFdpZHRoID0gd2lkdGg7XG5cblx0XHRcdGlmKGZpdCA9PSAnd2lkdGgnKXtcblx0XHRcdFx0cmV0V2lkdGggPSB3aWR0aDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlaWdodCA9IGZpdEVsZW0uY2xpZW50SGVpZ2h0O1xuXG5cdFx0XHRcdGlmKChkaXNwbGF5UmF0aW8gPSAgd2lkdGggLyBoZWlnaHQpICYmICgoZml0ID09ICdjb3ZlcicgJiYgZGlzcGxheVJhdGlvIDwgaW1hZ2VSYXRpbykgfHwgKGZpdCA9PSAnY29udGFpbicgJiYgZGlzcGxheVJhdGlvID4gaW1hZ2VSYXRpbykpKXtcblx0XHRcdFx0XHRyZXRXaWR0aCA9IHdpZHRoICogKGltYWdlUmF0aW8gLyBkaXNwbGF5UmF0aW8pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXRXaWR0aDtcblx0XHR9XG5cdH07XG5cblx0bGF6eVNpemVzLnBhcmVudEZpdCA9IHBhcmVudEZpdDtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsYXp5YmVmb3Jlc2l6ZXMnLCBmdW5jdGlvbihlKXtcblx0XHRpZihlLmRlZmF1bHRQcmV2ZW50ZWQgfHwgZS5kZXRhaWwuaW5zdGFuY2UgIT0gbGF6eVNpemVzKXtyZXR1cm47fVxuXG5cdFx0dmFyIGVsZW1lbnQgPSBlLnRhcmdldDtcblx0XHRlLmRldGFpbC53aWR0aCA9IHBhcmVudEZpdC5jYWxjdWxhdGVTaXplKGVsZW1lbnQsIGUuZGV0YWlsLndpZHRoKTtcblx0fSk7XG59KSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykgeyBvYmpba2V5XSA9IGRlc2MudmFsdWU7IH07XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHsgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgfSk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwgeyB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgZGVmaW5lUHJvcGVydHkoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgXCJjb25zdHJ1Y3RvclwiLFxuICAgIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLCBjb25maWd1cmFibGU6IHRydWUgfVxuICApO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHsgdmFsdWU6IGVucXVldWUgfSk7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kO1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kLCBvciBhIG1pc3NpbmcgLm5leHQgbWVodG9kLCBhbHdheXMgdGVybWluYXRlIHRoZVxuICAgICAgLy8geWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1ldGhvZE5hbWUgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNwb25zaXZlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzcG9uc2l2ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG5pbXBvcnQgeyBvcGVuREIgfSBmcm9tICdpZGInO1xyXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IHsgREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwgT0JKRUNUX1NUT1JFX05BTUUgfSA9IENPTkZJRztcclxuXHJcbmNvbnN0IGRiUHJvbWlzZSA9IG9wZW5EQihEQVRBQkFTRV9OQU1FLCBEQVRBQkFTRV9WRVJTSU9OLCB7XHJcbiAgdXBncmFkZShkYXRhYmFzZSkge1xyXG4gICAgZGF0YWJhc2UuY3JlYXRlT2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUsIHsga2V5UGF0aDogJ2lkJyB9KTtcclxuICB9LFxyXG59KTtcclxuY29uc3QgRmF2b3JpdGVSZXN0b0lkYiA9IHtcclxuICBhc3luYyBnZXRSZXN0byhpZCkge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHJldHVybiAoYXdhaXQgZGJQcm9taXNlKS5nZXQoT0JKRUNUX1NUT1JFX05BTUUsIGlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0QWxsUmVzdG9zKCkge1xyXG4gICAgcmV0dXJuIChhd2FpdCBkYlByb21pc2UpLmdldEFsbChPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgfSxcclxuICBhc3luYyBwdXRSZXN0byhyZXN0YXVyYW50KSB7XHJcbiAgICBpZiAocmVzdGF1cmFudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkge1xyXG4gICAgICByZXR1cm4gKGF3YWl0IGRiUHJvbWlzZSkucHV0KE9CSkVDVF9TVE9SRV9OQU1FLCByZXN0YXVyYW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcbiAgYXN5bmMgZGVsZXRlUmVzdG8oaWQpIHtcclxuICAgIHJldHVybiAoYXdhaXQgZGJQcm9taXNlKS5kZWxldGUoT0JKRUNUX1NUT1JFX05BTUUsIGlkKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVSZXN0b0lkYjtcclxuIiwiaW1wb3J0IEFQSV9FTkRQT0lOVCBmcm9tICcuLi9nbG9iYWxzL2FwaS1lbmRwb2ludCc7XHJcblxyXG5jbGFzcyBSZXN0YXVyYW50U291cmNlIHtcclxuICBzdGF0aWMgYXN5bmMgbGlzdFJlc3RhdXJhbnRzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuUkVTVEFVUkFOVFMpO1xyXG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbi5yZXN0YXVyYW50cztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBkZXRhaWxSZXN0YXVyYW50cyhpZCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuREVUQUlMKGlkKSk7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uLnJlc3RhdXJhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50U291cmNlO1xyXG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IEFQSV9FTkRQT0lOVCA9IHtcclxuICBSRVNUQVVSQU5UUzogYCR7Q09ORklHLkJBU0VfVVJMfWxpc3RgLFxyXG4gIERFVEFJTDogKGlkKSA9PiBgJHtDT05GSUcuQkFTRV9VUkx9ZGV0YWlsLyR7aWR9YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSV9FTkRQT0lOVDtcclxuIiwiY29uc3QgQ09ORklHID0ge1xyXG4gIEJBU0VfVVJMOiAnaHR0cHM6Ly9yZXN0YXVyYW50LWFwaS5kaWNvZGluZy5kZXYvJyxcclxuICBCQVNFX0lNQUdFX1VSTDogJ2h0dHBzOi8vcmVzdGF1cmFudC1hcGkuZGljb2RpbmcuZGV2L2ltYWdlcy9sYXJnZS8nLFxyXG4gIERFRkFVTFRfTEFOR1VBR0U6ICdlbi11cycsXHJcbiAgQ0FDSEVfTkFNRTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gIERBVEFCQVNFX05BTUU6ICdyZXN0YXVyYW50LWNhdGFsb2d1ZS1kYXRhYmFzZScsXHJcbiAgREFUQUJBU0VfVkVSU0lPTjogMSxcclxuICBPQkpFQ1RfU1RPUkVfTkFNRTogJ3Jlc3RhdXJhbnQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xyXG4iLCJpbXBvcnQgTGlrZSBmcm9tICcuLi92aWV3cy9wYWdlcy9saWtlJztcclxuaW1wb3J0IERldGFpbCBmcm9tICcuLi92aWV3cy9wYWdlcy9kZXRhaWwnO1xyXG5pbXBvcnQgUmVzdGF1cmFudHMgZnJvbSAnLi4vdmlld3MvcGFnZXMvcmVzdGF1cmFudHMnO1xyXG5cclxuY29uc3Qgcm91dGVzID0ge1xyXG4gICcvJzogUmVzdGF1cmFudHMsIC8vIGRlZmF1bHQgcGFnZVxyXG4gICcvcmVzdGF1cmFudHMnOiBSZXN0YXVyYW50cyxcclxuICAnL2RldGFpbC86aWQnOiBEZXRhaWwsXHJcbiAgJy9saWtlJzogTGlrZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiY29uc3QgVXJsUGFyc2VyID0ge1xyXG4gIHBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNwbGl0ZWRVcmwgPSB0aGlzLl91cmxTcGxpdHRlcih1cmwpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiB0aGlzLl91cmxTcGxpdHRlcih1cmwpO1xyXG4gIH0sXHJcblxyXG4gIF91cmxTcGxpdHRlcih1cmwpIHtcclxuICAgIGNvbnN0IHVybHNTcGxpdHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc291cmNlOiB1cmxzU3BsaXRzWzFdIHx8IG51bGwsXHJcbiAgICAgIGlkOiB1cmxzU3BsaXRzWzJdIHx8IG51bGwsXHJcbiAgICAgIHZlcmI6IHVybHNTcGxpdHNbM10gfHwgbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpIHtcclxuICAgIHJldHVybiAoc3BsaXRlZFVybC5yZXNvdXJjZSA/IGAvJHtzcGxpdGVkVXJsLnJlc291cmNlfWAgOiAnLycpXHJcbiAgICArIChzcGxpdGVkVXJsLmlkID8gJy86aWQnIDogJycpXHJcbiAgICArIChzcGxpdGVkVXJsLnZlcmIgPyBgLyR7c3BsaXRlZFVybC52ZXJifWAgOiAnJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVybFBhcnNlcjtcclxuIiwiY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xyXG4gIGluaXQoeyBidXR0b24sIGRyYXdlciwgY29udGVudCB9KSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fdG9nZ2xlRHJhd2VyKGV2ZW50LCBkcmF3ZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbG9zZURyYXdlcihldmVudCwgZHJhd2VyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF90b2dnbGVEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkcmF3ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIH0sXHJcblxyXG4gIF9jbG9zZURyYXdlcihldmVudCwgZHJhd2VyKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlckluaXRpYXRvcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG4vLyBpbXBvcnQgRmF2b3JpdGVSZXN0b0lkYiBmcm9tICcuLi9kYXRhL2Zhdm9yaXRlLXJlc3RvLWlkYic7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZUxpa2VCdXR0b25UZW1wbGF0ZSwgY3JlYXRlTGlrZWRCdXR0b25UZW1wbGF0ZSB9IGZyb20gJy4uL3ZpZXdzL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTGlrZUJ1dHRvblRlbXBsYXRlLFxyXG4gIGNyZWF0ZUxpa2VkQnV0dG9uVGVtcGxhdGUsXHJcbn0gZnJvbSAnLi4vdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3InO1xyXG5cclxuY29uc3QgTGlrZUJ1dHRvbkluaXRpYXRvciA9IHtcclxuICBhc3luYyBpbml0KHsgbGlrZUJ1dHRvbkNvbnRhaW5lciwgZmF2b3JpdGVSZXN0YXVyYW50cywgcmVzdGF1cmFudCB9KSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uQ29udGFpbmVyID0gbGlrZUJ1dHRvbkNvbnRhaW5lcjtcclxuICAgIHRoaXMuX3Jlc3RhdXJhbnQgPSByZXN0YXVyYW50O1xyXG4gICAgdGhpcy5fZmF2b3JpdGVSZXN0YXVyYW50cyA9IGZhdm9yaXRlUmVzdGF1cmFudHM7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5fcmVuZGVyQnV0dG9uKCk7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgX3JlbmRlckJ1dHRvbigpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMuX3Jlc3RhdXJhbnQ7XHJcblxyXG4gICAgaWYgKGF3YWl0IHRoaXMuX2lzUmVzdG9FeGlzdChpZCkpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyTGlrZWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlckxpa2UoKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhc3luYyBfaXNSZXN0b0V4aXN0KGlkKSB7XHJcbiAgICAvLyBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgdGhpcy5fZmF2b3JpdGVSZXN0YXVyYW50cy5nZXRSZXN0byhpZCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgdGhpcy5fZmF2b3JpdGVSZXN0YXVyYW50cy5nZXRSZXN0byhpZCk7XHJcbiAgICByZXR1cm4gISFyZXN0YXVyYW50O1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJMaWtlKCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGU7XHJcblxyXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWtlQnV0dG9uJyk7XHJcbiAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnRzLnB1dFJlc3RvKHRoaXMuX3Jlc3RhdXJhbnQpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJCdXR0b24oKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJMaWtlZCgpIHtcclxuICAgIHRoaXMuX2xpa2VCdXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gY3JlYXRlTGlrZWRCdXR0b25UZW1wbGF0ZTtcclxuXHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpa2VCdXR0b24nKTtcclxuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuX2Zhdm9yaXRlUmVzdGF1cmFudHMuZGVsZXRlUmVzdG8odGhpcy5fcmVzdGF1cmFudC5pZCk7XHJcbiAgICAgIHRoaXMuX3JlbmRlckJ1dHRvbigpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpa2VCdXR0b25Jbml0aWF0b3I7XHJcbiIsImltcG9ydCAqIGFzIFdvcmtib3hXaW5kb3cgZnJvbSAnd29ya2JveC13aW5kb3cnO1xyXG5cclxuY29uc3Qgc3dSZWdpc3RlciA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkge1xyXG4gICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXInKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdiID0gbmV3IFdvcmtib3hXaW5kb3cuV29ya2JveCgnLi9zdy5idW5kbGUuanMnKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHdiLnJlZ2lzdGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCcpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyJywgZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN3UmVnaXN0ZXI7XHJcbiIsImltcG9ydCBEcmF3ZXJJbml0aWF0b3IgZnJvbSAnLi4vdXRpbHMvZHJhd2VyLWluaXRpYXRvcic7XHJcbmltcG9ydCBVcmxQYXJzZXIgZnJvbSAnLi4vcm91dGVzL3VybC1wYXJzZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcy9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcih7IGJ1dHRvbiwgZHJhd2VyLCBjb250ZW50IH0pIHtcclxuICAgIHRoaXMuX2J1dHRvbiA9IGJ1dHRvbjtcclxuICAgIHRoaXMuX2RyYXdlciA9IGRyYXdlcjtcclxuICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxBcHBTaGVsbCgpO1xyXG4gIH1cclxuXHJcbiAgX2luaXRpYWxBcHBTaGVsbCgpIHtcclxuICAgIERyYXdlckluaXRpYXRvci5pbml0KHtcclxuICAgICAgYnV0dG9uOiB0aGlzLl9idXR0b24sXHJcbiAgICAgIGRyYXdlcjogdGhpcy5fZHJhd2VyLFxyXG4gICAgICBjb250ZW50OiB0aGlzLl9jb250ZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW5kZXJQYWdlKCkge1xyXG4gICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCk7XHJcbiAgICBjb25zdCBwYWdlID0gcm91dGVzW3VybF07XHJcbiAgICB0aGlzLl9jb250ZW50LmlubmVySFRNTCA9IGF3YWl0IHBhZ2UucmVuZGVyKCk7XHJcbiAgICBhd2FpdCBwYWdlLmFmdGVyUmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBVcmxQYXJzZXIgZnJvbSAnLi4vLi4vcm91dGVzL3VybC1wYXJzZXInO1xyXG5pbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnRzLXNvdXJjZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlc3RvRGV0YWlsVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XHJcbmltcG9ydCBMaWtlQnV0dG9uSW5pdGlhdG9yIGZyb20gJy4uLy4uL3V0aWxzL2xpa2UtYnV0dG9uLWluaXRpYXRvcic7XHJcbmltcG9ydCBGYXZvcml0ZVJlc3RvSWRiIGZyb20gJy4uLy4uL2RhdGEvZmF2b3JpdGUtcmVzdG8taWRiJztcclxuXHJcbmNvbnN0IERldGFpbCA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudFwiIGNsYXNzPVwicmVzdGF1cmFudFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwibGlrZUJ1dHRvbkNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIGNvbnN0IHVybCA9IFVybFBhcnNlci5wYXJzZUFjdGl2ZVVybFdpdGhvdXRDb21iaW5lcigpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudCA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZGV0YWlsUmVzdGF1cmFudHModXJsLmlkKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudCcpO1xyXG4gICAgcmVzdGF1cmFudENvbnRhaW5lci5pbm5lckhUTUwgPSBjcmVhdGVSZXN0b0RldGFpbFRlbXBsYXRlKHJlc3RhdXJhbnQpO1xyXG5cclxuICAgIGNvbnN0IGp1bWJvdHJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XHJcbiAgICBqdW1ib3Ryb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBMaWtlQnV0dG9uSW5pdGlhdG9yLmluaXQoe1xyXG4gICAgICBsaWtlQnV0dG9uQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlrZUJ1dHRvbkNvbnRhaW5lcicpLFxyXG4gICAgICBmYXZvcml0ZVJlc3RhdXJhbnRzOiBGYXZvcml0ZVJlc3RvSWRiLFxyXG4gICAgICByZXN0YXVyYW50OiB7XHJcbiAgICAgICAgaWQ6IHJlc3RhdXJhbnQuaWQsXHJcbiAgICAgICAgbmFtZTogcmVzdGF1cmFudC5uYW1lLFxyXG4gICAgICAgIGNpdHk6IHJlc3RhdXJhbnQuY2l0eSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcmVzdGF1cmFudC5kZXNjcmlwdGlvbixcclxuICAgICAgICBwaWN0dXJlSWQ6IHJlc3RhdXJhbnQucGljdHVyZUlkLFxyXG4gICAgICAgIHJhdGluZzogcmVzdGF1cmFudC5yYXRpbmcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cclxuLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXHJcbmltcG9ydCBGYXZvcml0ZVJlc3RvSWRiIGZyb20gJy4uLy4uL2RhdGEvZmF2b3JpdGUtcmVzdG8taWRiJztcclxuaW1wb3J0IEZhdm9yaXRlUmVzdGF1cmFudFNlYXJjaFZpZXcgZnJvbSAnLi9saWtlZC1yZXN0YXVyYW50cy9mYXZvcml0ZS1yZXN0YXVyYW50LXNlYXJjaC12aWV3JztcclxuaW1wb3J0IEZhdm9yaXRlUmVzdGF1cmFudFNob3dQcmVzZW50ZXIgZnJvbSAnLi9saWtlZC1yZXN0YXVyYW50cy9mYXZvcml0ZS1yZXN0YXVyYW50LXNob3ctcHJlc2VudGVyJztcclxuaW1wb3J0IEZhdm9yaXRlUmVzdGF1cmFudFNlYXJjaFByZXNlbnRlciBmcm9tICcuL2xpa2VkLXJlc3RhdXJhbnRzL2Zhdm9yaXRlLXJlc3RhdXJhbnQtc2VhcmNoLXByZXNlbnRlcic7XHJcblxyXG5jb25zdCB2aWV3ID0gbmV3IEZhdm9yaXRlUmVzdGF1cmFudFNlYXJjaFZpZXcoKTtcclxuXHJcbmNvbnN0IExpa2UgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHZpZXcuZ2V0VGVtcGxhdGUoKTtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIG5ldyBGYXZvcml0ZVJlc3RhdXJhbnRTaG93UHJlc2VudGVyKHtcclxuICAgICAgdmlldyxcclxuICAgICAgZmF2b3JpdGVSZXN0YXVyYW50czogRmF2b3JpdGVSZXN0b0lkYixcclxuICAgIH0pO1xyXG4gICAgbmV3IEZhdm9yaXRlUmVzdGF1cmFudFNlYXJjaFByZXNlbnRlcih7XHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIGZhdm9yaXRlUmVzdGF1cmFudHM6IEZhdm9yaXRlUmVzdG9JZGIsXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlrZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXHJcblxyXG5jb25zdCBfc2hvd0ZvdW5kUmVzdGF1cmFudHMgPSAocmVzdGF1cmFudHMsIHZpZXcpID0+IHtcclxuICB2aWV3LnNob3dSZXN0YXVyYW50cyhyZXN0YXVyYW50cyk7XHJcbn07XHJcblxyXG5jbGFzcyBGYXZvcml0ZVJlc3RhdXJhbnRTZWFyY2hQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHsgZmF2b3JpdGVSZXN0YXVyYW50cywgdmlldyB9KSB7XHJcbiAgICB0aGlzLl92aWV3ID0gdmlldztcclxuICAgIHRoaXMuX2xpc3RlblRvU2VhcmNoUmVxdWVzdEJ5VXNlcigpO1xyXG4gICAgdGhpcy5fZmF2b3JpdGVSZXN0YXVyYW50cyA9IGZhdm9yaXRlUmVzdGF1cmFudHM7XHJcbiAgfVxyXG5cclxuICBfbGlzdGVuVG9TZWFyY2hSZXF1ZXN0QnlVc2VyKCkge1xyXG4gICAgdGhpcy5fdmlldy5ydW5XaGVuVXNlcklzU2VhcmNoaW5nKChsYXRlc3RRdWVyeSkgPT4ge1xyXG4gICAgICB0aGlzLl9zZWFyY2hSZXN0YXVyYW50cyhsYXRlc3RRdWVyeSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIF9zZWFyY2hSZXN0YXVyYW50cyhsYXRlc3RRdWVyeSkge1xyXG4gICAgdGhpcy5fbGF0ZXN0UXVlcnkgPSBsYXRlc3RRdWVyeS50cmltKCk7XHJcblxyXG4gICAgbGV0IGZvdW5kUmVzdGF1cmFudHM7XHJcbiAgICBpZiAodGhpcy5sYXRlc3RRdWVyeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvdW5kUmVzdGF1cmFudHMgPSBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnRzLnNlYXJjaFJlc3RhdXJhbnRzKFxyXG4gICAgICAgIHRoaXMubGF0ZXN0UXVlcnlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvdW5kUmVzdGF1cmFudHMgPSBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnRzLmdldEFsbFJlc3RvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zaG93Rm91bmRSZXN0YXVyYW50cyhmb3VuZFJlc3RhdXJhbnRzLCB0aGlzLl92aWV3KTtcclxuICB9XHJcblxyXG4gIF9zaG93Rm91bmRSZXN0YXVyYW50cyhyZXN0YXVyYW50cykge1xyXG4gICAgdGhpcy5fdmlldy5zaG93RmF2b3JpdGVSZXN0YXVyYW50cyhyZXN0YXVyYW50cyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGF0ZXN0UXVlcnkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGF0ZXN0UXVlcnk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZVJlc3RhdXJhbnRTZWFyY2hQcmVzZW50ZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbmltcG9ydCB7IGNyZWF0ZVJlc3RvSXRlbVRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3InO1xyXG5cclxuY2xhc3MgRmF2b3JpdGVSZXN0YXVyYW50U2VhcmNoVmlldyB7XHJcbiAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInF1ZXJ5XCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjb250ZW50X19oZWFkaW5nXCI+WW91ciBMaWtlZCBSZXN0YXVyYW50PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50c1wiIGlkPVwicmVzdGF1cmFudHNcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBydW5XaGVuVXNlcklzU2VhcmNoaW5nKGNhbGxiYWNrKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlcnknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgY2FsbGJhY2soZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1Jlc3RhdXJhbnRzKHJlc3RhdXJhbnRzKSB7XHJcbiAgICB0aGlzLnNob3dGYXZvcml0ZVJlc3RhdXJhbnRzKHJlc3RhdXJhbnRzKTtcclxuICB9XHJcblxyXG4gIHNob3dGYXZvcml0ZVJlc3RhdXJhbnRzKHJlc3RhdXJhbnRzID0gW10pIHtcclxuICAgIGxldCBodG1sO1xyXG5cclxuICAgIGlmIChyZXN0YXVyYW50cy5sZW5ndGgpIHtcclxuICAgICAgaHRtbCA9IHJlc3RhdXJhbnRzLnJlZHVjZShcclxuICAgICAgICAoY2FycnksIHJlc3RhdXJhbnQpID0+XHJcbiAgICAgICAgICBjYXJyeS5jb25jYXQoY3JlYXRlUmVzdG9JdGVtVGVtcGxhdGUocmVzdGF1cmFudCkpLFxyXG4gICAgICAgICcnXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBodG1sID0gdGhpcy5fZ2V0RW1wdHlSZXN0YXVyYW50VGVtcGxhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudHMnKS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudHMnKVxyXG4gICAgICAuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc3RhdXJhbnRzOnVwZGF0ZWQnKSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0RW1wdHlSZXN0YXVyYW50VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJyZXN0by1pdGVtX19ub3RfX2ZvdW5kXCI+VGlkYWsgYWRhIHJlc3RhdXJhbnQgdW50dWsgZGl0YW1waWxrYW48L2Rpdj4nO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVSZXN0YXVyYW50U2VhcmNoVmlldztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuY2xhc3MgRmF2b3JpdGVSZXN0YXVyYW50U2hvd1ByZXNlbnRlciB7XHJcbiAgY29uc3RydWN0b3IoeyB2aWV3LCBmYXZvcml0ZVJlc3RhdXJhbnRzIH0pIHtcclxuICAgIHRoaXMuX3ZpZXcgPSB2aWV3O1xyXG4gICAgdGhpcy5fZmF2b3JpdGVSZXN0YXVyYW50cyA9IGZhdm9yaXRlUmVzdGF1cmFudHM7XHJcblxyXG4gICAgdGhpcy5fc2hvd0Zhdm9yaXRlUmVzdGF1cmFudHMoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIF9zaG93RmF2b3JpdGVSZXN0YXVyYW50cygpIHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgdGhpcy5fZmF2b3JpdGVSZXN0YXVyYW50cy5nZXRBbGxSZXN0b3MoKTtcclxuICAgIHRoaXMuX2Rpc3BsYXlSZXN0YXVyYW50cyhyZXN0YXVyYW50cyk7XHJcbiAgfVxyXG5cclxuICBfZGlzcGxheVJlc3RhdXJhbnRzKHJlc3RhdXJhbnRzKSB7XHJcbiAgICB0aGlzLl92aWV3LnNob3dGYXZvcml0ZVJlc3RhdXJhbnRzKHJlc3RhdXJhbnRzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlUmVzdGF1cmFudFNob3dQcmVzZW50ZXI7XHJcbiIsImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudHMtc291cmNlJztcclxuaW1wb3J0IHsgY3JlYXRlUmVzdG9JdGVtVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XHJcblxyXG5jb25zdCBSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRpbmdcIj5GaW5kIFlvdXIgRmF2b3JpdGUgUmVzdGF1cmFudHM8L2gyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyZXN0YXVyYW50c1wiIGNsYXNzPVwicmVzdGF1cmFudHNcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmxpc3RSZXN0YXVyYW50cygpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudHMnKTtcclxuICAgIHJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcclxuICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MICs9IGNyZWF0ZVJlc3RvSXRlbVRlbXBsYXRlKHJlc3RhdXJhbnQpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRzO1xyXG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RvRGV0YWlsVGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gIDxoMSBjbGFzcz1cInJlc3RvX19uYW1lXCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9oMT5cclxuICA8aW1nIGNsYXNzPVwicmVzdG9fX3BpY3R1cmVcIiBzcmM9XCIke0NPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbiAgPGRpdiBjbGFzcz1cInJlc3RvX19pbmZvXCI+XHJcbiAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG4gICAgPGg0PkNpdHk8L2g0PlxyXG4gICAgPHA+JHtyZXN0YXVyYW50LmNpdHl9PC9wPlxyXG4gICAgPGg0PkFkZHJlc3M8L2g0PlxyXG4gICAgPHA+JHtyZXN0YXVyYW50LmFkZHJlc3N9PC9wPlxyXG4gICAgPGg0PlJhdGluZzwvaDQ+XHJcbiAgICA8cD4ke3Jlc3RhdXJhbnQucmF0aW5nfTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicmVzdG9fX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICA8aDM+RGVzY3JpcnB0aW9uPC9oMz5cclxuICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJlc3RvX19tZW51c1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvb2RzXCI+XHJcbiAgICAgIDxoMz5Gb29kczwvaDM+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICAke3Jlc3RhdXJhbnQubWVudXMuZm9vZHMubWFwKChmb29kKSA9PiBgPGxpPiR7Zm9vZC5uYW1lfTwvbGk+YCkuam9pbignJyl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkcmlua3NcIj5cclxuICAgICAgPGgzPkRyaW5rczwvaDM+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICAke3Jlc3RhdXJhbnQubWVudXMuZHJpbmtzLm1hcCgoZHJpbmspID0+IGA8bGk+JHtkcmluay5uYW1lfTwvbGk+YCkuam9pbignJyl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicmVzdG9fX3Jldmlld3NcIj5cclxuICAgIDxoMz5DdXN0b21lciBSZXZpZXdzPC9oMz5cclxuICAgIDxkaXYgY2xhc3M9XCJjdXN0b21lcl9fcmV2aWV3XCI+XHJcbiAgICAgICR7cmVzdGF1cmFudC5jdXN0b21lclJldmlld3MubWFwKChyZXZpZXcpID0+IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXJkX19uYW1lXCI+JHtyZXZpZXcubmFtZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmRfX2RhdGVcIj4ke3Jldmlldy5kYXRlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fcmV2aWV3XCI+JHtyZXZpZXcucmV2aWV3fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYCkuam9pbignJyl9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuIFxyXG5jb25zdCBjcmVhdGVSZXN0b0l0ZW1UZW1wbGF0ZSA9IChyZXN0YXVyYW50cykgPT4gYFxyXG4gIDxkaXYgY2xhc3M9XCJyZXN0by1pdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdG8taXRlbV9faGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBjbGFzcz1cInJlc3RvLWl0ZW1fX2hlYWRlcl9fcG9zdGVyXCIgYWx0PVwiJHtyZXN0YXVyYW50cy5uYW1lfVwiXHJcbiAgICAgICAgICAgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50cy5waWN0dXJlSWR9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0by1pdGVtX19oZWFkZXJfX3JhdGluZ1wiPlxyXG4gICAgICAgIDxwPuKtkO+4jzxzcGFuIGNsYXNzPVwicmVzdG8taXRlbV9faGVhZGVyX19yYXRpbmdfX3Njb3JlXCI+JHtyZXN0YXVyYW50cy5yYXRpbmd9PC9zcGFuPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0by1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgIDxoMyBjbGFzcz1cInJlc3RvX190aXRsZVwiPjxhIGhyZWY9XCIvIy9kZXRhaWwvJHtyZXN0YXVyYW50cy5pZH1cIj4ke3Jlc3RhdXJhbnRzLm5hbWV9PC9hPjwvaDM+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGUgPSAoKSA9PiBgXHJcbiAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwibGlrZSB0aGlzIHJlc3RhdXJhbnRcIiBpZD1cImxpa2VCdXR0b25cIiBjbGFzcz1cImxpa2VcIj5cclxuICAgICA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0LW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgPC9idXR0b24+XHJcbmA7XHJcbiBcclxuY29uc3QgY3JlYXRlTGlrZWRCdXR0b25UZW1wbGF0ZSA9ICgpID0+IGBcclxuICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJ1bmxpa2UgdGhpcyByZXN0YXVyYW50XCIgaWQ9XCJsaWtlQnV0dG9uXCIgY2xhc3M9XCJsaWtlXCI+XHJcbiAgICA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gIDwvYnV0dG9uPlxyXG5gO1xyXG4gXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlUmVzdG9JdGVtVGVtcGxhdGUsXHJcbiAgY3JlYXRlUmVzdG9EZXRhaWxUZW1wbGF0ZSxcclxuICBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGUsXHJcbiAgY3JlYXRlTGlrZWRCdXR0b25UZW1wbGF0ZSxcclxufTsiLCJpbXBvcnQgeyB3IGFzIHdyYXAsIHIgYXMgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5leHBvcnQgeyB1IGFzIHVud3JhcCwgdyBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PiBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCkpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PiBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiB9O1xuIiwiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgcHJvbWlzZVxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQodmFsdWUsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgICBpZiAoZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZU5hbWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldCh0eCwgc3RvcmVOYW1lcy5zb3J0ID8gc3RvcmVOYW1lcy5zb3J0KCkgOiBbc3RvcmVOYW1lc10pO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbmV4cG9ydCB7IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBhcyBhLCBpbnN0YW5jZU9mQW55IGFzIGksIHJlcGxhY2VUcmFwcyBhcyByLCB1bndyYXAgYXMgdSwgd3JhcCBhcyB3IH07XG4iLCJ0cnl7c2VsZltcIndvcmtib3g6d2luZG93OjcuMC4wXCJdJiZfKCl9Y2F0Y2gobil7fWZ1bmN0aW9uIG4obix0KXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHIpe3ZhciBlPW5ldyBNZXNzYWdlQ2hhbm5lbDtlLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihuKXtyKG4uZGF0YSl9LG4ucG9zdE1lc3NhZ2UodCxbZS5wb3J0Ml0pfSkpfWZ1bmN0aW9uIHQobix0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGU9dFtyXTtlLmVudW1lcmFibGU9ZS5lbnVtZXJhYmxlfHwhMSxlLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBlJiYoZS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sZS5rZXksZSl9fWZ1bmN0aW9uIHIobix0KXsobnVsbD09dHx8dD5uLmxlbmd0aCkmJih0PW4ubGVuZ3RoKTtmb3IodmFyIHI9MCxlPW5ldyBBcnJheSh0KTtyPHQ7cisrKWVbcl09bltyXTtyZXR1cm4gZX1mdW5jdGlvbiBlKG4sdCl7dmFyIGU7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8bnVsbD09bltTeW1ib2wuaXRlcmF0b3JdKXtpZihBcnJheS5pc0FycmF5KG4pfHwoZT1mdW5jdGlvbihuLHQpe2lmKG4pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXJldHVybiByKG4sdCk7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4pLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1lJiZuLmNvbnN0cnVjdG9yJiYoZT1uLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1lfHxcIlNldFwiPT09ZT9BcnJheS5mcm9tKG4pOlwiQXJndW1lbnRzXCI9PT1lfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChlKT9yKG4sdCk6dm9pZCAwfX0obikpfHx0JiZuJiZcIm51bWJlclwiPT10eXBlb2Ygbi5sZW5ndGgpe2UmJihuPWUpO3ZhciBpPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGk+PW4ubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTpuW2krK119fX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9cmV0dXJuKGU9bltTeW1ib2wuaXRlcmF0b3JdKCkpLm5leHQuYmluZChlKX10cnl7c2VsZltcIndvcmtib3g6Y29yZTo3LjAuMFwiXSYmXygpfWNhdGNoKG4pe312YXIgaT1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5wcm9taXNlPW5ldyBQcm9taXNlKChmdW5jdGlvbih0LHIpe24ucmVzb2x2ZT10LG4ucmVqZWN0PXJ9KSl9O2Z1bmN0aW9uIG8obix0KXt2YXIgcj1sb2NhdGlvbi5ocmVmO3JldHVybiBuZXcgVVJMKG4scikuaHJlZj09PW5ldyBVUkwodCxyKS5ocmVmfXZhciB1PWZ1bmN0aW9uKG4sdCl7dGhpcy50eXBlPW4sT2JqZWN0LmFzc2lnbih0aGlzLHQpfTtmdW5jdGlvbiBhKG4sdCxyKXtyZXR1cm4gcj90P3Qobik6bjoobiYmbi50aGVufHwobj1Qcm9taXNlLnJlc29sdmUobikpLHQ/bi50aGVuKHQpOm4pfWZ1bmN0aW9uIGMoKXt9dmFyIGY9e3R5cGU6XCJTS0lQX1dBSVRJTkdcIn07ZnVuY3Rpb24gcyhuLHQpe2lmKCF0KXJldHVybiBuJiZuLnRoZW4/bi50aGVuKGMpOlByb21pc2UucmVzb2x2ZSgpfXZhciB2PWZ1bmN0aW9uKHIpe3ZhciBlLGM7ZnVuY3Rpb24gdihuLHQpe3ZhciBlLGM7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSwoZT1yLmNhbGwodGhpcyl8fHRoaXMpLm5uPXt9LGUudG49MCxlLnJuPW5ldyBpLGUuZW49bmV3IGksZS5vbj1uZXcgaSxlLnVuPTAsZS5hbj1uZXcgU2V0LGUuY249ZnVuY3Rpb24oKXt2YXIgbj1lLmZuLHQ9bi5pbnN0YWxsaW5nO2UudG4+MHx8IW8odC5zY3JpcHRVUkwsZS5zbi50b1N0cmluZygpKXx8cGVyZm9ybWFuY2Uubm93KCk+ZS51bis2ZTQ/KGUudm49dCxuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuY24pKTooZS5obj10LGUuYW4uYWRkKHQpLGUucm4ucmVzb2x2ZSh0KSksKytlLnRuLHQuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsZS5sbil9LGUubG49ZnVuY3Rpb24obil7dmFyIHQ9ZS5mbixyPW4udGFyZ2V0LGk9ci5zdGF0ZSxvPXI9PT1lLnZuLGE9e3N3OnIsaXNFeHRlcm5hbDpvLG9yaWdpbmFsRXZlbnQ6bn07IW8mJmUubW4mJihhLmlzVXBkYXRlPSEwKSxlLmRpc3BhdGNoRXZlbnQobmV3IHUoaSxhKSksXCJpbnN0YWxsZWRcIj09PWk/ZS53bj1zZWxmLnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7XCJpbnN0YWxsZWRcIj09PWkmJnQud2FpdGluZz09PXImJmUuZGlzcGF0Y2hFdmVudChuZXcgdShcIndhaXRpbmdcIixhKSl9KSwyMDApOlwiYWN0aXZhdGluZ1wiPT09aSYmKGNsZWFyVGltZW91dChlLnduKSxvfHxlLmVuLnJlc29sdmUocikpfSxlLmRuPWZ1bmN0aW9uKG4pe3ZhciB0PWUuaG4scj10IT09bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcjtlLmRpc3BhdGNoRXZlbnQobmV3IHUoXCJjb250cm9sbGluZ1wiLHtpc0V4dGVybmFsOnIsb3JpZ2luYWxFdmVudDpuLHN3OnQsaXNVcGRhdGU6ZS5tbn0pKSxyfHxlLm9uLnJlc29sdmUodCl9LGUuZ249KGM9ZnVuY3Rpb24obil7dmFyIHQ9bi5kYXRhLHI9bi5wb3J0cyxpPW4uc291cmNlO3JldHVybiBhKGUuZ2V0U1coKSwoZnVuY3Rpb24oKXtlLmFuLmhhcyhpKSYmZS5kaXNwYXRjaEV2ZW50KG5ldyB1KFwibWVzc2FnZVwiLHtkYXRhOnQsb3JpZ2luYWxFdmVudDpuLHBvcnRzOnIsc3c6aX0pKX0pKX0sZnVuY3Rpb24oKXtmb3IodmFyIG49W10sdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspblt0XT1hcmd1bWVudHNbdF07dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoYy5hcHBseSh0aGlzLG4pKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fSksZS5zbj1uLGUubm49dCxuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUuZ24pLGV9Yz1yLChlPXYpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGMucHJvdG90eXBlKSxlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1lLGUuX19wcm90b19fPWM7dmFyIGgsbCxtLHc9di5wcm90b3R5cGU7cmV0dXJuIHcucmVnaXN0ZXI9ZnVuY3Rpb24obil7dmFyIHQ9KHZvaWQgMD09PW4/e306bikuaW1tZWRpYXRlLHI9dm9pZCAwIT09dCYmdDt0cnl7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24obix0KXt2YXIgcj1uKCk7aWYociYmci50aGVuKXJldHVybiByLnRoZW4odCk7cmV0dXJuIHQocil9KChmdW5jdGlvbigpe2lmKCFyJiZcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlKXJldHVybiBzKG5ldyBQcm9taXNlKChmdW5jdGlvbihuKXtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbil9KSkpfSksKGZ1bmN0aW9uKCl7cmV0dXJuIGUubW49Qm9vbGVhbihuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSxlLnluPWUucG4oKSxhKGUuYm4oKSwoZnVuY3Rpb24obil7ZS5mbj1uLGUueW4mJihlLmhuPWUueW4sZS5lbi5yZXNvbHZlKGUueW4pLGUub24ucmVzb2x2ZShlLnluKSxlLnluLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLGUubG4se29uY2U6ITB9KSk7dmFyIHQ9ZS5mbi53YWl0aW5nO3JldHVybiB0JiZvKHQuc2NyaXB0VVJMLGUuc24udG9TdHJpbmcoKSkmJihlLmhuPXQsUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXtlLmRpc3BhdGNoRXZlbnQobmV3IHUoXCJ3YWl0aW5nXCIse3N3OnQsd2FzV2FpdGluZ0JlZm9yZVJlZ2lzdGVyOiEwfSkpfSkpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpKSxlLmhuJiYoZS5ybi5yZXNvbHZlKGUuaG4pLGUuYW4uYWRkKGUuaG4pKSxlLmZuLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuY24pLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250cm9sbGVyY2hhbmdlXCIsZS5kbiksZS5mbn0pKX0pKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fSx3LnVwZGF0ZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gdGhpcy5mbj9zKHRoaXMuZm4udXBkYXRlKCkpOnZvaWQgMH1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fSx3LmdldFNXPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuaG4/UHJvbWlzZS5yZXNvbHZlKHRoaXMuaG4pOnRoaXMucm4ucHJvbWlzZX0sdy5tZXNzYWdlU1c9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBhKHRoaXMuZ2V0U1coKSwoZnVuY3Rpb24ocil7cmV0dXJuIG4ocix0KX0pKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fSx3Lm1lc3NhZ2VTa2lwV2FpdGluZz1mdW5jdGlvbigpe3RoaXMuZm4mJnRoaXMuZm4ud2FpdGluZyYmbih0aGlzLmZuLndhaXRpbmcsZil9LHcucG49ZnVuY3Rpb24oKXt2YXIgbj1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyO3JldHVybiBuJiZvKG4uc2NyaXB0VVJMLHRoaXMuc24udG9TdHJpbmcoKSk/bjp2b2lkIDB9LHcuYm49ZnVuY3Rpb24oKXt0cnl7dmFyIG49dGhpcztyZXR1cm4gZnVuY3Rpb24obix0KXt0cnl7dmFyIHI9bigpfWNhdGNoKG4pe3JldHVybiB0KG4pfWlmKHImJnIudGhlbilyZXR1cm4gci50aGVuKHZvaWQgMCx0KTtyZXR1cm4gcn0oKGZ1bmN0aW9uKCl7cmV0dXJuIGEobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIobi5zbixuLm5uKSwoZnVuY3Rpb24odCl7cmV0dXJuIG4udW49cGVyZm9ybWFuY2Uubm93KCksdH0pKX0pLChmdW5jdGlvbihuKXt0aHJvdyBufSkpfWNhdGNoKG4pe3JldHVybiBQcm9taXNlLnJlamVjdChuKX19LGg9diwobD1be2tleTpcImFjdGl2ZVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVuLnByb21pc2V9fSx7a2V5OlwiY29udHJvbGxpbmdcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vbi5wcm9taXNlfX1dKSYmdChoLnByb3RvdHlwZSxsKSxtJiZ0KGgsbSksdn0oZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7dGhpcy5Qbj1uZXcgTWFwfXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlNuKG4pLmFkZCh0KX0sdC5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKG4sdCl7dGhpcy5TbihuKS5kZWxldGUodCl9LHQuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihuKXtuLnRhcmdldD10aGlzO2Zvcih2YXIgdCxyPWUodGhpcy5TbihuLnR5cGUpKTshKHQ9cigpKS5kb25lOyl7KDAsdC52YWx1ZSkobil9fSx0LlNuPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLlBuLmhhcyhuKXx8dGhpcy5Qbi5zZXQobixuZXcgU2V0KSx0aGlzLlBuLmdldChuKX0sbn0oKSk7ZXhwb3J0e3YgYXMgV29ya2JveCx1IGFzIFdvcmtib3hFdmVudCxuIGFzIG1lc3NhZ2VTV307XG4vLyMgc291cmNlTWFwcGluZ1VSTD13b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vdmlld3MvYXBwJztcclxuaW1wb3J0IHN3UmVnaXN0ZXIgZnJvbSAnLi91dGlscy9zdy1yZWdpc3Rlcic7XHJcbmltcG9ydCAnbGF6eXNpemVzJztcclxuaW1wb3J0ICdsYXp5c2l6ZXMvcGx1Z2lucy9wYXJlbnQtZml0L2xzLnBhcmVudC1maXQnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCh7XHJcbiAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyQnV0dG9uJyksXHJcbiAgZHJhd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbkRyYXdlcicpLFxyXG4gIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluQ29udGVudCcpLFxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gIGFwcC5yZW5kZXJQYWdlKCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgYXBwLnJlbmRlclBhZ2UoKTtcclxuICBzd1JlZ2lzdGVyKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=