


const linearSearching = (arr, terget) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === terget) {
            return i;
        }
    }
    return -1
}

const arr = [4, 2, 8, 5, 1, 9, 3];
const terget = 9;

const result = linearSearching(arr, terget)

if (result !== -1) {
    console.log(`Found ${terget} at index ${result}`);
} else {
    console.log(`${terget} not found in the array`);
}