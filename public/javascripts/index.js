$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $(".homeNav, #aboutMeButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".text-main-container").offset().top
    }, 500);
});

    $(".projectsNav, #projectsButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    }, 500);
    });

    $(".contactNav").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 500);
    });


});
