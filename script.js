'use strict';

const sidebar = document.querySelector('[data-sidebar');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// element toggle fucntion
const elementToggle = function (elem) {
  elem.classList.toggle('active');
};

sidebarBtn.addEventListener('click', function () {
  elementToggle(sidebar);
});
