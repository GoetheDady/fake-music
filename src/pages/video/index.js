import { useEffect } from 'react';
import { VideoStyle } from './style';
import HotCategory from './components/hotCategory';
import request from '../../api';

function Video() {
  useEffect(() => {
    request.get('/video/category/list').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <VideoStyle>
      <HotCategory />
    </VideoStyle>
  );
}

export default Video;
