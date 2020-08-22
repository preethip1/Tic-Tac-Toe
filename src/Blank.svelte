<script>
  import { turn } from "./store.js";
  export let move = "";
  
  function update() {
    if (move == "") {
      turn.update((turn_value) => {
        if (turn_value == "player1") {
          move = "X";
          turn_value = "player2";
        } else if (turn_value == "player2") {
          move = "O";
          turn_value = "player1";
        }
        return turn_value;
      });
    }
  }
  // function clicked() {
  //   if (turn == "player1") {
  //     move = "X";
  //     turn = "player2";
  //   } else if (turn == "player2") {
  //     move = "O";
  //     turn = "player1";
  //   }
  // }
</script>

<style>
  .move {
    border: solid 1px gray;
    height: 125px;
    width: 125px;
    flex: 1;
    font-size: 100px;
    text-align: center;
    line-height: 125px;
  }
</style>

<div on:click={update} class="move">{move}</div>
