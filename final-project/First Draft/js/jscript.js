
	$('.hero-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true,
  		fade: true, 
  		speed: 500,
      autoplay: true

	});

  // var windowHeight = $(window).height();
  // $('.hero-slider').css('height', windowHeight);
  // $('.hero-slider .slack-slide').css('height', windowHeight);

$('form').validate()

$('input[name="res_date"]').datepicker({
  minDate: 0,
  maxDate: +60
});

var dropdown = [
  "4:00PM",
  "4:30PM",
  "5:00PM",
  "5:30PM",
  "6:00PM",
  "6:30PM",
  "7:00PM",
  "7:30PM",
  "8:00PM",
  "8:30PM",
  "9:30PM",
  "10:00PM",
  "10:30PM",
  "11:00PM",
  "11:30PM"
];

// $('input[name="Time"]').selectmenu({
//    source: dropdown
// })

	