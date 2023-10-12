


// let newArryay = Array.from([2])

// console.log(newArryay)

// let anotherArray = Array.of(10, 20, 30, 40);

// console.log(anotherArray)

// let filledArray = new Array(5).fill(2)

// console.log(filledArray)
// let myArray = ["a", "b", "c", "d", "e"];
// myArray = myArray.slice(3, 5);
// console.log(myArray)

// const myArray = ["a", "b", "c", "d", "e"];
// myArray.at(-1)
// console.log(myArray.at(-1))

// const myArray = ["1", "2", "3", "4", "5"];


// console.log(myArray.splice(1, 3, "a", "b", "c", 'de', 'e'))

// console.log(myArray)

// let myArray = [1, 2, [3, 4]];
// myArray = myArray.flat();
// console.log(myArray)// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened

// const a = [10, 20, 30];
// const total = a.reduce((accumulator, currentValue) =>
//     accumulator + currentValue
// );
// console.log(total);


// let sortedNumbers = [10, 20, 30, 40, 50];

// const linearSearch = (sortedNumbers, target) => {

//     for (let i = 0; i <= sortedNumbers.length; i++) {
//         if (sortedNumbers[i] === target) {
//             return true;
//         }
//     }
//     return false;

// }

// const binarySearch = (sortedNumbers, target) => {

//     const left = 0;
//     const right = sortedNumbers.length - 1;

//     while (left <= right) {

//         const mid = Math.floor((left + right) / 2)

//         if (sortedNumbers[mid] === target) {
//             return mid
//         } else if (sortedNumbers[mid] < target) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }

//     return false
// }

// let target = 30;
// // console.log(linearSearch(sortedNumbers, target));
// console.log(binarySearch(sortedNumbers, target));

// let numbers = [2, 3, 4];
// // numbers.unshift(1)
// // numbers.push(5)

// // numbers.shift()
// numbers.pop()

// console.log(numbers)

// let numbers = [1, 2, 3, 5];
// numbers.splice(1, 0, 3);
// console.log(numbers); 

// let colors = ["red", "green", "blue", "yellow", "orange"];
// let slicedColors = colors.slice(1, 4); // Start from index 1, end before index 4
// console.log(slicedColors); // Output: ["green", "blue", "yellow"]

// let numbers = [10, 5, 8, 20, 3];
// console.log(Math.max(numbers)) full alada kiso num cai not single akta array noi

// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))

// this is very hard 

// let maxValue = numbers.reduce((max, current) => 
//     (
//         current > max ? current : max
//     )
//         , numbers[0]);



// let max = numbers.reduce((acc, cur) => {

//     if (acc < cur) {
//         acc = cur
//     }

//     return acc
// }, numbers[0])

// let min = numbers.reduce((acc, cur) => {

//     if (acc > cur) {
//         acc = cur
//     }

//     return acc
// }, numbers[0])

// console.log("Maximum value:", max); // Output: 20
// console.log("Minimum value:", min); // Output: 3

// let numbers = [10, 5, 8, 20, 3];

// let result = numbers.reduce((acc, cur) => {

//     acc = acc + cur
//     return acc

// }, 0);

// let resultAv = result / numbers.length;

// console.log("Sum:", result); // Output: 46
// console.log("Average:", resultAv); // Output: 9.2

// function create2DArray(rows, cols, initialValue = 0) {
//     const matrix = new Array(rows);
//     for (let i = 0; i < rows; i++) {
//         matrix[i] = new Array(cols).fill(initialValue);
//     }
//     return matrix;
// }

// const rows = 3;
// const cols = 4;
// const initialValue = 0;
// const matrix = create2DArray(rows, cols, initialValue);
// console.log(matrix);

// const jaggedArray = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
// ]


// jaggedArray[1][0] = 42
// jaggedArray[1].push(6); // Adding an element to the end of the inner array at index 1
// jaggedArray[2].pop(); // Removing the last element from the inner array at index 2
// const newRow = [10, 11];
// jaggedArray.unshift(newRow)
// console.log(jaggedArray)

// function bubbleSort(array) {

