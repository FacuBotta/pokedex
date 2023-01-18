//https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
//forms.name = nombre
//abilities.ability.name = habilidad
//moves[0].move = primer mov especial
//front_default = la imagen

// charmander

let search = document.getElementById("search");
let name = document.getElementById("name");
let force = document.getElementById("force");
let type = document.getElementById("type")
let abilities1 = document.getElementById("abilities1");
let abilities2 = document.getElementById("abilities2");
let containerPokemon = document.getElementById("containerPokemon");
let pokeImg = document.createElement("img");
let idVisor = document.getElementById("idVisor")
let btnIdPrev = document.getElementById("btnIdPrev")
let btnIdNext = document.getElementById("btnIdNeft")
let turnLeft = document.getElementById("turnLeft")
let turnRigth = document.getElementById("turnRigth")

function pokeSelector(nom) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`)
        .then(Response => Response.json())
        .then(data => {
            name.textContent = `Name: ${data.name}`;
            type.textContent = `Type: ${data.types[0].type.name}`;
            abilities1.textContent = `move 1: ${data.abilities[0].ability.name}`;
            abilities2.textContent = `move 2: ${data.abilities[1].ability.name}`;
            force.textContent = `Level: ${data.weight}`;
            idVisor.textContent = data.id

            containerPokemon.appendChild(pokeImg);
            pokeImg.src = data.sprites.versions["generation-v"]["black-white"].animated["front_default"];

            //console.log(data.sprites.versions["generation-v"]["black-white"].animated)
            turnLeft.onclick = function () {
                pokeImg.src = data.sprites.versions["generation-v"]["black-white"].animated["back_default"];
            }
            turnRigth.onclick = function () {
                pokeImg.src = data.sprites.versions["generation-v"]["black-white"].animated["front_default"];
            }
            
        })
}

search.addEventListener("change", () => pokeSelector(search.value));