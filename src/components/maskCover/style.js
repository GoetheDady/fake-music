import styled from 'styled-components';
import _forIn from 'lodash/forIn';

export const MaskCoverStyle = styled.div`
  ${(props) => {
    let options = '';
    _forIn(props, (value, key) => {
      if (key !== 'children' && key !== 'theme') {
        options += `${key}:${value};`;
      }
    });
    return options;
  }}
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`;
export const Mask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: all .5s;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent, rgba(0, 0, 0, 0.4));
`;
