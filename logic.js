async function fetchPokemon(pokemon)
{10
    try 
    {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon);
        if(!response.ok)
        {
            throw new Error("Error! Status: " + response.status);
        }
        const data = await response.json();
        return data;
    } 
    catch(error)
    {
        console.log("Fetch error:" + error);
    }
}