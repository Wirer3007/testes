async function buscarUsers() {

    try {

        const pesquisa = document.getElementById("pesquisador").value;
        

        const lista = document.getElementById("lista");

        if (pesquisa.toLowerCase() === "kaiju") {
            alert("série preferida detectada!");
        }

        const rps = await fetch(
            `https://api.tvmaze.com/search/shows?q=${pesquisa}`
        );

        const filmes = await rps.json();

        lista.innerHTML = "";

        


        filmes.forEach(filme => {

            lista.innerHTML += `
                <li>
                    <img src="${filme.show.image ? filme.show.image.medium : ''}" width="200">

                    <ul>
                        <li>Título: ${filme.show.name}</li>
                        <li>Ano: ${filme.show.premiered ? filme.show.premiered.split('-')[0] : ''}</li>
                        <li>Gênero: ${filme.show.genres}</li>
                        <li>Sinopse: ${filme.show.summary}</li>
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