import { header } from './header.js';
import { footer } from './footer.js';
const Head = document.querySelector('.header');
const foot = document.querySelector('#foot');
Head.innerHTML = header;
foot.innerHTML = footer;