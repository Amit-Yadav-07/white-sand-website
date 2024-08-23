
async function data() {
    try {
        const response = await fetch('https://squid-app-za82k.ondigitalocean.app/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


data()