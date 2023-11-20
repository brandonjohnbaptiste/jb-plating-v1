const content = document.querySelector('.section');

const options = {};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
       console.log(entry);
    });
}, options);