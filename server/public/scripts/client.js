$(document).ready(function(){


}); //end doc ready


function appendTeams(names) {
  $('div to append to').empty();
  for (var i = 0; i < response.length; i++) {
  var name = response[i];
  appendStudents(name);
  }
}


function appendStudents(student) {
$('div to append to').empty();
var $el = $('div to append to').children().last();
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


function functionName() {
  //logic for generating random teams

}

//append containers for number of teams.....dynamically create depending on input val()
