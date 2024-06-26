// Add smooth scrolling to all links in navbar + footer link
// >>>>> credit to W3 schools <<<<<
$(".navbar a").on('click', function(event) {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 920, function(){
   
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});

/* take the focus out of the buttons when the mouse is released */
$(".btn").mouseup(function() {
  $(this).blur();
});