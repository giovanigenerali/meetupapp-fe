import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as themes } from './themes';
import { reducer as meetups } from './meetups';
import { reducer as profile } from './profile';

export default history => combineReducers({
  auth,
  themes,
  meetups,
  profile,
  toastr,
  router: connectRouter(history),
});
