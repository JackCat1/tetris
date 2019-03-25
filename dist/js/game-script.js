/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/scenes */ "./src/scenes/scenes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"]();
    this.scenes = _scenes_scenes__WEBPACK_IMPORTED_MODULE_1__["scenes"];
    this.currentScene = 1;
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.scenes[this.currentScene].init(this.screen).then(function () {
        console.log(_this.currentScene);

        _this.changeScene();

        console.log(_this.currentScene);

        _this.init();
      });
    }
  }, {
    key: "changeScene",
    value: function changeScene() {
      if (this.currentScene === this.scenes.length - 1) this.currentScene = 0;else this.currentScene++;
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  console.log('Game start...');
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  game.init();
};

/***/ }),

/***/ "./src/scenes/begin/begin.js":
/*!***********************************!*\
  !*** ./src/scenes/begin/begin.js ***!
  \***********************************/
/*! exports provided: Begin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Begin", function() { return Begin; });
/* harmony import */ var _beginView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beginView */ "./src/scenes/begin/beginView.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Begin =
/*#__PURE__*/
function () {
  function Begin() {
    _classCallCheck(this, Begin);

    console.log('I am Begin scene');
    this.view = new _beginView__WEBPACK_IMPORTED_MODULE_0__["BeginView"]();
  }

  _createClass(Begin, [{
    key: "init",
    value: function init(screen) {
      var _this = this;

      this.screen = screen;
      return new Promise(function (resolve, reject) {
        var control = _this.view.render(_this.screen);

        control.button.addEventListener('click', function () {
          _this.screen.removeElement(control.div);

          resolve();
        });
      });
    }
  }]);

  return Begin;
}();

/***/ }),

/***/ "./src/scenes/begin/beginView.js":
/*!***************************************!*\
  !*** ./src/scenes/begin/beginView.js ***!
  \***************************************/
/*! exports provided: BeginView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginView", function() { return BeginView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BeginView =
/*#__PURE__*/
function () {
  function BeginView() {
    _classCallCheck(this, BeginView);

    console.log('View builded');
    this.pic = new Image();
    this.pic.src = 'media/fon1.jpg';
    this.butText = 'START';
  }

  _createClass(BeginView, [{
    key: "render",
    value: function render(screen) {
      console.log('Rernder start'); //Обертка

      var div = screen.buildElemment('div');
      div.id = 'scene1'; //Кнопка старта

      var button = screen.buildElemment('a', '', div);
      button.text = this.butText;
      button.id = 'start-btn'; //Стили офрмления сцены

      var style = screen.buildElemment('style', '', div);
      style.innerText = "\n                            #scene1{\n                                min-height:100%;\n                                background: url(".concat(this.pic.src, ");\n                                position: relative;\n                            }\n                            #start-btn{\n                                font-family: BancoDi;\n                                font-size: 60px;\n                                color: white;\n                                text-shadow:1px 3px 15px red;\n                                position: absolute;\n                                top:40%;\n                                left:40%;\n                                \n                            }\n                            #start-btn:hover{\n                                cursor:pointer;\n                                font-size:62px;\n                            }                            \n                            ");
      return {
        div: div,
        button: button
      };
    }
  }]);

  return BeginView;
}();

/***/ }),

/***/ "./src/scenes/scenes.js":
/*!******************************!*\
  !*** ./src/scenes/scenes.js ***!
  \******************************/
/*! exports provided: scenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scenes", function() { return scenes; });
/* harmony import */ var _begin_begin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./begin/begin */ "./src/scenes/begin/begin.js");
/* harmony import */ var _tetris_tetris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetris/tetris */ "./src/scenes/tetris/tetris.js");


var scenes = [new _begin_begin__WEBPACK_IMPORTED_MODULE_0__["Begin"](), new _tetris_tetris__WEBPACK_IMPORTED_MODULE_1__["Tetris"]()];

/***/ }),

/***/ "./src/scenes/tetris/tetris.js":
/*!*************************************!*\
  !*** ./src/scenes/tetris/tetris.js ***!
  \*************************************/
