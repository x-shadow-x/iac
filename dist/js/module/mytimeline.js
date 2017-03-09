function initSwiper(contentSelector, options) {
	var swiper = new Swiper(contentSelector, options);

	return swiper;
}

$(function() {
	var clientWidth = $(window).width();
	var slidesPerView = 3;
	var options = {
		paginationClickable: true
	};

	$('#timeLineList').find('.swiper-container').each(function(index, item) {

		var slideNum = $(item).find('.swiper-slide').length;
		var contentSelector = '#' + item.id;
		var preSelector = '#' + item.querySelector('.swiper-button-prev').id;
		var nextSelector = '#' + item.querySelector('.swiper-button-next').id;

		if(clientWidth > 768) {

			options.slidesPerView = 3;
			options.spaceBetween = 30;
			options.freeMode = true;

			if(slideNum <= slidesPerView) {
				$(item).find('.swiper-button-next, .swiper-button-prev').hide();
			} else {
				options.nextButton = nextSelector;
				options.prevButton = preSelector;
			}
		} else if(clientWidth <= 768) {
			$(item).find('.swiper-button-next, .swiper-button-prev').hide();
		}
		
		initSwiper(contentSelector, options);
	});

	$('#timeLineList').on('mouseenter', '.program_pic_box', function() {
		$(this).find('.pic_hover').show();
	});

	$('#timeLineList').on('mouseleave', '.program_pic_box', function() {
		$(this).find('.pic_hover').hide();
	});

	$('#timeLineList').on('click', '.favourite_icon', function() {
		$(this).toggleClass('active');
	});
})