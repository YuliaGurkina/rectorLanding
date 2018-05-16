$(function () {
	$('.order-btn').on('click', function () {
		$(this).siblings('.form').slideDown( "slow", "linear" );
		$(this).parent('.form-order').addClass('active');
	});


	$('.menu-burger').on('click', function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('menu-closed');
	});


	$('.card-btn').on('click', function () {
		$('.card-no').toggleClass('conceal');
		$('.card-number').toggleClass('conceal');

		if ($('.card-number').hasClass('conceal')) {
			$(this).html('Назад к карте')
		} else {
			$(this).html('нет карты')
		}
	});
});