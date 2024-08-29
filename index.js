import { reviews, Slides, ourServices } from "./data.js";
import { header } from "./header.js";
import { footer } from "./footer.js";
import { GetFullYear } from "./date.js";



// header

const Head = document.querySelector('.header');
Head.innerHTML = header;
// const computedStyle = window.getComputedStyle(Head);
// console.log(computedStyle.getPropertyValue('position'));
// let newHeader = document.querySelector('.header')
// newHeader.setAttribute('position', 'sticky');
// newHeader.setAttribute('top', '0%');
// console.log(window.getComputedStyle(newHeader).getPropertyValue('position'));


// sliders 
const slide = document.querySelector('.carousel-inner');

const text = slide.innerHTML = Slides.map((slide, index) => {
    const { image, para, heading, id } = slide
    if (index === 0) {
        return `<div class="carousel-item active" data-bs-interval="3000">
                    <img src=${image}
                        class="d-block w-100 carousel-img" alt=${heading}>
                    <div class="carousel-caption d-md-block">
                        <h5>${heading}</h5>
                        <p>${para}</p>
                    </div>
                </div>`
    } else {
        return `<div class="carousel-item" data-bs-interval="3000">
                    <img src=${image}
                        class="d-block w-100 carousel-img" alt=${heading}>
                    <div class="carousel-caption d-md-block">
                        <h5>${heading}</h5>
                        <p>${para}</p>
                    </div>
                </div>`
    }
}).join('')


// ourService

const serviceContainer = document.querySelector('.service-box-container');
serviceContainer.innerHTML = ourServices.map((service) => {
    const { icon, heading, para } = service;
    console.log(icon);
    return `<a href="./blog.html" class="text-decoration-none">
                    <div class="service-box">
                        <span><i class='fa-brands ${icon}'></i></span>
                        <h5>${heading}</h5>
                        <p>${para}</p>
                    </div>
                </a>`
}).join('')





// review slides
const user_img = document.getElementById('user-img');
const user_name = document.getElementById('user-name');
const user_designation = document.getElementById('user-designation');
const about_user = document.getElementById('about-user');
const leftBtn = document.querySelector('.fa-angle-left');
const rightBtn = document.querySelector('.fa-angle-right');

let initialValue = 0;

window.addEventListener('DOMContentLoaded', function () {

    CurrentUser(initialValue)
})


rightBtn.addEventListener('click', function () {
    initialValue++;
    if (initialValue > reviews.length - 1) {
        initialValue = 0;

    }
    CurrentUser(initialValue);
})

leftBtn.addEventListener('click', function () {
    initialValue--;
    if (initialValue < 0) {
        initialValue = reviews.length - 1
    }
    CurrentUser(initialValue);
})


function CurrentUser(person) {
    let item = reviews[person];
    user_img.src = item.img;
    user_name.textContent = item.name;
    user_designation.textContent = item.designation;
    about_user.textContent = item.about;
}


setInterval(() => {
    CurrentUser(initialValue++);
    if (initialValue > reviews.length - 1) {
        initialValue = 0;
    }
}, 3000)


// footer
const foot = document.querySelector('#foot');
foot.innerHTML = footer;


// date
GetFullYear();