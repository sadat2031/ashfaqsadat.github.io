

// Loader 
    $(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });



// Gallery Carousel
  $('.carousel').carousel({
    autoplay: true,
    dots: true,
    loop : true,
  })


