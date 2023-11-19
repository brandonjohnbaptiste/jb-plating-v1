document.addEventListener('DOMContentLoaded', evt => {

    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev')
    const slides = document.querySelectorAll('.slide');

    let currSlide = 0;
    let maxSlide = slides.length - 1;

    console.log(nextBtn);
    nextBtn.addEventListener('click', function() {
       if (currSlide === maxSlide) return;
        currSlide++;


       slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
       });
    });

    prevBtn.addEventListener('click', function() {
        if (currSlide === 0) return;
        currSlide--;


        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
        });
    });
});

