import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../../components/layout/layout';
import UserProfile from '../../../components/layout/profile/user-profile';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.stageLogin);

  useEffect(() => {
    if (!userInfo) {
      navigate('/stages/auth-login');
    }
  }, [userInfo]);

  return (
    <Layout>
      <UserProfile userInfo={userInfo} />
    </Layout>
  );
};

export default ProfilePage;
