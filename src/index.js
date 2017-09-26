// Svg 
import arrowRight from './svg/arrow_right.svg';
import arrowLeft from './svg/arrow_down.svg';
import envelopeClosed from './svg/envelope-closed.svg';
import octocat from './svg/octocat.svg';
import doc from './svg/document.svg';
import menu from './svg/menu.svg';
import './style.scss';

// Add svg to dom 
// https://github.com/stowball/webpack-svg-icon-system
(function(path, baseUrl) {
  var id = 'svg';
  var xhr = new XMLHttpRequest;
  var body = document.body;
  var div = document.createElement('div');
  var base = baseUrl || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  var url = base + path;

  if (div.id = id, body.insertBefore(div, body.childNodes[0]), 'withCredentials' in xhr) {
    xhr.withCredentials;
    xhr.open('GET', url, true);
  }
  else {
    if (typeof XDomainRequest == 'undefined') {
      return void(body.className += ' no-svg');
    }

    xhr = new XDomainRequest;
    xhr.open('GET', url);
  }

  xhr.onload = function() {
    div.className = 'u-visually-hidden';
    div.innerHTML = xhr.responseText;
  };

  xhr.onerror = function() {
    body.className += ' no-svg';
  };

  setTimeout(function() {
    xhr.send();
  }, 0);
})('/themes/agency/assets/svg/sprite.svg');

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
  

