"use strict";

// variable setup for the easier manipulation of html dom
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
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
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close modal with "dry" functions
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
