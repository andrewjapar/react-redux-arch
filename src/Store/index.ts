import { combineReducers } from 'redux';
import userReducer from './Users/reducers';
import NavReducer from './Nav/reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  nav: NavReducer,
});

export type RootState = ReturnType<typeof rootReducer>;