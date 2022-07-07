/*SPropiedades privadas: Son propiedades a las cuual no se las puede modificar.*/
//Ej:
class Rectangulo {
    area = 0; // el area es una propiedad privada no puede ser modificada.
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.area = base + altura;
    }
}

const rectangulo = new Rectangulo (10,15);

console.log(rectangulo);