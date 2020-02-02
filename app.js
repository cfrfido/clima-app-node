const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ direccion } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima para ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);