$('.autoplay').slick({
    width: '2511px',
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    // appendArrows: $('.arrowsа'),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px',
                centerMode: true,
            }
        }
    ]
});

