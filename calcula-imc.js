var tdImc = paciente.querySelector(".info-imc");
var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
console.log("Peso inválido!");
pesoEhValido = false;
tdImc.textContent = "Peso inválido!";
paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3.00){
console.log("Altura inválida!");
alturaEhValida = false;
tdImc.textContent = "Altura inválida!";
paciente.classList.add("paciente-invalido");
}

If(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
}
