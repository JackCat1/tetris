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
        _this.changeScene();

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

/***/ "./src/scenes/tetris/figure.js":
/*!*************************************!*\
  !*** ./src/scenes/tetris/figure.js ***!
  \*************************************/
/*! exports provided: Figure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Figure =
/*#__PURE__*/
function () {
  function Figure(startBlock, type, base) {
    _classCallCheck(this, Figure);

    this.type = type;
    this.base = base;
    this.body = this.build(type, startBlock);
  }

  _createClass(Figure, [{
    key: "round",
    value: function round() {
      switch (this.type) {
        //Figure I
        case 0:
          if (this.body[0] + 1 === this.body[1]) {
            var _x = this.body[1];
            this.body[0] = _x + 10;
            this.body[1] = _x;
            this.body[2] = _x - 10;
            this.body[3] = _x - 20;
          } else {
            var _x2 = this.body[0];
            this.body[0] = _x2;
            this.body[1] = _x2 + 1;
            this.body[2] = _x2 + 2;
            this.body[3] = _x2 + 3;
          }

          break;
        //Figure J

        case 1:
          var firureView = -1;
          if (this.body[0] + 11 === this.body[2]) firureView = 0;
          if (this.body[0] - 9 === this.body[2]) firureView = 1;
          if (this.body[0] + 2 === this.body[2]) firureView = 2;
          if (this.body[0] + 10 === this.body[2]) firureView = 3;
          var x;

          switch (firureView) {
            case 0:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x - 9;
              this.body[3] = x - 19;
              break;

            case 1:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 2;
              this.body[3] = x + 12;
              break;

            case 2:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 10;
              this.body[3] = x + 20;
              break;

            case 3:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 10;
              this.body[2] = x + 11;
              this.body[3] = x + 12;
              break;
          }

          break;
        //Figure L

        case 2:
          firureView = -1;
          if (this.body[0] + 20 === this.body[2]) firureView = 0;
          if (this.body[0] + 2 === this.body[2]) firureView = 1;
          if (this.body[0] + 11 === this.body[2]) firureView = 2;
          if (this.body[0] - 9 === this.body[2]) firureView = 3;

          switch (firureView) {
            case 0:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 2;
              this.body[3] = x - 8;
              break;

            case 1:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 11;
              this.body[3] = x + 21;
              break;

            case 2:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x - 10;
              this.body[2] = x - 9;
              this.body[3] = x - 8;
              break;

            case 3:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 10;
              this.body[2] = x + 20;
              this.body[3] = x + 21;
              break;
          }

          break;
        //Figure O

        case 3:
          break;
        //Figure S

        case 4:
          firureView = -1;
          if (this.body[0] + 11 === this.body[2]) firureView = 0;
          if (this.body[0] - 9 === this.body[2]) firureView = 1;

          switch (firureView) {
            case 0:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x - 9;
              this.body[3] = x - 8;
              break;

            case 1:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 10;
              this.body[2] = x + 11;
              this.body[3] = x + 21;
              break;
          }

          break;
        //Figure T

        case 5:
          firureView = -1;
          if (this.body[0] + 2 === this.body[2]) firureView = 0;
          if (this.body[0] - 20 === this.body[2]) firureView = 1;
          if (this.body[0] - 9 === this.body[2]) firureView = 2;
          if (this.body[0] + 11 === this.body[2] && this.body[0] - 9 === this.body[3]) firureView = 3;

          switch (firureView) {
            case 0:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x - 10;
              this.body[2] = x - 20;
              this.body[3] = x - 9;
              break;

            case 1:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x - 9;
              this.body[3] = x + 2;
              break;

            case 2:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 11;
              this.body[3] = x - 9;
              break;

            case 3:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 2;
              this.body[3] = x + 11;
              break;
          }

          break;
        //Figure Z

        case 6:
          firureView = -1;
          if (this.body[0] + 11 === this.body[2]) firureView = 0;
          if (this.body[0] - 9 === this.body[2]) firureView = 1;

          switch (firureView) {
            case 0:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x - 10;
              this.body[2] = x - 9;
              this.body[3] = x - 19;
              break;

            case 1:
              x = this.body[0];
              this.body[0] = x;
              this.body[1] = x + 1;
              this.body[2] = x + 11;
              this.body[3] = x + 12;
              break;
          }

          break;
      }
    }
  }, {
    key: "toLeft",
    value: function toLeft() {
      for (var i = 0; i < this.body.length; i++) {
        this.body[i] = this.body[i] - 1;
      }
    }
  }, {
    key: "toRight",
    value: function toRight() {
      for (var i = 0; i < this.body.length; i++) {
        this.body[i] = this.body[i] + 1;
      }
    }
  }, {
    key: "toDown",
    value: function toDown() {
      for (var i = 0; i < this.body.length; i++) {
        this.body[i] = this.body[i] + 10;
      }
    }
  }, {
    key: "build",
    value: function build(type, x) {
      var body = [];
      /*0-координата за левую границу
      3-координата за правую границу
      2-координата за низ        
      */

      switch (type) {
        //Figure I
        case 0:
          body = [x, x + 1, x + 2, x + 3];
          break;
        //Figure J

        case 1:
          body = [x, x + 10, x + 11, x + 12];
          break;
        //Figure L

        case 2:
          body = [x, x + 10, x + 20, x + 21];
          break;
        //Figure O

        case 3:
          body = [x, x + 1, x + 10, x + 11];
          break;
        //Figure S

        case 4:
          body = [x, x + 10, x + 11, x + 21];
          break;
        //Figure T

        case 5:
          body = [x, x + 1, x + 2, x + 11];
          break;
        //Figure Z

        case 6:
          body = [x, x + 1, x + 11, x + 12];
          break;
      }

      return body;
    }
  }]);

  return Figure;
}();

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
/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figure */ "./src/scenes/tetris/figure.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Tetris =
/*#__PURE__*/
function () {
  function Tetris() {
    _classCallCheck(this, Tetris);

    this.view = new _tetrisView__WEBPACK_IMPORTED_MODULE_0__["TetrisView"]();
    this.gameSpeed = 300;
  }

  _createClass(Tetris, [{
    key: "init",
    value: function init(screen) {
      var _this = this;

      this.screen = screen;
      return new Promise(function (resolve, reject) {
        var control = _this.view.render(_this.screen);

        _this.result = control.output;
        _this.startControl = control.startBtn;

        _this.startControl.addEventListener('click', function () {
          _this.matrix = _this.sliceCanvas();
          _this.curretFigire = _this.getFigure();
          _this.intervalId = _this.downFigure();
          _this.isPauseGame = false;
          document.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
              case 37:
                _this.isLeft();

                break;

              case 39:
                _this.isRight();

                break;

              case 40:
                _this.isBottom(); //this.curretFigire.toDown();                            


                break;

              case 38:
                _this.isRound();

                break;

              case 32:
                if (_this.isPauseGame) {
                  _this.intervalId = _this.downFigure();
                } else {
                  clearInterval(_this.intervalId);
                }

                _this.isPauseGame = !_this.isPauseGame;
                break;
            }
          });

          _this.upSpeed();

          _this.loop();
        });

        _this.endControl = control.stopBtn;

        _this.endControl.onclick = function () {
          screen.removeElement(control.mainDiv);
          resolve();
        };
      });
    }
  }, {
    key: "loop",
    value: function loop() {
      var _this2 = this;

      this.stopLoop = window.requestAnimationFrame(this.loop.bind(this)); //Очищаем канвас

      this.view.clearCanvas(); //Строим фигуру

      this.curretFigire.body.forEach(function (item) {
        _this2.view.addBlock(_this2.curretFigire.base, _this2.matrix[item].x, _this2.matrix[item].y);
      }); //Строим матрицу       

      this.matrix.forEach(function (item) {
        if (item.block > -1) {
          _this2.view.addBlock(item.block, item.x, item.y);
        }
      });
    }
  }, {
    key: "downFigure",
    value: function downFigure() {
      var _this3 = this;

      return setInterval(function () {
        _this3.isBottom();

        _this3.isResult();
      }, this.gameSpeed);
    }
  }, {
    key: "isLeft",
    value: function isLeft() {
      var _this4 = this;

      var isStop = false;
      this.curretFigire.body.forEach(function (item) {
        if (item % 10 === 0) isStop = true;
        if (_this4.matrix[item - 1].block > -1) isStop = true;
      });
      if (!isStop) this.curretFigire.toLeft();
    }
  }, {
    key: "isRight",
    value: function isRight() {
      var _this5 = this;

      var isStop = false;
      this.curretFigire.body.forEach(function (item) {
        if ((item + 1) % 10 === 0) isStop = true;
        if (_this5.matrix[item + 1].block > -1) isStop = true;
      });
      if (!isStop) this.curretFigire.toRight();
    }
  }, {
    key: "isRound",
    value: function isRound() {
      var _this6 = this;

      var isStop = false;
      var oldVers = [];
      this.curretFigire.body.forEach(function (item) {
        return oldVers.push(item);
      });
      this.curretFigire.round();
      this.curretFigire.body.forEach(function (item) {
        if (_this6.matrix[item + 1].block > -1) isStop = true;
      });
      if (isStop) this.curretFigire.body = oldVers;else {
        isStop = false;
        this.curretFigire.body.forEach(function (item) {
          if ((item + 1) % 10 === 0) {
            _this6.curretFigire.body.forEach(function (x) {
              if (x > item && _this6.curretFigire.type === 0) _this6.curretFigire.toLeft();
              if (x > item && _this6.curretFigire.type > 0) isStop = true;
            });
          }
        });

        if (isStop) {
          this.curretFigire.toLeft();
        }
      }
    }
  }, {
    key: "isBottom",
    value: function isBottom() {
      var _this7 = this;

      var isStop = false;
      this.curretFigire.body.forEach(function (item) {
        if (item >= 190) isStop = true;else if (_this7.matrix[item + 10].block > -1) isStop = true;
      });

      if (isStop) {
        this.curretFigire.body.forEach(function (item) {
          _this7.matrix[item].block = _this7.curretFigire.base;
        });
        this.curretFigire = this.getFigure();
      }

      if (!isStop) this.curretFigire.toDown();
    }
  }, {
    key: "getFigure",
    value: function getFigure() {
      var type = Math.floor(Math.random() * (7 - 0)) + 0;
      var base = Math.floor(Math.random() * (10 - 0)) + 0;
      base = this.view.blocks.blocksCoord[base];
      var startBlock = Math.floor(Math.random() * (7 - 0)) + 0;
      return new _figure__WEBPACK_IMPORTED_MODULE_1__["Figure"](startBlock, type, base - 1);
    }
  }, {
    key: "sliceCanvas",
    value: function sliceCanvas() {
      var matrix = [];

      for (var y = 0; y < this.view.canvas.height; y += this.view.blocks.height) {
        for (var x = 0; x < this.view.canvas.width; x += this.view.blocks.height) {
          matrix.push({
            x: x,
            y: y,
            block: -1
          });
        }
      }

      return matrix;
    }
  }, {
    key: "isResult",
    value: function isResult() {
      var resArr = [];
      var isGameEnd = false;

      for (var i = 0; i < this.matrix.length; i += 10) {
        var count = 0;

        for (var j = i; j < i + 10; j++) {
          if (this.matrix[j].block > -1) count++;
          if (i === 0 && this.matrix[j].block > -1) isGameEnd = true;
        }

        if (count === 10) resArr.push(i);
      }

      if (isGameEnd) {
        console.log('Game over!');
        clearInterval(this.intervalId);
        window.cancelAnimationFrame(this.stopLoop);
        this.view.showText('Game over!!!');
      } else if (resArr.length > 0) {
        for (var _i = 0; _i < resArr.length; _i++) {
          for (var _j = resArr[_i]; _j < resArr[_i] + 10; _j++) {
            this.matrix[_j].block = -1;

            for (var t = _j; t >= 10; t -= 10) {
              this.matrix[t].block = this.matrix[t - 10].block;
            }
          }
        }

        switch (resArr.length) {
          case 1:
            this.result.innerText = +this.result.innerText + 100;
            break;

          case 2:
            this.result.innerText = +this.result.innerText + 300;
            break;

          case 3:
            this.result.innerText = +this.result.innerText + 700;
            break;

          case 4:
            this.result.innerText = +this.result.innerText + 1500;
            break;
        }
      }
    }
  }, {
    key: "upSpeed",
    value: function upSpeed() {
      var _this8 = this;

      setInterval(function () {
        _this8.gameSpeed -= 20;
        clearInterval(_this8.intervalId);
        _this8.intervalId = _this8.downFigure();
      }, 30000);
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

      this.canvas = canvas;
      this.canvasCtx = canvas.getContext('2d'); //Возращаем контроллеру

      return {
        mainDiv: mainDiv,
        output: output,
        startBtn: startBtn,
        stopBtn: stopBtn
      };
    }
  }, {
    key: "addBlock",
    value: function addBlock(indexBlock, x, y) {
      this.canvasCtx.drawImage(this.blockImg, indexBlock, 0, this.blocks.height, this.blocks.height, x, y, this.blocks.height, this.blocks.height);
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "showText",
    value: function showText(text) {
      this.canvasCtx.fillStyle = 'yellow';
      this.canvasCtx.font = '38px BancoDi';
      this.canvasCtx.textAlign = 'center';
      this.canvasCtx.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYmVnaW4vYmVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iZWdpbi9iZWdpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zY2VuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXRyaXMvZmlndXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGV0cmlzL3RldHJpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RldHJpcy90ZXRyaXNWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiXSwibmFtZXMiOlsiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsInNjZW5lcyIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJ0aGVuIiwiY2hhbmdlU2NlbmUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkJlZ2luIiwidmlldyIsIkJlZ2luVmlldyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29udHJvbCIsInJlbmRlciIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFbGVtZW50IiwiZGl2IiwicGljIiwiSW1hZ2UiLCJzcmMiLCJidXRUZXh0IiwiYnVpbGRFbGVtbWVudCIsImlkIiwidGV4dCIsInN0eWxlIiwiaW5uZXJUZXh0IiwiVGV0cmlzIiwiRmlndXJlIiwic3RhcnRCbG9jayIsInR5cGUiLCJiYXNlIiwiYm9keSIsImJ1aWxkIiwieCIsImZpcnVyZVZpZXciLCJpIiwiVGV0cmlzVmlldyIsImdhbWVTcGVlZCIsInJlc3VsdCIsIm91dHB1dCIsInN0YXJ0Q29udHJvbCIsInN0YXJ0QnRuIiwibWF0cml4Iiwic2xpY2VDYW52YXMiLCJjdXJyZXRGaWdpcmUiLCJnZXRGaWd1cmUiLCJpbnRlcnZhbElkIiwiZG93bkZpZ3VyZSIsImlzUGF1c2VHYW1lIiwiZG9jdW1lbnQiLCJldmVudCIsImtleUNvZGUiLCJpc0xlZnQiLCJpc1JpZ2h0IiwiaXNCb3R0b20iLCJpc1JvdW5kIiwiY2xlYXJJbnRlcnZhbCIsInVwU3BlZWQiLCJsb29wIiwiZW5kQ29udHJvbCIsInN0b3BCdG4iLCJvbmNsaWNrIiwibWFpbkRpdiIsInN0b3BMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImNsZWFyQ2FudmFzIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRCbG9jayIsInkiLCJibG9jayIsInNldEludGVydmFsIiwiaXNSZXN1bHQiLCJpc1N0b3AiLCJ0b0xlZnQiLCJ0b1JpZ2h0Iiwib2xkVmVycyIsInB1c2giLCJyb3VuZCIsInRvRG93biIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImJsb2NrcyIsImJsb2Nrc0Nvb3JkIiwiY2FudmFzIiwiaGVpZ2h0Iiwid2lkdGgiLCJyZXNBcnIiLCJpc0dhbWVFbmQiLCJjb3VudCIsImoiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNob3dUZXh0IiwidCIsImJsb2NrSW1nIiwic2xpY2VJbWciLCJpbWciLCJpbmRleCIsInRhYmxvIiwibGFiZWwiLCJwYW5lbCIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJpbmRleEJsb2NrIiwiZHJhd0ltYWdlIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiZWxlbSIsImVsZW1DbGFzcyIsInBhcmVudCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QSxVQUFqQkMsTUFBaUIsdUVBQVYsS0FBS25GLElBQUs7QUFDN0MsVUFBSW9GLE9BQU8sR0FBR2xFLFFBQVEsQ0FBQ21FLGFBQVQsQ0FBdUJKLElBQXZCLENBQWQ7QUFDQUcsYUFBTyxDQUFDRSxZQUFSLENBQXFCLE9BQXJCLEVBQTZCSixTQUE3QjtBQUNBQyxZQUFNLENBQUNJLFdBQVAsQ0FBbUJILE9BQW5CO0FBQ0EsYUFBT0EsT0FBUDtBQUNILEtBZkwsQ0FnQkk7O0FBaEJKO0FBQUE7QUFBQSxrQ0FpQmtCQSxPQWpCbEIsRUFpQjBCO0FBQ2xCLGFBQU9BLE9BQU8sQ0FBQ0ksTUFBUixFQUFQO0FBQ0g7QUFuQkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2dhbWUtc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuaW1wb3J0IHtzY2VuZXN9IGZyb20gJy4vc2NlbmVzL3NjZW5lcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gMTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lXS5pbml0KHRoaXMuc2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2hhbmdlU2NlbmUoKXsgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lID09PSB0aGlzLnNjZW5lcy5sZW5ndGggLSAxKSB0aGlzLmN1cnJlbnRTY2VuZT0wOyAgICAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgdGhpcy5jdXJyZW50U2NlbmUrKzsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG53aW5kb3cub25sb2FkID0gKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0Li4uJyk7XHJcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxuICAgIFxyXG59O1xyXG4iLCJpbXBvcnQge0JlZ2luVmlld30gZnJvbSAnLi9iZWdpblZpZXcnO1xyXG5leHBvcnQgY2xhc3MgQmVnaW57XHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEJlZ2luVmlldygpOyAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0KHNjcmVlbil7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMudmlldy5yZW5kZXIodGhpcy5zY3JlZW4pO1xyXG4gICAgICAgICAgICBjb250cm9sLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLnJlbW92ZUVsZW1lbnQoY29udHJvbC5kaXYpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0gICBcclxufSIsImV4cG9ydCBjbGFzcyBCZWdpblZpZXd7XHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5waWMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnBpYy5zcmMgPSAnbWVkaWEvZm9uMS5qcGcnO1xyXG4gICAgICAgIHRoaXMuYnV0VGV4dCA9ICdTVEFSVCc7ICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoc2NyZWVuKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVybmRlciBzdGFydCcpO1xyXG4gICAgICAgIC8v0J7QsdC10YDRgtC60LBcclxuICAgICAgICBsZXQgZGl2ID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5pZCA9ICdzY2VuZTEnOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL9Ca0L3QvtC/0LrQsCDRgdGC0LDRgNGC0LBcclxuICAgICAgICBsZXQgYnV0dG9uID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2EnLCcnLGRpdik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbi50ZXh0ID0gdGhpcy5idXRUZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9ICdzdGFydC1idG4nOyBcclxuICAgICAgICAvL9Ch0YLQuNC70Lgg0L7RhNGA0LzQu9C10L3QuNGPINGB0YbQtdC90YtcclxuICAgICAgICBsZXQgc3R5bGUgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnc3R5bGUnLCcnLGRpdik7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NjZW5lMXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7dGhpcy5waWMuc3JjfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0YXJ0LWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFuY29EaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OjFweCAzcHggMTVweCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RhcnQtYnRuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo2MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIHtkaXYsYnV0dG9ufTtcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0JlZ2lufSBmcm9tICcuL2JlZ2luL2JlZ2luJztcclxuaW1wb3J0IHtUZXRyaXN9IGZyb20gJy4vdGV0cmlzL3RldHJpcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmVzID0gW1xyXG4gICAgbmV3IEJlZ2luKCksXHJcbiAgICBuZXcgVGV0cmlzKClcclxuXTsiLCJleHBvcnQgY2xhc3MgRmlndXJle1xyXG4gICAgY29uc3RydWN0b3Ioc3RhcnRCbG9jayx0eXBlLGJhc2Upe1xyXG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5idWlsZCh0eXBlLHN0YXJ0QmxvY2spO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgcm91bmQoKXsgICAgICAgICAgICBcclxuICAgICAgICBzd2l0Y2godGhpcy50eXBlKXtcclxuICAgICAgICAgICAgICAgIC8vRmlndXJlIElcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9keVswXSsxPT09dGhpcy5ib2R5WzFdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeD10aGlzLmJvZHlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXgrMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgtMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeD10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL0ZpZ3VyZSBKXHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJ1cmVWaWV3ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9keVswXSsxMT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5WzBdLTk9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXcgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5WzBdKzI9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXcgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5WzBdKzEwPT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChmaXJ1cmVWaWV3KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14LTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eC0xOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eCsxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL0ZpZ3VyZSBMXHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnVyZVZpZXcgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2R5WzBdKzIwPT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0rMj09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0rMTE9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXcgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5WzBdLTk9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXcgPSAzOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGZpcnVyZVZpZXcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14LTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgtMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eC05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy9GaWd1cmUgT1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vRmlndXJlIFNcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlydXJlVmlldyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlbMF0rMTE9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXS05PT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGZpcnVyZVZpZXcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgtOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14LTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL0ZpZ3VyZSBUXHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnVyZVZpZXcgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2R5WzBdKzI9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXS0yMD09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0tOT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0rMTE9PT10aGlzLmJvZHlbMl0mJnRoaXMuYm9keVswXS05PT09dGhpcy5ib2R5WzNdKSBmaXJ1cmVWaWV3ID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChmaXJ1cmVWaWV3KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgtMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eC0yMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14LTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14LTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eCsyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14LTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eCsxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL0ZpZ3VyZSBaXHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnVyZVZpZXcgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2R5WzBdKzExPT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0tOT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChmaXJ1cmVWaWV3KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgtMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eC05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtMTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHRvTGVmdCgpe1xyXG4gICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYm9keS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5W2ldPXRoaXMuYm9keVtpXS0xO1xyXG4gICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgdG9SaWdodCgpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ib2R5Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlbaV09dGhpcy5ib2R5W2ldKzE7XHJcbiAgICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICB0b0Rvd24oKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYm9keS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5W2ldPXRoaXMuYm9keVtpXSsxMDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnVpbGQodHlwZSx4KXtcclxuICAgICAgICBsZXQgYm9keT1bXTtcclxuICAgICAgICAvKjAt0LrQvtC+0YDQtNC40L3QsNGC0LAg0LfQsCDQu9C10LLRg9GOINCz0YDQsNC90LjRhtGDXHJcbiAgICAgICAgMy3QutC+0L7RgNC00LjQvdCw0YLQsCDQt9CwINC/0YDQsNCy0YPRjiDQs9GA0LDQvdC40YbRg1xyXG4gICAgICAgIDIt0LrQvtC+0YDQtNC40L3QsNGC0LAg0LfQsCDQvdC40LcgICAgICAgIFxyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgICAgLy9GaWd1cmUgSVxyXG4gICAgICAgICAgICBjYXNlIDA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEseCsyLHgrM107XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIEpcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEwLHgrMTEseCsxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIExcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEwLHgrMjAseCsyMV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIE9cclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEseCsxMCx4KzExXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9GaWd1cmUgU1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMTAseCsxMSx4KzIxXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9GaWd1cmUgVFxyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMSx4KzIseCsxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIFpcclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEseCsxMSx4KzEyXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtUZXRyaXNWaWV3fSBmcm9tICcuL3RldHJpc1ZpZXcnO1xyXG5pbXBvcnQge0ZpZ3VyZX0gZnJvbSAnLi9maWd1cmUnO1xyXG5leHBvcnQgY2xhc3MgVGV0cmlze1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVGV0cmlzVmlldygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNwZWVkID0gMzAwO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXQoc2NyZWVuKXsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuOyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLnZpZXcucmVuZGVyKHRoaXMuc2NyZWVuKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBjb250cm9sLm91dHB1dDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydENvbnRyb2wgPSBjb250cm9sLnN0YXJ0QnRuO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5zbGljZUNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUgPSB0aGlzLmdldEZpZ3VyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gdGhpcy5kb3duRmlndXJlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VHYW1lID0gZmFsc2U7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzNzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGVmdCgpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmlnaHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCb3R0b20oKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3VycmV0RmlnaXJlLnRvRG93bigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQYXVzZUdhbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHRoaXMuZG93bkZpZ3VyZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZUdhbWUgPSAhdGhpcy5pc1BhdXNlR2FtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBTcGVlZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb29wKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZENvbnRyb2wgPSBjb250cm9sLnN0b3BCdG47XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ29udHJvbC5vbmNsaWNrID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHNjcmVlbi5yZW1vdmVFbGVtZW50KGNvbnRyb2wubWFpbkRpdik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGxvb3AoKXtcclxuICAgICAgICB0aGlzLnN0b3BMb29wID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL9Ce0YfQuNGJ0LDQtdC8INC60LDQvdCy0LDRgVxyXG4gICAgICAgIHRoaXMudmlldy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIC8v0KHRgtGA0L7QuNC8INGE0LjQs9GD0YDRg1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRCbG9jayh0aGlzLmN1cnJldEZpZ2lyZS5iYXNlLHRoaXMubWF0cml4W2l0ZW1dLngsdGhpcy5tYXRyaXhbaXRlbV0ueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/QodGC0YDQvtC40Lwg0LzQsNGC0YDQuNGG0YMgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYXRyaXguZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uYmxvY2s+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmFkZEJsb2NrKGl0ZW0uYmxvY2ssaXRlbS54LGl0ZW0ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZG93bkZpZ3VyZSgpe1xyXG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgdGhpcy5pc0JvdHRvbSgpO1xyXG4gICAgICAgICAgdGhpcy5pc1Jlc3VsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9LHRoaXMuZ2FtZVNwZWVkKTtcclxuICAgIH1cclxuICAgIGlzTGVmdCgpe1xyXG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtICUgMTAgPT09IDApIGlzU3RvcCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWF0cml4W2l0ZW0tMV0uYmxvY2s+LTEpaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighaXNTdG9wKXRoaXMuY3VycmV0RmlnaXJlLnRvTGVmdCgpOyBcclxuICAgIH1cclxuICAgIGlzUmlnaHQoKXtcclxuICAgICAgICBsZXQgaXNTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUuYm9keS5mb3JFYWNoKGl0ZW09PnsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoKGl0ZW0rMSkgJSAxMCA9PT0gMCkgaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5tYXRyaXhbaXRlbSsxXS5ibG9jaz4tMSlpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUudG9SaWdodCgpOyBcclxuICAgIH1cclxuICAgIGlzUm91bmQoKXtcclxuICAgICAgICBsZXQgaXNTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZFZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+b2xkVmVycy5wdXNoKGl0ZW0pKTtcclxuICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5yb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZih0aGlzLm1hdHJpeFtpdGVtKzFdLmJsb2NrPi0xKWlzU3RvcCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoaXNTdG9wKXRoaXMuY3VycmV0RmlnaXJlLmJvZHk9b2xkVmVycztcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUuYm9keS5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgICAgIGlmKChpdGVtKzEpJTEwPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUuYm9keS5mb3JFYWNoKHg9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeD5pdGVtJiZ0aGlzLmN1cnJldEZpZ2lyZS50eXBlPT09MCl0aGlzLmN1cnJldEZpZ2lyZS50b0xlZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeD5pdGVtJiZ0aGlzLmN1cnJldEZpZ2lyZS50eXBlPjApaXNTdG9wPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihpc1N0b3Ape1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUudG9MZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaXNCb3R0b20oKXtcclxuICAgICAgICBsZXQgaXNTdG9wPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0+PTE5MClpc1N0b3A9dHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm1hdHJpeFtpdGVtKzEwXS5ibG9jaz4tMSlpc1N0b3A9dHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihpc1N0b3Ape1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaXRlbV0uYmxvY2s9dGhpcy5jdXJyZXRGaWdpcmUuYmFzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmV0RmlnaXJlID0gdGhpcy5nZXRGaWd1cmUoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUudG9Eb3duKCk7IFxyXG4gICAgfSAgICBcclxuICAgIGdldEZpZ3VyZSgpe1xyXG4gICAgICAgIGxldCB0eXBlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwKSkgKyAwO1xyXG4gICAgICAgIGxldCBiYXNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMCkpICsgMDtcclxuICAgICAgICBiYXNlID0gdGhpcy52aWV3LmJsb2Nrcy5ibG9ja3NDb29yZFtiYXNlXTtcclxuICAgICAgICBsZXQgc3RhcnRCbG9jayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCkpICsgMDtcclxuICAgICAgICByZXR1cm4gbmV3IEZpZ3VyZShzdGFydEJsb2NrLHR5cGUsYmFzZS0xKTtcclxuICAgIH1cclxuICAgIHNsaWNlQ2FudmFzKCl7XHJcbiAgICAgICAgbGV0IG1hdHJpeCA9W107XHJcbiAgICAgICAgZm9yKGxldCB5PTA7eTx0aGlzLnZpZXcuY2FudmFzLmhlaWdodDt5Kz10aGlzLnZpZXcuYmxvY2tzLmhlaWdodCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeD0wO3g8dGhpcy52aWV3LmNhbnZhcy53aWR0aDt4Kz10aGlzLnZpZXcuYmxvY2tzLmhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBtYXRyaXgucHVzaCh7eCx5LGJsb2NrOi0xfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaXNSZXN1bHQoKXtcclxuICAgICAgICBsZXQgcmVzQXJyID0gW107XHJcbiAgICAgICAgbGV0IGlzR2FtZUVuZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5tYXRyaXgubGVuZ3RoO2krPTEwKXtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBqPWk7ajxpKzEwO2orKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1hdHJpeFtqXS5ibG9jaz4tMSljb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYoaT09PTAgJiYgdGhpcy5tYXRyaXhbal0uYmxvY2s+LTEpaXNHYW1lRW5kPXRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY291bnQ9PT0xMClyZXNBcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaXNHYW1lRW5kKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlciEnKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zdG9wTG9vcCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93VGV4dCgnR2FtZSBvdmVyISEhJyk7ICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2UgaWYocmVzQXJyLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHJlc0Fyci5sZW5ndGg7aSsrKXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj1yZXNBcnJbaV07ajxyZXNBcnJbaV0rMTA7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2pdLmJsb2NrPS0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0PWo7dD49MTA7dC09MTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3RdLmJsb2NrPXRoaXMubWF0cml4W3QtMTBdLmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChyZXNBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOnRoaXMucmVzdWx0LmlubmVyVGV4dCA9ICt0aGlzLnJlc3VsdC5pbm5lclRleHQrMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOnRoaXMucmVzdWx0LmlubmVyVGV4dCA9ICt0aGlzLnJlc3VsdC5pbm5lclRleHQrMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOnRoaXMucmVzdWx0LmlubmVyVGV4dCA9ICt0aGlzLnJlc3VsdC5pbm5lclRleHQrNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OnRoaXMucmVzdWx0LmlubmVyVGV4dCA9ICt0aGlzLnJlc3VsdC5pbm5lclRleHQrMTUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG4gICAgdXBTcGVlZCgpe1xyXG4gICAgICAgIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNwZWVkIC09IDIwO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHRoaXMuZG93bkZpZ3VyZSgpO1xyXG4gICAgICAgIH0sMzAwMDApO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFRldHJpc1ZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYmxvY2tJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmJsb2NrSW1nLnNyYyA9ICdtZWRpYS9ibG9ja3MucG5nJztcclxuICAgICAgICB0aGlzLnNsaWNlSW1nKHRoaXMuYmxvY2tJbWcpOyAgICAgICBcclxuICAgIH1cclxuICAgIHNsaWNlSW1nKGltZyl7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tzQ29vcmQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleD0wO2luZGV4PGltZy53aWR0aDtpbmRleCArPSBoZWlnaHQpIGJsb2Nrc0Nvb3JkLnB1c2goaW5kZXgpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0ge2Jsb2Nrc0Nvb3JkLGhlaWdodH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcihzY3JlZW4pe1xyXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC+0LHQtdGA0YLQutGDXHJcbiAgICAgICAgbGV0IG1haW5EaXYgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5pZCA9ICdtYWluJztcclxuICAgICAgICAvL9Ch0L7Qt9C00LDQtdC8INGC0LDQsdC70L4g0LTQu9GPINCy0YvQstC+0LTQsCDQuNC90YTQvtGA0LzQsNGG0LjQuFxyXG4gICAgICAgIGxldCB0YWJsbyA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdkaXYnLCcnLG1haW5EaXYpO1xyXG4gICAgICAgIHRhYmxvLmlkID0gJ3RhYmxvJztcclxuICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQutCw0L3QstCw0YFcclxuICAgICAgICBsZXQgY2FudmFzID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2NhbnZhcycsJycsbWFpbkRpdik7XHJcbiAgICAgICAgY2FudmFzLmlkID0gJ2NhbnZhcyc7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2NyZWVuLndpZHRoLzI7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNjcmVlbi5oZWlnaHQ7XHJcbiAgICAgICAgLy/QodC+0LfQtNCw0LXQvCDRgdGC0LjQu9C4INC+0YTQvtGA0LzQu9C10L3QuNGPXHJcbiAgICAgICAgbGV0IHN0eWxlID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ3N0eWxlJywnJyxtYWluRGl2KTtcclxuICAgICAgICBzdHlsZS5pbm5lclRleHQgPSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI21haW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3NjcmVlbi5oZWlnaHR9cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoke3NjcmVlbi53aWR0aH1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwobWVkaWEvZm9uMS5qcGcpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGFibG97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3NjcmVlbi5oZWlnaHR9cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoke3NjcmVlbi53aWR0aC8yfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NhbnZhc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTUzLCA1MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdWx0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbCwub3V0cHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogYm9sZCAyMHB4IHNhbi1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vdXRwdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogNDBweCBCYW5jb0RpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFuZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMDBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiA2MHB4IEJhbmNvRGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OjFweCAzcHggMTVweCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnRuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICAvL9Ch0L7Qt9C00LDQtdC8INGC0LDQsdC70L4g0LTQu9GPINCy0YvQstC+0LTQsCDQvtGH0LrQvtCyXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdkaXYnLCdyZXN1bHQnLHRhYmxvKTtcclxuICAgICAgICBsZXQgbGFiZWwgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgncCcsJ2xhYmVsJyxyZXN1bHQpO1xyXG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9ICfQntGH0LrQuDonO1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgncCcsJ291dHB1dCcscmVzdWx0KTtcclxuICAgICAgICBvdXRwdXQuaW5uZXJUZXh0ID0gJzAwMCc7XHJcblxyXG4gICAgICAgIC8v0KHQvtC30LTQsNC10Lwg0L/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPXHJcbiAgICAgICAgbGV0IHBhbmVsID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicsJ3BhbmVsJyx0YWJsbyk7XHJcbiAgICAgICAgbGV0IHN0YXJ0QnRuID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2EnLCdidG4nLHBhbmVsKTtcclxuICAgICAgICBzdGFydEJ0bi5pbm5lclRleHQgPSAnU1RBUlQnO1xyXG4gICAgICAgIGxldCBzdG9wQnRuID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2EnLCdidG4nLHBhbmVsKTtcclxuICAgICAgICBzdG9wQnRuLmlubmVyVGV4dCA9ICdTdG9wJztcclxuXHJcbiAgICAgICAgLy/QlNC+0L/QvtC70L3Rj9C10Lwg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsFxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIC8v0JLQvtC30YDQsNGJ0LDQtdC8INC60L7QvdGC0YDQvtC70LvQtdGA0YNcclxuICAgICAgICByZXR1cm4ge21haW5EaXYsb3V0cHV0LCBzdGFydEJ0biwgc3RvcEJ0bn07XHJcbiAgICB9XHJcbiAgICBhZGRCbG9jayhpbmRleEJsb2NrLHgseSl7ICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tJbWcsIFxyXG4gICAgICAgICAgICBpbmRleEJsb2NrLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzLmhlaWdodCwgXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzLmhlaWdodCwgXHJcbiAgICAgICAgICAgIHgsIFxyXG4gICAgICAgICAgICB5LCBcclxuICAgICAgICAgICAgdGhpcy5ibG9ja3MuaGVpZ2h0LCBcclxuICAgICAgICAgICAgdGhpcy5ibG9ja3MuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGNsZWFyQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgc2hvd1RleHQodGV4dCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDdHguZmlsbFN0eWxlID0gJ3llbGxvdyc7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDdHguZm9udCA9ICczOHB4IEJhbmNvRGknO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ3R4LmZpbGxUZXh0KHRleHQsdGhpcy5jYW52YXMud2lkdGgvMix0aGlzLmNhbnZhcy5oZWlnaHQvMik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NyZWVue1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGg9NjQwLGhlaWdodD02NDApe1xyXG4gICAgICAgIC8v0J/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90LDRjyDQvdCw0YHRgtGA0L7QudC60LAg0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgdGhpcy53aWR0aD13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodD1oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB0aGlzLmJvZHkuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoKydweCc7XHJcbiAgICAgICAgdGhpcy5ib2R5LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0KydweCc7ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9Ch0L7Qt9C00LDRgtGMINGN0LvQtdC80LXQvdGCINC90LAg0Y3QutGA0LDQvdC1XHJcbiAgICBidWlsZEVsZW1tZW50KGVsZW0sZWxlbUNsYXNzPScnLHBhcmVudD10aGlzLmJvZHkpe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGVsZW1DbGFzcyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLy/Qo9C00LDQu9C40YLRjCDQtdC70LXQvNC10L3RgiDRgSDRjdC60YDQsNC90LBcclxuICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudCl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=