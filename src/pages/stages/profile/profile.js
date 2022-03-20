import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../../components/layout/layout';
import UserProfile from '../../../components/layout/profile/user-profile';
import StagerProfile from '../../../components/layout/profile/stager-profile';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.stageLogin);
  const { userInfo: adminInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo?.user && !adminInfo?.user) {
      navigate('/stages/auth-login');
    }
  }, [userInfo, adminInfo]);

  return (
    <Layout>
      {userInfo?.user.phone ? (
        <StagerProfile userInfo={userInfo} />
      ) : (
        <UserProfile userInfo={adminInfo} />
      )}
    </Layout>
  );
};

export default ProfilePage;
