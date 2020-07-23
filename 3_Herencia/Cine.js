var {nuestroPlaneta, elSembrador} = require("./Documental");
var { yaNoEstoyAqui, SangrePorsangre } = require("./Peliculas");

class Cine {
    constructor(cadena, salas, ubicaion){
        this.cadena = cadena;
        this.sales = salas;
        this.ubicaion = ubicaion
    }
    reproducirLargometraje(largometraje){
        if (largometraje.precio < 80){
            //pelicula
            return " se esta reproduciendo" + largometraje.titulo + ",mi genero es" + largometraje.genero + ",es una pelicula";
        }else{
            //Docuemntal
            return "estas viendo el documental" + largometraje.titulo + ",el narrador es" +largometraje.narrador+ ",y es patrocinado por" + largometraje.patrocinador;
        }

    }
}

var cinepolis = new Cine("CinePolis", 9, "Nuevo Toledo");

console.log(cinepolis.reproducirLargometraje(nuestroPlaneta));
console.log(cinepolis.reproducirLargometraje(SangrePorsangre));