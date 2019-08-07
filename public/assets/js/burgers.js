$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var taste = $(this).data("taste");
  
      var burgerEater = {
        devoured: taste
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerEater
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        // devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger ");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  }); 

  $(document).ready(function() {
    $$("#my_audio")[0].play();
});

