
2
23
234
2345
23456
3
34
345
3456



const array = [2, 3, 4, 5, 6]


const subArray = (array) => {

    let max = 0

    for (let i = 0; i < array.length; i++) {


        for (let j = i; j < array.length; j++) {

            let sum = 0

            for (let k = i; k <= j; k++) {

                sum = sum + array[k]

            }

            max = Math.max(max, sum)
        }

    }

    return max
}

const result = subArray(array)

console.log(result)