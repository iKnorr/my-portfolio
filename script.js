'use strict';

// Setting variables
const overlay = document.querySelector('.overlay');
const cardContact = document.querySelector('.card-contact');

const btnOpenContactForm = document.querySelector('.open-contact-form');
const btnCloseContactForm = document.querySelector('.close-contact-form');

// Lights off/on
const job = document.querySelector('.job');
const nameHeader = document.querySelector('.name');
const btnLightsOff = document.querySelector('.light-bulb');

// Turn lights off
btnLightsOff.addEventListener('click', function () {
  job.classList.toggle('lights-on-off');
  nameHeader.classList.toggle('lights-on-off');
  btnLightsOff.classList.toggle('light-bulb-off');
  console.log('hello world');
});

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
