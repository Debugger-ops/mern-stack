// console.log('Math Random', MathRandom)
// const data = new Data();
// const obj ={
//     name : "Mahesh",
//     roll_no :23,
//     address :"janakpuri",
//     country: "India"

// }

// //Json javascript object rotation

// console.log(obj)
// console.log('\n')
// console.log(JSON .parse(obj));

// const arr = [
//   [34, "name", 7890],
//   { id: 34, name: "name", value: 7890 },
//   { id: 34, name: "name", value: 7890 }
// ];

// console.log("Array:", arr);
// console.log("JSON stringified array:", JSON.stringify(arr));

// function toLocalStorage(data) {
//   localStorage.setItem("myData", JSON.stringify(data));
//   return "Data saved to localStorage";
// }

// console.log(toLocalStorage(arr));\9

// const randomNumberEndingWithZero = () => {
//   const random = Math.floor(Math.random() * 1000); // 0 to 999
//   return Math.ceil(random / 10) * 10; // rounds up to nearest multiple of 10
// };

// console.log(randomNumberEndingWithZero());

function randomNumber(){
    let num = "0123456789"
    localStorage.setItem("randomNumber", num[Math.floor(Math.random() * num.length)]);
    console.log("Random number stored in localStorage:", localStorage.getItem("randomNumber"));

}

// const date = () => {
//     return new Date();
// }

// const d = new Date()
// d.setFullYear(2020)
// d.setDate(29)
// console.log(d.toString())
// console.log(d.toISOString())

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const age = calculateAge('2000-01-01');
console.log(`Age is: ${age} years old.`);



