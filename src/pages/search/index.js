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
      { result: { artists } },
      { result: { albums } },
      { result: { songs } },
      { result: { playlists } },
      { result: { videos } },
    ] = await Promise.all([
      getSearchData(100, 10),
      getSearchData(10, 10),
      getSearchData(1, 9),
      getSearchData(1000, 10),
      getSearchData(1014, 10),
    ]);
    // console.log(res);
    dispatch({
      type: constants.SET_ALL_DATA,
      payload: {
        searchSinger: artists,
        searchAlbum: albums,
        searchSongs: songs,
        searchSongsList: playlists,
        searchMvList: videos,
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
              <SearchResultItem>
                <ResultItemTitle>艺人</ResultItemTitle>
                <SingerList list={searchSinger} />
              </SearchResultItem>
              <SearchResultItem>
                <ResultItemTitle>专辑</ResultItemTitle>
                <AlbumList list={searchAlbum} type="singer" length={10} />
              </SearchResultItem>
              <SearchResultItem>
                <ResultItemTitle>歌曲</ResultItemTitle>
                <NewSongList list={searchSongs} type="singer" />
              </SearchResultItem>
              <SearchResultItem>
                <ResultItemTitle>歌单</ResultItemTitle>
                <BoutiqueList list={searchSongsList} length={10} />
              </SearchResultItem>
              <SearchResultItem>
                <ResultItemTitle>视频</ResultItemTitle>
                <MvList list={searchMvList} />
              </SearchResultItem>
            </SearchResult>
          ) : (
            <HotSearch list={hotSearch} />
          )
      }
    </SearchStyle>
  );
}

export default Search;
