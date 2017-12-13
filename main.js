// JQuery
$(document).ready(function() {
  // Whenever an element with id is clicked, run the code
  console.log("Test");
  $(".btn-tag").click(function(eventObject) {
    console.log("Button Clicked");
    console.log(eventObject);
    // Get html
    var tag = $(this).html();
    // Gets all elements with class panel
    var totalCards = document.getElementsByClassName("card").length;
    console.log(totalCards);
    // Prevent default click
    eventObject.preventDefault();
    // Loop through the list
    for (var x = 1; x <= totalCards; x++  ){
      // If this element contains the tag
      if(JSON.stringify($("#librehealth-project-" + x ).html()).indexOf(tag) >= 0 ){
        // Hide it, fade it in        
        $("#librehealth-project-" + x ).hide();
        $("#librehealth-project-" + x ).fadeIn();
      } else {
        // Hide it
        $("#librehealth-project-" + x ).hide();
      };
    }
  });
});