//     let len = array.length - 1

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - i; j++) {

//             if (array[j] > array[j + 1]) {
//                 let num = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = num
//             }
//         }

//     }

//     return array;
// }

// // Example usage
// const numbers = [4, 2, 8, 100, 5, 1, 9, 3];
// const sortedNumbers = bubbleSort(numbers);

// console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 8, 9]


// function selectionSort(array) {
//     let length = array.length;

//     for (let i = 0; i < array.length; i++) {
//         let minIndex = i;
//         for (let j = i; j < array.length; j++) {

//             if (array[j] < array[minIndex]) {
//                 minIndex = j
//             }
//         }

//         if (minIndex !== i) {
//             let swap = array[i]
//             array[i] = array[minIndex]
//             array[minIndex] = swap

//         }

//     }

//     return array;
// }

// // Example usage
// const numbers = [4, 2, 8, 5, 1, 9, 3];
// const sortedNumbers = selectionSort(numbers);

// console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 8, 9]


// function insertionSort(array) {
//     const length = array.length;

//     for (let i = 1; i < length; i++) {

//         let cur = array[i]

//         let j = i - 1

//         while (j >= 0 && array[j] > cur) {

//             array[j + 1] = array[j]
//             j--

//         }
//         array[j + 1] = cur
//     }

//     return array;
// }

// // Example usage
// const numbers = [4, 2, 5, 1, 9, 3];
// const sortedNumbers = insertionSort(numbers);

// console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 8, 9]


// 0(n2)

// function findDuplicates(arr) {

//     const duplicates = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && !duplicates.includes(arr[j])) {
//                 duplicates.push(arr[j])
//             }
//         }

//     }

//     return duplicates;
// }
// o(n)
// function findDuplicates(arr) {
//     const duplicates = []
//     const seen = []

//     arr.forEach(num => {

//         if (seen.includes(num)) {
//             if (!duplicates.includes(num)) {

//                 duplicates.push(num)
//             }

//         } else {

//             seen.push(num)
//         }
//     });

//     return duplicates;
// }

// function findDuplicates(arr, start, end) {

//     const mising = []

//     for (let i = start; i <= end; i++) {

//         if (!arr.includes(i)) {
//             mising.push(i)
//         }

//     }

//     return mising
// }


// const arr = [1, 3, 5, 7, 9]
// const start = 1;
// const end = 10

// console.log(findDuplicates(arr, start, end))

// function findFrequencyUsingObject(arr) {
//     const frequencyMap = {};

//     for (const element of arr) {

//         if (frequencyMap[element]) {
//             frequencyMap[element]++;

//         } else {

//             frequencyMap[element] = 1;
//         }


//     }

//     return frequencyMap;
// }

// const array = [1, 2, 3, 2, 4, 1, 5, 3, 2];
// const frequencyObject = findFrequencyUsingObject(array);
// console.log(frequencyObject);


// function findSubarraysWithSum(arr, targetSum) {

//     let subarray = [

//     ]
//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i]
//         for (let j = i + 1; j < arr.length; j++) {
//             sum = sum + arr[j]
//             if (sum === targetSum) {
//                 let newarr = arr.slice(i, j + 1)
//                 subarray.push(newarr)

//             }
//         }

//     }

//     return subarray
// }

// // Example usage
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetSum = 15;
// console.log(findSubarraysWithSum(array, targetSum))
// function findSubarraysWithSum(arr, targetSum) {

//     let start = 0;
//     let end = 0;


//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {

//         if (sum === targetSum) {
//             let newarr = arr.slice(start, end)

//         } else if (sum < targetSum) {
//             end++
//             sum = sum + arr[i]
//         } else {
//             sum = sum - arr[start]
//             start++
//         }


//     }
// }

// // Example usage
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetSum = 15;
// findSubarraysWithSum(array, targetSum);

// function findSubarraysWithSum(arr, targetSum) {

//     let start = 0;
//     let end = 0;
//     let sum = 0

//     while (end < arr.length) {

//         sum += arr[end]

//         while (sum >= targetSum) {

//             if (sum === targetSum) {
//                 console.log("Subarray found:", arr.slice(start, end + 1));
//             }
//             sum -= arr[start]
//             start += 1
//         }
//         end += 1
//     }
// }

// // Example usage
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetSum = 15;
// findSubarraysWithSum(array, targetSum);

function findLargestContiguousSubarray(arr) {

    let start = 0
    let curLen = 1
    let maxlen = 0
    let maxStart = 0

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1] + 1) {

            curLen++
            if (curLen > maxlen) {

                maxlen = curLen;
                maxStart = start;

            }


        } else {
            start = i
            curLen = 1
        }
    }

    let sub = arr.slice(maxStart, maxStart + maxlen)
    return sub

}

// Example usage
const arr = [1, 2, 3, 5, 7, 8, 10];
const result = findLargestContiguousSubarray(arr);
console.log(result);  // Output: [5, 6, 7, 8]
