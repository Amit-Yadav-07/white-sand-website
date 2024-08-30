import { header } from './header.js'
import { footer } from './footer.js'
import { blogItems } from './data.js'
import { GetFullYear } from "./date.js";

const Head = document.querySelector('.header');
const blogContainer = document.querySelector('.blog-project-parent');
const foot = document.querySelector('#foot');
Head.innerHTML = header;
foot.innerHTML = footer;

blogContainer.innerHTML = blogItems.map((blog) => {
    return `<div class="blog-project-box">
                    <img src=${blog.img}
                        alt=${blog.disc}>
                    <strong class="text-danger">${blog.disc}</strong>
            </div> `
}).join('')



GetFullYear()