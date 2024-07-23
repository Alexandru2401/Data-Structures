class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    // Aceste liste au head, tail si length
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Acum vom adauga metode
  // push (adauga un element la finalul listei)
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // pop - sterge ultimul element din lista
  // Prima data traversam lista - putem utiliza si un for loop
  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    // trb sa am 2 var - una pt coada si una pt penultimul element al listei
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // shift - sterge primul element din lista
  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // unshift - adauga un element la inceputul listei
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get - obtin o valoare bazata pe un index O(N)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // set- schimba valoare unui nod
  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // insert - adauga un alt nod la o pozitie specifica  O(1)
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // remove - sterge un nod de la o pozitie specifica O(1)/O(N)
  remove(val, index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop(val);
    if (index === 0) return this.shift(val);

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  // reverse - inverseaza lista
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
