function calculatarTip() {
    var valorTotal = document.getElementById("inputValorTotal").value;
    var serviceQual = document.getElementById("serviceNote").value;
    var Pessoas = document.getElementById("inputPessoas").value;

    if (valorTotal === "" || serviceQual == 0) {
        alert("Por favor, preencha todos os campos corretamente...");
        return;
    }

    if (Pessoas === "" || Pessoas <= 1) {
        Pessoas = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (valorTotal * serviceQual) / Pessoas;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    var montante = Math.round(valorTotal * serviceQual);

    montante = parseFloat(valorTotal) + parseFloat(montante);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalConta").innerHTML = montante;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none"; 

function changeCommaToDot(elementID){
    const e = document.getElementById(elementID);
    e.value = e.value.replace(",",".");
}
