import { header } from "./header.js";
import { footer } from "./footer.js";
console.log(header);

const Head = document.querySelector('.header');
Head.innerHTML = header;

const foot = document.querySelector('#foot');
foot.innerHTML = footer;