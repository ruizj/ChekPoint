document.getElementById("searchInput").addEventListener("input",buscarImagen);

async function buscarImagen() {
  const resultsContainer = document.getElementById("resultsContainer");
  const input = document.getElementById("searchInput");
  

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();

    const characterList = data.results
      .map(
        (character) => `
    <div>
        <h3>${character.name}</h3>
        <img src="${character.image}" >
    </div>
    `
      )
      .join("");
    resultsContainer.innerHTML = characterList;
  } catch (error) {
    console.log(error);
  }
}
buscarImagen();
