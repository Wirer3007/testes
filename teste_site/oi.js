async function buscarUsers() {

            

    const rps = await fetch("https://api-9-mt0n.onrender.com/usuarios");

    const usuarios = await rps.json();

    const lista = document.getElementById("lista");

    const InputUsers = document.getElementById("ColocarUsers");

    lista.innerHTML = "";

    usuarios.forEach(usuario => {


    lista.innerHTML += `
        <li>

        ${usuario.id}
        ${usuario.nome}
        ${usuario.telefone}
        ${usuario.email}

        
        </li>
    `;


});
}
