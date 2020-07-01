class Banda{{
    constructor(nombre, web, anio, genero){
        //no encontrados
        this.nombre = nombre ? nombre :"nombre no encontrado";
        this.web = web ? web : "web no encontrado";
        this.anio = anio ? anio : "fundacion no encontrado";
        this.genero = genero ? genero : "genero no encontrado";

    }
}
module.exports={banda};

//operadores ternarios
//const edad= 24;
//console.log(edad >=18);

//if (edad>=18){
  //  console.log("eres mayor de edad");
//}else{
  //  console.log("eres menor de edad");
//}
