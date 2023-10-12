

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeSortedLists(list1, list2) {

    const mergedList = new ListNode()
    let current = mergedList

    while (list1 !== null && list2 !== null) {

        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }

        current = current.next
    }

    if (list1 !== null) {
        current.next = list1
    } else {
        current.next = list2
    }

    return mergedList.next
}

// Example usage:

const list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

const list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

const mergedList = mergeSortedLists(list1, list2);

console.log(mergedList)