new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com/',
    finishedLink: "<a href='http://google.com/'>Google</a>",
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
