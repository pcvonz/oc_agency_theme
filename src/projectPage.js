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

let lightBoxContent = document.querySelectorAll('.lightbox > *')

lightBoxContent.forEach((el) => {
  el.addEventListener('click', () => {
    enlargeSelf(el)
  })
})

function enlargeSelf (el) {
  console.log(el.style.display !== 'block')
  if (el.style.display !== 'block') {
    lightBoxContent.forEach((lb) => {
      lb.style = 'display: none'
    })
    el.style = `
    width: 80%;
    display: block`
    el.querySelector('svg').innerHTML = '<use xlink:href="#icon-circle-x"></use>'
    el.parentNode.style = `
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: #040b25cc;
    `
  } else {
    lightBoxContent.forEach((lb) => {
      lb.style.display = ''
    })
    el.style = ``
    el.querySelector('svg').innerHTML = '<use xlink:href="#icon-magnifying-glass"></use>'
    el.parentNode.style = ``
  }
}
