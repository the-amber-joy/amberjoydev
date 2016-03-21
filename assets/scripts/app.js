$(document).ready(function() {
    $('.nav').on('click', 'li', function() {
        $(this).addClass('animated pulse').siblings().removeClass('animated pulse');
        $(this).addClass('open').siblings().removeClass('open');
    });
    //
    //$('.nav-links')
    //    .on('mouseover', 'li', function() {
    //    $(this).addClass('animated infinite pulse');
    //})
    //    .on('mouseout', 'li', function() {
    //    $(this).removeClass('animated infinite pulse');
    //});

    $('a[href^="#"]').on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // display
        $(hash).siblings().hide();
        $(hash).show().addClass('animated fadeIn').siblings().removeClass('animated fadeIn');

    });

});

