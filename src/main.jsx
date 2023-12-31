import React from "react";
import ReactDOM from "react-dom/client";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';

//REDUX

import { Provider } from "react-redux";
import store from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <MantineProvider>
    <App />
    </MantineProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
