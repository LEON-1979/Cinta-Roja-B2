var { Largometraje } = require("./Largometraje");

class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, genero) {
        super(titulo, duracion, director)
        this.precio = 50;
        this.genero = genero;
    }
}

var yaNoEstoyAqui = new Pelicula("Ya No Estoy Aqui", 100, "?", "Drama");
var SangrePorsangre = new Pelicula("Sangre Por Sangre", 120, "desconosido", "Acciuon");

module.exports = { yaNoEstoyAqui, SangrePorsangre }