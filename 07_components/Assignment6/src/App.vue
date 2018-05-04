<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Components</h1>
      </div>
      <hr>
      <app-header></app-header>
      <app-servers></app-servers>
      <app-server-details></app-server-details>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Servers from './components/Servers.vue';
  import ServerDetails from './components/ServerDetails.vue';

  export default {
    components: {
     'app-header': Header,
     'app-footer': Footer,
     'app-servers': Servers,
     'app-server-details': ServerDetails,
    }
  }
</script>

<style>

</style>
