import { useEffect, useState } from 'react';
import {
  DjprogramListStyle, DjprogramItem, DjprogramItemImgWrapper,
  DjprogramItemImg, DjprogramItemDesc, DjprogramItemSongName,
  DjprogramItemDjDesc, DjprogramItemImgMask,
} from './style';

function DjprogramList(props) {
  const {
    list = [], type = '', length = 6,
  } = props;
  const djDesc = (item) => {
    switch (type) {
      case 'singer':
        return item.desciption;
      case 'radio':
        return item.dj.nickname;
      default:
        return item.program.dj.nickname;
    }
  };
  return (
    <DjprogramListStyle height="228px" length={length}>
      {
        list.map((item) => (
          <DjprogramItem key={item.id}>
            <DjprogramItemImgWrapper>
              <DjprogramItemImg src={type === 'singer' ? item.blurPicUrl : item.picUrl} />
              <DjprogramItemImgMask />
            </DjprogramItemImgWrapper>
            <DjprogramItemDesc>
              <DjprogramItemSongName>{item.name}</DjprogramItemSongName>
              <DjprogramItemDjDesc>
                {djDesc(item)}
              </DjprogramItemDjDesc>
            </DjprogramItemDesc>
          </DjprogramItem>
        ))
      }
    </DjprogramListStyle>
  );
}

export default DjprogramList;
