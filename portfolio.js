import { header } from './header.js'
import { footer } from './footer.js'
import { blogItems } from './data.js'
import { GetFullYear } from "./date.js";


AOS.init();

const Head = document.querySelector('.header');
// const blogContainer = document.querySelector('.blog-project-parent');
const foot = document.querySelector('#foot');
Head.innerHTML = header;
foot.innerHTML = footer;


GetFullYear();