menuToggler.addEventListener('click', ev => {
	menu.classList.toggle('open');
	menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

red.addEventListener('input', ev => {
	document.documentElement.Style.setProperty('--red', red.value)
});

console.log("testing")
