const password = "750750";

$(".chrome").hide();

$("#password").on("focusin", () => {
	$(".arrow").css("display", "inline-flex");
});

$(".arrow").on("click", () => {
	if ($("#password").val().toUpperCase() === password) {
		$(".content").hide();
		$(".chrome").css("display", "block");
	} else {
		$("#password").effect("shake");
	}
});
