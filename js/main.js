
$(document).ready(function () {
    
    $(document).on("scroll", onScroll);

    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        
        $('a').each(function () {
            $(this).removeClass('navactive');
        });

        
        $(this).addClass('navactive');

        
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    
    if ($('#portfolio').length) { 
        $('#portfolio').mixitup({
            targetSelector: '.item',
            transitionSpeed: 350
        });
    }

    
    if ($('#datepicker').length) { 
        $("#datepicker").datepicker();
    }
});


function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('.nav li a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (
            refElement.position().top <= scrollPosition &&
            refElement.position().top + refElement.height() > scrollPosition
        ) {
            $('ul.nav li a').removeClass("navactive");
            currentLink.addClass("navactive");
        } else {
            currentLink.removeClass("navactive");
        }
    });
}
