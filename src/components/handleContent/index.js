/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import _find from 'lodash/find';
import { useSelector, useDispatch } from 'react-redux';
import {
  HandleContentStyle, ItemWrapper, SpanIcon, SearchWrapper,
} from './style';
import { constants as reducerConstants } from '../../pages/search/store';

const searchStyle = {
  position: 'absolute',
  left: '25px',
  top: '10px',
  fontSize: '18px',
};

const handleList = [{
  id: 0,
  title: '发现音乐',
  icon: 'musical-note-outline',
  url: '/',
}, {
  id: 1,
  title: '看视频',
  icon: 'videocam-outline',
  url: '/video',
}, {
  id: 2,
  title: '朋友',
  icon: 'people-outline',
  url: '/frieds',
}, {
  id: 666,
  url: '/search',
}];

function HandleContent() {
  const { keywords } = useSelector((state) => state.SearchStore);
  const dispatch = useDispatch();
  const [activeNum, setActiveNum] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const changeActiveNum = (e) => {
    const { target: { dataset: { index, url } } } = e;
    setActiveNum(parseInt(index, 10));
    navigate(url);
  };

  useEffect(() => {
    let urlObj = _find(handleList, (o) => o.url === location.pathname);
    if (!urlObj) {
      if (location.pathname === '/songList'
        || location.pathname === '/rankingList'
        || location.pathname === '/singer'
      ) {
        [urlObj] = handleList;
      }
    }
    setActiveNum(urlObj?.id || 0);
  }, [location]);

  return (
    <HandleContentStyle>
      <ItemWrapper
        padding="5px"
        active={activeNum === 666}
        onClick={() => {
          setActiveNum(666);
          navigate('/search');
        }}
      >
        <SearchWrapper
          value={keywords}
          onChange={(e) => {
            const { target: { value } } = e;
            dispatch({ type: reducerConstants.CHANGE_KEYWORDS, payload: value });
          }}
        />
        <SpanIcon style={searchStyle}>
          <ion-icon name="search-outline" />
        </SpanIcon>
      </ItemWrapper>
      {
        handleList.slice(0, 3).map((item) => (
          <ItemWrapper
            key={item.id}
            active={activeNum === item.id}
            data-index={item.id}
            data-url={item.url}
            onClick={changeActiveNum}
          >
            <SpanIcon>
              <ion-icon name={item.icon} />
            </SpanIcon>
            {item.title}
          </ItemWrapper>
        ))
      }
    </HandleContentStyle>
  );
}

export default HandleContent;
