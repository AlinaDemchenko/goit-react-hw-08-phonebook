import { StyledNavLink, StyledMainNavigation } from "./MainNavigation.styled";

function MainNavigation() {
  return (
    <StyledMainNavigation>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </StyledMainNavigation>
  );
}

export default MainNavigation;