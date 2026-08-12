// // // const heading = document.createAttribute('hi');
// // // heading.value = 'Hello, World!';
// // // document.body.append("heading")
// // // const paragraph = document.createElement('p');
// // // paragraph.innerText = 'This is a dynamically created paragraph.';
// // // document.body.appendChild(paragraph);

// // // const image = document.createElement('img');
// // // image.src = 'https://via.placeholder.com/150';
// // // image.alt = 'Placeholder Image';
// // // document.body.appendChild(image);

// // // const button = document.createElement('button');
// // // button.innerText = 'Click Me';
// // // button.addEventListener('click', () => {
// // //     alert('Button Clicked!');
// // // });
// // // document.body.appendChild(button);

// // // const list = document.createElement('ul');
// // // const items = ['Item 1', 'Item 2', 'Item 3'];
// // // items.forEach(itemText => {
// // //     const listItem = document.createElement('li');
// // //     listItem.innerText = itemText;
// // //     list.appendChild(listItem);
// // // });
// // // document.body.appendChild(list);    

// // // document.body.appendChild(heading);

// // function createCard({ title, text, imageUrl, buttonText = "Learn more", onClick }) {
// //     const card = document.createElement("div");
// //     card.className = "card";

// //     if (imageUrl) {
// //         const img = document.createElement("img");
// //         img.src = imageUrl;
// //         img.alt = title;
// //         card.appendChild(img);
// //     }

// //     const body = document.createElement("div");
// //     body.className = "card-body";

// //     const titleEl = document.createElement("h3");
// //     titleEl.className = "card-title";
// //     titleEl.textContent = title;

// //     const textEl = document.createElement("p");
// //     textEl.className = "card-text";
// //     textEl.textContent = text;

// //     const button = document.createElement("button");
// //     button.className = "card-button";
// //     button.textContent = buttonText;

// //     button.addEventListener(
// //         "click",
// //         onClick || (() => alert(`Clicked: ${title}`))
// //     );

// //     body.append(titleEl, textEl, button);

// //     card.appendChild(body);

// //     return card;
// // }

// const inputText = document.querySelector("#input-text");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     const text = inputText.value.trim();
//     if (text) {
//         const card = createCard({
//             title: text,
//             text: "This is a dynamically created card.",
//             imageUrl: "https://via.placeholder.com/150",
//             buttonText: "Click Me",
//             onClick: () => alert(`You clicked on ${text}`),
//         });
//         document.body.appendChild(card);
//         inputText.value = "";
//     } else {
//         alert("Please enter some text to create a card.");
//     }21 z
// }); 

const inputText = document.querySelector("#input-text");
const btn = document.querySelector("#btn");
if(inputText === " ") {

}else { 

}
btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    event.target.disabled = true;
    event.key = "Enter";
    event.clientx
    event.clienty
    event.target.value = "vivek"

    console.log(event.target.value);
});