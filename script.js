function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn = document.querySelector("button");
btn.addEventListener("mouseover", (event) => {
  let num = randomNumber(200, 400);
  let num2 = randomNumber(100, 250);
  btn.innerText = "Try again";
  event.target.style.left = `${num}px`;
  event.target.style.top = `${num2}px`;
});

btn.addEventListener("click", (event) => {
  document.querySelector("button").innerHTML = 'all this for nothing?'
});

