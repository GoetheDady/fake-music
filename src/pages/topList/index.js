import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  TopListStyle, TopListTitle, OfficialTopList, OfficialTopListItem, ItemImg,
  GlobalTopList, GlobalTopListItem, GlobalItemImg, ItemMask, GlobalItemMask,
  GlobalItemImgWrapper, OfficialTopListItemUpdate, GlobalItemPeople,
} from './style';
import request from '../../api';
import Icon from '../../components/icon';
import { calculatePlayCount } from '../../utils';

function TopList() {
  const [oTopList, setOTopList] = useState([]);
  const [gTopList, setGTopList] = useState([]);
  const navigate = useNavigate();

  const getList = async () => {
    const { list } = await request.get('/toplist');
    setOTopList(list.slice(0, 4));
    setGTopList(list.slice(4));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <TopListStyle>
      <TopListTitle>官方榜</TopListTitle>
      <OfficialTopList>
        {
          oTopList.map((item) => (
            <OfficialTopListItem
              key={item.id}
              onClick={() => {
                navigate(`/songListDetail/${item.id}`);
              }}
            >
              <ItemImg src={item.coverImgUrl} />
              <OfficialTopListItemUpdate>
                {dayjs(item.updateTime).format('MM月DD日更新')}
              </OfficialTopListItemUpdate>
              <ItemMask />
            </OfficialTopListItem>
          ))
        }
      </OfficialTopList>
      <TopListTitle>全球榜</TopListTitle>
      <GlobalTopList>
        {
          gTopList.map((item) => (
            <GlobalTopListItem
              key={item.id}
              onClick={() => {
                navigate(`/songListDetail/${item.id}`);
              }}
            >
              <GlobalItemImgWrapper>
                <GlobalItemImg src={item.coverImgUrl} />
                <GlobalItemMask>
                  <GlobalItemPeople>
                    <Icon name="play-outline" fontSize="14px" />
                    {calculatePlayCount(item.playCount)}
                  </GlobalItemPeople>
                </GlobalItemMask>
              </GlobalItemImgWrapper>
              {item.name}
            </GlobalTopListItem>
          ))
        }
      </GlobalTopList>
    </TopListStyle>
  );
}

export default TopList;
