import { StyledRegistrationForm } from './RegistrationForm.styled';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const habndlerSubmit = evt => {
    evt.preventDefault();
    navigate('/contacts', { replace: true });
  };

  return (
    <StyledRegistrationForm>
      <form onSubmit={habndlerSubmit}>
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
          <input type="email" className="email" required />
        </label>
        <label>
          <span>Password </span>
          <input type="password" minLength="6" maxLength="12" required />
        </label>
        <button type="Submit">SIGN UP</button>
        <p>
          Already have an account? <Link to="/login"> Sign in</Link>
        </p>
      </form>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
