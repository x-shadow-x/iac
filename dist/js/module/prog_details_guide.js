function initSwiper(sw, selector, options) {
	sw = new Swiper(selector, options);
	return sw;
}

function initMoreBtn() {
	var textContentHeight = $('#textContent').height();
	var textHeight = $('#text').height();
	if (textContentHeight < textHeight) {
		$('#showAllTextBtn').css('display', 'inline-block');
	}
}

$(function() {
	var swiperBanner;
	var swiperProgramList
	var priceTipWidth = $('.price_tip').width();

	initMoreBtn();

	swiperBanner = initSwiper(swiperBanner, '#swiperContainerBanner', {
		pagination: '#swiperPagination',
		centeredSlides: true,
		autoplay: 3200,
		autoplayDisableOnInteraction: false,
		loop: true
	});

	swiperProgramList = initSwiper(swiperProgramList, '#swiperContainerProgramList', {
		slidesPerView: 3,
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		onInit: function(swiper) {
			swiper.update();
		}
	});



	$('#marchBtn').click(function(e) {
		e.stopPropagation();
		$(this).toggleClass('active');
		var marchListEl = $('#marchList');
		if (marchListEl.is(':visible')) {
			marchListEl.slideUp(320);
		} else {
			marchListEl.slideDown(320);
		}
	});

	$('#marchList').on('click', 'li', function(e) {
		e.stopPropagation();
		$(this).addClass('active');
	});

	$('#swiperContainerProgramList').on('mouseenter', 'li', function() {
		var targetLiEl = $(this);
		if (targetLiEl.offset().left < priceTipWidth) {
			targetLiEl.find('.price_tip').addClass('show_right');
		} else {
			targetLiEl.find('.price_tip').addClass('show_left');
		}
	});

	$('#swiperContainerProgramList').on('mouseleave', 'li', function() {
		$(this).find('.price_tip').removeClass('show_right show_left');
	});

	$('#pageTab').on('click', 'li', function() {
		var targetEl = $(this);
		if (targetEl.hasClass('active')) {
			return;
		} else {
			targetEl.addClass('active').siblings().removeClass('active');
		}
	});

	$('#showAllTextBtn').one('click', function() {
		$('#textContent').css('max-height', 'none');
		$(this).hide();
	});

	$(window).click(function() {
		$('#marchBtn').removeClass('active');
		$('#marchList').slideUp();
	});

})