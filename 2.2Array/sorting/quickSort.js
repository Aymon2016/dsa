

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];

    const right = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }

    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    const sortedArray = [...sortedLeft, pivot, ...sortedRight];
    return sortedArray;
}
const unsortedArray = [5, 2, 8, 3, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); 
