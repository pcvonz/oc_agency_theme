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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuAnim_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuAnim_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MenuAnim_js__);
// import './blockNavAnim.js';


let sbari = document.querySelector('#scrollbar .inner-scroll')
let container = document.querySelector('.scroll')
let elements = document.querySelectorAll('.scroll > div')

let getScrollTopMax = function (el) {
  var ref
  return (ref = el.scrollTopMax) != null
    ? ref
    : (el.scrollHeight - el.clientHeight)
}

function setInnerScrollHeight () {
  let scrollp = (container.scrollTop / getScrollTopMax(container)) * 100
  sbari.style.height = `${scrollp}%`
}

container.addEventListener('scroll', (event) => {
  setInnerScrollHeight()
})
setInnerScrollHeight()

// Set up smooth scrolling for browsers that don't
// support scroll-behavior

if (!(typeof CSS === 'function') || !(CSS.supports('scroll-behavior'))) {
  let nav = document.querySelectorAll('nav a')
  nav.forEach((el) => {
    el.addEventListener('click', (ev) => {
      ev.target.scrollIntoTo({
        behavior: 'smooth'
      })
    })
  })
}

// Change fill of menu
let scroll = document.querySelector('.scroll')
let banner = document.querySelector('.banner')
document.querySelector('label > svg').setAttribute('style', 'fill: white')
scroll.addEventListener('scroll', function (e) {
  changeSlide(e)
})

let deltaY = 0
function changeSlide (event) {
  deltaY = deltaY - scroll.scrollTop
  if (scroll.scrollTop > banner.offsetHeight) {
    document.querySelector('label > svg').setAttribute('style', 'fill: unset')
  } else {
    document.querySelector('label > svg').setAttribute('style', 'fill: white')
  }
}


/***/ })

/******/ });