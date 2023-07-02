

const array = [2, 4, 5, 6, 7, 8]

const maxNumber = () => {

    let max = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }

    }
    return max
}
console.log(maxNumber(array))