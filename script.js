$(document).ready(function(){

    // Set variables
    var timer = 25;
    var session = 25;
    var breakLength = 5;

    $("#timer").text(timer);

    // Break length setting
    $("button").click(function() {
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
        
        timer = session;

        //  something different if timer is running ??

    })

    // Session length setting


    // Start timer


    // When timer is finished, play alarm


    // Reset


    // Progress bar?


});