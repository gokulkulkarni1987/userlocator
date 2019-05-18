import { combineReducers } from 'redux';
import UserReducer from './src/screens/reducers/UserReducer';

export default combineReducers({
  users: UserReducer,
});