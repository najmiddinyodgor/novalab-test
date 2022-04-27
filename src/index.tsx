import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { index } from './store';
import App from './App';

import 'antd/dist/antd.css'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={index}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
