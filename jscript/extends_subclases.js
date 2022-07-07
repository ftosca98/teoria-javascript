/*Extends: se puede utilizar para crear subclases de clases personalizadas así como de objetos integrados.*/

class Personas {

    nombre = "";
    edad = "";
    barrio = ""; //aqui creamos una propiedad adicional llamada barrio para el sets

    constructor ( nombre = "sin nombre", edad = "sin edad") {
       this.nombre = nombre;
       this.edad = edad;
    }
}

 class informacion extends Personas{ //aqui creamos una sub calse llmada informacion

    hijos = "4";
    constructor(nombre,edad) {
        super(nombre,edad); //super hace referencia a la clase Personas.
    }

 }
 const Nancy = new informacion("Elina", "55años");

console.log(Nancy);