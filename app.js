const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    }); */

/* clima.getClima(1.21, -77.28)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    }); */

const getInfo = async (direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${coords.dir}`;
    }
}

getInfo(argv.direccion)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });