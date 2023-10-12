

const array = [2, 6, 2, 25, 6, 7, 8, 5, 4, 2, 6, 6, 8, 23, 5, 68, 9, 45, 57, 8]

//protome first index k coto dorbo
//then bitore arekta loop calbo i teke 1 beshi dore then ai ta colbe last porjonto/jodi coto er man teke coto pawa jai tale cotor man ta change kore dibo
// arr[i] = jai gai coto man ta and coto man er jai gai arr[i ]er value ta


const peperArangefun = (array) => {


    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }

        }

        if (array[i] !== array[minIndex]) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp
        }

    }
    return array

}
console.log(peperArangefun(array))