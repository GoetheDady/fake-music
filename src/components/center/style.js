import styled from 'styled-components';

const CenterWrapper = styled.div`
  width: 1220px;
  height: 720px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  box-shadow: 0 0 10px black;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: ${(props) => props.direction || 'row'};
  overflow: hidden;
  position: relative;
`;

const SiderWrapper = styled.div`
  width: 200px;
  height: 100%;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, .1);
  border-top-right-radius: 10px;
  justify-content: center;
  position: relative;
`;

export {
  CenterWrapper,
  ContentWrapper,
  SiderWrapper,
  ContentHeader,
};
