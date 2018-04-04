new Vue({
  el: '#app',
  data: {
    value: 0,
  },
  computed: {
    output: function(value) {
      return this.value < 37 ? 'not there yet' : 'done';
    }
  },
  watch: {
    value: function(value) {
      var vm = this;
      setTimeout(function(){
        vm.value = 0;
      }
    }
  },
  methods: {
    result: function(value) {
      return this.value < 37 ? 'not there yet' : 'done';
    }
  }
});
