/***************************************
            navbar-mobile.js
***************************************/

// Side menu
function openSideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "-290px";
}

function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}