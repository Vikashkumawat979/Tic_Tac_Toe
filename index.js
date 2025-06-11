var flag = true;
var state = [0, 1, 0, 0, 1, 1, 1, 0, 0];
var winner_div = document.getElementById('winner');
var player1_score = 0;
var player2_score = 0;
var player1_input_name = document.getElementById('name1');
var player2_input_name = document.getElementById('name2');
var player1_name = document.getElementById('player1-name');
var player2_name = document.getElementById('player2-name');
var name1 = "X";
var name2 = "O";
var winCount1 = 0;
var winCount2 = 0;


function setName(default_name) {

    if(default_name)
    {
        if (player1_input_name.value != "" && player1_input_name.value != "") {
            name1 = player1_input_name.value;
            name2 = player2_input_name.value;
            hideShow();
            player1_name.innerText = name1;
            player2_name.innerText = name2; 
        }
        else
        {
            alert("Please fill the required fields !!");
        }
    }
    else
    {
        hideShow();
    }
}


document.querySelector('.game-table').addEventListener('click', function (a) {
    // console.log(e.target.id);
    var targeted_id = a.target.id;
    var targeted_div = document.getElementById(targeted_id);

    // if (targeted_div.innerText == "" && (state[targeted_id] == 1 || state[targeted_id] == 0))
    // if (state[targeted_id] != "X" && state[targeted_id] != "O")
    if (state[targeted_id] == 1 || state[targeted_id] == 0) {
        if (flag) {
            targeted_div.innerText = "X";
            state[targeted_id] = "X";
        }
        else {
            targeted_div.innerText = "O";
            state[targeted_id] = "O";
        }
        flag = !flag;
        checkWinner(!flag);
    }
    console.log(state);
});

function checkWinner(player) {
    if (state[0] == state[1] && state[0] == state[2]) {
        // alert("Row 1 winner");
        // player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";

        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        // applyWinningPattern(0, 1, 2);
        setDisabled();
        applyWinningPattern(0, 1, 2);
        displayScore();
    }
    else if (state[3] == state[4] && state[3] == state[5]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Row 2 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(3, 4, 5);
        displayScore();
    }
    else if (state[6] == state[7] && state[6] == state[8]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Row 3 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(6, 7, 8);
        displayScore();
    }
    else if (state[0] == state[3] && state[0] == state[6]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Col 1 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(0, 3, 6);
        displayScore();
    }
    else if (state[1] == state[4] && state[1] == state[7]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Col 2 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(1, 4, 7);
        displayScore();
    }
    else if (state[2] == state[5] && state[2] == state[8]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Col 3 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(2, 5, 8);
        displayScore();

    }
    else if (state[0] == state[4] && state[0] == state[8]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Dia 1 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(0, 4, 8);
        displayScore();

    }
    else if (state[2] == state[4] && state[2] == state[6]) {
        //player ? winner_div.innerText = "Winner X" : winner_div.innerText = "Winner O";
        //alert("Dia 2 winner");
        if(player)
        {
            winner_div.innerText = `Winner ${name1}`;
            ++winCount1;
        }
        else
        {
            winner_div.innerText = `Winner ${name2}`;
            ++winCount2;
        }
        setDisabled();
        applyWinningPattern(2, 4, 6);
        displayScore();

    }
    else {
        //Draw
        // alert("Draw!!");
        var x = 9;
        for (var i = 0; i < state.length; i++) {
            if (state[i] != 1 && state[i] != 0) {
                x--;
                console.log(x);
            }
        }

        if (x == 0) {
            winner_div.innerText = "It's Draw !!";

            for (var i = 0; i < state.length; i++) {
                document.getElementById(i).style.backgroundColor = "yellowgreen";
                document.getElementById(i).style.color = "red";
            }
        }
    }
}
function displayScore() {
    if (winCount1 > 0 || winCount2 > 0) {
        document.querySelector('#p1-score').innerText = winCount1;
        document.querySelector('#p2-score').innerText = winCount2;
    }
}
function applyWinningPattern(a, b, c) {
    document.getElementById(a).style.background = "#ff8080";
    document.getElementById(b).style.background = "#ff8080";
    document.getElementById(c).style.background = "#ff8080";
}
function reset() {

    // remove winning pattern and X or O
    for (var i = 0; i < state.length; i++) {
        document.getElementById(i).style.backgroundColor = "#goldenrod";
        document.getElementById(i).innerText = "";
         document.getElementById(i).style.color = "white";
    }
    // set to initial value:
    state = [0, 1, 0, 0, 1, 1, 1, 0, 0];

    flag = true;
}
function restart() {
    // window.location.reload();
    location.reload();
}
function hideShow() {
    // setName();
    document.getElementById('form-div').style.display = "none";
    document.getElementById('game-div').style.display = "block";

}

function setDisabled() {
    for (var i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0) {
            state[i] = null;
        }
    }
}