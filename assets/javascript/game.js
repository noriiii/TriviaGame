// timer

window.onload = function() {
	countdown.start();
};

var intervalID;

var countdown = {

	time: 30,

	start: function() {
		intervalID = setInterval(countdown.count, 1000)
	},

	count: function() {
		countdown.time--;

		$("#countdown").text(countdown.time);
	}

};


// quiz

var answers = ["B","D", "A", "A"];
var correct = 0;
var mistakes = 0;


function getAnswers( radioName ) {
	var radios = document.getElementsByName( radioName );

	for (var i=0; i<radios.length; i++) {
		if(radios[i].checked) {
			return radios[i].value;
		}
	}
}



function getScore() {
	for (i = 0; i < answers.length; i++) {
		if(getAnswers("question"+i) === answers[i]) {
			correct++;
			console.log(getAnswers("question" + i));
			console.log(answers[i]);
		}
	}

	for (i = 0; i < answers.length; i++) {
		if(getAnswers("question"+i) !== answers[i]) {
			mistakes++;
		}
	}
}

function scorePage() {
	getScore();
	$("#scoreShow").html(correct);
	$("#mistakeShow").html(mistakes);
	$("#questionContainer").html(scoreContainer);
	};

$("#finish").on("click", function() {
	getScore();
	$("#scoreShow").html(correct);
	$("#mistakeShow").html(mistakes);
	$("#questionContainer").html(scoreContainer);
});

setTimeout(scorePage, 30000);