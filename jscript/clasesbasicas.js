/*Aqui vemos un ejemplo de una clase basica de un Objeto, con el metodo Constructor que se va a ejecutar en el momento que se crea una nueva instancia de Persona*/


class Persona {

    nombre = "";
    apellido = "";
    edad = "";

    constructor ( nombre, apellido, edad) {
       this.nombre = nombre;
       this.codigo = apellido;
       this.edad = edad;
    }
}
/*para crear una  nueva clase lo hacemos de esta manera en este caso una constante.*/
const iker = new Persona("Pablo", "Garcia", "8años" );
const martina = new Persona( "Jazmin", "Garcia", "5años" );
console.log(iker);
console.log(martina);