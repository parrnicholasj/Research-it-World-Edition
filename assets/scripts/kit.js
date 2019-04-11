$(document).ready(function(){
  
  /* teacher area will show a table with groups with a way to interface the group information
    - variables for search count 
    - times something is saved
  */

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
      
    });

});

/* 
  when you submit the form, grab the key from the option attr: data-key 
  then pass that along: for this key, add in this data. 
*/