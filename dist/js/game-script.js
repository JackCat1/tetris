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
    value: function round() {}
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
          body = [x, x + 10, x + 21, x + 11];
          break;
        //Figure T

        case 5:
          body = [x, x + 1, x + 11, x + 2];
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

        _this.result = control.output.innerText;
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
                _this.curretFigire.toDown();

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

        _this3.curretFigire.toDown();

        _this3.isResult();
      }, 300);
    }
  }, {
    key: "isLeft",
    value: function isLeft() {
      var isStop = false;
      this.curretFigire.body.forEach(function (item) {
        if (item % 10 === 0) isStop = true;
      });
      if (!isStop) this.curretFigire.toLeft();
    }
  }, {
    key: "isRight",
    value: function isRight() {
      var isStop = false;
      this.curretFigire.body.forEach(function (item) {
        if ((item + 1) % 10 === 0) isStop = true;
      });
      if (!isStop) this.curretFigire.toRight();
    }
  }, {
    key: "isBottom",
    value: function isBottom() {
      var _this4 = this;

      var isStop = false;
      this.curretFigire.body.forEach(function (item) {
        if (item >= 190) isStop = true;else if (_this4.matrix[item + 10].block > -1) isStop = true;
      });

      if (isStop) {
        this.curretFigire.body.forEach(function (item) {
          _this4.matrix[item].block = _this4.curretFigire.base;
        });
        this.curretFigire = this.getFigure();
      }
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
      for (var i = 0; i < this.matrix.length; i += 10) {
        if (this.matrix[i].block > -1 && this.matrix[i + 1].block > -1 && this.matrix[i + 2].block > -1 && this.matrix[i + 3].block > -1 && this.matrix[i + 4].block > -1 && this.matrix[i + 5].block > -1 && this.matrix[i + 6].block > -1 && this.matrix[i + 7].block > -1 && this.matrix[i + 8].block > -1 && this.matrix[i + 9].block > -1) {
          this.result += 100;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYmVnaW4vYmVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iZWdpbi9iZWdpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zY2VuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXRyaXMvZmlndXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGV0cmlzL3RldHJpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RldHJpcy90ZXRyaXNWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiXSwibmFtZXMiOlsiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsInNjZW5lcyIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJ0aGVuIiwiY2hhbmdlU2NlbmUiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsIkJlZ2luIiwidmlldyIsIkJlZ2luVmlldyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29udHJvbCIsInJlbmRlciIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFbGVtZW50IiwiZGl2IiwicGljIiwiSW1hZ2UiLCJzcmMiLCJidXRUZXh0IiwiYnVpbGRFbGVtbWVudCIsImlkIiwidGV4dCIsInN0eWxlIiwiaW5uZXJUZXh0IiwiVGV0cmlzIiwiRmlndXJlIiwic3RhcnRCbG9jayIsInR5cGUiLCJiYXNlIiwiYm9keSIsImJ1aWxkIiwiaSIsIngiLCJUZXRyaXNWaWV3IiwicmVzdWx0Iiwib3V0cHV0Iiwic3RhcnRDb250cm9sIiwic3RhcnRCdG4iLCJtYXRyaXgiLCJzbGljZUNhbnZhcyIsImN1cnJldEZpZ2lyZSIsImdldEZpZ3VyZSIsImRvY3VtZW50IiwiZXZlbnQiLCJrZXlDb2RlIiwiaXNMZWZ0IiwiaXNSaWdodCIsInRvRG93biIsImRvd25GaWd1cmUiLCJsb29wIiwiZW5kQ29udHJvbCIsInN0b3BCdG4iLCJvbmNsaWNrIiwibWFpbkRpdiIsInN0b3BMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImNsZWFyQ2FudmFzIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRCbG9jayIsInkiLCJibG9jayIsInNldEludGVydmFsIiwiaXNCb3R0b20iLCJpc1Jlc3VsdCIsImlzU3RvcCIsInRvTGVmdCIsInRvUmlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJibG9ja3MiLCJibG9ja3NDb29yZCIsImNhbnZhcyIsImhlaWdodCIsIndpZHRoIiwicHVzaCIsImJsb2NrSW1nIiwic2xpY2VJbWciLCJpbWciLCJpbmRleCIsInRhYmxvIiwibGFiZWwiLCJwYW5lbCIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJpbmRleEJsb2NrIiwiZHJhd0ltYWdlIiwiY2xlYXJSZWN0IiwiZWxlbSIsImVsZW1DbGFzcyIsInBhcmVudCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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S0EsTUFBTCxHQUFZLElBQXJDO0FBQ0gsR0FSTCxDQVNJOzs7QUFUSjtBQUFBO0FBQUEsa0NBVWtCZSxJQVZsQixFQVVxRDtBQUFBLFVBQTlCQyxTQUE4Qix1RUFBcEIsRUFBb0I7QUFBQSxVQUFqQkMsTUFBaUIsdUVBQVYsS0FBSy9ELElBQUs7QUFDN0MsVUFBSWdFLE9BQU8sR0FBR25ELFFBQVEsQ0FBQ29ELGFBQVQsQ0FBdUJKLElBQXZCLENBQWQ7QUFDQUcsYUFBTyxDQUFDRSxZQUFSLENBQXFCLE9BQXJCLEVBQTZCSixTQUE3QjtBQUNBQyxZQUFNLENBQUNJLFdBQVAsQ0FBbUJILE9BQW5CO0FBQ0EsYUFBT0EsT0FBUDtBQUNILEtBZkwsQ0FnQkk7O0FBaEJKO0FBQUE7QUFBQSxrQ0FpQmtCQSxPQWpCbEIsRUFpQjBCO0FBQ2xCLGFBQU9BLE9BQU8sQ0FBQ0ksTUFBUixFQUFQO0FBQ0g7QUFuQkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2dhbWUtc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuaW1wb3J0IHtzY2VuZXN9IGZyb20gJy4vc2NlbmVzL3NjZW5lcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gMTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lXS5pbml0KHRoaXMuc2NyZWVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2hhbmdlU2NlbmUoKXsgICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lID09PSB0aGlzLnNjZW5lcy5sZW5ndGggLSAxKSB0aGlzLmN1cnJlbnRTY2VuZT0wOyAgICAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgdGhpcy5jdXJyZW50U2NlbmUrKzsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG53aW5kb3cub25sb2FkID0gKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0Li4uJyk7XHJcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxuICAgIFxyXG59O1xyXG4iLCJpbXBvcnQge0JlZ2luVmlld30gZnJvbSAnLi9iZWdpblZpZXcnO1xyXG5leHBvcnQgY2xhc3MgQmVnaW57XHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEJlZ2luVmlldygpOyAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0KHNjcmVlbil7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMudmlldy5yZW5kZXIodGhpcy5zY3JlZW4pO1xyXG4gICAgICAgICAgICBjb250cm9sLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuLnJlbW92ZUVsZW1lbnQoY29udHJvbC5kaXYpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0gICBcclxufSIsImV4cG9ydCBjbGFzcyBCZWdpblZpZXd7XHJcbiAgICBjb25zdHJ1Y3RvcigpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5waWMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnBpYy5zcmMgPSAnbWVkaWEvZm9uMS5qcGcnO1xyXG4gICAgICAgIHRoaXMuYnV0VGV4dCA9ICdTVEFSVCc7ICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoc2NyZWVuKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVybmRlciBzdGFydCcpO1xyXG4gICAgICAgIC8v0J7QsdC10YDRgtC60LBcclxuICAgICAgICBsZXQgZGl2ID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5pZCA9ICdzY2VuZTEnOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL9Ca0L3QvtC/0LrQsCDRgdGC0LDRgNGC0LBcclxuICAgICAgICBsZXQgYnV0dG9uID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2EnLCcnLGRpdik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbi50ZXh0ID0gdGhpcy5idXRUZXh0O1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9ICdzdGFydC1idG4nOyBcclxuICAgICAgICAvL9Ch0YLQuNC70Lgg0L7RhNGA0LzQu9C10L3QuNGPINGB0YbQtdC90YtcclxuICAgICAgICBsZXQgc3R5bGUgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnc3R5bGUnLCcnLGRpdik7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NjZW5lMXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7dGhpcy5waWMuc3JjfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0YXJ0LWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFuY29EaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OjFweCAzcHggMTVweCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RhcnQtYnRuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo2MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIHtkaXYsYnV0dG9ufTtcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0JlZ2lufSBmcm9tICcuL2JlZ2luL2JlZ2luJztcclxuaW1wb3J0IHtUZXRyaXN9IGZyb20gJy4vdGV0cmlzL3RldHJpcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmVzID0gW1xyXG4gICAgbmV3IEJlZ2luKCksXHJcbiAgICBuZXcgVGV0cmlzKClcclxuXTsiLCJleHBvcnQgY2xhc3MgRmlndXJle1xyXG4gICAgY29uc3RydWN0b3Ioc3RhcnRCbG9jayx0eXBlLGJhc2Upe1xyXG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5idWlsZCh0eXBlLHN0YXJ0QmxvY2spO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgcm91bmQoKXtcclxuXHJcbiAgICB9XHJcbiAgICB0b0xlZnQoKXtcclxuICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmJvZHkubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVtpXT10aGlzLmJvZHlbaV0tMTtcclxuICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIHRvUmlnaHQoKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYm9keS5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5W2ldPXRoaXMuYm9keVtpXSsxO1xyXG4gICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgdG9Eb3duKCl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmJvZHkubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVtpXT10aGlzLmJvZHlbaV0rMTA7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1aWxkKHR5cGUseCl7XHJcbiAgICAgICAgbGV0IGJvZHk9W107XHJcbiAgICAgICAgLyowLdC60L7QvtGA0LTQuNC90LDRgtCwINC30LAg0LvQtdCy0YPRjiDQs9GA0LDQvdC40YbRg1xyXG4gICAgICAgIDMt0LrQvtC+0YDQtNC40L3QsNGC0LAg0LfQsCDQv9GA0LDQstGD0Y4g0LPRgNCw0L3QuNGG0YNcclxuICAgICAgICAyLdC60L7QvtGA0LTQuNC90LDRgtCwINC30LAg0L3QuNC3ICAgICAgICBcclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIElcclxuICAgICAgICAgICAgY2FzZSAwOiBcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxLHgrMix4KzNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBKXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxMCx4KzExLHgrMTJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBMXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxMCx4KzIwLHgrMjFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBPXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxLHgrMTAseCsxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIFNcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEwLHgrMjEseCsxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vRmlndXJlIFRcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBbeCx4KzEseCsxMSx4KzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL0ZpZ3VyZSBaXHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gW3gseCsxLHgrMTEseCsxMl07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7VGV0cmlzVmlld30gZnJvbSAnLi90ZXRyaXNWaWV3JztcclxuaW1wb3J0IHtGaWd1cmV9IGZyb20gJy4vZmlndXJlJztcclxuZXhwb3J0IGNsYXNzIFRldHJpc3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFRldHJpc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0KHNjcmVlbil7ICAgICAgICBcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy52aWV3LnJlbmRlcih0aGlzLnNjcmVlbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gY29udHJvbC5vdXRwdXQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29udHJvbCA9IGNvbnRyb2wuc3RhcnRCdG47XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXggPSB0aGlzLnNsaWNlQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZSA9IHRoaXMuZ2V0RmlndXJlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM3OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMZWZ0KCk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSaWdodCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLnRvRG93bigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bkZpZ3VyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb29wKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZENvbnRyb2wgPSBjb250cm9sLnN0b3BCdG47XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ29udHJvbC5vbmNsaWNrID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHNjcmVlbi5yZW1vdmVFbGVtZW50KGNvbnRyb2wubWFpbkRpdik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGxvb3AoKXtcclxuICAgICAgICB0aGlzLnN0b3BMb29wID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL9Ce0YfQuNGJ0LDQtdC8INC60LDQvdCy0LDRgVxyXG4gICAgICAgIHRoaXMudmlldy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIC8v0KHRgtGA0L7QuNC8INGE0LjQs9GD0YDRg1xyXG4gICAgICAgIHRoaXMuY3VycmV0RmlnaXJlLmJvZHkuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRCbG9jayh0aGlzLmN1cnJldEZpZ2lyZS5iYXNlLHRoaXMubWF0cml4W2l0ZW1dLngsdGhpcy5tYXRyaXhbaXRlbV0ueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/QodGC0YDQvtC40Lwg0LzQsNGC0YDQuNGG0YNcclxuICAgICAgICB0aGlzLm1hdHJpeC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgaWYoaXRlbS5ibG9jaz4tMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuYWRkQmxvY2soaXRlbS5ibG9jayxpdGVtLngsaXRlbS55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRvd25GaWd1cmUoKXtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgdGhpcy5pc0JvdHRvbSgpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUudG9Eb3duKCk7XHJcbiAgICAgICAgICB0aGlzLmlzUmVzdWx0KCk7ICBcclxuICAgICAgICB9LDMwMCk7XHJcbiAgICB9XHJcbiAgICBpc0xlZnQoKXtcclxuICAgICAgICBsZXQgaXNTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUuYm9keS5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgaWYoaXRlbSAlIDEwID09PSAwKSBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUudG9MZWZ0KCk7IFxyXG4gICAgfVxyXG4gICAgaXNSaWdodCgpe1xyXG4gICAgICAgIGxldCBpc1N0b3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+eyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigoaXRlbSsxKSAlIDEwID09PSAwKSBpc1N0b3AgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFpc1N0b3ApdGhpcy5jdXJyZXRGaWdpcmUudG9SaWdodCgpOyBcclxuICAgIH1cclxuICAgIGlzQm90dG9tKCl7XHJcbiAgICAgICAgbGV0IGlzU3RvcD1mYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZS5ib2R5LmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtPj0xOTApaXNTdG9wPXRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5tYXRyaXhbaXRlbSsxMF0uYmxvY2s+LTEpaXNTdG9wPXRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoaXNTdG9wKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZXRGaWdpcmUuYm9keS5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2l0ZW1dLmJsb2NrPXRoaXMuY3VycmV0RmlnaXJlLmJhc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJldEZpZ2lyZSA9IHRoaXMuZ2V0RmlndXJlKCk7IFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgICBnZXRGaWd1cmUoKXtcclxuICAgICAgICBsZXQgdHlwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCkpICsgMDtcclxuICAgICAgICBsZXQgYmFzZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDApKSArIDA7XHJcbiAgICAgICAgYmFzZSA9IHRoaXMudmlldy5ibG9ja3MuYmxvY2tzQ29vcmRbYmFzZV07XHJcbiAgICAgICAgbGV0IHN0YXJ0QmxvY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDApKSArIDA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaWd1cmUoc3RhcnRCbG9jayx0eXBlLGJhc2UtMSk7XHJcbiAgICB9XHJcbiAgICBzbGljZUNhbnZhcygpe1xyXG4gICAgICAgIGxldCBtYXRyaXggPVtdO1xyXG4gICAgICAgIGZvcihsZXQgeT0wO3k8dGhpcy52aWV3LmNhbnZhcy5oZWlnaHQ7eSs9dGhpcy52aWV3LmJsb2Nrcy5oZWlnaHQpe1xyXG4gICAgICAgICAgICBmb3IobGV0IHg9MDt4PHRoaXMudmlldy5jYW52YXMud2lkdGg7eCs9dGhpcy52aWV3LmJsb2Nrcy5oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgbWF0cml4LnB1c2goe3gseSxibG9jazotMX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRyaXg7ICAgICAgICBcclxuICAgIH1cclxuICAgIGlzUmVzdWx0KCl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1hdHJpeC5sZW5ndGg7aSs9MTApe1xyXG4gICAgICAgICAgICBpZih0aGlzLm1hdHJpeFtpXS5ibG9jaz4tMSAmJiBcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2krMV0uYmxvY2s+LTEgJiYgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFtpKzJdLmJsb2NrPi0xICYmIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaSszXS5ibG9jaz4tMSAmJiBcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2krNF0uYmxvY2s+LTEgJiYgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFtpKzVdLmJsb2NrPi0xICYmIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaSs2XS5ibG9jaz4tMSAmJiBcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W2krN10uYmxvY2s+LTEgJiYgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFtpKzhdLmJsb2NrPi0xICYmIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRyaXhbaSs5XS5ibG9jaz4tMSAgXHJcbiAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0Kz0xMDA7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUZXRyaXNWaWV3e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJsb2NrSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5ibG9ja0ltZy5zcmMgPSAnbWVkaWEvYmxvY2tzLnBuZyc7XHJcbiAgICAgICAgdGhpcy5zbGljZUltZyh0aGlzLmJsb2NrSW1nKTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBzbGljZUltZyhpbWcpe1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gaW1nLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IGJsb2Nrc0Nvb3JkID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXg9MDtpbmRleDxpbWcud2lkdGg7aW5kZXggKz0gaGVpZ2h0KSBibG9ja3NDb29yZC5wdXNoKGluZGV4KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJsb2NrcyA9IHtibG9ja3NDb29yZCxoZWlnaHR9OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoc2NyZWVuKXtcclxuICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQvtCx0LXRgNGC0LrRg1xyXG4gICAgICAgIGxldCBtYWluRGl2ID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1haW5EaXYuaWQgPSAnbWFpbic7XHJcbiAgICAgICAgLy/QodC+0LfQtNCw0LXQvCDRgtCw0LHQu9C+INC00LvRjyDQstGL0LLQvtC00LAg0LjQvdGE0L7RgNC80LDRhtC40LhcclxuICAgICAgICBsZXQgdGFibG8gPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2JywnJyxtYWluRGl2KTtcclxuICAgICAgICB0YWJsby5pZCA9ICd0YWJsbyc7XHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0LrQsNC90LLQsNGBXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdjYW52YXMnLCcnLG1haW5EaXYpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNjcmVlbi53aWR0aC8yO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzY3JlZW4uaGVpZ2h0O1xyXG4gICAgICAgIC8v0KHQvtC30LTQsNC10Lwg0YHRgtC40LvQuCDQvtGE0L7RgNC80LvQtdC90LjRj1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdzdHlsZScsJycsbWFpbkRpdik7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJUZXh0ID0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtYWlue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHtzY3JlZW4uaGVpZ2h0fXB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JHtzY3JlZW4ud2lkdGh9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKG1lZGlhL2ZvbjEuanBnKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3RhYmxve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHtzY3JlZW4uaGVpZ2h0fXB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JHtzY3JlZW4ud2lkdGgvMn1weDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjYW52YXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDE1MywgNTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWwsLm91dHB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IGJvbGQgMjBweCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3V0cHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDQwcHggQmFuY29EaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhbmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogNjBweCBCYW5jb0RpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzoxcHggM3B4IDE1cHggcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/QodC+0LfQtNCw0LXQvCDRgtCw0LHQu9C+INC00LvRjyDQstGL0LLQvtC00LAg0L7Rh9C60L7QslxyXG4gICAgICAgIGxldCByZXN1bHQgPSBzY3JlZW4uYnVpbGRFbGVtbWVudCgnZGl2JywncmVzdWx0Jyx0YWJsbyk7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ3AnLCdsYWJlbCcscmVzdWx0KTtcclxuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSAn0J7Rh9C60Lg6JztcclxuICAgICAgICBsZXQgb3V0cHV0ID0gc2NyZWVuLmJ1aWxkRWxlbW1lbnQoJ3AnLCdvdXRwdXQnLHJlc3VsdCk7XHJcbiAgICAgICAgb3V0cHV0LmlubmVyVGV4dCA9ICcwMDAnO1xyXG5cclxuICAgICAgICAvL9Ch0L7Qt9C00LDQtdC8INC/0LDQvdC10LvRjCDRg9C/0YDQsNCy0LvQtdC90LjRj1xyXG4gICAgICAgIGxldCBwYW5lbCA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdkaXYnLCdwYW5lbCcsdGFibG8pO1xyXG4gICAgICAgIGxldCBzdGFydEJ0biA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdhJywnYnRuJyxwYW5lbCk7XHJcbiAgICAgICAgc3RhcnRCdG4uaW5uZXJUZXh0ID0gJ1NUQVJUJztcclxuICAgICAgICBsZXQgc3RvcEJ0biA9IHNjcmVlbi5idWlsZEVsZW1tZW50KCdhJywnYnRuJyxwYW5lbCk7XHJcbiAgICAgICAgc3RvcEJ0bi5pbm5lclRleHQgPSAnU3RvcCc7XHJcblxyXG4gICAgICAgIC8v0JTQvtC/0L7Qu9C90Y/QtdC8INGB0LLQvtC50YHRgtCy0LAg0L7QsdGK0LXQutGC0LBcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNhbnZhc0N0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAvL9CS0L7Qt9GA0LDRidCw0LXQvCDQutC+0L3RgtGA0L7Qu9C70LXRgNGDXHJcbiAgICAgICAgcmV0dXJuIHttYWluRGl2LG91dHB1dCwgc3RhcnRCdG4sIHN0b3BCdG59O1xyXG4gICAgfVxyXG4gICAgYWRkQmxvY2soaW5kZXhCbG9jayx4LHkpeyAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW52YXNDdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmJsb2NrSW1nLCBcclxuICAgICAgICAgICAgaW5kZXhCbG9jaywgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICB0aGlzLmJsb2Nrcy5oZWlnaHQsIFxyXG4gICAgICAgICAgICB0aGlzLmJsb2Nrcy5oZWlnaHQsIFxyXG4gICAgICAgICAgICB4LCBcclxuICAgICAgICAgICAgeSwgXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzLmhlaWdodCwgXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjbGVhckNhbnZhcygpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY3JlZW57XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aD02NDAsaGVpZ2h0PTY0MCl7XHJcbiAgICAgICAgLy/Qn9C10YDQstC+0L3QsNGH0LDQu9GM0L3QsNGPINC90LDRgdGC0YDQvtC50LrQsCDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLndpZHRoPXdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PWhlaWdodDtcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHRoaXMuYm9keS5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGgrJ3B4JztcclxuICAgICAgICB0aGlzLmJvZHkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQrJ3B4JzsgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0KHQvtC30LTQsNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L3QsCDRjdC60YDQsNC90LVcclxuICAgIGJ1aWxkRWxlbW1lbnQoZWxlbSxlbGVtQ2xhc3M9JycscGFyZW50PXRoaXMuYm9keSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsZWxlbUNsYXNzKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL9Cj0LTQsNC70LjRgtGMINC10LvQtdC80LXQvdGCINGBINGN0LrRgNCw0L3QsFxyXG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==