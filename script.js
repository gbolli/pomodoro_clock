$(document).ready(function(){

    // Set variables
    var session = 25;
    var breakLength = 5;
    var timerStarted = false;
    var timerIsRunning = false;
    var isBreakTime = false;

    displayTomatoClock();

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
        displayTomatoClock();
    })

    function displayTomatoClock() {
        if (!timerStarted) {
            if (!isBreakTime) {
                $("#tomato").text(session + ":00");
            } else {
                $("#tomato").text(breakLength + ":00");
            }
        }
    }

    function reset() {
        timerStarted = false;
        timerIsRunning = false;
        clearInterval(timerFunc);
        displayTomatoClock();
    }

    function initializeTimer() {
        timerIsRunning = true;
        timerStarted = true;
        if (!isBreakTime) {
            runTimer(session * 60);
        } else {
            runTimer(breakLength * 60);
        }
        var startSnd = new Audio('https://www.soundjay.com/button/sounds/button-6.mp3');
        startSnd.play();
    }

    $("#reset").click(function() {
        reset();
    })

    // Start timer (click tomato)
    $("#pomodoro, #tomato").click(function() {
        // pause timer if currently running
        if (!timerStarted) {
            initializeTimer();
        } else {
            if (timerIsRunning) {
                timerIsRunning = false;
            } else {
                timerIsRunning = true;
            }
        }
    });

    // Timer function (duration in seconds)
    function runTimer(duration) {
        var timer = duration
        console.log("setTimer function initiated");
        var minutes;
        var seconds;
        var snd = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3");  // setup alarm so it buffers

        var timerFunc = setInterval(function () {
            if (timerIsRunning) {
                console.log("timerFunc started");
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                $("#tomato").text(minutes + ":" + seconds);
                timer--;

                if (timer <= 0) {
                    // Stop timer
                    timerStarted = false;
                    timerIsRunning = false;
                    // Play alarm
                    snd.play();
                    // Begin break timer
                    isBreakTime = true;
                    displayTomatoClock();
                }
            }
            else {
                //  ** PAUSE **
            }
        }, 1000);

    };

    // Progress bar?


});