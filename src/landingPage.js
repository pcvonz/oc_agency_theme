// Code for the landing page
import LinkedScrollList from 'linked-scroll-jack'
import './MenuAnim.js'
import Cookies from './cookies.js'

let docCookies = new Cookies()

let scrollList
let content = document.querySelectorAll('.content-wrapper > div')

scrollList = new LinkedScrollList(content, 800)

let loadingFinished = [
  {
    opacity: '1',
    paddingTop: '0'

  },
  {
    opacity: '0',
    paddingTop: '200px',
    display: 'none'
  }
]

let stroke = [
  {
    strokeDashoffset: '1870'
  },
  {
    strokeDashoffset: '0'
  }
]

let strokeTime = {
  duration: 2000,
  fill: 'forwards',
  iterations: 1
}

let loadingFinishedTime = {
  duration: 500,
  fill: 'forwards',
  iterations: 1,
  easing: 'ease-in-out'
}
let loading = document.querySelector('.load-container')
if (window.location.hash === '') {
  loading.style = 'display: flex;'
}

window.onload = function () {
  scrollList.setCurrentNode(window.location.hash)
  let svg = document.querySelector('#loader svg')
  if (window.location.hash === '') {
    svg.animate(
      stroke,
      strokeTime
    ).onfinish = () => {
      setTimeout(() => {
        loading.animate(
          loadingFinished,
          loadingFinishedTime
        ).onfinish = () => {
          loading.style = 'display: none'
        }
      }, 500)
    }
  }
  docCookies.setItem('splash_vonzimmerman', 'accessed', 150)
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
