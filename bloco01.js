let qtdLinhas = parseFloat(prompt("Digite a quantidade de linhas:"));
let qtdColunas = parseFloat(prompt("Digite a quantidade de Colunas:"));
let linhaS = document.getElementsByTagName("tr");
let valor = 0;
let i = 0;
addEventListener("load", function(){
    const tabela = document.querySelector("table");
    for (i; i < qtdLinhas; i++) {
        tabela.innerHTML += "<tr></tr>";
        for (let j = 0; j < qtdColunas; j++) {
            if (j % 2 == 0) {
                linhaS[i].innerHTML += "<td class='ColPar'>(" + linhaS[i].rowIndex + "," + linhaS[i].children.length + ")</td>"
            } else {
                linhaS[i].innerHTML += "<td class='ColImpar'>(" + linhaS[i].rowIndex + "," + linhaS[i].children.length + ")</td>"
            }
        }
}});