var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.peso.altura)
    }
    
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement ("tr");

    var pacienteTr = document.createElement("Tr");  
    var nomeTd = document.createElement("Td");
    var pesoTd = document.createElement("Td");
    var alturaTd = document.createElement("Td");
    var gorduraTd = document.createElement("Td");
    var imcTd = document.createElement("Td");  

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;  

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}