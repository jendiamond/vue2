new Vue({
  el: '#app',
  data: {
    attachRed: false,
    attachOrange: false,
    attachYellow: false,
    attachGreen: false,
    attachBlue: false,
    attachIndigo: false,
    attachViolet: false,
    attachPink: false,
    attachCeladon: false,
    attachPaleBlue: false,
    attachWhiteSmoke: false,
    color: 'yellow',
    color2: 'orchid',
    color3: 'violet',
    width: 200,
  },
  computed: {
    pinkish: function() {
      return {
        pink: this.attachPink,
        gray: !this.attachPink,
      }
    },
    myStyle: function(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    },
    myStyle2: function(){
      return {
        backgroundColor: this.color3,
        width: this.width + 'px'
      }
    }
  },
});
