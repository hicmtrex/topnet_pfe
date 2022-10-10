import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
import StageLogin from './pages/stages/auth/stage-login';
import StageRegister from './pages/stages/auth/stage-register';
import ProfilePage from './pages/stages/profile/profile';
import UpdateUserProfile from './pages/stages/profile/update-Userprofile';
import QuizPage from './pages/stages/questions/quiz-page';
import UserLogin from './pages/users/auth/user-login';
import DashBoardPage from './pages/admin/dashboard/dashboard-page';
import StageList from './pages/admin/dashboard/tables/stages-list';
import UsersList from './pages/admin/dashboard/tables/users-list';
import StagerDetail from './pages/admin/dashboard/profile/stage-detail';
import AddUser from './pages/admin/dashboard/users/add-user';
import UpdateStageProfile from './pages/stages/profile/update-stageProfile';
import UserDetail from './pages/admin/dashboard/profile/user-detail';
import ProtectedRoute from './utils/protected-route';
import NotFound from './utils/404';
import ResetPassword from './pages/stages/auth/forget-password/reset-password';
import ConfirmEmail from './pages/stages/auth/forget-password/confirm-email';
import ResetPasswordUser from './pages/users/forget-password/reset-password';
import ConfirmUserEmail from './pages/users/forget-password/confirm-Useremail';
import TestLadingPage from './pages/admin/dashboard/test-psycho/test-ladingpage';
import StageSubject from './pages/stages/stage-subject/stage-subjects';
import AddTest from './pages/admin/dashboard/test-psycho/add-test';
import EditTest from './pages/admin/dashboard/test-psycho/edit-test';
import SubjustList from './pages/admin/dashboard/subjects/subjects-list';
import AddSubject from './pages/admin/dashboard/subjects/add-subject';
import QuizFail from './pages/stages/questions/quiz-fail';
import QuizSuccess from './pages/stages/questions/quiz-success';
import ApprovedStages from './pages/admin/dashboard/tables/approvedresult-stages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/stages/auth-login' element={<StageLogin />} />
        <Route path='/stages/auth-register' element={<StageRegister />} />
        <Route path='/stages/auth-reset-password' element={<ResetPassword />} />
        <Route path='/stages/auth-email-confirm' element={<ConfirmEmail />} />
        {/* PROTECTED STAGES */}
        <Route
          path='/stages/profile'
          element={
            <ProtectedRoute redirectPath='/stages/auth-login'>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/users/update-stageprofile/:id'
          element={
            <ProtectedRoute redirectPath='/stages/auth-login'>
              <UpdateStageProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path='/stages/subjects'
          element={
            <ProtectedRoute>
              <StageSubject />
            </ProtectedRoute>
          }
        />
        <Route path='/questions/quiz' element={<QuizPage />} />
        <Route path='/questions/quiz-fail' element={<QuizFail />} />
        <Route path='/questions/quiz-success' element={<QuizSuccess />} />
        <Route
          path='/users/update-userprofile/:id'
          element={<UpdateUserProfile />}
        />

        {/* PROTECTED USERS */}
        <Route
          path='/admin'
          element={<Navigate to='/admin/user-login' replace />}
        />
        <Route path='/admin/user-login' element={<UserLogin />} />
        <Route
          path='/admin/auth-confirm-email'
          element={<ConfirmUserEmail />}
        />
        <Route
          path='/admin/auth-reset-password'
          element={<ResetPasswordUser />}
        />
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route path='/admin/stages-list' element={<StageList />} />
        <Route path='/admin/users-list' element={<UsersList />} />
        <Route path='/admin/stages/:id' element={<StagerDetail />} />
        <Route path='/admin/users/:id' element={<UserDetail />} />
        <Route path='/admin/add-user' element={<AddUser />} />
        <Route
          path='/admin/test-psychotechnique'
          element={<TestLadingPage />}
        />
        <Route path='/admin/add-test' element={<AddTest />} />
        <Route path='/admin/edit-test/:id' element={<EditTest />} />

        <Route path='/admin/sujet-stage' element={<SubjustList />} />
        <Route path='/admin/add-sujet' element={<AddSubject />} />
        <Route path='/admin/approved-stages' element={<ApprovedStages />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default App;
