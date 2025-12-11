import loadAbout from './about.js';
import loadHome from './home.js';
import loadMenu from './menu.js';

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

// initial render
loadMenu();

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);
