
	$('.hero-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true
	});

	$('.hero-slider .slick-slide').on('click', function() {
		alert('hello slick slide')
	})

	// var windowHeight = $(window).height();
	// $('.hero-slider').css('height', windowHeight);
	// $('.hero-slider .slack-slide').css('height', windowHeight);