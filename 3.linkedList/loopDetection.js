
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function detectLoopStart(head) {
    if (!head || !head.next) {
        return null; // No loop if there are 0 or 1 nodes.
    }

    let slowPtr = head;
    let fastPtr = head;
    let hasLoop = false;

    // Step 1: Detect the presence of a loop
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;         // Move the slow pointer by one step.
        fastPtr = fastPtr.next.next;    // Move the fast pointer by two steps.

        if (slowPtr === fastPtr) {
            hasLoop = true; // Loop detected.
            break;
        }
    }

    if (!hasLoop) {
        return null; // No loop found.
    }

    // Step 2: Find the start of the loop
    fastPtr = head; // Reset the fast pointer to the head of the list

    while (slowPtr !== fastPtr) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }

    return slowPtr; // Return the node where the loop starts.
}


// Example usage:

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a loop from node4 back to node2.
console.log(node1)
const hasLoop = hasCycle(node1);
console.log(hasLoop); // Output: true
