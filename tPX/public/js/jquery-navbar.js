$(document).ready(function() {
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

// change color of navlinks on scroll
    $(function () {
        $(document).scroll(function () {
        var $nav = $(".navbar ul li a");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    }); 
    
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".nav");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
});