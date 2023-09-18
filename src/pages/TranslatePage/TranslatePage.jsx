import { useEffect, useState } from 'react'

import './translate-page.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchTranslate,
  fetchLanguages,
} from '../../redux/slices/translate/translateSlice'

export default function TranslatePage() {
  const dispatch = useDispatch()
  const languages = useSelector((state) => state.translate.languages)
  const translatedText = useSelector(
    (state) => state.translate.translation,
  )?.translatedText
  const detectedLanguage = useSelector(
    (state) => state.translate.translation,
  )?.detectedSourceLanguage

  const [fromLang, setFromLang] = useState('')
  const [toLang, setToLang] = useState('')

  const [fromText, setFromText] = useState('')

  useEffect(() => {
    dispatch(fetchLanguages())
  }, [dispatch])

  useEffect(() => {
    detectedLanguage && setFromLang(detectedLanguage)
  }, [detectedLanguage])

  useEffect(() => {
    toLang === '' && !!languages?.length && setToLang(languages[97]?.language)
  }, [toLang, languages])

  function handleSubmit(e) {
    e.preventDefault()

    fromLang === toLang
      ? dispatch(fetchTranslate({ toLang, fromText }))
      : dispatch(fetchTranslate({ fromLang, toLang, fromText }))
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>Google Translator Api</h1>

        {!!languages?.length ? (
          <div className="translation-header">
            <select
              className="translation-select"
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
            >
              <option value="">Определить язык</option>
              {!!languages?.length &&
                languages?.map((lang) => (
                  <option key={lang?.language}>{lang?.language}</option>
                ))}
            </select>

            <select
              className="translation-select"
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
            >
              {!!languages?.length &&
                languages?.map((lang) => (
                  <option key={lang?.language}>{lang?.language}</option>
                ))}
            </select>
          </div>
        ) : (
          'Loading...'
        )}

        <div className="translation-content">
          <form className="translation-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="translation-areas">
              <textarea
                required
                name="fromText"
                className="translation-area"
                onChange={(e) => setFromText(e.target.value)}
              />
              <textarea
                readOnly
                className="translation-area"
                value={translatedText}
              />
            </div>
            <button className="translation-button">Перевести</button>
          </form>
        </div>
      </div>
    </div>
  )
}
