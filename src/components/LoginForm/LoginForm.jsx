import { StyledLoginForm } from './LoginForm.styled';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <form>
        <h2>Login</h2>
        <label>
          <span>Email </span>
          <input type="email" required />
        </label>
        <label>
          <span>Password </span>
          <input type="password" minLength="6" maxLength="12" required />
        </label>
        <button type="Submit">SIGN UP</button>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
