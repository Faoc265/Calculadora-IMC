
const calcular = document.getElementById("calcular");
const apagar = document.getElementById("apagar");


function imc (){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value.replace(",", ".");
    const peso = document.getElementById("peso").value.replace(",", ".");
    const resultado = document.getElementById("resultado");

    if (nome !== "" && altura !== "" && peso !== ""){
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";
        if (valorIMC < 18.5){
            classificacao = "Abaixo do peso.";
        }else if (valorIMC < 25){
            classificacao = "Está com o peso ideal. Parabéns!";
        }else if (valorIMC < 30){
            classificacao = "Um pouco acima do peso.";
        }else if (valorIMC < 35){
            classificacao = "com obesidade grau I.";
        }else if (valorIMC < 40){
            classificacao = "com obesidade grau II.";
        }else if (valorIMC >= 40){
            classificacao = "com obesidade grau III. Cuidado! gordo do caralho.";
        }

        resultado.textContent = `Olá ${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        resultado.textContent = "preencha todos os campos!";
    }
  
}
calcular.addEventListener('click', imc);

apagar.addEventListener('click', function(){
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resultado").textContent = "";
});
