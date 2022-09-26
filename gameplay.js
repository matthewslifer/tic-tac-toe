// Function for when user taps on any box
function myfunc() {
    var box_1, box_2, box_3, box_4, box_5, box_6, box_7, box_8, box_9;
    box_1 = document.getElementById("box_1").value;
    box_2 = document.getElementById("box_2").value;
    box_3 = document.getElementById("box_3").value;
    box_4 = document.getElementById("box_4").value;
    box_5 = document.getElementById("box_5").value;
    box_6 = document.getElementById("box_6").value;
    box_7 = document.getElementById("box_7").value;
    box_8 = document.getElementById("box_8").value
    box_9 = document.getElementById("box_9").value;

    //Checking if player x won and if not after disable all the other field
    if ((box_1 == 'x' || box_1 == 'X') && (box_2 == 'x' || box_2 == 'X') && (box_3 == 'x' || box_3 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_1 == 'x' || box_1 == 'X') && (box_4 == 'x' || box_4 == 'X') && (box_7 == 'x' || box_7 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_7 == 'x' || box_7 == 'X') && (box_8 == 'x' || box_8 == 'X') && (box_9 == 'x' || box_9 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_3 == 'x' || box_3 == 'X') && (box_6 == 'x' || box_6 == 'X') && (box_9 == 'x' || box_9 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_1 == 'x' || box_1 == 'X') && (box_5 == 'x' || box_5 == 'X') && (box_9 == 'x' || box_9 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_3 == 'x' || box_3 == 'X') && (box_5 == 'x' || box_5 == 'X') && (box_7 == 'x' || box_7 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_2 == 'x' || box_2 == 'X') && (box_5 == 'x' || box_5 == 'X') && (box_8 == 'x' || box_8 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }
    else if ((box_4 == 'x' || box_4 == 'X') && (box_5 == 'x' || box_5 == 'X') && (box_6 == 'x' || box_6 =='X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player X won');
    }

    //Checking if Player X finished
    //checking for Player O starts and if player O wont or not
    //Disables game

    else if ((box_1 == '0' || box_1 == '0') && (box_2 == '0' || box_2 == '0') && (box_3 == '0' || box_3 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_1 == '0' || box_1 == '0') && (box_4 == '0' || box_4 == '0') && (box_7 == '0' || box_7 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_2").disabled = true;
        document.getElementById("box_3").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_7 == '0' || box_7 == '0') && (box_8 == '0' || box_8 == '0') && (box_9 == '0' || box_9 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_1").disabled = true;
        document.getElementById("box_2").disabled = true;
        document.getElementById("box_3").disabled = true;
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_3 == '0' || box_3 == '0') && (box_6 == '0' || box_6 == '0') && (box_9 == '0' || box_9 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_1").disabled = true;
        document.getElementById("box_2").disabled = true;
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_5").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_1 == '0' || box_1 == '0') && (box_5 == '0' || box_5 == '0') && (box_9 == '0' || box_9 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_2").disabled = true;
        document.getElementById("box_3").disabled = true;
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_3 == '0' || box_3 == '0') && (box_5 == '0' || box_5 == '0') && (box_7 == '0' || box_7 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_1").disabled = true;
        document.getElementById("box_2").disabled = true;
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_2 == '0' || box_2 == '0') && (box_5 == '0' || box_5 == '0') && (box_8 == '0' || box_8 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_1").disabled = true;
        document.getElementById("box_3").disabled = true;
        document.getElementById("box_4").disabled = true;
        document.getElementById("box_6").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((box_4 == '0' || box_4 == '0') && (box_5 == '0' || box_5 == '0') && (box_6 == '0' || box_6 =='0')) {
        document.getElementById('print')
            .innerHTML = 'Player 0 won';
        document.getElementById("box_1").disabled = true;
        document.getElementById("box_2").disabled = true;
        document.getElementById("box_3").disabled = true;
        document.getElementById("box_7").disabled = true;
        document.getElementById("box_8").disabled = true;
        document.getElementById("box_9").disabled = true;
        window.alert('Player 0 won');
    }

    //Checking for if player 0 finishes and checking for tie
    else if ((box_1 == 'X' || box_1 == '0') && (box_2 == 'X'
    || box_2 == '0') && (box_3 == 'X' || box_3 == '0') &&
    (box_4 == 'X' || box_4 == '0') && (box_5 == 'X' ||
    box_5 == '0') && (box_6 == 'X' || box_6 == '0') &&
    (box_7 == 'X' || box_7 == '0') && (box_8 == 'X' ||
    box_8 == '0') && (box_9 == 'X' || box_9 == '0')) {
        document.getElementById('print')
            .innerHTML = 'Match Tie';
        window.alert('Match Tie');
    }
    //Printing Result
    else {
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

//Function to reset the game
function reset () {
    location.reload();
    document.getElementById('box_1').value = '';
    document.getElementById('box_2').value = '';
    document.getElementById('box_3').value = '';
    document.getElementById('box_4').value = '';
    document.getElementById('box_5').value = '';
    document.getElementById('box_6').value = '';
    document.getElementById('box_7').value = '';
    document.getElementById('box_8').value = '';
    document.getElementById('box_9').value = '';
}

//Function checks the turn of the players and puts the appropriate value
flag = 1;
function myfunc_3 () {
    if (flag == 1) {
        document.getElementById("box_1").value = "X";
        document.getElementById("box_1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_1").value = "0";
        document.getElementById("box_1").disabled = true;
        flag = 1;
    }
}

function myfunc_4 () {
    if (flag == 1) {
        document.getElementById("box_2").value = "X";
        document.getElementById("box_2").disabled = true;
        flag = 1;
    }
    else {
        document.getElementById("box_2").value = "0";
        document.getElementById("box_2").disabled = true;
        flag = 1;
    }
}

function myfunc_5 () {
    if (flag == 1) {
        document.getElementById("box_3").value = "X";
        document.getElementById("box_3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_3").value = "0";
        document.getElementById("box_3").disabled = true;
        flag = 1;
    }
}

function myfunc_6 () {
    if (flag == 1) {
        document.getElementById("box_4").value = "X";
        document.getElementById("box_4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_4").value = "0";
        document.getElementById("box_4").disabled = true;
        flag = 1;
    }
}

function myfunc_7 () {
    if (flag == 1) {
        document.getElementById("box_5").value = "X";
        document.getElementById("box_5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_5").value = "0";
        document.getElementById("box_5").disabled = true;
        flag = 1;
    }
}

function myfunc_8 () {
    if (flag == 1) {
        document.getElementById("box_6").value = "X";
        document.getElementById("box_6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_6").value = "0";
        document.getElementById("box_6").disabled = true;
        flag = 1;
    }
}

function myfunc_9 () {
    if (flag == 1) {
        document.getElementById("box_7").value = "X";
        document.getElementById("box_7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_7").value = "0";
        document.getElementById("box_7").disabled = true;
        flag = 1;
    }
}

function myfunc_10 () {
    if (flag == 1) {
        document.getElementById("box_8").value = "X";
        document.getElementById("box_8").disabled = true;
        flag = 0
    }
    else {
        document.getElementById("box_8").value = "0";
        document.getElementById("box_8").disabled = true;
        flag = 1;
    }
}

function myfunc_11 () {
    if (flag == 1) {
        document.getElementById("box_9").value = "X";
        document.getElementById("box_9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box_9").value = "0";
        document.getElementById("box_9").disabled = true;
        flag = 1;
    }
}
