//arrow functions son funciones mas compactas (normalmente de una linea)\

// var globalThis = this;


// var foo = function(){
//     console.log("Hola mundo")
// }


// var bar = (msg) => {console.log("Hola mundos "+ msg)}
// foo()
// bar("hello")

//ARROW FUNCTIONS


function personLogs(person, ...msg){
    msg.forEach(arg => {
        console.log(person, "says" ,arg);
    });


}
personLogs("Hola", "foo","bar","doe")

//--------------------------------------------------------


.then(resp => resp,json())
.then(json=> console.log(json))
.catch(err=> console.log(err))

fetch("/example.json",{
    headers: new headers({
        "Accept " : "text/plain",
        "X-your-custom-header" : "example value"
    }
    )
})