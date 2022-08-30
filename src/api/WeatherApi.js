/* Poke Api,
   'https://rapidapi.com/weatherapi/api/weatherapi-com/' */

import { BASE_URLS } from './baseUrls'

const axios = require('axios')

const apiConfig = {
  key: '26a5cbfb1emsh871bd0752be0c9bp11d50djsnbdaeba273ce9',
  host: 'weatherapi-com.p.rapidapi.com',
}

export async function getRealTimeWeather(city) {
  const options = {
    method: 'GET',
    url: BASE_URLS.WEATHER + 'current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': apiConfig.key,
      'X-RapidAPI-Host': apiConfig.host,
    },
  }

  const response = axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.log('server error: ', err))

  console.log('response', response)
  return response
}
