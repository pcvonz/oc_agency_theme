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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_linked_scroll_jack__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_linked_scroll_jack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_linked_scroll_jack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuAnim_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuAnim_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MenuAnim_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookies_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animejs__);
// Code for the landing page
// import playSplash from './splashLoader.js'





let windowHash = window.location.hash.replace('_', '')

let path = __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.path('#path1466')
let pathTwo = __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.path('#path2')

let motionPath = __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
  targets: '.follow',
  translateX: path('x'), // Follow the x values from the path `Object`
  translateY: path('y'), // Follow the y values from the path `Object`
  easing: 'linear',
  duration: 50000,
  loop: true
})

let motionPathTwo = __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
  targets: '.follow2',
  translateX: pathTwo('x'), // Follow the x values from the path `Object`
  translateY: pathTwo('y'), // Follow the y values from the path `Object`
  easing: 'linear',
  duration: 80000,
  loop: true
})

let scrollList
let content = document.querySelectorAll('.content-wrapper > div')

scrollList = new __WEBPACK_IMPORTED_MODULE_0_linked_scroll_jack___default.a(content, 800)

let minWidthContainer = document.querySelectorAll('.min-height')
window.onload = function () {
  // initiate solar system 
  document.querySelector('.follow').setAttribute('class', document.querySelector('.follow').getAttribute('class') + ' full-opacity')
  document.querySelector('.follow2').setAttribute('class', document.querySelector('.follow2').getAttribute('class') + ' full-opacity')

  // playSplash()
  if (window.location.hash !== '') {
    windowHash = window.location.hash.replace('_', '')
    document.querySelector('.l-slider').scrollTop = document.querySelector(windowHash).offsetTop
  } else {
    windowHash = '#home'
    window.location.hash = 'home'
  }
}

// Only called if
// A: Sidebar menu is used
// B: CSS Property 'scroll-behavior: smooth' is supported
function changeHash (ev) {
  if (window.location.hash && hashExists()) {
    windowHash = window.location.hash.replace('_', '')
    updateProjectList()
    // Set the menu fill depending on background
    // Assumes that anything not home will have a dark background

    // Change width based on hash
    if (windowHash !== '#home') {
      minWidthContainer.forEach((el) => {
        el.setAttribute('style', 'max-width: 1200px')
      })
    } else {
      minWidthContainer.forEach((el) => {
        el.setAttribute('style', 'max-width: 800px')
      })
    }
  }
}

function hashExists () {
  if (document.querySelector('a[href="' + windowHash + '"]') === null) {
    return false
  } else {
    return true
  }
}
changeHash()
window.addEventListener('hashchange', changeHash)

// Functions that run when hash changes
function updateProjectList () {
  let prevCurr = document.querySelector('#current')
  let newCurr = document.querySelector(`a[href="${windowHash}"]`)
  prevCurr.setAttribute('id', '')
  newCurr.setAttribute('id', 'current')
}

// Set up smooth scroll between projects
// Set scroll area to be l-slider
let MOUSE_OVER = true
let scrollAccum = 0

let lSlider = document.querySelector('.l-slider')
lSlider.addEventListener('mouseenter', (e) => {
  MOUSE_OVER = true
})

lSlider.addEventListener('mouseexit', (e) => {
  MOUSE_OVER = false
})

lSlider.addEventListener('scroll', function (e) {
  if (MOUSE_OVER) {
    changeSlide(e)
  }
})

