import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    this.length++;
    
    let currentNode = new Node(data);
    
    if (this.head !== null) {
      currentNode.next = this.head;
    }
    
    this.head = currentNode;
  }

  shift() {
    let firstNode = this.head;
    if (this.head !== null) {
      this.length--;
      this.head = this.head.next;
    }

    return firstNode;
  }

  push(data) {
    this.length++;
    let newNode = new Node(data);
    
    if (this.head === null) {
      return this.head = newNode;
    } 

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    return current.next = newNode;
  }

  pop() {
    if (this.head === null) {
      return this.head
    }

    if (this.head.next === null) {
      let popped = this.head;
      this.length--;
      this.head = null;
      return popped;
    }

    let secondLast;
    let last = this.head;
    while (last.next !== null) {
      secondLast = last;
      last = last.next;
    }
    this.length--;
    secondLast.next = last.next;
    return last;
  }

}
