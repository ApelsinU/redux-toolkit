/* Google Translate API,
   'https://rapidapi.com/googlecloud/api/google-translate1/' */

import { BASE_URLS } from './baseUrls'

const apiConfig = {
  contentType: 'application/x-www-form-urlencoded',
  acceptEncoding: 'application/gzip',
  key: '26a5cbfb1emsh871bd0752be0c9bp11d50djsnbdaeba273ce9',
  host: 'google-translate1.p.rapidapi.com',
}

export async function getLanguages() {
  const options = {
    method: 'GET',
    headers: {
      'Accept-Encoding': apiConfig.acceptEncoding,
      'X-RapidAPI-Key': apiConfig.key,
      'X-RapidAPI-Host': apiConfig.host,
    },
  }

  const response = await fetch(BASE_URLS.TRANSLATE + 'languages', options).then(
    (res) => res.json(),
  )

  return response?.data?.languages
}

export async function getTranslate(fromLang = '', toLang, fromText) {
  const params = new URLSearchParams()
  params.append('q', fromText)
  params.append('source', fromLang)
  params.append('target', toLang)

  const options = {
    method: 'POST',
    headers: {
      'content-type': apiConfig.contentType,
      'Accept-Encoding': apiConfig.acceptEncoding,
      'X-RapidAPI-Key': apiConfig.key,
      'X-RapidAPI-Host': apiConfig.host,
    },
    body: params,
  }

  const response = await fetch(BASE_URLS.TRANSLATE, options)
    .then((res) => res.json())
    .catch((err) =>
      console.log('Api or server error in getTranslate method: ', err),
    )

  return response?.data?.translations[0]
}
