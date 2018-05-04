<template>
  <div class="col-xs-12 col-sm-6">
    <div class='top'>
    <ul>
      <li
        class='list-group-item'
        v-for='index in 5'>
        Server Number {{ index }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .list-group-item {
    background: goldenrod;
    border: 1px solid #ccc;
    margin-top: 10px;
    color: white;
    font-size: 1.5em;
  }
</style>
