import './layouts/index.html';
import './index.scss';
import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';

// Tabs

const tabs = require('tabs');
const container = document.querySelector('.tab-container');
const containerSecond = document.querySelector('.tab-container-2');
container ? tabs(container) : '';
containerSecond ? tabs(containerSecond) : '';

// Swipers

const swiperProductViewThumb = new Swiper('.swiper-product-view-thumb', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 32,
});

const swiperProductView = new Swiper('.swiper-product-view', {
  loop: true,
  modules: [Thumbs],
  thumbs: {
    swiper: swiperProductViewThumb,
  },
});

// Mobile menu

const button = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-menu');

button.addEventListener('click', () => {
  nav.classList.remove('closing');
  nav.classList.add('opening');
  nav.classList.add('open');
});

window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('.mobile-menu') && !target.closest('.hamburger')) {
    nav.classList.remove('opening');
    nav.classList.add('closing');
    nav.classList.remove('open');
  }
});
