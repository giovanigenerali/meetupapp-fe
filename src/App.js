import React from 'react';
import './config/reactotron';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
      <ReduxToastr
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </>
  </Provider>
);

export default App;
