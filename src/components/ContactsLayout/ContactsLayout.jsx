import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts } from 'redux/selectors';
import { StyledContactsLayout } from './ContactsLayout.styled';
import PropTypes from 'prop-types';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import phone from '../../images/phone-short.png';
import Filter from 'components/Filter/Filter';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const ContactsLayout = ({
  onDeleteContact,
  onAddContact,
  onLogout,
  onFilter,
}) => {
  const items = useSelector(selectContacts);

  return (
    <StyledContactsLayout>
      <div className="cover">
        <div className="wrapper">
          <img src={phone} alt="phone logo" />
          <h1>
            Contact
            <span>.</span>
          </h1>
          <Filter onFilter={onFilter} />
          <LogoutBtn onLogout={onLogout} />
        </div>
        <Form onAddContact={onAddContact} />
        {items.length > 0 && <ContactList onDeleteContact={onDeleteContact} />}
      </div>
    </StyledContactsLayout>
  );
};

ContactsLayout.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default ContactsLayout;
