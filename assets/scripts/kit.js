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

    $("#student-add-form").on("submit", function(){
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

      var $tr = $("<tr>").append(
        $("<td>").text(studentName),
        $("<td>").text("search #"),
        $("<td>").text("# things saved")
      )

      $("#student-table-teacher > tbody").append($tr);
    });


});