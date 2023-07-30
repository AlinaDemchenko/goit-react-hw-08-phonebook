import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';

const Contact = ({ contactItemData}) => {
      const dispatch = useDispatch();

    const onDeleteContact = id => {
      dispatch(deleteContactThunk(id));
    };

  return (
    <StyledContact>
      <a href={`tel:+${contactItemData.number}`}>
      <p>
      <span>●</span>
        {contactItemData.name}: {contactItemData.number}
      </p>
      </a>
      <button type="button" onClick={() => onDeleteContact(contactItemData.id)}>
      {/* &#10006; */}
      ✕
      </button>
    </StyledContact>
  );
};

Contact.propTypes = {
  contactItemData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
