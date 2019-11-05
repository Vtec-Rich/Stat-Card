"use strict";

var requestURL = '/app/data/player-stats.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var json = request.response;
	var players;
	var playerName;
	var playerId;
	var playerIdOnLoad = 4916;

	var selectBox = document.getElementById('player-select');
	for(var i = 0; i < json.players.length; i++) {
	    players = json.players[i];
	    playerName = players.player.name.first + ' ' + players.player.name.last;
	    playerId = players.player.id;
	    selectBox.options.add( new Option(playerName, playerId) );
	}
	// show player onload
	LoadPlayerStats(playerIdOnLoad);
}

document.getElementById('player-select').addEventListener("change", function() {
    var playerId = document.getElementById('player-select').options[document.getElementById('player-select').selectedIndex].value;
    LoadPlayerStats(playerId);
});

function LoadPlayerStats(playerId) {
	var json = request.response;
	var players;
	var playerName;
	var position;
	var goals = 0;
	var fwd_pass = 0;
	var goal_assist = 0;
	var appearances = 0;
	var mins_played = 0;
	var backward_pass = 0;
	var playerNumberImg;
	var club;

    for(var i = 0; i < json.players.length; i++) {
    	players = json.players[i];

	    if (playerId == players.player.id) {
	    	for (var key in players.stats) {
			   	//goals
			   	if (players.stats[key].name == 'goals') {
			   		goals = players.stats[key].value;
			   	}
			   	//fwd_pass
			   	if (players.stats[key].name == 'fwd_pass') {
			   		fwd_pass = players.stats[key].value;
			   	}
			   	// goal_assist
			   	if (players.stats[key].name == 'goal_assist') {
			   		goal_assist = players.stats[key].value;
			   	}
			   	//appearances
			   	if (players.stats[key].name == 'appearances') {
			   		appearances = players.stats[key].value;
			   	}
			   	//mins_played
			   	if (players.stats[key].name == 'mins_played') {
			   		mins_played = players.stats[key].value;
			   	}
			   	//backward_pass
			   	if (players.stats[key].name == 'backward_pass') {
			   		backward_pass = players.stats[key].value;
			   	}
			}

			//update DOM
			document.getElementById('apps').innerHTML = appearances;
			document.getElementById('goals').innerHTML = goals;
			document.getElementById('assists').innerHTML = goal_assist;
			document.getElementById('gpm').innerHTML = (goals / appearances).toFixed(2);
			document.getElementById('ppm').innerHTML = ((backward_pass + fwd_pass) / mins_played).toFixed(2);
			playerName = players.player.name.first + ' ' + players.player.name.last;
			document.getElementById('player-name').innerHTML = playerName;
			position = players.player.info.positionInfo.split(" ");
			document.getElementById('player-position').innerHTML = position[position.length - 1];

	    	// change player image 
	    	playerNumberImg = "/app/assets/" + "p" + players.player.id + ".png";
	    	document.getElementById('main-player-img').src = playerNumberImg;

	    	// change club badge
	    	club = "club-" + players.player.currentTeam.id;
	    	document.getElementById('player-badge').className = "";
	    	document.getElementById('player-badge').classList.add(club);
	    }
	}
}