const clicouEmCalcular= (evento)=> {
    evento.preventDefault();
    
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let mensagem;

    let resultado= peso / (altura * altura);

    if(resultado<17)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Muito abaixo do peso`;
    
    else if(resultado>17 && resultado<18.49)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Abaixo do peso`;
    
    else if(resultado>18.5 && resultado<24.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Peso normal`;
    
    else if(resultado>25 && resultado<29.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Acima do peso`;
    
    else if(resultado>30 && resultado<34.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Obesidade I`;
    
    else if(resultado>35 && resultado<39.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Obesidade II (severa)`;
    
    else if(resultado>40)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Obesidade III (mórbida)`;

    const mostrarResultado = document.getElementById('resultado');
    mostrarResultado.innerHTML = mensagem;
};

const iniciar = () => {
    document.getElementById('calcular').addEventListener('click', clicouEmCalcular);
};

document.addEventListener('DOMContentLoaded', iniciar);