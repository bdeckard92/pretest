var panel = $("#quiz-area");


var questions = [{
    question: "Which is the first step in boiling an egg?",
    answers: ["Make sure you have free range, hormone free, organic eggs ", "Fill a pan with water ", "Call the fire department and put them on hold ", "Just order take out "],
    correctAnswer: "Make sure you have free range, hormone free, organic eggs ",
    video: "https://www.youtube.com/watch?v=xuivYRmIACM"

}, {
    question: "Assuming you have the required utensils and ingredients to boil an egg, what would be your next step?",
    answers: ["Boil the water", "Place eggs in pan and cover with water", "Look up the number for 911", "What the heck does 'cover with water' mean?"],
    correctAnswer: "Place eggs in pan and cover with water",
    video: "https://www.youtube.com/watch?v=VjEydFYr9tI"

}, {
    question: "We'll give you the benefit of the doubt that you know you have to turn on your stove. After that what will you do?",
    answers: ["Take picture of eggs in pan for Instagram", "Add Sriracha", "Bring water to a boil over medium heat", "Burn hand by trying to pop bublles in the water"],
    correctAnswer: "Bring water to a boil over medium heat",
    video: "https://www.youtube.com/watch?v=BLOUFrncG7E"
}, {
    question: "Once the water boils what should you do?",
    answers: ["Run away before the water explodes", "Grab eggs really quick, bare handed out of boiling water", "I don't even like boiled eggs", "Remove from heat and cover for 15 minutes"],
    correctAnswer: "Remove from heat and cover for 15 minutes",
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

    panel.append("<button id='done' class='col-mid-offset-3'>Done</button>");
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
    panel.append("<a href='https://www.youtube.com/watch?v=xfy8aqushqU' target= 'about blank'>Video Tutorial:</a>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
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