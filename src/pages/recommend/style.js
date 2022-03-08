import styled from 'styled-components';

const RecommendStyle = styled.div`
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

const RecommendColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 20px;
`;

const RecommendTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export {
  RecommendStyle,
  RecommendColumn,
  RecommendTitle,
};
