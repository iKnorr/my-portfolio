'use strict';

//preloader
const preloader = document.querySelector('.loader');

window.onload = function () {
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 1700);
};

// Lights off/on
const job = document.querySelector('.job');
const nameHeader = document.querySelector('.name');
const btnLightsOff = document.querySelector('.light-bulb');

// Turn lights off
btnLightsOff.addEventListener('click', function () {
  job.classList.toggle('lights-on-off');
  nameHeader.classList.toggle('lights-on-off');
  btnLightsOff.classList.toggle('light-bulb-off');
});

// Setting variables for contact form
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

//Content fade in with scroll
const projectMain = document.querySelectorAll('.project-main');
const idMain = document.querySelector('.id-main');

// About section slide in
const target = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show-id', entry.isIntersecting);
      if (entry.isIntersecting) target.unobserve(entry.target);
    });
    console.log(entries);
  },
  {
    threshold: 0.1,
  }
);

target.observe(idMain);

// Porject section slide in
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
    // console.log(entries);
  },
  {
    threshold: 0.2,
  }
);

projectMain.forEach(project => {
  observer.observe(project);
});
