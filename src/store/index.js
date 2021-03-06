import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers(history), composeEnhancers);

sagaMiddleware.run(sagas);

export default store;
