import { reviews, Slides, ourServices, processSection } from "./data.js";
import { footer } from "./footer.js";
const Head = document.querySelector('.header');
import { GetFullYear } from "./date.js";

AOS.init();

// header

import { header } from "./header.js";
Head.innerHTML = header;


// sliders 
const slide = document.querySelector('.carousel-inner');

const text = slide.innerHTML = Slides.map((slide, index) => {
    const { image, para, heading, id } = slide
    if (index == 0) {
        return `<div class="carousel-item active" data-bs-interval="3000">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-6 col-12 carousel-content">
                            <h1 class=''>${heading}</h1>
                            <em class=''>${para}</em>
                        </div>

                        <div class="col-md-6 col-12 px-5 h-100">
                            <img src=${image} class="d-block w-100 carousel-img pe-5" alt=${heading}>
                        </div>
                    </div>
                </div>`
    } else {
        return `<div class="carousel-item bg-dark text-white" data-bs-interval="3000">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-6 col-12 carousel-content">
                            <h1 class=''>${heading}</h1>
                            <em class=''>${para}</em>
                        </div>

                        <div class="col-md-6 col-12 px-5 h-100">
                            <img src=${image} class="d-block w-100 carousel-img pe-5" alt=${heading}>
                        </div>
                    </div>
                </div>`
    }
}).join('')

// ourService

const serviceContainer = document.querySelector('.service-box-container');
serviceContainer.innerHTML = ourServices.map((service) => {
    const { img, heading, para, anchor } = service;
    // console.log(anchor);
    return `<a href="${anchor}" class="text-decoration-none" data-aos="zoom-in" data-aos-duration="1500">
                    <div class="service-box">
                        <div style="height:170px"><img class='h-100 w-100' src="${img}" alt='${heading}'/></div>
                        <h5>${heading}</h5>
                        <p>${para}</p>
                    </div>
                </a>`
}).join('')


// slick


$('.service-box-container').slick({
    // dots: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    // centerPadding: '80px',
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// number counter
const items = [...document.querySelectorAll('.count-num')];

const updateCount = (element) => {
    let value = parseInt(element.dataset.value);
    // let increment = Math.ceil(value / 1000);
    let initialValue = 0;

    let incrementCount = setInterval(() => {

        initialValue += incrementCount

        if (initialValue > value) {
            element.textContent = `${value}+`
            clearInterval(incrementCount);
            return
        }
        element.textContent = `${initialValue}+`
    }, 1)
}


items.forEach((counter) => {
    updateCount(counter)
})


//process
// const processParent = document.querySelector('#process');
// processParent.innerHTML = processSection.map((process) => {
//     // console.log(process);
//     const { icon, points, head } = process;
//     console.log(points);

//     return `  
// <div class="col-xl-3 col-sm-6 col-12 my-4" data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
// <div class="process text-center">
//         <div class="process-icon"><i class="fa-solid ${icon}"></i></div>
//         <strong>${head}</strong>
//         <p>${points}</p>
//     </div>
// </div>
//     `
// }).join('')


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


