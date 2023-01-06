import {
  NavigationStyled,
  NavListStyled,
  NavListItemStyled,
  HeaderStyled,
  NavLinkStyled,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <HeaderStyled>
      <NavigationStyled>
        <NavListStyled>
          <NavListItemStyled>
            <NavLinkStyled to="/">🆃OP20 MOVIES</NavLinkStyled>
          </NavListItemStyled>
          <NavListItemStyled>
            <NavLinkStyled to="/tranding">🅽EXT20</NavLinkStyled>
          </NavListItemStyled>
          <NavListItemStyled>
            <NavLinkStyled to="/search">🆂EARCH</NavLinkStyled>
          </NavListItemStyled>
          <NavListItemStyled>
            <NavLinkStyled to="/movies">🅼OVIES</NavLinkStyled>
          </NavListItemStyled>
          <NavListItemStyled>
            <NavLinkStyled to="/about">🅰BOUT</NavLinkStyled>
          </NavListItemStyled>
        </NavListStyled>
      </NavigationStyled>
    </HeaderStyled>
  );
};
