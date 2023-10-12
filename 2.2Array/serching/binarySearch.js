

// 1.array ter protom ta k left dorbo last ta k right dorbo
// 2.ak ta loop calabo totokkon jotokkon left right teke cot ba soman hosse 
// 3.loop e vitor ekta midle nibo left ar right k 2 vag kore .oi ta k flor kore nibo jeno dosomik man na ashe 
// 4.protome check korbo middle er sate terget mill ace kina takle Return korbo 
// 5.na takle target ta midle teke  boro kina jodi hoi taile left er man hoiye jabe midle er man teke 1 beshi.Math
// 6.jodi target ta middle teke coto hoi tokon right er man hobe middle teke 1 beshi


function binarySearch(array, targetNumber) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid === targetNumber) {
            return mid
        } else if (array[mid] < targetNumber) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }

    return -1; // Return -1 if the target element is not found
}


const numbers = [1, 2, 3, 4, 5, 8, 9];
const targetNumber = 5;
const index = binarySearch(numbers, targetNumber);

if (index !== -1) {
    console.log(`Found ${targetNumber} at index ${index}`);
} else {
    console.log(`${targetNumber} not found in the array`);
}
// result 4 hower kotha holo 5 karon floor korer karon index ta uper ta niye Silo 