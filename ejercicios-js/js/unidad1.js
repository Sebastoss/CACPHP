// Unidad 1
// Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de
// información utilizar los métodos de Javascript vistos en clase. Cada ejercicio debe ser
// realizado en un archivo HTML y un JS (extensiones .html y .js).

// 1. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un
// programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido
// del usuario.

function ejercicio1() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    console.log("Ejercicio 1")
    console.log(`Bienvenido ${nombre} ${apellido}`);
    console.log("---------------------------------"); 
}


// 2. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa
// para calcular e informar el perímetro y el área del círculo. Se considerará para este
// ejercicio que el valor de PI será 3.1416.

function ejercicio2(){
    let diametro = +prompt("Ingresa el diametro de un circulo");
    const PI = 3.1416;
    let radio = diametro / 2;
    let perimetro = 2 * PI * radio
    let area = PI * (radio * radio);
    console.log("Ejercicio 2");
    console.log(`El perimetro del circulo es de ${perimetro} m. y su area es de ${area} mt2.`);
    console.log("---------------------------------"); 
}

// 3. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e
// informar la suma y el promedio.

function ejercicio3(){
    let num1 = +prompt("Ingresa un numero");
    let num2 = +prompt("Ingresa otro numero");
    let num3 = +prompt("Ingresa otro numero mas");
    let num4 = +prompt("Ingresa un ultimo numero");
    let suma = num1 + num2 + num3 + num4;
    let promedio = suma / 4;
    console.log("Ejercicio 3");
    console.log(`La suma de todos los numeros es ${suma} y el promedio es de ${promedio}`);
    console.log("---------------------------------"); 
}

// 4. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
// ingrese el valor de la hora y la cantidad de horas trabajadas en el mes.
// Realice un programa para calcular e informar el sueldo mensual del empleado.

function ejercicio4(){
    let valorHora = +prompt("Ingrese el valor de la hora");
    let horas =  +prompt("Ingrese la cantidad de horas trabajadas en el mes");
    let sueldo = valorHora * horas;
    console.log("Ejercicio 4");
    console.log(`El sueldo mensual del empleado es de ${sueldo}.`)
    console.log("---------------------------------"); 
}


// 5. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que
// ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de
// antigüedad en la empresa.
// Realice un programa para calcular e informar el sueldo mensual del empleado,
// teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de
// antigüedad.

function ejercicio5(){
    let valorHora = +prompt("Ingrese el valor de la hora");
    let horas =  +prompt("Ingrese la cantidad de horas trabajadas en el mes");
    let antiguedad = prompt("Ingrese los años de antiguedad");
    let porcentajeBono = antiguedad * 0.15
    let sueldo = valorHora * horas;
    let sueldoBono = sueldo * (porcentajeBono + 1);
    console.log("Ejercicio 5");
    console.log(`El sueldo con bono mensual del empleado es de ${sueldoBono}.`);
    console.log("---------------------------------"); 
}

// 6. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le
// solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los
// años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro
// vendido.

// Realice un programa para calcular e informar el sueldo mensual del empleado,
// teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido,
// un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual
// al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e
// informar el valor promedio de la hora del empleado.
