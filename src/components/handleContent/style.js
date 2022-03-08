import styled from 'styled-components';

const HandleContentStyle = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, .1);
  border-bottom-left-radius: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  padding-left: 20px;
  font-size: 14px;
  user-select: none; 
  height: 40px;
  box-sizing: border-box;
  position: relative;
  ${(props) => props.active && 'background-color: rgba(0, 0, 0, .1);'}
  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
`;

const SpanIcon = styled.span`
  ${(props) => (props.style ? props.style : 'display: flex;align-items: center;font-size: 20px;margin-right: 8px;')}
`;

const SearchWrapper = styled.input`
  width: 160px;
  background-color: rgba(0, 0, 0, .2);
  outline: none;
  border: none;
  height: 30px;
  border-radius: 6px;
  border: 2px solid transparent;
  color: #fff;
  padding-left: 26px;
  box-sizing: border-box;
  &:focus {
    border: 2px solid grey;
  }
`;

export {
  HandleContentStyle,
  ItemWrapper,
  SpanIcon,
  SearchWrapper,
};
