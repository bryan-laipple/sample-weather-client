import axios from 'axios';

// from env.json loaded by webpack
const APP_ID = ENV['OPEN_WX_MAP_APP_ID'];
const FETCH_WX_URL = `http://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const req = axios.get(FETCH_WX_URL, {
    params: {
      appid: APP_ID,
      q: `${city},us`
    }
  });
  return {
    type: FETCH_WEATHER,
    payload: req
  }
}