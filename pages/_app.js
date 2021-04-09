import React from 'react';

//style
import '../styles/app.css';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../redux/reducers/index';

const store = createStore(reducer);

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
