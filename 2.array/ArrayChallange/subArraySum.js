

const array = [1, 2, 3, 4]

const maxNumber = () => {

    let max = 0;

    for (let i = 0; i < array.length; i++) {
        max = 0
        for (let j = i; j < array.length; j++) {

            max += array[j]

        }
        console.log(max)
    }

}
console.log(maxNumber(array))