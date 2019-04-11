
// search for flag
callCountry("canada", "flag", function(response) {
  console.log(response);

  // use response object to write to page or do whatever with
});

// response
callCountry("canada", "name", function(response) {
  console.log(response);
});

// callCountry("countryName", "infoName", callback);

/* 
  - We want to be able to write into input fields and press the submit button to input
  - those input fields get used for API calls, to pull up search results. 
  - the article search should return a way to view the article information, either a link to the main article or otherwise
  - be able to view the results in a viewing area
  
  - in the student past views area the student will see a dropdown menu with student names (or student group names)
  - when students press the submit button it would reproduce saved information 


  teacher area will show a table with groups with a way to interface the group information
    - variables for search count 
    - times something is saved


  - initialize fire base
  - global variables:
    * database variable to call
    * get input field for country search
    * get input field for article number
    * search count (numbers of times a search is performed)
    * saved count (number of times a student has press "save")
  - functions
    - AJAX call for country flags
    - AJAX call for weather
    - AJAX call for Holiday API
    - AJAX call for NYT
    - AJAX call for country flags

    - conversion for country code

  - on call functions
      - on.submit when the student clicks submit (to search)
      - firebase on.add_child

      in the teacher section:
        - submit button to add student to database
        - clear button to clear database


* /
