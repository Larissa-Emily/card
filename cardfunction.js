const valorProduto = 35.9;
const totalProduto = document.getElementById("total");
const totalDesconto = document.getElementById("desconto");
let quant = 0;

const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const quantidadeItens = document.getElementById("quantidade");

menos.addEventListener("click", function () {
  let num = 1;
  quant = quant - num;
  if (quant < 0) {
    quant = 0;
  }
  quantItens();
  calcularTotal();
});

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

function quantItens() {
  quantidadeItens.innerHTML = "";
  const divItem = document.createElement("div");
  divItem.textContent = quant;
  quantidadeItens.appendChild(divItem);
}

function calcularTotal() {
  const valorTotal = (quant * valorProduto).toFixed(2);
  let valorDesc;

  if (quant >= 6) {
    valorDesc = valorTotal - (10 / 100) * valorTotal;
    totalDesconto.innerHTML = `Valor total com desconto: ${valorDesc.toFixed(2)}`;
  } else if (quant < 6) {
    totalDesconto.innerHTML = "";
  }
  totalProduto.innerHTML = `Valor total: ${valorTotal}`;
}
