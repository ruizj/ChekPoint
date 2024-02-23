const url = "https://swapi.dev/api/people/";

    async function fetchPersonajes() {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }
    
    async function mostrarPersonajes(generoSeleccionado) {
        const personajes = await fetchPersonajes();
        const listadoPersonajes = document.getElementById("listado-personajes");

        listadoPersonajes.innerHTML = "";

        //Iterar sobre la lista de personajes 
        //y mostrar aquellos que coincidan con el género seleccionado
        personajes.forEach(personaje => {
            //// Si el género seleccionado es "all" o coincide con el género del personaje
            if (generoSeleccionado === "all" || personaje.gender.toLowerCase() === generoSeleccionado) {
                const lista = document.createElement("li");
                lista.textContent = personaje.name;
                listadoPersonajes.appendChild(lista);
            }
        });
    }

    const generoSelector = document.getElementById("genero");

    // Cargar todos los personajes al cargar la página
    mostrarPersonajes("all");

    // Manejar cambios en el menú desplegable
    generoSelector.addEventListener("change", () => {
        const selectedGenero = generoSelector.value;
        mostrarPersonajes(selectedGenero);
    });