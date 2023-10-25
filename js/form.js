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
    pacienteTr.classList.add("paciente");
    
    var nomeTd = montaTd(paciente.nome, "indo-nome");
    var pesoTd = montaTd(paciente.peso, "indo-peso");
    var alturaTd = montaTd(paciente.altura, "indo-altura");
    var gorduraTd = montaTd(paciente.gorduraTd, "indo-gordura");
    var imcTd = montaTd(paciente.imc, "indo-imc");

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

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}