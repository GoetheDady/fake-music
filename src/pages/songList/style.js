import styled from 'styled-components';

const SongListStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-bottom: 0;
  overflow: hidden;
  box-sizing: border-box;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const TopHighquality = styled.div``;

export {
  SongListStyle,
  TopHighquality,
};
