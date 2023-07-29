import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { StyledSharedLayout } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
// import { useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const SharedLayout = () => {
  // const location = useLocation();

    return (
      // location.pathname === '/' ? <Navigate to="/home"/> :
      <StyledSharedLayout>
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
      </StyledSharedLayout>
    );
  };
  
  export default SharedLayout;