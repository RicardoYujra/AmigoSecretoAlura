// Array para almacenar los nombres de los amigos
const amigos = [];

// Referencias a elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = '';

    // Actualizar la lista en pantalla
    actualizarLista();
}

function actualizarLista() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';

    // Crear un <li> por cada amigo y agregarlo a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    // Limpiar resultado si hay alguno
    resultado.innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade al menos un nombre.');
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}