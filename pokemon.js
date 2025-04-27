// 1. Función normal con un parámetro
function choosePokemon(pokemon) {
    return `I choose you ${pokemon}`;
}
choosePokemon('Pikachu'); // I choose you Pikachu

// 2. Función flecha simple (corregido uso de backticks)
const choosePokemon2 = pokemon => `I choose you ${pokemon}`;
choosePokemon2('Charmander'); // I choose you Charmander

// 3. Función flecha con console.log
const choosePokemonArrow2 = pokemon => {
    console.log('Logging!');
    return `I choose you ${pokemon}!`;
}
choosePokemonArrow2('Bulbasaur'); // Logging! y I choose you Bulbasaur!

// 4. Función normal con dos parámetros (corregido nombre de variable y ; innecesario)
function choosePokemonDual(firstPokemon, secondPokemon) {
    return `I choose ${firstPokemon} and ${secondPokemon}`;
}
choosePokemonDual('Charmander', 'Squirtle'); // I choose Charmander and Squirtle

// 5. Función flecha con dos parámetros
const choosePokemonArrowDual = (firstPokemon, secondPokemon) => 
    `I choose ${firstPokemon} and ${secondPokemon}`;
choosePokemonArrowDual('Squirtle', 'Bulbasaur'); // I choose Squirtle and Bulbasaur

// 6. Función normal sin parámetros
function chooseDefaultPokemon() {
    return `I choose Pikachu`;
}
chooseDefaultPokemon(); // I choose Pikachu

// 7. Función flecha sin parámetros
const chooseDefaultPokemonArrow = () => `I choose Pikachu`;
chooseDefaultPokemonArrow(); // I choose Pikachu
