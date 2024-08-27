import { reviews, Slides } from "./data.js";

// // Slides

// const carouselInner = document.querySelector('.carousel-inner');
// carouselInner.innerHTML = Slides.map((slide) => {
//     const { image, heading, para, id } = slide
//     return `<div class="carousel-item active" data-bs-interval="3000">
//                     <img src=${image}
//                         class="d-block w-100 carousel-img" alt=${para}>
//                     <div class="carousel-caption d-md-block">
//                         <h5>${heading}</h5>
//                         <p>${para}</p>
//                     </div>
//                 </div>`
// }).join('')





// Clients

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


