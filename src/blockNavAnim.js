let blockNavGradientAnimTime = {
  duration: 500,
  fill: 'forwards',
  iterations: 1
} 
let coolblack = '#040b25';

let blockNavGradientAnim = [
  {
    background: `linear-gradient(90deg, ${coolblack}, 0%, white, 0% , white)`
  },
  {
    background: `linear-gradient(90deg, ${coolblack}, 100%, white, 100% , white)`
  }
]

let blockNavElements= document.querySelectorAll('.block-nav li');

let menuClosed = true;
animList = [];
console.log(blockNavElements);
blockNavElements.forEach( (el) => {
  el.addEventListener('mouseenter', (ev) => {
    ev.target.animate(
      blockNavGradientAnim,
      blockNavGradientAnimTime
    )
  });
});
