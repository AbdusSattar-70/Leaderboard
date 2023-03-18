"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/post.js */ "./src/modules/post.js");


const displayScores = scores => {
  const ul = document.querySelector('.displayScore');
  ul.innerHTML = '';
  scores.forEach(user => {
    const li = document.createElement('li');
    li.innerText = `${user.user}: ${user.score}`;
    ul.appendChild(li);
  });
};
const sortScores = scores => scores.sort((a, b) => b.score - a.score);
const getScores = async () => {
  const data = await (0,_modules_post_js__WEBPACK_IMPORTED_MODULE_1__["default"])('GET');
  const scores = data.result.map(({
    user,
    score
  }) => ({
    user,
    score: parseInt(score, 10)
  }));
  const sortedScores = sortScores(scores);
  displayScores(sortedScores);
  return sortedScores;
};
const postScore = async (user, score) => {
  await (0,_modules_post_js__WEBPACK_IMPORTED_MODULE_1__["default"])('POST', {
    user,
    score
  });
};
const form = document.querySelector('.form');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const {
    user,
    score
  } = form.elements;
  await postScore(user.value, score.value);
  await getScores();
  form.reset();
});
const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', async () => {
  const scores = await getScores();
  displayScores(scores);
  window.location.reload();
});
getScores();

/***/ }),

