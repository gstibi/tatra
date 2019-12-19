$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 100px, adds/removes solid class
    if($(this).scrollTop() > 100) { 
        $('.main-menu').addClass('solid');
    } else {
        $('.main-menu').removeClass('solid');
    }
  });
});