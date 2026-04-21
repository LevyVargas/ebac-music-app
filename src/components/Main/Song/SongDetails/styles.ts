import styled from "styled-components";

const SongDetailsStyle = styled.div`
  padding: 20px;
  background-color: #282828;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

const SongDetailsTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0px;
  font-weight: bold;
`;

const SongDetailsCover = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SongDetailsMeta = styled.p`
  font-size: ${(props) => props.theme.fonts.size.medium};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 5px;
`;

export {
  SongDetailsStyle,
  SongDetailsTitle,
  SongDetailsCover,
  SongDetailsMeta,
};
