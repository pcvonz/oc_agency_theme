// Main javascript file, should be imported on every page
//
//
// Svg 
import arrowRight from './svg/arrow_right.svg';
import arrowLeft from './svg/arrow_down.svg';
import envelopeClosed from './svg/envelope-closed.svg';
import octocat from './svg/octocat.svg';
import chevronLeft from './svg/chevron-left.svg';

import doc from './svg/document.svg';
import menu from './svg/menu.svg';
import './style.scss';
import polyfill from 'smoothscroll-polyfill';

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

