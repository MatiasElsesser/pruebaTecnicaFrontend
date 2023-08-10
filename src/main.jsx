import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain='dev-lr81zxxjkjt6hs83.us.auth0.com'
    clientId='n6ajTanmnBOEhhIuZLeq7T0tn1DDlBip'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)
