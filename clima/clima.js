const axios = require('axios');

const getClima = async (lat, lng) => {    
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6727392200160a23cebe5c1d912aa955&units=metric`);

    if (response.status != 200) {
        throw new Error(`No hay datos para la ciudad ${lat} ${lng}`);
    }

    return response.data.main.temp;
}

module.exports = {
    getClima,
}


