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
}

function appendTeams(names) {
  $('.appendNewTeam').empty();
  for (var i = 0; i < response.length; i++) {
  var name = response[i];
  appendStudents(name);
  }
}

function generateTeams(randomArray) {
var teamSize = $("#numberOfTeamsNeeded").val();

  switch(teamSize){
    case 2:
      teamOne = randomArray.splice(0, 10);
      teamTwo = randomArray.splice(0, 10);
      break;

    case 3:
      teamOne = randomArray.splice(0, 7);
      teamTwo = randomArray.splice(0, 7);
      teamThree = randomArray.splice(0, 7);
      break;
    case 4:
      teamOne = randomArray.splice(0, 6);
      teamTwo = randomArray.splice(0, 6);
      teamThree = randomArray.splice(0, 5);
      teamFour = randomArray.splice(0, 5);
      break;

    case 5:
      teamOne = randomArray.splice(0, 4);
      teamTwo = randomArray.splice(0, 4);
      teamThree = randomArray.splice(0, 5);
      teamFour = randomArray.splice(0, 5);
      teamFive = randomArray.splice(0, 5);
      break;

    case 6:
      teamOne = randomArray.splice(0, 4);
      teamTwo = randomArray.splice(0, 4);
      teamThree = randomArray.splice(0, 4);
      teamFour = randomArray.splice(0, 4);
      teamFive = randomArray.splice(0, 4);
      teamSix = randomArray.splice(0, 4);
      break;

    case 7:
      teamOne = randomArray.splice(0, 3);
      teamTwo = randomArray.splice(0, 3);
      teamThree = randomArray.splice(0, 3);
      teamFour = randomArray.splice(0, 4);
      teamFive = randomArray.splice(0, 4);
      teamSix = randomArray.splice(0, 4);
      teamSeven = randomArray.splice(0, 4);
      break;

    case 8:
      teamOne = randomArray.splice(0, 3);
      teamTwo = randomArray.splice(0, 3);
      teamThree = randomArray.splice(0, 3);
      teamFour = randomArray.splice(0, 3);
      teamFive = randomArray.splice(0, 3);
      teamSix = randomArray.splice(0, 3);
      teamSeven = randomArray.splice(0, 4);
      teamEight = randomArray.splice(0, 4);
      break;

    case 9:
      teamOne = randomArray.splice(0, 3);
      teamTwo = randomArray.splice(0, 3);
      teamThree = randomArray.splice(0, 3);
      teamFour = randomArray.splice(0, 3);
      teamFive = randomArray.splice(0, 3);
      teamSix = randomArray.splice(0, 3);
      teamSeven = randomArray.splice(0, 3);
      teamEight = randomArray.splice(0, 3);
      teamNine = randomArray.splice(0, 3);
      break;

    default:
      prompt("Try again! You can only have 1-9 groups!");

  } // end switch

} // end function generateTeams

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
