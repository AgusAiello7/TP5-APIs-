async function buscarPokemonNombre(){
    let nombrePokemon = document.getElementById("nombrePokemon").value
    const objPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
  
}