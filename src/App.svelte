<script>
  import Buttons from "./Buttons.svelte";
  import Block from "./Block.svelte";
</script>

<style>
  .greeting {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4%;
  }
  .wrapper {
    display: flex;
    height: 440px;
    width: 475px;
    padding: 1%;
    border-radius: 10px;
    background-color: DodgerBlue;
    margin: auto;
  }
  .outer-box {
    background-color: dodgerblue;
    text-align: center;
    flex-grow: 1;
    font-size: 30px;
    align-content: center;
  }
</style>

<main>
  <div class = "greeting">
  <h1>Tic-Tac-Toe</h1>
  </div>
  <Buttons/>

  <div class="wrapper">
    <div class="outer-box">
      <Block id={'block1'} />
      <Block id={'block2'} />
      <Block id={'block3'} />

    </div>
    <div class="outer-box">
      <Block id={'block4'} />
      <Block id={'block5'} />
      <Block id={'block6'} />

    </div>
    <div class="outer-box">
      <Block id={'block7'} />
      <Block id={'block8'} />
      <Block id={'block9'} />
    </div>
  </div>
</main>
