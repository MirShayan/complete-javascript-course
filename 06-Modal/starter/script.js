'use strict';

const openMoldalButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const bodyElement = document.querySelector("body");

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < openMoldalButtons.length; i++) {
    openMoldalButtons[i].addEventListener("click", openModal);
}

bodyElement.addEventListener("click", function (e) {
    console.log(e);
    if (e.target === closeModalButton || e.target === overlay) closeModal();
});

bodyElement.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Escape") closeModal();
});

