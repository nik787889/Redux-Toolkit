import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from './redux-toolkit/store';
import { Provider } from 'react-redux';

// // "persist"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';


let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>

  // // Redux Toolkit (We can also Wrap "Provider" in App.js)
  // <Provider store={store}>
  //   <App />
  // </Provider>
);



// // //
// const container = document.getElementById('root')
// const root = ReactDOMClient.createRoot(container)
// root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
