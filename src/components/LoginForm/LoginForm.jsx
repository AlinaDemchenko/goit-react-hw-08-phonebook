import { StyledLoginForm } from './LoginForm.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginForm = ({ onLogin }) => {

  const handlerSubmit = evt => {
    evt.preventDefault();
    const userData = {
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
    };
    onLogin(userData);
    evt.currentTarget.reset();
  };

  return (
    <StyledLoginForm>
      <form onSubmit={handlerSubmit}>
        <h2>
          Login<span>.</span>
        </h2>
        <label>
          <span>Email </span>
          <input type="email" name="email" required />
        </label>
        <label className="password">
          <span>Password </span>
          <input
            type="password"
            name="password"
            minLength="6"
            maxLength="12"
            required
          />
        </label>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
        <button type="Submit">LOG IN</button>
      </form>
    </StyledLoginForm>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
