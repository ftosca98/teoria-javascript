/*El Singleton es una instancia unica de la clase*/

//Ej:
class Singleton {

    static instancia;
    nombre = "";

    constructor( nombre = "") {

        console.log (Singleton.instancia);

        Singleton.instancia = this; // aqui preguntamos si la instancia esta vacia.
        this.nombre = nombre;

        return this;
    
    }

  
}
const instancia1 = new Singleton ( "guitarra");
console.log(`nombre en la instancia es: ${ instancia1.nombre}`);