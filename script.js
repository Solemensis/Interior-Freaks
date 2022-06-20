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
    modal.style.opacity = "1";
    overlay.style.opacity = "1";
    overlay.style.zIndex = "400";
    overlay.style.transition = "0.5s";

    document.querySelector(".shown-modal").src = btnsOpenModal[i].src;
    document.querySelector(".shown-modal").style.transition = "0.5s";
    document.querySelector(".shown-modal").style.opacity = "1";
  });
}

// this has put in a function box for the sake of dry principle
const closeModals = function () {
  modal.style.opacity = "0";
  overlay.style.opacity = "0";
  overlay.style.zIndex = "-1";
  overlay.style.transition = "0.5s";
  formModal.style.opacity = "0";
  overlay2.style.opacity = "0";
  overlay2.style.zIndex = "-1";
  overlay2.style.transition = "0.5s";
  formModal.style.zIndex = "-1";
  formModal.style.transition = "0.5s";

  document.querySelector(".modal").style.transition = "0.5s";
  document.querySelector(".modal").style.opacity = "0";

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
  document.querySelector(".main-screen").style.filter = "blur(4px)";
  document.querySelector(".main-screen").style.transform = "scale(1.013)";
});
