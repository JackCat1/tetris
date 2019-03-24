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
    this.currentScene = 0;
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.scenes[this.currentScene].init(this.screen);
    }
  }, {
    key: "changeScene",
    value: function changeScene() {
      this.changeScene = this.currentScene === this.scenes.length ? 0 : this.currentScene + 1;
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/scenes/begin/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Begin =
/*#__PURE__*/
function () {
  function Begin() {
    var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Begin);

    console.log('I am Begin scene'); // this.screen = screen;
    // this.view = new View(screen);        
  }

  _createClass(Begin, [{
    key: "init",
    value: function init(screen) {
      this.view = new _view__WEBPACK_IMPORTED_MODULE_0__["View"]();
      this.view.init(screen);
    }
  }]);

  return Begin;
}();

/***/ }),

/***/ "./src/scenes/begin/view.js":
/*!**********************************!*\
  !*** ./src/scenes/begin/view.js ***!
  \**********************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View() {
    _classCallCheck(this, View);

    this.fon = new Image();
    this.fon.src = './media/fon1.jpg';
    this.buttonText = 'START';
  }

  _createClass(View, [{
    key: "init",
    value: function init(screen) {
      var _this = this;

      this.fon.addEventListener('load', function () {
        screen.img(_this.fon);
        screen.setText(_this.buttonText, {
          fontSize: '80px',
          fontStyle: 'BancoDi',
          x: screen.width / 2,
          y: screen.height / 2,
          color: 'yellow'
        });
      });
    }
  }]);

  return View;
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

var scenes = [new _begin_begin__WEBPACK_IMPORTED_MODULE_0__["Begin"]()];

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

    this.width = width;
    this.height = height;
    this.canvas = this.getCanvas();
    this.canvasContext = this.canvas.getContext('2d');
  }

  _createClass(Screen, [{
    key: "getCanvas",
    value: function getCanvas() {
      var canvas = document.getElementsByTagName('canvas');
      if (canvas.length > 0) return canvas[0];else {
        canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        document.body.appendChild(canvas);
        return canvas;
      }
    }
  }, {
    key: "rect",
    value: function rect() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'black';
      this.canvasContext.fillStyle = color;
      this.canvasContext.fillRect(x, y, width, height);
    }
  }, {
    key: "img",
    value: function img(_img) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.canvasContext.drawImage(_img, x, y);
    }
  }, {
    key: "setText",
    value: function setText(textBody, _ref) {
      var fontSize = _ref.fontSize,
          fontStyle = _ref.fontStyle,
          x = _ref.x,
          y = _ref.y,
          _ref$align = _ref.align,
          align = _ref$align === void 0 ? 'center' : _ref$align,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? 'white' : _ref$color;
      this.canvasContext.font = "".concat(fontSize, " ").concat(fontStyle);
      this.canvasContext.textAlign = align;
      this.canvasContext.fillStyle = color;
      this.canvasContext.fillText(textBody, x, y);
    }
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYmVnaW4vYmVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iZWdpbi92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvc2NlbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiXSwibmFtZXMiOlsiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsInNjZW5lcyIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJjaGFuZ2VTY2VuZSIsImxlbmd0aCIsIndpbmRvdyIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiQmVnaW4iLCJ2aWV3IiwiVmlldyIsImZvbiIsIkltYWdlIiwic3JjIiwiYnV0dG9uVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWciLCJzZXRUZXh0IiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiY29sb3IiLCJjYW52YXMiLCJnZXRDYW52YXMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0ZXh0Qm9keSIsImFsaWduIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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S0csYUFBTCxDQUFtQlEsUUFBbkIsQ0FBNEJmLENBQTVCLEVBQThCRSxDQUE5QixFQUFnQ0QsS0FBaEMsRUFBc0NFLE1BQXRDO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLHdCQXNCUVAsSUF0QlIsRUFzQm9CO0FBQUEsVUFBUkksQ0FBUSx1RUFBTixDQUFNO0FBQUEsVUFBSkUsQ0FBSSx1RUFBRixDQUFFO0FBQ1osV0FBS0ssYUFBTCxDQUFtQlMsU0FBbkIsQ0FBNkJwQixJQUE3QixFQUFpQ0ksQ0FBakMsRUFBbUNFLENBQW5DO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLDRCQXlCWWUsUUF6QlosUUF5QjJFO0FBQUEsVUFBckRuQixRQUFxRCxRQUFyREEsUUFBcUQ7QUFBQSxVQUE1Q0MsU0FBNEMsUUFBNUNBLFNBQTRDO0FBQUEsVUFBbENDLENBQWtDLFFBQWxDQSxDQUFrQztBQUFBLFVBQWhDRSxDQUFnQyxRQUFoQ0EsQ0FBZ0M7QUFBQSw0QkFBOUJnQixLQUE4QjtBQUFBLFVBQTlCQSxLQUE4QiwyQkFBeEIsUUFBd0I7QUFBQSw0QkFBZmQsS0FBZTtBQUFBLFVBQWZBLEtBQWUsMkJBQVQsT0FBUztBQUNuRSxXQUFLRyxhQUFMLENBQW1CWSxJQUFuQixhQUE2QnJCLFFBQTdCLGNBQXlDQyxTQUF6QztBQUNBLFdBQUtRLGFBQUwsQ0FBbUJhLFNBQW5CLEdBQStCRixLQUEvQjtBQUNBLFdBQUtYLGFBQUwsQ0FBbUJPLFNBQW5CLEdBQStCVixLQUEvQjtBQUNBLFdBQUtHLGFBQUwsQ0FBbUJjLFFBQW5CLENBQTRCSixRQUE1QixFQUFxQ2pCLENBQXJDLEVBQXVDRSxDQUF2QztBQUNIO0FBOUJMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy9nYW1lLXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7c2NlbmVzfSBmcm9tICcuL3NjZW5lcy9zY2VuZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1le1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHNjZW5lcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IDA7ICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZV0uaW5pdCh0aGlzLnNjcmVlbik7ICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNoYW5nZVNjZW5lKCl7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lID09PSB0aGlzLnNjZW5lcy5sZW5ndGggPyAwIDogdGhpcy5jdXJyZW50U2NlbmUgKyAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG53aW5kb3cub25sb2FkID0gKCk9PntcclxuICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0Li4uJyk7XHJcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBnYW1lLmluaXQoKTtcclxuICAgIFxyXG59O1xyXG4iLCJpbXBvcnQge1ZpZXd9IGZyb20gJy4vdmlldyc7XHJcbmV4cG9ydCBjbGFzcyBCZWdpbntcclxuICAgIGNvbnN0cnVjdG9yKHNjcmVlbiA9IHt9KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnSSBhbSBCZWdpbiBzY2VuZScpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIC8vIHRoaXMudmlldyA9IG5ldyBWaWV3KHNjcmVlbik7ICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXQoc2NyZWVuKXtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVmlldygpO1xyXG4gICAgICAgIHRoaXMudmlldy5pbml0KHNjcmVlbik7ICAgICAgICBcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBWaWV3e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmZvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuZm9uLnNyYyA9ICcuL21lZGlhL2ZvbjEuanBnJztcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSAnU1RBUlQnO1xyXG4gICAgfVxyXG4gICAgaW5pdChzY3JlZW4pe1xyXG4gICAgICAgIHRoaXMuZm9uLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCgpPT57XHJcbiAgICAgICAgICAgIHNjcmVlbi5pbWcodGhpcy5mb24pO1xyXG4gICAgICAgICAgICBzY3JlZW4uc2V0VGV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTonODBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOidCYW5jb0RpJyxcclxuICAgICAgICAgICAgICAgICAgICB4OnNjcmVlbi53aWR0aC8yLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6c2NyZWVuLmhlaWdodC8yLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOid5ZWxsb3cnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0JlZ2lufSBmcm9tICcuL2JlZ2luL2JlZ2luJztcclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXHJcbiAgICBuZXcgQmVnaW4oKVxyXG5dOyIsImV4cG9ydCBjbGFzcyBTY3JlZW57XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aD02NDAsaGVpZ2h0PTY0MCl7XHJcbiAgICAgICAgdGhpcy53aWR0aD13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodD1oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmdldENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBnZXRDYW52YXMoKXtcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGlmKGNhbnZhcy5sZW5ndGg+MCkgcmV0dXJuIGNhbnZhc1swXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVjdCh4PTAseT0wLHdpZHRoPTEwLGhlaWdodD0xMCxjb2xvcj0nYmxhY2snKXtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxSZWN0KHgseSx3aWR0aCxoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgaW1nKGltZyx4PTAseT0wKXtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKGltZyx4LHkpO1xyXG4gICAgfVxyXG4gICAgc2V0VGV4dCh0ZXh0Qm9keSx7Zm9udFNpemUsZm9udFN0eWxlLHgseSxhbGlnbj0nY2VudGVyJyxjb2xvcj0nd2hpdGUnfSl7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZvbnQgPSBgJHtmb250U2l6ZX0gJHtmb250U3R5bGV9YDtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQudGV4dEFsaWduID0gYWxpZ247XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxUZXh0KHRleHRCb2R5LHgseSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9