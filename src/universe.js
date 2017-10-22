import anime from 'animejs'

let path = anime.path('#path1466')
let pathTwo = anime.path('#path2')

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

