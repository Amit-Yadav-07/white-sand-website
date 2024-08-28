export function GetFullYear() {
    const date = document.querySelector('.date');
    date.innerHTML = new Date().getFullYear()
}

