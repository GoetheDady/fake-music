import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SongListContentStyle, SongListContentList, SongListContentListItem,
  ItemImgWrapper, ItemImg, ItemImgMask, ItemName, ItemPlayCount, ItemArtist,
} from './style';
import Icon from '../../../components/icon';
import request from '../../../api';
import Pagination from '../../../components/pagination';
import Loading from '../../../components/loading';
import { calculatePlayCount } from '../../../utils';

function SongListContent(props) {
  const { currentTag } = props;
  const [pageCount, setPageCount] = useState(1);
  const [currentPag, setCurrentPag] = useState(0);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]); // 歌单列表
  const navigate = useNavigate();

  const getList = async (page = 0) => {
    setLoading(true);
    const { playlists = [], total = 0 } = await request.get('/top/playlist', {
      params: {
        order: 'hot',
        limit: 20,
        cat: currentTag,
        offset: page * 20,
      },
    });
    setLoading(false);
    setCurrentPag(page);
    setPageCount(Math.ceil(total / 20));
    setList(playlists);
  };

  const handlePageClick = (e) => {
    const { selected: selectPage } = e;
    getList(selectPage);
  };

  const goDetailPage = (id) => {
    navigate(`/songListDetail/${id}`);
  };

  useEffect(() => {
    getList(0);
  }, [currentTag]);

  return (
    <SongListContentStyle>
      <SongListContentList>
        {
          loading ? <Loading /> : list.map((item) => (
            <SongListContentListItem key={item.id} onClick={() => { goDetailPage(item.id); }}>
              <ItemImgWrapper>
                <ItemImg src={item.coverImgUrl} />
                <ItemImgMask>
                  <ItemPlayCount>
                    <Icon name="play-outline" fontSize="12px" />
                    {calculatePlayCount(item.playCount)}
                  </ItemPlayCount>
                  <ItemArtist>
                    <Icon name="person-outline" fontSize="12px" />
                    {item.creator.nickname}
                  </ItemArtist>
                </ItemImgMask>
              </ItemImgWrapper>
              <ItemName>{item.name}</ItemName>
            </SongListContentListItem>
          ))
        }
      </SongListContentList>
      {
        !loading && (
          <Pagination
            currentPag={currentPag}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        )
      }
    </SongListContentStyle>
  );
}

export default SongListContent;
