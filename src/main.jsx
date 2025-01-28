import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Redux/Store.js'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  </ThemeProvider>
  
)
