var homeDisplayScore = document.getElementById("home-score");
var guestDisplayScore = document.getElementById("guest-score");

// Check which team got a score
// get current score of team
// add current score + points
// update inner html with the new score
function incScore(points, team) {
    if (team === "home") {
        var currentScore = parseInt(homeDisplayScore.innerHTML, 10);
        var newScore = currentScore + points;
        homeDisplayScore.innerHTML = newScore;
    } else {
        var currentScore = parseInt(guestDisplayScore.innerHTML, 10);
        var newScore = currentScore + points;
        guestDisplayScore.innerHTML = newScore;
    }
}