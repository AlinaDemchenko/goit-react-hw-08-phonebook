import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { selectLoading, selectError } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SharedLayout from './SharedLayout/SharedLayout';
import PublicRoute from 'Guards/PublicRoute';
import PrivateRoute from 'Guards/PrivateRoute';
import Notification from './Notification/Notification';
import Loader from './Loader/Loader';

const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));

export function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      error.name === "MongoError" ? toast.info('This account already exists') : toast.info('Wrong login data')
    }
  }, [error]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Notification />
      {isLoading && <Loader />}
    </>
  );
}
// <Route path="/home" element={<Home />}/>
// <Route path="/" element={<SharedLayout />}>
