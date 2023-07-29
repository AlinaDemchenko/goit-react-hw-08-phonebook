import Loader from 'components/Loader/Loader';
import LoginForm from 'components/LoginForm/LoginForm';
import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

const Login = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <main>
      <LoginForm/>
      {isLoading && <Loader />}
      <Notification />
    </main>
  );
};

export default Login;