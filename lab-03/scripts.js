"use strict";

const toggleHighlighted = (ev) => {
  ev.target.classList.toggle("highlighted");
}

const elements = document.querySelectorAll('.clickable');

for (const element of elements) {
  element.addEventListener('click', toggleHighlighted);
}








// function appendParagraph(text) {
//   const p = document.createElement ('p');
//   p.textContent = text;
//   document.querySelector('main').appendChild(p);
// }
//
// ['these', 'are', 'my', 'paragraphs'].forEach(appendParagraph);





//const target = document.querySelector('#target');

//target.textContent = message;




//
// do {
//   message = `${message}?`;
// } while (confirm(message))


//`${h} ${w}`
//above commented code adds together two strings which have been made
