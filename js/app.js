import '../css/app.scss';
import $ from "jquery";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'waypoints';
import 'scrollTo';




$('.dim').click(function(event){
    var isDim = $(event.target).is('.dim');
    if(isDim){ //make sure I am a dim element
        $('.checkbox', this).toggle(); // p00f
    }

});




/**
 * EXAMPLE JS STARTS
 */

/**
 * EXAMPLE JS ENDS
 */
