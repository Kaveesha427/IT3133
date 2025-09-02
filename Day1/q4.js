//Scale a matrix 
//Multiply 2 matrix
//Create a function to print a element from multi dimentiol array

let matrix = [
  [1, 2],
  [3, 4]
];

let scale = 3;
let newmatrix = [];

for (let i = 0; i < matrix.length; i++) {
  newmatrix[i] = []; // create row array
  for (let j = 0; j < matrix[0].length; j++) {
    newmatrix[i][j] = scale * matrix[i][j];
  }
}

console.log("Scaled Matrix:");
console.log(newmatrix);
