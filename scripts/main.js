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
			$('nav').show();
		},

		myLeaderBoard: function() {
			$('section').hide();
			$('#leaderBoardScreen').show();
			$('nav').show();
		},

		mySettings: function() {
			$('section').hide();
			$('#settingsScreen').show();
			$('nav').show();
		},
	});

	$('section').hide();
	$('nav').hide();
	$('#loading').show();

	setTimeout(function() {
		$('nav').show();
		r.navigate('play', { trigger: true });
	}, 4000);

var r = new Router();
Backbone.history.start();

});
