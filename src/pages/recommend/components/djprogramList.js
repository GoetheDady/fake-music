import { useEffect, useState } from 'react';
import {
  DjprogramListStyle, DjprogramItem, DjprogramItemImgWrapper,
  DjprogramItemImg, DjprogramItemDesc, DjprogramItemSongName,
  DjprogramItemDjDesc, DjprogramItemImgMask,
} from './style';
import Loading from '../../../components/loading';
import { useLazyImg } from '../../../hooks';

function DjprogramList(props) {
  const { list = [], type = '', length = 6 } = props;
  const showList = useLazyImg(list.map((item) => (type === 'singer' ? item.blurPicUrl : item.picUrl)));
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
        showList && list.length !== 0 ? list.map((item) => (
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
        )) : <Loading />
      }
    </DjprogramListStyle>
  );
}

export default DjprogramList;
