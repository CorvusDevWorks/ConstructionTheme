/*Menu Js */

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0%)";
});

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});
/* Counter */

let firstCount = document.querySelector("#firstCount");
let secondCount = document.querySelector("#secondCount");
let thirdCount = document.querySelector("#thirdCount");

let firstInt = parseInt(firstCount.innerHTML);
let secondInt = parseInt(secondCount.innerHTML);
let thirdInt = parseInt(thirdCount.innerHTML);
let firstData = firstCount.dataset.num;
let secondData = secondCount.dataset.num;
let thirdData = thirdCount.dataset.num;

const counter = (int, data, html) => {
  setInterval(() => {
    if (int < data) {
      let cnt = int++;
      html.innerHTML = cnt + 1;
    }
  }, 5);
};

document.addEventListener("scroll", () => {
  if (pageYOffset ==1500) {
    counter(firstInt, firstData, firstCount);
    counter(secondInt, secondData, secondCount);
    counter(thirdInt, thirdData, thirdCount);
    console.log(123);
  }
});








//Cards

const card=document.querySelector('#card-1');
const card1=document.querySelector('#card-2');
const card2=document.querySelector('#card-3');
const card3=document.querySelector('#card-4');


card.addEventListener('click', function() {
	
	card.classList.toggle('is-flipped');
	
	
});

card1.addEventListener('click', function() {
	
	card1.classList.toggle('is-flipped');
	
});

card2.addEventListener('click', function() {
	
	card2.classList.toggle('is-flipped');
	
});

card3.addEventListener('click', function() {
	
	card3.classList.toggle('is-flipped');
	
});


