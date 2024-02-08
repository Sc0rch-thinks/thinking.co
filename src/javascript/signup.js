document
	.getElementById("signup-button")
	.addEventListener("click", function (e) {
		e.preventDefault();
		var email =
			document.getElementById("email").value;
		var username =
			document.getElementById("username").value;

		var password =
			document.getElementById("password").value;
		var passwordconfirm = document.getElementById(
			"password-confirm"
		).value;
		if (password !== passwordconfirm) {
			alert("Passwords do not match");
			return;
		} else {
			var jsondata = {
				username: username,
				email: email,
				password: password,
				points: 0,
			};
			console.log(jsondata);
			var settings = {
				url: "https://intergrated-40bd.restdb.io/rest/login",
				method: "POST",
				timeout: 0,
				headers: {
					"content-type": "application/json",
					"x-apikey": "65a78c8beb463b13995b4bdd",
				},
				data: JSON.stringify(jsondata),
			};

			$.ajax(settings).done(function (response) {
				console.log(response);
				if (response) {
					alert("Account created successfully");
					window.location.href = "login.html";
				}
			});
		}
	});

