new Vue({
  el: '#app',
  data: {
    counter: 0,
    counter2: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    increaseByN: function(step, event){
      this.counter2 += step
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(){
      alert('Alert');
    },
  }
});
