// Helper class for scrollLinkedList
export default class ScrollObject {
  constructor (curr) {
    this.c = curr
  }
  set next (n) {
    this.n = n
  }
  set prev (p) {
    this.p = p
  }
  set curr (c) {
    this.c = c
  }
  get curr () {
    return this.c
  }
  get next () {
    return this.n
  }
  get prev () {
    return this.p
  }
  toString () {
    return `${this.c.id}`
  }
}
