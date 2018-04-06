new Vue({
  el: '#app',
  data: {
    selectClass: {
      shrink: true,
      highlight: false,
    },
    width: 300,
    color: 'lightblue',
    borderClass: '500px dotted aqua',
  },
  computed: {
    triStyle: function(){
      return {
        width: this.width + 'px',
        backgroundColor: this.color
      }
    }
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
