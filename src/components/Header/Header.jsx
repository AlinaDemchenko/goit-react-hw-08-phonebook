import { StyledHeader } from './Header.styled';
import MainNavigation from '../MainNavigation/MainNavigation';

function Header() {
  return (
    <StyledHeader>
      <MainNavigation />
    </StyledHeader>
  );
}

export default Header;