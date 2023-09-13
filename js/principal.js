var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;


if (peso <= 0 || peso >= 550){
    console.log("Peso Inválido!");
    pesoValido = false;
    tdimc.textContent = "Peso Inválido";
}

if (altura <= 0 || altura >= 3.00){
    alturaValida = false;
    tdimc.textContent = "Altura inválida!";
}

if( alturaValida && pesoValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}