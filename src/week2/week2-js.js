'use strict';

const contentsHeader = document.querySelectorAll('.contents-header');
const contentsAllButton = document.querySelector('.contentsAll-button');

contentsHeader.forEach((item) => {
  item.addEventListener('click', toggleAccordion);
  item.addEventListener('keydown', keyboardApproach);
});

// Accordion Keybord Approach Function
function keyboardApproach(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    // toggleAccordion 함수 재사용
    // this => .contents-header
    toggleAccordion.call(this);
  }
}

// Toggle Accordion Function
function toggleAccordion() {
  // this => .contents-header
  const contents = this.parentElement.querySelector('.contents');
  const icon = this.querySelector('.header-icon');
  const isActive = contents.classList.contains('active');

  contentsHeader.forEach((header) => {
    header.setAttribute('aria-expanded', 'false');
  });

  document.querySelectorAll('.contents').forEach((content) => {
    classListRemove(content, 'active');
    content.setAttribute('hidden', '');
  });

  document.querySelectorAll('.header-icon').forEach((icon) => {
    classListRemove(icon, 'active');
  });

  if (!isActive) {
    classListAdd(contents, 'active');
    contents.removeAttribute('hidden');
    classListAdd(icon, 'active');
    this.setAttribute('aria-expanded', 'true');
  }
}

// ClassList Add,Remove Function
function classListAdd(el, className) {
  el.classList.add(`${className}`);
}

function classListRemove(el, className) {
  el.classList.remove(`${className}`);
}
