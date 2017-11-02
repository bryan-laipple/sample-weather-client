import axios from 'axios';

// from env.json loaded by webpack
const OPEN_WX_MAP_API_KEY = ENV['API_KEY'];;
const FETCH_WX_URL = `http://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const req = axios.get(FETCH_WX_URL, {
    params: {
      appid: OPEN_WX_MAP_API_KEY,
      q: `${city},us`
    }
  });
  return {
    type: FETCH_WEATHER,
    payload: req
  }
}