const valorProduto = 35.9;
const totalProduto = document.getElementById("total");
const totalDesconto = document.getElementById("desconto");
let quant = 0;

const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const quantidadeItens = document.getElementById("quantidade");

const fazerPedido = document.getElementById("fazerPedido");
const voltar = document.getElementById("voltar");
const modalPagamento = document.getElementById("modal");

const concluirPedido = document.getElementById("concluir");
const resultadoPedido = document.getElementById("resultadoPedido");
resultadoPedido.style.color = "orange";

// botao que diminui a quantidade
menos.addEventListener("click", function () {
  let num = 1;
  quant = quant - num;
  if (quant < 0) {
    quant = 0;
  }
  quantItens();
  calcularTotal();
});

// botao que aumenta a quantidade

mais.addEventListener("click", function () {
  let num = 1;
  quant = quant + num;
  if (quant > 15) {
    alert("Limite por cliente são 15 hamburguer");
    quant = 15;
  }
  quantItens();
  calcularTotal();
});

// cria-se a div onde informa a quantidade selecionada pelo cliente

function quantItens() {
  quantidadeItens.innerHTML = "";
  const divItem = document.createElement("div");
  divItem.textContent = quant;
  quantidadeItens.appendChild(divItem);
}

// ocorre o processo de calculo dos valores -- quantidade x valor do item

function calcularTotal() {
  const valorTotal = (quant * valorProduto).toFixed(2);
  let valorDesc;

  if (quant >= 6) {
    valorDesc = valorTotal - (10 / 100) * valorTotal;
    totalDesconto.innerHTML = `Valor total com desconto: ${valorDesc.toFixed(
      2
    )}`;
  } else if (quant < 6) {
    totalDesconto.innerHTML = "";
  }
  totalProduto.innerHTML = `Valor total: ${valorTotal}`;
  resultadoPedido.innerHTML = `Valor total a pagar: ${valorTotal}`;
}

//condição que nao permite prosseguir se quantidade for = 0

fazerPedido.addEventListener("click", function () {
  if (quant == 0) {
    alert("Adicione pelo menos um item");
  } else {
    modalPagamento.style.display = "block";
  }
});

//botao de voltar no modal anterior

voltar.addEventListener("click", function () {
  modalPagamento.style.display = "none";
});

//ultimo modal -- finalização de pedido

concluirPedido.addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const endereco = document.getElementById("endereco").value;
  const numCasa = document.getElementById("numCasa").value;

  if (nome && sobrenome && endereco && numCasa !== "") {
    function Informacoes(nome, sobrenome, endereco, numCasa) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.endereco = endereco;
      this.numCasa = numCasa;
    }
    const infs = new Informacoes(nome, sobrenome, endereco, numCasa);
    resultadoPedido.innerHTML += `</br>  </br> ${infs.nome} ${infs.sobrenome}, seu pedido está sendo preparado! Obrigada pela preferência!`;
  } else {
    alert("Campos vazios!");
  }
});
