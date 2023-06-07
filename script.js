let userInput = document.getElementById("input-principal");
let btn = document.getElementById("botao-adicionar");
let minhaLista = document.getElementById("lista-tarefas")

let arrayDeTarefas = []

function adicionandoDados() {
    arrayDeTarefas.push(userInput.value)
    mostrarNaTela()
}

function mostrarNaTela() {
    let novaLista = ""

    arrayDeTarefas.forEach(itensAdicionados => {
        novaLista += `<li class="item-tarefa"><p>${itensAdicionados}</p></li>`
    })
    minhaLista.innerHTML = novaLista;
}
btn.addEventListener("click", adicionandoDados);