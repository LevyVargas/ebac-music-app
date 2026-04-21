import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  min-width: 1000px;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
  justify-content: center;
  padding: 50px 0px;
  align-items: center;
`;

const FooterTitle = styled.p`
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: 2.0rem;
`;

const FooterText = styled.p`
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${(props) => props.theme.fonts.size.medium};
`;

const FooterButton = styled.button`
  width: 40%;
  height: 50px;
  min-width: 150px;
  border-radius: 5px;
  border: none;
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${(props) => props.theme.fonts.size.medium};
  margin: 10px;
  cursor: pointer;
  background-color: ${props => props.primary ? props.theme.colors.secondary : props.theme.colors.background};
  color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
    color: ${props => props.primary ? props.theme.colors.secondary : props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`;

const FooterSingIn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const FooterSingInAsk= styled.p`
  font-weight: ${props => props.theme.fonts.weight.light};
  font-size: ${(props) => props.theme.fonts.size.small};
`;

const FooterSingInText = styled.p`
  font-weight: ${props => props.theme.fonts.weight.medium};
  font-size: ${(props) => props.theme.fonts.size.medium};
  cursor: pointer;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 50px 0px;
`;

const FooterLink = styled.a`
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${(props) => props.theme.fonts.size.small};
  text-decoration: none;
  color: white;
`;

export {
  FooterStyle,
  FooterInfo,
  FooterButton,
  FooterSingIn,
  FooterText,
  FooterSingInText,
  FooterSingInAsk,
  FooterLinks,
  FooterLink,
  FooterTitle
};
