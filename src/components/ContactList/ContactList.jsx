import { useSelector } from 'react-redux';
import { StyledContacts } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <StyledContacts>
      {filteredContacts.map(contact => {
        return (
          <Contact
            contactItemData={contact}
            key={contact.id}
          />
        );
      })}
    </StyledContacts>
  );
};

export default ContactList;
