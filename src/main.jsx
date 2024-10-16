import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/context.jsx'
import {HashRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter basename='/'>
    <StrictMode>
    <ContextProvider>
      <App />
  </ContextProvider>
    </StrictMode>
  
  </HashRouter>
  ,
)
