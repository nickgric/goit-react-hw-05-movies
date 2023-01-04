import { SectionStyled, SectionTitleStyled } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      {title && <SectionTitleStyled>{title}</SectionTitleStyled>}
      {children}
    </SectionStyled>
  );
};
