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
  });
});