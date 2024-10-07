// Función para obtener la tarea más larga

const obtenerTareaMasLarga = (tareas) => {
    let tareaMasLarga = '';

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].length > tareaMasLarga.length) {
            tareaMasLarga = tareas[i];
        }
    }

    return tareaMasLarga;
};

// Inicializamos el array para las tareas

const tareas = [];

// Preguntamos al usuario cuántas tareas desea ingresar

const cantidadDeTareas = parseInt(prompt("¿Cuántas tareas deseas agregar?"));

// Usamos un bucle para permitir al usuario agregar tareas

for (let i = 0; i < cantidadDeTareas; i++) {
    const tarea = prompt(`Ingresa la tarea #${i + 1}:`);
    tareas.push(tarea);
}

// Comprobamos si hay tareas en la lista

if (tareas.length > 0) {
    // Obtenemos la tarea más larga

    const tareaMasLarga = obtenerTareaMasLarga(tareas);
    // Mostramos el resultado al usuario

    alert(`La tarea más larga ingresada es: "${tareaMasLarga}"`);
} else {
    alert("No se ingresaron tareas.");
}

// le dedico este trabajo a dani carvajal que se rompio el LCA hace poco, el mejor lateral derecho del universo <3

















