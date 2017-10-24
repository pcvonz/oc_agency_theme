// import './blockNavAnim.js';
import './MenuAnim.js'

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
