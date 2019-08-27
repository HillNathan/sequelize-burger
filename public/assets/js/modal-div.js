$( document ).ready(function() {
    $("#clear-alert").on('click', function() {
        // Click listener for the "OK" button in the alert box to be clicked. 
        // When it is cleared, this hides the alert until it is needed again.
        event.preventDefault();
        $(".my-alert").hide();
    });
}); 
//------------------------------------------------------------|
//   end of document onload function for DOM manipulation     |
//------------------------------------------------------------|


function showAlert(alertText) {
    //---------------------------------------------------------------------------------------//
    // This function shows a modal alert div, and places the alertText into the display div. //
    //---------------------------------------------------------------------------------------//

    // define the variables that center the div on the page based on the height and width of the page
    //  and the height and width of the alert, which defaults to 100px x 350px
    var alertTop = Math.floor((($(window).height())/2)-50);
    var alertLeft = Math.floor((($(window).width())/2) - 175);

    // set the alert text
    $(".alert-text").text(alertText);

    // set the left and top attributes of the div to re-center the div in the wondow
    $(".my-alert").css('top', alertTop);
    $(".my-alert").css('left', alertLeft);

    //show the div as a modal alert
    $(".my-alert").show();
}
