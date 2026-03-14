import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'
import { LanguageProvider } from './components/language-context'
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0b3a78' },
    secondary: { main: '#127a6f' },
    background: { default: '#f6f8fc' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: 'Inter, Noto Sans SC, Noto Sans TC, system-ui, sans-serif',
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
