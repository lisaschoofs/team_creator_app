$(document).ready(function(){

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


function appendStudents(student) {
var $el = $('.appendNewTeam').children().last();
$el.append('<p>' + student.name + '</p>');


}//end func

function getStudentNames() {
  //AJAx GET REquuest
$.Ajax({
  type:'GET',
  url: '/teams',
  success: function(response) {
    console.log(response);
    // appendStudents(response);
  }
});//end Ajax
}//end function

function appendShuffleArraytoDOM() {
  //do this
}
