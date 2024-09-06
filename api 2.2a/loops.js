// for loop (most used. it's the easiest to remember and write)
// while loop
// do while loop

// for(initialization; condition; incr/decre){
//  code
// }

// for (let i =0; i <=10; i++){
//     console.log(i); 
// }

// fruits = ['apple', 'banana', 'mango', 'orange', 'grapes', 'strawberries'];
// for(let i = 0; i<= fruits.length; i++){
//    // console.log(fruits[i]); // COMMENT: if trying to just get the number of fruits and not the names of the fruits: console.log(i)
// } //COMMENT: length starts counting from 1 while arrays start counting from 0. so in this code, the output would have "undefined" after the last array element named.

// console.log(fruits.length);

// while(condition_is_true){
// code
// }

console.log("start");
let j = 4;
while(j > 1){
    console.log(j);
    j--;
}
console.log("outside while loop")