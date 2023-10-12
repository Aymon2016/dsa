class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    traverseForward() {
        let current = this.head;

        while (current != null) {
            console.log(current.data)
            current = current.next
        }
    }

    traverseBackward() {
        let current = this.tail;

        while (current != null) {
            current = current.prev
        }
    }

    insetAtBegining(data) {

        const newNode = new Node(data)

        if (!this.head) {

            this.head = newNode
            this.tail = newNode
        } else {

            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
    }
    insertAtMiddle(data, targetValue) {

        const newNode = new Node(data)
        let current = this.head

        while (current != null) {

            if (current.data === targetValue) {

                newNode.next = current.next
                newNode.prev = current
                current.next = newNode

                if (newNode.next !== null) {
                    newNode.next.prev = newNode;
                }
                if (current === this.tail) {
                    this.tail = newNode
                }
                this.length++
                break;
            }
            current = current.next
        }
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deleteAtBeginning() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.next;
        this.head.prev = null;
    }

    deleteAfterNode(targetNodeData) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data === targetNodeData) {
                if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    this.tail.next = null;
                } else {

                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
                return;
            }
            currentNode = currentNode.next;
        }
    }

    deleteAtEnd() {
        if (!this.tail) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    updateNodeValue(targetValue, newValue) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data === targetValue) {

                currentNode.data = newValue;
                return true;
            }
            currentNode = currentNode.next;
        }


        return false;
    }

    reverse() {
        let currentNode = this.head;
        let temp = null;

        [this.head, this.tail] = [this.tail, this.head];

        while (currentNode !== null) {
            temp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = temp;
            currentNode = currentNode.prev;
        }

    }
}

const mylist = new DoublyLinkedList()

mylist.insetAtBegining('A')
mylist.insertAtMiddle('B', 'A')
mylist.insertAtEnd('C')
mylist.reverse()
console.log(mylist)
mylist.traverseForward()
mylist.traverseBackward()


