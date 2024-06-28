let minhaLista={
    titulo: "Lista de compras",
    itens: ["Arroz","Feijão","Carne"]
}
function addLista(){
    const elemento = document.createElement("li");
    const texto = document.createTextNode(document.getElementById("txtItem").value);

    elemento.appendChild(texto);
    document.getElementById("minha lista").appendChild(elemento);
    minhaLista.itens.push(document.getElementById("txtItem").value);
}
function carregarNaPagina(){
    let dadossalvo = localStorage.getItem("marlus");
    if (dadossalvo) {
        minhaLista = JSON.parse(dadossalvo);
    }

    document.getElementById("titulo").innerHTML = minhaLista.titulo;
    for(itens of minhaLista){
        const elemento1 = document.createElement("li");
        const texto1 = document.createTextNode(item);
        elemento1.appendChild("texto1");
        document.getElementById("minhaLista").appendChild(elemento1);
    }
}
function alterarTitulo(){
    minhaLista.titulo = prompt();
    document.getElementById("titulo").innerHTML = minhaLista.titulo;
}
function salvarDados(){
    localStorage.setItem("marlus",JSON.stringify(minhaLista));
}