let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
         if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            //usuario no acerto
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = '';
    //valorCaja.value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    } else {

    

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }

    }
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
}




function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego número Secreto');
    asignarTextoElemento('p', `Escoje un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;

}

condicionesIniciales();

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

asignarTextoElemento('h1', 'Juego número Secreto');
asignarTextoElemento('p', `Escoje un número del 1 al ${numeroMaximo}`);
