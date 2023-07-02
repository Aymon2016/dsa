const arr = [2, 5, 3, 4,]


const peperArangefun = (arr) => {

    let result = 0
    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j < arr.length; j++) {

            let sum = 0
            for (let k = i; k <= j; k++) {
                sum += arr[k]
                if (sum > result) {
                    result = sum
                }
            }
            console.log(sum)
            console.log('/')
        }
    }
    return result

}
console.log(peperArangefun(arr))