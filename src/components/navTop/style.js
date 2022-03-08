import styled from 'styled-components';

const NavTopStyle = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  margin-left: 20px;
`;

const NavTopItem = styled.div`
  display: flex;
  padding: 0 15px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 100%;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
`;

const ScrollLine = styled.div`
  width: ${(props) => props.width}px;
  height: 2px;
  background-color: #fff;
  border: none;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left}px;
  transition: all .4s;
`;

export {
  NavTopStyle,
  NavTopItem,
  ScrollLine,
};
