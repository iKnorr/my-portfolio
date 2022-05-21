'use strict';

// Setting variables
const overlay = document.querySelector('.overlay');
const cardContact = document.querySelector('.card-contact');

const btnOpenContactForm = document.querySelector('.open-contact-form');
const btnCloseContactForm = document.querySelector('.close-contact-form');

// Open contact form
btnOpenContactForm.addEventListener('click', function () {
  cardContact.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Close contact form
const closeContact = function () {
  cardContact.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseContactForm.addEventListener('click', closeContact);
overlay.addEventListener('click', closeContact);
