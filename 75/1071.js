// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t(i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.



//     Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC



const str1 = 'a'
const str2 = 'a'


console.log(str1.startsWith(str2))

// const divisor = (str1, str2) => {


//     let lent1 = ''


//     if (str1.length > str2.length) {
//         lent1 = str1.length
//     } else {
//         lent1 = str2.length
//     }

//     let maxValue = 0

//     let result = ''

//     for (let i = 0; i < lent1; i++) {
//         for (let j = i + 1; j <= lent1; j++) {
//             const substring = str1.substring(i, j);


//             if (str2.startsWith(substring) && substring.length > maxValue) {

//                 maxValue = substring.length;
//                 result = substring;
//             }
//         }


//     }
//     return result

// }

// const result = divisor(str1, str2)

// console.log(result)