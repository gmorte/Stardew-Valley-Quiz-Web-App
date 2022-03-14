export class Jugador{

    constructor(nombre, puntos ){

        this.nombre = nombre;
        this.puntos = puntos

    }

    datos(){
        return `Nombre: ${this.nombre} Puntos: ${this.puntos}`;
    }

}

