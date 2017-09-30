let barTime = {
  duration: 100,
  fill: 'forwards',
  iterations: 1
} 
let topBar = [
  {
    transform: 'translatey(0) translatex(0) rotate(0)'
  },
  {
    transform: 'translatey(0px) translatex(1px) rotate(45deg)'
  }
]

let midBar = [
  {
    transform: 'translatey(0) translatex(0) rotate(0)'
  },
  {
    transform: 'translatey(3.4px) translatex(-1.7px) rotate(-45deg)'
  }
]
let botBar = [
  {
    transform: 'translatey(0)'
  },
  {
    transform: 'translatey(2px)'
  }
]

let top = document.querySelector('svg #path1989');
let mid = document.querySelector('svg #path1987');
let bot = document.querySelector('svg #path1975');
let topAnim = top.animate(
  topBar,
  barTime
)
let midAnim = mid.animate(
    midBar,
    barTime
  )
let botAnim = bot.animate(
    botBar,
    barTime
  )
topAnim.pause();
midAnim.pause();
botAnim.pause();
let menuClosed = true;
document.querySelector('.menuanim svg').addEventListener('click', (ev) => {
  if(menuClosed) {
    topAnim.playbackRate = 1;
    midAnim.playbackRate = 1;
    botAnim.playbackRate = 1;
  } else {
    topAnim.playbackRate = -1;
    midAnim.playbackRate = -1;
    botAnim.playbackRate = -1;
  }
    topAnim.play();
    midAnim.play();
    botAnim.play();
  menuClosed = !menuClosed;
  console.log(menuClosed);
});
