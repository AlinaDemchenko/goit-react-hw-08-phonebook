import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

const Register = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <main>
      <RegistrationForm/>
      {isLoading && <Loader />}
      <Notification />
    </main>
  );
};

export default Register;