new Vue({
  el: '#exercise',
  data: {
    val1: '',
    val2: '',
  },
  methods: {
    showAlert: function() {
      document.getElementById('horn').play();
      alert('ALERT! :O');
    },
    storeValue1: function(event){
      this.val1 = event.target.value;
    },
    storeValue2: function(event){
      this.val2 = event.target.value;
    }
  }
});
