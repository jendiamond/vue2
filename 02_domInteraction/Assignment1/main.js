new Vue({
  el: '#app',
  data: {
    name: 'Jen Diamond',
    age: 33,
    dataAndMethodsLink: "<a href ='https://youtu.be/2MAoq2-2nnE'>Data and Methods Tutorial</a>",
    peep: 'https://i.pinimg.com/736x/8c/50/4c/8c504c6758edfab2e84fa1fbf129ba31--peep-show-happy-happy-happy.jpg',
  },
  methods: {
    multipyByThree: function(num) {
      return parseInt(num) * 3;
    },
    getRandomNum: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max)+ 1;
      return Math.floor(Math.random() * (max - min)) + min;
    },
    changeName: function(argument) {
      this.name = event.target.value;
    },
    changeAge: function(argument) {
      this.age = event.target.value;
    },
  }
});
