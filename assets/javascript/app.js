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

var preTest = {

    correct: 0,
    incorrect: 0,
    counter: 120,
    videoArray: [],

    countdown: function() {
        preTest.counter--;
        $("#counter-number").html(preTest.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            preTest.done();
        }
    },



    start: function() {

        $("#start").remove();
        $(".try h1").remove();

        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append("<input type = 'radio' name='questions-" + i +
                    "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);

            }
        }
        panel.append("<button id = 'done' class='col-sm-offset-3'>Done</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                preTest.correct++;
            } else {
                videoArray.push(questions[0].video);
                preTest.incorrect++;
            }
            
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
                preTest.correct++;
            } else {
                preTest.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
                preTest.correct++;
            } else {
                preTest.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
                preTest.correct++;
            } else {
                preTest.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
                preTest.correct++;
            } else {
                preTest.incorrect++;
            }
        });
        this.result();
    },
    result: function() {
        $("#sub-wrapper h2").remove();

        panel.html("<h2>Finished</h2>");
        panel.append("<h2>Correct Answers: " + this.correct + "<h2>");
        panel.append("<h2>Incorrect Answers: " + this.incorrect + "<h2>");
        panel.append("<h2>Unanswered: " + (questions.length - (this.correct + this.incorrect)) + "</h2>");
        panel.append("<h2>Video Tutorial: </h2>");
        panel.append("<a href='https://www.youtube.com/watch?v=xuivYRmIACM' target= 'about blank'>Video Tutorial:</a>");
    }

};

$(document).on("click", "#start", function() {
    preTest.start();
});

$(document).on("click", "#done", function() {
    preTest.done();


});
