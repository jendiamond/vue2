new Vue({
  el: '#app',
  data: {
    selectClass: {
      shrink: true,
      highlight: false
    },
  },
  methods: {
    startEffect: function () {
      const vm = this;
      setInterval(function () {
        vm.selectClass.shrink = !vm.selectClass.shrink;
        vm.selectClass.highlight = !vm.selectClass.highlight;
      }, 1000);
    },
  }
});
