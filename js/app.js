$(function () {
	init();
});

function init() {
	$('button').click(function() {
		if ($('#menu').hasClass('shown')) {
			$('#menu').removeClass('shown');
		} else {
			$('#menu').addClass('shown');
		}
	})
	$('.openable').click(function() {
		if ($('.openable').hasClass('open')) {
			$('.openable').removeClass('open');
		} else {
			$('.openable').addClass('open');
		}
		
	});
	if ($('#menu').hasClass('shown')) showMenu();
}

function showMenu() {
	if ($('#topBar button[name="menu"]').attr('aria-checked') === 'false') {
		if ($('#menu').attr('aria-frozen') === 'true') return false;

		$("#menu").addClass("shown");
		$('#topBar button[name="menu"]').attr('aria-checked', 'true');
		$('#menu').attr('aria-frozen', 'true');
		setTimeout(function () {
			$('#menu').attr('aria-frozen', '');
		}, 500);
	} else {
		if ($('#menu').attr('aria-frozen') === 'true') return false;
		$("#menu").removeClass("shown");
		$('#topBar button[name="menu"]').attr('aria-checked', 'false');
		$('#menu').attr('aria-frozen', 'true');
		setTimeout(function () {
			$('#menu').attr('aria-frozen', '');
		}, 500);
	}
}

function hideMenu() {
	$('#menu').css({
		'-webkit-transition': 'none',
		'-moz-transition': 'none',
		'-ms-transition': 'none',
		'-o-transition': 'none',
		'transition': 'none'
	});
	setTimeout(function () {
		$("#menu").removeClass("shown");
		$('#topBar button[name="menu"]').attr('aria-checked', 'false');
		setTimeout(function () {
			$('#menu').removeAttr('style');
		}, 10);
	}, 10);
}