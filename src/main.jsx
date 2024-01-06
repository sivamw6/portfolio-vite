import React from 'react'
import ReactDOM from 'react-dom/client'

//Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Root Component
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
