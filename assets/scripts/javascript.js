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


$(document).ready(function(){

    var isoCountries = {
      afghanistan: "AF",
      "aland islands": "AX",
      albania: "AL",
      algeria: "DZ",
      "american samoa": "AS",
      andorra: "AD",
      angola: "AO",
      anguilla: "AI",
      antarctica: "AQ",
      "antigua and barbuda": "AG",
      argentina: "AR",
      armenia: "AM",
      aruba: "AW",
      australia: "AU",
      austria: "AT",
      azerbaijan: "AZ",
      bahamas: "BS",
      bahrain: "BH",
      bangladesh: "BD",
      barbados: "BB",
      belarus: "BY",
      belgium: "BE",
      belize: "BZ",
      benin: "BJ",
      bermuda: "BM",
      bhutan: "BT",
      bolivia: "BO",
      "bosnia and herzegovina": "BA",
      botswana: "BW",
      "bouvet island": "BV",
      brazil: "BR",
      "british indian ocean territory": "IO",
      "brunei darussalam": "BN",
      bulgaria: "BG",
      "burkina faso": "BF",
      burundi: "BI",
      cambodia: "KH",
      cameroon: "CM",
      canada: "CA",
      "cape verde": "CV",
      "cayman islands": "KY",
      "central african republic": "CF",
      chad: "TD",
      chile: "CL",
      china: "CN",
      "christmas island": "CX",
      "cocos (keeling) islands": "CC",
      colombia: "CO",
      comoros: "KM",
      congo: "CG",
      "congo, democratic republic": "CD",
      "cook islands": "CK",
      "costa rica": "CR",
      "cote d'ivoire": "CI",
      croatia: "HR",
      cuba: "CU",
      cyprus: "CY",
      "czech republic": "CZ",
      denmark: "DK",
      djibouti: "DJ",
      dominica: "DM",
      "dominican republic": "DO",
      ecuador: "EC",
      egypt: "EG",
      "el salvador": "SV",
      "equatorial guinea": "GQ",
      eritrea: "ER",
      estonia: "EE",
      ethiopia: "ET",
      "falkland islands": "FK",
      "faroe islands": "FO",
      fiji: "FJ",
      finland: "FI",
      france: "FR",
      "french guiana": "GF",
      "french polynesia": "PF",
      "french southern territories": "TF",
      gabon: "GA",
      gambia: "GM",
      georgia: "GE",
      germany: "DE",
      ghana: "GH",
      gibraltar: "GI",
      greece: "GR",
      greenland: "GL",
      grenada: "GD",
      guadeloupe: "GP",
      guam: "GU",
      guatemala: "GT",
      guernsey: "GG",
      guinea: "GN",
      "guinea-bissau": "GW",
      guyana: "GY",
      haiti: "HT",
      "heard island & mcdonald islands": "HM",
      "holy see (vatican city state)": "VA",
      honduras: "HN",
      "hong kong": "HK",
      hungary: "HU",
      iceland: "IS",
      india: "IN",
      indonesia: "ID",
      "iran, islamic republic of": "IR",
      iraq: "IQ",
      ireland: "IE",
      "isle of man": "IM",
      israel: "IL",
      italy: "IT",
      jamaica: "JM",
      japan: "JP",
      jersey: "JE",
      jordan: "JO",
      kazakhstan: "KZ",
      kenya: "KE",
      kiribati: "KI",
      "republic of korea": "KR",
      "south korea": "KR",
      "democratic people's republic of korea": "KP",
      "north korea": "KP",
      kuwait: "KW",
      kyrgyzstan: "KG",
      "lao people's democratic republic": "LA",
      latvia: "LV",
      lebanon: "LB",
      lesotho: "LS",
      liberia: "LR",
      "libyan arab jamahiriya": "LY",
      liechtenstein: "LI",
      lithuania: "LT",
      luxembourg: "LU",
      macao: "MO",
      macedonia: "MK",
      madagascar: "MG",
      malawi: "MW",
      malaysia: "MY",
      maldives: "MV",
      mali: "ML",
      malta: "MT",
      "marshall islands": "MH",
      martinique: "MQ",
      mauritania: "MR",
      mauritius: "MU",
      mayotte: "YT",
      mexico: "MX",
      "micronesia, federated states of": "FM",
      moldova: "MD",
      monaco: "MC",
      mongolia: "MN",
      montenegro: "ME",
      montserrat: "MS",
      morocco: "MA",
      mozambique: "MZ",
      myanmar: "MM",
      namibia: "NA",
      nauru: "NR",
      nepal: "NP",
      netherlands: "NL",
      "netherlands antilles": "AN",
      "new caledonia": "NC",
      "new zealand": "NZ",
      nicaragua: "NI",
      niger: "NE",
      nigeria: "NG",
      niue: "NU",
      "norfolk island": "NF",
      "northern mariana islands": "MP",
      norway: "NO",
      oman: "OM",
      pakistan: "PK",
      palau: "PW",
      "palestinian territory, occupied": "PS",
      panama: "PA",
      "papua new guinea": "PG",
      paraguay: "PY",
      peru: "PE",
      philippines: "PH",
      pitcairn: "PN",
      poland: "PL",
      portugal: "PT",
      "puerto rico": "PR",
      qatar: "QA",
      reunion: "RE",
      romania: "RO",
      "russian federation": "RU",
      rwanda: "RW",
      "saint barthelemy": "BL",
      "saint helena": "SH",
      "saint kitts and nevis": "KN",
      "saint lucia": "LC",
      "saint martin": "MF",
      "saint pierre and miquelon": "PM",
      "saint vincent and grenadines": "VC",
      samoa: "WS",
      "san marino": "SM",
      "sao tome and principe": "ST",
      "saudi arabia": "SA",
      senegal: "SN",
      serbia: "RS",
      seychelles: "SC",
      "sierra leone": "SL",
      singapore: "SG",
      slovakia: "SK",
      slovenia: "SI",
      "solomon islands": "SB",
      somalia: "SO",
      "south africa": "ZA",
      "south georgia and sandwich isl.": "GS",
      spain: "ES",
      "sri lanka": "LK",
      sudan: "SD",
      suriname: "SR",
      "svalbard and jan mayen": "SJ",
      swaziland: "SZ",
      sweden: "SE",
      switzerland: "CH",
      "syrian arab republic": "SY",
      taiwan: "TW",
      tajikistan: "TJ",
      tanzania: "TZ",
      thailand: "TH",
      "timor-leste": "TL",
      togo: "TG",
      tokelau: "TK",
      tonga: "TO",
      "trinidad and tobago": "TT",
      tunisia: "TN",
      turkey: "TR",
      turkmenistan: "TM",
      "turks and caicos islands": "TC",
      tuvalu: "TV",
      uganda: "UG",
      ukraine: "UA",
      "united arab emirates": "AE",
      "united kingdom": "GB",
      "united states": "US",
      "united states outlying islands": "UM",
      uruguay: "UY",
      uzbekistan: "UZ",
      vanuatu: "VU",
      venezuela: "VE",
      vietnam: "VN",
      "virgin islands, british": "VG",
      "virgin islands, u.s.": "VI",
      "wallis and futuna": "WF",
      "western sahara": "EH",
      yemen: "YE",
      zambia: "ZM",
      zimbabwe: "ZW"
    };

    // going from the country name to the country code function (to be called inside the submit button)
    function getCountryCode (countryName) {
      if (isoCountries.hasOwnProperty(countryName)) {
          return isoCountries[countryName];
      } else {
          return countryName;
      }
    }

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

    $("studentSearchForm").on("submit", function(event){

      event.preventDefault();

      // getting the key from the selected item to a place where the information can be retrieved
      $(document).on("change", "#studentPicker", function(event) {
        event.preventDefault();
        var studentKey = $(this).val();
        console.log(studentKey);
      });
    
      // take in the #country-input val
      var countryInput = $("#country-input").val().trim();


    })


    database.ref().on("child_added", function(childAddedSnap){
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
    $(document).on("change", "#studentPicker", function(event) {
      event.preventDefault();
      var studentKey = $(this).val();
      console.log(studentKey);
    });

    // submitting the form takes what is inside the selector (the key) and then uses that to access the reference point inside the database and save what was inputted in the text box in the database
    $("#studentSearchForm").on("submit", function(event){

      event.preventDefault();
      // creating variables for the text box and selector
      var countryInput = $("#country-input").val().trim();
      var studentPicker = $("#studentPicker").val();

      console.log(studentPicker);

      // update user's firebase entry to save past searches
      database.ref(`${studentPicker}/searches`).push(countryInput)

      // calling the country info API

      callCountry(countryInput, function (infoResponse){

        console.log(infoResponse);

        // calling the weather API
        callWeather(infoResponse.capital, function(weatherResponse) {
          console.log(weatherResponse);

          
        });

        // appending to page info about country card
        var $pInfo = $("<p>")
        .text(`Native Country Name: ${}
              Capital: ${infoResponse.capital}
              `);
        
        $("#country-info-card").append($pInfo);

      });
        

      // call NYTimes API

      callNYT(countryInput, function(nytimesResponse){
        console.log(nytimesResponse);
      });

      
      // converting to the country code
      var countryCode = getCountryCode(countryInput.toLowerCase());
      console.log(`country code hopefully ${countryCode}`)
      // calling the holiday function
      callHolidays(countryCode, 2019, function(response) {
        console.log(response);
        // use response to print out holiday information
      });
      
      // ADDING THINGS TO THE PAGE

        // printing name in the jumbotron & country info card

        $(".country-name").text(countryInput);

        

        

      });
    });

  

    
