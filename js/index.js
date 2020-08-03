jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
window.addEventListener("load",function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
function Redirect() {
    window.location("http://localhost/softweb/");
}

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     let currentScrollpos = window.pageYOffset;
//     if(prevScrollpos > currentScrollpos){
//         document.getElementById("navbar").style.top="0 !important";
//     }
//     else{
//         document.getElementById("navbar").style.top="-100px !important";
//     }
//     prevScrollpos = currentScrollpos;
// };


//Change the nav bar color when do scroll.

window.addEventListener('scroll', function() {
    // let scrollLeft;
    let scrollTop;
    //
    if ('pageXOffset' in window) {  // all browsers, except IE before version 9
        //pageXOffset--it returns the number of pixels the document is currently scrolled along the vertical axis
        //scrollLeft =  window.pageXOffset;
        scrollTop = window.pageYOffset;
        // console.log(scrollTop);

    }
    //
    let nav = document.querySelector("#navbar");
    let cont1 = document.getElementById('cont1');
    let cont2 = document.getElementById('cont2');
    let cont3 = document.getElementById('cont3');
    let cont4 = document.getElementById('cont4');
    let cont5 = document.getElementById('cont5');
    let cont6 = document.getElementById('cont6');

    // console.log(nav.offsetHeight);
    // console.log(scrollTop);
    // //nav.classList.toggle("scrolled",scrollTop > nav.offsetHeight);
    if(scrollTop > nav.offsetHeight){
        //a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars
        nav.classList.remove("scrolled1");
        nav.classList.add("scrolled");
        cont1.classList.add("cont");
        cont2.classList.add("cont");
        cont3.classList.add("cont");
        cont4.classList.add("cont");
        cont5.classList.add("cont");
        cont6.classList.add("cont");
    }
    else{
        cont1.classList.remove("cont");
        cont2.classList.remove("cont");
        cont3.classList.remove("cont");
        cont4.classList.remove("cont");
        cont5.classList.remove("cont");
        cont6.classList.remove("cont");

        nav.classList.add("scrolled1");
    }
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // console.log(vw);
    // nav.classList.add("scrolled");
});