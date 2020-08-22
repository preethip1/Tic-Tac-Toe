<script>
  import { turn } from "./store.js";
  import Move from "./Blank.svelte";
  import Blank from "./Blank.svelte";
  let turn_value;

  turn.subscribe((player) => {
    turn_value = player;
  });
</script>

<style>
  main {
    width: 475px;
    margin: 0 auto;
    height: 1000px;
  }
  .outer-box {
    display: flex;
  }
  button {
    width: 100%;
    margin-top: 20px;
    background-color: lightblue;
    font-size: 30px;
  }
  button:hover {
    outline: none;
  }
</style>

<main>
  <h1>Tic Tac Toe</h1>
  <h2>Number of people playing :</h2>
  <h2>Player {turn_value}</h2>
  <div class="outer-box">
    <Move />
    <Move />
    <Move />

  </div>
  <div class="outer-box">
    <Move />
    <Move />
    <Move />

  </div>
  <div class="outer-box">
    <Move />
    <Move />
    <Move />

  </div>
  <button>New game</button>
</main>
