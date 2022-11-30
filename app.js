let inputNovoItem = document.querySelector('#inputNovoItem');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let janelaEdicao = document.querySelector('#janelaEdicao');
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo');
let janelaEdicaoBtnFechar = document.querySelector('#janelaEdicaoBtnFechar');
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa');
let idTarefaEdicao = document.querySelector('#idTarefaEdicao');

inputNovoItem.addEventListener('keypress', (e) => {

    if(e.keyCode == 13) {
        let tarefa = {
            nome: inputNovoItem.value,
            id: gerarId(),

        }
        adicionarTarefa(tarefa);

    }
});

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
    alternarJanelaEdicao();
})

btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovoItem.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa);

})

btnAtualizarTarefa.addEventListener('click', (e) => {

})

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {
    let li = criarTagLi(tarefa);
    listaTarefas.appendChild(li);
    inputNovoItem.value = '';

}

function criarTagLi(tarefa) {
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', `editar(`+ tarefa.id+`)`);

    let btnExcluir = document.createElement('button'); 
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+ tarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function editar(idTarefa) {
    alert(idTarefa);

    let li = document.getElementById(''+ idTarefa + '');
    if(li) {
        idTarefaEdicao.innerHTML = '#' + idTarefa;
        alternarJanelaEdicao();

    }
}

function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir?');
    if(confirmacao) {
        let li = document.getElementById(''+ idTarefa + '');
        if(li) {
            listaTarefas.removeChild(li);
        }
    }
}

function alternarJanelaEdicao() {
    janelaEdicao.classList.toogle('abrir');
    janelaEdicaoFundo.classList.toogle('abrir');
}