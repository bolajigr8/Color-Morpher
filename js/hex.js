const cl = console.log.bind(console);

const btn = document.querySelector(".btn");

const color = document.getElementById("color");

const heading = document.querySelector(".colorFlipper");

const body = document.querySelector("body");

const footer = document.querySelector("footer");

// footer child
const footerChild = footer.firstElementChild;

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNoGenerator() {
  let getRandomNo = Math.floor(Math.random() * hex.length);
  return getRandomNo;
}
//  callback function
function changeColor() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[randomNoGenerator()];
  }
  // applying changes
  body.style.backgroundColor = hexValue;
  btn.classList.remove("btnMore");
  btn.style.backgroundColor = "black";
  btn.style.color = hexValue;
  heading.style.backgroundColor = "black";
  color.textContent = hexValue;
  // footer
  footer.style.backgroundColor = "black";
  footerChild.style.color = hexValue;
}

btn.addEventListener("click", changeColor);

// date
const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();
