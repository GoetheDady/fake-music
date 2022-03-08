import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchStyle, SearchTitle } from './style';
import request from '../../api';
import HotSearch from './components/hotSearch';

function Search() {
  const state = useSelector((data) => data.SearchStore);
  const [hotSearch, setHotSearch] = useState([]);
  const getData = () => {
    request.get('/search/hot/detail').then(({ data }) => {
      setHotSearch(data);
    });
    // request.get('/search/multimatch?keywords=陈奕迅');
    // request.get('/cloudsearch?keywords=陈奕迅');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SearchStyle>
      <SearchTitle>
        搜索
        {state.keywords}
      </SearchTitle>
      <HotSearch list={hotSearch} />
    </SearchStyle>
  );
}

export default Search;
