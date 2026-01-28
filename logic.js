async function fetchPokemon(pokemon)
{
    try 
    {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon);
        if(!response.ok)
        {
            throw new Error("Error! Status: " + response.status);
        }
        const data = await response.json();
        
        const sanitizedData = {
            name: data.name,
            id: data.id,
            baseExperience: data.base_experience,
            primaryAbility: data.abilities[0].ability.name
        };
        return sanitizedData;
    } 
    catch(error)
    {
        console.log("Fetch error:" + error);
    }
}