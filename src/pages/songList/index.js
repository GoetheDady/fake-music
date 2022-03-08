import React, { useState, useEffect } from 'react';
import { SongListStyle } from './style';
import request from '../../api';
import TopHighquality from './components/topHighquality';
import HotCategory from './components/hotCategory';
import SongListContent from './components/songListContent';

function SongList() {
  const [hotCategory, setHotCategory] = useState([]); // 热门歌单分类
  const [currentTag, setCurrentTag] = useState('');
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  // 获取热门歌单分类
  const getSongListCategory = async () => {
    const { tags } = await request.get('/playlist/hot');
    setHotCategory(tags);
  };

  // 更改当前分类名称
  const changeCurrentTag = (name, index) => {
    setCurrentTag(name);
    setCurrentTagIndex(index);
  };

  useEffect(() => {
    getSongListCategory();
  }, []);

  return (
    <SongListStyle>
      <TopHighquality currentTag={currentTag} currentTagIndex={currentTagIndex} />
      <HotCategory list={hotCategory} changeCurrentTag={changeCurrentTag} />
      <SongListContent currentTag={currentTag} />
    </SongListStyle>
  );
}

export default SongList;
