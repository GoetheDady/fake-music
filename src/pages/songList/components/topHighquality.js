import React, { useState, useEffect } from 'react';
import {
  TopHighqualityStyle, TopHighqualityBlur, TopHighqualityImg, TopHighqualityDesc,
  TopHighqualityBtn, TopHighqualityName, TopHighqualityInfo, TopHighqualitySpan,
} from './style';
import request from '../../../api';

function TopHighquality(props) {
  const { currentTagIndex } = props;
  const [topHighquality, setTopHighquality] = useState([]); // 顶部精品歌单

  // 获取顶部的一个精品歌单
  const getHighquality = async () => {
    const { playlists = [] } = await request.get('/top/playlist/highquality?limit=11');
    setTopHighquality(playlists);
  };

  useEffect(() => {
    getHighquality();
  }, []);

  return topHighquality.length !== 0 && (
    <TopHighqualityStyle background={topHighquality[currentTagIndex].coverImgUrl}>
      <TopHighqualityBlur>
        <TopHighqualityImg src={topHighquality[currentTagIndex].coverImgUrl} />
        <TopHighqualityDesc>
          <TopHighqualityBtn>
            <TopHighqualitySpan>
              <ion-icon name="diamond" />
            </TopHighqualitySpan>
            精品歌单
          </TopHighqualityBtn>
          <TopHighqualityName>{topHighquality[currentTagIndex].name}</TopHighqualityName>
          <TopHighqualityInfo>{topHighquality[currentTagIndex].copywriter}</TopHighqualityInfo>
        </TopHighqualityDesc>
      </TopHighqualityBlur>
    </TopHighqualityStyle>
  );
}

export default TopHighquality;
