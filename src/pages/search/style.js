import styled from 'styled-components';

export const SearchStyle = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

export const SearchTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const SearchResult = styled.div``;

export const SearchResultItem = styled.div`
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid rgba(155, 178, 210, .4);
  padding-bottom: 50px;
`;

export const ResultItemTitle = styled.div`
  margin-bottom: 20px;
`;
