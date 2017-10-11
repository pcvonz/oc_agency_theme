// Code for the landing page
import playSplash from './splashLoader.js'
import LinkedScrollList from 'linked-scroll-jack'
import './MenuAnim.js'
import Cookies from './cookies.js'
import anime from 'animejs'

let docCookies = new Cookies()

let path = anime.path('#path1466')
let pathTwo = anime.path('#path2')
console.log(path())

let motionPath = anime({
  targets: '.follow',
  translateX: path('x'), // Follow the x values from the path `Object`
  translateY: path('y'), // Follow the y values from the path `Object`
  easing: 'linear',
  duration: 50000,
  loop: true
})
let motionPathTwo = anime({
  targets: '.follow2',
  translateX: pathTwo('x'), // Follow the x values from the path `Object`
  translateY: pathTwo('y'), // Follow the y values from the path `Object`
  easing: 'linear',
  duration: 80000,
  loop: true
})

let scrollList
let content = document.querySelectorAll('.content-wrapper > div')

scrollList = new LinkedScrollList(content, 800)


let minWidthContainer = document.querySelectorAll('.min-height')
window.onload = function () {
  // initiate solar system 
  document.querySelector('.follow').setAttribute('class', document.querySelector('.follow').getAttribute('class') + ' full-opacity')
  document.querySelector('.follow2').setAttribute('class', document.querySelector('.follow2').getAttribute('class') + ' full-opacity')

  playSplash()
  // Set scrolllist to current node
  scrollList.setCurrentNode(window.location.hash)
}

// Set overflow to hidden. On the off change
// javascript isn't available, disable slideshow
document.querySelector('.l-slider').style = 'overflow: hidden'

// Only called if
// A: Sidebar menu is used
// B: CSS Property 'scroll-behavior: smooth' is supported
function changeHash (ev) {
  if (window.location.hash && hashExists()) {
    scrollList.setCurrentNode(window.location.hash)
    scrollList.currentNode.curr.scrollIntoView({
      behavior: 'smooth'
    })
    document.querySelector('#current').id = ''
    document.querySelector('a[href="' + window.location.hash + '"]').id = 'current'
    // Set the menu fill depending on background
    // Assumes that anything not home will have a dark background
    if (window.location.hash !== '#home') {
      document.querySelector('label > svg').style.fill = 'white'
    } else {
      document.querySelector('label > svg').style.fill = ''
    }

    // Change width based on hash
    if (window.location.hash !== '#home') {
      minWidthContainer.forEach((el) => {
        el.style = 'max-width: 1200px'
      })
    } else {
      minWidthContainer.forEach((el) => {
        el.style = 'max-width: 800px'
      })
    }
  }
}

function hashExists () {
  if (document.querySelector('a[href="' + window.location.hash + '"]') === null) {
    return false
  } else {
    return true
  }
}
changeHash()
window.addEventListener('hashchange', changeHash)
console.log(scrollList)

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

lSlider.addEventListener('wheel', function (e) {
  if (MOUSE_OVER) {
    changeSlide(e.deltaY)
  }
})

// Switch between sections based on scroll amount
// Caution! Not all browsers track the same scroll distance
function changeSlide (scroll) {
  (scroll > 0) ? scrollAccum += 1 : scrollAccum -= 1
  console.log(scrollList.currentNode)
  if (scrollAccum > 2) {
    scrollList.nextNode()
    scrollAccum = 0
  } else if (scrollAccum < -2) {
    scrollList.prevNode()
    scrollAccum = 0
  }
}

document.addEventListener('keydown', (event) => {
  console.log(event)
  if (event.keyCode === 40) { scrollList.nextNode() }
  if (event.keyCode === 38) { scrollList.prevNode() }
  if (event.keyCode === 39) {
    scrollList.currentNode.curr.querySelector('a').click()
  }
})
