import ContactsLayout from 'components/ContactsLayout/ContactsLayout';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { useSelector} from 'react-redux';
import { selectLoading } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <main>
      <ContactsLayout />
      {isLoading && <Loader />}
      <Notification />
    </main>
  );
};

export default Contacts;
