/* let nombreIngresado = prompt("Ingresá tu nombre: ")  //PROMPT PARA PEDIR DATOS DE ENTRADA = QUE EL USUARIO INGRESE ALGO

console.log("Lo que escriba acá, va a aparecer en la consola") // Nos muestra en Consola lo que le pasemos entre los parentesis.
 */

//COMENTARIO UNA LINEA LO QUE QUERRAMOS ESCRIBIR


/* ESTO ES 
UN 
COMENTARIO
MULTILINEA */

/* PALABRAS RESERVADAS: 
break, case, catch, continue, default, let, delete, do, else, finally, for, ir, in , return, try, var, function, while y un monton más */

//Declaracion = CREAR UNA VARIABLE
// let apellido

//ASIGNAR

/* apellido = "Rodriguez";
miClub = "Morón"; */



//INICIALIZAR
/* let apellido = "Rodriguez";

const miDNI = 10000000;


let numeroA = 1;
let numeroB = 2;
const NUMEROC = 3;
//Suma de dos numeros
let resultadoSuma = numeroA + numeroB;
alert(resultadoSuma)
// Resta de dos numeros
let resultadoResta = numeroB - numeroA;
alert(resultadoResta)
//Multiplicacion 
let resultadoProducto = numeroB * NUMEROC; */


//CONCATENAR STRINGS

/* let textoA = "Front";
let textoB = "End";
const BLANCO = " ";
 */
//CONCATENAR AMBOS VALORES

/* let resultadoA = textoA + textoB;  //FrontEnd
alert(resultadoA) //En el ALERT escribimos entre parentesis la variable a mostrar - En este caso nos devuelve el resultado
let resultadoB = textoA + 1;
alert(resultadoB)
let resultadoC = textoA + BLANCO + textoB;
console.log(resultadoC)

 */




// 14-11 CONTROL DE FLUJO
// ESTRUCTURA IF ELSE

//si - condicion

/* if (true){
    //bloque de codigo a ejecutar
    alert("vas a ver este mensaje")
}
 */


// == ES OPERADOR DE EQUIVALENCIA
/* let unNumero = 6

if (unNumero == 5){
//Con (unNumero == 5) comparamos si unNumero es igual a 5
    alert("LA VARIABLE UNNUMERO ES IGUAL A 5")
}


if (unNumero == 6) {
    alert("LA VARIABLE ES IGUAL A 6")
}


 */


/* let unColor = "Verde"
//con (unColor == "Rojo") vamos a comparar si unColor es igual "Rojo"
if(unColor =="Rojo"){
    alert("el color es rojo")
}else{
//la instruccion se interpreta cuando unColor NO es "rojo"
    alert("el color NO es rojo")
}
 */

/* let nombreUsuario = prompt("Ingresa nombre de usuario");

if(nombreUsuario == ""){
    alert("No ingresaste el nombre del usuario");
}
else{
    alert("Nombre de usuario ingresado " + nombreUsuario);
} */

/* let precio = 40;

if(precio < 20){
    alert("El precio es menor que 20");
}else if(precio < 50){
    alert("El precio es menor que 50");
}else if (precio < 100){
    alert("El precio es menor que 100");
}else{
    alert("El precio es mayor que 100");
}
 */

//TRUE o FALSE SON VARIABLES BOOLEANAS


/* let numero = 10;
let esMAyor5 = (numero > 5); //el valor va a ser true

if (esValida){
    alert("Es booleano TRUE")
} */



//OPERADORES EN JAVASCRIPT
/* 
== ES IGUAL

=== ES ESTRICTAMENTE IGUAL

!= ES DISTINTO

!== ES ESTRICTAMENTE DISTINTO

<, <=, >, >= MENOR, MENOR O IGUAL, MAYOR, MAYOR O IGUAL

&& OPERADOR AND (Y)

|| OPERADOR OR (O)

! OPERADOR NOT (NO) */



/* let nombreIngresado = prompt("Ingresa tu nombre");

let apellidoIngresado = prompt("Ingresa tu apellido");

if((nombreIngresado != "") && (apellidoIngresado !="")){
    alert("Nombre: " + nombreIngresado + ". Apellido: "+ apellidoIngresado);
}else{
    alert("ERROR. Ingresa porfa el nombre y apellido");
} */


/* let nombreIngresado = prompt("Ingresa tu nombre");

if ((nombreIngresado == "LUCAS") || (nombreIngresado == "lucas")){
    alert("El nombre ingresado es Lucas")
}else{
    alert("El nombre ingeesado NO ES Lucas")
}
 */


