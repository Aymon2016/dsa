
// const n = 10;
// const limit = sqrt(n + 1)

// const primeNumber = (n) => {

//     if (n <= 1) return 0
//     for (let i = 2; i <= limit; i++) {
//         if (n % i == 0) {
//             return 0;
//         }
//         console.log('1')
//         return 1
//     }
// }

// //timecomplexity akdom kom 0(rootN)

// console.log(primeNumber(10))



// const n = 10;


// const gononiyok = (n) => {


//     for (let i = 1; i * i <= n; i++) {
//         if (n % i == 0) {
//             console.log(i, n / i)
//         }

//     }
// }

// //timecomplexity akdom kom 0(rootN)

//  // result 
//  // 1,10
//  // 2,5

// console.log(gononiyok(10))


// const n = 10;
// const d = 20;


// const gsd = (n, d) => {
//     if (n < d) {
//         for (let i = n; i > 1; i--) {
//             if (n % i == 0 && d % i == 0) {
//                 return i
//                 break
//             }

//         }
//     } else {
//         for (let i = d; i > 1; i--) {
//             if (n % i == 0 && d % i == 0) {
//                 return i
//                 break
//             }
//         }
//     }


// }

/// result 10 time 0(n)

// console.log(gsd(n, d))


// let n = 10;
// let d = 20;


// const Lsd = (n, d) => {
//     if (d > n) {
//         let lsd = null

//         while (lsd == null) {
//             if (d % n == 0) {
//                 lsd = d

//             }
//             d = d * 2

//             return lsd
//         }
//         return

//     } else {

//         let lsd = null

//         while (lsd == null) {
//             if (n % d == 0) {
//                 lsd = n

//             }
//             n = n * 2

//             return lsd
//         }
//     }

//     return
// }


// result 20 time (o(n))
// console.log(Lsd(n, d))
