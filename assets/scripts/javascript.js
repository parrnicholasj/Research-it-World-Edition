// callCountry("countryName", "infoName", callback);


// - We want to be able to write into input fields and press the submit button to input
// - those input fields get used for API calls, to pull up search results. 
// - the article search should return a way to view the article information, either a link to the main article or otherwise
// - be able to view the results in a viewing area

// - in the student past views area the student will see a dropdown menu with student names (or student group names)
// - when students press the submit button it would reproduce saved information 


// teacher area will show a table with groups with a way to interface the group information
//   - variables for search count 
//   - times something is saved


// - initialize fire base
// - global variables:
//   * database variable to call
//   * get input field for country search
//   * get input field for article number
//   * search count (numbers of times a search is performed)
//   * saved count (number of times a student has press "save")
// - functions
//   - AJAX call for country flags
//   - AJAX call for weather
//   - AJAX call for Holiday API
//   - AJAX call for NYT
//   - AJAX call for country flags

//   - conversion for country code

// - on call functions
//     - on.submit when the student clicks submit (to search)
//     - firebase on.add_child

//     in the teacher section:
//       - submit button to add student to database
//       - clear button to clear database


$(document).ready(function () {



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCD_sYLjsUA9xOJ4TXOZXITtrfLDZugDHU",
    authDomain: "current-events-education.firebaseapp.com",
    databaseURL: "https://current-events-education.firebaseio.com",
    projectId: "current-events-education",
    storageBucket: "current-events-education.appspot.com",
    messagingSenderId: "596553054935"
  };


  firebase.initializeApp(config);
  // global variables
  var database = firebase.database();
  var capital;


  $("#studentSearchForm").on("submit", function (event) {

    event.preventDefault();




    // getting the key from the selected item to a place where the information can be retrieved
    $(document).on("change", "#studentPicker", function (event) {
      event.preventDefault();
      var studentKey = $(this).val();
      console.log(studentKey);
    });

    // take in the #country-input val
    var countryInput = $("#country-input").val().trim();


  })


  database.ref().on("child_added", function (childAddedSnap) {
    // the stores database information is being saved into a variable
    var studentName = childAddedSnap.val().studentName;
    console.log(childAddedSnap.val());

    var studentKey = childAddedSnap.key;
    // take the database stuff and append to the table on the teacher page
    console.log(studentKey);


    // take database information and create dropdown for students to access themselves
    var $option = $("<option>")
      .text(studentName)
      .val(studentKey)
      .addClass("student-name-option");

    $("#studentPicker").append($option);

  });
  // getting the key from the selected item to a place where the information can be retrieved
  $(document).on("change", "#studentPicker", function (event) {
    event.preventDefault();
    var studentKey = $(this).val();
    console.log(studentKey);
  });

  // submitting the form takes what is inside the selector (the key) and then uses that to access the reference point inside the database and save what was inputted in the text box in the database
  $("#studentSearchForm").on("submit", function (event) {

    event.preventDefault();

    // //hide everything while gif plays for a few seconds
    // document.getElementsByClassName("container").style.display = "none";
    // setTimeout(unHide, 3000);
    // var $gif = $("<img>");
    // $gif.attr("src", "assets/images/Rotating_globe.gif");
    // $(".gifHolder").append($gif);

    // function unHide() {

    //   $(".gif-holder").empty();
    //   document.getElementById("contain").style.display = "block";

    // }

    // creating variables for the text box and selector


    $("#country-info-card").empty();
    $("#news-card").empty();
    $("#holiday-card").empty();
    $("#weather-card").empty();

    var countryInput = $("#country-input").val().trim();
    var studentPicker = $("#studentPicker").val();
    var countryData = {};

    function jelly() {
      micron.getEle("#country-input").interaction("pop").duration(".5").timing("ease-out")
    }
    if (countryInput === "") {
      jelly();

    }
    $("#country-info-card").empty();
    $("#news-card").empty();
    $("#holiday-card").empty();
    $("#weather-card").empty();

    console.log(studentPicker);

    // update user's firebase entry to save past searches
    database.ref(`${studentPicker}/searches`).push(countryInput)

    database.ref("countryData").once("value", function (snapshot) {

      console.log(snapshot.val());
      if (snapshot.child(countryInput.toLowerCase()).exists()) {
        console.log("country previously searched")
        // use value of snapshot.val()[countryInput.toLowerCase()]
        var name = countryInput.toLowerCase();
        console.log(name);
        var dbCountry = snapshot.val()[name]
        var countryName = dbCountry.name;
        console.log(countryName);
        var countryCapital = dbCountry.capital
        console.log(countryCapital);
        var countryLanguages = Object.values(dbCountry.languages);
        var countryNativeName = dbCountry.nativeName;
        var countrySubRegion = dbCountry.subregion;
        var countryCurrencyName = dbCountry.currency[0].name;
        var countryCurrencySymbol = dbCountry.currency[0].symbol;
        var holidays = Object.values(dbCountry.holiday);
        console.log(holidays);
        console.log(countryCurrencySymbol);
        var flag = dbCountry.flag;
        console.log(flag);

        // flag to jumbotron

        document.getElementById("countryFlagJumbo").style.backgroundImage = `url(${flag})`;


        // print the info to the page

        var $ulInfo = $("<ul>")

        var $liCapital = $("<li>").text(`Capital City: ${countryCapital}`);
        var $liNativeName = $("<li>").text(`Native Name: ${countryNativeName}`);

        var languages = countryLanguages.map(function (language) {
          return language.name;
        }).join(", ");

        var $liLanguages = $("<li>").text("Language(s): " + languages);
        var $liSubregion = $("<li>").text(`Location: ${countrySubRegion}`);
        var $liCurrency = $("<li>").text("Currency: " + countryCurrencyName + " , " + countryCurrencySymbol);


        $ulInfo.append($liNativeName, $liCapital, $liLanguages, $liSubregion, $liCurrency);

        $("#country-info-card").append($ulInfo);

        $(".country-name").text(countryInput);

        // print the holidays to the page

        for (var i = 0; i < holidays.length; i++) {

          var $div1 = $("<ul>");
          var $h2Holiday = $("<li>").addClass("holidayListToggle").attr("data-state", "hidden").attr("aria-expanded", "false").text(holidays[i].name);

          $div1.append($h2Holiday);

          var $ul = $("<ul>").addClass("toggleInfo").css("display", "none");

          if (holidays[i].date.iso != null && holidays[i].date.iso != "") {
            var $liDate = $("<li>").text(holidays[i].date.iso)
            $ul.append($liDate);
          }

          if (holidays[i].description != null && holidays[i].description != "") {
            var $liDescr = $("<li>").text(holidays[i].description);
            $ul.append($liDescr);
          }


          $div1.append($ul);


          $("#holiday-card").append($div1);

        };



        // calling the weather api
        callWeather(countryCapital, function (weatherResponse) {
          console.log(weatherResponse);

          $(".capital-city").text(dbCountry.capital);
          countryData.capitalCity = dbCountry.capital;
          var $ul = $("<ul>")

          var $liTemp = $("<li>").text(weatherResponse.temp);
          var $liWeather = $("<li>").text(weatherResponse.weather);
          var $liWeatherDescr = $("<li>").text(weatherResponse.weatherDescr);

          $ul.append($liTemp, $liWeather, $liWeatherDescr);

          $("#weather-card").append($ul);

        });

        // call NYTimes API

        callNYT(countryName, function (nytimesResponse) {
          console.log(nytimesResponse);

          for (var i = 0; i < nytimesResponse.length; i++) {
            var $divCard = $("<div>").addClass("card")

            var $divCardBody = $("<div>").addClass("card-body");

            var $h5 = $("<h5>").addClass("card-title");

            var $atitle = $("<a>").attr("href", nytimesResponse[i].url).text(nytimesResponse[i].title);

            $h5.append($atitle);

            var $h6 = $("<h6>").addClass("card-subtitle mb-2 text-muted").text(nytimesResponse[i].author);

            var $p = $("<p>").addClass("card-text").text(nytimesResponse[i].snippet);

            $divCardBody.append($h5, $h6, $p);


            $divCard.append($divCardBody);

            $("#news-card").append($divCard);

          }

        });
      } else {
        // move forward with creating new entry in "countryData" in firebase
        // calling the country info API

        callCountry(countryInput, function (infoResponse) {

          console.log(infoResponse);

          // calling the weather API
          callWeather(infoResponse.capital, function (weatherResponse) {
            console.log(weatherResponse);

            $(".capital-city").text(infoResponse.capital);
            countryData.capitalCity = infoResponse.capital;
            var $ul = $("<ul>")

            var $liTemp = $("<li>").text(weatherResponse.temp);
            var $liWeather = $("<li>").text(weatherResponse.weather);
            var $liWeatherDescr = $("<li>").text(weatherResponse.weatherDescr);

            $ul.append($liTemp, $liWeather, $liWeatherDescr);

            $("#weather-card").append($ul);

          });

          // appending to page info about country card
          var urlFlag = infoResponse.flag;
          console.log(urlFlag);

          document.getElementById("countryFlagJumbo").style.backgroundImage = `url(${urlFlag})`;
          var $ulInfo = $("<ul>")

          var $liCapital = $("<li>").text(`Capital City: ${infoResponse.capital}`);
          var $liNativeName = $("<li>").text(`Native Name: ${infoResponse.nativeName}`);

          var languages = infoResponse.languages.map(function (language) {
            return language.name;
          }).join(", ");

          var $liLanguages = $("<li>").text("Language(s): " + languages);
          var $liSubregion = $("<li>").text(`Location: ${infoResponse.subregion}`);
          var $liCurrency = $("<li>").text("Currency: " + infoResponse.currencies[0].name + " , " + infoResponse.currencies[0].symbol);


          $ulInfo.append($liNativeName, $liCapital, $liLanguages, $liSubregion, $liCurrency);

          $("#country-info-card").append($ulInfo);

          $(".country-name").text(countryInput);

          // changing the junbotron background to the country flag image



          countryData.name = infoResponse.name;
          countryData.capital = infoResponse.capital;
          countryData.nativeName = infoResponse.nativeName;
          countryData.subregion = infoResponse.subregion;
          countryData.currency = infoResponse.currencies;
          countryData.flag = infoResponse.flag;
          countryData.languages = infoResponse.languages;



          database.ref("countryData/" + countryData.name.toLowerCase()).set(countryData);







        });


        // call NYTimes API

        callNYT(countryInput, function (nytimesResponse) {
          console.log(nytimesResponse);

          for (var i = 0; i < nytimesResponse.length; i++) {
            var $divCard = $("<div>").addClass("card")

            var $divCardBody = $("<div>").addClass("card-body");

            var $h5 = $("<h5>").addClass("card-title");

            var $atitle = $("<a>").attr("href", nytimesResponse[i].url).text(nytimesResponse[i].title);

            $h5.append($atitle);

            var $h6 = $("<h6>").addClass("card-subtitle mb-2 text-muted").text(nytimesResponse[i].author);

            var $p = $("<p>").addClass("card-text").text(nytimesResponse[i].snippet);

            $divCardBody.append($h5, $h6, $p);


            $divCard.append($divCardBody);

            $("#news-card").append($divCard);

          }

        });


        // converting to the country code
        var countryCode = getCountryCode(countryInput.toLowerCase());
        console.log(`country code hopefully ${countryCode}`)
        // calling the holiday function
        callHolidays(countryCode, 2019, function (response) {
          console.log(response);
          // use response to print out holiday information
          countryData.holiday = response;
          database.ref("countryData/" + countryData.name.toLowerCase()).set(countryData);


          for (var i = 0; i < response.length; i++) {

            var $div1 = $("<ul>");
            var $h2Holiday = $("<li>").addClass("holidayListToggle").attr("data-state", "hidden").attr("aria-expanded", "false").text(response[i].name);

            $div1.append($h2Holiday);

            var $ul = $("<ul>").addClass("toggleInfo").css("display", "none");
            var $liDate = $("<li>").text(response[i].date.iso)
            var $liDescr = $("<li>").text(response[i].description);

            $ul.append($liDate, $liDescr);

            $div1.append($ul);


            $("#holiday-card").append($div1);

          };

          $("#country-input").val("");





        });
      }
    });

  });

  $(document).on("click", ".holidayListToggle", function () {

    console.log("clicked the holidayToggleList");

    var ulChild = this.nextElementSibling;

    console.log(ulChild);

    var toggleListAttr = $(this).attr("data-state");

    console.log(toggleListAttr);

    if (toggleListAttr === "hide") {
      ulChild.style.display = "block";
      toggleListAttr = $(this).attr("data-state", "show").attr("aria-expanded", "true");
    } else {
      ulChild.style.display = "none";
      toggleListAttr = $(this).attr("data-state", "hide").attr("aria-expanded", "false");

    }

  })
});