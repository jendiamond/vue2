new Vue({
  el: '#exercise',
  data: {
    display: true,
    cuteNames: ['Pikku', 'Friendly', 'Peeps', 'Floofers'],
    books: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      amount: '3'
    },
    testData: {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  },
  methods: {
    capitalizeNames: function(cuteName){
      let cuteNames = this.cuteNames;
      return cuteNames.map( (name) => name.charAt(0).toUpperCase() + name.slice(1) );
    }
  }
});
