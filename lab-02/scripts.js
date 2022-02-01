function greetMe() {
  console.log("Hello!!");
}

myTrigger.addEventListener('click', greetMe);

function changeText() {
  demo.textContent = "I told you soooooo!";
}

myTrigger2.addEventListener('click', changeText);

function currentTime() {
  dateTime.textContent = Date();
}

myTrigger3.addEventListener('click', currentTime);
