$(document).ready(function(){
  
  /* teacher area will show a table with groups with a way to interface the group information
    - variables for search count 
    - times something is saved
  */
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

    var database = firebase.database();

    $("#student-add-form").on("submit", function(event){
      // stop default
      event.preventDefault();

      // save #student-name-add val into a variable

      var studentName = $("#student-name-add").val().trim();
      console.log(studentName);
      if (!studentName){
        return false;
      }

      // save into database
      database.ref().push({
        studentName: studentName
      });

       // clear text field

       $("#student-name-add").val("")
      
      

    });

    // firebase on child_added

    database.ref().on("child_added", function(childAddedSnap){
      // the stores database information is being saved into a variable
      var studentName = childAddedSnap.val().studentName;
       console.log(childAddedSnap.val());
      
       var studentKey = childAddedSnap.key;
       // take the database stuff and append to the table on the teacher page
      console.log(studentKey);
       var $tr = $("<tr>").append(
        $("<td>").text(studentName),
        $("<td>").text("search #"),
        $("<td>").text("# things saved")
      ) .attr("data-student-key", studentKey);

      $("#student-table-teacher > tbody").append($tr);
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
    $("#tempForm").on("submit", function(event){

      event.preventDefault();
      // creating variables for the text box and selector
      var tempTxtInput = $("#tempTxt").val().trim();
      var studentPicker = $("#studentPicker").val();

      console.log(studentPicker);

      // update user's firebase entry to save past searches
      database.ref(`${studentPicker}/searches`).push(tempTxtInput)

      // converting to the country code
      var countryCode = getCountryCode(tempTxtInput.toLowerCase());
      console.log(`country code hopefully ${countryCode}`)
      // calling the holiday function
      countryHolidayFinder(countryCode);
       
      
    });

     // function for the country holiday finder 

    function countryHolidayFinder (countryNameCode){
      if (countryNameCode === ""){
        return false;
      };

      // setting up the variables for the ajax call: taking in the country name (in code form), the URL, API key, year, and the country code 
      var searchTermCountry = countryNameCode
      var queryURL = "https://calendarific.com/api/v2/holidays?";
      var parameters = {country: searchTermCountry};
      parameters["api_key"] = "38e0522646d37ce3baa9eeb70ea3dec7cb21758c"
      parameters.year = 2019;

      // calling the ajax function
      $.ajax ({
        // calling variables from above
        url: queryURL + $.param(parameters),
        method: "GET"
      }).then(function(holidayResults){

        console.log(holidayResults);

      }); 
    }
});

/* 
  when you submit the form, grab the key from the option attr: data-key 
  then pass that along: for this key, add in this data. 
*/