/* let nombreIngresado = prompt("Ingresa tu nombre");

if (((nombreIngresado!= "") && (nombreIngresado == "LUCAS")) || (nombreIngresado == "lucas")){
    alert("Hola Lucas");
}else{
    alert("Error: Ingresa nombre valido")
}

 */


//CICLOS
// ESTRUCTURA FOR


/* for (desde ; hasta ; actualizacion){
    //lo que se escriba acá se va a ejecutar mientras dure el ciclo
} */

// DESDE:  es la zona en la cual vamos a establecer los varoles iniciales de las variables que van a controlar el ciclo.

// HASTA: es el unico elemento que va a decidir si se repite o se detiene el ciclo.

// ACTUALIZACION:  el nuevo valor que se va a asignar despues de cada repeticion a estas variables que controlan la repeticion.


/* for ( let i = 1; i <= 10; i++){
    alert(i);
} */

//SOLICITAR UN VALOR AL USUARIO
/* let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " X " + i + " = " + resultado);
}
 */


//BREAK PARA INTERRUMPIR UN CICLO

/* for (let i = 1; i <= 10; i++){
    if(i == 9){
        break;
    }
    alert(i);
}
 */

// CONTINUE PARA SALTEAR UNA REPETICION
/* 
for (let i = 1; i <= 10; i++){
    if(i == 3){
        continue;
    }
    alert(i);
}
 */








//WHILE  
/* let datoDeEntrada = prompt("Ingresa un dato: "); */

//REPETIR CON WHILE HASTA QUE EL USUARIO INGRESE "ESC"
// MIENTRAS (CONDICION){
//    CUMPLITE TAL COSA
//}
/* 
while(datoDeEntrada !="ESC"){
    alert("El usuario ingreso el siguiente dato de entrada: " + datoDeEntrada);
    //VAMOS A PEDIRLE NUEVAMENTE AL USUARIO QUE INGRESE UN DATO DE ENTRADA, PARA SEGUIR EVALUANDO SI ES "ESC"
    datoDeEntrada = prompt("Ingresa otro dato: ")
}
 */




// DO WHILE

/* let repetir = false;

do{
    alert("SOLO UNA VEZ");
}while(repetir) */


/* let numero = 0; 

do{
    //REPETIR CON DO.. WHILE MIENTRAS EL USUARIO INGRESA UN NRO
    numero = prompt("Ingresa un nro: ");
    alert(numero);
}while(parseInt(numero))

 */

//SWITCH

/* switch(numero){
    case 5:
        ...
        break;

    case 8: 
        ...
        break;
    
    case 10: 
        ...
        break;

    default:
        break;
}
 */



/* let entrada = prompt("Ingresa un nombre: ");

//REPETIMOS HASTA QUE INGRESE "ESC"

while(entrada != "ESC"){
    switch(entrada){
        case "LUCAS":
            alert("HOLA LUCAS");
            break;
        
        case "JUAN":
            alert("HOLA JUAN");
            break;

        case "PEDRO":
            alert("HOLA PEDRO");
            break;

        default:
            ("PERO QUIEN SOS?")
            break;
    }
    entrada = prompt("Ingresa un nombre:")
}
 */



//FUNCIONES

/* function saludar(){
    alert("HOLA!");
}
 
saludar();
saludar();
saludar();
saludar();
saludar();
 */



/* function solicitarNombre(){
    let nombreIngresado = prompt("Ingresa nombre");
    alert("El nombre ingresado es" + nombreIngresado);
}


solicitarNombre();
solicitarNombre();
solicitarNombre();
 */


/* function conParametros(parametro1, parametro2){
    alert(parametro1 + " " + parametro2);
}


conParametros("Hola", "Chicos");

conParametros("Hola", "Chicas"); */

//DECLARANDO LA VARIABLE PARA GUARDAR EL RESULTADO DE LA SUMA
let resultado = 0

//FUNCION QUE SUMA DOS NUMEROS Y DA UN RESULTADO
function sumar(numero1, numero2){
    resultado = numero1 + numero2
}


// PODEMOS CREAR UNA FUNCION QUE MUESTRE EL ALERT DEL RESULTADO

function mostrar(mensaje){
    alert(mensaje)
}

// LLAMAR A LA FUNCION
sumar(6,9);
mostrar(resultado)


