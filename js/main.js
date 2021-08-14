$(function () {
	$(".carousel").carousel({
		interval: false,
	});

	$(".settBox .fa-gear").click(function () {
		$(this).prev().fadeToggle();
	});

	// Check If Theme_color Saved In LocalStorage
	var color = localStorage.getItem("color-theme");
	if (color) {
		$('link[href*="theme"]').attr("href", color);
	}

	// ChangeColor
	$(".color-box ul li").click(function () {
		$('link[href*="theme"]').attr("href", $(this).data("theme"));

		localStorage.setItem("color-theme", $(this).data("theme"));
	});

	// overlay-loading
	$(window).load(function () {
		$(".overlay-loading .sk-chase").fadeOut(1000, function () {
			$("body").css("overflow", "auto");
			$(this)
				.parent()
				.fadeOut(500, function () {
					$(this).remove();
				});
		});
	});

	// Button toTop
	var topTop = $(".topTop");

	$(window).scroll(function () {
		$(this).scrollTop() >= 700 ? topTop.fadeIn(1000) : topTop.fadeOut(500);
	});

	topTop.click(function () {
		$("body, html").animate(
			{
				scrollTop: 0,
			},
			1000
		);
	});
});
