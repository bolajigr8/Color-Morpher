const cl = console.log.bind(console);

const btn = document.querySelector(".btn");

const color = document.getElementById("color");

const body = document.querySelector("body");

const heading = document.querySelector(".colorFlipper");

const footer = document.querySelector("footer");

// footer child
const footerChild = footer.firstElementChild;

const randomColors = [
  "green",
  "black",
  "white",
  "purple",
  "red",
  "brown",
  "blue",
  "orange",
  "grey",
];

function changeColors(event) {
  let randomNo = randomNoGenerator();
  if (randomColors[randomNo] !== "white") {
    // body
    body.style.backgroundColor = randomColors[randomNo];
    // changing text content
    color.textContent = randomColors[randomNo];
    // heading
    heading.style.color = randomColors[randomNo];
    heading.style.backgroundColor = "white";
    // button
    btn.classList.remove("btnMore");
    btn.style.backgroundColor = randomColors[randomNo];
    btn.style.color = "white";
    // footer
    footer.style.backgroundColor = "white";
    footerChild.style.color = randomColors[randomNo];
  } else {
    // body
    body.style.backgroundColor = randomColors[randomNo];
    // changing text content
    color.textContent = randomColors[randomNo];
    // heading
    heading.style.color = randomColors[randomNo];
    heading.style.backgroundColor = "hsl(42, 63%, 48%)";
    // button
    btn.style.backgroundColor = "hsl(42, 63%, 48%)";
    btn.style.color = "white";
    // footer
    footer.style.backgroundColor = "hsl(42, 63%, 48%)";
    footerChild.style.color = "white";
  }
}

btn.addEventListener("click", changeColors);

function randomNoGenerator() {
  let colors = Math.floor(Math.random() * randomColors.length);
  return colors;
}

// date
const date = document.getElementById("date");

date.textContent = new Date().getFullYear();
