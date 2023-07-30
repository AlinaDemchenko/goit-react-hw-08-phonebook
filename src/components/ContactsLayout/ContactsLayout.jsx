import { useSelector} from 'react-redux/es/hooks/useSelector';
import Form from 'components/Form/Form';
import { StyledContactsLayout } from './ContactsLayout.styled';
import ContactList from 'components/ContactList/ContactList';
import { selectContacts,selectLoading } from 'redux/selectors';

const ContactsLayout = () => {
    const items = useSelector(selectContacts);
    const isLoading = useSelector(selectLoading);

  return (
    <StyledContactsLayout>
      <div>
        <Form/>
        {items.length > 0 && <ContactList/>}
      </div>
    </StyledContactsLayout>
  );
};

export default ContactsLayout;

