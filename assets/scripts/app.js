$(document).ready(function() {
    $('.nav').on('click', 'li', function() {
        $(this).addClass('animated pulse').siblings().removeClass('animated pulse');
    });


    $('a[href^="#"]').on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // display
        $(hash).siblings().hide();
        $(hash).css('display','inline').addClass('animated fadeIn').siblings().removeClass('animated fadeIn');

    });


    $('[data-toggle="popover"]').popover({ trigger: "hover", placement: "bottom" });


});

