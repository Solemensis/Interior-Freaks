"use strict";

// variable setup for the easier manipulation of html dom
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// open modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.querySelector(".shown-modal").src = btnsOpenModal[i].src;
  });
}

// this has put in a function box for the sake of dry principle
const closeModals = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");

  formModal.style.opacity = "0";
  overlay2.style.opacity = "0";
  overlay2.style.zIndex = "-1";
  formModal.style.zIndex = "-1";
  formModal.style.transition = "0.5s";

  document.querySelector(".main-screen").style.filter = "blur(0)";
  document.querySelector(".main-screen").style.transform = "scale(1)";
  document.querySelector(".main-screen").style.transition = "0.5s";
};

// close modal with "dry" functions
btnCloseModal.addEventListener("click", closeModals);
overlay.addEventListener("click", closeModals);
overlay2.addEventListener("click", closeModals);
modal.addEventListener("click", closeModals);

// *****************

let button1 = document.querySelector(".button1");
let formModal = document.querySelector(".form-modal");

button1.addEventListener("click", function () {
  formModal.style.opacity = "1";
  overlay2.style.opacity = "1";
  overlay2.style.zIndex = "500";

  formModal.style.zIndex = "999999999999999";
  formModal.style.transition = "1s";
  document.querySelector(".main-screen").style.filter = "blur(3px)";
  document.querySelector(".main-screen").style.transform = "scale(1.010)";
});
