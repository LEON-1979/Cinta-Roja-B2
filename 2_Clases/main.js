class Auto{
    constructor(color, matricula, motor){
        this.llantas = "5";
        this.color =color;
        this.matricula = matricula;
        this.motor = motor;
        this.volante = true;
        this.encendido =false
        
    }

    encender(){
        //return "el auto" = this.color + "ha sido encendido"
    }
}
//.....instacia de mi clase auto
var MiAuto = new Auto("azul", "fhasgui", "aatt");
var ElAuto = new Auto("rojo", "ghewji", "llll");

console.log(MiAuto);
console.log(MiAuto.encender());
console.log(ElAuto);
console.log(ElAuto.encender());