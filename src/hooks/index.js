import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function withRouter(Target) {
  // eslint-disable-next-line func-names
  return function (props) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    return <Target location={location} params={params} navigate={navigate} />;
  };
}

export function useLazyImg(imgList) {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (imgList.length !== 0) {
      const promiseImg = imgList.map((item) => new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          img.onload = null;
          resolve(img);
        };
        img.error = () => {
          reject(new Error('图片加载失败'));
        };
        img.src = item;
      }));
      Promise.all(promiseImg).then((res) => {
        setShowList(true);
      });
    }
  }, [imgList]);
  return imgList.length === 0 ? false : showList;
}
