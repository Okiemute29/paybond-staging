import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    business: false,
    allBusiness: null,
    activeBusiness: null
}

if( localStorage.getItem("business") !== null){
  initialState.business = localStorage.getItem("business")
  initialState.allBusiness = JSON.parse(localStorage.getItem("allbusiness"))
  initialState.activeBusiness = JSON.parse(localStorage.getItem("activebusiness"))
}


export const counterSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
      setBusiness: (state, action) => {
        state.business = action.payload
      },
      setAllBusiness: (state, action) => {
        state.allBusiness = action.payload
      },
      setActiveBusiness: (state, action) => {
        state.activeBusiness = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setBusiness, setAllBusiness, setActiveBusiness } = counterSlice.actions

export default counterSlice.reducer