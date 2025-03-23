// src/main.tsx (update this file)
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App /> // Removed StrictMode to avoid react-beautiful-dnd issues
)