// let colors= [ "red" ];
// let [ firstColor="yellow", secondColor ="green"]= colors;


let colors= [ "red", [ "green", "lightgreen"], "blue"];
let [ firstColor, [ ,secondColor] ] = colors;

console.log(firstColor); 
console.log(secondColor); 