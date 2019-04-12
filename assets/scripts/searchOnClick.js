var country = ""



$("#search").on("click", function(event){
  event.preventDefault();

  country = $("#country-input").val().trim();

  if(country = ""){
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })
}


  
  console.log(country);
  // Country info
  $("#country-name").html(country);
  $(".capital").html("what");
  $("#language").html("most common language (i.e. what about Canada?)");
  $("#currency").html("MONEY MONEY MONEY MONEY");

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
    $("#article-section").append($articleList);

    // If the article has a headline, log and append to $articleList
    var headline = article.headline;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline && headline.main) {
      console.log(headline.main);
      $articleListItem.append(
        "<span class='label label-primary'>" +
          articleCount +
          "</span>" +
          "<strong> " +
          headline.main +
          "</strong>")
      }
    })