const sectionSeleccionarAtaque = document.getElementById ('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'


const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const nuevoAtaqueDelJugador = document.createElement('p')
const nuevoAtaqueDelEnemigo = document.createElement('p')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let marvelpets = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMarvelpets
let inputAlligator 
let inputFlerken 
let inputKorg 
let mascotaJugador
let ataquesMarvelpet
let ataquesMarvelpetEnemigo
let botonAgua 
let botonFuego 
let botonTierra 
let botones = []
let indexAtaqueJugador 
let indexAtaqueEnemigo 
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Marvelpet {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Alligator = new Marvelpet('Alligator', "Imagenes/Alligator_1.png.png", 5)

let Flerken = new Marvelpet('Flerken', "Imagenes/Flerken_1.png.png" , 5) 

let Korg = new Marvelpet('Korg', "Imagenes/Korg.png", 5)


Alligator.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '☘️', id: 'boton-tierra'},
)

Flerken.ataques.push(
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)


Korg.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '☘️', id: 'boton-tierra'},
)

marvelpets.push(Alligator,Flerken,Korg)

function iniciarJuego() {
    
    marvelpets.forEach((marvelpet) => {
        opcionDeMarvelpets = `
        <input type ="radio" name= "mascota" id=${marvelpet.nombre} />
        <label class = "tarjeta-de-CovenChaos" for=${marvelpet.nombre}>
            <p>${marvelpet.nombre}</p>
            <img src=${marvelpet.foto} alt=${marvelpet.nombre}>
        </label>
        `    
    contenedorTarjetas.innerHTML += opcionDeMarvelpets

     inputAlligator = document.getElementById("Alligator");
     inputFlerken = document.getElementById("Flerken");
     inputKorg = document.getElementById("Korg");
    })

    sectionReiniciar.style.display='none'
    sectionSeleccionarAtaque.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)



    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display ='none'

    sectionSeleccionarAtaque.style.display ='flex'

    if (inputAlligator.checked) {
        spanMascotaJugador.innerHTML = inputAlligator.id
        mascotaJugador = inputAlligator.id
    } else if (inputFlerken.checked) {
        spanMascotaJugador.innerHTML = inputFlerken.id
        mascotaJugador = inputFlerken.id
    } else if (inputKorg.checked) {
        spanMascotaJugador.innerHTML = inputKorg.id
        mascotaJugador = inputKorg.id
    } else  alert ("Selecciona un marvelpet")

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()     
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < marvelpets.length; i++) {
         if (mascotaJugador === marvelpets [i].nombre) {
            ataques = marvelpets [i].ataques
         }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => { 
        ataquesMarvelpet = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre
        
        }</button>
        `
        contenedorAtaques.innerHTML += ataquesMarvelpet
    })
     botonAgua = document.getElementById('boton-agua')
     botonFuego = document.getElementById('boton-fuego')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if(e.target.textContent === '💧' ) {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else  {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        }) 
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, marvelpets.length -1)

    spanMascotaEnemigo.innerHTML = marvelpets[mascotaAleatoria].nombre
    ataquesMarvelpetEnemigo = marvelpets[mascotaAleatoria].nombre
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMarvelpetEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('FELICITACIONES! GANASTE:)')
    } else {
        crearMensajeFinal('Lo siento, perdiste:(')
    }
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-fuego')
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
