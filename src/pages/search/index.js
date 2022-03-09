import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SearchStyle, SearchTitle, SearchResult, SearchResultItem, ResultItemTitle,
} from './style';
import request from '../../api';
import HotSearch from './components/hotSearch';
import SingerList from './components/singerList';
import AlbumList from '../recommend/components/djprogramList';
import NewSongList from '../recommend/components/newSongList';
import BoutiqueList from '../recommend/components/boutiqueList';
import MvList from '../singerDetail/components/mvList';
import { constants } from './store';

function Search() {
  const {
    beginSearch, keywords, hotSearch, searchSinger, haveData,
    searchAlbum, searchSongs, searchSongsList, searchMvList,
    searchVideo, searchRadio, searchUser,
  } = useSelector((data) => data.SearchStore);
  const dispatch = useDispatch();

  const getData = () => {
    request.get('/search/hot/detail').then(({ data }) => {
      dispatch({
        type: constants.SET_HOT_SEARCH,
        payload: data,
      });
    });
  };

  const getSearchData = (type, limit, offset = 0) => request.get('/cloudsearch', {
    params: {
      keywords,
      type,
      limit,
      offset,
    },
  });

  const getAllData = async () => {
    // console.log('开始请求');
    const [
      { result: { artists } }, // 歌手
      { result: { albums } }, // 专辑
      { result: { songs } }, // 单曲
      { result: { playlists } }, // 歌单
      { result: { videos } }, // 视频
      { result: { djRadios } }, // 电台
      { result: { mvs } },
      { result: { userprofiles } },
    ] = await Promise.all([
      getSearchData(100, 10), // 歌手
      getSearchData(10, 10), // 专辑
      getSearchData(1, 9), // 单曲
      getSearchData(1000, 10), // 歌单
      getSearchData(1014, 10), // 视频
      getSearchData(1009, 10), // 电台
      getSearchData(1004, 10), // mv
      getSearchData(1002, 10), // 用户
    ]);
    dispatch({
      type: constants.SET_ALL_DATA,
      payload: {
        searchSinger: artists,
        searchAlbum: albums,
        searchSongs: songs,
        searchSongsList: playlists,
        searchMvList: mvs,
        searchRadio: djRadios,
        searchVideo: videos,
        searchUser: userprofiles,
      },
    });
    dispatch({
      type: constants.BEGIN_SEARCH,
      payload: false,
    });
  };

  useEffect(() => {
    if (beginSearch) {
      getAllData();
    }
  }, [beginSearch]);

  // 初始化获取热门搜索
  useEffect(() => {
    getData();
  }, []);

  return (
    <SearchStyle>
      <SearchTitle>
        搜索
      </SearchTitle>
      {
        haveData
          ? (
            <SearchResult>
              正在显示搜索的“
              {keywords}
              ”
              {
                searchSinger.length !== 0 && (
                <SearchResultItem>
                  <ResultItemTitle>艺人</ResultItemTitle>
                  <SingerList list={searchSinger} />
                </SearchResultItem>
                )
              }
              {
                searchAlbum.length !== 0 && (
                  <SearchResultItem>
                    <ResultItemTitle>专辑</ResultItemTitle>
                    <AlbumList list={searchAlbum} type="singer" length={10} />
                  </SearchResultItem>
                )
              }
              {
                searchSongs.length !== 0 && (
                <SearchResultItem>
                  <ResultItemTitle>歌曲</ResultItemTitle>
                  <NewSongList list={searchSongs} type="singer" />
                </SearchResultItem>
                )
              }
              {
                searchSongsList.length !== 0 && (
                <SearchResultItem>
                  <ResultItemTitle>歌单</ResultItemTitle>
                  <BoutiqueList list={searchSongsList} length={10} />
                </SearchResultItem>
                )
              }
              {
                searchMvList.length !== 0 && (
                  <SearchResultItem>
                    <ResultItemTitle>MV</ResultItemTitle>
                    <MvList list={searchMvList} />
                  </SearchResultItem>
                )
              }
              {
                searchVideo.length !== 0 && (
                  <SearchResultItem>
                    <ResultItemTitle>视频</ResultItemTitle>
                    <MvList list={searchVideo} />
                  </SearchResultItem>
                )
              }
              {
                searchAlbum.searchRadio !== 0 && (
                  <SearchResultItem>
                    <ResultItemTitle>电台</ResultItemTitle>
                    <AlbumList list={searchRadio} type="radio" length={10} />
                  </SearchResultItem>
                )
              }
              {
                searchUser.length !== 0 && (
                <SearchResultItem>
                  <ResultItemTitle>用户</ResultItemTitle>
                  <SingerList list={searchUser} />
                </SearchResultItem>
                )
              }
            </SearchResult>
          ) : (
            <HotSearch list={hotSearch} />
          )
      }
    </SearchStyle>
  );
}

export default Search;
