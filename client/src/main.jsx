import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { DataProvider } from './context/data.jsx'
import { AuthProvider } from './context/auth.jsx'

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <AuthProvider>
      <StrictMode>
        <App />
        <ToastContainer />
      </StrictMode>
    </AuthProvider>
  </DataProvider>
)