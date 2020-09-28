const func = (A, B) => {
    let C = [];                         // O(1)
    let numFromB = {};                  // O(1)
    let numFromA = new Set(A);          // O(n)
    for (const el of B) {               // O(m)
        if (numFromA.has(el))           // O(1)
            numFromB.hasOwnProperty(el)         // O(1)
            ? numFromB[el] = numFromB[el] + 1   // O(1)
            : numFromB[el] = 1;                 // O(1)
    }
    for (const el of A) {              // O(n)
        if (!isPrime(numFromB[el]))    // O(sqrt(k))
            C.push(el);                // O(1)
    }
    return C;
};
const isPrime = num => {
    const sNum = Math.sqrt(num);      // O(1)
    for (let i = 2; i <= sNum; i++){  // O(sqrt(k))
        if (num % i === 0)            // O(1)
            return false;
    }
    return num > 1;
}
const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

console.log(func(A, B));  // -> [ 2, 9, 2, 5, 7, 10]

    // n = size of A
    // m = size of B
    // k = size of the number to be squared
    // we can skip the constants
    // T(n, m, k) = O(n) + O(m) + O(sqrt(k))
    // k is directly connected to m and sqrt(k) will
    // always be significantly smaller than m.
    // Therefore, according to the Big-O notation,
    // time complexity is: O(n + m)
    //
    // Notice!
    // It's important to remember that
    // the Big-O notation only says that
    // if we keep increasing the size of the input,
    // there will be a point where one function is
    // going to overtake another in speed,
    // however, if size of the input always
    // stays below that point in practice,
    // then the algorithm with "worse" time
    // complexity can always be faster
    // than the algorithm with "better one" in real program code.
    // Therefore, if we decide to keep small
    // arrays as an input, it would be better to
    // try and use brute-force algorithm with
    // T(n) = O(n^2), for example.
