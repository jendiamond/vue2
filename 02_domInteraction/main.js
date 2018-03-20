new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com/',
  },
  methods: {
    getTitle: function() {
      return this.title;
    },
    sayHello: function() {
      return 'Hello Jen';
    }
  }
});