let deltaY = 0
function changeSlide (event) {
  let lSlider = document.querySelector('.l-slider')
  deltaY = deltaY - lSlider.scrollTop
  if (lSlider.scrollTop > lSlider.offsetHeight) {
    document.querySelector('label > svg').setAttribute('style', 'fill: white')
  } else {
    document.querySelector('label > svg').setAttribute('style', 'fill: ')
  }
  if (deltaY < 0) {
    if (scrollList.currentNode.next !== undefined && lSlider.scrollTop >= scrollList.currentNode.next.curr.offsetTop) {
      scrollList.nextNode()
    }
  }
  if (deltaY > 0) {
    if (scrollList.currentNode.prev !== undefined && lSlider.scrollTop <= scrollList.currentNode.prev.curr.offsetTop) {
      scrollList.prevNode()
    }
  }
  deltaY = lSlider.scrollTop
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LinkedScrollList"] = factory();
	else
		root["LinkedScrollList"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Class that takes in a list of of HTML nodes and
// and 'shifts' between them. Pretty generic, but
// can be used to implement simple 'scroll-jack'-like behavior.

var _ScrollObject = __webpack_require__(1);

var _ScrollObject2 = _interopRequireDefault(_ScrollObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedScrollList = function () {
  function LinkedScrollList(content, breakpoint) {
    _classCallCheck(this, LinkedScrollList);

    this.content = content;
    this.currentNode = new _ScrollObject2.default(content[0]);
    this.breakpoint = breakpoint;
    for (var i = 1; i < content.length; i++) {
      if (i > 0 && i < content.length - 1) {
        var temp = new _ScrollObject2.default(content[i]);
        temp.next = new _ScrollObject2.default(content[i + 1]);
        temp.prev = this.currentNode;
        this.currentNode.next = temp;
        this.currentNode = this.currentNode.next;
      } else {
        var _temp = new _ScrollObject2.default(content[i]);
        _temp.prev = this.currentNode;
        this.currentNode.next = _temp;
      }
      if (this.currentNode.curr.id === undefined) {
        this.currentNode.curr.id = 'node' + i;
      }
    }
    this.setToFirstNode();
    this.setCurrentNode(window.location.hash);
  }

  _createClass(LinkedScrollList, [{
    key: 'setToFirstNode',
    value: function setToFirstNode() {
      while (this.currentNode.prev != null) {
        this.currentNode = this.currentNode.prev;
      }
    }
  }, {
    key: 'getBreakpoint',
    value: function getBreakpoint() {
      return this.breakpoint;
    }
  }, {
    key: 'setBreakpoint',
    value: function setBreakpoint(breakpoint) {
      this.breakpoint = breakpoint;
    }
    // Sets current scroll to defined hash

  }, {
    key: 'setCurrentNode',
    value: function setCurrentNode(hash, cb) {
      var temp = this.currentNode;
      while (temp.prev != null) {
        temp = temp.prev;
      }
      for (var i = 0; i < this.length; i++) {
        if ('#' + temp.curr.id === hash) {
          this.currentNode = temp;
          if (cb) {
            cb();
          }
          return 'Found node!';
        }
        temp = temp.next;
      }
      if (cb) {
        cb();
      }
      return 'Node not found';
    }
  }, {
    key: 'nextNode',
    value: function nextNode() {
      if (this.currentNode.next != null && window.innerWidth > this.getBreakpoint()) {
        this.currentNode = this.currentNode.next;
        window.location.replace(window.location.pathname + '#' + this.currentNode.curr.id + '_');
      }
    }
  }, {
    key: 'prevNode',
    value: function prevNode() {
      if (this.currentNode.prev != null && window.innerWidth > this.getBreakpoint()) {
        this.currentNode = this.currentNode.prev;
        window.location.replace(window.location.pathname + '#' + this.currentNode.curr.id + '_');
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var temp = this.currentNode;
      console.log('object:');
      console.log(temp + '\n');
      while (temp.prev != null) {
        temp = temp.prev;
      }
      while (temp.next != null) {
        temp = temp.next;
        console.log('object:');
        console.log(temp + '\n');
      }
    }
  }, {
    key: 'length',
    get: function get() {
      return this.content.length;
    }
  }]);

  return LinkedScrollList;
}();

exports.default = LinkedScrollList;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Helper class for scrollLinkedList
var ScrollObject = function () {
  function ScrollObject(curr) {
    _classCallCheck(this, ScrollObject);

    this.c = curr;
  }

  _createClass(ScrollObject, [{
    key: "toString",
    value: function toString() {
      return "" + this.c.id;
    }
  }, {
    key: "next",
    set: function set(n) {
      this.n = n;
    },
    get: function get() {
      return this.n;
    }
  }, {
    key: "prev",
    set: function set(p) {
      this.p = p;
    },
    get: function get() {
      return this.p;
    }
  }, {
    key: "curr",
    set: function set(c) {
      this.c = c;
    },
    get: function get() {
      return this.c;
    }
  }]);

  return ScrollObject;
}();

exports.default = ScrollObject;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhZTZkYjlhZTljMjhmMDQzMTFkMSIsIndlYnBhY2s6Ly8vLi9saWIvTGlua2VkU2Nyb2xsTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU2Nyb2xsT2JqZWN0LmpzIl0sIm5hbWVzIjpbIkxpbmtlZFNjcm9sbExpc3QiLCJjb250ZW50IiwiYnJlYWtwb2ludCIsImN1cnJlbnROb2RlIiwiaSIsImxlbmd0aCIsInRlbXAiLCJuZXh0IiwicHJldiIsImN1cnIiLCJpZCIsInVuZGVmaW5lZCIsInNldFRvRmlyc3ROb2RlIiwic2V0Q3VycmVudE5vZGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJjYiIsImlubmVyV2lkdGgiLCJnZXRCcmVha3BvaW50IiwicmVwbGFjZSIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsIlNjcm9sbE9iamVjdCIsImMiLCJuIiwicCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7cWpCQzdEQTtBQUNBO0FBQ0E7O0FB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QSxDQUFMLEdBQVNBLENBQVQ7QUFDRCxLO3dCQVVXO0FBQ1YsYUFBTyxLQUFLQSxDQUFaO0FBQ0Q7OztzQkFYU0YsQyxFQUFHO0FBQ1gsV0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0QsSzt3QkFDVztBQUNWLGFBQU8sS0FBS0EsQ0FBWjtBQUNEOzs7Ozs7a0JBZmtCRCxZIiwiZmlsZSI6IkxpbmtlZFNjcm9sbExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMaW5rZWRTY3JvbGxMaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxpbmtlZFNjcm9sbExpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWU2ZGI5YWU5YzI4ZjA0MzExZDEiLCIvLyBDbGFzcyB0aGF0IHRha2VzIGluIGEgbGlzdCBvZiBvZiBIVE1MIG5vZGVzIGFuZFxuLy8gYW5kICdzaGlmdHMnIGJldHdlZW4gdGhlbS4gUHJldHR5IGdlbmVyaWMsIGJ1dFxuLy8gY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IHNpbXBsZSAnc2Nyb2xsLWphY2snLWxpa2UgYmVoYXZpb3IuXG5cbmltcG9ydCBTY3JvbGxPYmplY3QgZnJvbSAnLi9TY3JvbGxPYmplY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtlZFNjcm9sbExpc3Qge1xuICBjb25zdHJ1Y3RvciAoY29udGVudCwgYnJlYWtwb2ludCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5ldyBTY3JvbGxPYmplY3QoY29udGVudFswXSlcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+IDAgJiYgaSA8IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICBsZXQgdGVtcCA9IG5ldyBTY3JvbGxPYmplY3QoY29udGVudFtpXSlcbiAgICAgICAgdGVtcC5uZXh0ID0gbmV3IFNjcm9sbE9iamVjdChjb250ZW50W2kgKyAxXSlcbiAgICAgICAgdGVtcC5wcmV2ID0gdGhpcy5jdXJyZW50Tm9kZVxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlLm5leHQgPSB0ZW1wXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLm5leHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFNjcm9sbE9iamVjdChjb250ZW50W2ldKVxuICAgICAgICB0ZW1wLnByZXYgPSB0aGlzLmN1cnJlbnROb2RlXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUubmV4dCA9IHRlbXBcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQgPSBgbm9kZSR7aX1gO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFRvRmlyc3ROb2RlKClcbiAgICB0aGlzLnNldEN1cnJlbnROb2RlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgfVxuICBzZXRUb0ZpcnN0Tm9kZSAoKSB7XG4gICAgd2hpbGUgKHRoaXMuY3VycmVudE5vZGUucHJldiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wcmV2O1xuICAgIH1cbiAgfVxuICBnZXQgbGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aFxuICB9XG4gIFxuICBnZXRCcmVha3BvaW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50XG4gIH1cbiAgc2V0QnJlYWtwb2ludCAoYnJlYWtwb2ludCkge1xuICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRcbiAgfVxuICAvLyBTZXRzIGN1cnJlbnQgc2Nyb2xsIHRvIGRlZmluZWQgaGFzaFxuICBzZXRDdXJyZW50Tm9kZSAoaGFzaCwgY2IpIHtcbiAgICBsZXQgdGVtcCA9IHRoaXMuY3VycmVudE5vZGU7XG4gICAgd2hpbGUgKCB0ZW1wLnByZXYgIT0gbnVsbCApIHtcbiAgICAgIHRlbXAgPSB0ZW1wLnByZXZcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYCMke3RlbXAuY3Vyci5pZH1gID09PSBoYXNoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0ZW1wO1xuICAgICAgICBpZiAoY2IpIHsgY2IoKSB9XG4gICAgICAgIHJldHVybiAnRm91bmQgbm9kZSEnXG4gICAgICB9XG4gICAgICB0ZW1wID0gdGVtcC5uZXh0O1xuICAgIH1cbiAgICBpZiAoY2IpIHsgY2IoKSB9XG4gICAgcmV0dXJuICdOb2RlIG5vdCBmb3VuZCc7XG4gIH1cbiAgbmV4dE5vZGUgKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLm5leHQgIT0gbnVsbCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IHRoaXMuZ2V0QnJlYWtwb2ludCgpKSB7XG4gICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcjJyArIHRoaXMuY3VycmVudE5vZGUuY3Vyci5pZCsnXycpXG4gICAgICB9XG4gIH1cbiAgcHJldk5vZGUgKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLnByZXYgIT0gbnVsbCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IHRoaXMuZ2V0QnJlYWtwb2ludCgpKSB7XG4gICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wcmV2XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnIycgKyB0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQrJ18nKVxuICAgIH1cbiAgfVxuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHRlbXAgPSB0aGlzLmN1cnJlbnROb2RlXG4gICAgY29uc29sZS5sb2coJ29iamVjdDonKVxuICAgIGNvbnNvbGUubG9nKHRlbXAgKyAnXFxuJylcbiAgICB3aGlsZSAodGVtcC5wcmV2ICE9IG51bGwpIHtcbiAgICAgIHRlbXAgPSB0ZW1wLnByZXZcbiAgICB9XG4gICAgd2hpbGUgKHRlbXAubmV4dCAhPSBudWxsKSB7XG4gICAgICB0ZW1wID0gdGVtcC5uZXh0XG4gICAgICBjb25zb2xlLmxvZygnb2JqZWN0OicpXG4gICAgICBjb25zb2xlLmxvZyh0ZW1wICsgJ1xcbicpXG4gICAgfSB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTGlua2VkU2Nyb2xsTGlzdC5qcyIsIi8vIEhlbHBlciBjbGFzcyBmb3Igc2Nyb2xsTGlua2VkTGlzdFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKGN1cnIpIHtcbiAgICB0aGlzLmMgPSBjdXJyXG4gIH1cbiAgc2V0IG5leHQgKG4pIHtcbiAgICB0aGlzLm4gPSBuXG4gIH1cbiAgc2V0IHByZXYgKHApIHtcbiAgICB0aGlzLnAgPSBwXG4gIH1cbiAgc2V0IGN1cnIgKGMpIHtcbiAgICB0aGlzLmMgPSBjXG4gIH1cbiAgZ2V0IGN1cnIgKCkge1xuICAgIHJldHVybiB0aGlzLmNcbiAgfVxuICBnZXQgbmV4dCAoKSB7XG4gICAgcmV0dXJuIHRoaXMublxuICB9XG4gIGdldCBwcmV2ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wXG4gIH1cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmMuaWR9YFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvU2Nyb2xsT2JqZWN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 15 */
/***/ (function(module, exports) {

let barTime = {
  duration: 150,
  fill: 'forwards',
  iterations: 1
}
let topBar = [
  {
    transform: 'translatey(0) translatex(0) rotate(0)'
  },
  {
    transform: 'translatey(1.5px) translatex(1px) rotate(45deg)'
  }
]

let midBar = [
  {
    transform: 'translatey(0) translatex(0) rotate(0)'
  },
  {
    transform: 'translatey(5px) translatex(-1.7px) rotate(-45deg)'
  }
]
let botBar = [
  {
    transform: 'translatey(0)'
  },
  {
    transform: 'translatey(10px)'
  }
]

let top = document.querySelector('svg #path1989')
let mid = document.querySelector('svg #path1987')
let bot = document.querySelector('svg #path1975')
let topAnim = top.animate(
  topBar,
  barTime
)
let midAnim = mid.animate(
  midBar,
  barTime
)
let botAnim = bot.animate(
  botBar,
  barTime
)
topAnim.pause()
midAnim.pause()
botAnim.pause()
let menuClosed = true
document.querySelector('#nav').checked = false
document.querySelector('.menuanim svg').addEventListener('click', (ev) => {
  if (menuClosed) {
    topAnim.playbackRate = 1
    midAnim.playbackRate = 1
    botAnim.playbackRate = 1
  } else {
    topAnim.playbackRate = -1
    midAnim.playbackRate = -1
    botAnim.playbackRate = -1
  }
  topAnim.play()
  midAnim.play()
  botAnim.play()
  menuClosed = !menuClosed
})


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* \
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #3 - July 13th, 2017
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|  https://github.com/madmurphy/cookies.js
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\ */
class docCookies {
  getItem (sKey) {
    if (!sKey) { return null }
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
  }
  setItem (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false }
    var sExpires = ''
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd
          /*
          Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
          version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
          the end parameter might not work as expected. A possible solution might be to convert the the
          relative time to an absolute time. For instance, replacing the previous line with:
          */
          /*
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
          */
          break
        case String:
          sExpires = '; expires=' + vEnd
          break
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString()
          break
      }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '')
    return true
  }
  removeItem (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false }
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '')
    return true
  }
  hasItem (sKey) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false }
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
  }
  keys () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]) }
    return aKeys
  }
}
/* unused harmony export default */



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2U0NGRmNmFmM2Y3NGQ1MmZiM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmRpbmdQYWdlLmpzIiwid2VicGFjazovLy8vaG9tZS9wYXVsL0RvY3VtZW50cy9saW5rZWQtc2Nyb2xsLWphY2svZGlzdC9MaW5rZWRTY3JvbGxMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9NZW51QW5pbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RTtBQUN6VSxvSkFBb0osa0JBQWtCLGtLQUFrSyxzQ0FBc0MsRUFBRSxJQUFJLDBCQUEwQixLQUFLLEdBQUcsa0RBQWtELHFCQUFxQjtBQUM3ZCwyQkFBMkIsUUFBUSxhQUFhLFNBQVMsT0FBTyxvQkFBb0Isb0JBQW9CLDJCQUEyQiwyQkFBMkIsd0JBQXdCLGNBQWMsK0JBQStCLGdCQUFnQix3QkFBd0Isd0JBQXdCLGFBQWEsMkJBQTJCLGNBQWMsZUFBZSxNQUFNLFlBQVksSUFBSSx3QkFBd0IsSUFBSSxpQ0FBaUMsU0FBUyxHQUFHLGtCQUFrQixVQUFVLFlBQVk7QUFDL2UsWUFBWSxPQUFPLG1CQUFtQixJQUFJLDBDQUEwQyxJQUFJLG1FQUFtRSxhQUFhLHFCQUFxQixrQ0FBa0MsbUJBQW1CLE9BQU8sNENBQTRDLDRCQUE0QixXQUFXLHFDQUFxQyxVQUFVLFdBQVcsWUFBWSx1QkFBdUIsV0FBVyxVQUFVLGFBQWEsa0JBQWtCLCtCQUErQjtBQUM1ZixHQUFHLGVBQWUsRUFBRSx5QkFBeUIsbUJBQW1CLEdBQUcsK0JBQStCLGFBQWEsZUFBZSxjQUFjLHdCQUF3QiwyQkFBMkIsV0FBVyxlQUFlLGlCQUFpQixPQUFPLFdBQVcsZUFBZSxzQ0FBc0MsbUJBQW1CLEVBQUUsVUFBVSxVQUFVLHdCQUF3QixVQUFVLFVBQVUsdUJBQXVCLDRDQUE0QyxTQUFTLEU7Ozs7Ozs7QUNoQ2xkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImxhbmRpbmcuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlNDRkZjZhZjNmNzRkNTJmYjNmIiwiLy8gQ29kZSBmb3IgdGhlIGxhbmRpbmcgcGFnZVxuLy8gaW1wb3J0IHBsYXlTcGxhc2ggZnJvbSAnLi9zcGxhc2hMb2FkZXIuanMnXG5pbXBvcnQgTGlua2VkU2Nyb2xsTGlzdCBmcm9tICdsaW5rZWQtc2Nyb2xsLWphY2snXG5pbXBvcnQgJy4vTWVudUFuaW0uanMnXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Nvb2tpZXMuanMnXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcblxubGV0IHdpbmRvd0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCdfJywgJycpXG5cbmxldCBwYXRoID0gYW5pbWUucGF0aCgnI3BhdGgxNDY2JylcbmxldCBwYXRoVHdvID0gYW5pbWUucGF0aCgnI3BhdGgyJylcblxubGV0IG1vdGlvblBhdGggPSBhbmltZSh7XG4gIHRhcmdldHM6ICcuZm9sbG93JyxcbiAgdHJhbnNsYXRlWDogcGF0aCgneCcpLCAvLyBGb2xsb3cgdGhlIHggdmFsdWVzIGZyb20gdGhlIHBhdGggYE9iamVjdGBcbiAgdHJhbnNsYXRlWTogcGF0aCgneScpLCAvLyBGb2xsb3cgdGhlIHkgdmFsdWVzIGZyb20gdGhlIHBhdGggYE9iamVjdGBcbiAgZWFzaW5nOiAnbGluZWFyJyxcbiAgZHVyYXRpb246IDUwMDAwLFxuICBsb29wOiB0cnVlXG59KVxuXG5sZXQgbW90aW9uUGF0aFR3byA9IGFuaW1lKHtcbiAgdGFyZ2V0czogJy5mb2xsb3cyJyxcbiAgdHJhbnNsYXRlWDogcGF0aFR3bygneCcpLCAvLyBGb2xsb3cgdGhlIHggdmFsdWVzIGZyb20gdGhlIHBhdGggYE9iamVjdGBcbiAgdHJhbnNsYXRlWTogcGF0aFR3bygneScpLCAvLyBGb2xsb3cgdGhlIHkgdmFsdWVzIGZyb20gdGhlIHBhdGggYE9iamVjdGBcbiAgZWFzaW5nOiAnbGluZWFyJyxcbiAgZHVyYXRpb246IDgwMDAwLFxuICBsb29wOiB0cnVlXG59KVxuXG5sZXQgc2Nyb2xsTGlzdFxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC13cmFwcGVyID4gZGl2Jylcblxuc2Nyb2xsTGlzdCA9IG5ldyBMaW5rZWRTY3JvbGxMaXN0KGNvbnRlbnQsIDgwMClcblxubGV0IG1pbldpZHRoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbi1oZWlnaHQnKVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaW5pdGlhdGUgc29sYXIgc3lzdGVtIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sbG93Jykuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3cnKS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgKyAnIGZ1bGwtb3BhY2l0eScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3cyJykuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3cyJykuZ2V0QXR0cmlidXRlKCdjbGFzcycpICsgJyBmdWxsLW9wYWNpdHknKVxuXG4gIC8vIHBsYXlTcGxhc2goKVxuICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggIT09ICcnKSB7XG4gICAgd2luZG93SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJ18nLCAnJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1zbGlkZXInKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdpbmRvd0hhc2gpLm9mZnNldFRvcFxuICB9IGVsc2Uge1xuICAgIHdpbmRvd0hhc2ggPSAnI2hvbWUnXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnaG9tZSdcbiAgfVxufVxuXG4vLyBPbmx5IGNhbGxlZCBpZlxuLy8gQTogU2lkZWJhciBtZW51IGlzIHVzZWRcbi8vIEI6IENTUyBQcm9wZXJ0eSAnc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGgnIGlzIHN1cHBvcnRlZFxuZnVuY3Rpb24gY2hhbmdlSGFzaCAoZXYpIHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIGhhc2hFeGlzdHMoKSkge1xuICAgIHdpbmRvd0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCdfJywgJycpXG4gICAgdXBkYXRlUHJvamVjdExpc3QoKVxuICAgIC8vIFNldCB0aGUgbWVudSBmaWxsIGRlcGVuZGluZyBvbiBiYWNrZ3JvdW5kXG4gICAgLy8gQXNzdW1lcyB0aGF0IGFueXRoaW5nIG5vdCBob21lIHdpbGwgaGF2ZSBhIGRhcmsgYmFja2dyb3VuZFxuXG4gICAgLy8gQ2hhbmdlIHdpZHRoIGJhc2VkIG9uIGhhc2hcbiAgICBpZiAod2luZG93SGFzaCAhPT0gJyNob21lJykge1xuICAgICAgbWluV2lkdGhDb250YWluZXIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXgtd2lkdGg6IDEyMDBweCcpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtaW5XaWR0aENvbnRhaW5lci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC13aWR0aDogODAwcHgnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzaEV4aXN0cyAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCInICsgd2luZG93SGFzaCArICdcIl0nKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbmNoYW5nZUhhc2goKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBjaGFuZ2VIYXNoKVxuXG4vLyBGdW5jdGlvbnMgdGhhdCBydW4gd2hlbiBoYXNoIGNoYW5nZXNcbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0ICgpIHtcbiAgbGV0IHByZXZDdXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQnKVxuICBsZXQgbmV3Q3VyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbaHJlZj1cIiR7d2luZG93SGFzaH1cIl1gKVxuICBwcmV2Q3Vyci5zZXRBdHRyaWJ1dGUoJ2lkJywgJycpXG4gIG5ld0N1cnIuc2V0QXR0cmlidXRlKCdpZCcsICdjdXJyZW50Jylcbn1cblxuLy8gU2V0IHVwIHNtb290aCBzY3JvbGwgYmV0d2VlbiBwcm9qZWN0c1xuLy8gU2V0IHNjcm9sbCBhcmVhIHRvIGJlIGwtc2xpZGVyXG5sZXQgTU9VU0VfT1ZFUiA9IHRydWVcbmxldCBzY3JvbGxBY2N1bSA9IDBcblxubGV0IGxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1zbGlkZXInKVxubFNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgTU9VU0VfT1ZFUiA9IHRydWVcbn0pXG5cbmxTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VleGl0JywgKGUpID0+IHtcbiAgTU9VU0VfT1ZFUiA9IGZhbHNlXG59KVxuXG5sU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChNT1VTRV9PVkVSKSB7XG4gICAgY2hhbmdlU2xpZGUoZSlcbiAgfVxufSlcblxubGV0IGRlbHRhWSA9IDBcbmZ1bmN0aW9uIGNoYW5nZVNsaWRlIChldmVudCkge1xuICBsZXQgbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLXNsaWRlcicpXG4gIGRlbHRhWSA9IGRlbHRhWSAtIGxTbGlkZXIuc2Nyb2xsVG9wXG4gIGlmIChsU2xpZGVyLnNjcm9sbFRvcCA+IGxTbGlkZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWwgPiBzdmcnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6IHdoaXRlJylcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbCA+IHN2ZycpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogJylcbiAgfVxuICBpZiAoZGVsdGFZIDwgMCkge1xuICAgIGlmIChzY3JvbGxMaXN0LmN1cnJlbnROb2RlLm5leHQgIT09IHVuZGVmaW5lZCAmJiBsU2xpZGVyLnNjcm9sbFRvcCA+PSBzY3JvbGxMaXN0LmN1cnJlbnROb2RlLm5leHQuY3Vyci5vZmZzZXRUb3ApIHtcbiAgICAgIHNjcm9sbExpc3QubmV4dE5vZGUoKVxuICAgIH1cbiAgfVxuICBpZiAoZGVsdGFZID4gMCkge1xuICAgIGlmIChzY3JvbGxMaXN0LmN1cnJlbnROb2RlLnByZXYgIT09IHVuZGVmaW5lZCAmJiBsU2xpZGVyLnNjcm9sbFRvcCA8PSBzY3JvbGxMaXN0LmN1cnJlbnROb2RlLnByZXYuY3Vyci5vZmZzZXRUb3ApIHtcbiAgICAgIHNjcm9sbExpc3QucHJldk5vZGUoKVxuICAgIH1cbiAgfVxuICBkZWx0YVkgPSBsU2xpZGVyLnNjcm9sbFRvcFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGFuZGluZ1BhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxpbmtlZFNjcm9sbExpc3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGlua2VkU2Nyb2xsTGlzdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLy8gQ2xhc3MgdGhhdCB0YWtlcyBpbiBhIGxpc3Qgb2Ygb2YgSFRNTCBub2RlcyBhbmRcbi8vIGFuZCAnc2hpZnRzJyBiZXR3ZWVuIHRoZW0uIFByZXR0eSBnZW5lcmljLCBidXRcbi8vIGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBzaW1wbGUgJ3Njcm9sbC1qYWNrJy1saWtlIGJlaGF2aW9yLlxuXG52YXIgX1Njcm9sbE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfU2Nyb2xsT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Njcm9sbE9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMaW5rZWRTY3JvbGxMaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaW5rZWRTY3JvbGxMaXN0KGNvbnRlbnQsIGJyZWFrcG9pbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlua2VkU2Nyb2xsTGlzdCk7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuY3VycmVudE5vZGUgPSBuZXcgX1Njcm9sbE9iamVjdDIuZGVmYXVsdChjb250ZW50WzBdKTtcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPiAwICYmIGkgPCBjb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBuZXcgX1Njcm9sbE9iamVjdDIuZGVmYXVsdChjb250ZW50W2ldKTtcbiAgICAgICAgdGVtcC5uZXh0ID0gbmV3IF9TY3JvbGxPYmplY3QyLmRlZmF1bHQoY29udGVudFtpICsgMV0pO1xuICAgICAgICB0ZW1wLnByZXYgPSB0aGlzLmN1cnJlbnROb2RlO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF90ZW1wID0gbmV3IF9TY3JvbGxPYmplY3QyLmRlZmF1bHQoY29udGVudFtpXSk7XG4gICAgICAgIF90ZW1wLnByZXYgPSB0aGlzLmN1cnJlbnROb2RlO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlLm5leHQgPSBfdGVtcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQgPSAnbm9kZScgKyBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFRvRmlyc3ROb2RlKCk7XG4gICAgdGhpcy5zZXRDdXJyZW50Tm9kZSh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlua2VkU2Nyb2xsTGlzdCwgW3tcbiAgICBrZXk6ICdzZXRUb0ZpcnN0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRvRmlyc3ROb2RlKCkge1xuICAgICAgd2hpbGUgKHRoaXMuY3VycmVudE5vZGUucHJldiAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnByZXY7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QnJlYWtwb2ludCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEJyZWFrcG9pbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRCcmVha3BvaW50KGJyZWFrcG9pbnQpIHtcbiAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgfVxuICAgIC8vIFNldHMgY3VycmVudCBzY3JvbGwgdG8gZGVmaW5lZCBoYXNoXG5cbiAgfSwge1xuICAgIGtleTogJ3NldEN1cnJlbnROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q3VycmVudE5vZGUoaGFzaCwgY2IpIHtcbiAgICAgIHZhciB0ZW1wID0gdGhpcy5jdXJyZW50Tm9kZTtcbiAgICAgIHdoaWxlICh0ZW1wLnByZXYgIT0gbnVsbCkge1xuICAgICAgICB0ZW1wID0gdGVtcC5wcmV2O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgnIycgKyB0ZW1wLmN1cnIuaWQgPT09IGhhc2gpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGVtcDtcbiAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnRm91bmQgbm9kZSEnO1xuICAgICAgICB9XG4gICAgICAgIHRlbXAgPSB0ZW1wLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnTm9kZSBub3QgZm91bmQnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ25leHROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dE5vZGUoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZS5uZXh0ICE9IG51bGwgJiYgd2luZG93LmlubmVyV2lkdGggPiB0aGlzLmdldEJyZWFrcG9pbnQoKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnIycgKyB0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQgKyAnXycpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ByZXZOb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldk5vZGUoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZS5wcmV2ICE9IG51bGwgJiYgd2luZG93LmlubmVyV2lkdGggPiB0aGlzLmdldEJyZWFrcG9pbnQoKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gdGhpcy5jdXJyZW50Tm9kZS5wcmV2O1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnIycgKyB0aGlzLmN1cnJlbnROb2RlLmN1cnIuaWQgKyAnXycpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgdGVtcCA9IHRoaXMuY3VycmVudE5vZGU7XG4gICAgICBjb25zb2xlLmxvZygnb2JqZWN0OicpO1xuICAgICAgY29uc29sZS5sb2codGVtcCArICdcXG4nKTtcbiAgICAgIHdoaWxlICh0ZW1wLnByZXYgIT0gbnVsbCkge1xuICAgICAgICB0ZW1wID0gdGVtcC5wcmV2O1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRlbXAubmV4dCAhPSBudWxsKSB7XG4gICAgICAgIHRlbXAgPSB0ZW1wLm5leHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvYmplY3Q6Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXAgKyAnXFxuJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaW5rZWRTY3JvbGxMaXN0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rZWRTY3JvbGxMaXN0O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gSGVscGVyIGNsYXNzIGZvciBzY3JvbGxMaW5rZWRMaXN0XG52YXIgU2Nyb2xsT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTY3JvbGxPYmplY3QoY3Vycikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxPYmplY3QpO1xuXG4gICAgdGhpcy5jID0gY3VycjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY3JvbGxPYmplY3QsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLmMuaWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5leHRcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuKSB7XG4gICAgICB0aGlzLm4gPSBuO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcmV2XCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocCkge1xuICAgICAgdGhpcy5wID0gcDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3VyclwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGMpIHtcbiAgICAgIHRoaXMuYyA9IGM7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNjcm9sbE9iamVjdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2Nyb2xsT2JqZWN0O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JoWlRaa1lqbGhaVGxqTWpobU1EUXpNVEZrTVNJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlRHbHVhMlZrVTJOeWIyeHNUR2x6ZEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZVMk55YjJ4c1QySnFaV04wTG1weklsMHNJbTVoYldWeklqcGJJa3hwYm10bFpGTmpjbTlzYkV4cGMzUWlMQ0pqYjI1MFpXNTBJaXdpWW5KbFlXdHdiMmx1ZENJc0ltTjFjbkpsYm5ST2IyUmxJaXdpYVNJc0lteGxibWQwYUNJc0luUmxiWEFpTENKdVpYaDBJaXdpY0hKbGRpSXNJbU4xY25JaUxDSnBaQ0lzSW5WdVpHVm1hVzVsWkNJc0luTmxkRlJ2Um1seWMzUk9iMlJsSWl3aWMyVjBRM1Z5Y21WdWRFNXZaR1VpTENKM2FXNWtiM2NpTENKc2IyTmhkR2x2YmlJc0ltaGhjMmdpTENKallpSXNJbWx1Ym1WeVYybGtkR2dpTENKblpYUkNjbVZoYTNCdmFXNTBJaXdpY21Wd2JHRmpaU0lzSW5CaGRHaHVZVzFsSWl3aVkyOXVjMjlzWlNJc0lteHZaeUlzSWxOamNtOXNiRTlpYW1WamRDSXNJbU1pTENKdUlpd2ljQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN2NXcENRemRFUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdPMGxCUlhGQ1FTeG5RanRCUVVOdVFpdzBRa0ZCWVVNc1QwRkJZaXhGUVVGelFrTXNWVUZCZEVJc1JVRkJhME03UVVGQlFUczdRVUZEYUVNc1UwRkJTMFFzVDBGQlRDeEhRVUZsUVN4UFFVRm1PMEZCUTBFc1UwRkJTMFVzVjBGQlRDeEhRVUZ0UWl3eVFrRkJhVUpHTEZGQlFWRXNRMEZCVWl4RFFVRnFRaXhEUVVGdVFqdEJRVU5CTEZOQlFVdERMRlZCUVV3c1IwRkJhMEpCTEZWQlFXeENPMEZCUTBFc1UwRkJTeXhKUVVGSlJTeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxJTEZGQlFWRkpMRTFCUVRWQ0xFVkJRVzlEUkN4SFFVRndReXhGUVVGNVF6dEJRVU4yUXl4VlFVRkpRU3hKUVVGSkxFTkJRVW9zU1VGQlUwRXNTVUZCU1Vnc1VVRkJVVWtzVFVGQlVpeEhRVUZwUWl4RFFVRnNReXhGUVVGeFF6dEJRVU51UXl4WlFVRkpReXhQUVVGUExESkNRVUZwUWt3c1VVRkJVVWNzUTBGQlVpeERRVUZxUWl4RFFVRllPMEZCUTBGRkxHRkJRVXRETEVsQlFVd3NSMEZCV1N3eVFrRkJhVUpPTEZGQlFWRkhMRWxCUVVrc1EwRkJXaXhEUVVGcVFpeERRVUZhTzBGQlEwRkZMR0ZCUVV0RkxFbEJRVXdzUjBGQldTeExRVUZMVEN4WFFVRnFRanRCUVVOQkxHRkJRVXRCTEZkQlFVd3NRMEZCYVVKSkxFbEJRV3BDTEVkQlFYZENSQ3hKUVVGNFFqdEJRVU5CTEdGQlFVdElMRmRCUVV3c1IwRkJiVUlzUzBGQlMwRXNWMEZCVEN4RFFVRnBRa2tzU1VGQmNFTTdRVUZEUkN4UFFVNUVMRTFCVFU4N1FVRkRUQ3haUVVGSlJDeFJRVUZQTERKQ1FVRnBRa3dzVVVGQlVVY3NRMEZCVWl4RFFVRnFRaXhEUVVGWU8wRkJRMEZGTEdOQlFVdEZMRWxCUVV3c1IwRkJXU3hMUVVGTFRDeFhRVUZxUWp0QlFVTkJMR0ZCUVV0QkxGZEJRVXdzUTBGQmFVSkpMRWxCUVdwQ0xFZEJRWGRDUkN4TFFVRjRRanRCUVVORU8wRkJRMFFzVlVGQlNTeExRVUZMU0N4WFFVRk1MRU5CUVdsQ1RTeEpRVUZxUWl4RFFVRnpRa01zUlVGQmRFSXNTMEZCTmtKRExGTkJRV3BETEVWQlFUUkRPMEZCUXpGRExHRkJRVXRTTEZkQlFVd3NRMEZCYVVKTkxFbEJRV3BDTEVOQlFYTkNReXhGUVVGMFFpeFpRVUZyUTA0c1EwRkJiRU03UVVGRFJEdEJRVU5HTzBGQlEwUXNVMEZCUzFFc1kwRkJURHRCUVVOQkxGTkJRVXRETEdOQlFVd3NRMEZCYjBKRExFOUJRVTlETEZGQlFWQXNRMEZCWjBKRExFbEJRWEJETzBGQlEwUTdPenM3Y1VOQlEybENPMEZCUTJoQ0xHRkJRVThzUzBGQlMySXNWMEZCVEN4RFFVRnBRa3NzU1VGQmFrSXNTVUZCZVVJc1NVRkJhRU1zUlVGQmMwTTdRVUZEY0VNc1lVRkJTMHdzVjBGQlRDeEhRVUZ0UWl4TFFVRkxRU3hYUVVGTUxFTkJRV2xDU3l4SlFVRndRenRCUVVORU8wRkJRMFk3T3p0dlEwRkxaMEk3UVVGRFppeGhRVUZQTEV0QlFVdE9MRlZCUVZvN1FVRkRSRHM3TzJ0RFFVTmpRU3hWTEVWQlFWazdRVUZEZWtJc1YwRkJTMEVzVlVGQlRDeEhRVUZyUWtFc1ZVRkJiRUk3UVVGRFJEdEJRVU5FT3pzN08yMURRVU5uUW1Nc1NTeEZRVUZOUXl4RkxFVkJRVWs3UVVGRGVFSXNWVUZCU1Znc1QwRkJUeXhMUVVGTFNDeFhRVUZvUWp0QlFVTkJMR0ZCUVZGSExFdEJRVXRGTEVsQlFVd3NTVUZCWVN4SlFVRnlRaXhGUVVFMFFqdEJRVU14UWtZc1pVRkJUMEVzUzBGQlMwVXNTVUZCV2p0QlFVTkVPMEZCUTBRc1YwRkJTeXhKUVVGSlNpeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWtzUzBGQlMwTXNUVUZCZWtJc1JVRkJhVU5FTEVkQlFXcERMRVZCUVhORE8wRkJRM0JETEZsQlFVa3NUVUZCU1VVc1MwRkJTMGNzU1VGQlRDeERRVUZWUXl4RlFVRmtMRXRCUVhWQ1RTeEpRVUV6UWl4RlFVRnBRenRCUVVNdlFpeGxRVUZMWWl4WFFVRk1MRWRCUVcxQ1J5eEpRVUZ1UWp0QlFVTkJMR05CUVVsWExFVkJRVW9zUlVGQlVUdEJRVUZGUVR0QlFVRk5PMEZCUTJoQ0xHbENRVUZQTEdGQlFWQTdRVUZEUkR0QlFVTkVXQ3hsUVVGUFFTeExRVUZMUXl4SlFVRmFPMEZCUTBRN1FVRkRSQ3hWUVVGSlZTeEZRVUZLTEVWQlFWRTdRVUZCUlVFN1FVRkJUVHRCUVVOb1FpeGhRVUZQTEdkQ1FVRlFPMEZCUTBRN096c3JRa0ZEVnp0QlFVTldMRlZCUVVrc1MwRkJTMlFzVjBGQlRDeERRVUZwUWtrc1NVRkJha0lzU1VGQmVVSXNTVUZCZWtJc1NVRkJhVU5QTEU5QlFVOUpMRlZCUVZBc1IwRkJiMElzUzBGQlMwTXNZVUZCVEN4RlFVRjZSQ3hGUVVFclJUdEJRVU0zUlN4aFFVRkxhRUlzVjBGQlRDeEhRVUZ0UWl4TFFVRkxRU3hYUVVGTUxFTkJRV2xDU1N4SlFVRndRenRCUVVORlR5eGxRVUZQUXl4UlFVRlFMRU5CUVdkQ1N5eFBRVUZvUWl4RFFVRjNRazRzVDBGQlQwTXNVVUZCVUN4RFFVRm5RazBzVVVGQmFFSXNSMEZCTWtJc1IwRkJNMElzUjBGQmFVTXNTMEZCUzJ4Q0xGZEJRVXdzUTBGQmFVSk5MRWxCUVdwQ0xFTkJRWE5DUXl4RlFVRjJSQ3hIUVVFd1JDeEhRVUZzUmp0QlFVTkVPMEZCUTBvN096c3JRa0ZEVnp0QlFVTldMRlZCUVVrc1MwRkJTMUFzVjBGQlRDeERRVUZwUWtzc1NVRkJha0lzU1VGQmVVSXNTVUZCZWtJc1NVRkJhVU5OTEU5QlFVOUpMRlZCUVZBc1IwRkJiMElzUzBGQlMwTXNZVUZCVEN4RlFVRjZSQ3hGUVVFclJUdEJRVU0zUlN4aFFVRkxhRUlzVjBGQlRDeEhRVUZ0UWl4TFFVRkxRU3hYUVVGTUxFTkJRV2xDU3l4SlFVRndRenRCUVVOQlRTeGxRVUZQUXl4UlFVRlFMRU5CUVdkQ1N5eFBRVUZvUWl4RFFVRjNRazRzVDBGQlQwTXNVVUZCVUN4RFFVRm5RazBzVVVGQmFFSXNSMEZCTWtJc1IwRkJNMElzUjBGQmFVTXNTMEZCUzJ4Q0xGZEJRVXdzUTBGQmFVSk5MRWxCUVdwQ0xFTkJRWE5DUXl4RlFVRjJSQ3hIUVVFd1JDeEhRVUZzUmp0QlFVTkVPMEZCUTBZN096c3JRa0ZEVnp0QlFVTldMRlZCUVVsS0xFOUJRVThzUzBGQlMwZ3NWMEZCYUVJN1FVRkRRVzFDTEdOQlFWRkRMRWRCUVZJc1EwRkJXU3hUUVVGYU8wRkJRMEZFTEdOQlFWRkRMRWRCUVZJc1EwRkJXV3BDTEU5QlFVOHNTVUZCYmtJN1FVRkRRU3hoUVVGUFFTeExRVUZMUlN4SlFVRk1MRWxCUVdFc1NVRkJjRUlzUlVGQk1FSTdRVUZEZUVKR0xHVkJRVTlCTEV0QlFVdEZMRWxCUVZvN1FVRkRSRHRCUVVORUxHRkJRVTlHTEV0QlFVdERMRWxCUVV3c1NVRkJZU3hKUVVGd1FpeEZRVUV3UWp0QlFVTjRRa1FzWlVGQlQwRXNTMEZCUzBNc1NVRkJXanRCUVVOQlpTeG5Ra0ZCVVVNc1IwRkJVaXhEUVVGWkxGTkJRVm83UVVGRFFVUXNaMEpCUVZGRExFZEJRVklzUTBGQldXcENMRTlCUVU4c1NVRkJia0k3UVVGRFJEdEJRVUZGT3pzN2QwSkJiRVJUTzBGQlExb3NZVUZCVHl4TFFVRkxUQ3hQUVVGTUxFTkJRV0ZKTEUxQlFYQkNPMEZCUTBRN096czdPenRyUWtFdlFtdENUQ3huUWpzN096czdPenM3T3pzN096czdPenM3UVVOT2NrSTdTVUZEY1VKM1FpeFpPMEZCUTI1Q0xIZENRVUZoWml4SlFVRmlMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0blFpeERRVUZNTEVkQlFWTm9RaXhKUVVGVU8wRkJRMFE3T3pzN0swSkJiVUpYTzBGQlExWXNhMEpCUVZVc1MwRkJTMmRDTEVOQlFVd3NRMEZCVDJZc1JVRkJha0k3UVVGRFJEczdPM05DUVhCQ1UyZENMRU1zUlVGQlJ6dEJRVU5ZTEZkQlFVdEJMRU5CUVV3c1IwRkJVMEVzUTBGQlZEdEJRVU5FTEVzN2QwSkJWVmM3UVVGRFZpeGhRVUZQTEV0QlFVdEJMRU5CUVZvN1FVRkRSRHM3TzNOQ1FWaFRReXhETEVWQlFVYzdRVUZEV0N4WFFVRkxRU3hEUVVGTUxFZEJRVk5CTEVOQlFWUTdRVUZEUkN4TE8zZENRVlZYTzBGQlExWXNZVUZCVHl4TFFVRkxRU3hEUVVGYU8wRkJRMFE3T3p0elFrRllVMFlzUXl4RlFVRkhPMEZCUTFnc1YwRkJTMEVzUTBGQlRDeEhRVUZUUVN4RFFVRlVPMEZCUTBRc1N6dDNRa0ZEVnp0QlFVTldMR0ZCUVU4c1MwRkJTMEVzUTBGQldqdEJRVU5FT3pzN096czdhMEpCWm10Q1JDeFpJaXdpWm1sc1pTSTZJa3hwYm10bFpGTmpjbTlzYkV4cGMzUXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pNYVc1clpXUlRZM0p2Ykd4TWFYTjBYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJa3hwYm10bFpGTmpjbTlzYkV4cGMzUmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNTlLU2gwYUdsekxDQm1kVzVqZEdsdmJpZ3BJSHRjYm5KbGRIVnliaUJjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3WEc0Z1hIUmNkRngwWEhSamIyNW1hV2QxY21GaWJHVTZJR1poYkhObExGeHVJRngwWEhSY2RGeDBaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUJjZEZ4MFhIUmNkR2RsZERvZ1oyVjBkR1Z5WEc0Z1hIUmNkRngwZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdZV1UyWkdJNVlXVTVZekk0WmpBME16RXhaREVpTENJdkx5QkRiR0Z6Y3lCMGFHRjBJSFJoYTJWeklHbHVJR0VnYkdsemRDQnZaaUJ2WmlCSVZFMU1JRzV2WkdWeklHRnVaRnh1THk4Z1lXNWtJQ2R6YUdsbWRITW5JR0psZEhkbFpXNGdkR2hsYlM0Z1VISmxkSFI1SUdkbGJtVnlhV01zSUdKMWRGeHVMeThnWTJGdUlHSmxJSFZ6WldRZ2RHOGdhVzF3YkdWdFpXNTBJSE5wYlhCc1pTQW5jMk55YjJ4c0xXcGhZMnNuTFd4cGEyVWdZbVZvWVhacGIzSXVYRzVjYm1sdGNHOXlkQ0JUWTNKdmJHeFBZbXBsWTNRZ1puSnZiU0FuTGk5VFkzSnZiR3hQWW1wbFkzUW5YRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFeHBibXRsWkZOamNtOXNiRXhwYzNRZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lBb1kyOXVkR1Z1ZEN3Z1luSmxZV3R3YjJsdWRDa2dlMXh1SUNBZ0lIUm9hWE11WTI5dWRHVnVkQ0E5SUdOdmJuUmxiblE3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwVG05a1pTQTlJRzVsZHlCVFkzSnZiR3hQWW1wbFkzUW9ZMjl1ZEdWdWRGc3dYU2xjYmlBZ0lDQjBhR2x6TG1KeVpXRnJjRzlwYm5RZ1BTQmljbVZoYTNCdmFXNTBYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQmpiMjUwWlc1MExteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FTQStJREFnSmlZZ2FTQThJR052Ym5SbGJuUXViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdkR1Z0Y0NBOUlHNWxkeUJUWTNKdmJHeFBZbXBsWTNRb1kyOXVkR1Z1ZEZ0cFhTbGNiaUFnSUNBZ0lDQWdkR1Z0Y0M1dVpYaDBJRDBnYm1WM0lGTmpjbTlzYkU5aWFtVmpkQ2hqYjI1MFpXNTBXMmtnS3lBeFhTbGNiaUFnSUNBZ0lDQWdkR1Z0Y0M1d2NtVjJJRDBnZEdocGN5NWpkWEp5Wlc1MFRtOWtaVnh1SUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5ST2IyUmxMbTVsZUhRZ1BTQjBaVzF3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRFNXZaR1VnUFNCMGFHbHpMbU4xY25KbGJuUk9iMlJsTG01bGVIUmNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0IwWlcxd0lEMGdibVYzSUZOamNtOXNiRTlpYW1WamRDaGpiMjUwWlc1MFcybGRLVnh1SUNBZ0lDQWdJQ0IwWlcxd0xuQnlaWFlnUFNCMGFHbHpMbU4xY25KbGJuUk9iMlJsWEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRFNXZaR1V1Ym1WNGRDQTlJSFJsYlhCY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG1OMWNuSmxiblJPYjJSbExtTjFjbkl1YVdRZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbU4xY25KbGJuUk9iMlJsTG1OMWNuSXVhV1FnUFNCZ2JtOWtaU1I3YVgxZ08xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuTmxkRlJ2Um1seWMzUk9iMlJsS0NsY2JpQWdJQ0IwYUdsekxuTmxkRU4xY25KbGJuUk9iMlJsS0hkcGJtUnZkeTVzYjJOaGRHbHZiaTVvWVhOb0tUdGNiaUFnZlZ4dUlDQnpaWFJVYjBacGNuTjBUbTlrWlNBb0tTQjdYRzRnSUNBZ2QyaHBiR1VnS0hSb2FYTXVZM1Z5Y21WdWRFNXZaR1V1Y0hKbGRpQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJPYjJSbElEMGdkR2hwY3k1amRYSnlaVzUwVG05a1pTNXdjbVYyTzF4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0JuWlhRZ2JHVnVaM1JvSUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpiMjUwWlc1MExteGxibWQwYUZ4dUlDQjlYRzRnSUZ4dUlDQm5aWFJDY21WaGEzQnZhVzUwSUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWljbVZoYTNCdmFXNTBYRzRnSUgxY2JpQWdjMlYwUW5KbFlXdHdiMmx1ZENBb1luSmxZV3R3YjJsdWRDa2dlMXh1SUNBZ0lIUm9hWE11WW5KbFlXdHdiMmx1ZENBOUlHSnlaV0ZyY0c5cGJuUmNiaUFnZlZ4dUlDQXZMeUJUWlhSeklHTjFjbkpsYm5RZ2MyTnliMnhzSUhSdklHUmxabWx1WldRZ2FHRnphRnh1SUNCelpYUkRkWEp5Wlc1MFRtOWtaU0FvYUdGemFDd2dZMklwSUh0Y2JpQWdJQ0JzWlhRZ2RHVnRjQ0E5SUhSb2FYTXVZM1Z5Y21WdWRFNXZaR1U3WEc0Z0lDQWdkMmhwYkdVZ0tDQjBaVzF3TG5CeVpYWWdJVDBnYm5Wc2JDQXBJSHRjYmlBZ0lDQWdJSFJsYlhBZ1BTQjBaVzF3TG5CeVpYWmNiaUFnSUNCOVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9ZQ01rZTNSbGJYQXVZM1Z5Y2k1cFpIMWdJRDA5UFNCb1lYTm9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRFNXZaR1VnUFNCMFpXMXdPMXh1SUNBZ0lDQWdJQ0JwWmlBb1kySXBJSHNnWTJJb0tTQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5SbTkxYm1RZ2JtOWtaU0VuWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IwWlcxd0lEMGdkR1Z0Y0M1dVpYaDBPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9ZMklwSUhzZ1kySW9LU0I5WEc0Z0lDQWdjbVYwZFhKdUlDZE9iMlJsSUc1dmRDQm1iM1Z1WkNjN1hHNGdJSDFjYmlBZ2JtVjRkRTV2WkdVZ0tDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtTjFjbkpsYm5ST2IyUmxMbTVsZUhRZ0lUMGdiblZzYkNBbUppQjNhVzVrYjNjdWFXNXVaWEpYYVdSMGFDQStJSFJvYVhNdVoyVjBRbkpsWVd0d2IybHVkQ2dwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU4xY25KbGJuUk9iMlJsSUQwZ2RHaHBjeTVqZFhKeVpXNTBUbTlrWlM1dVpYaDBYRzRnSUNBZ0lDQWdJSGRwYm1SdmR5NXNiMk5oZEdsdmJpNXlaWEJzWVdObEtIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1d1lYUm9ibUZ0WlNBcklDY2pKeUFySUhSb2FYTXVZM1Z5Y21WdWRFNXZaR1V1WTNWeWNpNXBaQ3NuWHljcFhHNGdJQ0FnSUNCOVhHNGdJSDFjYmlBZ2NISmxkazV2WkdVZ0tDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtTjFjbkpsYm5ST2IyUmxMbkJ5WlhZZ0lUMGdiblZzYkNBbUppQjNhVzVrYjNjdWFXNXVaWEpYYVdSMGFDQStJSFJvYVhNdVoyVjBRbkpsWVd0d2IybHVkQ2dwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU4xY25KbGJuUk9iMlJsSUQwZ2RHaHBjeTVqZFhKeVpXNTBUbTlrWlM1d2NtVjJYRzRnSUNBZ0lDQjNhVzVrYjNjdWJHOWpZWFJwYjI0dWNtVndiR0ZqWlNoM2FXNWtiM2N1Ykc5allYUnBiMjR1Y0dGMGFHNWhiV1VnS3lBbkl5Y2dLeUIwYUdsekxtTjFjbkpsYm5ST2IyUmxMbU4xY25JdWFXUXJKMThuS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0IwYjFOMGNtbHVaeUFvS1NCN1hHNGdJQ0FnYkdWMElIUmxiWEFnUFNCMGFHbHpMbU4xY25KbGJuUk9iMlJsWEc0Z0lDQWdZMjl1YzI5c1pTNXNiMmNvSjI5aWFtVmpkRG9uS1Z4dUlDQWdJR052Ym5OdmJHVXViRzluS0hSbGJYQWdLeUFuWEZ4dUp5bGNiaUFnSUNCM2FHbHNaU0FvZEdWdGNDNXdjbVYySUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSbGJYQWdQU0IwWlcxd0xuQnlaWFpjYmlBZ0lDQjlYRzRnSUNBZ2QyaHBiR1VnS0hSbGJYQXVibVY0ZENBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCMFpXMXdJRDBnZEdWdGNDNXVaWGgwWEc0Z0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlnbmIySnFaV04wT2ljcFhHNGdJQ0FnSUNCamIyNXpiMnhsTG14dlp5aDBaVzF3SUNzZ0oxeGNiaWNwWEc0Z0lDQWdmU0I5WEc1OVhHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZUR2x1YTJWa1UyTnliMnhzVEdsemRDNXFjeUlzSWk4dklFaGxiSEJsY2lCamJHRnpjeUJtYjNJZ2MyTnliMnhzVEdsdWEyVmtUR2x6ZEZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVMk55YjJ4c1QySnFaV04wSUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lnS0dOMWNuSXBJSHRjYmlBZ0lDQjBhR2x6TG1NZ1BTQmpkWEp5WEc0Z0lIMWNiaUFnYzJWMElHNWxlSFFnS0c0cElIdGNiaUFnSUNCMGFHbHpMbTRnUFNCdVhHNGdJSDFjYmlBZ2MyVjBJSEJ5WlhZZ0tIQXBJSHRjYmlBZ0lDQjBhR2x6TG5BZ1BTQndYRzRnSUgxY2JpQWdjMlYwSUdOMWNuSWdLR01wSUh0Y2JpQWdJQ0IwYUdsekxtTWdQU0JqWEc0Z0lIMWNiaUFnWjJWMElHTjFjbklnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTmNiaUFnZlZ4dUlDQm5aWFFnYm1WNGRDQW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Ymx4dUlDQjlYRzRnSUdkbGRDQndjbVYySUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdYRzRnSUgxY2JpQWdkRzlUZEhKcGJtY2dLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtTXVhV1I5WUZ4dUlDQjlYRzU5WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlUyTnliMnhzVDJKcVpXTjBMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL3BhdWwvRG9jdW1lbnRzL2xpbmtlZC1zY3JvbGwtamFjay9kaXN0L0xpbmtlZFNjcm9sbExpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImxldCBiYXJUaW1lID0ge1xuICBkdXJhdGlvbjogMTUwLFxuICBmaWxsOiAnZm9yd2FyZHMnLFxuICBpdGVyYXRpb25zOiAxXG59XG5sZXQgdG9wQmFyID0gW1xuICB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRleSgwKSB0cmFuc2xhdGV4KDApIHJvdGF0ZSgwKSdcbiAgfSxcbiAge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZXkoMS41cHgpIHRyYW5zbGF0ZXgoMXB4KSByb3RhdGUoNDVkZWcpJ1xuICB9XG5dXG5cbmxldCBtaWRCYXIgPSBbXG4gIHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGV5KDApIHRyYW5zbGF0ZXgoMCkgcm90YXRlKDApJ1xuICB9LFxuICB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRleSg1cHgpIHRyYW5zbGF0ZXgoLTEuN3B4KSByb3RhdGUoLTQ1ZGVnKSdcbiAgfVxuXVxubGV0IGJvdEJhciA9IFtcbiAge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZXkoMCknXG4gIH0sXG4gIHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGV5KDEwcHgpJ1xuICB9XG5dXG5cbmxldCB0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgI3BhdGgxOTg5JylcbmxldCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgI3BhdGgxOTg3JylcbmxldCBib3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgI3BhdGgxOTc1JylcbmxldCB0b3BBbmltID0gdG9wLmFuaW1hdGUoXG4gIHRvcEJhcixcbiAgYmFyVGltZVxuKVxubGV0IG1pZEFuaW0gPSBtaWQuYW5pbWF0ZShcbiAgbWlkQmFyLFxuICBiYXJUaW1lXG4pXG5sZXQgYm90QW5pbSA9IGJvdC5hbmltYXRlKFxuICBib3RCYXIsXG4gIGJhclRpbWVcbilcbnRvcEFuaW0ucGF1c2UoKVxubWlkQW5pbS5wYXVzZSgpXG5ib3RBbmltLnBhdXNlKClcbmxldCBtZW51Q2xvc2VkID0gdHJ1ZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpLmNoZWNrZWQgPSBmYWxzZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVhbmltIHN2ZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gIGlmIChtZW51Q2xvc2VkKSB7XG4gICAgdG9wQW5pbS5wbGF5YmFja1JhdGUgPSAxXG4gICAgbWlkQW5pbS5wbGF5YmFja1JhdGUgPSAxXG4gICAgYm90QW5pbS5wbGF5YmFja1JhdGUgPSAxXG4gIH0gZWxzZSB7XG4gICAgdG9wQW5pbS5wbGF5YmFja1JhdGUgPSAtMVxuICAgIG1pZEFuaW0ucGxheWJhY2tSYXRlID0gLTFcbiAgICBib3RBbmltLnBsYXliYWNrUmF0ZSA9IC0xXG4gIH1cbiAgdG9wQW5pbS5wbGF5KClcbiAgbWlkQW5pbS5wbGF5KClcbiAgYm90QW5pbS5wbGF5KClcbiAgbWVudUNsb3NlZCA9ICFtZW51Q2xvc2VkXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTWVudUFuaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogXFxcbnwqfFxufCp8ICA6OiBjb29raWVzLmpzIDo6XG58KnxcbnwqfCAgQSBjb21wbGV0ZSBjb29raWVzIHJlYWRlci93cml0ZXIgZnJhbWV3b3JrIHdpdGggZnVsbCB1bmljb2RlIHN1cHBvcnQuXG58KnxcbnwqfCAgUmV2aXNpb24gIzMgLSBKdWx5IDEzdGgsIDIwMTdcbnwqfFxufCp8ICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvZG9jdW1lbnQuY29va2llXG58KnwgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL1VzZXI6ZnVzaW9uY2hlc3NcbnwqfCAgaHR0cHM6Ly9naXRodWIuY29tL21hZG11cnBoeS9jb29raWVzLmpzXG58KnxcbnwqfCAgVGhpcyBmcmFtZXdvcmsgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIEdOVSBQdWJsaWMgTGljZW5zZSwgdmVyc2lvbiAzIG9yIGxhdGVyLlxufCp8ICBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTMuMC1zdGFuZGFsb25lLmh0bWxcbnwqfFxufCp8ICBTeW50YXhlczpcbnwqfFxufCp8ICAqIGRvY0Nvb2tpZXMuc2V0SXRlbShuYW1lLCB2YWx1ZVssIGVuZFssIHBhdGhbLCBkb21haW5bLCBzZWN1cmVdXV1dKVxufCp8ICAqIGRvY0Nvb2tpZXMuZ2V0SXRlbShuYW1lKVxufCp8ICAqIGRvY0Nvb2tpZXMucmVtb3ZlSXRlbShuYW1lWywgcGF0aFssIGRvbWFpbl1dKVxufCp8ICAqIGRvY0Nvb2tpZXMuaGFzSXRlbShuYW1lKVxufCp8ICAqIGRvY0Nvb2tpZXMua2V5cygpXG58KnxcblxcICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkb2NDb29raWVzIHtcbiAgZ2V0SXRlbSAoc0tleSkge1xuICAgIGlmICghc0tleSkgeyByZXR1cm4gbnVsbCB9XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUucmVwbGFjZShuZXcgUmVnRXhwKCcoPzooPzpefC4qOylcXFxccyonICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csICdcXFxcJCYnKSArICdcXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiQnKSwgJyQxJykpIHx8IG51bGxcbiAgfVxuICBzZXRJdGVtIChzS2V5LCBzVmFsdWUsIHZFbmQsIHNQYXRoLCBzRG9tYWluLCBiU2VjdXJlKSB7XG4gICAgaWYgKCFzS2V5IHx8IC9eKD86ZXhwaXJlc3xtYXhcXC1hZ2V8cGF0aHxkb21haW58c2VjdXJlKSQvaS50ZXN0KHNLZXkpKSB7IHJldHVybiBmYWxzZSB9XG4gICAgdmFyIHNFeHBpcmVzID0gJydcbiAgICBpZiAodkVuZCkge1xuICAgICAgc3dpdGNoICh2RW5kLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyAnOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMjM6NTk6NTkgR01UJyA6ICc7IG1heC1hZ2U9JyArIHZFbmRcbiAgICAgICAgICAvKlxuICAgICAgICAgIE5vdGU6IERlc3BpdGUgb2ZmaWNpYWxseSBkZWZpbmVkIGluIFJGQyA2MjY1LCB0aGUgdXNlIG9mIGBtYXgtYWdlYCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIGFueVxuICAgICAgICAgIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIsIEVkZ2UgYW5kIHNvbWUgbW9iaWxlIGJyb3dzZXJzLiBUaGVyZWZvcmUgcGFzc2luZyBhIG51bWJlciB0b1xuICAgICAgICAgIHRoZSBlbmQgcGFyYW1ldGVyIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLiBBIHBvc3NpYmxlIHNvbHV0aW9uIG1pZ2h0IGJlIHRvIGNvbnZlcnQgdGhlIHRoZVxuICAgICAgICAgIHJlbGF0aXZlIHRpbWUgdG8gYW4gYWJzb2x1dGUgdGltZS4gRm9yIGluc3RhbmNlLCByZXBsYWNpbmcgdGhlIHByZXZpb3VzIGxpbmUgd2l0aDpcbiAgICAgICAgICAqL1xuICAgICAgICAgIC8qXG4gICAgICAgICAgc0V4cGlyZXMgPSB2RW5kID09PSBJbmZpbml0eSA/IFwiOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMjM6NTk6NTkgR01UXCIgOiBcIjsgZXhwaXJlcz1cIiArIChuZXcgRGF0ZSh2RW5kICogMWUzICsgRGF0ZS5ub3coKSkpLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgICAgKi9cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFN0cmluZzpcbiAgICAgICAgICBzRXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIHZFbmRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIERhdGU6XG4gICAgICAgICAgc0V4cGlyZXMgPSAnOyBleHBpcmVzPScgKyB2RW5kLnRvVVRDU3RyaW5nKClcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoc1ZhbHVlKSArIHNFeHBpcmVzICsgKHNEb21haW4gPyAnOyBkb21haW49JyArIHNEb21haW4gOiAnJykgKyAoc1BhdGggPyAnOyBwYXRoPScgKyBzUGF0aCA6ICcnKSArIChiU2VjdXJlID8gJzsgc2VjdXJlJyA6ICcnKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmVtb3ZlSXRlbSAoc0tleSwgc1BhdGgsIHNEb21haW4pIHtcbiAgICBpZiAoIXRoaXMuaGFzSXRlbShzS2V5KSkgeyByZXR1cm4gZmFsc2UgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChzS2V5KSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJyArIChzRG9tYWluID8gJzsgZG9tYWluPScgKyBzRG9tYWluIDogJycpICsgKHNQYXRoID8gJzsgcGF0aD0nICsgc1BhdGggOiAnJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGhhc0l0ZW0gKHNLZXkpIHtcbiAgICBpZiAoIXNLZXkgfHwgL14oPzpleHBpcmVzfG1heFxcLWFnZXxwYXRofGRvbWFpbnxzZWN1cmUpJC9pLnRlc3Qoc0tleSkpIHsgcmV0dXJuIGZhbHNlIH1cbiAgICByZXR1cm4gKG5ldyBSZWdFeHAoJyg/Ol58O1xcXFxzKiknICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1tcXC1cXC5cXCtcXCpdL2csICdcXFxcJCYnKSArICdcXFxccypcXFxcPScpKS50ZXN0KGRvY3VtZW50LmNvb2tpZSlcbiAgfVxuICBrZXlzICgpIHtcbiAgICB2YXIgYUtleXMgPSBkb2N1bWVudC5jb29raWUucmVwbGFjZSgvKCg/Ol58XFxzKjspW15cXD1dKykoPz07fCQpfF5cXHMqfFxccyooPzpcXD1bXjtdKik/KD86XFwxfCQpL2csICcnKS5zcGxpdCgvXFxzKig/OlxcPVteO10qKT87XFxzKi8pXG4gICAgZm9yICh2YXIgbkxlbiA9IGFLZXlzLmxlbmd0aCwgbklkeCA9IDA7IG5JZHggPCBuTGVuOyBuSWR4KyspIHsgYUtleXNbbklkeF0gPSBkZWNvZGVVUklDb21wb25lbnQoYUtleXNbbklkeF0pIH1cbiAgICByZXR1cm4gYUtleXNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLypcbiAyMDE3IEp1bGlhbiBHYXJuaWVyXG4gUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qL1xudmFyICRqc2NvbXA9e3Njb3BlOnt9fTskanNjb21wLmRlZmluZVByb3BlcnR5PVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihlLHIscCl7aWYocC5nZXR8fHAuc2V0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFUzMgZG9lcyBub3Qgc3VwcG9ydCBnZXR0ZXJzIGFuZCBzZXR0ZXJzLlwiKTtlIT1BcnJheS5wcm90b3R5cGUmJmUhPU9iamVjdC5wcm90b3R5cGUmJihlW3JdPXAudmFsdWUpfTskanNjb21wLmdldEdsb2JhbD1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT1lP2U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDplfTskanNjb21wLmdsb2JhbD0kanNjb21wLmdldEdsb2JhbCh0aGlzKTskanNjb21wLlNZTUJPTF9QUkVGSVg9XCJqc2NvbXBfc3ltYm9sX1wiO1xuJGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7fTskanNjb21wLmdsb2JhbC5TeW1ib2x8fCgkanNjb21wLmdsb2JhbC5TeW1ib2w9JGpzY29tcC5TeW1ib2wpfTskanNjb21wLnN5bWJvbENvdW50ZXJfPTA7JGpzY29tcC5TeW1ib2w9ZnVuY3Rpb24oZSl7cmV0dXJuICRqc2NvbXAuU1lNQk9MX1BSRUZJWCsoZXx8XCJcIikrJGpzY29tcC5zeW1ib2xDb3VudGVyXysrfTtcbiRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sKCk7dmFyIGU9JGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yO2V8fChlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcj0kanNjb21wLmdsb2JhbC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2VdJiYkanNjb21wLmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gJGpzY29tcC5hcnJheUl0ZXJhdG9yKHRoaXMpfX0pOyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7fX07JGpzY29tcC5hcnJheUl0ZXJhdG9yPWZ1bmN0aW9uKGUpe3ZhciByPTA7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGUoZnVuY3Rpb24oKXtyZXR1cm4gcjxlLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTplW3IrK119Ontkb25lOiEwfX0pfTtcbiRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGU9ZnVuY3Rpb24oZSl7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlPXtuZXh0OmV9O2VbJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZX07JGpzY29tcC5hcnJheT0kanNjb21wLmFycmF5fHx7fTskanNjb21wLml0ZXJhdG9yRnJvbUFycmF5PWZ1bmN0aW9uKGUscil7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlIGluc3RhbmNlb2YgU3RyaW5nJiYoZSs9XCJcIik7dmFyIHA9MCxtPXtuZXh0OmZ1bmN0aW9uKCl7aWYocDxlLmxlbmd0aCl7dmFyIHU9cCsrO3JldHVybnt2YWx1ZTpyKHUsZVt1XSksZG9uZTohMX19bS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfX07cmV0dXJuIG0ubmV4dCgpfX07bVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIG19O3JldHVybiBtfTtcbiRqc2NvbXAucG9seWZpbGw9ZnVuY3Rpb24oZSxyLHAsbSl7aWYocil7cD0kanNjb21wLmdsb2JhbDtlPWUuc3BsaXQoXCIuXCIpO2ZvcihtPTA7bTxlLmxlbmd0aC0xO20rKyl7dmFyIHU9ZVttXTt1IGluIHB8fChwW3VdPXt9KTtwPXBbdV19ZT1lW2UubGVuZ3RoLTFdO209cFtlXTtyPXIobSk7ciE9bSYmbnVsbCE9ciYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShwLGUse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpyfSl9fTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmtleXNcIixmdW5jdGlvbihlKXtyZXR1cm4gZT9lOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXkodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZX0pfX0sXCJlczYtaW1wbFwiLFwiZXMzXCIpO3ZhciAkanNjb21wJHRoaXM9dGhpcztcbihmdW5jdGlvbihlLHIpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHIpOlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1yKCk6ZS5hbmltZT1yKCl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtpZighaC5jb2woYSkpdHJ5e3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpfWNhdGNoKGMpe319ZnVuY3Rpb24gcihhLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxiPTI8PWFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOnZvaWQgMCxmPVtdLG49MDtuPGQ7bisrKWlmKG4gaW4gYSl7dmFyIGs9YVtuXTtjLmNhbGwoYixrLG4sYSkmJmYucHVzaChrKX1yZXR1cm4gZn1mdW5jdGlvbiBwKGEpe3JldHVybiBhLnJlZHVjZShmdW5jdGlvbihhLGQpe3JldHVybiBhLmNvbmNhdChoLmFycihkKT9wKGQpOmQpfSxbXSl9ZnVuY3Rpb24gbShhKXtpZihoLmFycihhKSlyZXR1cm4gYTtcbmguc3RyKGEpJiYoYT1lKGEpfHxhKTtyZXR1cm4gYSBpbnN0YW5jZW9mIE5vZGVMaXN0fHxhIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24/W10uc2xpY2UuY2FsbChhKTpbYV19ZnVuY3Rpb24gdShhLGMpe3JldHVybiBhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1jfSl9ZnVuY3Rpb24gQyhhKXt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT1hW2RdO3JldHVybiBjfWZ1bmN0aW9uIEQoYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYSlkW2JdPWMuaGFzT3duUHJvcGVydHkoYik/Y1tiXTphW2JdO3JldHVybiBkfWZ1bmN0aW9uIHooYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYylkW2JdPWgudW5kKGFbYl0pP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiBUKGEpe2E9YS5yZXBsYWNlKC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZnVuY3Rpb24oYSxjLGQsayl7cmV0dXJuIGMrYytkK2QraytrfSk7dmFyIGM9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGEpO1xuYT1wYXJzZUludChjWzFdLDE2KTt2YXIgZD1wYXJzZUludChjWzJdLDE2KSxjPXBhcnNlSW50KGNbM10sMTYpO3JldHVyblwicmdiYShcIithK1wiLFwiK2QrXCIsXCIrYytcIiwxKVwifWZ1bmN0aW9uIFUoYSl7ZnVuY3Rpb24gYyhhLGMsYil7MD5iJiYoYis9MSk7MTxiJiYtLWI7cmV0dXJuIGI8MS82P2ErNiooYy1hKSpiOi41PmI/YzpiPDIvMz9hKyhjLWEpKigyLzMtYikqNjphfXZhciBkPS9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGEpfHwvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhhKTthPXBhcnNlSW50KGRbMV0pLzM2MDt2YXIgYj1wYXJzZUludChkWzJdKS8xMDAsZj1wYXJzZUludChkWzNdKS8xMDAsZD1kWzRdfHwxO2lmKDA9PWIpZj1iPWE9ZjtlbHNle3ZhciBuPS41PmY/ZiooMStiKTpmK2ItZipiLGs9MipmLW4sZj1jKGssbixhKzEvMyksYj1jKGssbixhKTthPWMoayxuLGEtMS8zKX1yZXR1cm5cInJnYmEoXCIrXG4yNTUqZitcIixcIisyNTUqYitcIixcIisyNTUqYStcIixcIitkK1wiKVwifWZ1bmN0aW9uIHkoYSl7aWYoYT0vKFtcXCtcXC1dP1swLTkjXFwuXSspKCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWMoYSkpcmV0dXJuIGFbMl19ZnVuY3Rpb24gVihhKXtpZigtMTxhLmluZGV4T2YoXCJ0cmFuc2xhdGVcIil8fFwicGVyc3BlY3RpdmVcIj09PWEpcmV0dXJuXCJweFwiO2lmKC0xPGEuaW5kZXhPZihcInJvdGF0ZVwiKXx8LTE8YS5pbmRleE9mKFwic2tld1wiKSlyZXR1cm5cImRlZ1wifWZ1bmN0aW9uIEkoYSxjKXtyZXR1cm4gaC5mbmMoYSk/YShjLnRhcmdldCxjLmlkLGMudG90YWwpOmF9ZnVuY3Rpb24gRShhLGMpe2lmKGMgaW4gYS5zdHlsZSlyZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZyxcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCkpfHxcIjBcIn1mdW5jdGlvbiBKKGEsYyl7aWYoaC5kb20oYSkmJlxudShXLGMpKXJldHVyblwidHJhbnNmb3JtXCI7aWYoaC5kb20oYSkmJihhLmdldEF0dHJpYnV0ZShjKXx8aC5zdmcoYSkmJmFbY10pKXJldHVyblwiYXR0cmlidXRlXCI7aWYoaC5kb20oYSkmJlwidHJhbnNmb3JtXCIhPT1jJiZFKGEsYykpcmV0dXJuXCJjc3NcIjtpZihudWxsIT1hW2NdKXJldHVyblwib2JqZWN0XCJ9ZnVuY3Rpb24gWChhLGMpe3ZhciBkPVYoYyksZD0tMTxjLmluZGV4T2YoXCJzY2FsZVwiKT8xOjArZDthPWEuc3R5bGUudHJhbnNmb3JtO2lmKCFhKXJldHVybiBkO2Zvcih2YXIgYj1bXSxmPVtdLG49W10saz0vKFxcdyspXFwoKC4rPylcXCkvZztiPWsuZXhlYyhhKTspZi5wdXNoKGJbMV0pLG4ucHVzaChiWzJdKTthPXIobixmdW5jdGlvbihhLGIpe3JldHVybiBmW2JdPT09Y30pO3JldHVybiBhLmxlbmd0aD9hWzBdOmR9ZnVuY3Rpb24gSyhhLGMpe3N3aXRjaChKKGEsYykpe2Nhc2UgXCJ0cmFuc2Zvcm1cIjpyZXR1cm4gWChhLGMpO2Nhc2UgXCJjc3NcIjpyZXR1cm4gRShhLGMpO2Nhc2UgXCJhdHRyaWJ1dGVcIjpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYyl9cmV0dXJuIGFbY118fFxuMH1mdW5jdGlvbiBMKGEsYyl7dmFyIGQ9L14oXFwqPXxcXCs9fC09KS8uZXhlYyhhKTtpZighZClyZXR1cm4gYTt2YXIgYj15KGEpfHwwO2M9cGFyc2VGbG9hdChjKTthPXBhcnNlRmxvYXQoYS5yZXBsYWNlKGRbMF0sXCJcIikpO3N3aXRjaChkWzBdWzBdKXtjYXNlIFwiK1wiOnJldHVybiBjK2ErYjtjYXNlIFwiLVwiOnJldHVybiBjLWErYjtjYXNlIFwiKlwiOnJldHVybiBjKmErYn19ZnVuY3Rpb24gRihhLGMpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYy54LWEueCwyKStNYXRoLnBvdyhjLnktYS55LDIpKX1mdW5jdGlvbiBNKGEpe2E9YS5wb2ludHM7Zm9yKHZhciBjPTAsZCxiPTA7YjxhLm51bWJlck9mSXRlbXM7YisrKXt2YXIgZj1hLmdldEl0ZW0oYik7MDxiJiYoYys9RihkLGYpKTtkPWZ9cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtpZihhLmdldFRvdGFsTGVuZ3RoKXJldHVybiBhLmdldFRvdGFsTGVuZ3RoKCk7c3dpdGNoKGEudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlIFwiY2lyY2xlXCI6cmV0dXJuIDIqXG5NYXRoLlBJKmEuZ2V0QXR0cmlidXRlKFwiclwiKTtjYXNlIFwicmVjdFwiOnJldHVybiAyKmEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikrMiphLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKTtjYXNlIFwibGluZVwiOnJldHVybiBGKHt4OmEuZ2V0QXR0cmlidXRlKFwieDFcIikseTphLmdldEF0dHJpYnV0ZShcInkxXCIpfSx7eDphLmdldEF0dHJpYnV0ZShcIngyXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MlwiKX0pO2Nhc2UgXCJwb2x5bGluZVwiOnJldHVybiBNKGEpO2Nhc2UgXCJwb2x5Z29uXCI6dmFyIGM9YS5wb2ludHM7cmV0dXJuIE0oYSkrRihjLmdldEl0ZW0oYy5udW1iZXJPZkl0ZW1zLTEpLGMuZ2V0SXRlbSgwKSl9fWZ1bmN0aW9uIFkoYSxjKXtmdW5jdGlvbiBkKGIpe2I9dm9pZCAwPT09Yj8wOmI7cmV0dXJuIGEuZWwuZ2V0UG9pbnRBdExlbmd0aCgxPD1jK2I/YytiOjApfXZhciBiPWQoKSxmPWQoLTEpLG49ZCgxKTtzd2l0Y2goYS5wcm9wZXJ0eSl7Y2FzZSBcInhcIjpyZXR1cm4gYi54O2Nhc2UgXCJ5XCI6cmV0dXJuIGIueTtcbmNhc2UgXCJhbmdsZVwiOnJldHVybiAxODAqTWF0aC5hdGFuMihuLnktZi55LG4ueC1mLngpL01hdGguUEl9fWZ1bmN0aW9uIE8oYSxjKXt2YXIgZD0vLT9cXGQqXFwuP1xcZCsvZyxiO2I9aC5wdGgoYSk/YS50b3RhbExlbmd0aDphO2lmKGguY29sKGIpKWlmKGgucmdiKGIpKXt2YXIgZj0vcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMoYik7Yj1mP1wicmdiYShcIitmWzFdK1wiLDEpXCI6Yn1lbHNlIGI9aC5oZXgoYik/VChiKTpoLmhzbChiKT9VKGIpOnZvaWQgMDtlbHNlIGY9KGY9eShiKSk/Yi5zdWJzdHIoMCxiLmxlbmd0aC1mLmxlbmd0aCk6YixiPWMmJiEvXFxzL2cudGVzdChiKT9mK2M6ZjtiKz1cIlwiO3JldHVybntvcmlnaW5hbDpiLG51bWJlcnM6Yi5tYXRjaChkKT9iLm1hdGNoKGQpLm1hcChOdW1iZXIpOlswXSxzdHJpbmdzOmguc3RyKGEpfHxjP2Iuc3BsaXQoZCk6W119fWZ1bmN0aW9uIFAoYSl7YT1hP3AoaC5hcnIoYSk/YS5tYXAobSk6bShhKSk6W107cmV0dXJuIHIoYSxcbmZ1bmN0aW9uKGEsZCxiKXtyZXR1cm4gYi5pbmRleE9mKGEpPT09ZH0pfWZ1bmN0aW9uIFooYSl7dmFyIGM9UChhKTtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm57dGFyZ2V0OmEsaWQ6Yix0b3RhbDpjLmxlbmd0aH19KX1mdW5jdGlvbiBhYShhLGMpe3ZhciBkPUMoYyk7aWYoaC5hcnIoYSkpe3ZhciBiPWEubGVuZ3RoOzIhPT1ifHxoLm9iaihhWzBdKT9oLmZuYyhjLmR1cmF0aW9uKXx8KGQuZHVyYXRpb249Yy5kdXJhdGlvbi9iKTphPXt2YWx1ZTphfX1yZXR1cm4gbShhKS5tYXAoZnVuY3Rpb24oYSxiKXtiPWI/MDpjLmRlbGF5O2E9aC5vYmooYSkmJiFoLnB0aChhKT9hOnt2YWx1ZTphfTtoLnVuZChhLmRlbGF5KSYmKGEuZGVsYXk9Yik7cmV0dXJuIGF9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHooYSxkKX0pfWZ1bmN0aW9uIGJhKGEsYyl7dmFyIGQ9e30sYjtmb3IoYiBpbiBhKXt2YXIgZj1JKGFbYl0sYyk7aC5hcnIoZikmJihmPWYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBJKGEsXG5jKX0pLDE9PT1mLmxlbmd0aCYmKGY9ZlswXSkpO2RbYl09Zn1kLmR1cmF0aW9uPXBhcnNlRmxvYXQoZC5kdXJhdGlvbik7ZC5kZWxheT1wYXJzZUZsb2F0KGQuZGVsYXkpO3JldHVybiBkfWZ1bmN0aW9uIGNhKGEpe3JldHVybiBoLmFycihhKT9BLmFwcGx5KHRoaXMsYSk6UVthXX1mdW5jdGlvbiBkYShhLGMpe3ZhciBkO3JldHVybiBhLnR3ZWVucy5tYXAoZnVuY3Rpb24oYil7Yj1iYShiLGMpO3ZhciBmPWIudmFsdWUsZT1LKGMudGFyZ2V0LGEubmFtZSksaz1kP2QudG8ub3JpZ2luYWw6ZSxrPWguYXJyKGYpP2ZbMF06ayx3PUwoaC5hcnIoZik/ZlsxXTpmLGspLGU9eSh3KXx8eShrKXx8eShlKTtiLmZyb209TyhrLGUpO2IudG89Tyh3LGUpO2Iuc3RhcnQ9ZD9kLmVuZDphLm9mZnNldDtiLmVuZD1iLnN0YXJ0K2IuZGVsYXkrYi5kdXJhdGlvbjtiLmVhc2luZz1jYShiLmVhc2luZyk7Yi5lbGFzdGljaXR5PSgxRTMtTWF0aC5taW4oTWF0aC5tYXgoYi5lbGFzdGljaXR5LDEpLDk5OSkpL1xuMUUzO2IuaXNQYXRoPWgucHRoKGYpO2IuaXNDb2xvcj1oLmNvbChiLmZyb20ub3JpZ2luYWwpO2IuaXNDb2xvciYmKGIucm91bmQ9MSk7cmV0dXJuIGQ9Yn0pfWZ1bmN0aW9uIGVhKGEsYyl7cmV0dXJuIHIocChhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYil7dmFyIGM9SihhLnRhcmdldCxiLm5hbWUpO2lmKGMpe3ZhciBkPWRhKGIsYSk7Yj17dHlwZTpjLHByb3BlcnR5OmIubmFtZSxhbmltYXRhYmxlOmEsdHdlZW5zOmQsZHVyYXRpb246ZFtkLmxlbmd0aC0xXS5lbmQsZGVsYXk6ZFswXS5kZWxheX19ZWxzZSBiPXZvaWQgMDtyZXR1cm4gYn0pfSkpLGZ1bmN0aW9uKGEpe3JldHVybiFoLnVuZChhKX0pfWZ1bmN0aW9uIFIoYSxjLGQsYil7dmFyIGY9XCJkZWxheVwiPT09YTtyZXR1cm4gYy5sZW5ndGg/KGY/TWF0aC5taW46TWF0aC5tYXgpLmFwcGx5KE1hdGgsYy5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGJbYV19KSk6Zj9iLmRlbGF5OmQub2Zmc2V0K2IuZGVsYXkrXG5iLmR1cmF0aW9ufWZ1bmN0aW9uIGZhKGEpe3ZhciBjPUQoZ2EsYSksZD1EKFMsYSksYj1aKGEudGFyZ2V0cyksZj1bXSxlPXooYyxkKSxrO2ZvcihrIGluIGEpZS5oYXNPd25Qcm9wZXJ0eShrKXx8XCJ0YXJnZXRzXCI9PT1rfHxmLnB1c2goe25hbWU6ayxvZmZzZXQ6ZS5vZmZzZXQsdHdlZW5zOmFhKGFba10sZCl9KTthPWVhKGIsZik7cmV0dXJuIHooYyx7Y2hpbGRyZW46W10sYW5pbWF0YWJsZXM6YixhbmltYXRpb25zOmEsZHVyYXRpb246UihcImR1cmF0aW9uXCIsYSxjLGQpLGRlbGF5OlIoXCJkZWxheVwiLGEsYyxkKX0pfWZ1bmN0aW9uIHEoYSl7ZnVuY3Rpb24gYygpe3JldHVybiB3aW5kb3cuUHJvbWlzZSYmbmV3IFByb21pc2UoZnVuY3Rpb24oYSl7cmV0dXJuIHA9YX0pfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGcucmV2ZXJzZWQ/Zy5kdXJhdGlvbi1hOmF9ZnVuY3Rpb24gYihhKXtmb3IodmFyIGI9MCxjPXt9LGQ9Zy5hbmltYXRpb25zLGY9ZC5sZW5ndGg7YjxmOyl7dmFyIGU9ZFtiXSxcbms9ZS5hbmltYXRhYmxlLGg9ZS50d2VlbnMsbj1oLmxlbmd0aC0xLGw9aFtuXTtuJiYobD1yKGgsZnVuY3Rpb24oYil7cmV0dXJuIGE8Yi5lbmR9KVswXXx8bCk7Zm9yKHZhciBoPU1hdGgubWluKE1hdGgubWF4KGEtbC5zdGFydC1sLmRlbGF5LDApLGwuZHVyYXRpb24pL2wuZHVyYXRpb24sdz1pc05hTihoKT8xOmwuZWFzaW5nKGgsbC5lbGFzdGljaXR5KSxoPWwudG8uc3RyaW5ncyxwPWwucm91bmQsbj1bXSxtPXZvaWQgMCxtPWwudG8ubnVtYmVycy5sZW5ndGgsdD0wO3Q8bTt0Kyspe3ZhciB4PXZvaWQgMCx4PWwudG8ubnVtYmVyc1t0XSxxPWwuZnJvbS5udW1iZXJzW3RdLHg9bC5pc1BhdGg/WShsLnZhbHVlLHcqeCk6cSt3Kih4LXEpO3AmJihsLmlzQ29sb3ImJjI8dHx8KHg9TWF0aC5yb3VuZCh4KnApL3ApKTtuLnB1c2goeCl9aWYobD1oLmxlbmd0aClmb3IobT1oWzBdLHc9MDt3PGw7dysrKXA9aFt3KzFdLHQ9blt3XSxpc05hTih0KXx8KG09cD9tKyh0K3ApOm0rKHQrXCIgXCIpKTtcbmVsc2UgbT1uWzBdO2hhW2UudHlwZV0oay50YXJnZXQsZS5wcm9wZXJ0eSxtLGMsay5pZCk7ZS5jdXJyZW50VmFsdWU9bTtiKyt9aWYoYj1PYmplY3Qua2V5cyhjKS5sZW5ndGgpZm9yKGQ9MDtkPGI7ZCsrKUh8fChIPUUoZG9jdW1lbnQuYm9keSxcInRyYW5zZm9ybVwiKT9cInRyYW5zZm9ybVwiOlwiLXdlYmtpdC10cmFuc2Zvcm1cIiksZy5hbmltYXRhYmxlc1tkXS50YXJnZXQuc3R5bGVbSF09Y1tkXS5qb2luKFwiIFwiKTtnLmN1cnJlbnRUaW1lPWE7Zy5wcm9ncmVzcz1hL2cuZHVyYXRpb24qMTAwfWZ1bmN0aW9uIGYoYSl7aWYoZ1thXSlnW2FdKGcpfWZ1bmN0aW9uIGUoKXtnLnJlbWFpbmluZyYmITAhPT1nLnJlbWFpbmluZyYmZy5yZW1haW5pbmctLX1mdW5jdGlvbiBrKGEpe3ZhciBrPWcuZHVyYXRpb24sbj1nLm9mZnNldCx3PW4rZy5kZWxheSxyPWcuY3VycmVudFRpbWUseD1nLnJldmVyc2VkLHE9ZChhKTtpZihnLmNoaWxkcmVuLmxlbmd0aCl7dmFyIHU9Zy5jaGlsZHJlbix2PXUubGVuZ3RoO1xuaWYocT49Zy5jdXJyZW50VGltZSlmb3IodmFyIEc9MDtHPHY7RysrKXVbR10uc2VlayhxKTtlbHNlIGZvcig7di0tOyl1W3ZdLnNlZWsocSl9aWYocT49d3x8IWspZy5iZWdhbnx8KGcuYmVnYW49ITAsZihcImJlZ2luXCIpKSxmKFwicnVuXCIpO2lmKHE+biYmcTxrKWIocSk7ZWxzZSBpZihxPD1uJiYwIT09ciYmKGIoMCkseCYmZSgpKSxxPj1rJiZyIT09a3x8IWspYihrKSx4fHxlKCk7ZihcInVwZGF0ZVwiKTthPj1rJiYoZy5yZW1haW5pbmc/KHQ9aCxcImFsdGVybmF0ZVwiPT09Zy5kaXJlY3Rpb24mJihnLnJldmVyc2VkPSFnLnJldmVyc2VkKSk6KGcucGF1c2UoKSxnLmNvbXBsZXRlZHx8KGcuY29tcGxldGVkPSEwLGYoXCJjb21wbGV0ZVwiKSxcIlByb21pc2VcImluIHdpbmRvdyYmKHAoKSxtPWMoKSkpKSxsPTApfWE9dm9pZCAwPT09YT97fTphO3ZhciBoLHQsbD0wLHA9bnVsbCxtPWMoKSxnPWZhKGEpO2cucmVzZXQ9ZnVuY3Rpb24oKXt2YXIgYT1nLmRpcmVjdGlvbixjPWcubG9vcDtnLmN1cnJlbnRUaW1lPVxuMDtnLnByb2dyZXNzPTA7Zy5wYXVzZWQ9ITA7Zy5iZWdhbj0hMTtnLmNvbXBsZXRlZD0hMTtnLnJldmVyc2VkPVwicmV2ZXJzZVwiPT09YTtnLnJlbWFpbmluZz1cImFsdGVybmF0ZVwiPT09YSYmMT09PWM/MjpjO2IoMCk7Zm9yKGE9Zy5jaGlsZHJlbi5sZW5ndGg7YS0tOylnLmNoaWxkcmVuW2FdLnJlc2V0KCl9O2cudGljaz1mdW5jdGlvbihhKXtoPWE7dHx8KHQ9aCk7aygobCtoLXQpKnEuc3BlZWQpfTtnLnNlZWs9ZnVuY3Rpb24oYSl7ayhkKGEpKX07Zy5wYXVzZT1mdW5jdGlvbigpe3ZhciBhPXYuaW5kZXhPZihnKTstMTxhJiZ2LnNwbGljZShhLDEpO2cucGF1c2VkPSEwfTtnLnBsYXk9ZnVuY3Rpb24oKXtnLnBhdXNlZCYmKGcucGF1c2VkPSExLHQ9MCxsPWQoZy5jdXJyZW50VGltZSksdi5wdXNoKGcpLEJ8fGlhKCkpfTtnLnJldmVyc2U9ZnVuY3Rpb24oKXtnLnJldmVyc2VkPSFnLnJldmVyc2VkO3Q9MDtsPWQoZy5jdXJyZW50VGltZSl9O2cucmVzdGFydD1mdW5jdGlvbigpe2cucGF1c2UoKTtcbmcucmVzZXQoKTtnLnBsYXkoKX07Zy5maW5pc2hlZD1tO2cucmVzZXQoKTtnLmF1dG9wbGF5JiZnLnBsYXkoKTtyZXR1cm4gZ312YXIgZ2E9e3VwZGF0ZTp2b2lkIDAsYmVnaW46dm9pZCAwLHJ1bjp2b2lkIDAsY29tcGxldGU6dm9pZCAwLGxvb3A6MSxkaXJlY3Rpb246XCJub3JtYWxcIixhdXRvcGxheTohMCxvZmZzZXQ6MH0sUz17ZHVyYXRpb246MUUzLGRlbGF5OjAsZWFzaW5nOlwiZWFzZU91dEVsYXN0aWNcIixlbGFzdGljaXR5OjUwMCxyb3VuZDowfSxXPVwidHJhbnNsYXRlWCB0cmFuc2xhdGVZIHRyYW5zbGF0ZVogcm90YXRlIHJvdGF0ZVggcm90YXRlWSByb3RhdGVaIHNjYWxlIHNjYWxlWCBzY2FsZVkgc2NhbGVaIHNrZXdYIHNrZXdZIHBlcnNwZWN0aXZlXCIuc3BsaXQoXCIgXCIpLEgsaD17YXJyOmZ1bmN0aW9uKGEpe3JldHVybiBBcnJheS5pc0FycmF5KGEpfSxvYmo6ZnVuY3Rpb24oYSl7cmV0dXJuLTE8T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJPYmplY3RcIil9LFxucHRoOmZ1bmN0aW9uKGEpe3JldHVybiBoLm9iaihhKSYmYS5oYXNPd25Qcm9wZXJ0eShcInRvdGFsTGVuZ3RoXCIpfSxzdmc6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50fSxkb206ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGV8fGguc3ZnKGEpfSxzdHI6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfSxmbmM6ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGF9LHVuZDpmdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGF9LGhleDpmdW5jdGlvbihhKXtyZXR1cm4vKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKX0scmdiOmZ1bmN0aW9uKGEpe3JldHVybi9ecmdiLy50ZXN0KGEpfSxoc2w6ZnVuY3Rpb24oYSl7cmV0dXJuL15oc2wvLnRlc3QoYSl9LGNvbDpmdW5jdGlvbihhKXtyZXR1cm4gaC5oZXgoYSl8fGgucmdiKGEpfHxoLmhzbChhKX19LEE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsXG5kLGIpe3JldHVybigoKDEtMypiKzMqZCkqYSsoMypiLTYqZCkpKmErMypkKSphfXJldHVybiBmdW5jdGlvbihjLGQsYixmKXtpZigwPD1jJiYxPj1jJiYwPD1iJiYxPj1iKXt2YXIgZT1uZXcgRmxvYXQzMkFycmF5KDExKTtpZihjIT09ZHx8YiE9PWYpZm9yKHZhciBrPTA7MTE+azsrK2spZVtrXT1hKC4xKmssYyxiKTtyZXR1cm4gZnVuY3Rpb24oayl7aWYoYz09PWQmJmI9PT1mKXJldHVybiBrO2lmKDA9PT1rKXJldHVybiAwO2lmKDE9PT1rKXJldHVybiAxO2Zvcih2YXIgaD0wLGw9MTsxMCE9PWwmJmVbbF08PWs7KytsKWgrPS4xOy0tbDt2YXIgbD1oKyhrLWVbbF0pLyhlW2wrMV0tZVtsXSkqLjEsbj0zKigxLTMqYiszKmMpKmwqbCsyKigzKmItNipjKSpsKzMqYztpZiguMDAxPD1uKXtmb3IoaD0wOzQ+aDsrK2gpe249MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoMD09PW4pYnJlYWs7dmFyIG09YShsLGMsYiktayxsPWwtbS9ufWs9bH1lbHNlIGlmKDA9PT1cbm4paz1sO2Vsc2V7dmFyIGw9aCxoPWgrLjEsZz0wO2RvIG09bCsoaC1sKS8yLG49YShtLGMsYiktaywwPG4/aD1tOmw9bTt3aGlsZSgxZS03PE1hdGguYWJzKG4pJiYxMD4rK2cpO2s9bX1yZXR1cm4gYShrLGQsZil9fX19KCksUT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtyZXR1cm4gMD09PWF8fDE9PT1hP2E6LU1hdGgucG93KDIsMTAqKGEtMSkpKk1hdGguc2luKDIqKGEtMS1iLygyKk1hdGguUEkpKk1hdGguYXNpbigxKSkqTWF0aC5QSS9iKX12YXIgYz1cIlF1YWQgQ3ViaWMgUXVhcnQgUXVpbnQgU2luZSBFeHBvIENpcmMgQmFjayBFbGFzdGljXCIuc3BsaXQoXCIgXCIpLGQ9e0luOltbLjU1LC4wODUsLjY4LC41M10sWy41NSwuMDU1LC42NzUsLjE5XSxbLjg5NSwuMDMsLjY4NSwuMjJdLFsuNzU1LC4wNSwuODU1LC4wNl0sWy40NywwLC43NDUsLjcxNV0sWy45NSwuMDUsLjc5NSwuMDM1XSxbLjYsLjA0LC45OCwuMzM1XSxbLjYsLS4yOCwuNzM1LC4wNDVdLGFdLE91dDpbWy4yNSxcbi40NiwuNDUsLjk0XSxbLjIxNSwuNjEsLjM1NSwxXSxbLjE2NSwuODQsLjQ0LDFdLFsuMjMsMSwuMzIsMV0sWy4zOSwuNTc1LC41NjUsMV0sWy4xOSwxLC4yMiwxXSxbLjA3NSwuODIsLjE2NSwxXSxbLjE3NSwuODg1LC4zMiwxLjI3NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4gMS1hKDEtYixjKX1dLEluT3V0OltbLjQ1NSwuMDMsLjUxNSwuOTU1XSxbLjY0NSwuMDQ1LC4zNTUsMV0sWy43NywwLC4xNzUsMV0sWy44NiwwLC4wNywxXSxbLjQ0NSwuMDUsLjU1LC45NV0sWzEsMCwwLDFdLFsuNzg1LC4xMzUsLjE1LC44Nl0sWy42OCwtLjU1LC4yNjUsMS41NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4uNT5iP2EoMipiLGMpLzI6MS1hKC0yKmIrMixjKS8yfV19LGI9e2xpbmVhcjpBKC4yNSwuMjUsLjc1LC43NSl9LGY9e30sZTtmb3IoZSBpbiBkKWYudHlwZT1lLGRbZi50eXBlXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihkLGYpe2JbXCJlYXNlXCIrYS50eXBlK2NbZl1dPWguZm5jKGQpP1xuZDpBLmFwcGx5KCRqc2NvbXAkdGhpcyxkKX19KGYpKSxmPXt0eXBlOmYudHlwZX07cmV0dXJuIGJ9KCksaGE9e2NzczpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc3R5bGVbY109ZH0sYXR0cmlidXRlOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoYyxkKX0sb2JqZWN0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYVtjXT1kfSx0cmFuc2Zvcm06ZnVuY3Rpb24oYSxjLGQsYixmKXtiW2ZdfHwoYltmXT1bXSk7YltmXS5wdXNoKGMrXCIoXCIrZCtcIilcIil9fSx2PVtdLEI9MCxpYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtCPXJlcXVlc3RBbmltYXRpb25GcmFtZShjKX1mdW5jdGlvbiBjKGMpe3ZhciBiPXYubGVuZ3RoO2lmKGIpe2Zvcih2YXIgZD0wO2Q8YjspdltkXSYmdltkXS50aWNrKGMpLGQrKzthKCl9ZWxzZSBjYW5jZWxBbmltYXRpb25GcmFtZShCKSxCPTB9cmV0dXJuIGF9KCk7cS52ZXJzaW9uPVwiMi4yLjBcIjtxLnNwZWVkPTE7cS5ydW5uaW5nPXY7cS5yZW1vdmU9XG5mdW5jdGlvbihhKXthPVAoYSk7Zm9yKHZhciBjPXYubGVuZ3RoO2MtLTspZm9yKHZhciBkPXZbY10sYj1kLmFuaW1hdGlvbnMsZj1iLmxlbmd0aDtmLS07KXUoYSxiW2ZdLmFuaW1hdGFibGUudGFyZ2V0KSYmKGIuc3BsaWNlKGYsMSksYi5sZW5ndGh8fGQucGF1c2UoKSl9O3EuZ2V0VmFsdWU9SztxLnBhdGg9ZnVuY3Rpb24oYSxjKXt2YXIgZD1oLnN0cihhKT9lKGEpWzBdOmEsYj1jfHwxMDA7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybntlbDpkLHByb3BlcnR5OmEsdG90YWxMZW5ndGg6TihkKSooYi8xMDApfX19O3Euc2V0RGFzaG9mZnNldD1mdW5jdGlvbihhKXt2YXIgYz1OKGEpO2Euc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLGMpO3JldHVybiBjfTtxLmJlemllcj1BO3EuZWFzaW5ncz1RO3EudGltZWxpbmU9ZnVuY3Rpb24oYSl7dmFyIGM9cShhKTtjLnBhdXNlKCk7Yy5kdXJhdGlvbj0wO2MuYWRkPWZ1bmN0aW9uKGQpe2MuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhKXthLmJlZ2FuPVxuITA7YS5jb21wbGV0ZWQ9ITB9KTttKGQpLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9eihiLEQoUyxhfHx7fSkpO2QudGFyZ2V0cz1kLnRhcmdldHN8fGEudGFyZ2V0cztiPWMuZHVyYXRpb247dmFyIGU9ZC5vZmZzZXQ7ZC5hdXRvcGxheT0hMTtkLmRpcmVjdGlvbj1jLmRpcmVjdGlvbjtkLm9mZnNldD1oLnVuZChlKT9iOkwoZSxiKTtjLmJlZ2FuPSEwO2MuY29tcGxldGVkPSEwO2Muc2VlayhkLm9mZnNldCk7ZD1xKGQpO2QuYmVnYW49ITA7ZC5jb21wbGV0ZWQ9ITA7ZC5kdXJhdGlvbj5iJiYoYy5kdXJhdGlvbj1kLmR1cmF0aW9uKTtjLmNoaWxkcmVuLnB1c2goZCl9KTtjLnNlZWsoMCk7Yy5yZXNldCgpO2MuYXV0b3BsYXkmJmMucmVzdGFydCgpO3JldHVybiBjfTtyZXR1cm4gY307cS5yYW5kb209ZnVuY3Rpb24oYSxjKXtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihjLWErMSkpK2F9O3JldHVybiBxfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==