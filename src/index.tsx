import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { api, store } from './store';
import MockAdapter from 'axios-mock-adapter';
import { APIRoute } from './const';
import { fakeProductionData } from './mocks/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockAPI = new MockAdapter(api);

mockAPI.onGet(APIRoute.ProductionData).reply(200, fakeProductionData);

mockAPI.onGet(APIRoute.ProductionData).reply((config) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const mathRandom = Math.random();
    if (mathRandom > 0.1) {
      resolve([200, fakeProductionData]);
    } else {
      resolve([500, { success: false }]);
    }
  }, 1000);
}));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
