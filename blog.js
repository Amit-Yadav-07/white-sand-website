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
    return `<div class="card blog-project-box">
                    <div class="blog-img-parent">
                        <img src=${blog.img} class="card-img-top" alt=${blog.disc}>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${blog.disc}</p>
                    </div>
                </div>`
}).join('')

// < div class="blog-project-box" >
//     <img src=${blog.img}
//         alt=${blog.disc}>
//         <strong class="text-info">${blog.disc}</strong>
//     </>

GetFullYear()