let pokemonValue = document.getElementById("getPokemon");
let getPokemonButton = document.getElementById("getPokemonButton");

//call the pokemon API using the pokemon that the user inputs
getPokemonButton.addEventListener("click", function()
{
    console.log(pokemonValue.value);
    fetchPokemon(pokemonValue.value).then(data =>
        {
            console.log(data);
        }
    );
    pokemonValue.value = "";
}
);