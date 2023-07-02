
// tarnary search o binary serch er moto sodo tarnary serch e mid 2 ta dorte hobe je.


function ternarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const partitionSize = Math.floor((right - left) / 3)
        const mid1 = left + partitionSize
        const mid2 = right - partitionSize

        if (arr[mid1] === target) {
            return mid1;
        }
        if (arr[mid2] === target) {
            return mid2
        }

        if (arr[mid1] > target) {
            right = mid1 - 1
        } else if (arr[mid2] < target) {
            left = mid2 + 1
        } else {
            left = mid1 + 1;
            right = mid2 - 1
        }

    }

    return -1; // Target value not found
}


// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 11;

const index = ternarySearch(arr, target);

if (index !== -1) {
    console.log(`Target value found at index ${index}`);
} else {
    console.log("Target value not found");
}