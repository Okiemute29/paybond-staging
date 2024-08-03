import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    template: 'default',
    templatecolor: {hex: '#121212'},
    businessprefix: 'CR',
}

export const counterSlice = createSlice({
  name: 'invoicereceiptsetting',
  initialState,
  reducers: {
    setTemplate: (state, action) => {
        state.template = action.payload
      },
      setTemplateColor: (state, action) => {
          state.templatecolor = action.payload
        },
        setBusinessPrefix: (state, action) => {
            state.businessprefix = action.payload
          },
  },
})

// Action creators are generated for each case reducer function
export const { setTemplate, setTemplateColor, setBusinessPrefix } = counterSlice.actions

export default counterSlice.reducer