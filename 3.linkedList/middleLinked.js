class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findMiddle(head) {
    if (!head) {
        return null; // Return null for an empty list.
    }

    let slowPtr = head;
    let fastPtr = head;

    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;         // Move the slow pointer by one step.
        fastPtr = fastPtr.next.next;    // Move the fast pointer by two steps.
    }

    return slowPtr; // Return the middle node.
}

// Example usage:

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const middleNode = findMiddle(node1);
console.log(node1)
console.log(middleNode.val); // Output: 3 (the value of the middle node)