var pacientes = document.querySelectorAll(".paciente");

for(var cont = 0; cont < pacientes.length; cont++){
    var paciente = pacientes[cont];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc =  calculaImc(peso, altura);
        tdImc.textContent = imc;
    }    
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }

}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura); 
    return imc.toFixed(2);
}