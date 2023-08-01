import { StyledForm } from './Form.styled';
import { toast } from 'react-toastify';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

const Form = () => {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };
    const checkedContact = items.find(
      contact => newContact.name === contact.name
    );
    if (checkedContact) {
      toast.info(`${newContact.name} is already in your contacts`);
      return;
    } else {
      dispatch(addContactThunk(newContact));
    }
    evt.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        className="name"
        type="text"
        name="name"
        placeholder="new contact name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        placeholder="number"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">
        <span>✕</span>
      </button>
    </StyledForm>
  );
};

export default Form;
