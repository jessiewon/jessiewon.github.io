//enable tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(function() {
    /* About  */
    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    /* Portfolio */
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Experience */
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated slideInLeft');
        $('.wp3-1').addClass('animated slideInRight');
    }, {
        offset: '50%'
    });

    /* Resume */
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated bounceInDown');
        $('.wp4-1').addClass('animated bounceIn');
    }, {
        offset: '75%'
    });

    /* Contact */
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated bounceInDown');
    }, {
        offset: '75%'
    });

    /* Skills */
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
        $('.wp6-1').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


/* Skills progress circles */
(function($) {
  $('.forty.circle').circleProgress({
    value: 0.4
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(40 * progress) + '<i>%</i>');
  });
  $('.fifty.circle').circleProgress({
    value: 0.5
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
  });
  $('.sixty.circle').circleProgress({
    value: 0.6
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
  });
  $('.seventy.circle').circleProgress({
    value: 0.7
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
  });
  $('.eighty.circle').circleProgress({
    value: 0.8
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
  $('.ninety.circle').circleProgress({
    value: 0.9
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
  });
})(jQuery);