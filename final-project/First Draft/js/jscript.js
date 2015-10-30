
	$('.hero-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true,
  		fade: true, 
  		speed: 1000,
      autoplay: true

	});

  // var windowHeight = $(window).height();
  // $('.hero-slider').css('height', windowHeight);
  // $('.hero-slider .slack-slide').css('height', windowHeight);

$('form').validate()

$('input[name="res_date"]').datepicker({
  inline: true,
  minDate: 0,
  maxDate: +60
});

$('a').on('click', smoothScrollJump);

function smoothScrollJump(event) {
    event.preventDefault();

    var $currentTarget = $(event.currentTarget);
    // console.log('currentTarget');

    var targetId = $currentTarget.attr('href');

    // console.log($(targetId).offset());

    var offsetTop = $(targetId).offset().top -85;

    $('html, body').animate({
        scrollTop: offsetTop
    }, 1000);
}

function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(40.719938,-74.04866600000003),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);


