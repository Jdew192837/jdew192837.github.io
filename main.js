// JQuery
$(document).ready(function() {
  // Whenever an element with id is clicked, run the code
  console.log("Test");
  $(".btn-tag").click(function(eventObject) {
    // Prevent default click
    eventObject.preventDefault();
    console.log("Button Clicked");
    console.log(eventObject);

    // Remove all icons
    var names = [ "All", "php", "JS", "mysql", "CSS", "Java", "HTML", "MariaDB" ]
    for (var i = 0; i < names.length; i++ ) {
      elementID = "#" + names[i];
      $(elementID).html(names[i]);
    }

    // Get html
    var tag = $(this).html();
    console.log(tag);

    // Gets all elements with class panel
    var totalCards = document.getElementsByClassName("card").length;
    console.log(totalCards);

    // Loop through the list
    for (var x = 1; x <= totalCards; x++  ){
      console.log("In Loop");
      // If this element contains the tag
      if(JSON.stringify($("#librehealth-project-" + x ).html()).indexOf(tag) >= 0 ){
        // Hide it, fade it in
        console.log("Should be hiding and fading...");
        $("#librehealth-project-" + x ).hide();
        $("#librehealth-project-" + x ).fadeIn();
      } else {
        // Hide it
        $("#librehealth-project-" + x ).hide();
      };
    }

    // Add icon for the clicked tag
    var icon = '<i class="fa fa-circle icon"></i> ' + tag;
    var elementID = "#" + tag;
    $(elementID).html(icon);
  });
});