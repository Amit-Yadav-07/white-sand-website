import { reviews } from "./data.js";

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