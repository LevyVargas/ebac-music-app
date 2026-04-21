import styled from "styled-components";

const SearchResultsStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-top: 1rem;
  /* padding: 10px; */
`;

const SearchResultsContent = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px 25px;
  width: 70%;
`;

export { SearchResultsStyle, SearchResultsContent };
