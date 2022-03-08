import React, { useState, useEffect } from 'react';
import { RecommendStyle, RecommendColumn, RecommendTitle } from './style';
import BoutiqueList from './components/boutiqueList';
import NewSongList from './components/newSongList';
import DjprogramList from './components/djprogramList';
import request from '../../api';

function Recommend() {
  const [boutiqueList, setBoutiqueList] = useState([]);
  const [newSongList, setNewSongList] = useState([]);
  const [djprogramList, setDjprogramList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      request.get('/personalized?limit=6').then(({ result }) => {
        setBoutiqueList(result);
      });
      request.get('/personalized/newsong?limit=9').then(({ result }) => {
        setNewSongList(result);
      });
      request.get('/personalized/djprogram').then(({ result }) => {
        setDjprogramList(result);
      });
    };
    getList();
  }, []);

  return (
    <RecommendStyle>
      <RecommendColumn>
        <RecommendTitle>精品推荐</RecommendTitle>
        <BoutiqueList list={boutiqueList} />
      </RecommendColumn>
      <RecommendColumn>
        <RecommendTitle>新歌精选</RecommendTitle>
        <NewSongList list={newSongList} />
      </RecommendColumn>
      <RecommendColumn>
        <RecommendTitle>推荐电台</RecommendTitle>
        <DjprogramList list={djprogramList} />
      </RecommendColumn>
    </RecommendStyle>
  );
}

export default Recommend;
