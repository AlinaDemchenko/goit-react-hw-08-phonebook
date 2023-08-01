import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts, selectLoading } from 'redux/selectors';
import { StyledContactsLayout } from './ContactsLayout.styled';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import phone from '../../images/phone-short.png';
import vibration from '../../images/vibration.png';
import Filter from 'components/Filter/Filter';

const ContactsLayout = () => {
  const items = useSelector(selectContacts);
  // const isLoading = useSelector(selectLoading);

  return (
    <StyledContactsLayout>
      <div className="cover">
        <div className="wrapper">
          <img className="vibration" src={vibration} alt="vibration logo" />
          <img src={phone} alt="phone logo" />
          <h1>
            Contact
            <span>.</span>
          </h1>
          <Filter />
        </div>
        <Form />
        {items.length > 0 && <ContactList />}
      </div>
    </StyledContactsLayout>
  );
};

export default ContactsLayout;
