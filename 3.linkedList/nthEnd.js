class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findNthFromEnd(head, n) {
    if (!head || n <= 0) {
        return null; // Return null for an invalid input or when n is non-positive.
    }

    let firstPtr = head;
    let secondPtr = head;

    // Advance the first pointer by n nodes from the beginning.
    for (let i = 0; i < n; i++) {
        if (firstPtr) {
            firstPtr = firstPtr.next;
        } else {
            return null; // If n is greater than the length of the list, return null.
        }
    }

    // Move both pointers together until the first pointer reaches the end.
    // ai kane firstPtr secondPtr teke n tomo samne ace uporer for loop er jonnoo.
    while (firstPtr) {
        firstPtr = firstPtr.next;
        secondPtr = secondPtr.next;
    }

    return secondPtr; // Return the Nth node from the end.
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

const n = 2; // Find the 2nd node from the end.
const nthNode = findNthFromEnd(node1, n);
console.log(nthNode.val); // Output: 4 (the value of the 2nd node from the end)
