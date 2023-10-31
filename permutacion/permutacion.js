function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function permutation(n, r) {
    if(n < r) return 0;
    return factorial(n) / factorial(n - r);
}

let n;
let r;
console.log(`Las ${n} personas, pueden sentarse en las ${r} butacas de las siguientes distintas formas:`, permutation(n, r));