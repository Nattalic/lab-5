const opciones = ["PIEDRA", "PAPEL", "TIJERA"] 

function getRandomInt(max) {
    return Math.floor(Math.random() * max) //da datos aleatorios
}

//Variables
let computadora = opciones[getRandomInt(3)] //da datos aleatorios

let jugar = true // el usario quiere volver a jugar

while (jugar) {
    let usuario = prompt("Juege PIEDRA, PAPEL o TIJERA").toUpperCase()


    if (usuario === computadora) {
        console.log("¡ESTAMOS EMPATADOS!") //empate
    } else if (
        (usuario === "PIEDRA" && computadora === "TIJERA") || (usuario === "PAPEL" && computadora === "PIEDRA") || (usuario === "TIJERA" && computadora === "PAPEL")
    ) {
        console.log("¡FELICIDADES... GANASTE! 😄") //ganar
    } else if (
        (usuario === "PIEDRA" && computadora === "PAPEL") || (usuario === "PAPEL" && computadora === "TIJERA") || (usuario === "TIJERA" && computadora === "PIEDRA")
    ) {
        console.log("LO SIENTO... PERDISTE 🥺") //perder
    }

    let respuesta = prompt("¿Quieres jugar de nuevo? (Si/No)").toUpperCase()
    if (respuesta === "SI") {
        jugar = true // el usuario si quiere volver a jugar
    }else if (respuesta === "NO") {
        jugar = false // el usario no quiere volver a jugar
    console.log("Gracias por jugar!")
    }

}