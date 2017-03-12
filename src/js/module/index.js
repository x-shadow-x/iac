function initSwiper(selector, options, width, height) {
	width = width || '100%';
	height = height || 'auto';
	$(selector).width(width).height(height);

	swiper = new Swiper(selector, options);

	return swiper;
}

$(function() {
	var clientWidth = $(window).width();
	var headerHeight = $('header').outerHeight();
	var swiperBanner = initSwiper('#swiperContainerBanner', {
		nextButton: '#bannerSwiperButtonNext',
		prevButton: '#bannerSwiperButtonPrev',
		noSwiping: true,
		centeredSlides: true,
		// autoplay: 3200,
		autoplayDisableOnInteraction: false,
		loop: true
	}, null, clientWidth > 768 ? clientWidth * 0.366 : clientWidth * 0.6);

	var swiperNotice = initSwiper('#swiperContainerNotice', {
		nextButton: '#noticeSwiperButtonNext',
		prevButton: '#noticeSwiperButtonPrev',
		centeredSlides: true,
		autoplayDisableOnInteraction: false,
		loop: true
	}, clientWidth > 768 ? clientWidth * 0.42 : clientWidth);

	$(window).scroll(function(e) {
		if ($(this).scrollTop() > headerHeight) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});

	if (clientWidth > 768) {
		$('.video').click(function() {
			if ($(this).get(0).paused) {
				$(this).get(0).play();
				$(this).siblings('.play_btn').hide();
			} else {
				$(this).get(0).pause();
				$(this).siblings('.play_btn').show();
			}
		});

		$('.play_btn').click(function() {
			$('.video').trigger('click');
		});
	} else {
		$('.video_pic').click(function(e) {
			e.stopPropagation();
			$('#videoHover').html($(this).siblings('video').clone(false, true)).show();
			$('#videoHover').find('video').get(0).play();
			$('.video').unbind("click").click(function(e) {
				e.stopPropagation();
				if ($(this).get(0).paused) {
					$(this).get(0).play();
					$(this).siblings('.play_btn').hide();
				} else {
					$(this).get(0).pause();
					$(this).siblings('.play_btn').show();
				}
			});
		});



		$('#videoHover').click(function() {
			$(this).hide();
		});
	}

})