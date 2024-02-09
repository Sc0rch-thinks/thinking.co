document.getElementById("gacha").addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("points") < 250) {
        alert("You do not have enough points to play");
        return;
    }else {
	var random = Math.floor(Math.random() * 101);
	console.log(random);
	if (random > 0 && random <= 5) {
		alert("Congratulations! You have won a Ori Figurine");
        var prize = "Ori Figurine";
	}else if (random > 5 && random <= 10) {
        alert("Congratulations! You have won a Naru Figurine");
        var prize = "Naru Figurine";
    }else if (random > 10 && random <= 20) {
        alert("Congratulations! You have won a steam $10 gift card");
        var prize = "steam $10 gift card";
    }else if (random > 20 && random <= 25) {
        alert("Congratulations! You have won a steam $20 gift card");
        var prize = "steam $20 gift card";
    }else {
        alert("Sorry, you have won nothing");}
        localStorage.setItem("points",localStorage.getItem("points")-250);
        localStorage.setItem("inventory",localStorage.getItem("inventory")+prize);
        window.location.href = "quiz-hub.html";}

});
