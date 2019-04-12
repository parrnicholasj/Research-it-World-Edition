var countryName = ""

$("#search").on("click", function(event){
  event.preventDefault();

  countryName = $("#country-input").val().trim();
  console.log(countryName)

    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })(); 
  

  // Country info
  $("#country-name").html(countryName);
  $(".capital").html("The Capital...");
  $("#language").html("most common language (i.e. what about Canada?)");
  $("#currency").html("MONEY MONEY MONEY MONEY");
  $("#holidays").html("Upcoming state/federal holidays")

// Weather data display
  $("#cloud-status").html("weatherresponse.cloudy")
  $("#temperature").html("weatherresponse.temp");
  $("#humidity").html("weatherresponse.humidity");
  $("#dewPoint").html("weatherresponse.dewpoint");
  $("#wind").html("weatherresponse.windcalculated");

  

  // function to add headlines here
  var $articleList = $("<ul>");
    $articleList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#headlines").append($articleList);

    // If the article has a headline, log and append to $articleList
    var news = $("<div>");
    news.addClass("card");
    news.html("the articles");
    $("#headlines").append(news)
    })