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
/* let resultado = 0 */

//FUNCION QUE SUMA DOS NUMEROS Y DA UN RESULTADO
/* function sumar(numero1, numero2){
    resultado = numero1 + numero2
}
 */


// PODEMOS CREAR UNA FUNCION QUE MUESTRE EL ALERT DEL RESULTADO
/* 
function mostrar(mensaje){
    alert(mensaje)
}

// LLAMAR A LA FUNCION
sumar(6,9);
mostrar(resultado)



 */

/* function sumar (primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumar (5,8);

alert(resultado) */

/* 
function calculadora (primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
alert(calculadora(10,5, "+"))

 */

/* let resultado = 0
function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

sumar(5,6);

alert(resultado); */


/* function sumar(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
}

sumar(5,6);

alert(resultado);
 */


//FUNCION ANONIMA
/* const suma = function (a,b) { return a + b}
const resta = function (a,b) { return a - b}

alert(suma(15,20));
alert(resta(15,5));

 */

//FUNCION FLECHA
/* 
const suma = (a,b) => {return a+b}

const resta = (a,b) => a-b;

alert(suma(15,20))
alert(resta(20,10))
 */


/* const suma = (a,b) => a+b;
const resta = (a,b) => a-b;

//si una funcion es una sola linea con retorno y un parametro puede evitar escribir los ().

const iva = x => x * 0.21;

let precioProducto = 1000;
let descuento = 50;

// Calcular el precioProducto +IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

alert(nuevoPrecio)
 */





//OBJETO - ANATOMIA
/* let nombre = "Lucas";
let edad = 30;
let calle = "Casullo 123";

const persona1 = { 
    nombre: "Lucas", 
    edad: "30", 
    calle: "Casullo 123"
}

/* alert(persona1.edad)

alert(persona1["calle"])

alert(persona1["nombre"] = "Roberto") */

/* 
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona("Lucas", 30, "Casullo")

const persona2 = new Persona("Carla", 29, "Rivadavia")

alert(persona2.calle)
 */


/* let cadena = "HOLA CHICOS"; */
//propiedad de objeto de string 
/* alert(cadena.length)

alert(cadena.toLowerCase()); */


/* function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){alert("Hola, me llamo" + this.nombre)}
}

const persona1 = new Persona("Lucas", 30, "Casullo")
const persona2 = new Persona("Carla", 29, "Rivadavia")

persona1.hablar();

 */

//OPERADOR IN & FOR IN


/* const persona1 = { 
    nombre: "Lucas", 
    edad: "30", 
    calle: "Casullo 123"
}

alert("apellido" in persona1)

for (const propiedad in persona1){
    alert(persona1[propiedad])
}
 */


/* class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    hablar(){
        alert("Hola, me llamo" + this.nombre)
    }
}

const persona1 = new Persona("Lucas", 30, "La roche");
persona1.hablar();
 */


/* class Producto{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.vendido = false
    }
    sumaIva(){
        this.precio = this.precio *1.21;
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto("arroz", "600");
const producto2 = new Producto("fideos", "850");

producto1.sumaIva();
producto2.sumaIva();
producto1.vender(); */




//ARRAY

/* const array1 = [];
const array2 = [1,2]
const array3 = ["Hola", 3, true, false]


const numeros = [1,2,3,4,5,6] */

/* for (let index = 0; index <5; index++){
    alert(numeros[index])
}

/*  */
/* alert(numeros[0])

let resultado = numeros[0] + numeros[5]
alert(resultado) */



/* const miArray = ["nombre", 10, "apellido"];
//agrega un elemento al final
miArray.push("otro elemento")
//agrega un elemento al principio
miArray.unshift("primer elemento")

alert(miArray)
//elimina un elemento el ultimo
miArray.pop()

alert(miArray)

// elimina un elemento el primero
miArray.shift()

alert(miArray) */


/* const nombres = ["lucas", "nicolas", "rodriguez", "minor", "ricardo"];

alert(nombres)


//permite eliminar uno o mas elementos, indicando entre parentesis dos parametros: el primero es el indice donde queremos empezar a eliminar, y el segundo es la cantidad de elementos a eliminar desde esa posicion.
nombres.splice(1, 2)

alert(nombres) */

const nombres1 = ["lucas", "nicolas", "rodriguez", "minor", "ricardo"];
//genera un string con todos los elementos del array separados por el valor que le pasamos en el parametro()
/* alert(nombres1.join("*")) */


/* const perros = ["dalmate", "doberman"]
const gatos = ["persa"]

const mascotas = perros.concat(gatos)
alert(mascotas)
 */

const nombres2 = ["lucas", "nicolas", "rodriguez", "minor", "ricardo"];
const nombres3 = nombres2.slice(1,3)
/* alert(nombres3)


alert(nombres2.indexOf("marcelo"))


alert(nombres2.includes("sevenup")) */
/* 
nombres2.reverse()
alert(nombres2) */

/* const objeto1 = {id: 1, producto: "Arroz"};
const array = [objeto1, {id: 2, producto: "Fideos"}];
array.push({id: 3, producto: "Pan"})


alert(array)
 */


/* const listaNombres = []; //Array vacio 
let cantidad = 5;


do{
    let entrada = prompt("Ingresa un nombre");
    listaNombres.push(entrada);
    alert(listaNombres.length)
}while(listaNombres.length != cantidad);

//concatenar un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["Ana", "Clara"]);

alert(nuevaLista.join("\n"))
 */


let total = 0;
for (let i=1; i<= 10; i++){
    total += i
}

alert(total)



alert(sumarRango(1,10))




// FUNCIONES DE ORDEN SUPERIOR: FIND, FOR EACH, FILTER, SOME, MAP, REDUCE, SORT. 

/// DOM

// EVENTOS

//STORAGE & JSON 