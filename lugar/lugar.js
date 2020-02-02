const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUri = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUri }`,
        headers: { 'x-rapidapi-key': '55bfe2b305mshf863825dc8fb082p1cc742jsnef6129bf44b8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No se ha encontrado resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}