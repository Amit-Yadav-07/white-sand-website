import { reviews, Slides, ourServices, processSection } from "./data.js";
import { footer } from "./footer.js";
const Head = document.querySelector('.header');
import { GetFullYear } from "./date.js";

AOS.init();

// header

import { header } from "./header.js";
Head.innerHTML = header;


// ourService

const serviceContainer = document.querySelector('.service-box-container');
serviceContainer.innerHTML = ourServices.map((service) => {
    const { img, heading, para, anchor } = service;
    // console.log(anchor);
    return `<a href="${anchor}" class="text-decoration-none" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="service-box">
                        <div style="height:180px";><img class='h-100 w-100' src="${img}" alt='${heading}' style="object-fit:contain";/></div>
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

const workSection = document.querySelector(".counters");
const workObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        console.log(entry);

        if (!entry.isIntersecting) return;

        // animate number counter

        const counterNum = document.querySelectorAll(".counter-numbers");

        const speed = 150;

        counterNum.forEach((curElem) => {
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                // console.log(targetNumber);
                const initialNum = parseInt(curElem.innerText);
                // console.log(initialNum);

                const incrementNumber = Math.trunc(targetNumber / speed);
                // console.log(incrementNumber);

                if (initialNum < targetNumber) {
                    curElem.innerText = `${initialNum + incrementNumber}+`;
                    setTimeout(updateNumber, 10);
                }
            };

            updateNumber();
        });

        observer.unobserve(workSection);
    },
    {
        root: null,
        threshold: 0,
    }
);

workObserver.observe(workSection);



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
}, 5000)


// footer
const foot = document.querySelector('#foot');
foot.innerHTML = footer;


// date
GetFullYear();


