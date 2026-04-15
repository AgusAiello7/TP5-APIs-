async function buscarPokemonNombre(){
    let nombrePokemon = document.getElementById("nombrePokemon").value
    try{
    const res = await fetch(`http://www.omdbapi.com/?i=${nombrePokemon}&apikey=f2885c6e`)
    const obj = await res.json()
    console.log(obj)

    document.getElementById("info1Pokemon").innerHTML = `Año: ${obj.Year}`
    document.getElementById("info2Pokemon").innerHTML = `Duración: ${obj.Runtime}`
    document.getElementById("info3Pokemon").innerHTML = `Director: ${obj.Director}`
    } catch (error) {
        console.error('Error', error)
    }

}


//const objPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 