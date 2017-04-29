var panel = $("#quiz-area");


var questions = [{
    question: "Which reaction uses energy from sunlight to convert Carbon Dioxide to glucose?",
    answers: ["Cellular Respiraton", "Photosynthesis", "Chemosynthisis", "Fermentation"],
    correctAnswer: "Photosynthesis",
    video: "https://www.youtube.com/watch?v=xuivYRmIACM"

}, {
    question: "Which reaction breaks down glucose in the presence of oxygen to release chemical energy?",
    answers: ["Cellular Respiraton", "Photosynthesis", "Chemosynthisis", "Fermentation"],
    correctAnswer: "Cellular Respiraton",
    video: "https://www.youtube.com/watch?v=VjEydFYr9tI"

}, {
    question: "Which reaction uses energy from breaking down inorganic molecules to make glucose?",
    answers: ["Cellular Respiraton", "Photosynthesis", "Chemosynthisis", "Fermentation"],
    correctAnswer: "Chemosynthisis",
    video: "https://www.youtube.com/watch?v=BLOUFrncG7E"
}, {
    question: "Which reaction breaks down glucose without oxygen to make energy?",
    answers: ["Cellular Respiraton", "Photosynthesis", "Chemosynthisis", "Fermentation"],
    correctAnswer: "Fermentation",
    video: "https://www.youtube.com/watch?v=XREALVgxBEI"


}]


var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,
  videoArray: [0],

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();
    $(".hope").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
      	
      	console.log(questions[0].video);
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();
if (this.correct<3){

    panel.html("<h2>You missed more than three questions about Cellular Energy</h2>");
    panel.html("<h2>Watch this video and come back and try again.</h2>");
    panel.append("<a href='https://www.youtube.com/watch?v=xuivYRmIACM' target= 'about blank'>Video Tutorial:</a>");
    //panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    //panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    //panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  } else
  panel.html("<h2>Great Job!");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});