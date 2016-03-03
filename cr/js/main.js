window.addEventListener('load', chooseCmates())

'use strict'

console.log("Im wurking");

var c = [
  {"firstName":"MarinB", "lastName":"MB"}
]

function chooseCmates() {
  var randomN = Math.floor((Math.random() * 6));
  console.log(c[0].firstName);
}
