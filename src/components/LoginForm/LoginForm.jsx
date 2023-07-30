import { StyledLoginForm } from './LoginForm.styled';
import { Link } from 'react-router-dom';
import user from '../../images/userIcon.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const habndlerSubmit = evt => {
    evt.preventDefault();
    navigate('/contacts', { replace: true });
  };

  return (
    <StyledLoginForm>
      <form onSubmit={habndlerSubmit}>
        <h2>
          Login<span>.</span>
        </h2>
        <img src={user} alt="icon" />
        <label>
          <span>Email </span>
          <input type="email" required />
        </label>
        <label className="password">
          <span>Password </span>
          <input type="password" minLength="6" maxLength="12" required />
        </label>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
        <button type="Submit">LOG IN</button>
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
