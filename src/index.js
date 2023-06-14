import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'strore/Store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
