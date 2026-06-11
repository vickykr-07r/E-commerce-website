import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/ServerContext.jsx';
import store from './Redux/Store.js';
import { Provider } from "react-redux";
import { ShopContext } from './Context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Context>
      <Provider store={store}>
        <ShopContext>
          
      <App />

      </ShopContext>
      </Provider>
      </Context>
    </BrowserRouter>
  </StrictMode>
);