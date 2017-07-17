/**
 * Created by nancyli on 4/5/17.
 */
$(document).ready(function(){
    $("#aboutcontent").click(function() {
        $('html,body').animate({
                scrollTop: $("#aboutcontent").offset().top},
            'slow');
    });

    var num = 0; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
});