

function windowSize () {
    var windowWidth = window.innerWidth;
    if(windowWidth < 768){
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 'auto',

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {

    }
};
window.addEventListener('resize', windowSize);
windowSize();
