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
  

// set up main page
document.querySelector('.l-slider').style = "overflow: hidden";

function changeHash() {
  if (window.location.hash) {
    document.querySelector('#current').id = ''
    document.querySelector('a[href="'+window.location.hash+'"]').id = 'current';
    if (window.location.hash != '#home') {
      document.querySelector('label > svg').style.fill = 'white';
    } else {
      document.querySelector('label > svg').style.fill = '';
    }
  }
}
changeHash();

window.addEventListener('hashchange', changeHash);

let map = ['#home'];

let content = document.querySelectorAll('.content-wrapper > div');
console.log(content);
class ScrollObject {
  constructor(curr) {
    this.c = curr;
  }
  set next (n) {
    this.n = n
  }
  set prev (p) {
    this.p = p;
  }
  set curr(c) {
    this.c = c;
  }
  get curr () {
    return this.c; 
  }
  get next () {
    return this.n; 
  }
  get prev () {
    return this.p;
  }
  toString () {
    return `${this.c.id}`
  }
}

class ScrollLinkedList {
  constructor (sc, length) {
    this.sc = sc;
    this.length = length;
  }
  get getObj () {
    return this.sc;
  }
  set setObj (c) {
    this.sc = c
  }
  getCurrentScroll () {
    while( this.sc.prev != null) {
      this.sc = this.sc.prev;
    }
    for( let i = 0; i < this.length; i++) {
      if ('#' + this.sc.curr.id === window.location.hash) {
        break;
      }
    }
    
  }
  print() {
    let temp = this.sc.prev;
    console.log('object:');
    console.log(temp + '\n');
    while( temp.prev != null) {
      temp = temp.prev;
    }
    while( temp.next != null ) {
      temp = temp.next;
      console.log('object:');
      console.log(temp + '\n');
    }
  }
}
let scObj = new ScrollObject(content[0]);
let scrollList = new ScrollLinkedList(scObj, content.length);
for(let i = 1; i < content.length; i++) {
  if (i > 0 && i < content.length-1) {
    let temp = new ScrollObject(content[i]);
    temp.next = new ScrollObject(content[i+1]);
    temp.prev = scrollList.getObj;
    scrollList.getObj.next = temp;
    scrollList.setObj = scrollList.getObj.next;
  }
   else {
    let temp = new ScrollObject(content[i]);
    console.log(temp.prev);
    temp.prev = scrollList.getObj;
    scrollList.getObj.next = temp;
  }
}

scrollList.print();
scrollList.getCurrentScroll();
console.log(scrollList.getObj.curr.id);

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

function changeSlide(scroll) {
  scrollAccum += scroll;
  if (scrollAccum > 3) {
    if(scrollList.getObj.next != null) {
      scrollList.setObj = scrollList.getObj.next;
    }
    window.location.hash = scrollList.getObj.curr.id;
    scrollAccum = 0;
  }
  else if (scrollAccum < -3) {
    if(scrollList.getObj.prev != null) {
      scrollList.setObj = scrollList.getObj.prev;
       window.location.hash = scrollList.getObj.curr.id;
    }
    scrollAccum = 0;
  }
  console.log(scrollList.getObj.curr.getBoundingClientRect().top);
  console.log(scrollList.getObj.curr)
  if(scrollList.getObj.curr.getBoundingClientRect().top != 60 ) {
  }
}

