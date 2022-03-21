import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ redirectPath = '/admin/user-login', children }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { userInfo: stageInfo } = useSelector((state) => state.stageLogin);
  if (!userInfo?.user && !stageInfo?.user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
