import { useSelector} from 'react-redux/es/hooks/useSelector';
import Form from 'components/Form/Form';
import { StyledContactsLayout } from './ContactsLayout.styled';
import ContactList from 'components/ContactList/ContactList';
import { selectContacts,selectLoading } from 'redux/selectors';
import phone from '../../images/phone-short.png';
import vibration from '../../images/vibration.png';


const ContactsLayout = () => {
    const items = useSelector(selectContacts);
    // const isLoading = useSelector(selectLoading);
    // <span>.</span>

  return (
    <StyledContactsLayout>
      <div className='cover'>
        <img className='vibration' src={vibration} alt="vibration logo"/>
      <img src={phone} alt="phone logo"/>
        <h1>Contact
        <span>.</span>
        </h1>
        <Form/>
        {items.length > 0 && <ContactList/>}
      </div>
    </StyledContactsLayout>
  );
};

export default ContactsLayout;

