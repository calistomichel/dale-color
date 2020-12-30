// import validaciones from  '../general/validaciones.js'
// import funciones from  '../general/funciones.js'

// function aclarar(color, porcentaje){
//     if(validaciones.isHex(color) == true && validaciones.isPorcentaje(porcentaje) == true){
//         var r = funciones.convertToDec(color.substring(1,3))
//         var g = funciones.convertToDec(color.substring(3,5))
//         var b = funciones.convertToDec(color.substring(5,7))

//         var valor_porcentaje = Math.round((porcentaje * 255)/100)

//         return '#'+funciones.convertToHex(agregarClaridad(r, valor_porcentaje))+funciones.convertToHex(agregarClaridad(g, valor_porcentaje))+funciones.convertToHex(agregarClaridad(b, valor_porcentaje))
//     }else{
//         return false
//     }
// }

// function agregarClaridad(numero_color, valor_porcentaje){
//     if(numero_color + valor_porcentaje > 255){
//         return 255
//     }else{
//         return numero_color + valor_porcentaje
//     }
// }

// function agregarOscuridad(numero_color, valor_porcentaje){
//     if(numero_color - valor_porcentaje < 0){
//         return 0
//     }else{
//         return numero_color - valor_porcentaje
//     }
// }

function add(color, percentage) {
    if((color + percentage) >= 255) {
        return 255;
    }
    return color + percentage;
}

function subtract(color, percentage) {
    if((color - percentage) <= 0) {
        return 0;
    }
    return color - percentage;
}

module.exports = {
    add,
    subtract
}