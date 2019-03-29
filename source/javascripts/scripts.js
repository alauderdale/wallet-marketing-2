$(document).ready(function(){



    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      // slidesOffsetAfter: 100,

      loop: true,
      keyboard: true,
      initialSlide: 0,
      slidesPerView: 'auto',
      loopedSlides: 3,



    // If we need pagination
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {

      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    });




  $( ".menu-button" ).click(function() {
        $( "html" ).toggleClass( "nav-open" );
    });

    $( ".menu-link" ).click(function() {
        $('.menu-button').trigger('click');
    });

    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
      $("#primary-nav").removeClass("navbar-page-top");
    }


  $(window).scroll(function() {    
      
    var scroll = $(window).scrollTop();
      if (scroll >= 5) {
          $("#primary-nav").removeClass("navbar-page-top");
      } else {
          $("#primary-nav").addClass("navbar-page-top");
      }
  });





});



