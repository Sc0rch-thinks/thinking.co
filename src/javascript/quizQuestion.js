function displayQuestion() {
	if (Number(localStorage.getItem("remaining-questions")) < 4) {
		document.getElementById("quiz-question4").style.display = "none";
	} else if (Number(localStorage.getItem("remaining-questions")) < 3) {
		document.getElementById("quiz-question3").style.display = "none";
	} else if (Number(localStorage.getItem("remaining-questions")) < 2) {
		document.getElementById("quiz-question2").style.display = "none";
	} else if (Number(localStorage.getItem("remaining-questions")) < 1) {
		document.getElementById("quiz-question1").style.display = "none";
	} else;

	var settings = {
		url: "https://intergrated-40bd.restdb.io/rest/question",
		method: "GET",
		timeout: 0,
		headers: {
			"x-apikey": "65a78c8beb463b13995b4bdd",
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		let shuffled = response
			.map((value) => ({
				value,
				sort: Math.random(),
			}))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		console.log(shuffled);
		document.getElementById("question1").innerHTML = shuffled[0].question;
		document.getElementById("option1.1").innerHTML = shuffled[0].option1;
		document.getElementById("option1.2").innerHTML = shuffled[0].option2;
		document.getElementById("option1.3").innerHTML = shuffled[0].option3;
		document.getElementById("option1.4").innerHTML = shuffled[0].option4;
		document.getElementById("question2").innerHTML = shuffled[1].question;
		document.getElementById("option2.1").innerHTML = shuffled[1].option1;
		document.getElementById("option2.2").innerHTML = shuffled[1].option2;
		document.getElementById("option2.3").innerHTML = shuffled[1].option3;
		document.getElementById("option2.4").innerHTML = shuffled[1].option4;
		document.getElementById("question3").innerHTML = shuffled[2].question;
		document.getElementById("option3.1").innerHTML = shuffled[2].option1;
		document.getElementById("option3.2").innerHTML = shuffled[2].option2;
		document.getElementById("option3.3").innerHTML = shuffled[2].option3;
		document.getElementById("option3.4").innerHTML = shuffled[2].option4;
		document.getElementById("question4").innerHTML = shuffled[3].question;
		document.getElementById("option4.1").innerHTML = shuffled[3].option1;
		document.getElementById("option4.2").innerHTML = shuffled[3].option2;
		document.getElementById("option4.3").innerHTML = shuffled[3].option3;
		document.getElementById("option4.4").innerHTML = shuffled[3].option4;

		// document
		// 	.getElementById("submit")
		// 	.addEventListener("click", function (e) {
		// 		e.preventDefault();
		// 		var answer1 = shuffled[0].correct;
		// 		if (
		// 			document.getElementById("answer1.1")
		// 				.checked &&
		// 			answer1 == shuffled[0].option1
		// 		) {

		// 			var correct = true;
		// 		} else if (
		// 			document.getElementById("answer1.2")
		// 				.checked &&
		// 			answer1 == shuffled[0].option2
		// 		) {
		// 			var correct = true;
		// 		} else if (
		// 			document.getElementById("answer1.3")
		// 				.checked &&
		// 			answer1 == shuffled[0].option3
		// 		) {
		// 			var correct = true;
		// 		} else if (
		// 			document.getElementById("answer1.4")
		// 				.checked &&
		// 			answer1 == shuffled[0].option4
		// 		) {
		// 			var correct = true;
		// 		} else {
		// 			var correct = false;
		// 		}
		//         console.log(correct);
		// 		if (correct == true) {
		// 			localStorage.setItem(
		// 				"points",
		// 				localStorage.getItem("points") +
		// 					shuffled[0].points
		// 			);
		// 			localStorage.setItem(
		// 				"remaining-questions",
		// 				localStorage.getItem(
		// 					"remaining-questions"
		// 				) - 1
		// 			);
		// 		}
		// 	});
		document.getElementById("submit").addEventListener("click", function (e) {
			e.preventDefault();
			var answer1 = shuffled[0].correct;
			if (
				document.getElementById("answer1.1").checked &&
				answer1 == shuffled[0].option1
			) {
				var correct = true;
			} else if (
				document.getElementById("answer1.2").checked &&
				answer1 == shuffled[0].option2
			) {
				var correct = true;
			} else if (
				document.getElementById("answer1.3").checked &&
				answer1 == shuffled[0].option3
			) {
				var correct = true;
			} else if (
				document.getElementById("answer1.4").checked &&
				answer1 == shuffled[0].option4
			) {
				var correct = true;
			} else {
				var correct = false;
			}
			if (correct == true) {
				localStorage.setItem(
					"points",
					Number(localStorage.getItem("points")) + shuffled[0].points
				);
				localStorage.setItem(
					"remaining-questions",
					Number(localStorage.getItem("remaining-questions")) - 1
				);
			}

			var answer2 = shuffled[1].correct;
			if (
				document.getElementById("answer2.1").checked &&
				answer2 == shuffled[1].option1
			) {
				var correct = true;
			} else if (
				document.getElementById("answer2.2").checked &&
				answer2 == shuffled[1].option2
			) {
				var correct = true;
			} else if (
				document.getElementById("answer2.3").checked &&
				answer2 == shuffled[1].option3
			) {
				var correct = true;
			} else if (
				document.getElementById("answer2.4").checked &&
				answer2 == shuffled[1].option4
			) {
				var correct = true;
			} else {
				var correct = false;
			}
			if (correct == true) {
				localStorage.setItem(
					"points",
					Number(localStorage.getItem("points")) + shuffled[1].points
				);
				localStorage.setItem(
					"remaining-questions",
					Number(localStorage.getItem("remaining-questions")) - 1
				);
			}
			var answer3 = shuffled[2].correct;
			if (
				document.getElementById("answer3.1").checked &&
				answer3 == shuffled[2].option1
			) {
				var correct = true;
			} else if (
				document.getElementById("answer3.2").checked &&
				answer3 == shuffled[2].option2
			) {
				var correct = true;
			} else if (
				document.getElementById("answer3.3").checked &&
				answer3 == shuffled[2].option3
			) {
				var correct = true;
			} else if (
				document.getElementById("answer3.4").checked &&
				answer3 == shuffled[2].option4
			) {
				var correct = true;
			} else {
				var correct = false;
			}
			if (correct == true) {
				localStorage.setItem(
					"points",
					Number(localStorage.getItem("points")) + shuffled[2].points
				);
				localStorage.setItem(
					"remaining-questions",
					Number(localStorage.getItem("remaining-questions")) - 1
				);
			}
			var answer4 = shuffled[3].correct;
			if (
				document.getElementById("answer4.1").checked &&
				answer4 == shuffled[3].option1
			) {
				var correct = true;
			} else if (
				document.getElementById("answer4.2").checked &&
				answer4 == shuffled[3].option2
			) {
				var correct = true;
			} else if (
				document.getElementById("answer4.3").checked &&
				answer4 == shuffled[3].option3
			) {
				var correct = true;
			} else if (
				document.getElementById("answer4.4").checked &&
				answer4 == shuffled[3].option4
			) {
				var correct = true;
			} else {
				var correct = false;
			}
			if (correct == true) {
				localStorage.setItem(
					"points",
					Number(localStorage.getItem("points")) + shuffled[2].points
				);
				localStorage.setItem(
					"remaining-questions",
					Number(localStorage.getItem("remaining-questions")) - 1
				);
			}
			var jsondata = {
				points: localStorage.getItem("points"),
				quizlast: new Date(),
				remainingQuestions: localStorage.getItem("remaining-questions"),
			};
			var settings = {
				url:
					"https://intergrated-40bd.restdb.io/rest/login/" + localStorage.getItem("id"),
				method: "PUT",
				headers: {
					"content-type": "application/json",
					"x-apikey": "65a78c8beb463b13995b4bdd",
				},
				processData: false,
				data: JSON.stringify(jsondata),
			};

			$.ajax(settings).done(function (response) {
				console.log(response);
			});
		});
	});
}

// displayQuestion();
