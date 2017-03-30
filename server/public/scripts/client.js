$(document).ready(function(){
  console.log("jq sourced");

getStudentNames();

}); //end doc ready

function generateBtn() {
  $('.generateTeamsBtn').on('click', function() {
    //logic
    //dynamically create boxes that contain teams depending on input val()
    //inline boxes - use bootstrap
  });
}

function functionName() {
//  AJAX POST to send the formulated teams
  //need object with generated teams into an {object: team1: name...}
$.ajax({
  type:'POST',
  url: '/teams/save',
  data: {teams: x},
  success: function(response) {
    console.log(response);
  }
});
}

function appendTeams(names) {
  $('.appendNewTeam').empty();
  for (var i = 0; i < response.length; i++) {
  var name = response[i];

  appendStudents(name);
  }
}


function appendStudents(response) {
  var reMix = [];
  $("#output").empty();
  for(var i = 0; i < response.length; i++) {
  reMix.push(response[i].name);
    }
    console.log(reMix);
    console.log(shuffleArray(reMix));
    var randomArray = shuffleArray(reMix);
    for(var p = 0; p < randomArray.length; p++) {
      $("#output").append('<p>' + randomArray[p] + '</p>');
    }
}


function getStudentNames() {
  //AJAx GET REquuest
$.ajax({
  type:'GET',
  url: '/teams',
  success: function(response) {
    console.log(response);
    appendStudents(response);
  }
});//end Ajax
}//end function


function shuffleArray(array) {
  //logic for generating random teams
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
}
