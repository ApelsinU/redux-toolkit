/* Weather  Api,
   'https://rapidapi.com/weatherapi/api/weatherapi-com/' */

import { BASE_URLS } from './baseUrls'
import { AxiosResponse } from 'axios'
import { ICurrentWeatherData, IAstronomyData } from './types'

import axios from 'axios'

const apiConfig = {
  key: '26a5cbfb1emsh871bd0752be0c9bp11d50djsnbdaeba273ce9',
  host: 'weatherapi-com.p.rapidapi.com',
}

export async function getRealTimeWeather(city: string) {
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
    .then((res: AxiosResponse<ICurrentWeatherData>) => res.data)
    .catch((err: any) =>
      console.log('Api or server error in getRealTimeWeather method: ', err),
    )

  console.log('response', response)
  return response
}

export async function getAstronomy(city: string): Promise<IAstronomyData> {
  const options = {
    method: 'GET',
    url: BASE_URLS.WEATHER + 'astronomy.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': apiConfig.key,
      'X-RapidAPI-Host': apiConfig.host,
    },
  }

  const response = axios
    .request(options)
    .then((res: AxiosResponse) => res.data)
    .catch((err) =>
      console.log('Api or server error in getAstronomy method: ', err),
    )

  console.log('response', response)
  return response
}
