//Multiply 2 matrix


let A = [
  [1, 2],
  [3, 4]
];

let B = [
  [2, 4],
  [6, 8]
];

let mul = [];

for (let i = 0; i < A.length; i++) {
    mul[i] = [];
    for (let j = 0; j < B[0].length; j++) {
        mul[i][j] = 0;
        for (let k = 0; k < B.length; k++) {
            mul[i][j] += A[i][k] * B[k][j];
        }
    }
}

console.log("Matrix Multiplication Result:");
console.log(mul);
