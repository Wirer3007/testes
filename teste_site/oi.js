async function buscarLivros() {

    const busca = document.getElementById("ColocarLivros").value;

    const url = "https://api-12-s9h2.onrender.com/livros";

    const mensagem = document.getElementById("lista")

    const resposta = await fetch(
        `${url}?titulo=${busca}`
    );

    const livros = await resposta.json();

    renderizarLivros(livros);

    mensagem.innerHTML = "Busca realizada.";

}
