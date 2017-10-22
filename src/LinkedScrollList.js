// Class that takes in a list of of HTML nodes and
// and 'shifts' between them. Pretty generic, but
// can be used to implement simple 'scroll-jack'-like behavior.

import ScrollObject from './ScrollObject'

export default class LinkedScrollList {
  constructor (content, breakpoint) {
    this.content = content;
    this.currentNode = new ScrollObject(content[0])
    this.breakpoint = breakpoint
    for (let i = 1; i < content.length; i++) {
      if (i > 0 && i < content.length - 1) {
        let temp = new ScrollObject(content[i])
        temp.next = new ScrollObject(content[i + 1])
        temp.prev = this.currentNode
        this.currentNode.next = temp
        this.currentNode = this.currentNode.next
      } else {
        let temp = new ScrollObject(content[i])
        temp.prev = this.currentNode
        this.currentNode.next = temp
      }
      if (this.currentNode.curr.id === undefined) {
        this.currentNode.curr.id = `node${i}`;
      }
    }
    this.setToFirstNode()
    this.setCurrentNode(window.location.hash);
  }
  setToFirstNode () {
    while (this.currentNode.prev != null) {
      this.currentNode = this.currentNode.prev;
    }
  }
  get length () {
    return this.content.length
  }
  
  getBreakpoint () {
    return this.breakpoint
  }
  setBreakpoint (breakpoint) {
    this.breakpoint = breakpoint
  }
  // Sets current scroll to defined hash
  setCurrentNode (hash, cb) {
    let temp = this.currentNode;
    while ( temp.prev != null ) {
      temp = temp.prev
    }
    for (let i = 0; i < this.length; i++) {
      if (`#${temp.curr.id}` === hash) {
        this.currentNode = temp;
        if (cb) { cb() }
        return 'Found node!'
      }
      temp = temp.next;
    }
    if (cb) { cb() }
    return 'Node not found';
  }
  nextNode () {
    if (this.currentNode.next != null && window.innerWidth > this.getBreakpoint()) {
      this.currentNode = this.currentNode.next
        window.location.replace(window.location.pathname + '#' + this.currentNode.curr.id+'_')
      }
  }
  prevNode () {
    if (this.currentNode.prev != null && window.innerWidth > this.getBreakpoint()) {
      this.currentNode = this.currentNode.prev
      window.location.replace(window.location.pathname + '#' + this.currentNode.curr.id+'_')
    }
  }
  toString () {
    let temp = this.currentNode
    console.log('object:')
    console.log(temp + '\n')
    while (temp.prev != null) {
      temp = temp.prev
    }
    while (temp.next != null) {
      temp = temp.next
      console.log('object:')
      console.log(temp + '\n')
    } }
}
