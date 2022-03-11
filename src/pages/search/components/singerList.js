import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLazyImg } from '../../../hooks';

const ListStyle = styled.div`
  display: grid;
  grid-column-gap: 20px;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  grid-template-columns: repeat(${(props) => props.length}, 120px);
  scrollbar-width: none;
  position: relative;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ListAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  object-fit: cover;
`;

const ListName = styled.div`
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function SingerList({ list = [] }) {
  const showList = useLazyImg(list.map((item) => item.img1v1Url || item.avatarUrl));
  return (
    <ListStyle length={list.length}>
      {
        showList && list.map((item) => (
          <ListItem key={item.id || item.userId}>
            <ListAvatar src={item.img1v1Url || item.avatarUrl} />
            <ListName>
              {item.name || item.nickname}
            </ListName>
          </ListItem>
        ))
      }
    </ListStyle>
  );
}

export default SingerList;
