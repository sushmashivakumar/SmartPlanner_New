import { configureStore } from '@reduxjs/toolkit'
import loggedIn from '../features/loggedIn'
import tableInfo from '../features/tableInfo'
import userInfo from '../features/userInfo'
import {combineReducers} from 'redux'

const combinedReducer = combineReducers({
    loggedIn,
    userInfo,
    tableInfo
});

const rootReducer = (state, action) => {
  console.log('action', action)
  if (action.type === 'login/signOut') { 
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
})