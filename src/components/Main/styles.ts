import { Link } from "react-router-dom";
import styled from "styled-components";

const MainStyle = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  /* padding: 10px; */
`;

const MainSearch = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const MainSearchOptions = styled.section`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  gap: 10px;
`;

const MainSearchForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: center;
  position: relative;
`;

const MainSearchInput = styled.input`
  width: 600px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: ${props => props.theme.fonts.weight.normal};
`;

const MainSearchButton = styled.button`
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  position: absolute;
  right: 10px;
`;

const MainSearchIcon = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  border: none;
`;

const MainOptions = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

const MainOptionsText = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: ${props => props.theme.fonts.weight.medium};
  margin: 10px;
`;

const MainOptionsButton = styled.button`
  border: none;
  padding: 15px 20px;
  border-radius: 3px;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${props => props.theme.fonts.weight.bold};
`;

const MainOptionsLink = styled(Link)``;

const MainText = styled.p`
  color: white;
  font-size: 1.3rem;
  font-weight: ${props => props.theme.fonts.weight.bold};
`;

export {
  MainStyle,
  MainSearch,
  MainSearchOptions,
  MainSearchForm,
  MainSearchInput,
  MainSearchButton,
  MainSearchIcon,
  MainOptions,
  MainOptionsText,
  MainOptionsButton,
  MainOptionsLink,
  MainText,
};
