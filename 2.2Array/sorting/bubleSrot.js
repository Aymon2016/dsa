
// const arr = [2, 6, 2, 25, 6, 7, 8, 5, 4, 2, 6, 6, 8, 23, 5, 68, 9, 45, 57, 8]


// const peperArangefun = (arr) => {


//     let count = 1
//     while (count < arr.length) {


//         for (let i = 0; i < arr.length - count; i++) {

//             if (arr[i] > arr[i + 1]) {

//                 let temp = arr[i + 1]
//                 arr[i + 1] = arr[i]
//                 arr[i] = temp
//             }
//         }

//         count++
//     }
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])

//     }



// }
// console.log(peperArangefun(arr))

const arr = [2, 6, 12, 3, 4, 5, 7, 2, 22, 4, 5, 55, 67, 22, 11, 2, 8]

const bubleSort = (arr) => {


    let count = 1;

    while (count < arr.length) {

        for (let i = 0; i < arr.length - count; i++) {

            if (arr[i] > arr[i + 1]) {

                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        count++;

    }
    return arr
}
console.log(bubleSort(arr))