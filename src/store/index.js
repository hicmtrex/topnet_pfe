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
import confirmEmailSlice from './stages/confirm-emailSlice';
import confirmUserSlice from './users/confirm-userSlice';
import questionsListSlice from './questions/question-listSlice';
import createquestionSlice from './questions/create-question';
import deleteQuestionSlice from './questions/delete-question';
import questionDetailSlice from './questions/question-detailSlice';
import updateQuestionSlice from './questions/update-question';
import stageQuestionSlice from './questions/quiz/stage-quiz';
import { clientProvider } from '../utils/axios-stage';
import saveStageResultSlice from './questions/quiz/stage-answers';
import getStageTestSlice from './questions/quiz/getstage-answerSlice';

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
  //reset password
  emailConfirm: confirmEmailSlice.reducer,
  userConfirm: confirmUserSlice.reducer,
  //questions
  questionList: questionsListSlice.reducer,
  questionDetail: questionDetailSlice.reducer,
  addQuestion: createquestionSlice.reducer,
  updateQuestion: updateQuestionSlice.reducer,
  removeQuestion: deleteQuestionSlice.reducer,
  stageQuestion: stageQuestionSlice.reducer,
  stageResult: saveStageResultSlice.reducer,
  stageTestResult: getStageTestSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

clientProvider(store);
authorizationProvider(store);

export default store;
