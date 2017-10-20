$(function() {
    $(".container section").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
           
        }
    });

    //Set some options later
    $("#test").swipe( {fingers:2} );
});