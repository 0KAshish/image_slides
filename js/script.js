const grid3 = document.getElementById("row-of-3");
const grid4 = document.getElementById("row-of-4");
const imgCont = document.querySelector("#img-cont");
const fullImageSlider = document.querySelector(".sliding-img");
const cross = document.querySelector(".cross");

let imgContainer = [
  { index: 0, img: "./img/img1.png" },
  { index: 1, img: "./img/card1.png" },
  { index: 2, img: "./img/card2.png" },
  { index: 3, img: "./img/card3.png" },
  { index: 4, img: "./img/card4.png" },
  { index: 5, img: "./img/card5.png" },
  { index: 6, img: "./img/card6.png" },
  { index: 7, img: "./img/card5.png" },
  { index: 8, img: "./img/card2.png" },
  { index: 9, img: "./img/card3.png" },
  { index: 10, img: "./img/card4.png" },
  { index: 11, img: "./img/card6.png" },
];

for (let i = 0; i < imgContainer.length; i++) {
  const createDiv = document.createElement("div");
  createDiv.setAttribute("class", "small-img");
  createDiv.innerHTML = `<img src="${imgContainer[i].img}" data-src='${imgContainer[i].index}'/>`;
  imgCont.appendChild(createDiv);
}

grid3.addEventListener("click", function () {
  changeContainer(3);
});

grid4.addEventListener("click", function () {
  changeContainer(4);
});

function changeContainer(gridSize) {
  let imgCont = document.querySelector("#img-cont");
  imgCont.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

let small_img = document.querySelectorAll(".small-img");

Array.from(small_img).forEach((x) => {
  x.addEventListener("click", function (e) {
    showFullimage(e.target.src, e.target.dataset.src);
  });
});

function showFullimage(src, idx) {
  //console.log(src, idx);
  fullImageSlider.style.display = "flex";
  let fullImage = document.getElementById("full-image");
  fullImage.setAttribute("src", src);
  fullImage.setAttribute("data-src", idx);
  disableScroll();
}

let idx = document.querySelector("#full-image").getAttribute("data-src");

let leftArrow = document.querySelector(".left");
leftArrow.addEventListener("click", function () {
  idx = idx <= 0 ? imgContainer.length - 1 : idx - 1;
  src = imgContainer[idx].img;
  showFullimage(src, idx);
});

let rightArrow = document.querySelector(".right");
rightArrow.addEventListener("click", function () {
  idx = idx == imgContainer.length - 1 ? 0 : idx + 1;
  src = imgContainer[idx].img;
  showFullimage(src, idx);
});

cross.addEventListener("click", function () {
  fullImageSlider.style.display = "none";
  enableScroll();
});

////////////////////////Geeks for Geeks ////////////////////////////////////

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

///////////////////////////////////////////////////////////////////////////
