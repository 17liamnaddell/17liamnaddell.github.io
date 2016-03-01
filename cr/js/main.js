'use strict'

console.log("Im wurking");

var c = [
  LukeC[
    "Luke C",
    "LC",
  ],
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
]
window.addEventListener('load', chooseCmates());

function chooseCmates() {
  var randomN = Math.floor((Math.random() * 6));
  var c1 = c.[randomN].[0];
  console.log(c1);
}
