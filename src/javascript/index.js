document.getElementById("overlay").style.display =
	"none";
document
	.getElementById("menu-icon")
	.addEventListener("click", function (e) {
		// Prevent default action of the button
		e.preventDefault();
		document.getElementById(
			"overlay"
		).style.display = "block";
	});
document
	.getElementById("close")
	.addEventListener("click", function (e) {
		// Prevent default action of the button
		e.preventDefault();
		document.getElementById(
			"overlay"
		).style.display = "none";
	});

