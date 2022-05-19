'use strict';

// Setting variables
const about = document.querySelector('.about');
const overlay = document.querySelector('.overlay');

const btnOpenAbout = document.querySelector('.open-about');
const btnCloseAbout = document.querySelector('.close-about');

// opening about section
btnOpenAbout.addEventListener('click', function () {
  about.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// closing about section
const closeAbout = function () {
  about.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseAbout.addEventListener('click', closeAbout);
overlay.addEventListener('click', closeAbout);

// Setting variables for Skills section
const skills = document.querySelector('.skills');
const btnOpenSkills = document.querySelector('.open-skills');
const btnCloseSkills = document.querySelector('.close-skills');

// Opening Skills section
btnOpenSkills.addEventListener('click', function () {
  skills.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Closing Skills section
const closeSkills = function () {
  skills.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseSkills.addEventListener('click', closeSkills);
overlay.addEventListener('click', closeSkills);

let messageArray = ['INGO KNORR'];
let textPosition = 0;
let speed = 100;

typewriter = () => {
  document.querySelector('#message').innerHTML =
    messageArray[0].substring(0, textPosition) + '<span>\u25ae</span>';

  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener('load', typewriter);
