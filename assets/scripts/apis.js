//country api take in country name and out put stuff like flag

var cFlag = "";

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
// callCountry("canada", "flag", function(response) {//name of country , APIinfoName  function response will return as response.falg basically
//   console.log(response);

//   // use response object to write to page or do whatever with
// });
