import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],

  signUpRequest: ['name', 'email', 'password'],
  signUpSuccess: ['token'],

  logoutRequest: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@meetapp:token'),
  token: localStorage.getItem('@meetapp:token') || null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({ signedIn: true, token });

export const logout = (state) => {
  localStorage.removeItem('@meetapp:token');
  localStorage.removeItem('@meetapp:first_login');
  return state.merge({ signedIn: false, token: null });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,

  [Types.SIGN_UP_SUCCESS]: success,

  [Types.LOGOUT_REQUEST]: logout,
});
