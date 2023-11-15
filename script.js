"use strict";
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".mobile_menu");
console.log(mobileMenu);

hamburger.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
function openNav() {
  hamburger.classList.add("hidden");
  document.querySelector(".overlay").style.width = "100%";
  close.classList.remove("hidden");
  body.style.overflow = "hidden";
}

function closeNav() {
  close.classList.add("hidden");
  document.querySelector(".overlay").style.width = "0%";
  hamburger.classList.remove("hidden");
  body.style.overflow = "visible";
}
