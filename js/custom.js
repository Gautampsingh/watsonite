// detect the devices
// detectMob();
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

// slider value
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
rangeSlider.addEventListener("input", showSliderValue, false);

// reset button
var resetBtn = document.querySelector(".btn");
resetBtn.addEventListener("click", reset);

if (detectMob()) {
  removeClass(true);
} else {
  // removeClass(false);
}

function removeClass(status) {
  if (status) {
    console.log(`Status ${status}`);
    var getCircle = document.querySelectorAll(".circle");
    for (let i = 0; i < getCircle.length; i++) {
      getCircle[i].style.display = "none";
    }
    document.querySelector(".activeCircle").style.display = "block";
  } else {
    var getCircle = document.querySelectorAll(".circle");
    for (let i = 0; i < getCircle.length; i++) {
      getCircle[i].classList.remove("activeCircle");
    }
  }
}

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = rangeSlider.value / rangeSlider.max;
  var bulletValue = bulletPosition * 100;
  rangeBullet.style.left = bulletValue + "%";

  removeClass(false);
  // conditions to check the relevant
  if (bulletValue === 0) {
    var element = document.querySelector(".circle-never");
    element.classList.add("activeCircle");
  } else if (bulletValue < 33) {
    var element = document.querySelector(".circle-occasional");
    element.classList.add("activeCircle");
  } else if (bulletValue < 66) {
    var element = document.querySelector(".circle-hours");
    element.classList.add("activeCircle");
  } else if (bulletValue < 100) {
    var element = document.querySelector(".circle-yearly");
    element.classList.add("activeCircle");
  } else if (bulletValue === 100) {
    var element = document.querySelector(".circle-neverLast");
    element.classList.add("activeCircle");
  }

  if (detectMob()) {
    var getCircle = document.querySelectorAll(".circle");
    for (let i = 0; i < getCircle.length; i++) {
      getCircle[i].style.display = "none";
    }
    document.querySelector(".activeCircle").style.display = "block";
  }
}

function reset() {
  removeClass();
  console.log("reset");
  rangeBullet.style.left = 0 + "%";
  rangeSlider.value = 0;
  var element = document.querySelector(".circle-never");
  element.classList.add("activeCircle");
}
