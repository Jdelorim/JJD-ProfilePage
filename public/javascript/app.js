
/*
document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});

    var jparallax = document.querySelectorAll('.parallax');
     M.Parallax.init(jparallax, {
        responsiveThreshold: 0
     });
     
});
*/

$(document).ready(function(){
    console.log('hello');
    
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    
    var elems = document.querySelectorAll('.scrollspy');
     M.ScrollSpy.init(elems,{
        scrollOffset: 100
     });
    
      
});
