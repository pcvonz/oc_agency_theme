// Code for the landing page
// import playSplash from './splashLoader.js'
import LinkedScrollList from './LinkedScrollList.js'
import './MenuAnim.js'
import './universe.js'

let windowHash = window.location.hash.replace('_', '')

let scrollList
let content = document.querySelectorAll('.content-wrapper > div')

scrollList = new LinkedScrollList(content, 800)

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

let lSlider = document.querySelector('.l-slider')
lSlider.addEventListener('scroll', function (e) {
  changeSlide(e)
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
