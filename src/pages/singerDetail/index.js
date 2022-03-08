import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  SingerDetailStyle, SingerDetailTop, SingerDetailAvatar, SingerDetailBottom,
  DetailBottomTitle, DetailBottomSubTitle, DetailAvatarBottom,
} from './style';
import request from '../../api';
import NewSongList from '../recommend/components/newSongList';
import AlbumList from '../recommend/components/djprogramList';
import MvList from './components/mvList';
import SingerDesc from './components/singerDesc';
import Icon from '../../components/icon';

function SingDetail() {
  const params = useParams();
  const [detail, setDetail] = useState({});
  const [topSongs, setTopSongs] = useState([]);
  const [hotAlbum, setHotAlbum] = useState([]);
  const [mvList, setMvList] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    const { id } = params;
    // 获取歌手信息
    request.get(`/artists?id=${id}`).then(({ artist, hotSongs }) => {
      setDetail(artist);
      setTopSongs(hotSongs.slice(0, 9));
    });
    // 获取歌手专辑
    request.get('/artist/album', { params: { id, limit: 10 } }).then(({ hotAlbums }) => {
      setHotAlbum(hotAlbums);
    });
    // 获取歌手mv
    request.get('/artist/mv', { params: { id, limit: 10 } }).then(({ mvs }) => {
      setMvList(mvs);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SingerDetailStyle>
      <SingerDetailTop>
        <SingerDetailAvatar src={detail.picUrl} />
        <DetailAvatarBottom>
          <Icon name="play-circle" fontSize="40px" />
          {detail.name}
        </DetailAvatarBottom>
      </SingerDetailTop>
      <SingerDetailBottom>
        <DetailBottomTitle>
          热门歌曲
          <DetailBottomSubTitle onClick={() => { navigate(`/singerHotSongsList/${params.id}`); }}>显示全部</DetailBottomSubTitle>
        </DetailBottomTitle>
        <NewSongList list={topSongs} type="singer" />
        <DetailBottomTitle>
          专辑
          <DetailBottomSubTitle>显示全部</DetailBottomSubTitle>
        </DetailBottomTitle>
        <AlbumList list={hotAlbum} type="singer" length={10} />
        <DetailBottomTitle>
          热门视频
          <DetailBottomSubTitle>显示全部</DetailBottomSubTitle>
        </DetailBottomTitle>
        <MvList list={mvList} />
      </SingerDetailBottom>
      <SingerDesc artics={detail} />
    </SingerDetailStyle>
  );
}

export default SingDetail;
