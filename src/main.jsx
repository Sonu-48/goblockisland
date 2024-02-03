import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
   
  </React.StrictMode>,
)