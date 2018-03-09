$(document).ready(function(){

    $(".hamburger-nav").on("click", function(event){
        // $(".menu").fadeToggle("slow").toggleClass("menu-hide");
        event.stopPropagation();
        $(".menu").animate({
          height: 'toggle'
        });
    });
   
});

// if user clicks outside of the menu or clicks menu item it will close mobile menu
$(document).click( function(){
        $(".menu").animate({
            height: 'hide'
        });
    });




