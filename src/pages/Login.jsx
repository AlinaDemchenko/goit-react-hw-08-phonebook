import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/operations';

const Login = () => {
  const dispatch = useDispatch();

  const onLogin =(userData) =>{
    dispatch(loginThunk(userData));
  }
  
  return (
    <main>
      <LoginForm onLogin={onLogin}/>
    </main>
  );
};

export default Login;