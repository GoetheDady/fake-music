import React, { useEffect, useState } from 'react';
import {
  MvListStyle, MvListItem, MvListItemImg, ImgMaskWrapper, ImgMask, ItemPlayCount,
  ItemDuration,
} from './style';
import Icon from '../../../components/icon';
import { calculatePlayCount, formatDuration } from '../../../utils';

function MvList({ list }) {
  return (
    <MvListStyle>
      {
        list.map((item) => (
          <MvListItem key={item.id}>
            <ImgMaskWrapper>
              <MvListItemImg src={item.imgurl16v9} />
              <ImgMask>
                <ItemPlayCount>
                  <Icon name="play-outline" fontSize="14px" />
                  {calculatePlayCount(item.playCount)}
                </ItemPlayCount>
                <ItemDuration>{formatDuration(item.duration)}</ItemDuration>
              </ImgMask>
            </ImgMaskWrapper>
            {item.name}
          </MvListItem>
        ))
      }
    </MvListStyle>
  );
}

export default MvList;
