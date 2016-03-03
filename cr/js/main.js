window.addEventListener('load', chooseCmates())

'use strict'

console.log("Im wurking");

var c = [
  {"firstName":"Test1", "lastName":"TEST2"}
]

function chooseCmates() {
  var randomN = Math.floor((Math.random() * 6));
  console.log(c[0].lastName);
}
