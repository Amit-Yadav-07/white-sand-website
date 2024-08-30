import { OurTeam } from "./data.js";
import { header } from "./header.js";
import { footer } from "./footer.js";
import { GetFullYear } from "./date.js";


const Head = document.querySelector('.header');
Head.innerHTML = header;



const ourTeamParent = document.querySelector('.our-team-parent');
ourTeamParent.innerHTML = OurTeam.map((card) => {
    const { image, name, disc, instagram, facebook, linkdin } = card;
    return `<div class="card-container">
                    <div class="card">
                        <img src=${image}
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <strong class="card-title">${name}</strong>
                            <p class="card-text text-start">${disc}</p>
                            <a href="#" class="btn">
                                <i class="fa-brands fa-facebook"></i>
                            </a>

                            <a href="#" class="btn">
                                <i class="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" class="btn">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>`
})




$('.our-team-parent').slick({
    dots: true,
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


// Faq section

// const faqs = document.querySelector('.accordion');
// faqs.innerHTML = FAQ.map((faq) => {
//     const { question, answer } = faq

//     return `<div class="accordion-item my-1">
//                         <h2 class="accordion-header">
//                             <button class="accordion-button" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 ${question}
//                             </button>
//                         </h2>
//                         <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                             <div class="accordion-body">
//                                 <p class="text-start">${answer}</p>
//                             </div>
//                         </div>
//                     </div>`
// }).join('')


const foot = document.querySelector('#foot');
foot.innerHTML = footer

GetFullYear();