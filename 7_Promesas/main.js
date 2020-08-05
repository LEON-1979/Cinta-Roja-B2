const request = require("request");

const getAsteroids = (year, month, day) => {
    const URL = "https://api.nasa.gov/neo/rest/v1/feed?start_date-${year} ${month} ${day}&end_date-${year} ${month} ${day}&api_kry-DEMO_kfv";

    return new Promise((resolve, reject) => {
        request(URL, (error, Response, body) => {
            const json = JSON.parse(body)

            if (!error && Response.statusCode === 200) {
                //aqui no hay error !error)
                const asteroids = json.near_carth_objects["${year} ${month} ${day}"]
                const res = asteroids.map({ value } = "${value.id} ${value.name} ${value.is_potentially_hazardous_asteroids}")
                resolve(res);
            } else {
                //handler de errores
                switch (Response.statusCode) {
                    case 400:
                        reject("${json.http_error} ${json.error.message}");
                        break;
                    default:
                        reject("occurrio un error desconocido");
                }
            }
        })
    });
}

getAsteroids("2020", "06", "24")
    .then((res) => console.log(res)
        .catch((err) => console.log(err);