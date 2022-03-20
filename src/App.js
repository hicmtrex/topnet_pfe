import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='*'  element={<HomePage />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/stages/auth-login' element={<StageLogin />} />
        <Route path='/stages/auth-register' element={<StageRegister />} />
        <Route path='/stages/profile' element={<ProfilePage />} />
        <Route
          path='/users/update-userprofile/:id'
          element={<UpdateUserProfile />}
        />
        <Route
          path='/users/update-stageprofile/:id'
          element={<UpdateStageProfile />}
        />
        <Route path='/questions/quiz' element={<QuizPage />} />
        <Route path='/admin/user-login' element={<UserLogin />} />
        <Route path='/admin/dashboard' element={<DashBoardPage />} />
        <Route path='/admin/stages-list' element={<StageList />} />
        <Route path='/admin/users-list' element={<UsersList />} />
        <Route path='/admin/stages/:id' element={<StagerDetail />} />
        <Route path='/admin/users/:id' element={<UserDetail />} />
        <Route path='/admin/add-user' element={<AddUser />} />
      </Routes>

      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default App;
