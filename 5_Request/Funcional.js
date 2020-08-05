//........0...1...2...3...4
const array =[10, 22, 33, 54, 12]

//iterar arreglo => manera imperativa
//.....0...;0<=5......;1
for(let i = 0; i<= array.length; i++){
    console.log(array[i]);
}

//declarativa

const eacharray = array.forEach((value) => console.log (value));
console.log(eachArray);


//$.....concatenar

var nuevoArreglo = [];
for(let i = 0; i<= array.length; i++){
    nuevoArreglo[i] = "${i} - ${array[i]}";
}
console.log (nuevoArreglo);


//manera declarativa
const nuevoArreglo = array.map((value, index)=> " ${index} ${array}");
console.log(nuevoArreglo);

//imperativas
const paises = ["mexico", "colombia", "costa Rica", "peru", "Republica Dominicana", "venezuela"];

const nuevoPaises=[];
let e = 0;
for(let i = 0; i < paises.length; i++){   
   if (paises[i].length <= 6){
       nuevoPaises[e] = paises[i];
       e++;
   }
}

console.log(nuevoPaises);

//declarativas
const nuevoPaises = paises.filter((value, index)=> value.length <=6);

console.log(nuevoPaises);