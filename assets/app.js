var panel = $("#quiz-area");

var questions = [{}]

var preTest = {
	correct: 0,
	incorrect: 0,

}

start: function(){

	for (var 1=0; i < questions.length; i ++){
		panel.append("<h2>" + questions[i].question + "</h2>");
		for (var j = 0; j < questions[i].answerrs.length; j ++) {
			panel.append("<input type = 'radio' name='questions'" + i +
				"'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
				
		}
	}
panel.append("<button id = 'done'>Done</button>");
},

done: function(){
	$.each($("input[name='question-0']:checked"), function(){
		if ($(this).val() === questions[0].correctAnswer) {
			game.correct++;
		}
	})
}
