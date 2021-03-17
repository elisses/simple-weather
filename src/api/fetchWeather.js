import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd6ea0af9004e810578cc0b07718cc8ee';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

