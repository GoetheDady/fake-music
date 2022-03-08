import React, { useState } from 'react';
import _findIndex from 'lodash/findIndex';
import { HotCategoryStyle, HotCategoryItem } from './style';

function HotCategory(props) {
  const [currendTagId, setCurrendTagId] = useState(0);
  const { list = [], changeCurrentTag } = props;

  const changeCurrenTagId = (e) => {
    const { target: { dataset: { id } } } = e;
    if (currendTagId === parseInt(id, 10)) {
      setCurrendTagId(0);
      changeCurrentTag('', 0);
    } else {
      setCurrendTagId(parseInt(id, 10));
      const currentItemIndex = _findIndex(list, (o) => o.id === parseInt(id, 10));
      const currentItem = list[currentItemIndex];
      changeCurrentTag(currentItem?.name || '', currentItemIndex + 1 || 0);
    }
  };

  return (
    <HotCategoryStyle>
      {
        list.map((item) => (
          <HotCategoryItem
            key={item.id}
            data-id={item.id}
            className={currendTagId === item.id && 'active'}
            onClick={changeCurrenTagId}
          >
            {item.name}
          </HotCategoryItem>
        ))
      }
    </HotCategoryStyle>
  );
}

export default HotCategory;
