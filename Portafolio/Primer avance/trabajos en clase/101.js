//console.log("Hola mundo")

let x = 89
var y = 78

//console.log(x+y)

y = "Foo Bar"

//console.log(y)

array = [2, "any type works", undefined, null, true, 2.55]
//console.log(array[0] * array[5])

obj = {
    name: "Foo",
    age: 23,
    city: "TJ"
}

//console.log(obj ["name"],obj["age"])
//console.log(obj.name)

//console.log(Object.keys(obj));

//for (let i=0; i<100;i+=5){
//    console.log(i)
//}

//for (let index=0; index<array.length; index++){
  //  console.log(array[index])
//}
//for (let i of array){
  //  console.log(i)
//}

//for(let key of Object.keys(obj)){
//console.log(key + ": " + obj[key])
//}

//for (let key in obj){
  //console.log(key + ": " + obj[key]) 
//}


//console.log(obj["name"])
//console.log(obj.city)



var i=1000
var k=1000

//while(i<1000){
  //console.log(i)
  //i+=5
//}

//do{
//console.log(k + " este es k")
//k+=5
//}while(k<1000)


var gatito = 'cute'

var ternary = (gatito === 'cute') ? 'cute' : 'still nice'
console.log(ternary)



if(gatito === 'cute'){
  console.log("This kitty is pretty cute")
} else {
  console.log("This is a Ordinary Kitty")
}


//SWTICH STATEMENT

var value = 1
switch(value){
  case 1:
    console.log("caso 1")
    break;
    case 2:
      console.log("caso 2")
      break;
      default:
        console.log("soy el default")
}


//Functions

//function foo(){
  //var a = 'hello'
  //console.log(a)
//}


//var a = 'hello'
//function foo(){
  //var a = 'world'

  //function bar(){
    //console.log(a) // 'world'
 // }
//}
//siempre llamara primero a la local,asi que es mejor evitar nombres repetidos

//Calcular el area del triangulo

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

var base = 5;
var altura = 15;

console.log("El área es: " + areaTriangulo(base, altura));



var fun= function base(b,h){
  return (b*h)/2
}
console.log(fun)

//recuerda si declaramos una variable dentro de una funcion se vuelve local.