import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/operations';

const Register = () => {
  const dispatch = useDispatch();

  const onRegister = (newUserData) => {
    dispatch(registerThunk(newUserData));
  }

  return (
    <main>
      <RegistrationForm onRegister={onRegister}/>
    </main>
  );
};

export default Register;