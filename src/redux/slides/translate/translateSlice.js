import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLanguages, getTranslate } from '../../../api/TranslateApi'

const initialState = {
  languages: null,
  translation: '',
}

export const fetchLanguages = createAsyncThunk(
  'translate/fetchLanguages',
  async () => await getLanguages(),
)

export const fetchTranslate = createAsyncThunk(
  'translate/fetchTranslateText',
  async ({ fromLang, toLang, fromText }) =>
    await getTranslate(fromLang, toLang, fromText),
)

export const translateSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.languages = action.payload
      })
      .addCase(fetchTranslate.fulfilled, (state, action) => {
        state.translation = action.payload
      })
  },
})

export default translateSlice.reducer
