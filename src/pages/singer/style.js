import styled from 'styled-components';

export const SingerStyle = styled.div`
  width: 100%;
  padding: 30px;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

export const BottomLoading = styled.div`
  position: relative;
  height: 40px;
`;
