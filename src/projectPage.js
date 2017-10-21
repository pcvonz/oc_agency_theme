// import './blockNavAnim.js';

let sbari = document.querySelector('#scrollbar .inner-scroll')
let container = document.querySelector('.scroll')
let elements = document.querySelectorAll('.scroll > div')

getScrollTopMax = function (el) {
  var ref
  return (ref = el.scrollTopMax) != null
    ? ref
    : (el.scrollHeight - el.clientHeight)
}

function setInnerScrollHeight () {
  scrollp = (container.scrollTop / getScrollTopMax(container)) * 100
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

