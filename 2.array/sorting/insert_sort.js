
// const paperList = [2, 6, 2, 25, 6, 7, 8, 5, 4, 2, 6, 6, 8, 23, 5, 68, 9, 45, 57, 8]


// const peperArangefun = (paperList) => {


//     for (let i = 1; i < paperList.length; i++) {

//         let curent = paperList[i]
//         let j = i - 1
//         while (paperList[j] > curent && j >= 0) {

//             paperList[j + 1] = paperList[j]

//             j--;
//         }
//         paperList[j + 1] = curent

//         console.log(paperList[i - 1])

//     }


// }
// console.log(peperArangefun(paperList))


//insert sort 
//1st ber 
// [5, 6, 2, 4, 6, 1, 3, 12, 55, 65];
// [5,6,2]
// [5,2,6]
// [2,5,6]
// [5, 6, 2, 4, 6, 1, 3, 12, 55, 65];
// [2,5,6]
// [2,5,6,4]
// [2,5,4,6]
// [2,4,5,6]


const numbers = [5, 3, 2, 4, 6, 1, 3, 12, 55, 65];
function insertionSort(arr) {
    // Iterate through each element in the array
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        let j = i - 1;


        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            arr[j] = current;
            j--;
        }

    }

    return arr;
}


const sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6]
