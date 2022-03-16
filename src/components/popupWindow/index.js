import { useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../icon';

const PopupWindowStyle = styled.div`
  position: fixed;
  top: 8px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const PopupContent = styled.div`
  display: flex;
  padding: 10px 16px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;
  font-size: 14px;
  align-items: center;
`;

function PopupWindow(props) {
  const {
    destroy, message, msg, type,
  } = props;
  let iconConfig = {
    name: 'close-circle-sharp',
    color: 'red',
  };
  if (type === 'error') {
    iconConfig = {
      name: 'close-circle-sharp',
      color: 'red',
    };
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      destroy();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <PopupWindowStyle>
      <PopupContent>
        <Icon {...iconConfig} fontSize="18px" />
        {`${message}: ${msg}`}
      </PopupContent>
    </PopupWindowStyle>
  );
}

export default PopupWindow;
