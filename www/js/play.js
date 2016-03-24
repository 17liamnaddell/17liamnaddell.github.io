// STATE: DogeDodge.play

'use strict'

var DogeDodge = {};
DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {
  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of skilstak", "color:#fdf6e3; background:#073642");
  },
  preload: function () {
    this.load.image('background','assets/flappyBackground.png',320,568);
    this.load.spritesheet('dodger', 'assets/char.png',34,30,2);
    this.load.spritesheet('doge', 'assets/fone.png' ,28,28,2);
  },
  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);
    //dodger
    this.dodger = this.add.sprite(160,510, 'dodger');
    this.dodger.scale.set(2);
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.checkWorldBounds = true;
    //movement keys
    this.cursors = game.input.keyboard.createCursorKeys();
    //doge
    this.doge = this.add.sprite(28,28, 'doge');
  },
  update: function () {
    this.doge.y += 20
    if (this.cursors.left.isDown) {
      this.dodger.x -= 10;
      this.dodger.scale.set(-1)
    }
    if (this.cursors.right.isDown) {
      this.dodger.x += 10;
      this.dodger.scale.set(2)
    }
    if (this.cursors.up.isDown) {
      this.dodger.y -= 10;
    }
    if (this.cursors.down.isDown) {
      this.dodger.y += 10;
    }
    if (this.doge.y > 568) {
      this.doge.y = 10;
      this.doge.x = game.rnd.integerInRange(1, 320);
    }

  }
  handleCollision: function() {
    console.log("OUUUUUUUUUCH!");

  }
};
