import React, { useEffect, useState } from 'react';
import {
  MvListStyle, MvListItem, MvListItemImg, ImgMaskWrapper, ImgMask, ItemPlayCount,
  ItemDuration,
} from './style';
import Icon from '../../../components/icon';
import { calculatePlayCount, formatDuration } from '../../../utils';
import { useLazyImg } from '../../../hooks';

function MvList({ list = [] }) {
  const showList = useLazyImg(list.map((item) => item.imgurl16v9 || item.coverUrl || item.cover));
  return (
    <MvListStyle>
      {
        showList && list.map((item) => (
          <MvListItem key={item.id || item.vid}>
            <ImgMaskWrapper>
              <MvListItemImg src={item.imgurl16v9 || item.coverUrl || item.cover} />
              <ImgMask>
                {
                  item.playCount && (
                    <ItemPlayCount>
                      <Icon name="play-outline" fontSize="14px" />
                      {calculatePlayCount(item.playCount)}
                    </ItemPlayCount>
                  )
                }
                <ItemDuration>{formatDuration(item.duration || item.durationms)}</ItemDuration>
              </ImgMask>
            </ImgMaskWrapper>
            {item.name || item.title}
          </MvListItem>
        ))
      }
    </MvListStyle>
  );
}

export default MvList;
