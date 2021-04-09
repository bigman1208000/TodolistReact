import React from 'react';

//style
import '../styles/app.css';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../redux/reducers/index';

//redux-saga
import mySaga from '../redux/sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
