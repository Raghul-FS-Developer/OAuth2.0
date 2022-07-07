import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain='dev--ljvmx4d.us.auth0.com'
    clientId='27G3nuJFIKWqwKGYZhKrHgqHOGs6PL10'
    redirectUri={window.location.origin}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);


