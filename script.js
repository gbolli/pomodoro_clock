$(document).ready(function(){

    // Set variables
    var session = 25;
    var breakLength = 5;
    var timerStarted = false;
    var timerIsRunning = false;

    $("#tomato").text(session + ":00");

    // Session and Break minutes settings
    $("#settings button").click(function() {
        var action = $(this).attr('id');
        if (action === "sminus") {
            session--;
            $("#stotal").text(session);
        }
        else if (action === "splus") {
            session++;
            $("#stotal").text(session);
        }
        else if (action === "bminus") {
            breakLength--;
            $("#btotal").text(breakLength);
        }
        else {
            breakLength++;
            $("#btotal").text(breakLength);
        }
        $("#tomato").text(session + ":00");
    })

    $("#reset").click(function() {
        timerStarted = false;
        timerIsRunning = false;
        clearInterval(timerFunc);
        $("#tomato").text(session + ":00");
    })


    // Start timer
    $("#pomodoro, #tomato").click(function() {
        // pause timer if currently running
        if (!timerStarted) {
            timerIsRunning = true;
            timerStarted = true;
            timerFunc(session * 60);
        } else {
            if (timerIsRunning) {
                timerIsRunning = false;
            } else {
                timerIsRunning = true;
            }
        }
    });

    // Timer function (duration in seconds)
    var timerFunc = function startTimer(duration) {
        var timer = duration
        var minutes;
        var seconds;

        setInterval(function () {
            if (timerIsRunning) {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                $("#tomato").text(minutes + ":" + seconds);
                timer--;

                if (timer < 0) {
                    // Stop timer
                    timerStarted = false;
                    // Play alarm

                    // Begin break timer
                    
                    timer = duration;
                }
            }
            else {
                //  ** PAUSE **
            }
        }, 1000);
    };

    // Reset button?


    // Progress bar?


});