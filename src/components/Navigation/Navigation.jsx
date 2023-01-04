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
            <NavLinkStyled to="/tranding">🆃RANDING</NavLinkStyled>
          </NavListItemStyled>
          <NavListItemStyled>
            <NavLinkStyled to="/movies">🅼OVIES</NavLinkStyled>
          </NavListItemStyled>
        </NavListStyled>
      </NavigationStyled>
    </HeaderStyled>
  );
};
