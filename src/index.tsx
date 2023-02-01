import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { api, store } from './store';
import MockAdapter from 'axios-mock-adapter';
import { APIRoute } from './const';
import { fakeProductionData } from './mocks/mocks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockAPI = new MockAdapter(api);

mockAPI.onGet(APIRoute.ProductionData).reply(200, fakeProductionData);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer hideProgressBar />
    </Provider>
  </React.StrictMode>,
);
