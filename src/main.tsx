import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ContextApiProvider} from '../src/context/Context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextApiProvider>
    <App />
    </ContextApiProvider>
  </React.StrictMode>,
)
