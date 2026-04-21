import styled from "styled-components";

const AppStyle = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgroundFont};
  color: ${(props) => props.theme.colors.primary};
`;
 export default AppStyle;