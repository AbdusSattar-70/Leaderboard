"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_getDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getDisplay.js */ "./src/modules/getDisplay.js");
/* harmony import */ var _modules_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/post.js */ "./src/modules/post.js");



const form = document.querySelector('.form');
form.addEventListener('click', event => {
  event.preventDefault();
  const {
    user,
    score
  } = form.elements;
  (0,_modules_post_js__WEBPACK_IMPORTED_MODULE_2__["default"])(user.value, score.value);
  (0,_modules_getDisplay_js__WEBPACK_IMPORTED_MODULE_1__.displayOnUI)();
  form.reset();
});
const refresh = () => {
  const body = document.querySelector('body');
  const refresh = document.querySelector('#refresh');
  refresh.addEventListener('click', () => {
    (0,_modules_getDisplay_js__WEBPACK_IMPORTED_MODULE_1__.getDataFromAPI)();
    (0,_modules_getDisplay_js__WEBPACK_IMPORTED_MODULE_1__.displayOnUI)();
    body.classList.toggle('refresh');
  });
};
refresh();
(0,_modules_getDisplay_js__WEBPACK_IMPORTED_MODULE_1__.displayOnUI)();

/***/ }),

/***/ "./src/modules/getDisplay.js":
/*!***********************************!*\
  !*** ./src/modules/getDisplay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayOnUI": () => (/* binding */ displayOnUI),
/* harmony export */   "getDataFromAPI": () => (/* binding */ getDataFromAPI)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


/* To get data from the API */

const getDataFromAPI = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const data = await response.json();
  return data;
};

/* for displaying on UI */
const displayOnUI = async () => {
  const data = await getDataFromAPI();
  const ul = document.querySelector('.displayScore');
  ul.innerHTML = '';
  data.result.forEach(users => {
    const li = document.createElement('li');
    li.innerText = ` ${users.user} : ${users.score} `;
    ul.appendChild(li);
  });
};


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


