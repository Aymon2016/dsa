

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }


    isEmpty() {
        if (this.head === null) {
            return true;
        }
    }

    traverseForward() {

        if (!this.head) {
            console.log('empty list')
            return
        }

        let current = this.head;
        do {

            console.log(current.data)
        } while (current !== this.head)
    }

    insertAtBeginning(data) {

        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            this.tail.next = newNode
        }
    }

    insertAtMiddle(data, target) {

        const newNode = new Node(data)
        let current = this.head;

        while (current.data !== target) {
            current = current.next;

            if (current === this.head) {
                return;
            }
        }
        if (current === this.tail) {
            newNode.next = this.head
            current.next = newNode
            this.tail = newNode
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    insertAtEnd(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    deleteAtBegining() {
        if (!this.head) {
            return
        }

        this.head = this.head.next
        this.tail.next = this.head
    }

    deleteAtMiddle(target) {
        let current = this.head
        while (current.next.data === target) {
            current.next = current.next.next
        }
    }

    deleteAtEnd() {

        if (!this.head) {
            return
        }

        let current = this.head;
        let previous = null
        while (current.next !== this.head) {
            previous = current
            current = current.next
        }

        if (current === this.head) {
            this.head = null
            this.tail = null
        } else {
            previous.next = this.head
            this.tail = previous
        }

    }

    update(newValue, target) {

        let current = this.head
        do {
            if (current.data === target) {
                current.data = newValue;
                return;
            }

            current = current.next;
        } while (current !== this.head);
    }


    reverse() {

        if (!this.head) {
            return
        }

        let current = this.head
        let previous = null;
        let next = null


        do {

            next = current.next;
            current.next = previous
            previous = current
            current = next

        } while (current !== this.head)

        this.tail = this.head
        this.head = previous
        this.tail.next = previous
    }

}


const mylist = new CircularLinkedList()

console.log(mylist.isEmpty())
mylist.insertAtBeginning(2)
mylist.insertAtBeginning(1)
mylist.insertAtMiddle(3, 2)
mylist.insertAtEnd(4)
mylist.insertAtEnd(5)
// mylist.deleteAtBegining()
// mylist.deleteAtMiddle(3)
// mylist.deleteAtEnd()
// mylist.update(6, 3)
// mylist.traverseForward()
mylist.reverse()
console.log(mylist)

