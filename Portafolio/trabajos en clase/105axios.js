//import axios from 'axios'
const axios = require('axios')

const url = "https://jsonplaceholder.typicode.com/users";

// axios.get(url).then(({data}) => {
//     data.forEach(element => {
//         console.log(element)

//     });
// })

// axios.post(url, {
//     username: "foo" ,
//     mail: "fooFoo.com"
// }).then(response => {
//     if(response.status===201){
//         console.log("Registro fue guardado de manera correcta")
//     }
// })