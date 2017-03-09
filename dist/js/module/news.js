// $(function() {
// 	$('#newsList').on('click', '.news_title_box', function() {
// 		var targetEl = $(this);
// 		if (targetEl.hasClass('active')) {
// 			targetEl.removeClass('active').siblings('.news_content_box').slideUp(400);
// 		} else {
// 			$('#newsList').find('.news_content_box').slideUp(400);
// 			$('#newsList').find('.news_title_box').removeClass('active');
// 			targetEl.addClass('active').siblings('.news_content_box').slideDown(400);
// 		}

// 	});
// })

$(function() {
	$('#newsList').on('click', '.news_title_box', function() {
		var targetEl = $(this);
		var newContentBoxEl = targetEl.siblings('.news_content_box');

		if (targetEl.hasClass('active')) {
			newContentBoxEl.css('height', 0);
			targetEl.removeClass('active');

		} else {
			$('#newsList').find('.news_title_box').removeClass('active');
			$('#newsList').find('.news_content_box').css('height', 0);
			newContentBoxEl.css('height', newContentBoxEl.find('.inner_box').outerHeight(true));
			targetEl.addClass('active');
		}

	});
})