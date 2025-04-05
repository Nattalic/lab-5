//punto 1
const frutas =  ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"] //arreglo

//punto2
frutas.sort() //ordenar alfabeticamente
console.log(frutas)

//punto 3
function SingularAPlural (palabra) {
    if (palabra.endsWith("s")) {
        return palabra
    }
    return palabra + "s"
}

console.log(SingularAPlural(frutas[1]))

//punto 4
for (let i = 0; i < frutas.length; i++) {
    let plural = SingularAPlural(frutas[i])
    console.log(plural)
}

//punto 5
function existeFruta(fruta) {
    return frutas.includes(fruta) //includes verifica si existe en el arreglo
}

console.log("¿Existe mango?", existeFruta("mango")) // false
console.log("¿Existe uva?", existeFruta("uva"))  // true

//punto 6
const frutasCortas = []

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].length <= 4) {
        frutasCortas.push(frutas[i])
    }
}

console.log("Frutas cortas (≤ 4 letras):", frutasCortas)

// punto 7
function eliminarFruta(fruta) {
    for (let i = 0; i < frutas.length; i++) {

        if (frutas[i] === fruta) {
        frutas.splice(i, 1   ) // elimina la fruta en la posición i
        return true
        }
        
    }
    return false // si no encontró la fruta
}

console.log("Eliminar mango:", eliminarFruta("mango")) // false
console.log("Eliminar kiwi:", eliminarFruta("kiwi"))   // true
console.log("Frutas después de eliminar:", frutas)
