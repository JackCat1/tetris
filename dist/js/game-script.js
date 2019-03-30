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
            }
          });

          _this.downFigure();

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

      setInterval(function () {
        _this3.isBottom();

        _this3.isResult();
      }, 300);
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
              if (x - 1 === item) isStop = true;
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

      for (var i = 0; i < this.matrix.length; i += 10) {
        var count = 0;

        for (var j = i; j < i + 10; j++) {
          if (this.matrix[j].block > -1) count++;
        }

        if (count === 10) resArr.push(i);
      }

      if (resArr.length > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYmVnaW4vYmVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iZWdpbi9iZWdpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zY2VuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXRyaXMvZmlndXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGV0cmlzL3RldHJpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RldHJpcy90ZXRyaXNWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiXSwibmFtZXMiOlsiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsInNjZW5lcyIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJ0aGVuIiwiY2hhbmdlU2NlbmUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkJlZ2luIiwidmlldyIsIkJlZ2luVmlldyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29udHJvbCIsInJlbmRlciIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFbGVtZW50IiwiZGl2IiwicGljIiwiSW1hZ2UiLCJzcmMiLCJidXRUZXh0IiwiYnVpbGRFbGVtbWVudCIsImlkIiwidGV4dCIsInN0eWxlIiwiaW5uZXJUZXh0IiwiVGV0cmlzIiwiRmlndXJlIiwic3RhcnRCbG9jayIsInR5cGUiLCJiYXNlIiwiYm9keSIsImJ1aWxkIiwieCIsImZpcnVyZVZpZXciLCJpIiwiVGV0cmlzVmlldyIsInJlc3VsdCIsIm91dHB1dCIsInN0YXJ0Q29udHJvbCIsInN0YXJ0QnRuIiwibWF0cml4Iiwic2xpY2VDYW52YXMiLCJjdXJyZXRGaWdpcmUiLCJnZXRGaWd1cmUiLCJkb2N1bWVudCIsImV2ZW50Iiwia2V5Q29kZSIsImlzTGVmdCIsImlzUmlnaHQiLCJpc0JvdHRvbSIsImlzUm91bmQiLCJkb3duRmlndXJlIiwibG9vcCIsImVuZENvbnRyb2wiLCJzdG9wQnRuIiwib25jbGljayIsIm1haW5EaXYiLCJzdG9wTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJjbGVhckNhbnZhcyIsImZvckVhY2giLCJpdGVtIiwiYWRkQmxvY2siLCJ5IiwiYmxvY2siLCJzZXRJbnRlcnZhbCIsImlzUmVzdWx0IiwiaXNTdG9wIiwidG9MZWZ0IiwidG9SaWdodCIsIm9sZFZlcnMiLCJwdXNoIiwicm91bmQiLCJ0b0Rvd24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJibG9ja3MiLCJibG9ja3NDb29yZCIsImNhbnZhcyIsImhlaWdodCIsIndpZHRoIiwicmVzQXJyIiwiY291bnQiLCJqIiwidCIsImJsb2NrSW1nIiwic2xpY2VJbWciLCJpbWciLCJpbmRleCIsInRhYmxvIiwibGFiZWwiLCJwYW5lbCIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJpbmRleEJsb2NrIiwiZHJhd0ltYWdlIiwiY2xlYXJSZWN0IiwiZWxlbSIsImVsZW1DbGFzcyIsInBhcmVudCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7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QUMsR0FBQyxLQUFLRixJQUFMLENBQVUsQ0FBVixDQUFGO0FBQ0EsbUJBQUtBLElBQUwsQ0FBVSxDQUFWLElBQWFFLENBQWI7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLENBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLENBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLEVBQWY7QUFDQTs7QUFDUixpQkFBSyxDQUFMO0FBQ1FBLGVBQUMsR0FBQyxLQUFLRixJQUFMLENBQVUsQ0FBVixDQUFGO0FBQ0EsbUJBQUtBLElBQUwsQ0FBVSxDQUFWLElBQWFFLENBQWI7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLENBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLENBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLEVBQWY7QUFDQTs7QUFDUixpQkFBSyxDQUFMO0FBQ1FBLGVBQUMsR0FBRSxLQUFLRixJQUFMLENBQVUsQ0FBVixDQUFIO0FBQ0EsbUJBQUtBLElBQUwsQ0FBVSxDQUFWLElBQWFFLENBQWI7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLENBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLEVBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLEVBQWY7QUFDQTs7QUFDUixpQkFBSyxDQUFMO0FBQ1FBLGVBQUMsR0FBQyxLQUFLRixJQUFMLENBQVUsQ0FBVixDQUFGO0FBQ0EsbUJBQUtBLElBQUwsQ0FBVSxDQUFWLElBQWFFLENBQWI7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFDLEVBQWY7QUFDQSxtQkFBS0YsSUFBTCxDQUFVLENBQVYsSUFBYUUsQ0FBQyxHQUFD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R0FBSTs7QUFBQTs7QUFDN0I7QUFDQSxTQUFLQyxLQUFMLEdBQVdBLEtBQVg7QUFDQSxTQUFLRCxNQUFMLEdBQVlBLE1BQVo7QUFDQSxTQUFLbkQsSUFBTCxHQUFZYyxRQUFRLENBQUNkLElBQXJCO0FBQ0EsU0FBS0EsSUFBTCxDQUFVUCxLQUFWLENBQWdCMkQsS0FBaEIsR0FBd0IsS0FBS0EsS0FBTCxHQUFXLElBQW5DO0FBQ0EsU0FBS3BELElBQUwsQ0FBVVAsS0FBVixDQUFnQjBELE1BQWhCLEdBQXlCLEtBQUtBLE1BQUwsR0FBWSxJQUFyQztBQUNILEdBUkwsQ0FTSTs7O0FBVEo7QUFBQTtBQUFBLGtDQVVrQmtCLElBVmxCLEVBVXFEO0FBQUEsVUFBOUJDLFNBQThCLHVFQUFwQixFQUFvQjtBQUFBLFVBQWpCQyxNQUFpQix1RUFBVixLQUFLdkUsSUFBSztBQUM3QyxVQUFJd0UsT0FBTyxHQUFHMUQsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QkosSUFBdkIsQ0FBZDtBQUNBRyxhQUFPLENBQUNFLFlBQVIsQ0FBcUIsT0FBckIsRUFBNkJKLFNBQTdCO0FBQ0FDLFlBQU0sQ0FBQ0ksV0FBUCxDQUFtQkgsT0FBbkI7QUFDQSxhQUFPQSxPQUFQO0FBQ0gsS0FmTCxDQWdCSTs7QUFoQko7QUFBQTtBQUFBLGtDQWlCa0JBLE9BakJsQixFQWlCMEI7QUFDbEIsYUFBT0EsT0FBTyxDQUFDSSxNQUFSLEVBQVA7QUFDSDtBQW5CTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoianMvZ2FtZS1zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL3NjcmVlblwiO1xyXG5pbXBvcnQge3NjZW5lc30gZnJvbSAnLi9zY2VuZXMvc2NlbmVzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBzY2VuZXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSAxOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVdLmluaXQodGhpcy5zY3JlZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NlbmUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTY2VuZSgpeyAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUgPT09IHRoaXMuc2NlbmVzLmxlbmd0aCAtIDEpIHRoaXMuY3VycmVudFNjZW5lPTA7ICAgICAgICAgICAgXHJcbiAgICAgICAgZWxzZSB0aGlzLmN1cnJlbnRTY2VuZSsrOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0dhbWV9IGZyb20gJy4vZ2FtZSc7XHJcbndpbmRvdy5vbmxvYWQgPSAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnQuLi4nKTtcclxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcclxuICAgIGdhbWUuaW5pdCgpO1xyXG4gICAgXHJcbn07XHJcbiIsImltcG9ydCB7QmVnaW5WaWV3fSBmcm9tICcuL2JlZ2luVmlldyc7XHJcbmV4cG9ydCBjbGFzcyBCZWdpbntcclxuICAgIGNvbnN0cnVjdG9yKCl7ICAgICAgICBcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgQmVnaW5WaWV3KCk7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXQoc2NyZWVuKXtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy52aWV3LnJlbmRlcih0aGlzLnNjcmVlbik7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4ucmVtb3ZlRWxlbWVudChjb250cm9sLmRpdik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIEJlZ2luVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKCl7ICAgICAgICBcclxuICAgICAgICB0aGlzLnBpYyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMucGljLnNyYyA9ICdtZWRpYS9mb24xLmpwZyc7XHJcbiAgICAgICAgdGhpcy5idXRUZXh0ID0gJ1NUQVJUJzsgICAgICBcclxuICAgIH1cclxuICAgIHJlbmRlcihzY3JlZW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXJuZGVyIHN0YXJ0Jyk7XHJcbiAgICAgICAgLy/QntCx0LXRgNGC0LrQsFxyXG4gICAgICAgIGxldCBkaXYgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmlkID0gJ3NjZW5lMSc7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8v0JrQvdC+0L/QutCwINGB0YLQsNGA0YLQsFxyXG4gICAgICAgIGxldCBidXR0b24gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnYScsJycsZGl2KTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uLnRleHQgPSB0aGlzLmJ1dFRleHQ7XHJcbiAgICAgICAgYnV0dG9uLmlkID0gJ3N0YXJ0LWJ0bic7IFxyXG4gICAgICAgIC8v0KHRgtC40LvQuCDQvtGE0YDQvNC70LXQvdC40Y8g0YHRhtC10L3Ri1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdzdHlsZScsJycsZGl2KTtcclxuICAgICAgICBzdHlsZS5pbm5lclRleHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc2NlbmUxe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHt0aGlzLnBpYy5zcmN9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RhcnQtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYW5jb0RpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6MXB4IDNweCAxNXB4IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzdGFydC1idG46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4ge2RpdixidXR0b259O1xyXG4gICAgfSAgICBcclxufSIsImltcG9ydCB7QmVnaW59IGZyb20gJy4vYmVnaW4vYmVnaW4nO1xyXG5pbXBvcnQge1RldHJpc30gZnJvbSAnLi90ZXRyaXMvdGV0cmlzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXHJcbiAgICBuZXcgQmVnaW4oKSxcclxuICAgIG5ldyBUZXRyaXMoKVxyXG5dOyIsImV4cG9ydCBjbGFzcyBGaWd1cmV7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydEJsb2NrLHR5cGUsYmFzZSl7XHJcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gYmFzZTtcclxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLmJ1aWxkKHR5cGUsc3RhcnRCbG9jayk7XHJcbiAgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICByb3VuZCgpeyAgICAgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpe1xyXG4gICAgICAgICAgICAgICAgLy9GaWd1cmUgSVxyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2R5WzBdKzE9PT10aGlzLmJvZHlbMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4PXRoaXMuYm9keVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eCsxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eC0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eC0yMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vRmlndXJlIEpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnVyZVZpZXcgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2R5WzBdKzExPT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0tOT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0rMj09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0rMTA9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXcgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGZpcnVyZVZpZXcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgtOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14LTE5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vRmlndXJlIExcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlydXJlVmlldyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlbMF0rMjA9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXSsyPT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXSsxMT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvZHlbMF0tOT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldyA9IDM7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goZmlydXJlVmlldyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eCsyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eCsyMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eC0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14LTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eC04O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eCsyMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvL0ZpZ3VyZSBPXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy9GaWd1cmUgU1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJ1cmVWaWV3ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9keVswXSsxMT09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5WzBdLTk9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXcgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goZmlydXJlVmlldyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD10aGlzLmJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMF09eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsxXT14KzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMl09eC05O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgrMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vRmlndXJlIFRcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlydXJlVmlldyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlbMF0rMj09PXRoaXMuYm9keVsyXSkgZmlydXJlVmlldz0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5WzBdLTIwPT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXS05PT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXSsxMT09PXRoaXMuYm9keVsyXSYmdGhpcy5ib2R5WzBdLTk9PT10aGlzLmJvZHlbM10pIGZpcnVyZVZpZXcgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGZpcnVyZVZpZXcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eC0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14LTIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgtOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPXRoaXMuYm9keVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVswXT14O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzFdPXgrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14KzExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzNdPXgtOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVszXT14KzExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vRmlndXJlIFpcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlydXJlVmlldyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlbMF0rMTE9PT10aGlzLmJvZHlbMl0pIGZpcnVyZVZpZXc9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVswXS05PT09dGhpcy5ib2R5WzJdKSBmaXJ1cmVWaWV3ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGZpcnVyZVZpZXcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eC0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keVsyXT14LTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eC0xOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9dGhpcy5ib2R5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzBdPXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbMV09eCsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5WzJdPXgrMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHlbM109eCsxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdG9MZWZ0KCl7XHJcbiAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ib2R5Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlbaV09dGhpcy5ib2R5W2ldLTE7XHJcbiAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICB0b1JpZ2h0KCl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmJvZHkubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVtpXT10aGlzLmJvZHlbaV0rMTtcclxuICAgICAgICAgfSBcclxuICAgIH1cclxuICAgIHRvRG93bigpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ib2R5Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlbaV09dGhpcy5ib2R5W2ldKzEwO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidWlsZCh0eXBlLHgpe1xyXG4gICAgICAgIGxldCBib2R5PVtdO1xyXG4gICAgICAgIC8qMC3QutC+0L7RgNC00LjQvdCw0YLQsCDQt9CwINC70LXQstGD0Y4g0LPRgNCw0L3QuNGG0YNcclxuICAgICAgICAzLdC60L7QvtGA0LTQuNC90LDRgtCwINC30LAg0L/RgNCw0LLRg9GOINCz0YDQsNC90LjRhtGDXHJcbiAgICAgICAgMi3QutC+0L7RgNC00LjQvdCw0YLQsCDQt9CwINC90LjQtyAgICAgICAgXHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBJXHJcbiAgICAgICAgICAgIGNhc2UgMDogXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMSx4KzIseCszXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9GaWd1cmUgSlxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMTAseCsxMSx4KzEyXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9GaWd1cmUgTFxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMTAseCsyMCx4KzIxXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9GaWd1cmUgT1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMSx4KzEwLHgrMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBTXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxMCx4KzExLHgrMjFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBUXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxLHgrMix4KzExXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9GaWd1cmUgWlxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IFt4LHgrMSx4KzExLHgrMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm9keTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1RldHJpc1ZpZXd9IGZyb20gJy4vdGV0cmlzVmlldyc7XHJcbmltcG9ydCB7RmlndXJlfSBmcm9tICcuL2ZpZ3VyZSc7XHJcbmV4cG9ydCBjbGFzcyBUZXRyaXN7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBUZXRyaXNWaWV3KCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdChzY3JlZW4peyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47ICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMudmlldy5yZW5kZXIodGhpcy5zY3JlZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGNvbnRyb2wub3V0cHV0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29udHJvbCA9IGNvbnRyb2wuc3RhcnRCdG47XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXggPSB0aGlzLnNsaWNlQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZSA9IHRoaXMuZ2V0RmlndXJlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM3OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMZWZ0KCk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSaWdodCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0JvdHRvbSgpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZXRGaWdpcmUudG9Eb3duKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUm91bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bkZpZ3VyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb29wKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZENvbnRyb2wgPSBjb250cm9sLnN0b3BCdG47XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ29udHJvbC5vbmNsaWNrID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHNjcmVlbi5yZW1vdmVFbGVtZW50KGNvbnRyb2wubWFpbkRpdik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGxvb3AoKXtcclxuICAgICAgICB0aGlzLnN0b3BMb29wID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL9Ce0YfQuNGJ0LDQtdC8INC60LDQvdCy0LDRgVxyXG4gICAgICAgIHRoaXMudmlldy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIC8v0KHRgtGA0L7QuNC8INGE0LjQs9GD0YDRg1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRCbG9jayh0aGlzLmN1cnJldEZpZ2lyZS5iYXNlLHRoaXMubWF0cml4W2l0ZW1dLngsdGhpcy5tYXRyaXhbaXRlbV0ueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/QodGC0YDQvtC40Lwg0LzQsNGC0YDQuNGG0YMgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYXRyaXguZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uYmxvY2s+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmFkZEJsb2NrKGl0ZW0uYmxvY2ssaXRlbS54LGl0ZW0ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZG93bkZpZ3VyZSgpe1xyXG4gICAgICAgIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICB0aGlzLmlzQm90dG9tKCk7XHJcbiAgICAgICAgICB0aGlzLmlzUmVzdWx0KCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwzMDApO1xyXG4gICAgfVxyXG4gICAgaXNMZWZ0KCl7XHJcbiAgICAgICAgbGV0IGlzU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gJSAxMCA9PT0gMCkgaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5tYXRyaXhbaXRlbS0xXS5ibG9jaz4tMSlpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUudG9MZWZ0KCk7IFxyXG4gICAgfVxyXG4gICAgaXNSaWdodCgpe1xyXG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+eyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigoaXRlbSsxKSAlIDEwID09PSAwKSBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1hdHJpeFtpdGVtKzFdLmJsb2NrPi0xKWlzU3RvcCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoIWlzU3RvcCl0aGlzLmN1cnJldEZpZ2lyZS50b1JpZ2h0KCk7IFxyXG4gICAgfVxyXG4gICAgaXNSb3VuZCgpe1xyXG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkVmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT5vbGRWZXJzLnB1c2goaXRlbSkpO1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLnJvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUuYm9keS5mb3JFYWNoKGl0ZW09PnsgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGlmKHRoaXMubWF0cml4W2l0ZW0rMV0uYmxvY2s+LTEpaXNTdG9wID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUuYm9keT1vbGRWZXJzO1xyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlzU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoKGl0ZW0rMSklMTA9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goeD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4LTE9PT1pdGVtKWlzU3RvcD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYoaXNTdG9wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLnRvTGVmdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaXNCb3R0b20oKXtcclxuICAgICAgICBsZXQgaXNTdG9wPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0+PTE5MClpc1N0b3A9dHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm1hdHJpeFtpdGVtKzEwXS5ibG9jaz4tMSlpc1N0b3A9dHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihpc1N0b3Ape1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaXRlbV0uYmxvY2s9dGhpcy5jdXJyZXRGaWdpcmUuYmFzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmV0RmlnaXJlID0gdGhpcy5nZXRGaWd1cmUoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUudG9Eb3duKCk7IFxyXG4gICAgfSAgICBcclxuICAgIGdldEZpZ3VyZSgpe1xyXG4gICAgICAgIGxldCB0eXBlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwKSkgKyAwO1xyXG4gICAgICAgIGxldCBiYXNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMCkpICsgMDtcclxuICAgICAgICBiYXNlID0gdGhpcy52aWV3LmJsb2Nrcy5ibG9ja3NDb29yZFtiYXNlXTtcclxuICAgICAgICBsZXQgc3RhcnRCbG9jayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCkpICsgMDtcclxuICAgICAgICByZXR1cm4gbmV3IEZpZ3VyZShzdGFydEJsb2NrLHR5cGUsYmFzZS0xKTtcclxuICAgIH1cclxuICAgIHNsaWNlQ2FudmFzKCl7XHJcbiAgICAgICAgbGV0IG1hdHJpeCA9W107XHJcbiAgICAgICAgZm9yKGxldCB5PTA7eTx0aGlzLnZpZXcuY2FudmFzLmhlaWdodDt5Kz10aGlzLnZpZXcuYmxvY2tzLmhlaWdodCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeD0wO3g8dGhpcy52aWV3LmNhbnZhcy53aWR0aDt4Kz10aGlzLnZpZXcuYmxvY2tzLmhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBtYXRyaXgucHVzaCh7eCx5LGJsb2NrOi0xfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaXNSZXN1bHQoKXtcclxuICAgICAgICBsZXQgcmVzQXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1hdHJpeC5sZW5ndGg7aSs9MTApe1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9aTtqPGkrMTA7aisrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubWF0cml4W2pdLmJsb2NrPi0xKWNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY291bnQ9PT0xMClyZXNBcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocmVzQXJyLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZXNBcnIubGVuZ3RoO2krKyl7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXJlc0FycltpXTtqPHJlc0FycltpXSsxMDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2pdLmJsb2NrPS0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdD1qO3Q+PTEwO3QtPTEwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbdF0uYmxvY2s9dGhpcy5tYXRyaXhbdC0xMF0uYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXRjaChyZXNBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTp0aGlzLnJlc3VsdC5pbm5lclRleHQgPSArdGhpcy5yZXN1bHQuaW5uZXJUZXh0KzEwMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOnRoaXMucmVzdWx0LmlubmVyVGV4dCA9ICt0aGlzLnJlc3VsdC5pbm5lclRleHQrMzAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6dGhpcy5yZXN1bHQuaW5uZXJUZXh0ID0gK3RoaXMucmVzdWx0LmlubmVyVGV4dCs3MDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDp0aGlzLnJlc3VsdC5pbm5lclRleHQgPSArdGhpcy5yZXN1bHQuaW5uZXJUZXh0KzE1MDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVGV0cmlzVmlld3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ibG9ja0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tJbWcuc3JjID0gJ21lZGlhL2Jsb2Nrcy5wbmcnO1xyXG4gICAgICAgIHRoaXMuc2xpY2VJbWcodGhpcy5ibG9ja0ltZyk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2xpY2VJbWcoaW1nKXtcclxuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGltZy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBibG9ja3NDb29yZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4PTA7aW5kZXg8aW1nLndpZHRoO2luZGV4ICs9IGhlaWdodCkgYmxvY2tzQ29vcmQucHVzaChpbmRleCk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSB7YmxvY2tzQ29vcmQsaGVpZ2h0fTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHNjcmVlbil7XHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0L7QsdC10YDRgtC60YNcclxuICAgICAgICBsZXQgbWFpbkRpdiA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdkaXYnKTtcclxuICAgICAgICBtYWluRGl2LmlkID0gJ21haW4nO1xyXG4gICAgICAgIC8v0KHQvtC30LTQsNC10Lwg0YLQsNCx0LvQviDQtNC70Y8g0LLRi9Cy0L7QtNCwINC40L3RhNC+0YDQvNCw0YbQuNC4XHJcbiAgICAgICAgbGV0IHRhYmxvID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicsJycsbWFpbkRpdik7XHJcbiAgICAgICAgdGFibG8uaWQgPSAndGFibG8nO1xyXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC60LDQvdCy0LDRgVxyXG4gICAgICAgIGxldCBjYW52YXMgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnY2FudmFzJywnJyxtYWluRGl2KTtcclxuICAgICAgICBjYW52YXMuaWQgPSAnY2FudmFzJztcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzY3JlZW4ud2lkdGgvMjtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2NyZWVuLmhlaWdodDtcclxuICAgICAgICAvL9Ch0L7Qt9C00LDQtdC8INGB0YLQuNC70Lgg0L7RhNC+0YDQvNC70LXQvdC40Y9cclxuICAgICAgICBsZXQgc3R5bGUgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnc3R5bGUnLCcnLG1haW5EaXYpO1xyXG4gICAgICAgIHN0eWxlLmlubmVyVGV4dCA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWFpbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7c2NyZWVuLmhlaWdodH1weDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiR7c2NyZWVuLndpZHRofXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChtZWRpYS9mb24xLmpwZyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0YWJsb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7c2NyZWVuLmhlaWdodH1weDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiR7c2NyZWVuLndpZHRoLzJ9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FudmFze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxNTMsIDUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsLC5vdXRwdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBib2xkIDIwcHggc2FuLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiA0MHB4IEJhbmNvRGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYW5lbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDYwcHggQmFuY29EaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6MXB4IDNweCAxNXB4IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idG46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v0KHQvtC30LTQsNC10Lwg0YLQsNCx0LvQviDQtNC70Y8g0LLRi9Cy0L7QtNCwINC+0YfQutC+0LJcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicsJ3Jlc3VsdCcsdGFibG8pO1xyXG4gICAgICAgIGxldCBsYWJlbCA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdwJywnbGFiZWwnLHJlc3VsdCk7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ9Ce0YfQutC4Oic7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdwJywnb3V0cHV0JyxyZXN1bHQpO1xyXG4gICAgICAgIG91dHB1dC5pbm5lclRleHQgPSAnMDAwJztcclxuXHJcbiAgICAgICAgLy/QodC+0LfQtNCw0LXQvCDQv9Cw0L3QtdC70Ywg0YPQv9GA0LDQstC70LXQvdC40Y9cclxuICAgICAgICBsZXQgcGFuZWwgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2JywncGFuZWwnLHRhYmxvKTtcclxuICAgICAgICBsZXQgc3RhcnRCdG4gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnYScsJ2J0bicscGFuZWwpO1xyXG4gICAgICAgIHN0YXJ0QnRuLmlubmVyVGV4dCA9ICdTVEFSVCc7XHJcbiAgICAgICAgbGV0IHN0b3BCdG4gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnYScsJ2J0bicscGFuZWwpO1xyXG4gICAgICAgIHN0b3BCdG4uaW5uZXJUZXh0ID0gJ1N0b3AnO1xyXG5cclxuICAgICAgICAvL9CU0L7Qv9C+0LvQvdGP0LXQvCDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtCwXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgLy/QktC+0LfRgNCw0YnQsNC10Lwg0LrQvtC90YLRgNC+0LvQu9C10YDRg1xyXG4gICAgICAgIHJldHVybiB7bWFpbkRpdixvdXRwdXQsIHN0YXJ0QnRuLCBzdG9wQnRufTtcclxuICAgIH1cclxuICAgIGFkZEJsb2NrKGluZGV4QmxvY2sseCx5KXsgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FudmFzQ3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0ltZywgXHJcbiAgICAgICAgICAgIGluZGV4QmxvY2ssIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgdGhpcy5ibG9ja3MuaGVpZ2h0LCBcclxuICAgICAgICAgICAgdGhpcy5ibG9ja3MuaGVpZ2h0LCBcclxuICAgICAgICAgICAgeCwgXHJcbiAgICAgICAgICAgIHksIFxyXG4gICAgICAgICAgICB0aGlzLmJsb2Nrcy5oZWlnaHQsIFxyXG4gICAgICAgICAgICB0aGlzLmJsb2Nrcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJDYW52YXMoKXtcclxuICAgICAgICB0aGlzLmNhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NyZWVue1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGg9NjQwLGhlaWdodD02NDApe1xyXG4gICAgICAgIC8v0J/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90LDRjyDQvdCw0YHRgtGA0L7QudC60LAg0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgdGhpcy53aWR0aD13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodD1oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB0aGlzLmJvZHkuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoKydweCc7XHJcbiAgICAgICAgdGhpcy5ib2R5LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0KydweCc7ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9Ch0L7Qt9C00LDRgtGMINGN0LvQtdC80LXQvdGCINC90LAg0Y3QutGA0LDQvdC1XHJcbiAgICBidWlsZEVsZW1tZW50KGVsZW0sZWxlbUNsYXNzPScnLHBhcmVudD10aGlzLmJvZHkpe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGVsZW1DbGFzcyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLy/Qo9C00LDQu9C40YLRjCDQtdC70LXQvNC10L3RgiDRgSDRjdC60YDQsNC90LBcclxuICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudCl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=