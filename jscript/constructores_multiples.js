/* el Constructor : sirve para crear e iniciar un objeto creado a partir de una clase*/

class Moto {
    constructor( marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;

    }

    getInfo() {
        console.log(`info: ${this.marca}, ${this.modelo}, ${this.color}`);
    }
}

//para usar la clase y el constructor lo hacemos de esta manera.
const marca1 = "honda",
      modelo1 = "2022",
      color1 = "negro";

      const moto1   = new Moto( marca1, modelo1, color1);

      moto1.getInfo();