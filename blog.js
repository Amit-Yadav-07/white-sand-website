import { footer } from "./footer.js";
import { header } from "./header.js";
// console.log(footer);


const head = document.querySelector('.header')
head.innerHTML = header;


// const blogContainer = document.querySelector('.blog-container');
// console.log(blogContainer);


const foot = document.querySelector('#foot');
foot.innerHTML = footer;