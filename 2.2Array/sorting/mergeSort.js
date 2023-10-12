




const devideSort = (array) => {

    if (array.length <= 1) {
        return array
    }

    const middleIndex = Math.floor(array.length / 2)

    const lefthalf = array.slice(0, middleIndex)
    const righthalf = array.slice(middleIndex)


    const storedleft = devideSort(lefthalf)

    const storedright = devideSort(righthalf)

    console.log('call')
    return merge(storedleft, storedright)
}


const merge = (left, right) => {

    console.log('left', "=", left, 'right', "=", right)

    let result = []
    console.log('result', result)
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result
}
const unsortedArr = [7, 3, 9, 2, 6, 8, 5, 1, 4];

const sortedArr = devideSort(unsortedArr);
console.log(sortedArr)


