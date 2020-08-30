<script>
  import { turn } from "./store.js";
  import { player } from "./store.js";
  import { option } from "./store.js";

  //let optionPlayer = { Single: false };

  function start() {
    //console.log(player_value);
    if (option_value == "Reset") {
      option.set("Start");
      if (player_value == "Single player") {
        document.getElementById("block1").innerHTML = "X";
        turn.update((turn_value) => {
          turn_value = "Player2";
          return turn_value;
        });
      }
    } else if (option_value == "Start") {
      option.set("Reset");
      window.location.reload();
    }
  }

  // function togglePlayer() {
  //   player.update((player_value) => {
  //     if (player_value == "Single player") {
  //       player_value = "Multi-player";
  //     } else if (player_value == "Multi-player") {
  //       player_value = "Single player";
  //     }
  //   });
  //   optionPlayer.player = !optionPlayer.player;
  // }

  let turn_value;

  turn.subscribe((player) => {
    turn_value = player;
  });
  let option_value;

  option.subscribe((option) => {
    option_value = option;
  });

  let player_value;

  player.subscribe((player) => {
    player_value = player;
  });

  let value = "2";
  let items = ["Single player", "Multi-player"];
</script>

<style>
  .outline {
    display: flex;
    flex-direction: row;
    width: 500px;
    margin: auto;
  }
  button {
    background-color: #f1f1f1;
    font-size: 25px;
    border-radius: 25px;
    color: #6c7876;
    margin: 3%;
  }
  .buttons {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  .startbutton {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  .player {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .dropdown {
    border-radius: 25px;
    margin-top: 2px;
    margin: 5%;
    font-size: 30px;
    outline: 0px;
    border: 0px;
  }
</style>

<div class="outline">
  <div class="buttons">

    <!-- {#if optionPlayer.player}
      <button on:click={togglePlayer} type="button" class="btn btn-primary">
        Multi-player
      </button>
    {/if} -->

    <!-- {#if !optionPlayer.player}
      <button on:click={togglePlayer} type="button" class="btn btn-primary">
        Single player
      </button>
    {/if} -->
    <select class="dropdown btn btn-primary" bind:value={$player}>
      {#each items as item}
        <option value={item}>{item}</option>
      {/each}
    </select>

    <div class="startbutton">
      {#if option_value == 'Start'}
        <button on:click={start} type="button" class="btn btn-primary">
          Reset
        </button>
      {/if}

      {#if option_value == 'Reset'}
        <button on:click={start} type="button" class="btn btn-primary">
          Start
        </button>
      {/if}
    </div>
  </div>
  {#if player_value == 'Multi-player'}
    <div class="player">
      <button type="button" class="btn btn-primary">{turn_value}</button>
    </div>
  {/if}
  {#if player_value == 'Single player'}
    <div class="player">
      <button type="button" class="btn btn-primary">
        {turn_value == 'Player1' ? 'Computer' : 'Player'}
      </button>
    </div>
  {/if}

</div>
