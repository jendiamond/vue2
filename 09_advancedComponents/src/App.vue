<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary">
          Load Blue Template
        </button>

        <button class="btn btn-success">
          Load Green Template
        </button>

        <button class="btn btn-danger">
          Load Red Template
        </button>

        <hr>

        <app-blue>
          <p>I thank you God for this most amazing day, for the leaping greenly spirits of trees, and for the blue dream of sky and for everything which is natural, which is infinite, which is yes. <br>~ e. e. cummings</p>
        </app-blue>

        <app-green>
          
        </app-green>

        <app-red>
          
        </app-red>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style>
</style>
