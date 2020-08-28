// Burger menu ======================
$(document).ready(function(){
    $(".burger__menu").click(function() {
        $(".burger__links").slideToggle(500);
    });

    // Scrolling =====================
    $('.btn__call').on("click", function(e){
        e.preventDefault();
            var top = $("#form").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });

    $('.price__btn').on("click", function(e){
        e.preventDefault();
            var top = $("#form").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
});