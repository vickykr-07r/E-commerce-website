import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/ServerContext.jsx';
import store from './Redux/Store.js';
import { Provider } from "react-redux";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Context>
      <Provider store={store}>
      <App />
      </Provider>
      </Context>
    </BrowserRouter>
  </StrictMode>
);