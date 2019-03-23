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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYmVnaW4vYmVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iZWdpbi92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvc2NlbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4uanMiXSwibmFtZXMiOlsiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsInNjZW5lcyIsImN1cnJlbnRTY2VuZSIsImluaXQiLCJjaGFuZ2VTY2VuZSIsImxlbmd0aCIsIndpbmRvdyIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiQmVnaW4iLCJ2aWV3IiwiVmlldyIsImZvbiIsIkltYWdlIiwic3JjIiwiYnV0dG9uVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWciLCJzZXRUZXh0IiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiY29sb3IiLCJjYW52YXMiLCJnZXRDYW52YXMiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ0ZXh0Qm9keSIsImFsaWduIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFDQSxXQUFLRyxhQUFMLENBQW1CUSxRQUFuQixDQUE0QmYsQ0FBNUIsRUFBOEJFLENBQTlCLEVBQWdDRCxLQUFoQyxFQUFzQ0UsTUFBdEM7QUFDSDtBQXJCTDtBQUFBO0FBQUEsd0JBc0JRUCxJQXRCUixFQXNCb0I7QUFBQSxVQUFSSSxDQUFRLHVFQUFOLENBQU07QUFBQSxVQUFKRSxDQUFJLHVFQUFGLENBQUU7QUFDWixXQUFLSyxhQUFMLENBQW1CUyxTQUFuQixDQUE2QnBCLElBQTdCLEVBQWlDSSxDQUFqQyxFQUFtQ0UsQ0FBbkM7QUFDSDtBQXhCTDtBQUFBO0FBQUEsNEJBeUJZZSxRQXpCWixRQXlCMkU7QUFBQSxVQUFyRG5CLFFBQXFELFFBQXJEQSxRQUFxRDtBQUFBLFVBQTVDQyxTQUE0QyxRQUE1Q0EsU0FBNEM7QUFBQSxVQUFsQ0MsQ0FBa0MsUUFBbENBLENBQWtDO0FBQUEsVUFBaENFLENBQWdDLFFBQWhDQSxDQUFnQztBQUFBLDRCQUE5QmdCLEtBQThCO0FBQUEsVUFBOUJBLEtBQThCLDJCQUF4QixRQUF3QjtBQUFBLDRCQUFmZCxLQUFlO0FBQUEsVUFBZkEsS0FBZSwyQkFBVCxPQUFTO0FBQ25FLFdBQUtHLGFBQUwsQ0FBbUJZLElBQW5CLGFBQTZCckIsUUFBN0IsY0FBeUNDLFNBQXpDO0FBQ0EsV0FBS1EsYUFBTCxDQUFtQmEsU0FBbkIsR0FBK0JGLEtBQS9CO0FBQ0EsV0FBS1gsYUFBTCxDQUFtQk8sU0FBbkIsR0FBK0JWLEtBQS9CO0FBQ0EsV0FBS0csYUFBTCxDQUFtQmMsUUFBbkIsQ0FBNEJKLFFBQTVCLEVBQXFDakIsQ0FBckMsRUFBdUNFLENBQXZDO0FBQ0g7QUE5Qkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2dhbWUtc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuaW1wb3J0IHtzY2VuZXN9IGZyb20gJy4vc2NlbmVzL3NjZW5lcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gMDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lXS5pbml0KHRoaXMuc2NyZWVuKTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2hhbmdlU2NlbmUoKXtcclxuICAgICAgICB0aGlzLmNoYW5nZVNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmUgPT09IHRoaXMuc2NlbmVzLmxlbmd0aCA/IDAgOiB0aGlzLmN1cnJlbnRTY2VuZSArIDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0dhbWV9IGZyb20gJy4vZ2FtZSc7XHJcbndpbmRvdy5vbmxvYWQgPSAoKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnQuLi4nKTtcclxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcclxuICAgIGdhbWUuaW5pdCgpO1xyXG4gICAgXHJcbn07XHJcbiIsImltcG9ydCB7Vmlld30gZnJvbSAnLi92aWV3JztcclxuZXhwb3J0IGNsYXNzIEJlZ2lue1xyXG4gICAgY29uc3RydWN0b3Ioc2NyZWVuID0ge30pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJIGFtIEJlZ2luIHNjZW5lJyk7XHJcbiAgICAgICAgLy8gdGhpcy5zY3JlZW4gPSBzY3JlZW47XHJcbiAgICAgICAgLy8gdGhpcy52aWV3ID0gbmV3IFZpZXcoc2NyZWVuKTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdChzY3JlZW4pe1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KCk7XHJcbiAgICAgICAgdGhpcy52aWV3LmluaXQoc2NyZWVuKTsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFZpZXd7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZm9uID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5mb24uc3JjID0gJy4vbWVkaWEvZm9uMS5qcGcnO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdTVEFSVCc7XHJcbiAgICB9XHJcbiAgICBpbml0KHNjcmVlbil7XHJcbiAgICAgICAgdGhpcy5mb24uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PntcclxuICAgICAgICAgICAgc2NyZWVuLmltZyh0aGlzLmZvbik7XHJcbiAgICAgICAgICAgIHNjcmVlbi5zZXRUZXh0KHRoaXMuYnV0dG9uVGV4dCx7Zm9udFNpemU6JzgwcHgnLGZvbnRTdHlsZTonQmFuY29EaScseDpzY3JlZW4ud2lkdGgvMix5OnNjcmVlbi5oZWlnaHQvMixjb2xvcjoneWVsbG93J30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxufSIsImltcG9ydCB7QmVnaW59IGZyb20gJy4vYmVnaW4vYmVnaW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lcyA9IFtcclxuICAgIG5ldyBCZWdpbigpXHJcbl07IiwiZXhwb3J0IGNsYXNzIFNjcmVlbntcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoPTY0MCxoZWlnaHQ9NjQwKXtcclxuICAgICAgICB0aGlzLndpZHRoPXdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PWhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIGdldENhbnZhcygpe1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJyk7XHJcbiAgICAgICAgaWYoY2FudmFzLmxlbmd0aD4wKSByZXR1cm4gY2FudmFzWzBdO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWN0KHg9MCx5PTAsd2lkdGg9MTAsaGVpZ2h0PTEwLGNvbG9yPSdibGFjaycpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFJlY3QoeCx5LHdpZHRoLGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBpbWcoaW1nLHg9MCx5PTApe1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UoaW1nLHgseSk7XHJcbiAgICB9XHJcbiAgICBzZXRUZXh0KHRleHRCb2R5LHtmb250U2l6ZSxmb250U3R5bGUseCx5LGFsaWduPSdjZW50ZXInLGNvbG9yPSd3aGl0ZSd9KXtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZm9udCA9IGAke2ZvbnRTaXplfSAke2ZvbnRTdHlsZX1gO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dC50ZXh0QWxpZ24gPSBhbGlnbjtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0LmZpbGxUZXh0KHRleHRCb2R5LHgseSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9