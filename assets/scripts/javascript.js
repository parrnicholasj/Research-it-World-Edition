var country = "";

$("#search").on("click", function(event){
  event.preventDefault();
  country = $("#country-input").val().trim();
  console.log(country);

$("#country-name").html(country)
})