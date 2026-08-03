// function(author, bookname,title, year, genre) {
//     this.title = title;
//     this.author = author;
//     this.bookname = bookname;
//     this.year = year;
//     this.genre = genre;
// }

// console.log(typeof book)
// const book1 = new book("vivek", "theory of everything", "physics", 2020, "science");
// const book2 = new book("ayush", "theory of everything", "physics", 2020, "science");
// const book3 = new book("mahesh", "theory of everything", "physics", 2020, "science");
// const book4 = new book("nitin", "theory of everything", "physics", 2020, "science");
// const book5 = new book("sachin", "theory of everything", "physics", 2020, "science");

// console.log(typeof book1)
// console.log(book1)
// console.log(book2)
// console.log(book3)
// console.log(book4)
// console.log(book5)


// const btn = document.getElementById("reload");
// // console.log(typeof btn)
// btn.addEventListener("click", function(){
//     window.history.reload();
// })

// btn.addEventListener("click", function(){
//     history.replaceState;

const btn = document.getElementById("reload");

btn.addEventListener("click", () => {
    window.location.reload();
});

console.log(window.location.href);

// const btn = document.getElementById("back");

// btn.addEventListener("click", () => {
//     window.history.back();
// });