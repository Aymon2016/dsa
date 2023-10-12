
// this is a node

class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(data) {

        let newNode = new Node(data)
        let cur = this.head

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = cur;
            this.head = newNode;
        }
        this.length++;
    }

    insartAfter(targetData, newData) {

        let newNode = new Node(newData)
        let curNode = this.head;

        while (curNode !== null) {

            if (curNode.data === targetData) {

                newNode.next = curNode.next;
                curNode.next = newNode
                if (curNode === this.tail) {
                    this.tail = newNode
                }
                this.length++;
                break;
            }
            curNode = curNode.next
        }
    }
    append(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;

    }
    pop() {

        if (!this.head) {
            return null;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail == null;
            this.length = 0;
        }
        let cur = this.head;
        let lastnode;

        while (cur) {

            if (cur.next === this.tail) {
                lastnode = cur;
                break
            }
            cur = cur.next;
        }

        lastnode.next = null;
        this.tail = lastnode;
        this.length--
    }
    // if i want exactly target data deleted
    delete(targetData) {


        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        let curNode = this.head;

        while (curNode !== null) {

            if (curNode.next.data === targetData) {

                if (curNode.next === this.tail) {
                    curNode.next = null
                    this.tail = curNode
                    this.length--
                } else {
                    curNode.next = curNode.next.next;
                    this.length--
                }
                break;
            }
            curNode = curNode.next
        }
    }

    // target data next item deleted
    deleteAfter(targetData) {


        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        let curNode = this.head;

        while (curNode !== null) {

            if (curNode.data === targetData) {

                if (curNode.next === this.tail) {
                    curNode.next = null
                    this.tail = curNode
                    this.length--
                } else {
                    curNode.next = curNode.next.next;
                    this.length--
                }
                break;
            }
            curNode = curNode.next
        }
    }
    shift() {

        if (!this.head) {
            return null;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail == null;
            this.length = 0;
        }

        let cur = this.head;
        this.head = cur.next;
        this.length--
    }

    updateValue(oldValue, newValue) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data === oldValue) {
                currentNode.data = newValue; // Update the node's value
                break;
            }
            currentNode = currentNode.next;
        }
    }

    reverse() {


        let prev = null
        let curent = this.head;
        let next = null;

        while (curent) {

            next = curent.next;
            curent.next = prev;
            prev = curent;
            curent = next;

        }
        this.tail = this.head
        this.head = prev
    }
}

let list = new LinkedList()
// add end
list.append(3)
list.append(4)
// ADD MIDDLE
list.insartAfter(4, 5)
// delete end
list.pop()
// deltete middle
list.delete(4)
list.deleteAfter(4)
// delted begain
list.shift()
// add end
list.append(6)
// add begaining
list.unshift(2)
// update
list.updateValue(6, 7)
list.reverse()
console.log(list)