const request = requiere("request");



const obtenerBanda = (banda) => {
    const URL = "http://www.theaudiodb.com/api/v1/json/1/search.php?s = ${banda}";

    request(URL, (error, response, body) => {
        if (error) {
            console.log("ocurrio un error");
        } else {
            console.log("no hay erro");
            console.log(response.statusCode);
            //parse JSON
            const res = JSON.parse(body);
            if (res.artists !== null) {
                console.log(res.artists[0].strArtist);
                console.log(res.artists[0].strWebsite);
                console.log(res.artists[0].strBiographyES);
            } else {
                console.log("no encontre a ${banda}, o esta mal escrito");
            }
        }
    });
}

obtenerBanda("juan Gabriel");
obtenerBanda("Morat");
obtenerBanda("Temerarios");