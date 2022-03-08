import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import _find from 'lodash/find';
import { NavTopStyle, NavTopItem, ScrollLine } from './style';

const navTopList = [{
  id: 0,
  title: '个性推荐',
  url: '/',
}, {
  id: 1,
  title: '歌单',
  url: '/songList',
}, {
  id: 2,
  title: '排行榜',
  url: '/rankingList',
}, {
  id: 3,
  title: '歌手',
  url: '/singer',
}];

const lineWidth = [94, 63, 77, 63];

function NavTop() {
  const [navNum, setNavNum] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const changeNavNum = (e) => {
    const { target: { dataset: { index } } } = e;
    setNavNum(parseInt(index, 10));
    navigate(navTopList[index].url);
  };

  const calculateLineLeft = () => {
    const arr = lineWidth.slice(0, navNum);
    let left = 0;
    if (arr.length > 0) {
      left = arr.reduce((n, c) => n + c);
    }
    return left;
  };
  useEffect(() => {
    const urlObj = _find(navTopList, (o) => o.url === location.pathname);
    if (urlObj) {
      setNavNum(urlObj?.id || 0);
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location]);

  return showNav && (
    <NavTopStyle>
      {
        navTopList.map((item) => (
          <NavTopItem
            key={item.id}
            data-index={item.id}
            onClick={changeNavNum}
          >
            {item.title}
          </NavTopItem>
        ))
      }
      <ScrollLine width={lineWidth[navNum]} left={calculateLineLeft()} />
    </NavTopStyle>
  );
}

export default NavTop;
