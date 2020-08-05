const promesaCumple = new Promise((resolve, reject) => (
    setTimeout(() => {
        const Number = Math.random(Math.random() * 100);
        if (Number > 50) {
            console.log("celular");
        } else if(Number > 10){
            reject("no tengo dinero");
        } else {
            reject("se me olvido");
        }
    }, 5000);   
));

//.then .... es cuando el metodo se ejecuta cuando la promesa se cumple

promesaCumple
    .then((celular) => console.log(celular))
    .catch((razon) => console.log(razon));
    

console.log(promesaCumple);


//numero aleatorios
// 0....1
console.log(math.random(Math.random() * 100));


console.log(Math.floor(24.5651));      //te aproxima al numero menor 24
console.log(Math.ceil(24.5651));       //te aproxima al numero mayor 25
console.log(Math.round(24.5651));      //te aproxima al numero menor o mayor 25





