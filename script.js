'use strict';

const sidebar = document.querySelector('[data-sidebar');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const testmonialsItem = document.querySelectorAll('[data-testimonials-item');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// element toggle fucntion
const elementToggle = function (elem) {
  elem.classList.toggle('active');
};

sidebarBtn.addEventListener('click', function () {
  elementToggle(sidebar);
});

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

for (let i = 0; i < testmonialsItem.length; i++) {
  testmonialsItem[i].addEventListener('click', function () {
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.innerHTML = this.querySelector(
      '[data-testimonials-title]'
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      '[data-testimonials-text]'
    ).innerHTML;
    testimonialsModalFunc();
  });
}

overlay.addEventListener('click', testimonialsModalFunc);
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
