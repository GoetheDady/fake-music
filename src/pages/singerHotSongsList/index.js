import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import request from '../../api';
import List from '../../components/list';

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  overflow: auto;
`;

function SingerHotSongsList() {
  const params = useParams();
  const [hotList, setHotList] = useState([]);

  const getList = async () => {
    const { id } = params;
    const { hotSongs } = await request.get(`/artists?id=${id}`);
    setHotList(hotSongs);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Wrapper>
      <List list={hotList} />
    </Wrapper>
  );
}

export default SingerHotSongsList;
