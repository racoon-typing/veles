import { combineReducers } from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process';

const rootReducer = combineReducers({
  user: userProcess.reducer,
});

export default rootReducer;
