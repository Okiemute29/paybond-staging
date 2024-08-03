import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    choosedplan: '',
    carddetails: {
      cardnumber: '',
      epirydate: '',
      cvv:'',
    },
}

export const counterSlice = createSlice({
  name: 'premium',
  initialState,
  reducers: {
    setChoosePlan: (state, action) => {
        state.choosedplan = action.payload
      },
      setCardDetails: (state, action) => {
          state.carddetails = {...state.carddetails, ...action.payload}
        },
  },
})

// Action creators are generated for each case reducer function
export const { setChoosePlan, setCardDetails } = counterSlice.actions

export default counterSlice.reducer