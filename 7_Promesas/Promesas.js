// es algo que no sabemos si sucedera
// promesa esta en el aire(pending)
// 24 junio
// cumple => celular ()
// no cumple => 
//.........no tengo dinero
//......... se me olvido
//.........no lo encontre
//.........¿hoy es tu cumple?



const promesaCumple = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.round(Math.random() * 100);
        if (number > 50) {
            resolve("si se cumplio");
        } else {
            reject("te quedaste sin cel")
        }
    }, 5000);
});

// .then() es el metodo que se ejecuta cuando la promesa se cumple
promesaCumple
    .then((celular) => console.log(celular))
    .catch((razon) => console.log(razon));


//numero aleatorio      
// 0 =>1 (1 => 100%, 0 => =%)

//console.log(math.round(match.random()*100));

//console.log(math.floor(24.5651));
//console.log(math.ceil(24.5651));
//console.log(math.round(24.5651));