const imcForm = document.getElementById("imcForm");
const resultado = document.getElementByid("resultado");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

//IMC = peso / (altura x altura).

imcForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    calcularIMC();
});

function CALCULARimc (p, a){
    return p / (a * a);
}