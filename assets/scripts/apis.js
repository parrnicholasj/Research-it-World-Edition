//country api take in country name and out put stuff like flag

var promiseHandler = promise => promise
  .then(res => [null, res])
  .catch(err => [err, null])//promise stuff

async function callCountry(countryName, cb)
{

  var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName//query url update as needed

  var [err, response] = await promiseHandler($.getJSON(queryURL));

  if (err)
  {
    console.log(err);
    return false;
  }

  console.log(response);
  cb(response[0]);
}

// // example search for flag
// callCountry("canada", "flag", function(response) {//name of country , APIinfoName  function response will return as response.flag basically
//   console.log(response);

//   // use response object to write to page or do whatever with
// });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//weather API
async function callWeather(capital, cb)
{//limit of 60 calls per minute

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?APPID=eda8189bddef02d8773e2c5e86f8ba9f&q=" + capital//query url update as needed

  var [err, response] = await promiseHandler($.getJSON(queryURL));

  if (err)
  {
    console.log(err);
    return false;
  }

  var responseObj = {
    temp: response.main.temp,
    weather: response.weather[0].main,
    weatherDescr: response.weather[0].description
  }

  cb(responseObj);

  console.log(response);

}

// callWeather("washington", function(response) {//provide name of city
//   console.log("weather");
//   console.log(response.weatherDescr);//use .temp for temp || .weather for weather || .weatherDescr for weather description
// })


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//nytimes api

async function callNYT(country, cb)
{//limit of 10 calls per minute

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Gzw45bRn0Ys1abLdZrESLiVNwoI9Q6Oi&q=" + country//query url update as needed

  var [err, response] = await promiseHandler($.getJSON(queryURL));

  if (err)
  {
    console.log(err);
    return false;
  }

  //need to return title author short description and link
  var result = response.response.docs

  //for num articles desired get their info
var objectArray = [];
  for (var i = 0; i < 5; i++)
  {
    var responseObj = {
      author: result[i].byline.original,
      title: result[i].headline.main,
      snippet: result[i].snippet,
      url: result[i].web_url
    }

    objectArray.push(responseObj);
  }

  cb(objectArray);

  console.log(response);

}

// callNYT("France", function (response)//provide name of city
// {
//   console.log("about france");
//   console.log(response[0]);//loop through array printing out .author .title .snippet and .url
// })

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//holidays API
async function callHolidays(countryCode, year, cb)
{

  var queryURL = "https://calendarific.com/api/v2/holidays?country=" + countryCode + "&year=" +  year + "&api_key=38e0522646d37ce3baa9eeb70ea3dec7cb21758c"//query url update as needed

  var [err, response] = await promiseHandler($.getJSON(queryURL));

  if (err)
  {
    console.log(err);
    return false;
  }

 

  cb(response.response.holidays);

  console.log(response.response.holidays);

}

// callHolidays("UK", 2019, function(response){//call by country code and year
//   console.log("holdays");
//   //response[i].date.iso for date
//   //response[i].description
//   //response[i].name
// })