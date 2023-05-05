'use strict';

// Variables
const sidebar = document.querySelector('[data-sidebar');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
//
const testmonialsItem = document.querySelectorAll('[data-testimonials-item');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');
//
const select = document.querySelector('[data-select]');
const selectValue = document.querySelector('[data-select-value]');
const selectItem = document.querySelectorAll('[data-select-item]');
//
const filterItems = document.querySelectorAll('[data-filter-item]');


// element toggle function
const elementToggle = function(elem) {
  elem.classList.toggle('active');
};

sidebarBtn.addEventListener('click', function() {
  elementToggle(sidebar);
});

// modal toggle function
const testimonialsModalFunc = function() {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

for (let i = 0; i < testmonialsItem.length; i++) {
  testmonialsItem[i].addEventListener('click', function() {
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

// select toggle
select.addEventListener('click', function() {
  elementToggle(this);
});

// filter projects function
const filterFunc = function(selectedValue) {
  for (const i in filterItems) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    };
  };
};

// add event in all select items
for (const i in selectItem) {
  selectItem[i].addEventListener('click', function() {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggle(select);
    filterFunc(selectedValue);
  });
};
