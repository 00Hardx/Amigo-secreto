let amigos = [];
// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("inputName");
    let nombre = input.value.trim();
    let resultado = document.getElementById("resultado");

    if (nombre) {
        amigos.push(nombre);
        input.value = "";
        resultado.textContent = `Amigo ${nombre} agregado correctamente.`;
    } else {
        resultado.textContent = "Escribe un nombre válido.";
        return;
    }
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigosSecreto() {
    if (amigos.length < 2) {
        document.getElementById("resultado").textContent = "Necesitas al menos dos amigos para hacer el sorteo.";
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indice];
    document.getElementById("resultado").textContent = `Tu amigo secreto seleccionado es: ${amigoSeleccionado}`;
}