// const arr = [2,2,3,5]
// const arr1 = arr.map((a)=> a * a);
// console.log(arr1)
// const arr2 = arr.filter((num)=> num%2 === 0 )
// console.log(arr2)
// arr2.reduce((1),0)

// const arr2 = arr.reduce((a,b)=> a+b)
// console.log(arr2)

// // const arr = ["2312", "fsdf", "afd"]
// const [num1,...num2]= arr;
// console.log(typeof(num1))
// console.log(num2)

// const arr = [12.5,6,["dsfd","fas",[54545,7665,343,[5453,54]],43,true,[564]]]
// function flatten(arr) {
//     return arr.reduce((acc, curr) => {
//         if (Array.isArray(curr)) {
//             return acc.concat(flatten(curr));
//         }
//         return acc.concat(curr);
//     }, []);
// }

// console.log(flatten(arr));
// const flatarr = arr.flat(Infinity);
// console.log(flatarr)

// const obj3 = {}
// obj3.name = "ayushkumar"
// obj3["age"] = 44;
// delete.obj3.n

const car ={
    name: "mahesh",
    age: 27,
    married : false,
    // newfun: ()=>{
    //     // console.log(`this"${this}`)
    //     // console.log(`this is"${this.name}`)
    //     return()=>{
    //         console.log(`this is nested arrow function ${this.married}`)
    //     }
   
        
    //}
   
}
 for(let obj in car){
        console.log(obj, car[obj])
    }