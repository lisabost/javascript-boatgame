$(document).ready(function () {
        //event handlers
        $(":radio").change(answerQuestion);
        $("form").submit(scoreQuiz);

        const POINTS_PER_QUESTION = 1;
        const TOTAL_QUESTIONS = 5;
        var currentQuestion = 1;

        var answers = {
            correct: 0,
            wrong: 0,
            totalPoints: 0
        }

        //show the first question on the page
        $("#q1").slideToggle();

        //other functions
        function answerQuestion()
        {
            var checkedRadio = $(this);
            var correctAmount = checkedRadio.data("correct");
            var wrongAmount = checkedRadio.data("wrong");

            answers.correct += correctAmount;
            answers.wrong += wrongAmount;
            answers.totalPoints += POINTS_PER_QUESTION;

            hideCurrent();
        }
        //jquery animation to hide current question
        function hideCurrent() {
            $("#q" + currentQuestion).slideToggle(showNext);
        }


        //jquery animation to either show the next question or show button to finish quiz
        function showNext() {
            if(currentQuestion === TOTAL_QUESTIONS) {
                //provide a function to call when the fade animation is finished
                $("#scoreQuizButton").fadeIn(scrollDown);
            } else {
                //next question
                currentQuestion++;
                //provide a function to call when the slide animation is finished
                $("#q" + currentQuestion).slideToggle(scrollDown);
            }
        }

        //keep viewport scrolled to the bottom of the screen
        function scrollDown() {
            $("html, body").animate({scrollTop: $(document).height()}, "slow");
        }

        //calculate the person's score
        function scoreQuiz(event) {
            event.preventDefault();

            var score = {};
            score.percentCorrect = Math.round(answers.correct / answers.totalPoints * 100);
            score.percentWrong = Math.round(answers.wrong / answers.totalPoints * 100);

            if (score.percentCorrect === 100) {
                score.winner = "You definitely know your boats!"
            } else if (score.percentCorrect >= 60) {
                score.winner = "You could learn a bit more about the boats"
            } else if (score.percentWrong > score.percentCorrect) {
                score.winner = "You should study your boat facts more"
            }

            $("#description").text(score.winner);

            $("#scoreQuizButton").fadeOut(showResults);
        }

        function showResults() {
            $("#results").slideToggle();
        }

    }
);