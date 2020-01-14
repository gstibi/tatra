$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 100px, adds/removes solid class
    if($(this).scrollTop() > 100) { 
        $('.main-menu').addClass('solid');
        document.getElementById("logo").src="img/222x68.png";
        $('.logo').addClass('change-size');
        $('.navbar-nav').addClass('fontcolor');
    } else {
        $('.main-menu').removeClass('solid');
        document.getElementById("logo").src="img/222x68-color.png";
        $('.logo').removeClass('change-size');
        $('.navbar-nav').removeClass('fontcolor');
    }

    //zistuje ci si na index.html --> dat pozor pri deployment alebo dat do noveho scriptu
    var href = document.location.href;
    console.log(href)
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    if($(this).scrollTop() > 100 && lastPathSegment =='index.html'){
      $('.main-menu').addClass('topnav');
    } else {
      $('.main-menu').removeClass('topnav');
    }
  
  });
});