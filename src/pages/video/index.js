import { useEffect, useState } from 'react';
import { VideoStyle } from './style';
import HotCategory from './components/hotCategory';
import request from '../../api';

function Video() {
  const [categoryList, setCategoryList] = useState([]);
  const [currentTag, setCurrentTag] = useState(0);

  const getVideoList = async () => {
    const res = await request.get('/video/timeline/all', {
      // params: {
      //   id: currentTag,
      // },
    });
  };

  const init = async () => {
    // 获取视频分类
    const { data } = await request.get('/video/group/list');
    setCategoryList(data.slice(0, 9));
    getVideoList();
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getVideoList();
  }, [currentTag]);

  return (
    <VideoStyle>
      <HotCategory list={categoryList} setCurrentTag={setCurrentTag} currentTag={currentTag} />
    </VideoStyle>
  );
}

export default Video;
