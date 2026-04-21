import styled from "styled-components";

const LibraryStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-top: 1rem;
  /* padding: 10px; */
`;

const LibraryContent = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px 25px;
  width: 70%;
`;

export { LibraryStyle, LibraryContent };