/***/ "./src/modules/post.js":
/*!*****************************!*\
  !*** ./src/modules/post.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");

const requestAPI = async (method, data) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"], options);
  const result = await response.json();
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestAPI);

/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ESYWYUNGv25xXidEdUzi/scores/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIurl);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  overflow-x: hidden;\r\n  background-blend-mode: hard-light;\r\n  background-color: rgba(126, 15, 195, 0.044);\r\n}\r\n\r\n.mainSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  font-size: 3.5rem;\r\n  color: rgba(126, 15, 195, 0.044);\r\n  padding-top: 1rem;\r\n  padding-left: 1rem;\r\n  letter-spacing: 0.1em;\r\n  -webkit-text-stroke: 0.3vw rgba(247, 244, 244, 0);\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1::before {\r\n  content: attr(data-text);\r\n  padding-left: 1rem;\r\n  position: absolute;\r\n  padding-top: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  right: 50%;\r\n  width: 0;\r\n  height: 100%;\r\n  color: #066eaafe;\r\n  -webkit-text-stroke: 0 #d717f4;\r\n  animation: header 8s linear infinite;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes header {\r\n  0%,\r\n  10%,\r\n  100% {\r\n    width: 0;\r\n  }\r\n\r\n  70%,\r\n  90% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.subContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.scoreContainer {\r\n  width: 50%;\r\n}\r\n\r\n.recentScore {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.displayScore {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n.displayScore li {\r\n  background-color: rgba(193, 137, 235, 0.129);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.recentScore h2 {\r\n  animation: focus 0.5s ease-in-out infinite;\r\n}\r\n\r\ninput {\r\n  width: 80%;\r\n  height: 2.5rem;\r\n  padding: 0.3rem;\r\n  outline: none;\r\n  border-color: rgba(246, 62, 62, 0.356);\r\n  border-radius: 0.3rem;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\ninput:hover {\r\n  width: 100%;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n::placeholder {\r\n  font-size: 1rem;\r\n  color: black;\r\n}\r\n\r\n.form h2 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  width: 5rem;\r\n  height: 2rem;\r\n  font-size: 1rem;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n  border-radius: 0.3rem;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n  color: red;\r\n  background-color: rgba(156, 60, 230, 0.272);\r\n}\r\n\r\n/* Global styles for all devices */\r\n\r\n/* Styles for desktop and tablet devices */\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    margin: 0.5rem;\r\n  }\r\n\r\n  .mainSection {\r\n    width: 90%;\r\n    gap: 1rem;\r\n    margin: 1rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .subContainer {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .scoreContainer {\r\n    width: 80%;\r\n  }\r\n\r\n  .recentScore {\r\n    flex-direction: column;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .displayScore li {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  input {\r\n    width: 80%;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  button {\r\n    width: 80%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;EACjC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,iDAAiD;EACjD,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,MAAM;EACN,OAAO;EACP,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,gBAAgB;EAChB,8BAA8B;EAC9B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE;;;IAGE,QAAQ;EACV;;EAEA;;IAEE,WAAW;EACb;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,cAAc;EACd,eAAe;EACf,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,kCAAkC;AACpC;;AAEA;;EAEE,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;EACf,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;;EAEE,UAAU;EACV,2CAA2C;AAC7C;;AAEA,kCAAkC;;AAElC,0CAA0C;;AAE1C;EACE;IACE,cAAc;EAChB;;EAEA;IACE,UAAU;IACV,SAAS;IACT,YAAY;EACd;;EAEA;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  overflow-x: hidden;\r\n  background-blend-mode: hard-light;\r\n  background-color: rgba(126, 15, 195, 0.044);\r\n}\r\n\r\n.mainSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  position: relative;\r\n  font-size: 3.5rem;\r\n  color: rgba(126, 15, 195, 0.044);\r\n  padding-top: 1rem;\r\n  padding-left: 1rem;\r\n  letter-spacing: 0.1em;\r\n  -webkit-text-stroke: 0.3vw rgba(247, 244, 244, 0);\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1::before {\r\n  content: attr(data-text);\r\n  padding-left: 1rem;\r\n  position: absolute;\r\n  padding-top: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  right: 50%;\r\n  width: 0;\r\n  height: 100%;\r\n  color: #066eaafe;\r\n  -webkit-text-stroke: 0 #d717f4;\r\n  animation: header 8s linear infinite;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes header {\r\n  0%,\r\n  10%,\r\n  100% {\r\n    width: 0;\r\n  }\r\n\r\n  70%,\r\n  90% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.subContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.scoreContainer {\r\n  width: 50%;\r\n}\r\n\r\n.recentScore {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.displayScore {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n.displayScore li {\r\n  background-color: rgba(193, 137, 235, 0.129);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.recentScore h2 {\r\n  animation: focus 0.5s ease-in-out infinite;\r\n}\r\n\r\ninput {\r\n  width: 80%;\r\n  height: 2.5rem;\r\n  padding: 0.3rem;\r\n  outline: none;\r\n  border-color: rgba(246, 62, 62, 0.356);\r\n  border-radius: 0.3rem;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\ninput:hover {\r\n  width: 100%;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n::placeholder {\r\n  font-size: 1rem;\r\n  color: black;\r\n}\r\n\r\n.form h2 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  width: 5rem;\r\n  height: 2rem;\r\n  font-size: 1rem;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n  border-radius: 0.3rem;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n  color: red;\r\n  background-color: rgba(156, 60, 230, 0.272);\r\n}\r\n\r\n/* Global styles for all devices */\r\n\r\n/* Styles for desktop and tablet devices */\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    margin: 0.5rem;\r\n  }\r\n\r\n  .mainSection {\r\n    width: 90%;\r\n    gap: 1rem;\r\n    margin: 1rem;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .subContainer {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .scoreContainer {\r\n    width: 80%;\r\n  }\r\n\r\n  .recentScore {\r\n    flex-direction: column;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .displayScore li {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  input {\r\n    width: 80%;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  button {\r\n    width: 80%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9wb3N0LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvdXJsLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHJlcXVlc3RBUEkgZnJvbSAnLi9tb2R1bGVzL3Bvc3QuanMnO1xuXG5jb25zdCBkaXNwbGF5U2NvcmVzID0gKHNjb3JlcykgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5U2NvcmUnKTtcbiAgdWwuaW5uZXJIVE1MID0gJyc7XG4gIHNjb3Jlcy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVyVGV4dCA9IGAke3VzZXIudXNlcn06ICR7dXNlci5zY29yZX1gO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzb3J0U2NvcmVzID0gKHNjb3JlcykgPT4gc2NvcmVzLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcbmNvbnN0IGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3RBUEkoJ0dFVCcpO1xuICBjb25zdCBzY29yZXMgPSBkYXRhLnJlc3VsdC5tYXAoKHsgdXNlciwgc2NvcmUgfSkgPT4gKHsgdXNlciwgc2NvcmU6IHBhcnNlSW50KHNjb3JlLCAxMCkgfSkpO1xuICBjb25zdCBzb3J0ZWRTY29yZXMgPSBzb3J0U2NvcmVzKHNjb3Jlcyk7XG4gIGRpc3BsYXlTY29yZXMoc29ydGVkU2NvcmVzKTtcbiAgcmV0dXJuIHNvcnRlZFNjb3Jlcztcbn07XG5cbmNvbnN0IHBvc3RTY29yZSA9IGFzeW5jICh1c2VyLCBzY29yZSkgPT4ge1xuICBhd2FpdCByZXF1ZXN0QVBJKCdQT1NUJywgeyB1c2VyLCBzY29yZSB9KTtcbn07XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgeyB1c2VyLCBzY29yZSB9ID0gZm9ybS5lbGVtZW50cztcbiAgYXdhaXQgcG9zdFNjb3JlKHVzZXIudmFsdWUsIHNjb3JlLnZhbHVlKTtcbiAgYXdhaXQgZ2V0U2NvcmVzKCk7XG4gIGZvcm0ucmVzZXQoKTtcbn0pO1xuXG5jb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gnKTtcbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlcyA9IGF3YWl0IGdldFNjb3JlcygpO1xuICBkaXNwbGF5U2NvcmVzKHNjb3Jlcyk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5nZXRTY29yZXMoKTsiLCJpbXBvcnQgQVBJdXJsIGZyb20gJy4vdXJsLmpzJztcblxuY29uc3QgcmVxdWVzdEFQSSA9IGFzeW5jIChtZXRob2QsIGRhdGEpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSXVybCwgb3B0aW9ucyk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RBUEk7IiwiY29uc3QgQVBJdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL0VTWVdZVU5HdjI1eFhpZEVkVXppL3Njb3Jlcy8nO1xuXG5leHBvcnQgZGVmYXVsdCBBUEl1cmw7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxNSwgMTk1LCAwLjA0NCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBtYXJnaW46IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDEyNiwgMTUsIDE5NSwgMC4wNDQpO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjN2dyByZ2JhKDI0NywgMjQ0LCAyNDQsIDApO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogNTAlO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogIzA2NmVhYWZlO1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMCAjZDcxN2Y0O1xcclxcbiAgYW5pbWF0aW9uOiBoZWFkZXIgOHMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBoZWFkZXIge1xcclxcbiAgMCUsXFxyXFxuICAxMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3MCUsXFxyXFxuICA5MCUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YkNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnRTY29yZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlTY29yZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIxLCAwLCAyNTUsIDAuNDE0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlTY29yZSBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MywgMTM3LCAyMzUsIDAuMTI5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudFNjb3JlIGgyIHtcXHJcXG4gIGFuaW1hdGlvbjogZm9jdXMgMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDYsIDYyLCA2MiwgMC4zNTYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsXFxyXFxuaW5wdXQ6aG92ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjIxLCAwLCAyNTUsIDAuNDE0KTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjEsIDAsIDI1NSwgMC40MTQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgNjAsIDIzMCwgMC4yNzIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHbG9iYWwgc3R5bGVzIGZvciBhbGwgZGV2aWNlcyAqL1xcclxcblxcclxcbi8qIFN0eWxlcyBmb3IgZGVza3RvcCBhbmQgdGFibGV0IGRldmljZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluU2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdWJDb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNlbnRTY29yZSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzcGxheVNjb3JlIGxpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXQge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpREFBaUQ7RUFDakQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7OztJQUdFLFFBQVE7RUFDVjs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLDJDQUEyQztBQUM3Qzs7QUFFQSxrQ0FBa0M7O0FBRWxDLDBDQUEwQzs7QUFFMUM7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgMTUsIDE5NSwgMC4wNDQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBjb2xvcjogcmdiYSgxMjYsIDE1LCAxOTUsIDAuMDQ0KTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zdncgcmdiYSgyNDcsIDI0NCwgMjQ0LCAwKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbmgxOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY29sb3I6ICMwNjZlYWFmZTtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAgI2Q3MTdmNDtcXHJcXG4gIGFuaW1hdGlvbjogaGVhZGVyIDhzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaGVhZGVyIHtcXHJcXG4gIDAlLFxcclxcbiAgMTAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzAlLFxcclxcbiAgOTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdWJDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zY29yZUNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50U2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5U2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMSwgMCwgMjU1LCAwLjQxNCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5U2NvcmUgbGkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTMsIDEzNywgMjM1LCAwLjEyOSk7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnRTY29yZSBoMiB7XFxyXFxuICBhbmltYXRpb246IGZvY3VzIDAuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjQ2LCA2MiwgNjIsIDAuMzU2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLFxcclxcbmlucHV0OmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyMSwgMCwgMjU1LCAwLjQxNCk7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjIxLCAwLCAyNTUsIDAuNDE0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDYwLCAyMzAsIDAuMjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2xvYmFsIHN0eWxlcyBmb3IgYWxsIGRldmljZXMgKi9cXHJcXG5cXHJcXG4vKiBTdHlsZXMgZm9yIGRlc2t0b3AgYW5kIHRhYmxldCBkZXZpY2VzICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpblNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3ViQ29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZUNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjZW50U2NvcmUge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXlTY29yZSBsaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJyZXF1ZXN0QVBJIiwiZGlzcGxheVNjb3JlcyIsInNjb3JlcyIsInVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInVzZXIiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJzY29yZSIsImFwcGVuZENoaWxkIiwic29ydFNjb3JlcyIsInNvcnQiLCJhIiwiYiIsImdldFNjb3JlcyIsImRhdGEiLCJyZXN1bHQiLCJtYXAiLCJwYXJzZUludCIsInNvcnRlZFNjb3JlcyIsInBvc3RTY29yZSIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRzIiwidmFsdWUiLCJyZXNldCIsInJlZnJlc2hCdXR0b24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIkFQSXVybCIsIm1ldGhvZCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=