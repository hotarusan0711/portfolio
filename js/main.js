$(function () {
    $('.openbtn_sp').on('click', function () {
      $('.navigation_sp').toggleClass('open');
      $('body').toggleClass('noscroll');
    })
    $('nav_sp a[href]').on('click', function(event) {
        $('.openbtn_sp').trigger('click');
    });
});

$(".openbtn_sp").click(function () {
    $(this).toggleClass('active');
});

ScrollReveal().reveal('.top_scroll',{ 
    duration: 1400,
    viewFactor: 0.2,
    distance: '20px',
    easing: 'ease-in',
    reset: false,
    mobile: true,
});

ScrollReveal().reveal('.introduce_txt', { 
    duration: 1200,
    delay: 800,
    viewFactor: 0.2,
    distance: '20px',
    easing: 'ease-in',
    reset: false,
    mobile: true,
});

ScrollReveal().reveal('.free_scroll', { 
    duration: 1400,
    viewFactor: 0.2,
    distance: '20px',
    easing: 'ease-in',
    reset: false,
    mobile: true,
});

ScrollReveal().reveal('.About_txt', { 
    duration: 1400,
    delay: 500,
    viewFactor: 0.2,
    distance: '20px',
    easing: 'ease-in',
    reset: false,
    mobile: true,
});


ScrollReveal().reveal('.free_scroll_2', { 
    duration: 1400,
    delay: 300,
    viewFactor: 0.2,
    distance: '20px',
    easing: 'ease-in',
    reset: false,
    mobile: true,
});

ScrollReveal().reveal('.free_scroll_3', { 
    duration: 1400,
    delay: 600,
    viewFactor: 0.2,
    distance: '20px',
    easing: 'ease-in',
    reset: false,
    mobile: true,
});