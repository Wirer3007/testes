async function buscarP() {

    try {

        const pesquisa = document.getElementById("pesquisador").value;
        

        const lista = document.getElementById("lista");

        if (pesquisa.toLowerCase() === "Skitty") {
            alert("pokemon preferido detectado!");
        }

        const rps = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pesquisa}`
        );

        const pokemons = await rps.json();

        lista.innerHTML = "";

        


        pokemons.forEach(pokemon => {

            lista.innerHTML += `
                <li>

                    <ul>
                        <li>Nome: ${pokemons.pokemon.name}</li>
                        <li> Habilidade : ${pokemons.pokemon.ability}</li>
                        <li> Tipo : ${pokemons.pokemon.contest-type}</li>
                        <li> Regiao : ${pokemons.pokemon.region}</li>
                    </ul>
                </li>
            `;

        });



    } catch (erro) {

        document.getElementById("lista").innerHTML =
            "<li>Erro na busca da API</li>";

        console.log(erro);
    }
}