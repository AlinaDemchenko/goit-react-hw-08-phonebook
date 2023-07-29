import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <main>
      <h1>Contacts</h1>
      {isLoading && <Loader />}
      <Notification />
    </main>
  );
};

export default Contacts;
