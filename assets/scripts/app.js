$(document).ready(function() {
    $('.nav').on('click', 'li', function() {
        $(this).addClass('animated pulse').siblings().removeClass('animated pulse');
        $(this).addClass('open').siblings().removeClass('open');
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $(hash).siblings().hide();
        $(hash).show().addClass('animated fadeIn').siblings().removeClass('animated fadeIn');
    });


    $('.nav-links').on('mouseover', 'li', function() {
            var thisClass = $(this).attr('class');
            $(this).parent().parent().parent().find('#'+thisClass).show().siblings().hide();
        })
        .on('mouseout', 'li', function() {
        var thisClass = $(this).attr('class');
            $(this).parent().parent().parent().find('#contact').show();
            $(this).parent().parent().parent().find('#'+thisClass).hide();
    })
});