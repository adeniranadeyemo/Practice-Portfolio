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
//
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');
//
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');


// element toggle function
const elementToggle = function(elem) {
  elem.classList.toggle('active');
};
//
sidebarBtn.addEventListener('click', function() {
  elementToggle(sidebar)
})
//
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
//
overlay.addEventListener('click', testimonialsModalFunc)
modalCloseBtn.addEventListener('click', testimonialsModalFunc)
//
// select toggle
select.addEventListener('click', function() {
  elementToggle(this);
});
//
// // filter projects function
const filterFunc = function(selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    };
  };
};

// // add event in all select items
for (let i = 0; i < selectItem.length; i++) {
  selectItem[i].addEventListener('click', function() {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggle(select);
    filterFunc(selectedValue);
  });
};

// event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', function() {

    //check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled');
    };
  });
};

// event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function() {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add('active');
        navigationLinks[i].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove('active');
        navigationLinks[i].classList.remove('active');
      };
    };

  });
};
