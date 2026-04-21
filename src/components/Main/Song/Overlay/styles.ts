import { Link } from "react-router-dom";
import styled from "styled-components";

const OverlayStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 3%;
`;

const OverlayLink = styled(Link)``;

const OverlayPlayButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const OverlayButtons = styled.button`
  position: absolute;
  bottom: 15px;
  right: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const OverlaySmallButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export {
  OverlayStyle,
  OverlayLink,
  OverlayPlayButton,
  OverlayButtons,
  OverlaySmallButton,
};
