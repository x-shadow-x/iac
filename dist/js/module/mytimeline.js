function initSwiper(contentSelector, preSelector, nextSelector) {
	var swiper = new Swiper(contentSelector, {
		nextButton: nextSelector,
		prevButton: preSelector,
		paginationClickable: true,
		slidesPerView: 3,
		spaceBetween: 30,
		freeMode: true
	});

	return swiper;
}

$(function() {

	$('#timeLineList').find('.swiper-container').each(function(index, item) {
		if ($(item).find('.swiper-slide').length <= 3) {
			$(item).find('.swiper-button-next, .swiper-button-prev').hide();
		}
		var contentSelector = '#' + item.id;
		var preSelector = '#' + item.querySelector('.swiper-button-prev').id;
		var nextSelector = '#' + item.querySelector('.swiper-button-next').id;
		initSwiper(contentSelector, preSelector, nextSelector);
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