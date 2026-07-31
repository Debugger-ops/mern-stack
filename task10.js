// sum(2,3)


// function sum(...args){
//     let total = 0;
//     for(let num of args){
//         total += num;
//     }
//     return total;
// }
// console.log(sum(23,3));
// console.log(sum(1,1,2))
// console.log(sum(1))
// console.log(sum(1,6,7,7,8,9,9))

// const arr = ["A", "B", "T","E"]
// // arr = ["P", "N", "R","D"]
// arr[0] ="mah"
// arr.unshift("FSDL", true, 34)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.splice(2,0," na", true, 34)
// arr.splice(1,2)

// const arr = Array.from([2,3,4,5], x=>x * x);
// const numbervalue = [4,8,554,6,8,4]
// numbervalue.toReversed.sort()
// console.log(numbervalue)

const numbervalue = [43, 84, 554, 64, 28, 4];

const result = numbervalue.toReversed().sort((a, b) => b - a);

console.log(result);      

