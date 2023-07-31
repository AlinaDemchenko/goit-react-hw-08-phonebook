import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { useSpring, animated } from 'react-spring';

const Contact = ({ contactItemData, index }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const spring = useSpring({
    from: { opacity: 0, transform: 'perspective(400px) rotateX(90deg)' },
    to: { opacity: 1, transform: 'perspective(400px) rotateX(0deg)' },
    config: { duration: 100, mass: 1, tension: 280, friction: 20 },
    delay: index * 100,
  });
  return (
    <animated.div style={spring}>
      <StyledContact>
        <a href={`tel:+${contactItemData.number}`}>
          <p>
            <span>●</span>
            {contactItemData.name}: {contactItemData.number}
          </p>
        </a>
        <button
          type="button"
          onClick={() => onDeleteContact(contactItemData.id)}
        >
          {/* &#10006; */}✕
        </button>
      </StyledContact>
    </animated.div>
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
