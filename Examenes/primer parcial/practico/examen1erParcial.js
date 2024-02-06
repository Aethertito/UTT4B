const readline = require('readline');
const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/todos";

// TODOS LOS PENDIENTES
function obtenerPendientes() {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => console.error('Error al obtener la lista de pendientes:', error));
}

////////////////////////////////////////////////////////////////////////// MENU
function mostrarMenu() {
    console.log("Select an option:");
    console.log("1. List of all pending tasks (IDs only)");
    console.log("2. List of all pending tasks (IDs and titles)");
    console.log("3. List of all unresolved pending tasks (ID and title)");
    console.log("4. List of all resolved pending tasks (ID and title)");
    console.log("5. List of all pending tasks (IDs and userID)");
    console.log("6. List of all resolved pending tasks (ID and userID)");
    console.log("7. List of all unresolved pending tasks (ID and userID)");
    console.log("8. Exit");
}

// Lista de todos los pendientes (solo IDs)
function mostrarIDs() {
    obtenerPendientes()
        .then(pendientes => {
            pendientes.forEach(pendiente => {
                console.log("ID:", pendiente.id);
            });
        });
}

// Función para mostrar la lista de todos los pendientes (IDs y títulos)
function mostrarIDsyTitulos() {
    obtenerPendientes()
        .then(pendientes => {
            pendientes.forEach(pendiente => {
                console.log("ID:", pendiente.id, "| Title:", pendiente.title);
            });
        });
}

//Lista de todos los pendientes sin resolver (ID y Título)
function mostrarPendientesSinResolver() {
    obtenerPendientes()
        .then(pendientes => {
            const sinResolver = pendientes.filter(pendiente => !pendiente.completed);
            sinResolver.forEach(pendiente => {
                console.log("ID:", pendiente.id, "| Title:", pendiente.title);
            });
        });
}

//Lista de todos los pendientes resueltos (ID y Título)
function mostrarPendientesResueltos() {
    obtenerPendientes()
        .then(pendientes => {
            const resueltos = pendientes.filter(pendiente => pendiente.completed);
            resueltos.forEach(pendiente => {
                console.log("ID:", pendiente.id, "| Title:", pendiente.title);
            });
        });
}

//Lista de todos los pendientes (IDs y userID)
function mostrarIDsyUserID() {
    obtenerPendientes()
        .then(pendientes => {
            pendientes.forEach(pendiente => {
                console.log("ID:", pendiente.id, "| UserID:", pendiente.userId);
            });
        });
}

//Lista de todos los pendientes resueltos (ID y userID)
function mostrarPendientesResueltosConUserID() {
    obtenerPendientes()
        .then(pendientes => {
            const resueltos = pendientes.filter(pendiente => pendiente.completed);
            resueltos.forEach(pendiente => {
                console.log("ID:", pendiente.id, "| UserID:", pendiente.userId);
            });
        });
}

//Lista de todos los pendientes sin resolver (ID y userID)
function mostrarPendientesSinResolverConUserID() {
    obtenerPendientes()
        .then(pendientes => {
            const sinResolver = pendientes.filter(pendiente => !pendiente.completed);
            sinResolver.forEach(pendiente => {
                console.log("ID:", pendiente.id, "| UserID:", pendiente.userId);
            });
        });
}

////////////////////////////////////////////////////////////////////////// MENU
function ejecutarMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    mostrarMenu();

    rl.question("Enter the option number: ", (opcion) => {
        opcion = parseInt(opcion);

        switch (opcion) {
            case 1:
                console.log("\nList of all pending tasks (IDs only):");
                mostrarIDs();
                break;
            case 2:
                console.log("\nList of all pending tasks (IDs and titles):");
                mostrarIDsyTitulos();
                break;
            case 3:
                console.log("\nList of all unresolved pending tasks (ID and title):");
                mostrarPendientesSinResolver();
                break;
            case 4:
                console.log("\nList of all resolved pending tasks (ID and title)");
                mostrarPendientesResueltos();
                break;
            case 5:
                console.log("\nList of all pending tasks (IDs and userID):");
                mostrarIDsyUserID();
                break;
            case 6:
                console.log("\nList of all resolved pending tasks (ID and userID):");
                mostrarPendientesResueltosConUserID();
                break;
            case 7:
                console.log("\nList of all unresolved pending tasks (ID and userID)");
                mostrarPendientesSinResolverConUserID();
                break;
            case 8:
                console.log("\n Goodbye!");
                rl.close();
                break;
            default:
                console.log("Please enter a number from 1 to 8.");
                rl.close();
        }
    });
}

ejecutarMenu();
