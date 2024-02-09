 function updatePoints () {
	var settings = {
		"url": "https://intergrated-40bd.restdb.io/rest/login",
		"method": "GET",
		"timeout": 0,
		"headers": {
		  "x-apikey": "65a78c8beb463b13995b4bdd"
		},
	  };

	  $.ajax(settings).done(function (response) {
		console.log(response);
		for (var i = 0; i < response.length; i++) {
			if (
				response[i].username === localStorage.getItem("username")
			) {
				response[i].points = localStorage.getItem("points");
				console.log(response[i].points);
				return;
			}
		}
	  });
};
function getPoints() {
	console.log("getPoints");
	var points = localStorage.getItem("points");
	document.getElementById(
		"point-counter"
	).innerHTML = "points : " + points;
}

function setquestions() {
	console.log("setquestions");
	var date = new Date();
	console.log(date);
	var settings = {
		url: "https://intergrated-40bd.restdb.io/rest/login",
		method: "GET",
		timeout: 0,
		headers: {
			"x-apikey": "65a78c8beb463b13995b4bdd",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for (var i = 0; i < response.length; i++) {
			if (
				response[i].username ===
				localStorage.getItem("username")
			) {
				var quizlast = response[i].quizlast;
				console.log(quizlast);
				if (
					quizlast < !date ||
					quizlast > !date
				) {
					var questions = 4;
					localStorage.setItem(
						"remaining-questions",
						questions
					);
				} else {
					var questions =
						response[i].remainingQuestions;
					localStorage.setItem(
						"remaining-questions",
						questions
					);
				}
			}
		}
		var questions = localStorage.getItem(
			"remaining-questions"
		);
		document.getElementById(
			"quiz-quiestion-left"
		).innerHTML =
			"questions remaining : " + questions;
			if (questions == 0) {
				document.getElementById("quiz-quiestion-left").style.disabled = true;
			}
	});
}
// updatePoints();
// setquestions();
// getPoints();
