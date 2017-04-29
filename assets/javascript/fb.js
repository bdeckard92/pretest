var panel = $("#quiz-area");


var questions = [{
    question: "Facebook is good for which of the following?",
    answers: ["Posting pictures of my relationship so everyone will think me and bae are cute ", "A community of rational thinkers where honest and open political discourse can occur ", "A place where I can state my political opinion and no one should be able to dissagree ", "A trivial passtime that can be fun when not taken too serioulsy "],
    correctAnswer: "A trivial passtime that can be fun when not taken too serioulsy ",
    video: "https://www.youtube.com/watch?v=xuivYRmIACM"

}, {
    question: "If someone hurt your feelings or wronged you how should you react?",
    answers: ["Talk to the person face to face and tell them how their actions caused you harm ", "Post on The Facebooks that you are so done with social media and all the bs and then return to social media 17 and a half minutes later because those like buttons are like crack ", "Use The Facebooks to out the perpetrator and any moral defects he or she may have as in, 'Well, so in so was making out with other so in so anyway so I don't care what they say ", "Post a super ambigous passive aggressive note on The Facebooks "],
    correctAnswer: "Talk to the person face to face and tell them how their actions caused you harm ",
    video: "https://www.youtube.com/watch?v=VjEydFYr9tI"

}, {
    question: "Which is the best response to an idiotic and political comment of a troll who used pictures of your Aunt Sally's retirment party as an opportunity to editorialize on the current, past, or future political party in power?",
    answers: ["Ignore it and go outside ", "Drop a sarcasm bomb on them that is so dope they won't even know it's sarcasm ", "Calmly point out that only a total moron who hates America and puppies would ever think along those political lines ", "Remember that anyone who dissagrees with you is obvioulsy stupid ", "Wait... I don't have an Aunt Sally"],
    correctAnswer: "Ignore it and go outside ",
    video: "https://www.youtube.com/watch?v=BLOUFrncG7E"
}, {
    question: "How should you respond on The Facebooks when someone accusses you of hating America and puppies?",
    answers: ["Post a three page diclaimer about how you actually used to have a puppy named America and tell several other stories about how great you are ", "Turn of The Facebooks and go outside ", "Obvoiulsy the only response is to turn the question back on them, 'if you love America and Puppies so much how come you hate America and Puppies?!?!", "Write a strongly worded letter to Mark Zuckerburg indicating your need for an unlike button "],
    correctAnswer: "Turn of The Facebooks and go outside ",
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
    panel.append("<a href='https://www.youtube.com/watch?v=T-EobBe-hdI' target= 'about blank'>Video Tutorial:</a>");
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