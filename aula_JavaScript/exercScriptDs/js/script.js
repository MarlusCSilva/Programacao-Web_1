function adicionarNaTabela() {
    
    var descricao = document.getElementById('textDesc').value;
    var valor = document.getElementById('textValor').value;
    var quantidade = document.getElementById('textQtd').value;


    if (descricao === '' || valor === '' || quantidade === '') {
        alert('Preencha todos os campos.');
        return;
    }

    var total = parseFloat(valor) * parseInt(quantidade);

    var table = document.getElementById('conteudo');
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = descricao;
    cell3.innerHTML = valor;
    cell4.innerHTML = quantidade;
    cell5.innerHTML = total;

    atualizarTotalCompra(total);

    document.getElementById('textDesc').value = '';
    document.getElementById('textValor').value = '';
    document.getElementById('textQtd').value = '';
}

function atualizarTotalCompra(valor) {

    var totalCompraElement = document.getElementById('totalcompra');
    var totalAtual = parseFloat(totalCompraElement.innerHTML);
    totalAtual += valor;
    totalCompraElement.innerHTML = totalAtual.toFixed(2);
}

function pagarConta() {

    var cartaoSelecionado = document.getElementById('cartao').checked;
    var dinheiroSelecionado = document.getElementById('dinheiro').checked;

    if (cartaoSelecionado) {
        alert('Pagamento com Cartão de Crédito');
    } else if (dinheiroSelecionado) {
        alert('Pagamento em Dinheiro');
    } else {
        alert('Selecione um método de pagamento.');
    }
}
