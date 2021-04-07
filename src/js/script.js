$(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 1000,
        arrows: true,
		dots: false,
        slidesToShow: 1,
        // adaptiveHeight: true,
       /*  prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_red_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_red_arrow.png"></button>', */
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
            breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});