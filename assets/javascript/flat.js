var panel = $("#quiz-area");


var questions = [{
    question: "How do you know your tire is flat? ",
    answers: ["I'm not sure, ask my uber driver? ", "The only round part is on top ", "I would ask if it identifies as flat. ", "Welp... time to buy a new car. "],
    correctAnswer: "The only round part is on top ",
    video: "https://www.youtube.com/watch?v=xuivYRmIACM"

}, {
    question: "What is the first step once you've determined the authenticity of the flatness of the tire?",
    answers: ["Look in the glove box for the owners manual to identify the location of the spare and jack ", "Look up the number for 911. ", "Get a selfie of me and the flat. ", "Who is Jack? My uber driver? "],
    correctAnswer: "Look in the glove box for the owners manual to identify the location of the spare and jack ",
    video: "https://www.youtube.com/watch?v=VjEydFYr9tI"

}, {
    question: "The jack is out and the tire iron. What other information do you need from the owner's manual?",
    answers: ["How to tune Sirius XM! ", "The proper way to adjust my seatbelt so that it won't wrinkle my vintage flannel. ", "How to tell if the check engine light is important. ", "How to drive in snow. ", "Where on the frame to place the jack. "],
    correctAnswer: "Where on the frame to place the jack. ",
    video: "https://www.youtube.com/watch?v=BLOUFrncG7E"
}, {
    question: "When should you losen the lugnuts?",
    answers: ["A little before the car is jacked up to stop wheel spin ", "Only after the car is all the way jacked up. ", "I only eat free range, hormone free nuts. ", "I just rocked a bodypump class at the gym so I'm already jacked. "],
    correctAnswer: "A little before the car is jacked up to stop wheel spin ",
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
    panel.append("<a href='https://www.youtube.com/watch?v=Bq5To-ZH160&t=5s' target= 'about blank'>Video Tutorial:</a>");
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