const apikey = "65a78c8beb463b13995b4bdd";

document
	.getElementById("sign-up")
	.addEventListener("click", function (e) {
		e.preventDefault();
        console.log("sign-up");
		let username =
			document.getElementById("username").value;
		let password =
			document.getElementById("password").value;
		let email =
			document.getElementById("email").value;
		var jsondata = {
			username: username,
			password: password,
			email: email,
		};
		console.log(jsondata);
		var settings = {
			url: "https://intergrated-40bd.restdb.io/rest/login",
			method: "POST",
			headers: {
				"content-type": "application/json",
				"x-apikey": apikey,
				"cache-control": "no-cache",
			},
			processData: false,
			data: JSON.stringify(jsondata),
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	});
