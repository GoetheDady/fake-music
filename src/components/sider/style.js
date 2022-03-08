import styled from 'styled-components';

const SiderStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SiderHeader = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  height: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, .3);
  border-top-left-radius: 10px;
  text-align: left;
`;

const SpanIcon = styled.span`
  cursor: pointer;
  font-size: 25px;
  margin: 0 5px;
  &:active {
    color: grey;
  }
`;

export {
  SiderStyle,
  SiderHeader,
  SpanIcon,
};
