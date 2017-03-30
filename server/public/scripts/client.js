$(document).ready(function() {
    console.log("jq sourced");

    getStudentNames();

  
    generateBtn();


}); //end doc ready



function generateBtn() {
    $('.inputForm').on('submit', function(event) {
        event.preventDefault();
        console.log('teams');
        var teamSize = $('.inputNeededGroups').val();

        for (var i = 0; i < teamSize; i++) {
            console.log(teamSize);
            $('#output').append('<div class="row"><div class="col-md-12">Teams</div></div>');
        }
        $('.inputNeededGroups').val('');
    });
    getStudentNames();
}


function appendStudents(response) {
    var reMix = [];
    $("#output").empty();
    for (var i = 0; i < response.length; i++) {
        reMix.push(response[i].name);
    }
    // console.log(reMix);
    // console.log(shuffleArray(reMix));

    var randomArray = shuffleArray(reMix);
   for(var p = 0; p < randomArray.length; p++) {
     $("#output").append('<p>' + randomArray[p] + '</p>');
}


function getStudentNames() {
    //AJAx GET REquuest
    $.ajax({
        type: 'GET',
        url: '/teams',
        success: function(response) {
            // console.log(response);
            appendStudents(response);
        }
    }); //end Ajax
} //end function


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
}


function generateTeams(randomArray) {
    $('.inputForm').on('submit', function(event) {
        event.preventDefault();

        var teamSize = $(".inputNeededGroups").val();
        console.log(teamSize);

        switch (teamSize) {
            case 2:
                teamOne = randomArray.splice(0, 10);
                for (var i = 0; i < teamOne.length; i++) {
                    $('.output').append('<p>' + teamOne[i] + '</p>');

                }
                teamTwo = randomArray.splice(0, 10);
                for (var a = 0; a < teamTwo.length; a++) {
                    $('.output').append('<p>' + teamTwo[a] + '</p>');
                }
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
    });
} // end function generateTeams

function saveTeamsToDB() {
    //  AJAX POST to send the formulated teams
    //need object with generated teams into an {object: team1: name...}
    $.ajax({
        type: 'POST',
        url: '/teams/save',
        data: {
            teams: x
        },
        success: function(response) {
            console.log(response);
        }
    });
}
