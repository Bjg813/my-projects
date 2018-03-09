/***************************************
                main.js
***************************************/
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["../images/hero-image.png", "../images/../images/image-carousel-1.jpg", "../images/image-carousel-2.jpg","../images/image-carousel-3.jpg", "../images/image-carousel-4.jpg", "../images/image-carousel-5.jpg", "../images/image-carousel-6.jpg"]);