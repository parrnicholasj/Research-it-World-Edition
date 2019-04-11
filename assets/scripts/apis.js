//country api take in country name and out put stuff like flag

var promiseHandler = promise => promise
  .then(res => [null, res])
  .catch(err => [err, null])//promise stuff

 async function callCountry(countryName, info, cb) {

  var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName//query url update as needed

  var [err, response] = await promiseHandler($.getJSON(queryURL));

  if (err) {
    console.log(err);
    return false;
  }

  console.log(response);
  cb(response[0][info]);
}

// // example search for flag
// callCountry("canada", "flag", function(response) {//name of country , APIinfoName  function response will return as response.flag basically
//   console.log(response);

//   // use response object to write to page or do whatever with
// });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//weather API
async function callWeather(capital, wantTemp, cb) {//limit of 60 calls per minute

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?APPID=eda8189bddef02d8773e2c5e86f8ba9f&q=" + capital//query url update as needed

  var [err, response] = await promiseHandler($.getJSON(queryURL));

  if (err) {
    console.log(err);
    return false;
  }
if (wantTemp){
  cb(response.main.temp);
}

if (!wantTemp){
  cd(response.weather[0].main)
}
  console.log(response);
  
}

callWeather("washington", true, function(response) {//provide name of city and use true for temp or false for weather
  console.log(response);
})
