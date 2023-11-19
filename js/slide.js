document.addEventListener('DOMContentLoaded', evt => {
    let currSlide = 0;
    const nextBtn = document.querySelector('.btn-next');
    const slides = document.querySelectorAll('.slide');

    console.log(nextBtn);
    nextBtn.addEventListener('click', function() {
       currSlide++;

       slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
       });
    });
});

