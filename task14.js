const heading = document.createAttribute('hi');
heading.value = 'Hello, World!';
document.body.append("heading")
const paragraph = document.createElement('p');
paragraph.innerText = 'This is a dynamically created paragraph.';
document.body.appendChild(paragraph);

const image = document.createElement('img');
image.src = 'https://via.placeholder.com/150';
image.alt = 'Placeholder Image';
document.body.appendChild(image);

const button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click', () => {
    alert('Button Clicked!');
});
document.body.appendChild(button);

const list = document.createElement('ul');
const items = ['Item 1', 'Item 2', 'Item 3'];
items.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.innerText = itemText;
    list.appendChild(listItem);
});
document.body.appendChild(list);    
    
document.body.appendChild(heading);