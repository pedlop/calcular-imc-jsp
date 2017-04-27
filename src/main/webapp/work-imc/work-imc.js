function Calcular() {
    var peso = document.formulario.peso.value;
    var altura = document.formulario.altura.value;

    var quadrado = (altura * altura);

    var imc = (peso/quadrado);
    
    if(imc < 15){
        alert("Extremamente abaixo do peso");
    } else if(imc >= 15 && imc < 16){
        alert("Gravemente abaixo do peso");
    } else if(imc >=16 && imc < 18.5){
        alert("Abaixo do peso ideal");
    } else if(imc >= 18.5 && imc < 25){
        alert("Faixa de peso ideal");
    } else if(imc >= 25 && imc < 30){
        alert("Sobrepeso");
    } else if(imc >= 30 && imc < 35){
        alert("Obesidade grau I");
    } else if(imc >= 35 && imc < 40){
        alert("Obesidade grau II (grave)");
    } else if(imc > 40){
        alert("Obesidade grau III (mórbida)");
    } else{
        alert("Alguma coisa errada não está certa!\nSe houver casa decimal tente: '1.85'.\nNão esqueça de preencher os campos!");
    }
}

function Dicas() {
    alert("Altura em Metros(m) e Peso em Quilogramas(kg).\nUtilize o ponto em casas decimais! Ex: 1.8 ou 78.5!");
}