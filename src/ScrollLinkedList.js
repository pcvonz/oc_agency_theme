// Class that takes in a list of of HTML nodes and
// and 'shifts' between them. Pretty generic, but
// can be used to implement simple 'scroll-jack'-like behavior.


import ScrollObject from './ScrollObject';
export default class ScrollLinkedList {
  constructor (content) {
    this.sc = new ScrollObject(content[0]);
    this.length = length.length;
    for(let i = 1; i < content.length; i++) {
      if (i > 0 && i < content.length-1) {
        let temp = new ScrollObject(content[i]);
        temp.next = new ScrollObject(content[i+1]);
        temp.prev = this.getObj;
        this.getObj.next = temp;
        this.setObj = this.getObj.next;
      }
       else {
        let temp = new ScrollObject(content[i]);
        temp.prev = this.getObj;
        this.getObj.next = temp;
      }
    }
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
  scrollNext() {
    if(this.getObj.next != null) {
      this.setObj = this.getObj.next;
      if(CSS.supports('scroll-behavior', 'smooth')) {
          window.location.hash = this.getObj.curr.id;
      } else{
        this.getObj.curr.scrollIntoView({
            behavior: 'smooth'
         });
      }
    }
  }
  scrollPrev () {
    if(this.getObj.prev != null) {
      this.setObj = this.getObj.prev;
      // set hash if scroll behavior smooth is supported
      if(CSS.supports('scroll-behavior', 'smooth')) {
        window.location.hash = this.getObj.curr.id;
      // Use scrollIntoView otherwise
      } else {
        this.getObj.curr.scrollIntoView({
            behavior: 'smooth'
         });
      }
    }
  }
  print() {
    let temp = this.sc.curr;
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