/*! exports provided: Tetris */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tetris", function() { return Tetris; });
/* harmony import */ var _tetrisView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tetrisView */ "./src/scenes/tetris/tetrisView.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Tetris =
/*#__PURE__*/
function () {
  function Tetris() {
    _classCallCheck(this, Tetris);

    this.view = new _tetrisView__WEBPACK_IMPORTED_MODULE_0__["TetrisView"]();
  }

  _createClass(Tetris, [{
    key: "init",
    value: function init(screen) {
      var _this = this;

      console.log('Tetris Build');
      this.screen = screen;
      return new Promise(function (resolve, reject) {
        var control = _this.view.render(_this.screen);

        _this.result = control.output.innerText;
        _this.startControl = control.startBtn;
        _this.startControl.onclick = _this.start;
        _this.endControl = control.stopBtn;

        _this.endControl.onclick = function () {
          screen.removeElement(control.mainDiv);
          resolve();
        };
      });
    }
  }, {
    key: "start",
    value: function start() {
      console.log('Game start');
    }
  }]);

  return Tetris;
}();

/***/ }),

/***/ "./src/scenes/tetris/tetrisView.js":
/*!*****************************************!*\
  !*** ./src/scenes/tetris/tetrisView.js ***!
  \*****************************************/
/*! exports provided: TetrisView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrisView", function() { return TetrisView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TetrisView =
/*#__PURE__*/
function () {
  function TetrisView() {
    _classCallCheck(this, TetrisView);

    this.blockImg = new Image();
    this.blockImg.src = 'media/blocks.png';
    this.sliceImg(this.blockImg);
  }

  _createClass(TetrisView, [{
    key: "sliceImg",
    value: function sliceImg(img) {
      var _this = this;

      img.onload = function () {
        var height = img.height;
        var blocksCoord = [];

        for (var index = 0; index < img.width; index += height) {
          blocksCoord.push(index);
        }

        _this.blocks = {
          blocksCoord: blocksCoord,
          height: height
        };
      };
    }
  }, {
    key: "render",
    value: function render(screen) {
      // Создаем обертку
      var mainDiv = screen.buildElemment('div');
      mainDiv.id = 'main'; //Создаем табло для вывода информации

      var tablo = screen.buildElemment('div', '', mainDiv);
      tablo.id = 'tablo'; // Создаем канвас

      var canvas = screen.buildElemment('canvas', '', mainDiv);
      canvas.id = 'canvas';
      canvas.width = screen.width / 2;
      canvas.height = screen.height; //Создаем стили оформления

      var style = screen.buildElemment('style', '', mainDiv);
      style.innerText = "\n                            #main{\n                                height: ".concat(screen.height, "px;                                \n                                width:").concat(screen.width, "px;\n                                position:relative;\n                                background: url(media/fon1.jpg);                                \n                            }\n                            #tablo{\n                                height: ").concat(screen.height, "px;                                \n                                width:").concat(screen.width / 2, "px;\n                                float: left;\n                                \n                                \n                            }\n                            #canvas{\n                                position:absolute;\n                                display:block;\n                                right:0;\n                                background: rgb(0,0,0,0.5);\n                                border: 2px solid rgb(255, 153, 51);\n                                border-radius: 5px;                                \n                            }\n                            .result{\n                                text-align: center;\n                            }\n                            .label,.output{\n                                margin: 5px 0;\n                            }\n                            .label{\n                                font: bold 20px san-serif;\n                                color:white;\n                            }\n                            .output{\n                                font: 40px BancoDi;\n                                color: yellow;\n                            }\n                            .panel{\n                                margin: 100px 0;\n                            }\n                            .btn{\n                                display:block;\n                                text-align: center;\n                                font: 60px BancoDi;\n                                color: white;\n                                text-shadow:1px 3px 15px red;\n                                margin: 30px 0;\n                            }\n                            .btn:hover{\n                                cursor:pointer;\n                                font-size: 64px;\n                            }\n                        "); //Создаем табло для вывода очков

      var result = screen.buildElemment('div', 'result', tablo);
      var label = screen.buildElemment('p', 'label', result);
      label.innerText = 'Очки:';
      var output = screen.buildElemment('p', 'output', result);
      output.innerText = '000'; //Создаем панель управления

      var panel = screen.buildElemment('div', 'panel', tablo);
      var startBtn = screen.buildElemment('a', 'btn', panel);
      startBtn.innerText = 'START';
      var stopBtn = screen.buildElemment('a', 'btn', panel);
      stopBtn.innerText = 'Stop'; //Дополняем свойства объекта

      this.canvas = canvas.getContext('2d'); //Возращаем контроллеру

      return {
        mainDiv: mainDiv,
        output: output,
        startBtn: startBtn,
        stopBtn: stopBtn
      };
    }
  }]);

  return TetrisView;
}();

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Screen =
/*#__PURE__*/
function () {
  function Screen() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 640;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 640;

    _classCallCheck(this, Screen);

    //Первоначальная настройка экрана
    this.width = width;
    this.height = height;
    this.body = document.body;
    this.body.style.width = this.width + 'px';
    this.body.style.height = this.height + 'px';
  } //Создать элемент на экране


  _createClass(Screen, [{
    key: "buildElemment",
    value: function buildElemment(elem) {
      var elemClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.body;
      var element = document.createElement(elem);
      element.setAttribute('class', elemClass);
      parent.appendChild(element);
      return element;
    } //Удалить елемент с экрана

  }, {
    key: "removeElement",
    value: function removeElement(element) {
      return element.remove();
    }
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYmVnaW4vYmVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iZWdpbi9iZWdpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zY2VuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXRyaXMvdGV0cmlzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGV0cmlzL3RldHJpc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwic2NlbmVzIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlU2NlbmUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnYW1lIiwiQmVnaW4iLCJ2aWV3IiwiQmVnaW5WaWV3IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250cm9sIiwicmVuZGVyIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUVsZW1lbnQiLCJkaXYiLCJwaWMiLCJJbWFnZSIsInNyYyIsImJ1dFRleHQiLCJidWlsZEVsZW1tZW50IiwiaWQiLCJ0ZXh0Iiwic3R5bGUiLCJpbm5lclRleHQiLCJUZXRyaXMiLCJUZXRyaXNWaWV3IiwicmVzdWx0Iiwib3V0cHV0Iiwic3RhcnRDb250cm9sIiwic3RhcnRCdG4iLCJvbmNsaWNrIiwic3RhcnQiLCJlbmRDb250cm9sIiwic3RvcEJ0biIsIm1haW5EaXYiLCJibG9ja0ltZyIsInNsaWNlSW1nIiwiaW1nIiwiaGVpZ2h0IiwiYmxvY2tzQ29vcmQiLCJpbmRleCIsIndpZHRoIiwicHVzaCIsImJsb2NrcyIsInRhYmxvIiwiY2FudmFzIiwibGFiZWwiLCJwYW5lbCIsImdldENvbnRleHQiLCJib2R5IiwiZG9jdW1lbnQiLCJlbGVtIiwiZWxlbUNsYXNzIiwicGFyZW50IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUdPLElBQU1BLElBQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQWE7QUFBQTs7QUFDVCxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsOENBQUosRUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EscURBQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0g7O0FBTEw7QUFBQTtBQUFBLDJCQU1VO0FBQUE7O0FBQ0YsV0FBS0QsTUFBTCxDQUFZLEtBQUtDLFlBQWpCLEVBQStCQyxJQUEvQixDQUFvQyxLQUFLSixN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QUFyQixFQUE2QkosU0FBN0I7QUFDQUMsWUFBTSxDQUFDSSxXQUFQLENBQW1CSCxPQUFuQjtBQUNBLGFBQU9BLE9BQVA7QUFDSCxLQWZMLENBZ0JJOztBQWhCSjtBQUFBO0FBQUEsa0NBaUJrQkEsT0FqQmxCLEVBaUIwQjtBQUNsQixhQUFPQSxPQUFPLENBQUNJLE1BQVIsRUFBUDtBQUNIO0FBbkJMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy9nYW1lLXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7c2NlbmVzfSBmcm9tICcuL3NjZW5lcy9zY2VuZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1le1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHNjZW5lcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IDE7ICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZV0uaW5pdCh0aGlzLnNjcmVlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT57ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFNjZW5lKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2hhbmdlU2NlbmUoKXsgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lID09PSB0aGlzLnNjZW5lcy5sZW5ndGggLSAxKSB0aGlzLmN1cnJlbnRTY2VuZT0wOyAgICAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgdGhpcy5jdXJyZW50U2NlbmUrKzsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG53aW5kb3cub25sb2FkID0gKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0Li4uJyk7XHJcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxuICAgIFxyXG59O1xyXG4iLCJpbXBvcnQge0JlZ2luVmlld30gZnJvbSAnLi9iZWdpblZpZXcnO1xyXG5leHBvcnQgY2xhc3MgQmVnaW57XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJIGFtIEJlZ2luIHNjZW5lJyk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEJlZ2luVmlldygpOyAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0KHNjcmVlbil7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMudmlldy5yZW5kZXIodGhpcy5zY3JlZW4pO1xyXG4gICAgICAgICAgICBjb250cm9sLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLnJlbW92ZUVsZW1lbnQoY29udHJvbC5kaXYpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0gICBcclxufSIsImV4cG9ydCBjbGFzcyBCZWdpblZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWV3IGJ1aWxkZWQnKTtcclxuICAgICAgICB0aGlzLnBpYyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMucGljLnNyYyA9ICdtZWRpYS9mb24xLmpwZyc7XHJcbiAgICAgICAgdGhpcy5idXRUZXh0ID0gJ1NUQVJUJzsgICAgICBcclxuICAgIH1cclxuICAgIHJlbmRlcihzY3JlZW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXJuZGVyIHN0YXJ0Jyk7XHJcbiAgICAgICAgLy/QntCx0LXRgNGC0LrQsFxyXG4gICAgICAgIGxldCBkaXYgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmlkID0gJ3NjZW5lMSc7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8v0JrQvdC+0L/QutCwINGB0YLQsNGA0YLQsFxyXG4gICAgICAgIGxldCBidXR0b24gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnYScsJycsZGl2KTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uLnRleHQgPSB0aGlzLmJ1dFRleHQ7XHJcbiAgICAgICAgYnV0dG9uLmlkID0gJ3N0YXJ0LWJ0bic7IFxyXG4gICAgICAgIC8v0KHRgtC40LvQuCDQvtGE0YDQvNC70LXQvdC40Y8g0YHRhtC10L3Ri1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdzdHlsZScsJycsZGl2KTtcclxuICAgICAgICBzdHlsZS5pbm5lclRleHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc2NlbmUxe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHt0aGlzLnBpYy5zcmN9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RhcnQtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYW5jb0RpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6MXB4IDNweCAxNXB4IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzdGFydC1idG46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4ge2RpdixidXR0b259O1xyXG4gICAgfSAgICBcclxufSIsImltcG9ydCB7QmVnaW59IGZyb20gJy4vYmVnaW4vYmVnaW4nO1xyXG5pbXBvcnQge1RldHJpc30gZnJvbSAnLi90ZXRyaXMvdGV0cmlzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXHJcbiAgICBuZXcgQmVnaW4oKSxcclxuICAgIG5ldyBUZXRyaXMoKVxyXG5dOyIsImltcG9ydCB7VGV0cmlzVmlld30gZnJvbSAnLi90ZXRyaXNWaWV3JztcclxuZXhwb3J0IGNsYXNzIFRldHJpc3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFRldHJpc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0KHNjcmVlbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RldHJpcyBCdWlsZCcpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLnZpZXcucmVuZGVyKHRoaXMuc2NyZWVuKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBjb250cm9sLm91dHB1dC5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb250cm9sID0gY29udHJvbC5zdGFydEJ0bjtcclxuICAgICAgICAgICAgdGhpcy5zdGFydENvbnRyb2wub25jbGljayA9IHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ29udHJvbCA9IGNvbnRyb2wuc3RvcEJ0bjtcclxuICAgICAgICAgICAgdGhpcy5lbmRDb250cm9sLm9uY2xpY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2NyZWVuLnJlbW92ZUVsZW1lbnQoY29udHJvbC5tYWluRGl2KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0Jyk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFRldHJpc1ZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYmxvY2tJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmJsb2NrSW1nLnNyYyA9ICdtZWRpYS9ibG9ja3MucG5nJztcclxuICAgICAgICB0aGlzLnNsaWNlSW1nKHRoaXMuYmxvY2tJbWcpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2xpY2VJbWcoaW1nKXtcclxuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGltZy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBibG9ja3NDb29yZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4PTA7aW5kZXg8aW1nLndpZHRoO2luZGV4ICs9IGhlaWdodCkgYmxvY2tzQ29vcmQucHVzaChpbmRleCk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSB7YmxvY2tzQ29vcmQsaGVpZ2h0fTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHNjcmVlbil7XHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0L7QsdC10YDRgtC60YNcclxuICAgICAgICBsZXQgbWFpbkRpdiA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdkaXYnKTtcclxuICAgICAgICBtYWluRGl2LmlkID0gJ21haW4nO1xyXG4gICAgICAgIC8v0KHQvtC30LTQsNC10Lwg0YLQsNCx0LvQviDQtNC70Y8g0LLRi9Cy0L7QtNCwINC40L3RhNC+0YDQvNCw0YbQuNC4XHJcbiAgICAgICAgbGV0IHRhYmxvID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicsJycsbWFpbkRpdik7XHJcbiAgICAgICAgdGFibG8uaWQgPSAndGFibG8nO1xyXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC60LDQvdCy0LDRgVxyXG4gICAgICAgIGxldCBjYW52YXMgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnY2FudmFzJywnJyxtYWluRGl2KTtcclxuICAgICAgICBjYW52YXMuaWQgPSAnY2FudmFzJztcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzY3JlZW4ud2lkdGgvMjtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2NyZWVuLmhlaWdodDtcclxuICAgICAgICAvL9Ch0L7Qt9C00LDQtdC8INGB0YLQuNC70Lgg0L7RhNC+0YDQvNC70LXQvdC40Y9cclxuICAgICAgICBsZXQgc3R5bGUgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnc3R5bGUnLCcnLG1haW5EaXYpO1xyXG4gICAgICAgIHN0eWxlLmlubmVyVGV4dCA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWFpbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7c2NyZWVuLmhlaWdodH1weDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiR7c2NyZWVuLndpZHRofXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChtZWRpYS9mb24xLmpwZyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0YWJsb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7c2NyZWVuLmhlaWdodH1weDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiR7c2NyZWVuLndpZHRoLzJ9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FudmFze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxNTMsIDUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsLC5vdXRwdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBib2xkIDIwcHggc2FuLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiA0MHB4IEJhbmNvRGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDYwcHggQmFuY29EaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6MXB4IDNweCAxNXB4IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idG46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v0KHQvtC30LTQsNC10Lwg0YLQsNCx0LvQviDQtNC70Y8g0LLRi9Cy0L7QtNCwINC+0YfQutC+0LJcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicsJ3Jlc3VsdCcsdGFibG8pO1xyXG4gICAgICAgIGxldCBsYWJlbCA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdwJywnbGFiZWwnLHJlc3VsdCk7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ9Ce0YfQutC4Oic7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdwJywnb3V0cHV0JyxyZXN1bHQpO1xyXG4gICAgICAgIG91dHB1dC5pbm5lclRleHQgPSAnMDAwJztcclxuXHJcbiAgICAgICAgLy/QodC+0LfQtNCw0LXQvCDQv9Cw0L3QtdC70Ywg0YPQv9GA0LDQstC70LXQvdC40Y9cclxuICAgICAgICBsZXQgcGFuZWwgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2JywncGFuZWwnLHRhYmxvKTtcclxuICAgICAgICBsZXQgc3RhcnRCdG4gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnYScsJ2J0bicscGFuZWwpO1xyXG4gICAgICAgIHN0YXJ0QnRuLmlubmVyVGV4dCA9ICdTVEFSVCc7XHJcbiAgICAgICAgbGV0IHN0b3BCdG4gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnYScsJ2J0bicscGFuZWwpO1xyXG4gICAgICAgIHN0b3BCdG4uaW5uZXJUZXh0ID0gJ1N0b3AnO1xyXG5cclxuICAgICAgICAvL9CU0L7Qv9C+0LvQvdGP0LXQvCDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtCwXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgLy/QktC+0LfRgNCw0YnQsNC10Lwg0LrQvtC90YLRgNC+0LvQu9C10YDRg1xyXG4gICAgICAgIHJldHVybiB7bWFpbkRpdixvdXRwdXQsIHN0YXJ0QnRuLCBzdG9wQnRufTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY3JlZW57XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aD02NDAsaGVpZ2h0PTY0MCl7XHJcbiAgICAgICAgLy/Qn9C10YDQstC+0L3QsNGH0LDQu9GM0L3QsNGPINC90LDRgdGC0YDQvtC50LrQsCDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLndpZHRoPXdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PWhlaWdodDtcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHRoaXMuYm9keS5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGgrJ3B4JztcclxuICAgICAgICB0aGlzLmJvZHkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQrJ3B4JzsgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0KHQvtC30LTQsNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L3QsCDRjdC60YDQsNC90LVcclxuICAgIGJ1aWxkRWxlbW1lbnQoZWxlbSxlbGVtQ2xhc3M9JycscGFyZW50PXRoaXMuYm9keSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsZWxlbUNsYXNzKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL9Cj0LTQsNC70LjRgtGMINC10LvQtdC80LXQvdGCINGBINGN0LrRgNCw0L3QsFxyXG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==