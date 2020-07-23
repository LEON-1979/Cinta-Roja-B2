class Largometraje{
    constructor(titulo, duracion, director){
        this.titulo = titulo;
        this.duracion = duracion + " minutos";
        this.director = director;
    }
}

 //var ejemplo = new Largometraje("Ejemplo", 120, "desconosido");
 //console.log(ejemplo);

 //destructuracion de obzjetos
 //var {titulo, duracion, director} = ejemplo;
 //console.log(titulo);
 //console.log(duracion);
 //console.log(director);

console.log("Se ejecuto Documental.js");
module.exports = {Largometraje};

 