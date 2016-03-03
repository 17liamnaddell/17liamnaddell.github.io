'use strict'

console.log("Im wurking");

var cmates = {
  LukeC : [
    "Luke C",
    "LC",
  ]
  ParkerS : [
    "Parker S",
    "PS",
  ],
  WalkerS : [
    "Walker S",
    "WS",
  ],
  LiamN : [
    "Liam N",
    "LN",
  ],
  MarinB : [
    "Marin B",
    "MB",
  ],
  AaronB : [
    "Aaron B",
    "AB",
  ]
}
window.addEventListener('load', chooseCmates());

function chooseCmates() {
  var randomN = Math.floor((Math.random() * 6));
  var c1 = cmates.0.[0];
  console.log(c1);
}
