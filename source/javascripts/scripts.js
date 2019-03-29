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

    //animations

    // TweenMax.set("#clear");
    // TweenMax.to("#clear", .3, {
    //   x: 200,
    //   scale: 1,
    //   delay: .5,
    //   ease: Power1.easeOut,
    //   autoAlpha:1,
    // });

    // TweenMax.set("#phone-total");
    // TweenMax.to("#phone-total", 1, {
    //   x: 10,
    //   scale: 1,
    //   delay: 0,
    //   ease: Power1.easeOut,
    //   autoAlpha:1,
    // });


    // TweenMax.set("#top-card");
    // TweenMax.to("#top-card", .5, {
    //   y: 163,
    //   scale: 1,
    //   delay: 0,
    //   ease: Power1.easeOut,
    //   autoAlpha:1,
    // });

    // TweenMax.set("#bottom-card");
    // TweenMax.to("#bottom-card", .5, {
    //   y: 330,
    //   scale: 1,
    //   delay: 0,
    //   ease: Power1.easeOut,
    //   autoAlpha:1,
    // });

    // tl.set("#bottom-card", {
    //   x:0,
    //   y:20,
    //   scale: 1.6,
    //   autoAlpha:1
    // }).to("#bottom-card", 1, {
    //   x:0,
    //   y:0,
    //   scale: 1.6,
    //   autoAlpha:1
    // })


    var bottomCardtl = new TimelineLite();


    bottomCardtl.set("#bottom-card", {
      x:-40,
      y:420,
      scale: 1.6,
      autoAlpha:0
    }).to("#bottom-card", .2, {
      y:200,
      autoAlpha:1,
      ease: Power1.easeOut
    }).to("#bottom-card", .4, {
      delay:1.5,
      ease: Power1.easeIn,
      x:30,
      y:330,
      scale: 1,
    })

    var license1Timeline = new TimelineLite();


    license1Timeline.set("#license-1", {
      scale: 1,
      x:-10,
      autoAlpha:0
    }).to("#license-1", .5, {
      ease: Power1.easeIn,
      x:10,
      scale: 1,
      delay:.5,
      autoAlpha:1
    })

    var license2Timeline = new TimelineLite();


    license2Timeline.set("#license-2", {
      scale: 1,
      x:-10,
      autoAlpha:0
    }).to("#license-2", .5, {
      delay:1,
      ease: Power1.easeIn,
      x:5,
      scale: 1,
      autoAlpha:1
    })


    var phoneTimeline = new TimelineLite();


    phoneTimeline.set("#phone", {
      autoAlpha:0
    }).to("#phone", .2, {
      delay:1.9,
      ease: Power1.easeIn,
      autoAlpha:1
    })


    var topCardtl = new TimelineLite();


    topCardtl.set("#top-card", {
      x:20,
      y:170,
      scale:1.2,
      autoAlpha:0
    }).to("#top-card", .6, {
      delay:1.5,
      ease: Power1.easeIn,
      x:30,
      y:170,
      scale:1,
      autoAlpha:1
    })



});



