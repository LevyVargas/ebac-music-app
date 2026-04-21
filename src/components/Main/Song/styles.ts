import { Link } from "react-router-dom";
import styled from "styled-components";

const SongStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SongImageWrapper = styled.div`
  position: relative;
  width: 185px;
  height: 185px;
  overflow: hidden;

  &:hover .cover_image--overlay {
    opacity: 1;
  }
`;

const SongImage = styled.img`
  width: 185px;
  height: 185px;
  object-fit: cover;
  border-radius: 3%;
  cursor: pointer;
  display: block;
`;

const SongInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100px;
  width: 200px;
`;

const SongLink = styled(Link)`
  font-weight: ${props => props.theme.fonts.weight.bold};
  cursor: pointer;
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.size.medium};
  color: ${(props) => props.theme.colors.primary};
`;

const SongArtist = styled.a`
  font-weight: ${props => props.theme.fonts.weight.bold};
  cursor: pointer;
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.size.small};
  color: gray;
`;

const SongAlbum = styled.a`
  font-weight: ${props => props.theme.fonts.weight.bold};
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  color: gray;
`;

export {
  SongStyle,
  SongImageWrapper,
  SongImage,
  SongInfo,
  SongArtist,
  SongAlbum,
  SongLink,
};
