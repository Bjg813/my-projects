$(document).ready(function() {
    (function ($) {
        //slideshow interval
        var autoSwap = setInterval( swap,10000);
    
        //pause/unpause slideshow on mouse hover
        $('ul, span').hover(
              function () {
            clearInterval(autoSwap);
        },
    
        function () {
           autoSwap = setInterval( swap,10000);
        });
    
        //variables
        var items = [];
        var startItem = 1;
        var position = 0;
        var itemCount = $('.carousel li.items').length;
        var leftpos = itemCount;
        var resetCount = itemCount;
    
        //swap images function
        function swap(action) {
              var direction = action;
          
              //previous button
              if(direction == 'counter-clockwise') {
                var leftitem = $('.left-pos-2').attr('id') - 1;
                console.log(leftitem);
                if(leftitem <= 0) {
                  leftitem = itemCount;
                  console.log(leftitem);
                }
                console.log('prev');
                $('.right-pos-2').removeClass('right-pos-2').addClass('back-pos');
                $('.right-pos').removeClass('right-pos').addClass('right-pos-2');
                $('.main-pos').removeClass('main-pos').addClass('right-pos');
                $('.left-pos').removeClass('left-pos').addClass('main-pos');
                $('.left-pos-2').removeClass('left-pos-2').addClass('left-pos');
                $('#'+leftitem).removeClass('back-pos').addClass('left-pos-2');
            }
          
              //next button
              if(direction == 'clockwise' || direction == '' || direction == null ) {
                var rightitem = $('.right-pos-2').attr('id');
                    rightitem++;
                console.log(rightitem);
                if(rightitem > itemCount) {
                  rightitem = 1;
                  console.log(rightitem);
                }
                console.log('next');
                
                $('.left-pos-2').removeClass('left-pos-2').addClass('back-pos');
                $('.left-pos').removeClass('left-pos').addClass('left-pos-2');
                  $('.main-pos').removeClass('main-pos').addClass('left-pos');
            $('.right-pos').removeClass('right-pos').addClass('main-pos');
                $('.right-pos-2').removeClass('right-pos-2').addClass('right-pos');
                $('#'+rightitem).removeClass('back-pos').addClass('right-pos-2');
            }
          }
    
        //next button click
        $('#next').click(function() {
            swap('clockwise');
        });
    
        //prev button click
        $('#prev').click(function() {
            swap('counter-clockwise');
        });
      
      $('.left-pos-2').click(function() {
            swap('counter-clockwise');
        });
    
    }(jQuery));
});