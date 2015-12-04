'use strict';

$(document).ready(function() {
	var Router = Backbone.Router.extend({
		routes: {
			'play': 'goPlay',
			'leaderboard': 'myLeaderBoard',
			'settings': 'mySettings',
		},

		goPlay: function() {
			$('section').hide();
			$('#playScreen').show();
		},

		myLeaderBoard: function() {
			$('section').hide();
			$('#leaderBoardScreen').show();
		},

		mySettings: function() {
			$('section').hide();
			$('#settingsScreen').show();
		},
	});

	$('section').hide();
	$('nav').hide();
	$('#loading').show();

	setTimeout(function() {
		$('#loading').hide();
		$('nav').show();
	}, 4000);
});

var r = new Router();
Backbone.history.start();

