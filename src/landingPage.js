// Code for the landing page
import ScrollLinkedList from './ScrollLinkedList.js'
import './MenuAnim.js'

let scrollList
let content = document.querySelectorAll('.content-wrapper > div')

scrollList = new ScrollLinkedList(content, 800)

window.onload = function () {
  scrollList.getCurrentScroll()
}

// Set overflow to hidden. On the off change
// javascript isn't available, disable slideshow
document.querySelector('.l-slider').style = 'overflow: hidden'

// Only called if
// A: Sidebar menu is used
// B: CSS Property 'scroll-behavior: smooth' is supported
function changeHash (ev) {
  if (ev) {
    let reg = /#.*/
    scrollList.setCurrentScroll(ev.newURL.match(reg)[0])
  }
  if (window.location.hash) {
    document.querySelector('#current').id = ''
    document.querySelector('a[href="' + window.location.hash + '"]').id = 'current'

    // Set the menu fill depending on background
    // Assumes that anything not home will have a dark background
    if (window.location.hash !== '#home') {
      document.querySelector('label > svg').style.fill = 'white'
    } else {
      document.querySelector('label > svg').style.fill = ''
    }
  }
}
changeHash()
window.addEventListener('hashchange', changeHash)

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
  if (scrollAccum > 2) {
    scrollList.scrollNext()
    scrollAccum = 0
  } else if (scrollAccum < -2) {
    scrollList.scrollPrev()
    scrollAccum = 0
  }
}
