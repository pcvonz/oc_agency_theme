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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LinkedScrollList_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuAnim_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuAnim_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MenuAnim_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__universe_js__ = __webpack_require__(17);
// Code for the landing page
// import playSplash from './splashLoader.js'




let windowHash = window.location.hash.replace('_', '')

let scrollList
let content = document.querySelectorAll('.content-wrapper > div')

scrollList = new __WEBPACK_IMPORTED_MODULE_0__LinkedScrollList_js__["a" /* default */](content, 800)

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollObject__ = __webpack_require__(15);
// Class that takes in a list of of HTML nodes and
// and 'shifts' between them. Pretty generic, but
// can be used to implement simple 'scroll-jack'-like behavior.



class LinkedScrollList {
  constructor (content, breakpoint) {
    this.content = content;
    this.currentNode = new __WEBPACK_IMPORTED_MODULE_0__ScrollObject__["a" /* default */](content[0])
    this.breakpoint = breakpoint
    for (let i = 1; i < content.length; i++) {
      if (i > 0 && i < content.length - 1) {
        let temp = new __WEBPACK_IMPORTED_MODULE_0__ScrollObject__["a" /* default */](content[i])
        temp.next = new __WEBPACK_IMPORTED_MODULE_0__ScrollObject__["a" /* default */](content[i + 1])
        temp.prev = this.currentNode
        this.currentNode.next = temp
        this.currentNode = this.currentNode.next
      } else {
        let temp = new __WEBPACK_IMPORTED_MODULE_0__ScrollObject__["a" /* default */](content[i])
        temp.prev = this.currentNode
        this.currentNode.next = temp
      }
      if (this.currentNode.curr.id === undefined) {
        this.currentNode.curr.id = `node${i}`;
      }
    }
    this.setToFirstNode()
    this.setCurrentNode(window.location.hash);
  }
  setToFirstNode () {
    while (this.currentNode.prev != null) {
      this.currentNode = this.currentNode.prev;
    }
  }
  get length () {
    return this.content.length
  }
  
  getBreakpoint () {
    return this.breakpoint
  }
  setBreakpoint (breakpoint) {
    this.breakpoint = breakpoint
  }
  // Sets current scroll to defined hash
  setCurrentNode (hash, cb) {
    let temp = this.currentNode;
    while ( temp.prev != null ) {
      temp = temp.prev
    }
    for (let i = 0; i < this.length; i++) {
      if (`#${temp.curr.id}` === hash) {
        this.currentNode = temp;
        if (cb) { cb() }
        return 'Found node!'
      }
      temp = temp.next;
    }
    if (cb) { cb() }
    return 'Node not found';
  }
  nextNode () {
    if (this.currentNode.next != null && window.innerWidth > this.getBreakpoint()) {
      this.currentNode = this.currentNode.next
        window.location.replace(window.location.pathname + '#' + this.currentNode.curr.id+'_')
      }
  }
  prevNode () {
    if (this.currentNode.prev != null && window.innerWidth > this.getBreakpoint()) {
      this.currentNode = this.currentNode.prev
      window.location.replace(window.location.pathname + '#' + this.currentNode.curr.id+'_')
    }
  }
  toString () {
    let temp = this.currentNode
    console.log('object:')
    console.log(temp + '\n')
    while (temp.prev != null) {
      temp = temp.prev
    }
    while (temp.next != null) {
      temp = temp.next
      console.log('object:')
      console.log(temp + '\n')
    } }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LinkedScrollList;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Helper class for scrollLinkedList
class ScrollObject {
  constructor (curr) {
    this.c = curr
  }
  set next (n) {
    this.n = n
  }
  set prev (p) {
    this.p = p
  }
  set curr (c) {
    this.c = c
  }
  get curr () {
    return this.c
  }
  get next () {
    return this.n
  }
  get prev () {
    return this.p
  }
  toString () {
    return `${this.c.id}`
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScrollObject;



/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);


let path = __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.path('#path1466')
let pathTwo = __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.path('#path2')

let motionPath = __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
  targets: '.follow',
  translateX: path('x'), // Follow the x values from the path `Object`
  translateY: path('y'), // Follow the y values from the path `Object`
  easing: 'linear',
  duration: 50000,
  loop: true
})

let motionPathTwo = __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
  targets: '.follow2',
  translateX: pathTwo('x'), // Follow the x values from the path `Object`
  translateY: pathTwo('y'), // Follow the y values from the path `Object`
  easing: 'linear',
  duration: 80000,
  loop: true
})



