var pacientes = document.querySelectorAll(".paciente");

for(var cont = 0; cont < pacientes.length; cont++){
    var paciente = pacientes[cont];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;
    }

    if(altura <= 0 || altura >= 3.0){
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;
    }

    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    }    
}