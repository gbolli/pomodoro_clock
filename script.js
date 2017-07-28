$(document).ready(function(){

    // Set variables
    var session = 0.1; // var session = 25;
    var breakLength = 5;
    var timerStarted = false;
    var timerIsRunning = false;
    var isBreakTime = false;
    var timerFunc;  // setInterval variable

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
        console.log("Reset function run");
        timerStarted = false;
        timerIsRunning = false;
        clearInterval(timerFunc);
        console.log("Cleared interval?");
        displayTomatoClock();
        console.log("displayed the clock time from session");
    }

    function initializeTimer() {
        timerIsRunning = true;
        timerStarted = true;
        if (!isBreakTime) {
            console.log("running session runtimer() with value " + session);
            runTimer(session * 60);
        } else {
            console.log("running breakLength runtimer() with value " + breakLength);
            runTimer(breakLength * 60);
        }
        var startSnd = new Audio('https://www.soundjay.com/button/sounds/button-6.mp3');
        startSnd.play();
    }

    $("#reset").click(function() {
        console.log("reset button click");
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
        var timer = duration;
        console.log("runTimer function initiated");
        console.log("timer = " + timer + " : duration = " + duration);
        var minutes;
        console.log("initiated minutes = " + minutes);
        var seconds;
        console.log("initiated seconds = " + seconds);

        // Why isn't this timerFunc running properly the second time?   Minutes and Seconds calculating as 0 for breakLength run

        timerFunc = setInterval(function () {
            if (timerIsRunning) {
                console.log("timerFunc started");
                minutes = parseInt(timer / 60, 10);
                console.log("minutes set to " + minutes + "timer: " + timer);
                seconds = parseInt(timer % 60, 10);
                console.log("seconds set to " + seconds);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                $("#tomato").text(minutes + ":" + seconds);
                timer--;

                if (timer <= 0) {
                    // Stop timer
                    timerStarted = false;
                    timerIsRunning = false;
                    // Play alarm
                    console.log("playing finish sound");
                    var snd = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3");
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

    }

    // Progress bar?


});