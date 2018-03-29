new Vue({
  el: '#app',
  data: {
    name: 'Jen',
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    result2: 0,
    secondCounter: 0,
  },
  computed: {
    output: function(){
      return this.counter3 > 5 ? 'Greater than 5' : 'Less than 5';
    }
  },
  methods: {
    increase: function(step, event){
      this.counter1 += step;
    },
    increase2: function(step, event){
      this.counter2++;
      this.result2 = this.counter2 > 10 ? 'Greater than 10' : 'Smaller than 10';
    },
    decrease2: function(step, event){
      this.counter2--;
      this.result2 = this.counter2 > 10 ? 'Greater than 10' : 'Smaller than 10';
    },
    result3: function() {
      return this.counter3 > 5 ? 'Greater than 5' : 'Less than 5';
    },
  }
});
