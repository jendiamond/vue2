new Vue({
  el: '#app',
  data: {
    selectClass: {
      shrink: true,
      highlight: false,
    },
    width: 300,
    borderClass: '500px dotted aqua',
    boxStyling: '',
    boxStyling2: '',
    aquas: 'aquas',
    fuchsias: 'fuchsias',
    greens: 'greens',
    blue: 'blue',
    isVisible: true,
    userStyle: {
      width: '100px',
      height: '100px',
      border: '1px solid #ccc',
      margin: '10px',
      borderRadius: '50%',
      backgroundColor: 'lightsalmon',
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'mediumseagreen',
    },
    display1: false,
    display2: false,
    display3: false,
    display4: false,
    display5: false,
    display6: false,
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
      var vm = this;
      setInterval(function () {
        vm.selectClass.shrink = !vm.selectClass.shrink;
        vm.selectClass.highlight = !vm.selectClass.highlight;
      }, 3000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 30;
        vm.progressBar.width = width + 'px';
      }, 500);
    },
  }
});
