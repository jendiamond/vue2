new Vue({
  el: '#monsterslayer',
  data: {
    gameOn: false,
    playerHealth: 100,
    monsterHealth: 100,
  },
  methods: {
    startGame: function(){
      this.gameOn = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    }
  }
});
