//clase Mascota.....super clase.....clase prada
class Mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.patas = patas;
        this.cerebro = true;
    }

    alimentarse() {
        return this.nombre = "se esta alimentando"
    }
}

//subclase de mascota
class Perro extends Mascota {
    // metodo constructor
    constructor(nombre, patas, cola, raza){
        // super constructor
        super(nombre, patas);
        this.ladra = true;
        this.cola = cola;
        this. raza = raza;
    }
    truco() {
        return this.nombre + " esta dando la pata";
    }
}

//subclase de mascota
class Serpiente extends Mascota {
    // metodo constructor
    constructor(nombre, color){
        // super constructor
         super(nombre, 0);
         this.color = color;
         this.veneno = false;
    }

    morder(){
        return this.nombre + "te mordio";
    }

    cambiarPiel(){
        return this.nombre + "ha cambia de piel" + this.color;
        
    }

}

var meteoro = new Perro("meteoro", 4, true, "salchicha");
var lolo = new Mascota("lolo", 4);
var snippet = new Serpiente("snippet", "negra");

console.log(meteoro);
console.log(meteoro.truco());
console.log(lolo.alimentarse());
console.log(snippet);