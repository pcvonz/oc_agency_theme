// Code for the landing page
import ScrollLinkedList from './ScrollLinkedList.js';
import './MenuAnim.js';
  

// Set overflow to hidden. On the off change
// javascript isn't available, disable slideshow
document.querySelector('.l-slider').style = "overflow: hidden";

// Only called if
// A: Sidebar menu is used
// B: CSS Property 'scroll-behavior: smooth' is supported
function changeHash() {
  if (window.location.hash) {
    document.querySelector('#current').id = ''
    document.querySelector('a[href="'+window.location.hash+'"]').id = 'current';
    // Set the menu fill depending on background
    // Assumes that anything not home will have a dark background
    if (window.location.hash != '#home') {
      document.querySelector('label > svg').style.fill = 'white';
    } else {
      document.querySelector('label > svg').style.fill = '';
    }
  }
}
changeHash();

window.addEventListener('hashchange', changeHash);

// Set up smooth scroll between projects
let map = ['#home'];
let content = document.querySelectorAll('.content-wrapper > div');
let scrollList = new ScrollLinkedList(content, 800);


// Set scroll area to be l-slider
let MOUSE_OVER = true;
let scrollAccum = 0;

let lSlider = document.querySelector('.l-slider');
lSlider.addEventListener('mouseenter', (e) => {
  MOUSE_OVER = true;
});

lSlider.addEventListener('mouseexit', (e) => {
  MOUSE_OVER = false;
});

lSlider.addEventListener('wheel', function (e) {
  if (MOUSE_OVER) {
    changeSlide(e.deltaY);
  }
});

// Switch between sections based on scroll amount
function changeSlide(scroll) {
  scrollAccum += scroll;
  if (scrollAccum > 3) {
    scrollList.scrollNext();
    scrollAccum = 0;
  }
  else if (scrollAccum < -3) {
    scrollList.scrollPrev();
    scrollAccum = 0;
  }
  if(scrollList.getObj.curr.getBoundingClientRect().top != 60 ) {
  }
}
