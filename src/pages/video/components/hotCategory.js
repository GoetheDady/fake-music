import { useState } from 'react';
import styled from 'styled-components';
import _findIndex from 'lodash/findIndex';

const HotCategoryStyle = styled.div`
  width: 100%;
  display: flex;
`;

const HotCategoryItem = styled.div`
  display: flex;
  font-size: 12px;
  padding: 0 15px;
  cursor: default;
  user-select: none;
  height: 20px;
  background-color: rgba(155, 178, 210, .2);
  align-items: center;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  &:hover {
    background-color: rgba(155, 178, 210, .6);
  }
  &.active {
    background-color: rgba(155, 178, 210, .6);
  }
`;

function HotCategory(props) {
  const { list = [], setCurrentTag, currentTag } = props;

  return (
    <HotCategoryStyle>
      {
        list.map((item) => (
          <HotCategoryItem
            key={item.id}
            data-id={item.id}
            className={currentTag === item.id && 'active'}
            onClick={() => { setCurrentTag(item.id); }}
          >
            {item.name}
          </HotCategoryItem>
        ))
      }
    </HotCategoryStyle>
  );
}

export default HotCategory;
