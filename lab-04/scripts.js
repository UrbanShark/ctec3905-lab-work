"use strict";

const toggleHighlighted = (ev) => {
  ev.target.classList.toggle("highlighted");
}

const elements = document.querySelectorAll('.clickable');

for (const element of elements) {
  element.addEventListener('click', toggleHighlighted);
}
