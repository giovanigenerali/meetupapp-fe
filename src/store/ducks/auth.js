import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signInFailed: null,

  signUpRequest: ['name', 'email', 'password'],
  signUpSuccess: ['token'],
  signUpFailed: null,

  logoutRequest: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@meetapp:token'),
  token: localStorage.getItem('@meetapp:token') || null,
  submitting: false,
});

/* Reducers */

export const request = state => state.merge({ submitting: true });
export const success = (state, { token }) => state.merge({
  signedIn: true,
  token,
  submitting: false,
});
export const failed = state => state.merge({
  signedIn: false,
  submitting: false,
});

export const logout = (state) => {
  localStorage.removeItem('@meetapp:token');
  localStorage.removeItem('@meetapp:first_login');
  return state.merge({ signedIn: false, token: null });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: request,
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILED]: failed,

  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_UP_SUCCESS]: success,
  [Types.SIGN_UP_FAILED]: failed,

  [Types.LOGOUT_REQUEST]: logout,
});
