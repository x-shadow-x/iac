$(function() {

	var clientWidth = $(window).width();

	$(window).scroll(function() {
		var scrollDis = $(window).scrollTop();
		var lY = scrollDis * 0.1;
		var cY = scrollDis * 0.2;
		var rY = scrollDis * 0.3;
		$('#bgPicLeft').css('transform', 'translate3D(0, ' + lY + 'px, 0)');
		$('#bgCenter').css('transform', 'translate3D(0, ' + cY + 'px, 0)');
		$('#bgRight').css('transform', 'translate3D(0, ' + rY + 'px, 0)');
	});

	$('#languageBtn').click(function() {
		var languageListEl = $('#languageList');
		if (languageListEl.is(':visible')) {
			languageListEl.slideUp();
		} else {
			$('#languageList').slideDown();
		}
	});

	if (clientWidth <= 768) {
		$('#headerMenuBtn').click(function(e) {
			if (e.target.id != 'headerMenuBtn') {
				return;
			}
			var headerMenuMobileBox = $('#headerMenuMobileBox');
			if (headerMenuMobileBox.is(':visible')) {
				headerMenuMobileBox.hide();
				$(this).removeClass('closed');
			} else {
				headerMenuMobileBox.show();
				$(this).addClass('closed');
			}
		});
	}

})