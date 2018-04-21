new Vue({
  el: '#monsterslayer',
  data: {
    gameOn: false,
    playerHealth: 100,
    monsterHealth: 100,
  },
  methods: {
    startGame(){
      this.gameOn = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.playerHealth -= this.calculateDamage(4, 12);
      this.monsterHealth -= this.calculateDamage(3, 10);
      this.checkForWin();
    },
    getRandom: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      //Both the maximum and the minimum are inclusive
    },
    calculateDamage: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    checkForWin() {
      if (this.monsterHealth <= 0){
        if (confirm("YOU DESTROYED THE MONSTER!  :0")){
          this.startGame();
        } else {
            this.gameOn = false;
        }
        return true;
      } else if (this.playerHealth <= 0){
        if (confirm("THE MONSTER ATE YOU!  :(")){
          this.startGame();
        } else {
        this.gameOn = false;
        }
        return true;
      }
      return false;
    },
  }
});
