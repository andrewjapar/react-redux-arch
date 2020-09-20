import { combineReducers } from 'redux';
import userReducer from './Users/reducers';

export const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;