/* post or create player on API */
const postDataOnAPI = async (user, score) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user,
      score
    })
  };
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"], option);
  const data = await response.json();
  return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postDataOnAPI);

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
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1XSh9O6EI1Unx10Kgez8/scores/';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URL);

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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  overflow-x: hidden;\r\n  background-blend-mode: hard-light;\r\n  background-color: rgba(126, 15, 195, 0.044);\r\n}\r\n\r\n.mainSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.subContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.scoreContainer {\r\n  width: 50%;\r\n}\r\n\r\n.recentScore {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.displayScore {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n.displayScore li {\r\n  background-color: rgba(193, 137, 235, 0.129);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.recentScore h2 {\r\n  animation: focus 0.5s ease-in-out infinite;\r\n}\r\n\r\ninput {\r\n  width: 80%;\r\n  height: 2.5rem;\r\n  padding: 0.3rem;\r\n  outline: none;\r\n  border-color: rgba(246, 62, 62, 0.356);\r\n  border-radius: 0.3rem;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\ninput:hover {\r\n  width: 100%;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n::placeholder {\r\n  font-size: 1rem;\r\n  color: black;\r\n}\r\n\r\n.form h2 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  width: 5rem;\r\n  height: 2rem;\r\n  font-size: 1rem;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n  border-radius: 0.3rem;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n  color: red;\r\n  background-color: rgba(156, 60, 230, 0.272);\r\n}\r\n\r\n.refresh {\r\n  animation: refresh 1s ease-out;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes focus {\r\n  0% {\r\n    color: black;\r\n  }\r\n\r\n  100% {\r\n    color: rgb(238, 11, 11);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;EACjC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,cAAc;EACd,eAAe;EACf,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,kCAAkC;AACpC;;AAEA;;EAEE,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;EACf,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;;EAEE,UAAU;EACV,2CAA2C;AAC7C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,uBAAuB;EACzB;AACF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  overflow-x: hidden;\r\n  background-blend-mode: hard-light;\r\n  background-color: rgba(126, 15, 195, 0.044);\r\n}\r\n\r\n.mainSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  margin: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.subContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.scoreContainer {\r\n  width: 50%;\r\n}\r\n\r\n.recentScore {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.displayScore {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n.displayScore li {\r\n  background-color: rgba(193, 137, 235, 0.129);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.recentScore h2 {\r\n  animation: focus 0.5s ease-in-out infinite;\r\n}\r\n\r\ninput {\r\n  width: 80%;\r\n  height: 2.5rem;\r\n  padding: 0.3rem;\r\n  outline: none;\r\n  border-color: rgba(246, 62, 62, 0.356);\r\n  border-radius: 0.3rem;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\ninput:hover {\r\n  width: 100%;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n}\r\n\r\n::placeholder {\r\n  font-size: 1rem;\r\n  color: black;\r\n}\r\n\r\n.form h2 {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  width: 5rem;\r\n  height: 2rem;\r\n  font-size: 1rem;\r\n  border-color: rgba(221, 0, 255, 0.414);\r\n  border-radius: 0.3rem;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n  color: red;\r\n  background-color: rgba(156, 60, 230, 0.272);\r\n}\r\n\r\n.refresh {\r\n  animation: refresh 1s ease-out;\r\n}\r\n\r\n@keyframes refresh {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes focus {\r\n  0% {\r\n    color: black;\r\n  }\r\n\r\n  100% {\r\n    color: rgb(238, 11, 11);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9nZXREaXNwbGF5LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvcG9zdC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3VybC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IGdldERhdGFGcm9tQVBJLCBkaXNwbGF5T25VSSB9IGZyb20gJy4vbW9kdWxlcy9nZXREaXNwbGF5LmpzJztcbmltcG9ydCBwb3N0RGF0YU9uQVBJIGZyb20gJy4vbW9kdWxlcy9wb3N0LmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdXNlciwgc2NvcmUgfSA9IGZvcm0uZWxlbWVudHM7XG4gIHBvc3REYXRhT25BUEkodXNlci52YWx1ZSwgc2NvcmUudmFsdWUpO1xuICBkaXNwbGF5T25VSSgpO1xuICBmb3JtLnJlc2V0KCk7XG59KTtcblxuY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoJyk7XG4gIHJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2V0RGF0YUZyb21BUEkoKTtcbiAgICBkaXNwbGF5T25VSSgpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgncmVmcmVzaCcpO1xuICB9KTtcbn07XG5yZWZyZXNoKCk7XG5kaXNwbGF5T25VSSgpO1xuIiwiaW1wb3J0IFVSTCBmcm9tICcuL3VybC5qcyc7XG5cbi8qIFRvIGdldCBkYXRhIGZyb20gdGhlIEFQSSAqL1xuXG5jb25zdCBnZXREYXRhRnJvbUFQSSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8qIGZvciBkaXNwbGF5aW5nIG9uIFVJICovXG5jb25zdCBkaXNwbGF5T25VSSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tQVBJKCk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXlTY29yZScpO1xuICB1bC5pbm5lckhUTUwgPSAnJztcbiAgZGF0YS5yZXN1bHQuZm9yRWFjaCgodXNlcnMpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJUZXh0ID0gYCAke3VzZXJzLnVzZXJ9IDogJHt1c2Vycy5zY29yZX0gYDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZ2V0RGF0YUZyb21BUEksIGRpc3BsYXlPblVJIH07IiwiaW1wb3J0IFVSTCBmcm9tICcuL3VybC5qcyc7XG5cbi8qIHBvc3Qgb3IgY3JlYXRlIHBsYXllciBvbiBBUEkgKi9cbmNvbnN0IHBvc3REYXRhT25BUEkgPSBhc3luYyAodXNlciwgc2NvcmUpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXIsIHNjb3JlIH0pLFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwgb3B0aW9uKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0RGF0YU9uQVBJOyIsImNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy8xWFNoOU82RUkxVW54MTBLZ2V6OC9zY29yZXMvJztcbmV4cG9ydCBkZWZhdWx0IFVSTDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjYsIDE1LCAxOTUsIDAuMDQ0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5TZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbjogMS41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudFNjb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheVNjb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjEsIDAsIDI1NSwgMC40MTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheVNjb3JlIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkzLCAxMzcsIDIzNSwgMC4xMjkpO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50U2NvcmUgaDIge1xcclxcbiAgYW5pbWF0aW9uOiBmb2N1cyAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NiwgNjIsIDYyLCAwLjM1Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyxcXHJcXG5pbnB1dDpob3ZlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjEsIDAsIDI1NSwgMC40MTQpO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyMSwgMCwgMjU1LCAwLjQxNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCA2MCwgMjMwLCAwLjI3Mik7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIGFuaW1hdGlvbjogcmVmcmVzaCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByZWZyZXNoIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmb2N1cyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBjb2xvcjogcmdiKDIzOCwgMTEsIDExKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtFQUNmLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFVBQVU7RUFDViwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgMTUsIDE5NSwgMC4wNDQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zY29yZUNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50U2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5U2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMSwgMCwgMjU1LCAwLjQxNCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5U2NvcmUgbGkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTMsIDEzNywgMjM1LCAwLjEyOSk7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnRTY29yZSBoMiB7XFxyXFxuICBhbmltYXRpb246IGZvY3VzIDAuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjQ2LCA2MiwgNjIsIDAuMzU2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLFxcclxcbmlucHV0OmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyMSwgMCwgMjU1LCAwLjQxNCk7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMjIxLCAwLCAyNTUsIDAuNDE0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDYwLCAyMzAsIDAuMjcyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgYW5pbWF0aW9uOiByZWZyZXNoIDFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJlZnJlc2gge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZvY3VzIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjM4LCAxMSwgMTEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiZ2V0RGF0YUZyb21BUEkiLCJkaXNwbGF5T25VSSIsInBvc3REYXRhT25BUEkiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwic2NvcmUiLCJlbGVtZW50cyIsInZhbHVlIiwicmVzZXQiLCJyZWZyZXNoIiwiYm9keSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIlVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInVsIiwiaW5uZXJIVE1MIiwicmVzdWx0IiwiZm9yRWFjaCIsInVzZXJzIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJvcHRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=