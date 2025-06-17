const imcForm = document.getElementById("imcForm");
const resultado = document.getElementById("resultado");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

//IMC = peso / (altura x altura).

imcForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    calcularIMC(peso.value, altura.value);
});

function calcularIMC(peso, altura) {
    const conta = peso / (altura * altura);
    let classificação = "";
    if (conta < 18.5) {
    var classificacao = "Abaixo do peso";
    resultado.innerHTML = `Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`;
}
else if (conta < 24.9) {
    var classificacao = "Peso normal";
    resultado.innerHTML = `Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`;
}
else if (conta < 29.9) {
    var classificacao = "Sobrepeso";
    resultado.innerHTML = `Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`;
}
else if (conta < 34.9) {
    var classificacao = "Obesidade grau 1";
    resultado.innerHTML = `Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`;
}
else if (conta < 39.9) {
    var classificacao = "Obesidade grau 2";
    resultado.innerHTML = `Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`;
}
else if (conta >= 40) {
    var classificacao = "Obesidade grau 3";
    resultado.innerHTML = `Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`;
}

console.log(`seu peso é ${peso}, sua altura é ${altura}, seu iMC é ${conta}, e seu nivel é${classificacao}`); // Exibe o resultado no console
}



