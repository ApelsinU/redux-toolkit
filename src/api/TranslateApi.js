/* Google Translate API,
   'https://rapidapi.com/googlecloud/api/google-translate1/' */

import { BASE_URLS } from './baseUrls'

export async function getLanguages() {
  const options = {
    method: 'GET',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'aa831b3f44msh0e15d8728e56006p11f4dejsn660352b61fe7',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
  }

  const response = await fetch(BASE_URLS.TRANSLATE + 'languages', options).then(
    (res) => res.json(),
  )

  return response?.data?.languages
}

export async function getTranslate(fromLang, toLang, fromText) {
  const params = new URLSearchParams()
  params.append('q', fromText)
  params.append('source', fromLang)
  params.append('target', toLang)

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'aa831b3f44msh0e15d8728e56006p11f4dejsn660352b61fe7',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: params,
  }

  const response = await fetch(BASE_URLS.TRANSLATE, options).then((res) =>
    res.json(),
  )

  console.log('response', response)

  return response?.data?.translations[0]?.translatedText
}
