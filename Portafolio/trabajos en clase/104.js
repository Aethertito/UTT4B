var url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => response.json())
// .then(response => {
//     response.forEach(element => {
//         console.log(element.title)
//     });
// })

// fetch(url,{
// method: "POST",
// headers: {
//     "Content_type": "application/json"
// },
// body: JSON.stringify({
//     userId: 1,
//     title: "lorem ipsum etc etc"
// })
// }).then(response => response.json())
//     .then(response => console.log(response))

// crear un nuevo User
// leer username, email , address y company



fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      users: [
        {
          username: "Aethertito",
          email: "0322103721@ut-tijuana.edu.mx",
          address: {
            street: "Rogelio Mendoza",
            suite: "#150",
            city: "Tijuana",
            zipcode: "22204"
          },
          company: {
            name: "Axis Company"
          }
        }
      ]
    })
  })
    .then(response => response.json())
    .then(response => console.log(response));


    /////
  
    fetch(url).then(response => response.json())
    .then(response => {
      response.forEach(user => {
        console.log("Username:", user.username);
        console.log("Email:", user.email);
    
        console.log("Address:");
        console.log("Street:", user.address.street);
        console.log("Suite:", user.address.suite);
        console.log("City:", user.address.city);
        console.log("Zipcode:", user.address.zipcode);
  
        console.log("Company:");
        console.log("Name:", user.company.name);
  
        console.log("----------------------");
      });
    });
  