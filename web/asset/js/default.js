$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});
$(document).ready(function(){
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 40
  })
  $('a.scrollto').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 40)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  //parallax
  $('.parallax-window').parallax();
});

// RSVP Form - jquery validation
$("#rsvpForm").validate({
  rules: {
    guestName: {
      required: true
    },
    guestEmail: {
      required: true
    },
    guestMessage: {
      required: true
    }
  }
});


// wow
new WOW({
    offset: 50
}).init();

// Back to Top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// Gallery
document.getElementById('gallery').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
   blueimp.Gallery(links, options);   
};

