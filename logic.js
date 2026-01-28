async function fetchPokemon(pokemon)
{
    try 
    {
        const url = new URL(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        url.searchParams.set('limit', '10');
        const response = await fetch(url.toString());

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