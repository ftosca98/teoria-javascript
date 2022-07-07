/* Sets y gets y propiedad estatic*/
//SETS Y GETS: Es una coleccion de valores unicos, no se puede tener el mismo nombre de la propiedad a la cual quieramos establecerla.

//EJ ://
class Sobrina {
 
    static _conteo = 0; //creamos una propiedad estatica de conteo

    nombre = "";
    edad = "";
    barrio = ""; //aqui creamos una propiedad adicional llamada barrio para el sets

    constructor ( nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;

       Sobrina._conteo ++;  // aqui colocamos la clase Sobrina con la propiedad static
    }

    set setBarrioActual( barrio ) {
        this.barrio = barrio;
    }

    get getBarrioActual(){ //Aqui con el getBarrioActual lo que hacemos es recuperar una propiedad
        return `El barrio que actualmente vive ${ this.nombre} es ${this.barrio}`; //Get : se usa para recuperar un valor, no se puede repetir el mismo get
    }
}
const kiara = new Sobrina( "Zamira", "4años" );



kiara.setBarrioActual = "9 de Julio"; //aqui utilizamos el set
console.log(kiara); // imprimimos Kiara
console.log(kiara.getBarrioActual); //aqui hacemos el llamado a la consola con el get

console.log("conteo statico", Sobrina._conteo );//aqui hacemos el llamado a la consola opara que nos muestre el conteo