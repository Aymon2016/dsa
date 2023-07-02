
// const arr = [2, 5, 3, 4, 3, 5, 8]


// const peperArangefun = (arr) => {

//     let result = []

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] == arr[j]) {
//                 result.push(i)
//             }
//         }
//     }
//     console.log(result)

// }
// console.log(peperArangefun(arr))

const arr = [2, 5, 3, 4,]


const peperArangefun = (arr) => {

    let result = []

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == 8) {
                result.push(i, j)
            }
        }
    }
    console.log(result)

}
console.log(peperArangefun(arr))