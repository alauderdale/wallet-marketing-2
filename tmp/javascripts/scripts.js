

$(document).ready(function(){

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


	$(".hover-slider .carousel-indicators div").hover(function(){
	  var goto = Number( $(this).attr('data-slide-to') );
	  $("#ToolsSLider").carousel(goto);  
	});


	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });





	// $('.tool-icon').click(function(){

	//     $('.tool-icon').removeClass('active');
	//     $(this).addClass('active');

	// });


	// $('#ToolsSLider').on('slide.bs.carousel', function () {
	// 	$('.tool-icon').removeClass('active');
	// })

// $('#ToolsSLider').on('slide.bs.carousel', function (ev) {
//   var id = ev.relatedTarget.id;
//   switch (id) {
//   	case "item-chat":
//       $('.tool-icon-chat').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-chat.svg)');
//       break;
//     case "item-call":
//       $('.tool-icon-call').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-call.svg)');
//       break;
//     case "item-idea":
//       $('.tool-icon-idea').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-idea.svg)');
//       break;
//     case "item-event":
//       $('.tool-icon-event').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-event.svg)');
//       break;
//     case "item-contact":
//       $('.tool-icon-contact').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-contact.svg)');
//       break;
//     case "item-test":
//       $('.tool-icon-test').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-test.svg)');
//       break;
//     case "item-email":
//       $('.tool-icon-email').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-email.svg)');
//       break;
//     case "item-launch":
//       $('.tool-icon-launch').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-launch.svg)');
//       break;

//   }
// })






});
