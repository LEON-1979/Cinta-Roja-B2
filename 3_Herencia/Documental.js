var {Largometraje} = require("./Largometraje");

class Documental extends Largometraje{
    constructor(titulo, duracion, director,narrador, patrocinador){
        super(titulo, duracion ,director);
        this.precio = 80;
        this.narrador = narrador;
        this.patrocinador = patrocinador;

    }
}

var nuestroPlaneta = new Documental("Nuestro Planea", 60, "tommy", "Jaime Flores", "Natgio");
var elSembrador = new Documental("el sembrador", 65, "ivette Mendoza", "luis miguel", "netflix");

console.log("Se ejecuto Documental.js");
module.exports ={nuestroPlaneta, elSembrador};