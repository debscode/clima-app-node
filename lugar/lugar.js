const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodeUrl = encodeURI(direccion);
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid={key}`);

    if (response.status != 200) {
        throw new Error(`No hay datos para la ciudad ${direccion}`);
    }

    const data = response.data;
    const dir = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng,
}


