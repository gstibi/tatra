$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 100px, adds/removes solid class
    if($(this).scrollTop() > 500) { 
        $('.main-menu').addClass('solid');
        document.getElementById("logo").src="img/222x68.png";
    } else {
        $('.main-menu').removeClass('solid');
        document.getElementById("logo").src="img/222x68-color.png";
    }
  
  });
});