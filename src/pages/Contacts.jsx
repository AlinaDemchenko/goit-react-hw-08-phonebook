import ContactsLayout from 'components/ContactsLayout/ContactsLayout';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  getContactsThunk,
  deleteContactThunk,
  addContactThunk,
  logOutThunk,
} from 'redux/operations';
import { setFilter } from 'redux/Slice/contactsSlice';

const Contacts = () => {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
    //     .unwrap().catch((error)=>{toast.error(error.message); })
  }, [dispatch]);

  const onFilter = filterData => {
    dispatch(setFilter(filterData));
  };

  const onLogout = () => {
    dispatch(logOutThunk());
  };

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const onAddContact = newContact => {
    const checkedContact = items.find(
      contact => newContact.name === contact.name
    );
    if (checkedContact) {
      toast.info(`${newContact.name} is already in your contacts`);
      return;
    } else {
      dispatch(addContactThunk(newContact));
    }
  };

  return (
    <main>
      <ContactsLayout
        onDeleteContact={onDeleteContact}
        onAddContact={onAddContact}
        onLogout={onLogout}
        onFilter={onFilter}
      />
    </main>
  );
};

export default Contacts;
