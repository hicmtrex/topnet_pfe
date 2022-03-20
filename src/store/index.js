import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authorizationProvider } from '../utils/help-api';
import loginStageSlice from './stages/stage-loginSlice';
import registerStageSlice from './stages/stage-register';
import loginUserSlice from './users/user-loginSlice';
import stagesListSlice from './stages/admin/stages-list';
import stageDetailSlice from './stages/admin/stager-detailSlice';
import updateStageSlice from './stages/admin/update-stageSlice';
import createUserSlice from './users/add-userSlice';
import usersListSlice from './users/admin/users-list';
import updateUserSlice from './users/update-userSlice';
import usersDetailSlice from './users/user-detailSlice';

const reducers = combineReducers({
  stageLogin: loginStageSlice.reducer,
  stageRegister: registerStageSlice.reducer,
  //admin
  userLogin: loginUserSlice.reducer,
  stagesList: stagesListSlice.reducer,
  stageDetail: stageDetailSlice.reducer, 
  stageUpdate: updateStageSlice.reducer,
  addUser: createUserSlice.reducer,
  //users
  usersList: usersListSlice.reducer,
  usersUpdate: updateUserSlice.reducer,
  userDetail: usersDetailSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

authorizationProvider(store);

export default store;
