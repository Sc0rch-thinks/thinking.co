document
	.getElementById("login-button")
	.addEventListener("click", function (e) {
		e.preventDefault();
		var username =
			document.getElementById("username").value;
		var password =
			document.getElementById("password").value;
		console.log(username);
		console.log(password);
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
					response[i].username === username &&
					response[i].password === password
				) {
					alert("Login successful");
					window.location.href = "index.html";
                    localStorage.setItem("username",response[i].username);
                    localStorage.setItem("points",response[i].points);
					localStorage.setItem("id",response[i]._id);
					localStorage.setItem("remaining-questions",response[i].remainingQuestions);
					localStorage.setItem("inventory",response[i].inventory);
					return;
				}
			}alert("Invalid username or password");
		});
	});
