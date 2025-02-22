const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=aa0517f16c7f2c68f41b6618efa54224&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}