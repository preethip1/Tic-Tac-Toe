<script>
  import { turn } from "./store.js";
  import { player } from "./store.js";
  import { option } from "./store.js";

  export let move = "";
  export let id;
  let turn_value;

  turn.subscribe((player) => {
    turn_value = player;
  });
  let player_value;

  player.subscribe((player) => {
    player_value = player;
  });
  let option_value;

  option.subscribe((option) => {
    option_value = option;
  });

  function getAllMoves() {
    let moves = {
      move1: document.getElementById("block1").innerHTML,
      move2: document.getElementById("block2").innerHTML,
      move3: document.getElementById("block3").innerHTML,
      move4: document.getElementById("block4").innerHTML,
      move5: document.getElementById("block5").innerHTML,
      move6: document.getElementById("block6").innerHTML,
      move7: document.getElementById("block7").innerHTML,
      move8: document.getElementById("block8").innerHTML,
      move9: document.getElementById("block9").innerHTML,
    };
    return moves;
  }

  function allFilled() {
    let count = 0;
    let moves = getAllMoves();
    let values = Object.values(moves);
    for (let i = 0; i < values.length; i++) {
      if (values[i] != "") {
        count = count + 1;
      }
    }
    if (count == 9) {
      return true;
    } else {
      return false;
    }
  }
  function calculateWinner() {
    let winner = "";
    let moves = getAllMoves();
    let values = Object.values(moves);
    // console.log(values);
    if (values[0] == values[1] && values[1] == values[2] && values[0] != "") {
      winner = values[0];
    } else if (
      values[3] == values[4] &&
      values[4] == values[5] &&
      values[3] != ""
    ) {
      winner = values[3];
    } else if (
      values[6] == values[7] &&
      values[7] == values[8] &&
      values[6] != ""
    ) {
      winner = values[6];
    } else if (
      values[0] == values[3] &&
      values[3] == values[6] &&
      values[0] != ""
    ) {
      winner = values[0];
    } else if (
      values[1] == values[4] &&
      values[4] == values[7] &&
      values[1] != ""
    ) {
      winner = values[1];
    } else if (
      values[2] == values[5] &&
      values[5] == values[8] &&
      values[2] != ""
    ) {
      winner = values[2];
    } else if (
      values[0] == values[4] &&
      values[4] == values[8] &&
      values[0] != ""
    ) {
      winner = values[0];
    } else if (
      values[2] == values[4] &&
      values[4] == values[6] &&
      values[2] != ""
    ) {
      winner = values[2];
    }
    return winner;
  }
  // function computerMove() {
  //   let moves = getAllMoves();
  //   let values = Object.values(moves);
  //   let blank;
  //   for (let i = 0; i < values.length; i++) {
  //     if (values[i] == "") {
  //       blank = i + 1;
  //       break;
  //     }
  //   }
  //   let id = "block" + blank;
  //   document.getElementById(id).innerHTML = "X";

  //   let completelyFilled = allFilled();
  //   let winner = calculateWinner();
  //   if (winner != "") {
  //     alert(`Yayy! ${winner == "X" ? "Player1" : "Player2"} is the winner`);
  //   } else {
  //     if (completelyFilled) {
  //       alert("It's a draw");
  //     }
  //   }
  // }

  function computerMove() {
    let moves = getAllMoves();
    let values = Object.values(moves);
    let blank;
    for (let i = 0; i < values.length; i++) {
      if (values[i] == "") {
        blank = i + 1;
        break;
      }
    }
    let id = "block" + blank;
    document.getElementById(id).innerHTML = "X";
    turn.update((turn_value) => {
      turn_value = "Player2";
      return turn_value;
    });
    setTimeout(() => {
      let completelyFilled = allFilled();
      let winner = calculateWinner();
      if (winner != "") {
        alert(`Yayy! ${winner == "X" ? "Player1" : "Player2"} is the winner`);
        window.location.reload();
      } else {
        if (completelyFilled) {
          alert("It's a draw");
          window.location.reload();
        }
      }
    }, 100);
  }

  function update() {
    if (option_value == "Start") {
      if (move == "") {
        //debugger;

        turn.update((turn_value) => {
          console.log("i am here", turn_value);

          if (turn_value == "Player1") {
            turn_value = "Player2";
            move = "X";
          } else if (turn_value == "Player2") {
            turn_value = "Player1";
            move = "O";
          }

          return turn_value;
        });
        setTimeout(() => {
          let completelyFilled = allFilled();

          //if (completelyFilled) {
          //   alert("Completely filled");
          // } else {
          //   alert("Not completely filled");
          // }
          let winner = calculateWinner();
          if (winner != "") {
            // console.log(winner);
            alert(
              `Yayy! ${winner == "X" ? "Player1" : "Player2"} is the winner`
            );
            window.location.reload();
          } else {
            if (completelyFilled) {
              alert("It's a draw");
              window.location.reload();
            }
          }
          console.log(player_value);

          if (player_value == "Single player") {
            computerMove();
          }
        }, 100);
      }
    } else {
      alert("Click the Start button");
    }
  }

  // function clicked() {
  //   if (turn == "Player1") {
  //     move = "X";
  //     turn = "Player2";
  //   } else if (turn == "Player2") {
  //     move = "O";
  //     turn = "Player1";
  //   }
  // }
</script>

<style>
  .move {
    height: 125px;
    width: 125px;
    margin: 7%;
    margin-top: 6%;
    margin-bottom: 4%;
    background-color: #f1f1f1;
    flex: 1;
    font-size: 100px;
    text-align: center;
    line-height: 125px;
    border-radius: 10px;
  }
</style>

<div
  on:click={update}
  class="move"
  style="color:{move == 'O' ? '#2a2833' : '#6c7876'}"
  {id}>
  {move}
</div>
