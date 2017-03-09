$(function() {

	$('.program_list').on('click', '.march_btn', function(e) {
		e.stopPropagation();
		$(this).toggleClass('active');
		var marchListEl = $(this).siblings('.march_list');
		if (marchListEl.is(':visible')) {
			marchListEl.slideUp(320);
		} else {
			marchListEl.slideDown(320);
		}
	})
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

	$('#tabMenu').on('click', 'li', function() {
		var targetEl = $(this);
		if (targetEl.hasClass('active')) {
			return;
		} else {
			targetEl.addClass('active').siblings().removeClass('active');
		}
	})
})