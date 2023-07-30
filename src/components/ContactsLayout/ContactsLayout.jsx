import Form from 'components/Form/Form';
import { StyledContactsLayout } from './ContactsLayout.styled';

const ContactsLayout = () => {
  return (
    <StyledContactsLayout>
      <div>
        <Form/>
        <ContactsLayout/>
      </div>
    </StyledContactsLayout>
  );
};

export default ContactsLayout;

