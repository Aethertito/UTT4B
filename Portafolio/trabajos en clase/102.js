// FUNCIONES DE INVOCACION INMEDIATA
// SE INVOCAN DONDE FUERON DECLARADAS
// IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// const foo = (function(){
//  console.log("Esta es una funcion inmediata")
// }());

// var message = "ZZZZ"
// const bar = (function(message){
//     console.log("Message: "+ message)
//    }(message));

// Al invocar y poner parametros al inicio se tienen que poner los mismos al final

// const joe = (function(){
// return "Hello joe"
// })();
// console.log(joe)

// NAMED FUNCTIONS

var namedSum = function sum(a,b){  //funcion nombrada
    return a + b;
}


console.log(namedSum(56,3))
//console.log(sum(26,5))  ESTO NO SE PUEDE INVOCAR DIRECTAMENTE A LA FUNCION


var say = function say (times){
    if (times > 0){
        console.log(say);
        say (times - 1);
    }
}
var saysay = say;
say = "oops"
saysay(5);
//say(2);


