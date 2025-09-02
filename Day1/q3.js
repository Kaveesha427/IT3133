//Breakeawhole numbers into digitals like 4562 -> 4,5,6,2


let num = 1234;
let numStr = num.toString(); 

for (let i = 0; i < numStr.length; i++) {
    process.stdout.write(numStr[i]);
    if (i < numStr.length - 1) {
        process.stdout.write(",");
    }
}
