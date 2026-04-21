import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  padding: 10px;
  min-width: 1000px;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const HeaderCarousel = styled.div`
  width: 1240px;
  height: 500px;
  max-width: 1240px;
  max-height: 500px;
  min-width: 1000px;
  min-height: 500px;
`;

const HeaderCarouselImg = styled.img`
  object-fit: cover;
  height: 500px;
`;

export { HeaderStyle, HeaderLink, HeaderTitle, HeaderCarousel, HeaderCarouselImg };
