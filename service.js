import { header } from './header.js';
import { footer } from './footer.js';
import { GetFullYear } from './date.js';
import { serviceProject, serviceDetails } from './data.js';
const serviceParent = document.querySelector('.service-project-parent');
const serviceDetailContainer = document.querySelector('.service-details-container');
const Head = document.querySelector('.header');
const foot = document.querySelector('#foot');
Head.innerHTML = header;
foot.innerHTML = footer;

AOS.init();


// serviceDetailContainer.innerHTML = serviceDetails.map((details) => {
//     return `<article class="my-4" data-aos="fade-up" data-aos-duration="2000">
//                     <h6 class="font-bold">${details.heading}</h6>
//                     <em>${details.para} .</em>
//                 </article>`
// }).join('')


serviceParent.innerHTML = serviceProject.map((serviceBox) => {
    return `<div class="service-project-item" data-aos="fade-up" data-aos-duration="2000">
                    <img src=${serviceBox.image} alt="">
                    <strong class='bg-danger'>hello</strong>
                </div>`
}).join('')

GetFullYear();