/***/ }),
/* 18 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 19 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWNiOWFiODQ3ZWI5Zjg0MzU4NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmRpbmdQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9MaW5rZWRTY3JvbGxMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TY3JvbGxPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbnVBbmltLmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxP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QUssc0NBQXNDLGVBQWUseUJBQXlCLElBQUk7QUFDemUsTUFBTSxLQUFLLG1CQUFtQix3Q0FBd0MsZ0NBQWdDLElBQUksbUJBQW1CLGdCQUFnQixnQkFBZ0IsbUdBQW1HLHlFQUF5RTtBQUN6VSxvSkFBb0osa0JBQWtCLGtLQUFrSyxzQ0FBc0MsRUFBRSxJQUFJLDBCQUEwQixLQUFLLEdBQUcsa0RBQWtELHFCQUFxQjtBQUM3ZCwyQkFBMkIsUUFBUSxhQUFhLFNBQVMsT0FBTyxvQkFBb0Isb0JBQW9CLDJCQUEyQiwyQkFBMkIsd0JBQXdCLGNBQWMsK0JBQStCLGdCQUFnQix3QkFBd0Isd0JBQXdCLGFBQWEsMkJBQTJCLGNBQWMsZUFBZSxNQUFNLFlBQVksSUFBSSx3QkFBd0IsSUFBSSxpQ0FBaUMsU0FBUyxHQUFHLGtCQUFrQixVQUFVLFlBQVk7QUFDL2UsWUFBWSxPQUFPLG1CQUFtQixJQUFJLDBDQUEwQyxJQUFJLG1FQUFtRSxhQUFhLHFCQUFxQixrQ0FBa0MsbUJBQW1CLE9BQU8sNENBQTRDLDRCQUE0QixXQUFXLHFDQUFxQyxVQUFVLFdBQVcsWUFBWSx1QkFBdUIsV0FBVyxVQUFVLGFBQWEsa0JBQWtCLCtCQUErQjtBQUM1ZixHQUFHLGVBQWUsRUFBRSx5QkFBeUIsbUJBQW1CLEdBQUcsK0JBQStCLGFBQWEsZUFBZSxjQUFjLHdCQUF3QiwyQkFBMkIsV0FBVyxlQUFlLGlCQUFpQixPQUFPLFdBQVcsZUFBZSxzQ0FBc0MsbUJBQW1CLEVBQUUsVUFBVSxVQUFVLHdCQUF3QixVQUFVLFVBQVUsdUJBQXVCLDRDQUE0QyxTQUFTLEU7Ozs7Ozs7QUNoQ2xkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImxhbmRpbmcuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjYjlhYjg0N2ViOWY4NDM1ODZiIiwiLy8gQ29kZSBmb3IgdGhlIGxhbmRpbmcgcGFnZVxuLy8gaW1wb3J0IHBsYXlTcGxhc2ggZnJvbSAnLi9zcGxhc2hMb2FkZXIuanMnXG5pbXBvcnQgTGlua2VkU2Nyb2xsTGlzdCBmcm9tICcuL0xpbmtlZFNjcm9sbExpc3QuanMnXG5pbXBvcnQgJy4vTWVudUFuaW0uanMnXG5pbXBvcnQgJy4vdW5pdmVyc2UuanMnXG5cbmxldCB3aW5kb3dIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnXycsICcnKVxuXG5sZXQgc2Nyb2xsTGlzdFxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC13cmFwcGVyID4gZGl2Jylcblxuc2Nyb2xsTGlzdCA9IG5ldyBMaW5rZWRTY3JvbGxMaXN0KGNvbnRlbnQsIDgwMClcblxubGV0IG1pbldpZHRoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbi1oZWlnaHQnKVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaW5pdGlhdGUgc29sYXIgc3lzdGVtIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sbG93Jykuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3cnKS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgKyAnIGZ1bGwtb3BhY2l0eScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3cyJykuc2V0QXR0cmlidXRlKCdjbGFzcycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3cyJykuZ2V0QXR0cmlidXRlKCdjbGFzcycpICsgJyBmdWxsLW9wYWNpdHknKVxuXG4gIC8vIHBsYXlTcGxhc2goKVxuICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggIT09ICcnKSB7XG4gICAgd2luZG93SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJ18nLCAnJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1zbGlkZXInKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdpbmRvd0hhc2gpLm9mZnNldFRvcFxuICB9IGVsc2Uge1xuICAgIHdpbmRvd0hhc2ggPSAnI2hvbWUnXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnaG9tZSdcbiAgfVxufVxuXG4vLyBPbmx5IGNhbGxlZCBpZlxuLy8gQTogU2lkZWJhciBtZW51IGlzIHVzZWRcbi8vIEI6IENTUyBQcm9wZXJ0eSAnc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGgnIGlzIHN1cHBvcnRlZFxuZnVuY3Rpb24gY2hhbmdlSGFzaCAoZXYpIHtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIGhhc2hFeGlzdHMoKSkge1xuICAgIHdpbmRvd0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCdfJywgJycpXG4gICAgdXBkYXRlUHJvamVjdExpc3QoKVxuICAgIC8vIFNldCB0aGUgbWVudSBmaWxsIGRlcGVuZGluZyBvbiBiYWNrZ3JvdW5kXG4gICAgLy8gQXNzdW1lcyB0aGF0IGFueXRoaW5nIG5vdCBob21lIHdpbGwgaGF2ZSBhIGRhcmsgYmFja2dyb3VuZFxuXG4gICAgLy8gQ2hhbmdlIHdpZHRoIGJhc2VkIG9uIGhhc2hcbiAgICBpZiAod2luZG93SGFzaCAhPT0gJyNob21lJykge1xuICAgICAgbWluV2lkdGhDb250YWluZXIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXgtd2lkdGg6IDEyMDBweCcpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtaW5XaWR0aENvbnRhaW5lci5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC13aWR0aDogODAwcHgnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzaEV4aXN0cyAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCInICsgd2luZG93SGFzaCArICdcIl0nKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbmNoYW5nZUhhc2goKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBjaGFuZ2VIYXNoKVxuXG4vLyBGdW5jdGlvbnMgdGhhdCBydW4gd2hlbiBoYXNoIGNoYW5nZXNcbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0ICgpIHtcbiAgbGV0IHByZXZDdXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQnKVxuICBsZXQgbmV3Q3VyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbaHJlZj1cIiR7d2luZG93SGFzaH1cIl1gKVxuICBwcmV2Q3Vyci5zZXRBdHRyaWJ1dGUoJ2lkJywgJycpXG4gIG5ld0N1cnIuc2V0QXR0cmlidXRlKCdpZCcsICdjdXJyZW50Jylcbn1cblxuLy8gU2V0IHVwIHNtb290aCBzY3JvbGwgYmV0d2VlbiBwcm9qZWN0c1xuLy8gU2V0IHNjcm9sbCBhcmVhIHRvIGJlIGwtc2xpZGVyXG5sZXQgTU9VU0VfT1ZFUiA9IHRydWVcbmxldCBzY3JvbGxBY2N1bSA9IDBcblxubGV0IGxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1zbGlkZXInKVxubFNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgTU9VU0VfT1ZFUiA9IHRydWVcbn0pXG5cbmxTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VleGl0JywgKGUpID0+IHtcbiAgTU9VU0VfT1ZFUiA9IGZhbHNlXG59KVxuXG5sU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChNT1VTRV9PVkVSKSB7XG4gICAgY2hhbmdlU2xpZGUoZSlcbiAgfVxufSlcblxubGV0IGRlbHRhWSA9IDBcbmZ1bmN0aW9uIGNoYW5nZVNsaWRlIChldmVudCkge1xuICBsZXQgbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLXNsaWRlcicpXG4gIGRlbHRhWSA9IGRlbHRhWSAtIGxTbGlkZXIuc2Nyb2xsVG9wXG4gIGlmIChsU2xpZGVyLnNjcm9sbFRvcCA+IGxTbGlkZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWwgPiBzdmcnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6IHdoaXRlJylcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbCA+IHN2ZycpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogJylcbiAgfVxuICBpZiAoZGVsdGFZIDwgMCkge1xuICAgIGlmIChzY3JvbGxMaXN0LmN1cnJlbnROb2RlLm5leHQgIT09IHVuZGVmaW5lZCAmJiBsU2xpZGVyLnNjcm9sbFRvcCA+PSBzY3JvbGxMaXN0LmN1cnJlbnROb2RlLm5leHQuY3Vyci5vZmZzZXRUb3ApIHtcbiAgICAgIHNjcm9sbExpc3QubmV4dE5vZGUoKVxuICAgIH1cbiAgfVxuICBpZiAoZGVsdGFZID4gMCkge1xuICAgIGlmIChzY3JvbGxMaXN0LmN1cnJlbnROb2RlLnByZXYgIT09IHVuZGVmaW5lZCAmJiBsU2xpZGVyLnNjcm9sbFRvcCA8PSBzY3JvbGxMaXN0LmN1cnJlbnROb2RlLnByZXYuY3Vyci5vZmZzZXRUb3ApIHtcbiAgICAgIHNjcm9sbExpc3QucHJldk5vZGUoKVxuICAgIH1cbiAgfVxuICBkZWx0YVkgPSBsU2xpZGVyLnNjcm9sbFRvcFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGFuZGluZ1BhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIENsYXNzIHRoYXQgdGFrZXMgaW4gYSBsaXN0IG9mIG9mIEhUTUwgbm9kZXMgYW5kXG4vLyBhbmQgJ3NoaWZ0cycgYmV0d2VlbiB0aGVtLiBQcmV0dHkgZ2VuZXJpYywgYnV0XG4vLyBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgc2ltcGxlICdzY3JvbGwtamFjayctbGlrZSBiZWhhdmlvci5cblxuaW1wb3J0IFNjcm9sbE9iamVjdCBmcm9tICcuL1Njcm9sbE9iamVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua2VkU2Nyb2xsTGlzdCB7XG4gIGNvbnN0cnVjdG9yIChjb250ZW50LCBicmVha3BvaW50KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmN1cnJlbnROb2RlID0gbmV3IFNjcm9sbE9iamVjdChjb250ZW50WzBdKVxuICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID4gMCAmJiBpIDwgY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFNjcm9sbE9iamVjdChjb250ZW50W2ldKVxuICAgICAgICB0ZW1wLm5leHQgPSBuZXcgU2Nyb2xsT2JqZWN0KGNvbnRlbnRbaSArIDFdKVxuICAgICAgICB0ZW1wLnByZXYgPSB0aGlzLmN1cnJlbnROb2RlXG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUubmV4dCA9IHRlbXBcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMuY3VycmVudE5vZGUubmV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgU2Nyb2xsT2JqZWN0KGNvbnRlbnRbaV0pXG4gICAgICAgIHRlbXAucHJldiA9IHRoaXMuY3VycmVudE5vZGVcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5uZXh0ID0gdGVtcFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUuY3Vyci5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUuY3Vyci5pZCA9IGBub2RlJHtpfWA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0VG9GaXJzdE5vZGUoKVxuICAgIHRoaXMuc2V0Q3VycmVudE5vZGUod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICB9XG4gIHNldFRvRmlyc3ROb2RlICgpIHtcbiAgICB3aGlsZSAodGhpcy5jdXJyZW50Tm9kZS5wcmV2ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnByZXY7XG4gICAgfVxuICB9XG4gIGdldCBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoXG4gIH1cbiAgXG4gIGdldEJyZWFrcG9pbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRcbiAgfVxuICBzZXRCcmVha3BvaW50IChicmVha3BvaW50KSB7XG4gICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludFxuICB9XG4gIC8vIFNldHMgY3VycmVudCBzY3JvbGwgdG8gZGVmaW5lZCBoYXNoXG4gIHNldEN1cnJlbnROb2RlIChoYXNoLCBjYikge1xuICAgIGxldCB0ZW1wID0gdGhpcy5jdXJyZW50Tm9kZTtcbiAgICB3aGlsZSAoIHRlbXAucHJldiAhPSBudWxsICkge1xuICAgICAgdGVtcCA9IHRlbXAucHJldlxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChgIyR7dGVtcC5jdXJyLmlkfWAgPT09IGhhc2gpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRlbXA7XG4gICAgICAgIGlmIChjYikgeyBjYigpIH1cbiAgICAgICAgcmV0dXJuICdGb3VuZCBub2RlISdcbiAgICAgIH1cbiAgICAgIHRlbXAgPSB0ZW1wLm5leHQ7XG4gICAgfVxuICAgIGlmIChjYikgeyBjYigpIH1cbiAgICByZXR1cm4gJ05vZGUgbm90IGZvdW5kJztcbiAgfVxuICBuZXh0Tm9kZSAoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE5vZGUubmV4dCAhPSBudWxsICYmIHdpbmRvdy5pbm5lcldpZHRoID4gdGhpcy5nZXRCcmVha3BvaW50KCkpIHtcbiAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJyMnICsgdGhpcy5jdXJyZW50Tm9kZS5jdXJyLmlkKydfJylcbiAgICAgIH1cbiAgfVxuICBwcmV2Tm9kZSAoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE5vZGUucHJldiAhPSBudWxsICYmIHdpbmRvdy5pbm5lcldpZHRoID4gdGhpcy5nZXRCcmVha3BvaW50KCkpIHtcbiAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLmN1cnJlbnROb2RlLnByZXZcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcjJyArIHRoaXMuY3VycmVudE5vZGUuY3Vyci5pZCsnXycpXG4gICAgfVxuICB9XG4gIHRvU3RyaW5nICgpIHtcbiAgICBsZXQgdGVtcCA9IHRoaXMuY3VycmVudE5vZGVcbiAgICBjb25zb2xlLmxvZygnb2JqZWN0OicpXG4gICAgY29uc29sZS5sb2codGVtcCArICdcXG4nKVxuICAgIHdoaWxlICh0ZW1wLnByZXYgIT0gbnVsbCkge1xuICAgICAgdGVtcCA9IHRlbXAucHJldlxuICAgIH1cbiAgICB3aGlsZSAodGVtcC5uZXh0ICE9IG51bGwpIHtcbiAgICAgIHRlbXAgPSB0ZW1wLm5leHRcbiAgICAgIGNvbnNvbGUubG9nKCdvYmplY3Q6JylcbiAgICAgIGNvbnNvbGUubG9nKHRlbXAgKyAnXFxuJylcbiAgICB9IH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0xpbmtlZFNjcm9sbExpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIEhlbHBlciBjbGFzcyBmb3Igc2Nyb2xsTGlua2VkTGlzdFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsT2JqZWN0IHtcbiAgY29uc3RydWN0b3IgKGN1cnIpIHtcbiAgICB0aGlzLmMgPSBjdXJyXG4gIH1cbiAgc2V0IG5leHQgKG4pIHtcbiAgICB0aGlzLm4gPSBuXG4gIH1cbiAgc2V0IHByZXYgKHApIHtcbiAgICB0aGlzLnAgPSBwXG4gIH1cbiAgc2V0IGN1cnIgKGMpIHtcbiAgICB0aGlzLmMgPSBjXG4gIH1cbiAgZ2V0IGN1cnIgKCkge1xuICAgIHJldHVybiB0aGlzLmNcbiAgfVxuICBnZXQgbmV4dCAoKSB7XG4gICAgcmV0dXJuIHRoaXMublxuICB9XG4gIGdldCBwcmV2ICgpIHtcbiAgICByZXR1cm4gdGhpcy5wXG4gIH1cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmMuaWR9YFxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TY3JvbGxPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImxldCBiYXJUaW1lID0ge1xuICBkdXJhdGlvbjogMTUwLFxuICBmaWxsOiAnZm9yd2FyZHMnLFxuICBpdGVyYXRpb25zOiAxXG59XG5sZXQgdG9wQmFyID0gW1xuICB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRleSgwKSB0cmFuc2xhdGV4KDApIHJvdGF0ZSgwKSdcbiAgfSxcbiAge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZXkoMS41cHgpIHRyYW5zbGF0ZXgoMXB4KSByb3RhdGUoNDVkZWcpJ1xuICB9XG5dXG5cbmxldCBtaWRCYXIgPSBbXG4gIHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGV5KDApIHRyYW5zbGF0ZXgoMCkgcm90YXRlKDApJ1xuICB9LFxuICB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRleSg1cHgpIHRyYW5zbGF0ZXgoLTEuN3B4KSByb3RhdGUoLTQ1ZGVnKSdcbiAgfVxuXVxubGV0IGJvdEJhciA9IFtcbiAge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZXkoMCknXG4gIH0sXG4gIHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGV5KDEwcHgpJ1xuICB9XG5dXG5cbmxldCB0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgI3BhdGgxOTg5JylcbmxldCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgI3BhdGgxOTg3JylcbmxldCBib3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcgI3BhdGgxOTc1JylcbmxldCB0b3BBbmltID0gdG9wLmFuaW1hdGUoXG4gIHRvcEJhcixcbiAgYmFyVGltZVxuKVxubGV0IG1pZEFuaW0gPSBtaWQuYW5pbWF0ZShcbiAgbWlkQmFyLFxuICBiYXJUaW1lXG4pXG5sZXQgYm90QW5pbSA9IGJvdC5hbmltYXRlKFxuICBib3RCYXIsXG4gIGJhclRpbWVcbilcbnRvcEFuaW0ucGF1c2UoKVxubWlkQW5pbS5wYXVzZSgpXG5ib3RBbmltLnBhdXNlKClcbmxldCBtZW51Q2xvc2VkID0gdHJ1ZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpLmNoZWNrZWQgPSBmYWxzZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVhbmltIHN2ZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gIGlmIChtZW51Q2xvc2VkKSB7XG4gICAgdG9wQW5pbS5wbGF5YmFja1JhdGUgPSAxXG4gICAgbWlkQW5pbS5wbGF5YmFja1JhdGUgPSAxXG4gICAgYm90QW5pbS5wbGF5YmFja1JhdGUgPSAxXG4gIH0gZWxzZSB7XG4gICAgdG9wQW5pbS5wbGF5YmFja1JhdGUgPSAtMVxuICAgIG1pZEFuaW0ucGxheWJhY2tSYXRlID0gLTFcbiAgICBib3RBbmltLnBsYXliYWNrUmF0ZSA9IC0xXG4gIH1cbiAgdG9wQW5pbS5wbGF5KClcbiAgbWlkQW5pbS5wbGF5KClcbiAgYm90QW5pbS5wbGF5KClcbiAgbWVudUNsb3NlZCA9ICFtZW51Q2xvc2VkXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTWVudUFuaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xuXG5sZXQgcGF0aCA9IGFuaW1lLnBhdGgoJyNwYXRoMTQ2NicpXG5sZXQgcGF0aFR3byA9IGFuaW1lLnBhdGgoJyNwYXRoMicpXG5cbmxldCBtb3Rpb25QYXRoID0gYW5pbWUoe1xuICB0YXJnZXRzOiAnLmZvbGxvdycsXG4gIHRyYW5zbGF0ZVg6IHBhdGgoJ3gnKSwgLy8gRm9sbG93IHRoZSB4IHZhbHVlcyBmcm9tIHRoZSBwYXRoIGBPYmplY3RgXG4gIHRyYW5zbGF0ZVk6IHBhdGgoJ3knKSwgLy8gRm9sbG93IHRoZSB5IHZhbHVlcyBmcm9tIHRoZSBwYXRoIGBPYmplY3RgXG4gIGVhc2luZzogJ2xpbmVhcicsXG4gIGR1cmF0aW9uOiA1MDAwMCxcbiAgbG9vcDogdHJ1ZVxufSlcblxubGV0IG1vdGlvblBhdGhUd28gPSBhbmltZSh7XG4gIHRhcmdldHM6ICcuZm9sbG93MicsXG4gIHRyYW5zbGF0ZVg6IHBhdGhUd28oJ3gnKSwgLy8gRm9sbG93IHRoZSB4IHZhbHVlcyBmcm9tIHRoZSBwYXRoIGBPYmplY3RgXG4gIHRyYW5zbGF0ZVk6IHBhdGhUd28oJ3knKSwgLy8gRm9sbG93IHRoZSB5IHZhbHVlcyBmcm9tIHRoZSBwYXRoIGBPYmplY3RgXG4gIGVhc2luZzogJ2xpbmVhcicsXG4gIGR1cmF0aW9uOiA4MDAwMCxcbiAgbG9vcDogdHJ1ZVxufSlcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdW5pdmVyc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qXG4gMjAxNyBKdWxpYW4gR2FybmllclxuIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKi9cbnZhciAkanNjb21wPXtzY29wZTp7fX07JGpzY29tcC5kZWZpbmVQcm9wZXJ0eT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oZSxyLHApe2lmKHAuZ2V0fHxwLnNldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRVMzIGRvZXMgbm90IHN1cHBvcnQgZ2V0dGVycyBhbmQgc2V0dGVycy5cIik7ZSE9QXJyYXkucHJvdG90eXBlJiZlIT1PYmplY3QucHJvdG90eXBlJiYoZVtyXT1wLnZhbHVlKX07JGpzY29tcC5nZXRHbG9iYWw9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09ZT9lOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6ZX07JGpzY29tcC5nbG9iYWw9JGpzY29tcC5nZXRHbG9iYWwodGhpcyk7JGpzY29tcC5TWU1CT0xfUFJFRklYPVwianNjb21wX3N5bWJvbF9cIjtcbiRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpe307JGpzY29tcC5nbG9iYWwuU3ltYm9sfHwoJGpzY29tcC5nbG9iYWwuU3ltYm9sPSRqc2NvbXAuU3ltYm9sKX07JGpzY29tcC5zeW1ib2xDb3VudGVyXz0wOyRqc2NvbXAuU3ltYm9sPWZ1bmN0aW9uKGUpe3JldHVybiAkanNjb21wLlNZTUJPTF9QUkVGSVgrKGV8fFwiXCIpKyRqc2NvbXAuc3ltYm9sQ291bnRlcl8rK307XG4kanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbCgpO3ZhciBlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcjtlfHwoZT0kanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3I9JGpzY29tcC5nbG9iYWwuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtlXSYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsZSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuYXJyYXlJdGVyYXRvcih0aGlzKX19KTskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpe319OyRqc2NvbXAuYXJyYXlJdGVyYXRvcj1mdW5jdGlvbihlKXt2YXIgcj0wO3JldHVybiAkanNjb21wLml0ZXJhdG9yUHJvdG90eXBlKGZ1bmN0aW9uKCl7cmV0dXJuIHI8ZS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6ZVtyKytdfTp7ZG9uZTohMH19KX07XG4kanNjb21wLml0ZXJhdG9yUHJvdG90eXBlPWZ1bmN0aW9uKGUpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZT17bmV4dDplfTtlWyRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGV9OyRqc2NvbXAuYXJyYXk9JGpzY29tcC5hcnJheXx8e307JGpzY29tcC5pdGVyYXRvckZyb21BcnJheT1mdW5jdGlvbihlLHIpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZSBpbnN0YW5jZW9mIFN0cmluZyYmKGUrPVwiXCIpO3ZhciBwPTAsbT17bmV4dDpmdW5jdGlvbigpe2lmKHA8ZS5sZW5ndGgpe3ZhciB1PXArKztyZXR1cm57dmFsdWU6cih1LGVbdV0pLGRvbmU6ITF9fW0ubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOiEwLHZhbHVlOnZvaWQgMH19O3JldHVybiBtLm5leHQoKX19O21bU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBtfTtyZXR1cm4gbX07XG4kanNjb21wLnBvbHlmaWxsPWZ1bmN0aW9uKGUscixwLG0pe2lmKHIpe3A9JGpzY29tcC5nbG9iYWw7ZT1lLnNwbGl0KFwiLlwiKTtmb3IobT0wO208ZS5sZW5ndGgtMTttKyspe3ZhciB1PWVbbV07dSBpbiBwfHwocFt1XT17fSk7cD1wW3VdfWU9ZVtlLmxlbmd0aC0xXTttPXBbZV07cj1yKG0pO3IhPW0mJm51bGwhPXImJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkocCxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cn0pfX07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5rZXlzXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGU/ZTpmdW5jdGlvbigpe3JldHVybiAkanNjb21wLml0ZXJhdG9yRnJvbUFycmF5KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX19LFwiZXM2LWltcGxcIixcImVzM1wiKTt2YXIgJGpzY29tcCR0aGlzPXRoaXM7XG4oZnVuY3Rpb24oZSxyKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxyKTpcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9cigpOmUuYW5pbWU9cigpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7aWYoIWguY29sKGEpKXRyeXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKX1jYXRjaChjKXt9fWZ1bmN0aW9uIHIoYSxjKXtmb3IodmFyIGQ9YS5sZW5ndGgsYj0yPD1hcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTp2b2lkIDAsZj1bXSxuPTA7bjxkO24rKylpZihuIGluIGEpe3ZhciBrPWFbbl07Yy5jYWxsKGIsayxuLGEpJiZmLnB1c2goayl9cmV0dXJuIGZ9ZnVuY3Rpb24gcChhKXtyZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24oYSxkKXtyZXR1cm4gYS5jb25jYXQoaC5hcnIoZCk/cChkKTpkKX0sW10pfWZ1bmN0aW9uIG0oYSl7aWYoaC5hcnIoYSkpcmV0dXJuIGE7XG5oLnN0cihhKSYmKGE9ZShhKXx8YSk7cmV0dXJuIGEgaW5zdGFuY2VvZiBOb2RlTGlzdHx8YSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uP1tdLnNsaWNlLmNhbGwoYSk6W2FdfWZ1bmN0aW9uIHUoYSxjKXtyZXR1cm4gYS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Y30pfWZ1bmN0aW9uIEMoYSl7dmFyIGM9e30sZDtmb3IoZCBpbiBhKWNbZF09YVtkXTtyZXR1cm4gY31mdW5jdGlvbiBEKGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGEpZFtiXT1jLmhhc093blByb3BlcnR5KGIpP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiB6KGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGMpZFtiXT1oLnVuZChhW2JdKT9jW2JdOmFbYl07cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXthPWEucmVwbGFjZSgvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGZ1bmN0aW9uKGEsYyxkLGspe3JldHVybiBjK2MrZCtkK2sra30pO3ZhciBjPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhhKTtcbmE9cGFyc2VJbnQoY1sxXSwxNik7dmFyIGQ9cGFyc2VJbnQoY1syXSwxNiksYz1wYXJzZUludChjWzNdLDE2KTtyZXR1cm5cInJnYmEoXCIrYStcIixcIitkK1wiLFwiK2MrXCIsMSlcIn1mdW5jdGlvbiBVKGEpe2Z1bmN0aW9uIGMoYSxjLGIpezA+YiYmKGIrPTEpOzE8YiYmLS1iO3JldHVybiBiPDEvNj9hKzYqKGMtYSkqYjouNT5iP2M6YjwyLzM/YSsoYy1hKSooMi8zLWIpKjY6YX12YXIgZD0vaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhhKXx8L2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoYSk7YT1wYXJzZUludChkWzFdKS8zNjA7dmFyIGI9cGFyc2VJbnQoZFsyXSkvMTAwLGY9cGFyc2VJbnQoZFszXSkvMTAwLGQ9ZFs0XXx8MTtpZigwPT1iKWY9Yj1hPWY7ZWxzZXt2YXIgbj0uNT5mP2YqKDErYik6ZitiLWYqYixrPTIqZi1uLGY9YyhrLG4sYSsxLzMpLGI9YyhrLG4sYSk7YT1jKGssbixhLTEvMyl9cmV0dXJuXCJyZ2JhKFwiK1xuMjU1KmYrXCIsXCIrMjU1KmIrXCIsXCIrMjU1KmErXCIsXCIrZCtcIilcIn1mdW5jdGlvbiB5KGEpe2lmKGE9LyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKGEpKXJldHVybiBhWzJdfWZ1bmN0aW9uIFYoYSl7aWYoLTE8YS5pbmRleE9mKFwidHJhbnNsYXRlXCIpfHxcInBlcnNwZWN0aXZlXCI9PT1hKXJldHVyblwicHhcIjtpZigtMTxhLmluZGV4T2YoXCJyb3RhdGVcIil8fC0xPGEuaW5kZXhPZihcInNrZXdcIikpcmV0dXJuXCJkZWdcIn1mdW5jdGlvbiBJKGEsYyl7cmV0dXJuIGguZm5jKGEpP2EoYy50YXJnZXQsYy5pZCxjLnRvdGFsKTphfWZ1bmN0aW9uIEUoYSxjKXtpZihjIGluIGEuc3R5bGUpcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShjLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpKXx8XCIwXCJ9ZnVuY3Rpb24gSihhLGMpe2lmKGguZG9tKGEpJiZcbnUoVyxjKSlyZXR1cm5cInRyYW5zZm9ybVwiO2lmKGguZG9tKGEpJiYoYS5nZXRBdHRyaWJ1dGUoYyl8fGguc3ZnKGEpJiZhW2NdKSlyZXR1cm5cImF0dHJpYnV0ZVwiO2lmKGguZG9tKGEpJiZcInRyYW5zZm9ybVwiIT09YyYmRShhLGMpKXJldHVyblwiY3NzXCI7aWYobnVsbCE9YVtjXSlyZXR1cm5cIm9iamVjdFwifWZ1bmN0aW9uIFgoYSxjKXt2YXIgZD1WKGMpLGQ9LTE8Yy5pbmRleE9mKFwic2NhbGVcIik/MTowK2Q7YT1hLnN0eWxlLnRyYW5zZm9ybTtpZighYSlyZXR1cm4gZDtmb3IodmFyIGI9W10sZj1bXSxuPVtdLGs9LyhcXHcrKVxcKCguKz8pXFwpL2c7Yj1rLmV4ZWMoYSk7KWYucHVzaChiWzFdKSxuLnB1c2goYlsyXSk7YT1yKG4sZnVuY3Rpb24oYSxiKXtyZXR1cm4gZltiXT09PWN9KTtyZXR1cm4gYS5sZW5ndGg/YVswXTpkfWZ1bmN0aW9uIEsoYSxjKXtzd2l0Y2goSihhLGMpKXtjYXNlIFwidHJhbnNmb3JtXCI6cmV0dXJuIFgoYSxjKTtjYXNlIFwiY3NzXCI6cmV0dXJuIEUoYSxjKTtjYXNlIFwiYXR0cmlidXRlXCI6cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGMpfXJldHVybiBhW2NdfHxcbjB9ZnVuY3Rpb24gTChhLGMpe3ZhciBkPS9eKFxcKj18XFwrPXwtPSkvLmV4ZWMoYSk7aWYoIWQpcmV0dXJuIGE7dmFyIGI9eShhKXx8MDtjPXBhcnNlRmxvYXQoYyk7YT1wYXJzZUZsb2F0KGEucmVwbGFjZShkWzBdLFwiXCIpKTtzd2l0Y2goZFswXVswXSl7Y2FzZSBcIitcIjpyZXR1cm4gYythK2I7Y2FzZSBcIi1cIjpyZXR1cm4gYy1hK2I7Y2FzZSBcIipcIjpyZXR1cm4gYyphK2J9fWZ1bmN0aW9uIEYoYSxjKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGMueC1hLngsMikrTWF0aC5wb3coYy55LWEueSwyKSl9ZnVuY3Rpb24gTShhKXthPWEucG9pbnRzO2Zvcih2YXIgYz0wLGQsYj0wO2I8YS5udW1iZXJPZkl0ZW1zO2IrKyl7dmFyIGY9YS5nZXRJdGVtKGIpOzA8YiYmKGMrPUYoZCxmKSk7ZD1mfXJldHVybiBjfWZ1bmN0aW9uIE4oYSl7aWYoYS5nZXRUb3RhbExlbmd0aClyZXR1cm4gYS5nZXRUb3RhbExlbmd0aCgpO3N3aXRjaChhLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZSBcImNpcmNsZVwiOnJldHVybiAyKlxuTWF0aC5QSSphLmdldEF0dHJpYnV0ZShcInJcIik7Y2FzZSBcInJlY3RcIjpyZXR1cm4gMiphLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpKzIqYS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7Y2FzZSBcImxpbmVcIjpyZXR1cm4gRih7eDphLmdldEF0dHJpYnV0ZShcIngxXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MVwiKX0se3g6YS5nZXRBdHRyaWJ1dGUoXCJ4MlwiKSx5OmEuZ2V0QXR0cmlidXRlKFwieTJcIil9KTtjYXNlIFwicG9seWxpbmVcIjpyZXR1cm4gTShhKTtjYXNlIFwicG9seWdvblwiOnZhciBjPWEucG9pbnRzO3JldHVybiBNKGEpK0YoYy5nZXRJdGVtKGMubnVtYmVyT2ZJdGVtcy0xKSxjLmdldEl0ZW0oMCkpfX1mdW5jdGlvbiBZKGEsYyl7ZnVuY3Rpb24gZChiKXtiPXZvaWQgMD09PWI/MDpiO3JldHVybiBhLmVsLmdldFBvaW50QXRMZW5ndGgoMTw9YytiP2MrYjowKX12YXIgYj1kKCksZj1kKC0xKSxuPWQoMSk7c3dpdGNoKGEucHJvcGVydHkpe2Nhc2UgXCJ4XCI6cmV0dXJuIGIueDtjYXNlIFwieVwiOnJldHVybiBiLnk7XG5jYXNlIFwiYW5nbGVcIjpyZXR1cm4gMTgwKk1hdGguYXRhbjIobi55LWYueSxuLngtZi54KS9NYXRoLlBJfX1mdW5jdGlvbiBPKGEsYyl7dmFyIGQ9Ly0/XFxkKlxcLj9cXGQrL2csYjtiPWgucHRoKGEpP2EudG90YWxMZW5ndGg6YTtpZihoLmNvbChiKSlpZihoLnJnYihiKSl7dmFyIGY9L3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKGIpO2I9Zj9cInJnYmEoXCIrZlsxXStcIiwxKVwiOmJ9ZWxzZSBiPWguaGV4KGIpP1QoYik6aC5oc2woYik/VShiKTp2b2lkIDA7ZWxzZSBmPShmPXkoYikpP2Iuc3Vic3RyKDAsYi5sZW5ndGgtZi5sZW5ndGgpOmIsYj1jJiYhL1xccy9nLnRlc3QoYik/ZitjOmY7Yis9XCJcIjtyZXR1cm57b3JpZ2luYWw6YixudW1iZXJzOmIubWF0Y2goZCk/Yi5tYXRjaChkKS5tYXAoTnVtYmVyKTpbMF0sc3RyaW5nczpoLnN0cihhKXx8Yz9iLnNwbGl0KGQpOltdfX1mdW5jdGlvbiBQKGEpe2E9YT9wKGguYXJyKGEpP2EubWFwKG0pOm0oYSkpOltdO3JldHVybiByKGEsXG5mdW5jdGlvbihhLGQsYil7cmV0dXJuIGIuaW5kZXhPZihhKT09PWR9KX1mdW5jdGlvbiBaKGEpe3ZhciBjPVAoYSk7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJue3RhcmdldDphLGlkOmIsdG90YWw6Yy5sZW5ndGh9fSl9ZnVuY3Rpb24gYWEoYSxjKXt2YXIgZD1DKGMpO2lmKGguYXJyKGEpKXt2YXIgYj1hLmxlbmd0aDsyIT09Ynx8aC5vYmooYVswXSk/aC5mbmMoYy5kdXJhdGlvbil8fChkLmR1cmF0aW9uPWMuZHVyYXRpb24vYik6YT17dmFsdWU6YX19cmV0dXJuIG0oYSkubWFwKGZ1bmN0aW9uKGEsYil7Yj1iPzA6Yy5kZWxheTthPWgub2JqKGEpJiYhaC5wdGgoYSk/YTp7dmFsdWU6YX07aC51bmQoYS5kZWxheSkmJihhLmRlbGF5PWIpO3JldHVybiBhfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB6KGEsZCl9KX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXt9LGI7Zm9yKGIgaW4gYSl7dmFyIGY9SShhW2JdLGMpO2guYXJyKGYpJiYoZj1mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gSShhLFxuYyl9KSwxPT09Zi5sZW5ndGgmJihmPWZbMF0pKTtkW2JdPWZ9ZC5kdXJhdGlvbj1wYXJzZUZsb2F0KGQuZHVyYXRpb24pO2QuZGVsYXk9cGFyc2VGbG9hdChkLmRlbGF5KTtyZXR1cm4gZH1mdW5jdGlvbiBjYShhKXtyZXR1cm4gaC5hcnIoYSk/QS5hcHBseSh0aGlzLGEpOlFbYV19ZnVuY3Rpb24gZGEoYSxjKXt2YXIgZDtyZXR1cm4gYS50d2VlbnMubWFwKGZ1bmN0aW9uKGIpe2I9YmEoYixjKTt2YXIgZj1iLnZhbHVlLGU9SyhjLnRhcmdldCxhLm5hbWUpLGs9ZD9kLnRvLm9yaWdpbmFsOmUsaz1oLmFycihmKT9mWzBdOmssdz1MKGguYXJyKGYpP2ZbMV06ZixrKSxlPXkodyl8fHkoayl8fHkoZSk7Yi5mcm9tPU8oayxlKTtiLnRvPU8odyxlKTtiLnN0YXJ0PWQ/ZC5lbmQ6YS5vZmZzZXQ7Yi5lbmQ9Yi5zdGFydCtiLmRlbGF5K2IuZHVyYXRpb247Yi5lYXNpbmc9Y2EoYi5lYXNpbmcpO2IuZWxhc3RpY2l0eT0oMUUzLU1hdGgubWluKE1hdGgubWF4KGIuZWxhc3RpY2l0eSwxKSw5OTkpKS9cbjFFMztiLmlzUGF0aD1oLnB0aChmKTtiLmlzQ29sb3I9aC5jb2woYi5mcm9tLm9yaWdpbmFsKTtiLmlzQ29sb3ImJihiLnJvdW5kPTEpO3JldHVybiBkPWJ9KX1mdW5jdGlvbiBlYShhLGMpe3JldHVybiByKHAoYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGIpe3ZhciBjPUooYS50YXJnZXQsYi5uYW1lKTtpZihjKXt2YXIgZD1kYShiLGEpO2I9e3R5cGU6Yyxwcm9wZXJ0eTpiLm5hbWUsYW5pbWF0YWJsZTphLHR3ZWVuczpkLGR1cmF0aW9uOmRbZC5sZW5ndGgtMV0uZW5kLGRlbGF5OmRbMF0uZGVsYXl9fWVsc2UgYj12b2lkIDA7cmV0dXJuIGJ9KX0pKSxmdW5jdGlvbihhKXtyZXR1cm4haC51bmQoYSl9KX1mdW5jdGlvbiBSKGEsYyxkLGIpe3ZhciBmPVwiZGVsYXlcIj09PWE7cmV0dXJuIGMubGVuZ3RoPyhmP01hdGgubWluOk1hdGgubWF4KS5hcHBseShNYXRoLGMubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiW2FdfSkpOmY/Yi5kZWxheTpkLm9mZnNldCtiLmRlbGF5K1xuYi5kdXJhdGlvbn1mdW5jdGlvbiBmYShhKXt2YXIgYz1EKGdhLGEpLGQ9RChTLGEpLGI9WihhLnRhcmdldHMpLGY9W10sZT16KGMsZCksaztmb3IoayBpbiBhKWUuaGFzT3duUHJvcGVydHkoayl8fFwidGFyZ2V0c1wiPT09a3x8Zi5wdXNoKHtuYW1lOmssb2Zmc2V0OmUub2Zmc2V0LHR3ZWVuczphYShhW2tdLGQpfSk7YT1lYShiLGYpO3JldHVybiB6KGMse2NoaWxkcmVuOltdLGFuaW1hdGFibGVzOmIsYW5pbWF0aW9uczphLGR1cmF0aW9uOlIoXCJkdXJhdGlvblwiLGEsYyxkKSxkZWxheTpSKFwiZGVsYXlcIixhLGMsZCl9KX1mdW5jdGlvbiBxKGEpe2Z1bmN0aW9uIGMoKXtyZXR1cm4gd2luZG93LlByb21pc2UmJm5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe3JldHVybiBwPWF9KX1mdW5jdGlvbiBkKGEpe3JldHVybiBnLnJldmVyc2VkP2cuZHVyYXRpb24tYTphfWZ1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPTAsYz17fSxkPWcuYW5pbWF0aW9ucyxmPWQubGVuZ3RoO2I8Zjspe3ZhciBlPWRbYl0sXG5rPWUuYW5pbWF0YWJsZSxoPWUudHdlZW5zLG49aC5sZW5ndGgtMSxsPWhbbl07biYmKGw9cihoLGZ1bmN0aW9uKGIpe3JldHVybiBhPGIuZW5kfSlbMF18fGwpO2Zvcih2YXIgaD1NYXRoLm1pbihNYXRoLm1heChhLWwuc3RhcnQtbC5kZWxheSwwKSxsLmR1cmF0aW9uKS9sLmR1cmF0aW9uLHc9aXNOYU4oaCk/MTpsLmVhc2luZyhoLGwuZWxhc3RpY2l0eSksaD1sLnRvLnN0cmluZ3MscD1sLnJvdW5kLG49W10sbT12b2lkIDAsbT1sLnRvLm51bWJlcnMubGVuZ3RoLHQ9MDt0PG07dCsrKXt2YXIgeD12b2lkIDAseD1sLnRvLm51bWJlcnNbdF0scT1sLmZyb20ubnVtYmVyc1t0XSx4PWwuaXNQYXRoP1kobC52YWx1ZSx3KngpOnErdyooeC1xKTtwJiYobC5pc0NvbG9yJiYyPHR8fCh4PU1hdGgucm91bmQoeCpwKS9wKSk7bi5wdXNoKHgpfWlmKGw9aC5sZW5ndGgpZm9yKG09aFswXSx3PTA7dzxsO3crKylwPWhbdysxXSx0PW5bd10saXNOYU4odCl8fChtPXA/bSsodCtwKTptKyh0K1wiIFwiKSk7XG5lbHNlIG09blswXTtoYVtlLnR5cGVdKGsudGFyZ2V0LGUucHJvcGVydHksbSxjLGsuaWQpO2UuY3VycmVudFZhbHVlPW07YisrfWlmKGI9T2JqZWN0LmtleXMoYykubGVuZ3RoKWZvcihkPTA7ZDxiO2QrKylIfHwoSD1FKGRvY3VtZW50LmJvZHksXCJ0cmFuc2Zvcm1cIik/XCJ0cmFuc2Zvcm1cIjpcIi13ZWJraXQtdHJhbnNmb3JtXCIpLGcuYW5pbWF0YWJsZXNbZF0udGFyZ2V0LnN0eWxlW0hdPWNbZF0uam9pbihcIiBcIik7Zy5jdXJyZW50VGltZT1hO2cucHJvZ3Jlc3M9YS9nLmR1cmF0aW9uKjEwMH1mdW5jdGlvbiBmKGEpe2lmKGdbYV0pZ1thXShnKX1mdW5jdGlvbiBlKCl7Zy5yZW1haW5pbmcmJiEwIT09Zy5yZW1haW5pbmcmJmcucmVtYWluaW5nLS19ZnVuY3Rpb24gayhhKXt2YXIgaz1nLmR1cmF0aW9uLG49Zy5vZmZzZXQsdz1uK2cuZGVsYXkscj1nLmN1cnJlbnRUaW1lLHg9Zy5yZXZlcnNlZCxxPWQoYSk7aWYoZy5jaGlsZHJlbi5sZW5ndGgpe3ZhciB1PWcuY2hpbGRyZW4sdj11Lmxlbmd0aDtcbmlmKHE+PWcuY3VycmVudFRpbWUpZm9yKHZhciBHPTA7Rzx2O0crKyl1W0ddLnNlZWsocSk7ZWxzZSBmb3IoO3YtLTspdVt2XS5zZWVrKHEpfWlmKHE+PXd8fCFrKWcuYmVnYW58fChnLmJlZ2FuPSEwLGYoXCJiZWdpblwiKSksZihcInJ1blwiKTtpZihxPm4mJnE8ayliKHEpO2Vsc2UgaWYocTw9biYmMCE9PXImJihiKDApLHgmJmUoKSkscT49ayYmciE9PWt8fCFrKWIoaykseHx8ZSgpO2YoXCJ1cGRhdGVcIik7YT49ayYmKGcucmVtYWluaW5nPyh0PWgsXCJhbHRlcm5hdGVcIj09PWcuZGlyZWN0aW9uJiYoZy5yZXZlcnNlZD0hZy5yZXZlcnNlZCkpOihnLnBhdXNlKCksZy5jb21wbGV0ZWR8fChnLmNvbXBsZXRlZD0hMCxmKFwiY29tcGxldGVcIiksXCJQcm9taXNlXCJpbiB3aW5kb3cmJihwKCksbT1jKCkpKSksbD0wKX1hPXZvaWQgMD09PWE/e306YTt2YXIgaCx0LGw9MCxwPW51bGwsbT1jKCksZz1mYShhKTtnLnJlc2V0PWZ1bmN0aW9uKCl7dmFyIGE9Zy5kaXJlY3Rpb24sYz1nLmxvb3A7Zy5jdXJyZW50VGltZT1cbjA7Zy5wcm9ncmVzcz0wO2cucGF1c2VkPSEwO2cuYmVnYW49ITE7Zy5jb21wbGV0ZWQ9ITE7Zy5yZXZlcnNlZD1cInJldmVyc2VcIj09PWE7Zy5yZW1haW5pbmc9XCJhbHRlcm5hdGVcIj09PWEmJjE9PT1jPzI6YztiKDApO2ZvcihhPWcuY2hpbGRyZW4ubGVuZ3RoO2EtLTspZy5jaGlsZHJlblthXS5yZXNldCgpfTtnLnRpY2s9ZnVuY3Rpb24oYSl7aD1hO3R8fCh0PWgpO2soKGwraC10KSpxLnNwZWVkKX07Zy5zZWVrPWZ1bmN0aW9uKGEpe2soZChhKSl9O2cucGF1c2U9ZnVuY3Rpb24oKXt2YXIgYT12LmluZGV4T2YoZyk7LTE8YSYmdi5zcGxpY2UoYSwxKTtnLnBhdXNlZD0hMH07Zy5wbGF5PWZ1bmN0aW9uKCl7Zy5wYXVzZWQmJihnLnBhdXNlZD0hMSx0PTAsbD1kKGcuY3VycmVudFRpbWUpLHYucHVzaChnKSxCfHxpYSgpKX07Zy5yZXZlcnNlPWZ1bmN0aW9uKCl7Zy5yZXZlcnNlZD0hZy5yZXZlcnNlZDt0PTA7bD1kKGcuY3VycmVudFRpbWUpfTtnLnJlc3RhcnQ9ZnVuY3Rpb24oKXtnLnBhdXNlKCk7XG5nLnJlc2V0KCk7Zy5wbGF5KCl9O2cuZmluaXNoZWQ9bTtnLnJlc2V0KCk7Zy5hdXRvcGxheSYmZy5wbGF5KCk7cmV0dXJuIGd9dmFyIGdhPXt1cGRhdGU6dm9pZCAwLGJlZ2luOnZvaWQgMCxydW46dm9pZCAwLGNvbXBsZXRlOnZvaWQgMCxsb29wOjEsZGlyZWN0aW9uOlwibm9ybWFsXCIsYXV0b3BsYXk6ITAsb2Zmc2V0OjB9LFM9e2R1cmF0aW9uOjFFMyxkZWxheTowLGVhc2luZzpcImVhc2VPdXRFbGFzdGljXCIsZWxhc3RpY2l0eTo1MDAscm91bmQ6MH0sVz1cInRyYW5zbGF0ZVggdHJhbnNsYXRlWSB0cmFuc2xhdGVaIHJvdGF0ZSByb3RhdGVYIHJvdGF0ZVkgcm90YXRlWiBzY2FsZSBzY2FsZVggc2NhbGVZIHNjYWxlWiBza2V3WCBza2V3WSBwZXJzcGVjdGl2ZVwiLnNwbGl0KFwiIFwiKSxILGg9e2FycjpmdW5jdGlvbihhKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKX0sb2JqOmZ1bmN0aW9uKGEpe3JldHVybi0xPE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKFwiT2JqZWN0XCIpfSxcbnB0aDpmdW5jdGlvbihhKXtyZXR1cm4gaC5vYmooYSkmJmEuaGFzT3duUHJvcGVydHkoXCJ0b3RhbExlbmd0aFwiKX0sc3ZnOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudH0sZG9tOmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlfHxoLnN2ZyhhKX0sc3RyOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYX0sZm5jOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfSx1bmQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfSxoZXg6ZnVuY3Rpb24oYSl7cmV0dXJuLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSl9LHJnYjpmdW5jdGlvbihhKXtyZXR1cm4vXnJnYi8udGVzdChhKX0saHNsOmZ1bmN0aW9uKGEpe3JldHVybi9eaHNsLy50ZXN0KGEpfSxjb2w6ZnVuY3Rpb24oYSl7cmV0dXJuIGguaGV4KGEpfHxoLnJnYihhKXx8aC5oc2woYSl9fSxBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLFxuZCxiKXtyZXR1cm4oKCgxLTMqYiszKmQpKmErKDMqYi02KmQpKSphKzMqZCkqYX1yZXR1cm4gZnVuY3Rpb24oYyxkLGIsZil7aWYoMDw9YyYmMT49YyYmMDw9YiYmMT49Yil7dmFyIGU9bmV3IEZsb2F0MzJBcnJheSgxMSk7aWYoYyE9PWR8fGIhPT1mKWZvcih2YXIgaz0wOzExPms7KytrKWVba109YSguMSprLGMsYik7cmV0dXJuIGZ1bmN0aW9uKGspe2lmKGM9PT1kJiZiPT09ZilyZXR1cm4gaztpZigwPT09aylyZXR1cm4gMDtpZigxPT09aylyZXR1cm4gMTtmb3IodmFyIGg9MCxsPTE7MTAhPT1sJiZlW2xdPD1rOysrbCloKz0uMTstLWw7dmFyIGw9aCsoay1lW2xdKS8oZVtsKzFdLWVbbF0pKi4xLG49MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoLjAwMTw9bil7Zm9yKGg9MDs0Pmg7KytoKXtuPTMqKDEtMypiKzMqYykqbCpsKzIqKDMqYi02KmMpKmwrMypjO2lmKDA9PT1uKWJyZWFrO3ZhciBtPWEobCxjLGIpLWssbD1sLW0vbn1rPWx9ZWxzZSBpZigwPT09XG5uKWs9bDtlbHNle3ZhciBsPWgsaD1oKy4xLGc9MDtkbyBtPWwrKGgtbCkvMixuPWEobSxjLGIpLWssMDxuP2g9bTpsPW07d2hpbGUoMWUtNzxNYXRoLmFicyhuKSYmMTA+KytnKTtrPW19cmV0dXJuIGEoayxkLGYpfX19fSgpLFE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYil7cmV0dXJuIDA9PT1hfHwxPT09YT9hOi1NYXRoLnBvdygyLDEwKihhLTEpKSpNYXRoLnNpbigyKihhLTEtYi8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMSkpKk1hdGguUEkvYil9dmFyIGM9XCJRdWFkIEN1YmljIFF1YXJ0IFF1aW50IFNpbmUgRXhwbyBDaXJjIEJhY2sgRWxhc3RpY1wiLnNwbGl0KFwiIFwiKSxkPXtJbjpbWy41NSwuMDg1LC42OCwuNTNdLFsuNTUsLjA1NSwuNjc1LC4xOV0sWy44OTUsLjAzLC42ODUsLjIyXSxbLjc1NSwuMDUsLjg1NSwuMDZdLFsuNDcsMCwuNzQ1LC43MTVdLFsuOTUsLjA1LC43OTUsLjAzNV0sWy42LC4wNCwuOTgsLjMzNV0sWy42LC0uMjgsLjczNSwuMDQ1XSxhXSxPdXQ6W1suMjUsXG4uNDYsLjQ1LC45NF0sWy4yMTUsLjYxLC4zNTUsMV0sWy4xNjUsLjg0LC40NCwxXSxbLjIzLDEsLjMyLDFdLFsuMzksLjU3NSwuNTY1LDFdLFsuMTksMSwuMjIsMV0sWy4wNzUsLjgyLC4xNjUsMV0sWy4xNzUsLjg4NSwuMzIsMS4yNzVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIDEtYSgxLWIsYyl9XSxJbk91dDpbWy40NTUsLjAzLC41MTUsLjk1NV0sWy42NDUsLjA0NSwuMzU1LDFdLFsuNzcsMCwuMTc1LDFdLFsuODYsMCwuMDcsMV0sWy40NDUsLjA1LC41NSwuOTVdLFsxLDAsMCwxXSxbLjc4NSwuMTM1LC4xNSwuODZdLFsuNjgsLS41NSwuMjY1LDEuNTVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuLjU+Yj9hKDIqYixjKS8yOjEtYSgtMipiKzIsYykvMn1dfSxiPXtsaW5lYXI6QSguMjUsLjI1LC43NSwuNzUpfSxmPXt9LGU7Zm9yKGUgaW4gZClmLnR5cGU9ZSxkW2YudHlwZV0uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oZCxmKXtiW1wiZWFzZVwiK2EudHlwZStjW2ZdXT1oLmZuYyhkKT9cbmQ6QS5hcHBseSgkanNjb21wJHRoaXMsZCl9fShmKSksZj17dHlwZTpmLnR5cGV9O3JldHVybiBifSgpLGhhPXtjc3M6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhLnN0eWxlW2NdPWR9LGF0dHJpYnV0ZTpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc2V0QXR0cmlidXRlKGMsZCl9LG9iamVjdDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGFbY109ZH0sdHJhbnNmb3JtOmZ1bmN0aW9uKGEsYyxkLGIsZil7YltmXXx8KGJbZl09W10pO2JbZl0ucHVzaChjK1wiKFwiK2QrXCIpXCIpfX0sdj1bXSxCPTAsaWE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Qj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyl9ZnVuY3Rpb24gYyhjKXt2YXIgYj12Lmxlbmd0aDtpZihiKXtmb3IodmFyIGQ9MDtkPGI7KXZbZF0mJnZbZF0udGljayhjKSxkKys7YSgpfWVsc2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUoQiksQj0wfXJldHVybiBhfSgpO3EudmVyc2lvbj1cIjIuMi4wXCI7cS5zcGVlZD0xO3EucnVubmluZz12O3EucmVtb3ZlPVxuZnVuY3Rpb24oYSl7YT1QKGEpO2Zvcih2YXIgYz12Lmxlbmd0aDtjLS07KWZvcih2YXIgZD12W2NdLGI9ZC5hbmltYXRpb25zLGY9Yi5sZW5ndGg7Zi0tOyl1KGEsYltmXS5hbmltYXRhYmxlLnRhcmdldCkmJihiLnNwbGljZShmLDEpLGIubGVuZ3RofHxkLnBhdXNlKCkpfTtxLmdldFZhbHVlPUs7cS5wYXRoPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9aC5zdHIoYSk/ZShhKVswXTphLGI9Y3x8MTAwO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm57ZWw6ZCxwcm9wZXJ0eTphLHRvdGFsTGVuZ3RoOk4oZCkqKGIvMTAwKX19fTtxLnNldERhc2hvZmZzZXQ9ZnVuY3Rpb24oYSl7dmFyIGM9TihhKTthLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIixjKTtyZXR1cm4gY307cS5iZXppZXI9QTtxLmVhc2luZ3M9UTtxLnRpbWVsaW5lPWZ1bmN0aW9uKGEpe3ZhciBjPXEoYSk7Yy5wYXVzZSgpO2MuZHVyYXRpb249MDtjLmFkZD1mdW5jdGlvbihkKXtjLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYSl7YS5iZWdhbj1cbiEwO2EuY29tcGxldGVkPSEwfSk7bShkKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPXooYixEKFMsYXx8e30pKTtkLnRhcmdldHM9ZC50YXJnZXRzfHxhLnRhcmdldHM7Yj1jLmR1cmF0aW9uO3ZhciBlPWQub2Zmc2V0O2QuYXV0b3BsYXk9ITE7ZC5kaXJlY3Rpb249Yy5kaXJlY3Rpb247ZC5vZmZzZXQ9aC51bmQoZSk/YjpMKGUsYik7Yy5iZWdhbj0hMDtjLmNvbXBsZXRlZD0hMDtjLnNlZWsoZC5vZmZzZXQpO2Q9cShkKTtkLmJlZ2FuPSEwO2QuY29tcGxldGVkPSEwO2QuZHVyYXRpb24+YiYmKGMuZHVyYXRpb249ZC5kdXJhdGlvbik7Yy5jaGlsZHJlbi5wdXNoKGQpfSk7Yy5zZWVrKDApO2MucmVzZXQoKTtjLmF1dG9wbGF5JiZjLnJlc3RhcnQoKTtyZXR1cm4gY307cmV0dXJuIGN9O3EucmFuZG9tPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooYy1hKzEpKSthfTtyZXR1cm4gcX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FuaW1lanMvYW5pbWUubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=