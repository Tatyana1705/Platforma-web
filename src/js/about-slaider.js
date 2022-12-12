export default () => {
    let slideIndex = 1;
    const btnLeft = document.querySelector('.about__btn--left');
    const btnRight = document.querySelector('.about__btn--right');

    if (!btnLeft && !btnRight) {
        return;
    }

    showSlides(slideIndex);

    btnRight.addEventListener('click', (e) => {
        e.preventDefault();

        plusSlides(1);
    });

    btnLeft.addEventListener('click', (e) => {
        e.preventDefault();

        plusSlides(-1);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("about__item");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
}
