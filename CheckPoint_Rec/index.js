const url = "https://swapi.dev/api/people/";

async function fetchPersonajes(){

    const response = await fetch(url);

    const  data = await response.json();

    return data.results;


}

async function mostrarPersonajes(){

    const personajes = await fetchPersonajes();
    const lisPersonajes = document.getElementById("listado-personajes");

    lisPersonajes.innerHTML = "";

    personajes.forEach(personajes => {
        const lista = document.createElement("li");

        lista.textContent = personajes.name;

        lisPersonajes.appendChild(lista);
        
    });


}

document.getElementById("genero").addEventListener("change",async function(){

    const personajes = await fetchPersonajes();
    const generSelect = document.getElementById("genero");



})

