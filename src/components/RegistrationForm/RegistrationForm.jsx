import { StyledRegistrationForm } from './RegistrationForm.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegistrationForm = ({ onRegister }) => {
  const handlerSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name: evt.currentTarget.name.value,
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
    };
    onRegister(newUser);
    evt.currentTarget.reset();
  };

  return (
    <StyledRegistrationForm>
      <form onSubmit={handlerSubmit}>
        <h2>
          Registration<span>.</span>
        </h2>
        <label>
          <span>Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autoFocus
            minLength="2"
            className="name"
            required
          />
        </label>
        <label>
          <span>Email </span>
          <input type="email" name="email" className="email" required />
        </label>
        <label>
          <span>Password </span>
          <input
            type="password"
            name="password"
            minLength="6"
            maxLength="12"
            required
          />
        </label>
        <button type="Submit">SIGN UP</button>
        <p>
          Already have an account? <Link to="/login"> Sign in</Link>
        </p>
      </form>
    </StyledRegistrationForm>
  );
};

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
