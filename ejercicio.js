var n1 = prompt("Bievenido al cuestionario de la primavera. \nEscribe tu nombre:")
var rest = prompt("¿Comó se llama al primer día de la primavera?\nA:Primer día de la primavera\nB. Equinoccio de Primavera\nC: Equinoccio de Invierno")
if ( rest == "B"){
    rest =25;
}else if(rest == "A"){
    rest= 0;
}else if(rest == "C"){
    rest= 0;
}else{
    alert(n1+"esa no es una respuesta valida")
}
//ejer2
var rest2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad")
if ( rest2 == "A"){
    rest2 =25;
}else if(rest2 == "B"){
    rest2= 0
}else if(rest2 == "C"){
    rest2= 0
}else{
    alert(n1+"esa no es una respuesta valida")
}
//ejer3
var rest3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC. Marzo.")
if ( rest2 == "C"){
    rest2 =25;
}else if(rest2 == "A"){
    rest2= 0
}else if(rest2 == "B"){
    rest2= 0
}else{
    alert(n1+"esa no es una respuesta valida")
}

var rest4 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La Navidad\nB: El Año Nuevo\nC. Fiestas Patrias de China")
if ( rest2 == "C"){
    rest2 =25;
}else if(rest2 == "A"){
    rest2= 0
}else if(rest2 == "B"){
    rest2= 0
}else{
    alert(n1+"esa no es una respuesta valida")
}

var total = rest + rest2 + rest3 +rest4
document.write(n1+",conseguiste un puntaje de:" + total)