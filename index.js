import { reviews, ourServices, brandLogo } from "./data.js";
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


// logo slider

const brands = document.querySelector('.brands');
brands.innerHTML = brandLogo.map((brand) => {

    return `<li class="brand-logo"><img src=${brand.image} alt="" loading="lazy"></li>`
}).join('')



// number counter

const workSection = document.querySelector(".counters");
const workObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        // console.log(entry);

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

// review start 


const testimonial = document.querySelector('.testimonial-container');
testimonial.innerHTML = reviews.map((review) => {
    const { id, name, designation, img, about } = review

    return `
        <div class='speech-bubble'>
        <img class='avatar' src=${img} />
        <h6 class='author'>${name}</h6>
        <strong class=''>${designation}</strong>
        <p class='testimonial-text'>${about}</p><i class="fa-solid fa-2x fa-quote-right"></i>
        </div>
    `
}).join('')

$('.testimonial-container').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true

});

// review end

// footer
const foot = document.querySelector('#foot');
foot.innerHTML = footer;


// date
GetFullYear();


