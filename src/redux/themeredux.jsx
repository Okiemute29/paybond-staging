import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: !localStorage.theme ? 'light' : localStorage.theme,
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themecheck: (state) => {
      const app = document.getElementById('App')
      
      if (localStorage.theme === state.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        app.classList.add(state.theme)
        localStorage.setItem('theme', state.theme)
      } else {
        
        app.classList.remove(state.theme)
      }
      
      // Whenever the user explicitly chooses light mode
      // localStorage.theme = 'light'
      if (state.theme === 'light') {
        app.classList.remove(state.theme)
        state.theme = 'dark'
        app.classList.add(state.theme)
        localStorage.setItem('theme', state.theme)
      }else{
        app.classList.remove(state.theme)
        state.theme = 'light'
        app.classList.add(state.theme)
        localStorage.setItem('theme', state.theme)
      }
      // // Whenever the user explicitly chooses dark mode
      // localStorage.theme = 'dark'
      
      // // Whenever the user explicitly chooses to respect the OS preference
      // localStorage.removeItem('theme')
      
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { themecheck } = counterSlice.actions

export default counterSlice.reducer