import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </Provider>
);

