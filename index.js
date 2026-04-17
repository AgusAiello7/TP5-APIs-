async function buscarPokemonNombre(){
    const nombrePokemon = document.getElementById("nombrePokemon").value
    const loader =  document.getElementById("loader")

    try{
    loader.style.display = "block"
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
    const obj = await res.json()
    console.log(obj)

    let tipos = ""
    for(let i = 0; i<obj.types.length; i++)
    {
        tipos = tipos + `${obj.types[i].type.name}, `
    }

    loader.style.display = "none"
    document.getElementById("info1Pokemon").innerHTML = `Nombre: ${obj.name}`
    document.getElementById("info2Pokemon").innerHTML = `Peso: ${obj.weight}`
    document.getElementById("info3Pokemon").innerHTML = `Altura: ${obj.height}`
    document.getElementById("info4Pokemon").innerHTML = `Tipos: ${tipos}`
    document.getElementById("imagen").src = obj.sprites.front_default
    } 
    
    catch (error) {
        console.error('Error', error)
        loader.style.display = "block"
        loader.innerHTML = "Error"
        document.getElementById("imagen").src = "https://cdn-icons-png.flaticon.com/512/103/103085.png"
    }

}

