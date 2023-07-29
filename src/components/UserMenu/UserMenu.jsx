import { useDispatch } from 'react-redux';
import { StyledUserMenu } from './UserMenu.styled';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

export const UserMenu = () => {
    const dispatch = useDispatch();
    // const { user } = useAuth();

    return (
        <StyledUserMenu>
          <p>Welcome</p>
          <button type="button">
             {/* onClick={() => dispatch(logOut())} */}
            Logout
          </button>
          </StyledUserMenu>
      );
    };