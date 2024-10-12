import { OurTeam, Faqs } from "./data.js";
import { header } from "./header.js";
import { footer } from "./footer.js";
import { GetFullYear } from "./date.js";

AOS.init();

const Head = document.querySelector('.header');
Head.innerHTML = header;



const ourTeamParent = document.querySelector('.our-team-parent');
ourTeamParent.innerHTML = OurTeam.map((card) => {
    const { image, name, designation, } = card;
    return `<div class="card-container">
                    <div class="car">
                            <figure class="leader-img-section">
                                <img src=${image} class="" alt="">
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title text-center font-bold text-capitalize">${name}</h5>
                                <h6 class="card-text text-center fw-bold pt-3">${designation}</h6>
                            </div>
                    </div>
            </div>`
})




$('.our-team-parent').slick({
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





// Faq section

const faqs = document.querySelector('.accordion');
faqs.innerHTML = Faqs.map((faq) => {
    const { openid, questions, answers } = faq
    console.log();

    return `<div class="accordion-item my-2" data-aos="fade-up" data-aos-duration="2000">
                            <h2 class="accordion-header">
                                <button class="accordion-button text-capitalize bg-light" type="button" data-bs-toggle="collapse"
                                    data-bs-target=#${openid} aria-expanded="true" aria-controls=${openid}>
                                      ${questions}
                                </button>
                            </h2>
                            <div id=${openid} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p class="text-start">${answers}</p>
                                </div>
                            </div>
                        </div>
    `
}).join('')


const foot = document.querySelector('#foot');
foot.innerHTML = footer

GetFullYear();