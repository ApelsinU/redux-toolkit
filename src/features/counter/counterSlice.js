import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    clean: (state) => {
      state.value = initialState.value
    },
  },
})
export const { increment, decrement, incrementByAmount, clean } =
  counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export default counterSlice.reducer
